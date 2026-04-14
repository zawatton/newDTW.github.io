/**
 * func0855 — func855 不明
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func800
async function func0855(this: any) {
    Gvar.var_3186 = 10;
    Gvar.var_3187 = 120;
    Adap.color(0, 0, 0);
    Adap.gmode(4, null, null, 100);
    Adap.pos(Gvar.var_3186 - 3, 37);
    Adap.gcopy(12, 0, 0, Gvar.var_3187 + 7, 53);
    Adap.color(255, 255, 255);
    Adap.line(Gvar.var_3186, 39, Gvar.var_3186 + Gvar.var_3187, 39);
    Adap.line(Gvar.var_3186, 86, Gvar.var_3186 + Gvar.var_3187, 86);
    Adap.line(Gvar.var_3186 - 1, 40, Gvar.var_3186 - 1, 84);
    Adap.line(Gvar.var_3186 + Gvar.var_3187 + 2, 40, Gvar.var_3186 + Gvar.var_3187 + 2, 84);
    Adap.pset(Gvar.var_3186, 40);
    Adap.pset(Gvar.var_3186 + Gvar.var_3187 + 1, 40);
    Adap.pset(Gvar.var_3186, 85);
    Adap.pset(Gvar.var_3186 + Gvar.var_3187 + 1, 85);
    Adap.font(Gvar.font_type, Gvar.font_size = 20, Gvar.font_style = 1);
    Adap.color(255, 255, 255);
    Adap.pos(Gvar.var_3186 + 10, 53);
    Adap.mes("" + Gvar.var_3175);
    Adap.pos(Gvar.var_3186 + 10 + 15, 53);
    Adap.mes("" + Gvar.var_3174);
    Adap.pos(Gvar.var_3186 + 10 + 30, 53);
    Adap.mes("" + Gvar.var_3173);
    Adap.pos(Gvar.var_3186 + 10 + 45, 53);
    Adap.mes("" + Gvar.var_3172);
    Adap.pos(Gvar.var_3186 + 10 + 60, 53);
    Adap.mes("" + Gvar.var_3171);
    Adap.pos(Gvar.var_3186 + 10 + 75, 53);
    Adap.mes("" + Gvar.var_3170);
    Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
    Adap.pos(Gvar.var_3186 + 10 + 90, 55);
    Adap.mes("G");
    Adap.font(Gvar.font_type, Gvar.font_size = 20, Gvar.font_style = 1);
    Adap.color(0, 255, 0);
    Adap.pos(Gvar.var_3180, 55);
    Adap.mes("_");
    return;
}

export {func0855}
