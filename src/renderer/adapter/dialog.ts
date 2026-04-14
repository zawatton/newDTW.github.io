const { ipcRenderer } = require('electron');
import { Gvar } from '../variable'
import { t } from '../i18n'


// Ver 0.1310で追加。カラーパレットを表示。
// function dialog(data0, data1, data2 = null) { Adap.undef_func("dialog", [data0, data1]); }
// data0: 本文テキスト, data1: ダイアログ種別, data2: タイトル
// data0/data2 は i18n 対応として t() で自動翻訳 (辞書にない場合は原文のまま)
// @ts-ignore
function dialog(data0: string, data1: number, data2: string = null) {
    if (typeof data0 === 'string' && data0) data0 = t(data0);
    if (typeof data2 === 'string' && data2) data2 = t(data2);
    if (data1 == 32) {
        if (Gvar.isColorPickerShown == false) {
            // カラーピッカーがまだ表示されていない場合のみ表示
            ipcRenderer.send('show-color-picker'); 
            console.log("dialog関数が呼び出されました。data1の値:", data1);

            // カラーピッカーが表示されたのでフラグをtrueに設定
            Gvar.isColorPickerShown = true;
        //}
        // Add an event listener to listen for the 'colorPickerClosed' event
        //window.addEventListener('colorPickerClosed', function() {
        // Close the current window using ipcRenderer
        //ipcRenderer.send('close-color-picker');
        //});
        //if (Gvar.isColorPickerShown == true) {
            // カラーピッカーウィンドウが閉じられたときに発生するイベントをリッスンする
            ipcRenderer.once('color-picker-closed', () => {
                // カラーピッカーウィンドウが閉じられたのでフラグをfalseに設定
                ipcRenderer.send('close-color-picker'); 
                Gvar.isColorPickerShown = false;
                Gvar.stat = 0;
                //Gvar.key_Z_on = 0;
                //Gvar.key_A_on = 0;
                //console.log(isColorPickerShown);
            });
        }
    }
    return;
}


export {dialog}
