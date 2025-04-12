import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 18 ブラック・サバスの行動
async function enemy018(this: any) {
        Gvar.var_2830 = Adap.rnd(8);
        if (Gvar.var_2830 == 0) {
            await Func.setMessage1("「チャンスをやろう…",
                                   "  向かうべき『２つの道』を……！」", 8, true, false, true);
            await Func.AutoDraw(15);
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            await Func.AutoDraw(3);
            await Func.func619();
            Adap.DSPLAY(103); // 殴った時の効果音
            Gvar.var_747 = 1;
            Gvar.var_209 = 20;
            Gvar.var_389 = 2;
            Adap.DSPLAY(111);
            await Func.AutoDraw(10);
            Gvar.var_2228 = 1;
            await Func.func531();
            if (Gvar.var_2228 == 0) {
                await Func.setMessage1("" + Gvar.target_item_name + "に",
                                       "新たな装備効果が発現した！", 7, true, true, false);
            }
            if (Gvar.var_2228 == 1) {
                await Func.setMessage1("「この【魂】  選ばれるものでは…」",
                                       "", 7, true, true, true);

                Gvar.var_2891 = Math.floor(Gvar.var_211 / 2);
                Gvar.var_211 = Gvar.var_211 - Gvar.var_2891;
                if (Gvar.var_211 <= 1) {
                    Gvar.var_211 = 1;
                }
                Gvar.var_208 = Gvar.var_208 + Gvar.var_2891;
                await Func.setMessage1("「なかった！」",
                                       "", 7, true, true, true);

                await Func.setMessage1("HPが半分になった。",
                                        "", 7, false, true, false);
            }
            Gvar.var_389 = 0;
            await Func.AutoDraw(10);
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy018}
