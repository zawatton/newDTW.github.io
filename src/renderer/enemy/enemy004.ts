/**
 * enemy004 — No = 4 敵デス・13の特殊能力
 *
 * (org原典: newDTW_enemy / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 4 敵デス・13の特殊能力
async function enemy004(this: any) {
        Gvar.var_2830 = Adap.rnd(5);
        if (Gvar.var_2830 == 0 && Gvar.var_219 == 0 && Gvar.var_128 == 0) {
            Adap.DSPLAY(131);
            Gvar.var_83[Gvar.var_673].Var21 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1286 = Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4 * 40;
            Gvar.var_1287 = Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4 * 40 - 50;
            Gvar.var_1309 = 1;
            for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                if (Gvar.var_83[Gvar.var_673].Var5 == 1 || Gvar.var_83[Gvar.var_673].Var5 == 2 || Gvar.var_83[Gvar.var_673].Var5 == 3) {
                    Gvar.var_411 = 1;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 7 || Gvar.var_83[Gvar.var_673].Var5 == 8 || Gvar.var_83[Gvar.var_673].Var5 == 9) {
                    Gvar.var_411 = 2;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
                    Gvar.var_411 = 3;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
                    Gvar.var_411 = 4;
                }
                Gvar.var_1309 = Gvar.var_1309 + 1;
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1309 = 0;
            Gvar.var_83[Gvar.var_673].Var21 = 0;
            await Func.func619();

            if (Gvar.var_120 == 0) {
                await Func.setMessage("ﾃﾞｨｱﾎﾞﾛは眠ってしまった！", "", 8, false, false, false);
                Adap.DSPLAY(132);
                Gvar.var_219 = 1;
            }
            if (Gvar.var_120 == 1) {
                await Func.setMessage("10時間熟睡した気分になっていて", "眠くならなかった！", 7, false, false, false);
                Gvar.var_219 = 0;
            }
            if (Gvar.equip_disc[351] == 1) {
                await Func.setMessage("装備DISCの効果によって", "眠くならなかった！", 7, false, false, false);
                Gvar.var_219 = 0;
            }
            if (Gvar.shageki_disc_id == 400 || Gvar.shageki_disc_id == 407) {
                await Func.setMessage("装備DISCの効果によって", "眠らずにすんだ！", 7, false, false, false);
                Gvar.var_219 = 0;
            }
            await Func.AutoDraw(10);
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy004}
