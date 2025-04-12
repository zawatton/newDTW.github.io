import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func362(this: any) {
        Adap.dbgprt(362);
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_X_on == 1) {

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            Gvar.var_502 = 0;
            Gvar.var_508 = 1; // Mフラグ:資料(設定画面) Func.func058
            Gvar.var_499 = 1; // Mフラグ:設定画面 Func.func056
            await Func.func051(); // キー入力待ち処理
            await Func.func057(); // メニュー画面の"資料"の処理 (ハイスコア、コミックス、死因リスト、敵図鑑)
            return;
        }
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func362();
        return;
}

export {func362}
