/**
 * func748 — func748 ペッシ関係
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 仲間でない状態のペッシへ話しかけた際の処理
// 旧 func748
async function func748(this: any) {
        Adap.dbgprt(748);
        Gvar.var_243 = 0;
        Gvar.var_3072 = Gvar.var_314;
        if (Gvar.var_181 == 1) {
            await Func.func750(); // ペッシを仲間にする為に殴った後に話し掛けた際の処理
            return;
        }
        if (Gvar.var_83[Gvar.var_3072].Var31 == 5) {
            await Func.func752(); // ダンジョン内で仲間になったペッシに話しかけた時のメッセージ処理
            return;
        }
        await Func.setMessage("あっ！兄貴ィ！",
                               "", 7, true, false, true);

        await Func.setMessage("おれも連れてってくれよ！",
                               "", 7, true, false, true);

        await Func.func051(); // キー入力待ち処理
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3136 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func0898(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func748}
