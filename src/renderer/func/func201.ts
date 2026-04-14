/**
 * func201 — func201 不明
 *
 * (org原典: newDTW_func2)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func201(this: any) {
        Adap.dbgprt(201);
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_254 == 1) {
            Adap.DSPLAY(100); // アイテム選択時の効果音
            if (Gvar.var_690 != 10) {
                Gvar.var_690 = Gvar.var_690 - 10;
            }
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func201();
            return;
        }
        if (Gvar.var_257 == 1) {
            Adap.DSPLAY(100); // アイテム選択時の効果音
            if (Gvar.var_690 != 90) {
                Gvar.var_690 = Gvar.var_690 + 10;
            }
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func201();
            return;
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_X_on == 1 || Gvar.key_A_on == 1) {
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            Gvar.var_909 = 0;
            Gvar.var_25[14] = Gvar.var_690;
    
            await Adap.bsave("00.dat", Gvar.var_25, null, 200);
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func051(); // キー入力待ち処理
            await Func.func199();
            return;
        }
        await Func.func201();
        return;
}

export {func201}
