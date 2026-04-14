/**
 * func681 — func681 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func681(this: any) {
        Adap.dbgprt(681);
        Gvar.current_level = Gvar.current_level + 1;
        Gvar.var_3087 = Adap.rnd(15);
        if (Gvar.dungeon_number == 99) {
            Gvar.var_3087 = 0;
        }
        if (Gvar.var_3087 == 0) {
            Gvar.var_352 = Gvar.var_352 + 3;
            Gvar.var_211 = Gvar.var_211 + 3;
        }
        if (Gvar.var_3087 == 1) {
            Gvar.var_352 = Gvar.var_352 + 3;
            Gvar.var_211 = Gvar.var_211 + 3;
        }
        if (Gvar.var_3087 == 2) {
            Gvar.var_352 = Gvar.var_352 + 4;
            Gvar.var_211 = Gvar.var_211 + 4;
        }
        if (Gvar.var_3087 == 3) {
            Gvar.var_352 = Gvar.var_352 + 4;
            Gvar.var_211 = Gvar.var_211 + 4;
        }
        if (Gvar.var_3087 == 4) {
            Gvar.var_352 = Gvar.var_352 + 4;
            Gvar.var_211 = Gvar.var_211 + 4;
        }
        if (Gvar.var_3087 == 5) {
            Gvar.var_352 = Gvar.var_352 + 4;
            Gvar.var_211 = Gvar.var_211 + 4;
        }
        if (Gvar.var_3087 == 6) {
            Gvar.var_352 = Gvar.var_352 + 4;
            Gvar.var_211 = Gvar.var_211 + 4;
        }
        if (Gvar.var_3087 == 7) {
            Gvar.var_352 = Gvar.var_352 + 5;
            Gvar.var_211 = Gvar.var_211 + 5;
        }
        if (Gvar.var_3087 == 8) {
            Gvar.var_352 = Gvar.var_352 + 5;
            Gvar.var_211 = Gvar.var_211 + 5;
        }
        if (Gvar.var_3087 == 9) {
            Gvar.var_352 = Gvar.var_352 + 5;
            Gvar.var_211 = Gvar.var_211 + 5;
        }
        if (Gvar.var_3087 == 10) {
            Gvar.var_352 = Gvar.var_352 + 5;
            Gvar.var_211 = Gvar.var_211 + 5;
        }
        if (Gvar.var_3087 == 11) {
            Gvar.var_352 = Gvar.var_352 + 5;
            Gvar.var_211 = Gvar.var_211 + 5;
        }
        if (Gvar.var_3087 == 12) {
            Gvar.var_352 = Gvar.var_352 + 6;
            Gvar.var_211 = Gvar.var_211 + 6;
        }
        if (Gvar.var_3087 == 13) {
            Gvar.var_352 = Gvar.var_352 + 6;
            Gvar.var_211 = Gvar.var_211 + 6;
        }
        if (Gvar.var_3087 == 14) {
            Gvar.var_352 = Gvar.var_352 + 6;
            Gvar.var_211 = Gvar.var_211 + 6;
        }
        if (Gvar.var_352 >= 999) {
            Gvar.var_352 = 999;
        }
        if (Gvar.var_211 >= Gvar.var_352) {
            Gvar.var_211 = Gvar.var_352;
        }
        Gvar.var_2201 = 1;
        return;
}

export {func681}
