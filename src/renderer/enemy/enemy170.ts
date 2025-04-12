import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 170 敵カタツムリの特殊能力
async function enemy170(this: any) {
        if (Gvar.var_133 == 0 && Gvar.var_127 == 0) {
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;

            Adap.DSPLAY(123);
            if (Gvar.var_128 >= 1) {
                await Func.func023();
            }
            await Func.func619();
            await Func.AutoDraw(10);
            if (Gvar.equip_disc[396] == 0) {
                if (Gvar.var_157 == 0) { // Gvar.var_157 倍速移動フラグOFFであれば
                    Gvar.var_133 = 1;
                    Gvar.var_397 = 0;
                }
                if (Gvar.var_157 != 0) { // Gvar.var_157 倍速移動フラグOFFでなければ
                    Gvar.var_157 = 0; // Gvar.var_157 倍速移動フラグOFF
                    Gvar.var_158 = 0;
                }
            }
            await Func.setMessage1("動作がノロくなってしまった！", "", 8, false, false, false);
            await Func.AutoDraw(10);
            // No = 396 メイドインヘヴンのDISCを装備している場合
            if (Gvar.equip_disc[396] == 1) {
                await Func.setMessage1("しかし装備スタンドの効果で", "速度は遅くならない！", 7, true, false, true);
            }
        }
        Gvar.var_2197 = 1;
        return;
}

export {enemy170}
