use std::io::Write;

/// PoC debug bridge: JS calls `invoke('log_console', {level, msg})` to append
/// browser console output into a file the dev can tail from the CLI.
#[tauri::command]
fn log_console(level: String, msg: String) {
  // Write to %TEMP% so the file sits outside Tauri's watched frontendDist tree;
  // logging next to the source would trigger an infinite reload loop.
  let path = std::env::temp_dir().join("newdtw_webview_console.log");
  if let Ok(mut f) = std::fs::OpenOptions::new()
    .create(true)
    .append(true)
    .open(&path)
  {
    let _ = writeln!(f, "[{}] {}", level, msg);
  }
}

// Injected into every page load; forwards console.* + window.onerror to Rust.
const CONSOLE_BRIDGE_JS: &str = r#"
(function () {
  if (window.__consoleBridgeInstalled) return;
  window.__consoleBridgeInstalled = true;
  const invoke = (window.__TAURI_INTERNALS__ && window.__TAURI_INTERNALS__.invoke)
    ? window.__TAURI_INTERNALS__.invoke
    : null;
  if (!invoke) return;
  const serialize = (args) => args.map(a => {
    if (a instanceof Error) return a.stack || (a.name + ': ' + a.message);
    if (typeof a === 'object') { try { return JSON.stringify(a); } catch (e) { return String(a); } }
    return String(a);
  }).join(' ');
  ['log','info','warn','error','debug'].forEach(level => {
    const orig = console[level].bind(console);
    console[level] = (...args) => {
      orig(...args);
      try { invoke('log_console', { level, msg: serialize(args) }); } catch (e) {}
    };
  });
  window.addEventListener('error', (e) => {
    try { invoke('log_console', { level: 'error', msg: 'window.onerror: ' + e.message + ' at ' + e.filename + ':' + e.lineno + ':' + e.colno }); } catch (_) {}
  });
  window.addEventListener('unhandledrejection', (e) => {
    const r = e.reason;
    const msg = (r && r.stack) ? r.stack : String(r);
    try { invoke('log_console', { level: 'error', msg: 'unhandledrejection: ' + msg }); } catch (_) {}
  });
})();
"#;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .plugin(tauri_plugin_log::Builder::default().build())
    .invoke_handler(tauri::generate_handler![log_console])
    .setup(|app| {
      if cfg!(debug_assertions) {
        use tauri::Manager;
        if let Some(win) = app.get_webview_window("main") {
          win.open_devtools();
          let _ = win.eval(CONSOLE_BRIDGE_JS);
        }
      }
      Ok(())
    })
    .on_page_load(|win, _| {
      // Re-install the console->Rust bridge on each navigation (dev only).
      if cfg!(debug_assertions) {
        let _ = win.eval(CONSOLE_BRIDGE_JS);
      }
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
