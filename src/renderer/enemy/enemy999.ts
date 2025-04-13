import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 999 没敵の特殊能力
async function enemy999(this: any) {
        Gvar.var_2830 = Adap.rnd(4);
        if (Gvar.var_2830 == 0 && Gvar.var_565 >= 1) {
            if (Gvar.var_128 >= 1) {
                await Func.func023();
            }
            await Func.func619();
            if (Gvar.var_83[Gvar.var_673].Var5 == 2) {
                Gvar.var_2889 = 8;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 8) {
                Gvar.var_2889 = 2;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
                Gvar.var_2889 = 6;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
                Gvar.var_2889 = 4;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 7) {
                Gvar.var_2889 = 3;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 9) {
                Gvar.var_2889 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 1) {
                Gvar.var_2889 = 9;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 3) {
                Gvar.var_2889 = 7;
            }
            Gvar.var_83[Gvar.var_673].Var5 = Gvar.var_2889;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_742 = 1;
            }
            await Func.setMessage("『プ…』", "", 8, false, false, false);
            Gvar.var_389 = 2;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_458 = 1;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_458++;
                Gvar.var_742 = 1;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_458 = 0;
            Gvar.var_389 = 0;
            Gvar.var_742 = 0;
            await Func.AutoDraw(5);
            Gvar.var_565 = Gvar.var_565 - 1;
            if (Gvar.var_565 <= 0) {
                Gvar.var_565 = 0;
            }
            await Func.setMessage("精神力が下がってしまった！", "", 8, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy999}
