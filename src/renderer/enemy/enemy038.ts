/**
 * enemy038 — No = 38 アレッシーの特殊能力
 *
 * (org原典: newDTW_enemy / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 38 アレッシーの特殊能力
async function enemy038(this: any) {
        Gvar.var_2830 = Adap.rnd(4);
        if (Gvar.var_2830 == 0) {
            Adap.DSPLAY(156);
            Gvar.var_83[Gvar.var_673].Var21 = 1;
            Gvar.var_411 = 1;
            Gvar.var_1495 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_389 = 2;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1495++;
            }
            Gvar.var_83[Gvar.var_673].Var21 = 0;
            Gvar.var_411 = 0;
            Gvar.var_1495 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_389 = 0;
            await Func.func619();
            if (Gvar.var_128 >= 1) {
                await Func.func023();
            }
            if (Gvar.equip_disc[207] == 1) {
                await Func.setMessage("しかし 装備中のDISCによって",
                                       "若返りを防いだ！", 8, false, false, false);
                await Func.AutoDraw(9);
                Gvar.var_2197 = 1;
                return;
            }
            if (Gvar.current_level > 1) {
                Gvar.current_level = Gvar.current_level - 1;
                Gvar.var_352 = Gvar.var_352 - 3;
                Gvar.var_211 = Gvar.var_211 - 3;
                Gvar.var_568 = Gvar.var_948[Gvar.current_level] - 1;
                if (Gvar.var_352 < 1) {
                    Gvar.var_352 = 1;
                }
                if (Gvar.var_211 < 1) {
                    Gvar.var_211 = 1;
                }
            }
            if (Gvar.current_level == 1) {
                Adap.DSPLAY(151);
                Gvar.var_211 = 0;
                Gvar.var_356 = 213;
                await Func.setMessage("胎児にまで戻された！",
                                       "", 8, false, false, false);
                await Func.AutoDraw(20);
                Gvar.var_2197 = 1;
                return;
            }
            Adap.DSPLAY(151);
            await Func.setMessage("レベルが下がってしまった！",
                                   "", 8, false, false, false);
            await Func.AutoDraw(9);
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy038}
