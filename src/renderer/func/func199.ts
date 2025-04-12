import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func199(this: any) {
        Adap.dbgprt(199);
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            if (Gvar.var_908 == 0) { // マップの色を変更
                Adap.dialog("", 32); // 32なので、カラー選択ダイアログ(固定色)を表示させる。https://masudahp.web.fc2.com/hsp3/kiso/hspk013-2.html
                if (Gvar.stat == 0) {
                    await Func.func199();
                    return;
                }
                Gvar.var_25[13] = await Adap.ginfo(16);
                Gvar.var_26[13] = await Adap.ginfo(17);
                Gvar.var_27[13] = await Adap.ginfo(18);
                Gvar.var_687 = await Adap.ginfo(16);
                Gvar.var_688 = await Adap.ginfo(17);
                Gvar.var_689 = await Adap.ginfo(18);
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func199();
                return;
            }
            if (Gvar.var_908 == 1) { // 透明度を変更
                Gvar.var_909 = 1;
                await Func.func051(); // キー入力待ち処理
                await Func.func201();
                return;
            }
            if (Gvar.var_908 == 2) { // 初期設定に戻す
                Gvar.var_25[13] = 0;
                Gvar.var_26[13] = 0;
                Gvar.var_27[13] = 255;
                Gvar.var_687 = 0;
                Gvar.var_688 = 0;
                Gvar.var_689 = 255;
                Gvar.var_690 = 60;
                Gvar.var_25[14] = Gvar.var_690;
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func199();
                return;
            }
        }
        if (Gvar.key_X_on == 1) {
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051(); // キー入力待ち処理
            Gvar.var_905 = 0;
            await Adap.bsave("00.dat", Gvar.data = Gvar.var_25, null, 200);
            await Adap.bsave("00.dat", Gvar.data = Gvar.var_26, null, 300);
            await Adap.bsave("00.dat", Gvar.data = Gvar.var_27, null, 400);
            await Func.func193(); // メニュー画面 "システム" 設定処理
            return;
        }
        if (Gvar.var_255 == 1) { // var_255:入力判定[↑]

            Adap.DSPLAY(100); // アイテム選択時の効果音
            if (Gvar.var_908 == 0) {
                Gvar.var_908 = 2;
                // ここ間違えてる？？なぜ Func.func337() が2回も呼ばれる？
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func199();
                return;
            }
            if (Gvar.var_908 != 0) {
                Gvar.var_908 = Gvar.var_908 - 1;
                // ここ間違えてる？？なぜ Func.func337() が2回も呼ばれる？
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func199();
                return;
            }
        }
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]

            Adap.DSPLAY(100); // アイテム選択時の効果音
            if (Gvar.var_908 == 2) {
                Gvar.var_908 = 0;
                // ここ間違えてる？？なぜ Func.func337() が2回も呼ばれる？
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func199();
                return;
            }
            if (Gvar.var_908 != 2) {
                Gvar.var_908 = Gvar.var_908 + 1;
                // ここ間違えてる？？なぜ Func.func337() が2回も呼ばれる？
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func199();
                return;
            }
        }
        await Func.func199();
        return;
}

export {func199}
