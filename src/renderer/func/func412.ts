/**
 * func412 — func412 アイテムを投げて床に落ちた時のアイテム表示処理
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// アイテムを投げて床に落ちた時のアイテム表示処理
async function func412(this: any) {
        Adap.dbgprt(412);
        Adap.gmode(2, null, null, null);
        Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
        if (Gvar.var_1896 == 1) {
            if (Gvar.var_199 == 4) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 + 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 - 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 - 20);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 + 20);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 + 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 - 20);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 - 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 - 20);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 + 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 + 20);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 - 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 + 20);
            }
        }
        Gvar.belongings_item_list = Gvar.var_1846;
        Gvar.var_1248 = Gvar.var_1833;
        await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
        return;
}

export {func412}
