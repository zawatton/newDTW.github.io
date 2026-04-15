/**
 * func0854 — func854 不明
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { tf } from '../i18n'

// 口座へ入金、口座から出金した時の表示
// 旧 func799
async function func0854(this: any) {
    if (Gvar.var_1205 != 0) {
        Adap.DSPLAY(207);
        if (Gvar.var_1205 == 1) {
            await Func.setMessage(tf("{0}G 口座に入れた。", Gvar.var_3176), "        ", 7, false, false, false);
            Gvar.var_1205 = 0;
        }
        if (Gvar.var_1205 == 2) {
            await Func.setMessage(tf("{0}G 口座から出した。", Gvar.var_3176), "        ", 7, false, false, false);
            Gvar.var_1205 = 0;
        }
    }
    await Func.AutoDraw(10);
    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
    return;
}
// ↑ここまで口座設定

export {func0854}
