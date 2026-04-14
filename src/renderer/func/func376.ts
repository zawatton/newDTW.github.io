/**
 * func376 — func376 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func376(this: any) {
        Adap.dbgprt(376);
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_254 == 1) {
            Gvar.var_1693 = Gvar.var_1693 - 1;
            if (Gvar.var_1693 < 0) {
                Gvar.var_1693 = 17;
            }

            Adap.DSPLAY(100); // アイテム選択時の効果音

            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.var_257 == 1) {
            Gvar.var_1693 = Gvar.var_1693 + 1;
            if (Gvar.var_1693 > 17) {
                Gvar.var_1693 = 0;
            }

            Adap.DSPLAY(100); // アイテム選択時の効果音

            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.key_X_on == 1) {
            Gvar.var_502 = 0;
            Gvar.var_508 = 1; // Mフラグ:資料(設定画面) Func.func058
            Gvar.var_499 = 1; // Mフラグ:設定画面 Func.func056

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051(); // キー入力待ち処理
            await Func.func057(); // メニュー画面の"資料"の処理 (ハイスコア、コミックス、死因リスト、敵図鑑)
            return;
        }
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func376();
        return;
}

export {func376}
