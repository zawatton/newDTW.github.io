const { ipcRenderer } = require('electron');
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

 // メッセージ色設定処理
async function func203(this: any) {
        Adap.dbgprt(203);
        console.log(Gvar.stat);
        console.log("key_Z_on:", Gvar.key_Z_on);
        console.log("key_A_on:", Gvar.key_A_on);
        //Gvar.key_Z_on = 0;
        //Gvar.key_A_on = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認
        if (Gvar.stat == 0) {
            //ipcRenderer.send('close-color-picker');
            
            // Add an event listener to listen for the 'colorPickerClosed' event
            window.addEventListener('colorPickerClosed', function() {
                // Close the current window using ipcRenderer
                ipcRenderer.send('close-color-picker');
                Gvar.key_Z_on = 0;
                Gvar.key_A_on = 0;
                //Func.func203(); // メッセージ色設定処理
                //return;
            });
            //Gvar.stat = 1;
            //await Func.func203(); // メッセージ色設定処理
            //return;
        }
        if (Gvar.stat == 0 && Gvar.key_Z_on == 0 && Gvar.key_A_on == 0) {
            Gvar.stat = 1;
            //await Func.func203(); // メッセージ色設定処理
            //return;
        }
        if (Gvar.stat != 0) {
            if (Gvar.var_702 == 0 || Gvar.var_702 == 1) {
                if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func051(); // キー入力待ち処理
                    if (Gvar.var_702 == 0) { // 色設定を使わないを選択
                        Gvar.var_25[1] = 255;
                        Gvar.var_26[1] = 255;
                        Gvar.var_27[1] = 255;
                        Gvar.var_25[2] = 255;
                        Gvar.var_26[2] = 255;
                        Gvar.var_27[2] = 255;
                        Gvar.var_25[3] = 255;
                        Gvar.var_26[3] = 255;
                        Gvar.var_27[3] = 255;
                        Gvar.var_25[4] = 255;
                        Gvar.var_26[4] = 255;
                        Gvar.var_27[4] = 255;
                        Gvar.var_25[5] = 255;
                        Gvar.var_26[5] = 255;
                        Gvar.var_27[5] = 255;
                        Gvar.var_25[6] = 255;
                        Gvar.var_26[6] = 255;
                        Gvar.var_27[6] = 255;

                        // Ver0.1310にて追加。追加したことで白色へ初期化できる。
                        Gvar.var_25[7] = 255;
                        Gvar.var_26[7] = 255;
                        Gvar.var_27[7] = 255;
                        Gvar.var_25[8] = 255;
                        Gvar.var_26[8] = 255;
                        Gvar.var_27[8] = 255;
                        Gvar.var_25[9] = 255;
                        Gvar.var_26[9] = 255;
                        Gvar.var_27[9] = 255;
                        Gvar.var_25[10] = 255;
                        Gvar.var_26[10] = 255;
                        Gvar.var_27[10] = 255;
                        Gvar.var_25[11] = 255;
                        Gvar.var_26[11] = 255;
                        Gvar.var_27[11] = 255;
                        Gvar.var_25[12] = 255;
                        Gvar.var_26[12] = 255;
                        Gvar.var_27[12] = 255;
                    }
                    if (Gvar.var_702 == 1) {
                        Gvar.var_25[1] = Gvar.var_25[7];
                        Gvar.var_26[1] = Gvar.var_26[7];
                        Gvar.var_27[1] = Gvar.var_27[7];
                        Gvar.var_25[2] = Gvar.var_25[8];
                        Gvar.var_26[2] = Gvar.var_26[8];
                        Gvar.var_27[2] = Gvar.var_27[8];
                        Gvar.var_25[3] = Gvar.var_25[9];
                        Gvar.var_26[3] = Gvar.var_26[9];
                        Gvar.var_27[3] = Gvar.var_27[9];
                        Gvar.var_25[4] = Gvar.var_25[10];
                        Gvar.var_26[4] = Gvar.var_26[10];
                        Gvar.var_27[4] = Gvar.var_27[10];
                        Gvar.var_25[5] = Gvar.var_25[11];
                        Gvar.var_26[5] = Gvar.var_26[11];
                        Gvar.var_27[5] = Gvar.var_27[11];
                        Gvar.var_25[6] = Gvar.var_25[12];
                        Gvar.var_26[6] = Gvar.var_26[12];
                        Gvar.var_27[6] = Gvar.var_27[12];
                    }
                    await Adap.bsave("00.dat", Gvar.data = Gvar.var_702, null, 100);
                    await Adap.bsave("00.dat", Gvar.data = Gvar.var_25, null, 200);
                    await Adap.bsave("00.dat", Gvar.data = Gvar.var_26, null, 300);
                    await Adap.bsave("00.dat", Gvar.data = Gvar.var_27, null, 400);
                    Gvar.var_901 = 0;
                    await Func.func193(); // メニュー画面 "システム" 設定処理
                    return;
                }
            }
            if (Gvar.var_702 == 2) { // メッセージカラー設定(ディアボロの行動)
                if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    Adap.dialog("", 32); // 32なので、カラー選択ダイアログ(固定色)を表示させる。https://masudahp.web.fc2.com/hsp3/kiso/hspk013-2.html
                    //if (Gvar.stat == 0) {
                    //    console.log("stat == 0")
                    //    Gvar.key_Z_on = 0;
                    //    Gvar.key_A_on = 0;
                    //    await Func.func203(); // メッセージ色設定処理
                    //    return;
                    //}
                    window.addEventListener('colorPickerClosed', function() {
                        // Close the current window using ipcRenderer
                        ipcRenderer.send('close-color-picker');
                        Gvar.var_25[7] = Adap.ginfo(16);
                        Gvar.var_26[7] = Adap.ginfo(17);
                        Gvar.var_27[7] = Adap.ginfo(18);
                    });
                }
            }
            if (Gvar.var_702 == 3) { // メッセージカラー設定(敵の行動)
                if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    Adap.dialog("", 32); // 32なので、カラー選択ダイアログ(固定色)を表示させる。https://masudahp.web.fc2.com/hsp3/kiso/hspk013-2.html
                    //if (Gvar.stat == 0) {
                    //    Gvar.key_Z_on = 0;
                    //    Gvar.key_A_on = 0;
                    //    await Func.func203(); // メッセージ色設定処理
                    //    return;
                    //}
                    window.addEventListener('colorPickerClosed', function() {
                        // Close the current window using ipcRenderer
                        ipcRenderer.send('close-color-picker');
                        Gvar.var_25[8] = Adap.ginfo(16);
                        Gvar.var_26[8] = Adap.ginfo(17);
                        Gvar.var_27[8] = Adap.ginfo(18);
                    });
                }
            }
            if (Gvar.var_702 == 4) { // メッセージカラー設定(会心の一撃)
                if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    Adap.dialog("", 32); // 32なので、カラー選択ダイアログ(固定色)を表示させる。https://masudahp.web.fc2.com/hsp3/kiso/hspk013-2.html
                    //if (Gvar.stat == 0) {
                    //    Gvar.key_Z_on = 0;
                    //    Gvar.key_A_on = 0;
                    //    await Func.func203(); // メッセージ色設定処理
                    //    return;
                    //}
                    window.addEventListener('colorPickerClosed', function() {
                        // Close the current window using ipcRenderer
                        ipcRenderer.send('close-color-picker');
                        Gvar.var_25[12] = Adap.ginfo(16);
                        Gvar.var_26[12] = Adap.ginfo(17);
                        Gvar.var_27[12] = Adap.ginfo(18);
                    });
                }
            }
            if (Gvar.var_702 == 5) { // メッセージカラー設定(痛恨の一撃)
                if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    Adap.dialog("", 32); // 32なので、カラー選択ダイアログ(固定色)を表示させる。https://masudahp.web.fc2.com/hsp3/kiso/hspk013-2.html
                    //if (Gvar.stat == 0) {
                    //    Gvar.key_Z_on = 0;
                    //    Gvar.key_A_on = 0;
                    //    await Func.func203(); // メッセージ色設定処理
                    //    return;
                    //}
                    window.addEventListener('colorPickerClosed', function() {
                        // Close the current window using ipcRenderer
                        ipcRenderer.send('close-color-picker');
                        Gvar.var_25[9] = Adap.ginfo(16);
                        Gvar.var_26[9] = Adap.ginfo(17);
                        Gvar.var_27[9] = Adap.ginfo(18);
                    });
                }
            }
            if (Gvar.var_702 == 6) { // メッセージカラー設定(罠メッセージ)
                if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    Adap.dialog("", 32); // 32なので、カラー選択ダイアログ(固定色)を表示させる。https://masudahp.web.fc2.com/hsp3/kiso/hspk013-2.html
                    //if (Gvar.stat == 0) {
                    //    Gvar.key_Z_on = 0;
                    //    Gvar.key_A_on = 0;
                    //    await Func.func203(); // メッセージ色設定処理
                    //    return;
                    //}
                    window.addEventListener('colorPickerClosed', function() {
                        // Close the current window using ipcRenderer
                        ipcRenderer.send('close-color-picker');
                        Gvar.var_25[10] = Adap.ginfo(16);
                        Gvar.var_26[10] = Adap.ginfo(17);
                        Gvar.var_27[10] = Adap.ginfo(18);
                    });
                }
            }
            if (Gvar.var_702 == 7) { // メッセージカラー設定(状態変化等)
                if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    Adap.dialog("", 32); // 32なので、カラー選択ダイアログ(固定色)を表示させる。https://masudahp.web.fc2.com/hsp3/kiso/hspk013-2.html
                    //if (Gvar.stat == 0) {
                    //    Gvar.key_Z_on = 0;
                    //    Gvar.key_A_on = 0;
                    //    await Func.func203(); // メッセージ色設定処理
                    //    return;
                    //}
                    window.addEventListener('colorPickerClosed', function() {
                        // Close the current window using ipcRenderer
                        ipcRenderer.send('close-color-picker');
                        Gvar.var_25[11] = Adap.ginfo(16);
                        Gvar.var_26[11] = Adap.ginfo(17);
                        Gvar.var_27[11] = Adap.ginfo(18);
                    });
                }
            }
            if (Gvar.var_702 == 8) { // 初期値に戻すを選択
                if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    Gvar.var_25[7] = 255;
                    Gvar.var_26[7] = 255;
                    Gvar.var_27[7] = 255;
                    Gvar.var_25[8] = 255;
                    Gvar.var_26[8] = 150;
                    Gvar.var_27[8] = 255;
                    Gvar.var_25[9] = 255;
                    Gvar.var_26[9] = 0;
                    Gvar.var_27[9] = 0;
                    Gvar.var_25[10] = 130;
                    Gvar.var_26[10] = 255;
                    Gvar.var_27[10] = 130;
                    Gvar.var_25[11] = 100;
                    Gvar.var_26[11] = 160;
                    Gvar.var_27[11] = 190;
                    Gvar.var_25[12] = 255;
                    Gvar.var_26[12] = 255;
                    Gvar.var_27[12] = 0;
                }
            }
        }
        if (Gvar.key_X_on == 1) {
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051(); // キー入力待ち処理
            Gvar.var_901 = 0;
            await Func.func193(); // メニュー画面 "システム" 設定処理
            return;
        }
        if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
            Adap.DSPLAY(100); // アイテム選択時の効果音
            Gvar.var_702 = Gvar.var_702 - 1;
            if (Gvar.var_702 < 0) {
                Gvar.var_702 = 0;
            }
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
            Adap.DSPLAY(100); // アイテム選択時の効果音
            Gvar.var_702 = Gvar.var_702 + 1;
            if (Gvar.var_702 == 9) {
                Gvar.var_702 = 8;
            }
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
        }
        await Func.func203(); // メッセージ色設定処理
        return;
}

export {func203} // メッセージ色設定処理
