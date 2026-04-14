/**
 * func730 — func730 ダンジョンをうろついているスピードワゴンに話しかけた際のメッセージ処理
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func730
async function func730(this: any) {
        Adap.dbgprt(730);
        Gvar.var_243 = 0;
        Gvar.var_3072 = Gvar.var_314;
        if (Gvar.var_83[Gvar.var_3072].Var31 == 5) {
            await Func.func733();
            return;
        }
        await Func.setMessage("おれぁ おせっかい焼きのｽﾋﾟｰﾄﾞﾜｺﾞﾝ！",
                                "", 7, true, false, true);
        
        await Func.setMessage("あまちゃんのあんたが好きだから",
                               "くっついて行ってもいいぜ！", 7, true, false, true);
        await Func.func051(); // キー入力待ち処理
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3126 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func0898(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func730}
