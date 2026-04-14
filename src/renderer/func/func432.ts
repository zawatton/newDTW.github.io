/**
 * func432 — func432 装備disc、射撃discの合成数や修正値、数などの為の配列か?
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func432(this: any) {
        Adap.dbgprt(432);
        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
                if (Gvar.disc_class == 1 && Gvar.var_476[Gvar.var_225] == 1) {
                    Gvar.var_476 = Adap.dim(40);
                    return;
                }
                if (Gvar.disc_class == 2 && Gvar.var_477[Gvar.var_225] == 1) {
                    Gvar.var_477 = Adap.dim(40);
                    return;
                }
                if (Gvar.disc_class == 3 && Gvar.var_478[Gvar.var_225] == 1) {
                    Gvar.var_478 = Adap.dim(40);
                    return;
                }
            }
            if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 450 && Gvar.var_479[Gvar.var_225] == 1) {
                Gvar.var_479 = Adap.dim(40);
                Gvar.var_250 = 0;
                Gvar.shageki_disc_id = 0;
                return;
            }
            if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
                if (Gvar.disc_class == 1) {
                    Gvar.var_476 = Adap.dim(40);
                    Gvar.var_476[Gvar.var_225] = 1;
                    return;
                }
                if (Gvar.disc_class == 2) {
                    Gvar.var_477 = Adap.dim(40);
                    Gvar.var_477[Gvar.var_225] = 1;
                    return;
                }
                if (Gvar.disc_class == 3) {
                    Gvar.var_478 = Adap.dim(40);
                    Gvar.var_478[Gvar.var_225] = 1;
                    return;
                }
            }
            if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 450) {
                Gvar.var_479 = Adap.dim(40);
                Gvar.var_479[Gvar.var_225] = 1;
                Gvar.var_250 = Gvar.var_225;
                Gvar.shageki_disc_id = Gvar.belongings_item_list;
                return;
            }
        }
        await Func.func433(); // アイテム配列(所持アイテム)初期化関数
}

export {func432}
