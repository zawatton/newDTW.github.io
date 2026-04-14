/// PoC debug bridge: JS calls `invoke('log_console', {level, msg})` to append
/// browser console output into a file the dev can tail from the CLI.
/// Debug-only so release binaries don't carry the command or the JS blob.
#[cfg(debug_assertions)]
#[tauri::command]
fn log_console(level: String, msg: String) {
  use std::io::Write;
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
#[cfg(debug_assertions)]
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
  // `mut` is needed in debug for the cfg-gated invoke_handler reassignment;
  // suppress the warning in release where the block is compiled out.
  #[allow(unused_mut)]
  let mut builder = tauri::Builder::default()
    .plugin(tauri_plugin_log::Builder::default().build());

  #[cfg(debug_assertions)]
  {
    builder = builder.invoke_handler(tauri::generate_handler![log_console]);
  }

  builder
    .setup(|_app| {
      // `open_devtools()` only exists under debug builds (or with the
      // `devtools` feature), so it must be gated at compile time — a
      // runtime `cfg!()` still makes the compiler see the call.
      #[cfg(debug_assertions)]
      {
        use tauri::Manager;
        if let Some(win) = _app.get_webview_window("main") {
          win.open_devtools();
          let _ = win.eval(CONSOLE_BRIDGE_JS);
        }
      }
      Ok(())
    })
    .on_page_load(|_win, _| {
      // Re-install the console->Rust bridge on each navigation (dev only).
      #[cfg(debug_assertions)]
      {
        let _ = _win.eval(CONSOLE_BRIDGE_JS);
      }
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
