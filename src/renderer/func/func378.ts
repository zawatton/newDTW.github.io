import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func378(this: any) {
        Adap.dbgprt(378);
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_X_on == 1) {
            Gvar.var_502 = 0;
            Gvar.var_499 = 1; // Mフラグ:設定画面 Func.func056
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051(); // キー入力待ち処理
            await Func.func055(); // 設定画面(メニュー画面)呼び出し
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_503 < 31) { // var_255:入力判定[↑]
            Gvar.var_503 = Gvar.var_503 + 2;
            Gvar.var_504 = Gvar.var_504 + 2;

            Adap.DSPLAY(100); // アイテム選択時の効果音

            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func378();
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_503 >= 3) { // var_259:入力判定[↓]
            Gvar.var_503 = Gvar.var_503 - 2;
            Gvar.var_504 = Gvar.var_504 - 2;

            Adap.DSPLAY(100); // アイテム選択時の効果音

            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func378();
            return;
        }
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func378();
        return;
}

export {func378}
