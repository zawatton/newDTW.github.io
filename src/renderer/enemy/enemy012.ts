/**
 * enemy012 — No = 12 敵エコーズACT2の特殊能力
 *
 * (org原典: newDTW_enemy / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 12 敵エコーズACT2の特殊能力
async function enemy012(this: any) {
        Gvar.var_2830 = Adap.rnd(3);
        if (Gvar.var_2830 == 0 && Gvar.var_133 == 0) {
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            Adap.DSPLAY(122);
            if (Gvar.enemy_list == 145 || Gvar.enemy_list == 150) {
                Gvar.var_743 = 1; //スタンド像付与フラグON
            }
            await Func.setMessage("「エコーズ ３ FREEZE ！」", "", 8, true, false, false);
            await Func.AutoDraw(10);

            Gvar.var_743 = 0; //スタンド像付与フラグOFF
            if (Gvar.var_128 >= 1) {
                await Func.func023();
            }
            if (Gvar.equip_disc[396] == 0) {
                if (Gvar.var_157 == 0) { // Gvar.var_157 倍速移動フラグOFFであれば
                    Gvar.var_133 = 1;
                    Gvar.var_397 = 0;
                }
                if (Gvar.var_157 != 0) { // Gvar.var_157 倍速移動フラグがOFFでなければ
                    Gvar.var_157 = 0; // Gvar.var_157 倍速移動フラグOFF
                    Gvar.var_158 = 0;
                }
            }
            await Func.func619();
            Adap.DSPLAY(162);
            await Func.setMessage("体が重くなってしまった！", "", 7, true, true, false);
            
            if (Gvar.equip_disc[396] == 1) {
                await Func.setMessage("しかし装備スタンドの効果で",
                                       "速度は遅くならない！", 7, false, true, true);
            }
            await Func.AutoDraw(10);
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy012}
