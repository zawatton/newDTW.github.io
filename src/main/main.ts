const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

// 開発モード: 環境変数 NEWDTW_DEV=1 で有効化
// public/bundle/main.js の変更を監視し、ウィンドウを自動リロードする
const DEV_MODE = process.env.NEWDTW_DEV === '1';

let colorPickerWindow: any; // カラーピッカーウィンドウの参照用
let mainWindow: any;  // ウィンドウオブジェクトをグローバルに保持

/** 開発モード時のホットリロード設定: bundle変更でウィンドウ再ロード */
function setupHotReload(win: any) {
    const bundlePath = path.join(__dirname, '..', 'bundle', 'main.js');
    let lastReload = 0;
    fs.watch(bundlePath, { persistent: false }, (eventType: string) => {
        if (eventType !== 'change') return;
        // 連続変更デバウンス (webpackは複数回書き込むことがある)
        const now = Date.now();
        if (now - lastReload < 1000) return;
        lastReload = now;
        // 短い遅延で書き込み完了を待つ
        setTimeout(() => {
            if (win && !win.isDestroyed()) {
                console.log('[DEV] bundle changed, reloading window');
                win.webContents.reload();
            }
        }, 200);
    });
    console.log('[DEV] hot reload enabled (watching public/bundle/main.js)');
}

const createWindow = () => {
  const DESIGN_WIDTH = 340;
  const DESIGN_HEIGHT = 340;
  const aspectRatio = DESIGN_WIDTH / DESIGN_HEIGHT;

  mainWindow = new BrowserWindow({
    width: DESIGN_WIDTH,
    height: DESIGN_HEIGHT,
    minWidth: DESIGN_WIDTH,
    minHeight: DESIGN_HEIGHT,
    useContentSize: true, // ウィンドウの外枠を除いた「コンテンツ領域」のサイズを指定する
    resizable: false,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      devTools: true,   // 必要に応じて DevTools を有効に
    }
  });

  mainWindow.setAspectRatio(aspectRatio);
  mainWindow.loadFile('../index.html');
  mainWindow.setMenuBarVisibility(false);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.webContents.send('electron-ready-to-show');
    if (DEV_MODE) setupHotReload(mainWindow);
  });

  // ウィンドウの閉じるボタンが押された場合の処理
  mainWindow.on('close', (e: any) => {
    // すぐにはウィンドウを閉じず、まずレンダラープロセスで Adap.end() を実行させる
    e.preventDefault();
    // console.log("【Main】close イベントをキャッチ");
    mainWindow.webContents.send('window-close-adap-end');
  });

  // レンダラープロセスから Adap.end() 実行完了の通知を受けたらウィンドウを破棄する
  ipcMain.on('close-adap-end-finished', () => {
    // console.log("【Main】close-adap-end-finished を受信　ウィンドウを終了");
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.destroy();
    }
  });

  // 既存のカラーピッカー用 IPC 処理（そのまま残す）
  ipcMain.on('show-color-picker', () => {
    if (colorPickerWindow) {
      colorPickerWindow.focus();
      return;
    }
    colorPickerWindow = new BrowserWindow({
      width: 340,
      height: 340,
      resizable: false,
      webPreferences: {
        contextIsolation: false,
        nodeIntegration: true,
      }
    });
    colorPickerWindow.loadFile('../colorPicker.html');
    colorPickerWindow.on('closed', () => {
      colorPickerWindow = null;
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('color-picker-closed');
      }
    });
  });

  // イベントリスナーの型指定
  ipcMain.on('color-selected', (event: Electron.IpcMainEvent, color: string) => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('color-changed', color);
    }
  });

  ipcMain.on('close-color-picker', () => {
    console.log('close-color-picker イベントトリガー');
    if (colorPickerWindow) {
      colorPickerWindow.close();
    }
  });
};

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
