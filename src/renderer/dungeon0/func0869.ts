import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func814
async function func0869(this: any) {
    if (Gvar.wallet >= 1000) {
        Adap.DSPLAY(207);
        Gvar.wallet = Gvar.wallet - 1000;
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func0871();
        return;
    }
    if (Gvar.wallet < 1000) {
        await Func.setMessage("「おや…", "  お金が足りないようです」", 7, true, false, true);
        Gvar.var_3190 = 1000 - Gvar.wallet;
        if (Gvar.var_3190 <= Gvar.var_1032) {
            await Func.setMessage("「口座のお金を足しますか？」", "", 7, false, false, true);
            await Func.func050(); // メッセージをアニメーション風送り表示(連続描画)
            Gvar.var_245 = 19;
            Gvar.var_246 = 45;
            Gvar.var_546 = 1;
            Gvar.var_3195 = 2;
            Gvar.var_548 = 1; // 選択肢処理フラグON
            await Func.func0898(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
            return;
        }
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func0872();
        return;
    }
    await Func.func0870();
}

export {func0869}
