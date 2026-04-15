/**
 * func760 — func760 マリリンマンソン関係?
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { tf } from '../i18n'

// マリリンマンソン関係: 店で支払うお金が不足している時の警告メッセージ
// 旧 func760
async function func760(this: any) {
        Adap.dbgprt(760);
        Gvar.var_243 = 0;
        await Func.setMessage("「タリナイゾ…",
                               tf("  残り{0} G！」", Gvar.var_169), 7, false, false, true);
        await Func.AutoDraw(10);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func760}
