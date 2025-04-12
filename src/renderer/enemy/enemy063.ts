import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 63 プロシュート兄貴の特殊能力
async function enemy063(this: any) {
    Gvar.var_2830 = Adap.rnd(5);
    if (Gvar.var_566 <= 0) {
        return;
    }
    if (Gvar.var_2830 == 0 || Gvar.var_2830 == 1) {
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        Gvar.var_743 = 1; // スタンド像付与フラグON
        Gvar.var_389 = 2;
        Adap.DSPLAY(121);
        await Func.setMessage1("接触老化攻撃だ！", "", 8, true, false, false);
        await Func.func619();
        await Func.AutoDraw(10);
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_743 = 0; // スタンド像付与フラグOFF
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        Gvar.var_389 = 0;
    }
    if (Gvar.var_2830 == 0 || Gvar.var_2830 == 1) {
        if (Gvar.equip_disc[207] == 1) {
            await Func.setMessage1("しかし 装備中のDISCによって", 
                                    "老化攻撃を防いだ！", 7, false, false, false);
            Gvar.var_2197 = 1;
            return;
        }
        if (Gvar.nouryoku_disc_id == 202 || Gvar.shageki_disc_id == 404) {
            await Func.setMessage1("しかし 装備中のDISCによって", 
                                    "体が冷やされ 無事だった！", 7, false, false, false);
            Gvar.var_2197 = 1;
            return;
        }
    }
    if (Gvar.var_2830 == 0) {
        Gvar.var_566 = Gvar.var_566 - 1;
        if (Gvar.var_566 < 0) {
            Gvar.var_566 = 0;
        }
        if (Gvar.var_565 > Gvar.var_566) {
            Gvar.var_565 = Gvar.var_566;
        }
        Adap.DSPLAY(164);
        await Func.setMessage1("精神力の最大値が １下がった！", "", 8, false, false, false);
        Gvar.var_2197 = 1;
    }
    if (Gvar.var_2830 == 1) {
        Adap.DSPLAY(164);
        Gvar.var_2903 = Adap.rnd(3);
        Gvar.var_2903 = Gvar.var_2903 + 3;
        Gvar.var_352 = Gvar.var_352 - Gvar.var_2903;
        if (Gvar.var_352 < 1) {
            Gvar.var_352 = 1;
            Gvar.var_2903 = 0;
        }
        if (Gvar.var_211 > Gvar.var_352) {
            Gvar.var_211 = Gvar.var_352;
        }
        await Func.setMessage1("最大HPが " + Gvar.var_2903 + "下がった！", "", 8, false, false, false);
        Gvar.var_2197 = 1;
    }
    return;
}

export { enemy063 }
