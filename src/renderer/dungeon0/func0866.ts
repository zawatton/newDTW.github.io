/**
 * func0866 — ポルポ仲間召喚 口座引落処理 (wallet 全額 + 口座から不足分)
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func811
async function func0866(this: any) {
    Gvar.wallet = 0;
    Gvar.var_1032 = Gvar.var_1032 - Gvar.var_3190;
    Gvar.var_1040 = 1;
    Adap.DSPLAY(207);
    await Func.setMessage("「わかりました…。手の空いている者を", "  ﾚｸｲｴﾑの大迷宮１階に呼んでおきます」", 7, true, false, true);
    await Func.func0867();
    return;
}

export {func0866}
