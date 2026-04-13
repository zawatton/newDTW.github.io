const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
let colorPickerWindow; // カラーピッカーウィンドウの参照用
let mainWindow; // ウィンドウオブジェクトをグローバルに保持
const createWindow = () => {
    const DESIGN_WIDTH = 340;
    const DESIGN_HEIGHT = 340;
    const aspectRatio = DESIGN_WIDTH / DESIGN_HEIGHT;
    mainWindow = new BrowserWindow({
        width: DESIGN_WIDTH,
        height: DESIGN_HEIGHT,
        minWidth: DESIGN_WIDTH,
        minHeight: DESIGN_HEIGHT,
        useContentSize: true,
        resizable: false,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            devTools: true, // 必要に応じて DevTools を有効に
        }
    });
    mainWindow.setAspectRatio(aspectRatio);
    mainWindow.loadFile('../index.html');
    mainWindow.setMenuBarVisibility(false);
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        mainWindow.webContents.openDevTools({ mode: 'detach' });
        mainWindow.webContents.send('electron-ready-to-show');
    });
    // ウィンドウの閉じるボタンが押された場合の処理
    mainWindow.on('close', (e) => {
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
    ipcMain.on('color-selected', (event, color) => {
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
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});
//# sourceMappingURL=main.js.map