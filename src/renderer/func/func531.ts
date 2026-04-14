/**
 * func531 — func531 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func531(this: any) {
        Adap.dbgprt(531);
        Gvar.var_2228 = 0;
        if (Gvar.kougeki_disc_id  == 0 && Gvar.bougyo_disc_id == 0 && Gvar.nouryoku_disc_id == 0) {
            Gvar.var_2228 = 1;
            return;
        }
        if (Gvar.kougeki_disc_id  != 0 && Gvar.bougyo_disc_id != 0 && Gvar.nouryoku_disc_id != 0) {
            Gvar.var_2396 = Adap.rnd(3);
            if (Gvar.var_2396 == 0) {
                Gvar.var_2397 = 0;
            }
            if (Gvar.var_2396 == 1) {
                Gvar.var_2397 = 1;
            }
            if (Gvar.var_2396 == 2) {
                Gvar.var_2397 = 2;
            }
        }
        if (Gvar.kougeki_disc_id  != 0 && Gvar.bougyo_disc_id != 0 && Gvar.nouryoku_disc_id == 0) {
            Gvar.var_2396 = Adap.rnd(2);
            if (Gvar.var_2396 == 0) {
                Gvar.var_2397 = 0;
            }
            if (Gvar.var_2396 == 1) {
                Gvar.var_2397 = 1;
            }
        }
        if (Gvar.kougeki_disc_id  != 0 && Gvar.bougyo_disc_id == 0 && Gvar.nouryoku_disc_id != 0) {
            Gvar.var_2396 = Adap.rnd(2);
            if (Gvar.var_2396 == 0) {
                Gvar.var_2397 = 0;
            }
            if (Gvar.var_2396 == 1) {
                Gvar.var_2397 = 2;
            }
        }
        if (Gvar.kougeki_disc_id  == 0 && Gvar.bougyo_disc_id != 0 && Gvar.nouryoku_disc_id != 0) {
            Gvar.var_2396 = Adap.rnd(2);
            if (Gvar.var_2396 == 0) {
                Gvar.var_2397 = 1;
            }
            if (Gvar.var_2396 == 1) {
                Gvar.var_2397 = 2;
            }
        }
        if (Gvar.kougeki_disc_id  != 0 && Gvar.bougyo_disc_id == 0 && Gvar.nouryoku_disc_id == 0) {
            Gvar.var_2397 = 0;
        }
        if (Gvar.kougeki_disc_id  == 0 && Gvar.bougyo_disc_id != 0 && Gvar.nouryoku_disc_id == 0) {
            Gvar.var_2397 = 1;
        }
        if (Gvar.kougeki_disc_id  == 0 && Gvar.bougyo_disc_id == 0 && Gvar.nouryoku_disc_id != 0) {
            Gvar.var_2397 = 2;
        }
        if (Gvar.var_2397 == 0) {
            await Func.func426();
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_553].Var0;
            Gvar.var_475 = Gvar.var_553;
        }
        if (Gvar.var_2397 == 1) {
            await Func.func427();
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_554].Var0;
            Gvar.var_475 = Gvar.var_554;
        }
        if (Gvar.var_2397 == 2) {
            await Func.func428();
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_555].Var0;
            Gvar.var_475 = Gvar.var_555;
        }
        if (Gvar.var_233[Gvar.var_475].Var5 == 0) {
            Gvar.var_2228 = 1;
            return;
        }
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.target_item_name = Gvar.item_name;
        Gvar.var_2398 = Adap.rnd(15);
        if (Gvar.var_2398 == 0) {
            Gvar.var_2399 = 350;
        }
        if (Gvar.var_2398 == 1) {
            Gvar.var_2399 = 351;
        }
        if (Gvar.var_2398 == 2) {
            Gvar.var_2399 = 352;
        }
        if (Gvar.var_2398 == 3) {
            Gvar.var_2399 = 353;
        }
        if (Gvar.var_2398 == 4) {
            Gvar.var_2399 = 354;
        }
        if (Gvar.var_2398 == 5) {
            Gvar.var_2399 = 355;
        }
        if (Gvar.var_2398 == 6) {
            Gvar.var_2399 = 356;
        }
        if (Gvar.var_2398 == 7) {
            Gvar.var_2399 = 357;
        }
        if (Gvar.var_2398 == 8) {
            Gvar.var_2399 = 358;
        }
        if (Gvar.var_2398 == 9) {
            Gvar.var_2399 = 359;
        }
        if (Gvar.var_2398 == 10) {
            Gvar.var_2399 = 360;
        }
        if (Gvar.var_2398 == 11) {
            Gvar.var_2399 = 361;
        }
        if (Gvar.var_2398 == 12) {
            Gvar.var_2399 = 362;
        }
        if (Gvar.var_2398 == 13) {
            Gvar.var_2399 = 363;
        }
        if (Gvar.var_2398 == 14) {
            Gvar.var_2399 = 364;
        }
        Gvar.var_2095 = 0;
        Gvar.var_2094 = 20;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_2095 = 0;
            if (Gvar.var_233[Gvar.var_475]["Var" + Gvar.var_2094] == Gvar.var_2399) {
                Gvar.var_2095 = 1;
                break;
            }
            if (Gvar.var_233[Gvar.var_475]["Var" + Gvar.var_2094] == 0) {
                Gvar.var_2096 = Gvar.var_2094;
                break;
            }
            Gvar.var_2094 = Gvar.var_2094 + 1;
        }
        if (Gvar.var_2095 == 0) {
            Gvar.var_233[Gvar.var_475]["Var" + Gvar.var_2096] = Gvar.var_2399;
            Gvar.var_233[Gvar.var_475].Var19 = Gvar.var_233[Gvar.var_475].Var19 + 1;
            Gvar.var_233[Gvar.var_475].Var5 = Gvar.var_233[Gvar.var_475].Var5 - 1;
        }
        if (Gvar.var_2095 == 1) {
            Gvar.var_2228 = 1;
            return;
        }
        await Func.func494();
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        return;
}

export {func531}
