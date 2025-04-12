import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func493(this: any) {
        Adap.dbgprt(493);
        if (Gvar.disc_class == 1 && Gvar.var_476[Gvar.var_225] == 1) {
            Gvar.var_580 = Gvar.var_580 - Gvar.var_894;
            Gvar.var_894 = 0;
            Gvar.kougeki_disc_id  = 0;
            return;
        }
        if (Gvar.disc_class == 2 && Gvar.var_477[Gvar.var_225] == 1) {
            Gvar.var_581 = Gvar.var_581 - Gvar.var_895;
            Gvar.var_895 = 0;
            Gvar.bougyo_disc_id = 0;
            return;
        }
        if (Gvar.disc_class == 3 && Gvar.var_478[Gvar.var_225] == 1) {
            Gvar.nouryoku_disc_id = 0;
            return;
        }
        if (Gvar.disc_class == 1 && Gvar.var_477[Gvar.var_225] == 1) {
            Gvar.var_581 = Gvar.var_581 - Gvar.var_895;
            Gvar.var_895 = 0;
            Gvar.bougyo_disc_id = 0;
            Gvar.var_477 = Adap.dim(40);
        }
        if (Gvar.disc_class == 1 && Gvar.var_478[Gvar.var_225] == 1) {
            Gvar.nouryoku_disc_id = 0;
            Gvar.var_478 = Adap.dim(40);
        }
        if (Gvar.disc_class == 2 && Gvar.var_476[Gvar.var_225] == 1) {
            Gvar.var_580 = Gvar.var_580 - Gvar.var_894;
            Gvar.var_894 = 0;
            Gvar.kougeki_disc_id  = 0;
            Gvar.var_476 = Adap.dim(40);
        }
        if (Gvar.disc_class == 2 && Gvar.var_478[Gvar.var_225] == 1) {
            Gvar.nouryoku_disc_id = 0;
            Gvar.var_478 = Adap.dim(40);
        }
        if (Gvar.disc_class == 3 && Gvar.var_476[Gvar.var_225] == 1) {
            Gvar.var_580 = Gvar.var_580 - Gvar.var_894;
            Gvar.var_894 = 0;
            Gvar.kougeki_disc_id  = 0;
            Gvar.var_476 = Adap.dim(40);
        }
        if (Gvar.disc_class == 3 && Gvar.var_477[Gvar.var_225] == 1) {
            Gvar.var_581 = Gvar.var_581 - Gvar.var_895;
            Gvar.var_895 = 0;
            Gvar.bougyo_disc_id = 0;
            Gvar.var_477 = Adap.dim(40);
        }
        if (Gvar.disc_class == 1) {
            Gvar.var_580 = Gvar.var_580 - Gvar.var_894;
            Gvar.var_894 = 0;
            Gvar.kougeki_disc_id  = 0;
        }
        if (Gvar.disc_class == 2) {
            Gvar.var_581 = Gvar.var_581 - Gvar.var_895;
            Gvar.var_895 = 0;
            Gvar.bougyo_disc_id = 0;
        }
        if (Gvar.disc_class == 3) {
            Gvar.nouryoku_disc_id = 0;
        }
        if (Gvar.belongings_item_list == 100) {
            Gvar.var_2177 = 8;
            Gvar.var_2178 = 4;
        }
        if (Gvar.belongings_item_list == 101) {
            Gvar.var_2177 = 4;
            Gvar.var_2178 = 1;
        }
        if (Gvar.belongings_item_list == 102) {
            Gvar.var_2177 = 9;
            Gvar.var_2178 = 3;
        }
        if (Gvar.belongings_item_list == 103) {
            Gvar.var_2177 = 2;
            Gvar.var_2178 = 1;
        }
        if (Gvar.belongings_item_list == 104) {
            Gvar.var_2177 = 7;
            Gvar.var_2178 = 1;
        }
        if (Gvar.belongings_item_list == 105) {
            Gvar.var_2177 = 3;
            Gvar.var_2178 = 2;
        }
        if (Gvar.belongings_item_list == 106) {
            Gvar.var_2177 = 7;
            Gvar.var_2178 = 1;
        }
        if (Gvar.belongings_item_list == 107) {
            Gvar.var_2177 = 2;
            Gvar.var_2178 = 1;
        }
        if (Gvar.belongings_item_list == 108) {
            Gvar.var_2177 = 4;
            Gvar.var_2178 = 3;
        }
        if (Gvar.belongings_item_list == 109) {
            Gvar.var_2177 = 6;
            Gvar.var_2178 = 2;
        }
        if (Gvar.belongings_item_list == 111) {
            Gvar.var_2177 = 9;
            Gvar.var_2178 = 4;
        }
        if (Gvar.belongings_item_list == 112) {
            Gvar.var_2177 = 5;
            Gvar.var_2178 = 3;
        }
        if (Gvar.belongings_item_list == 113) {
            Gvar.var_2177 = 4;
            Gvar.var_2178 = 0;
        }
        if (Gvar.belongings_item_list == 114) {
            Gvar.var_2177 = 3;
            Gvar.var_2178 = 1;
        }
        if (Gvar.belongings_item_list == 115) {
            Gvar.var_2177 = 4;
            Gvar.var_2178 = 2;
        }
        if (Gvar.belongings_item_list == 116) {
            Gvar.var_2177 = 1;
            Gvar.var_2178 = 2;
        }
        if (Gvar.belongings_item_list == 117) {
            Gvar.var_2177 = 2;
            Gvar.var_2178 = 2;
        }
        if (Gvar.belongings_item_list == 118) {
            Gvar.var_2177 = 2;
            Gvar.var_2178 = 3;
        }
        if (Gvar.belongings_item_list == 119) {
            Gvar.var_2177 = 2;
            Gvar.var_2178 = 3;
        }
        if (Gvar.belongings_item_list == 120) {
            Gvar.var_2177 = 3;
            Gvar.var_2178 = 4;
        }
        if (Gvar.belongings_item_list == 121) {
            Gvar.var_2177 = 7;
            Gvar.var_2178 = 1;
        }
        if (Gvar.belongings_item_list == 122) {
            Gvar.var_2177 = 6;
            Gvar.var_2178 = 0;
        }
        if (Gvar.belongings_item_list == 123) {
            Gvar.var_2177 = 8;
            Gvar.var_2178 = 0;
        }
        if (Gvar.belongings_item_list == 124) {
            Gvar.var_2177 = 1;
            Gvar.var_2178 = 1;
        }
        if (Gvar.belongings_item_list == 200) {
            Gvar.var_2177 = 0;
            Gvar.var_2178 = 5;
        }
        if (Gvar.belongings_item_list == 201) {
            Gvar.var_2177 = 1;
            Gvar.var_2178 = 4;
        }
        if (Gvar.belongings_item_list == 202) {
            Gvar.var_2177 = 0;
            Gvar.var_2178 = 8;
        }
        if (Gvar.belongings_item_list == 203) {
            Gvar.var_2177 = 1;
            Gvar.var_2178 = 4;
        }
        if (Gvar.belongings_item_list == 204) {
            Gvar.var_2177 = 1;
            Gvar.var_2178 = 8;
        }
        if (Gvar.belongings_item_list == 205) {
            Gvar.var_2177 = 1;
            Gvar.var_2178 = 5;
        }
        if (Gvar.belongings_item_list == 206) {
            Gvar.var_2177 = 0;
            Gvar.var_2178 = 3;
        }
        if (Gvar.belongings_item_list == 207) {
            Gvar.var_2177 = 2;
            Gvar.var_2178 = 2;
        }
        if (Gvar.belongings_item_list == 300) {
            Gvar.var_2177 = 0;
            Gvar.var_2178 = 0;
        }
        if (Gvar.belongings_item_list == 301) {
            Gvar.var_2177 = 1;
            Gvar.var_2178 = 2;
        }
        if (Gvar.belongings_item_list == 302) {
            Gvar.var_2177 = 0;
            Gvar.var_2178 = 0;
        }
        if (Gvar.belongings_item_list == 303) {
            Gvar.var_2177 = 0;
            Gvar.var_2178 = 0;
        }
        if (Gvar.belongings_item_list == 304) {
            Gvar.var_2177 = 3;
            Gvar.var_2178 = 6;
        }
        if (Gvar.belongings_item_list == 305) {
            Gvar.var_2177 = 1;
            Gvar.var_2178 = 1;
        }
        if (Gvar.belongings_item_list == 306) {
            Gvar.var_2177 = 0;
            Gvar.var_2178 = 0;
        }
        if (Gvar.belongings_item_list == 307) {
            Gvar.var_2177 = 3;
            Gvar.var_2178 = 1;
        }
        if (Gvar.belongings_item_list == 308) {
            Gvar.var_2177 = 2;
            Gvar.var_2178 = 0;
        }
        if (Gvar.belongings_item_list == 309) {
            Gvar.var_2177 = 3;
            Gvar.var_2178 = 1;
        }
        if (Gvar.belongings_item_list == 310) {
            Gvar.var_2177 = 0;
            Gvar.var_2178 = 0;
        }
        if (Gvar.belongings_item_list == 311) {
            Gvar.var_2177 = 0;
            Gvar.var_2178 = 0;
        }
        if (Gvar.belongings_item_list == 312) {
            Gvar.var_2177 = 2;
            Gvar.var_2178 = 0;
        }
        if (Gvar.belongings_item_list == 313) {
            Gvar.var_2177 = 1;
            Gvar.var_2178 = 1;
        }
        if (Gvar.belongings_item_list == 314) {
            Gvar.var_2177 = 0;
            Gvar.var_2178 = 6;
        }
        if (Gvar.belongings_item_list == 315) {
            Gvar.var_2177 = 2;
            Gvar.var_2178 = 1;
        }
        if (Gvar.belongings_item_list == 316) {
            Gvar.var_2177 = 0;
            Gvar.var_2178 = 0;
        }
        if (Gvar.belongings_item_list == 317) {
            Gvar.var_2177 = 4;
            Gvar.var_2178 = 1;
        }
        if (Gvar.belongings_item_list == 318) {
            Gvar.var_2177 = 2;
            Gvar.var_2178 = 3;
        }
        if (Gvar.belongings_item_list == 319) {
            Gvar.var_2177 = 2;
            Gvar.var_2178 = 2;
        }
        if (Gvar.belongings_item_list == 320) {
            Gvar.var_2177 = 0;
            Gvar.var_2178 = 0;
        }
        if (Gvar.belongings_item_list == 321) {
            Gvar.var_2177 = 0;
            Gvar.var_2178 = 0;
        }
        if (Gvar.belongings_item_list == 322) {
            Gvar.var_2177 = 0;
            Gvar.var_2178 = 0;
        }
        if (Gvar.belongings_item_list == 393) {
            Gvar.var_2177 = 0;
            Gvar.var_2178 = 0;
        }
        if (Gvar.belongings_item_list == 394) {
            Gvar.var_2177 = 9;
            Gvar.var_2178 = 9;
        }
        if (Gvar.belongings_item_list == 395) {
            Gvar.var_2177 = 0;
            Gvar.var_2178 = 0;
        }
        if (Gvar.belongings_item_list == 396) {
            Gvar.var_2177 = 0;
            Gvar.var_2178 = 0;
        }
        if (Gvar.belongings_item_list == 397) {
            Gvar.var_2177 = 8;
            Gvar.var_2178 = 8;
        }
        if (Gvar.belongings_item_list == 398) {
            Gvar.var_2177 = 10;
            Gvar.var_2178 = 10;
        }
        if (Gvar.belongings_item_list == 399) {
            Gvar.var_2177 = 12;
            Gvar.var_2178 = 12;
        }
        if (Gvar.disc_class == 1) {
            Gvar.var_894 = Gvar.var_2177 + Gvar.var_233[Gvar.var_225].Var4;
            Gvar.var_580 = Gvar.var_580 + Gvar.var_894;
            Gvar.kougeki_disc_id  = Gvar.belongings_item_list;
        }
        if (Gvar.disc_class == 2) {
            Gvar.var_895 = Gvar.var_2178 + Gvar.var_233[Gvar.var_225].Var4;
            Gvar.var_581 = Gvar.var_581 + Gvar.var_895;
            Gvar.bougyo_disc_id = Gvar.belongings_item_list;
        }
        if (Gvar.disc_class == 3) {
            Gvar.nouryoku_disc_id = Gvar.belongings_item_list;
        }
        return;
}

export {func493}
