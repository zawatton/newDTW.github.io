import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 130 敵マリリンマンソンの特殊能力
async function enemy130(this: any) {
        if (Gvar.wallet == 0 || Gvar.var_169 <= 0 || Gvar.var_169 == 999999) {
            Gvar.var_2197 = 1;
            return;
        }
        Gvar.var_2888 = 500;
        if (Gvar.var_169 < 500) {
            Gvar.var_2888 = Gvar.var_169;
        }
        if (Gvar.wallet < 500) {
            Gvar.var_2888 = Gvar.wallet;
        }
        if (Gvar.var_2888 > Gvar.wallet) {
            Gvar.var_2888 = Gvar.wallet;
        }
        if (Gvar.var_169 < Gvar.var_2888) {
            Gvar.var_2888 = Gvar.var_169;
        }
        Gvar.var_169 = Gvar.var_169 - Gvar.var_2888;
        if (Gvar.var_169 <= 0) {
            Gvar.var_169 = 0;
        }
        if (Gvar.var_169 == 0) {
            Gvar.var_169 = 999999;
        }
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        await Func.func619();
        await Func.AutoDraw(10);
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.wallet = Gvar.wallet - Gvar.var_2888;
        if (Gvar.wallet < 0) {
            Gvar.wallet = 0;
        }
        await Func.setMessage1("" + Gvar.var_2888 + " G奪われた！", "", 8, false, false, false);
        await Func.AutoDraw(15);
        Gvar.var_2197 = 1;
        return;
}

export {enemy130}
