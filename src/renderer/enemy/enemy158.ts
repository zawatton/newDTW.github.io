import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 158 プッツン由花子の特殊能力
async function enemy158(this: any) {
        Gvar.var_2893 = Adap.rnd(3);
        if (Gvar.var_2893 == 0 || Gvar.var_114 >= 1 || Gvar.var_128 != 0 || Gvar.var_219 != 0) {
            return;
        }
        await Func.func619();
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        Gvar.var_463 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_464 = Gvar.var_83[Gvar.var_673].Var2;
        Gvar.var_114 = Gvar.var_673;
        await Func.setMessage1("「絶対に逃がさないわッ！」", "", 8, false, false, false);
        await Func.AutoDraw(3);
        Adap.DSPLAY(136);
        Gvar.var_1382 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1382++;
        }
        Gvar.var_1382 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_461 = Gvar.var_66;
        Gvar.var_462 = Gvar.var_67;
        Gvar.var_2197 = 1;
        return;
}

export {enemy158}
