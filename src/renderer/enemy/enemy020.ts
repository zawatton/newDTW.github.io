import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 20 エンヤ婆の動作処理
async function enemy020(this: any) {
        Gvar.var_2830 = Adap.rnd(3);
        if (Gvar.var_2830 == 0) {
            Adap.DSPLAY(161);
            Gvar.var_1163 = 1; // 敵エンヤ婆の能力発動フラグON
            await Func.AutoDraw(16);
            Gvar.var_1163 = 0; // 敵エンヤ婆の能力発動フラグOFF
            Gvar.var_2521 = 1;
            Gvar.var_1845 = 1;
            Gvar.var_2353 = Gvar.var_673;
            Gvar.var_2471 = Adap.rnd(4);
            for (let cnt3 = 0; cnt3 < Gvar.var_2471 + 1; ++cnt3) {
                await Func.func556();
            }
            Gvar.var_673 = Gvar.var_2353;
            Gvar.var_2521 = 0;
            Gvar.var_1845 = 0;
            await Func.setMessage1("ｴﾝﾔ婆は 死体 を呼び寄せた！",
                                   "", 8, false, false, false);
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            await Func.AutoDraw(16);
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy020}
