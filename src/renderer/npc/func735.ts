/**
 * func735 — func735 不明
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { tf } from '../i18n'

// 旧 func735
async function func735(this: any) {
        Adap.dbgprt(735);
        Gvar.var_243 = 0;
        Gvar.var_3072 = Gvar.var_314;
        Gvar.enemy_list = Gvar.var_83[Gvar.var_3072].Var0;
        await Func.func626();
        await Func.setMessage(tf("{0}は", Gvar.enemy_name), "話せる状態ではないようだ…", 7, false, false, false);
        await Func.AutoDraw(5);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func735}
