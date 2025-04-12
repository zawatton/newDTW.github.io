import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func616(this: any) {
        Adap.dbgprt(616);
        if (Gvar.var_83[Gvar.var_2791].Var0 == 0) {
            Gvar.var_83[Gvar.var_673].Var18 = 0;
            return;
        }
        Gvar.var_83[Gvar.var_673].Var21 = 1;
        Gvar.var_411 = 1;
        await Func.AutoDraw(10);
        Gvar.var_411 = 2;
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1439 = 1;
        Gvar.var_1430 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_1431 = Gvar.var_83[Gvar.var_673].Var2;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1439 = Gvar.var_1439 + 1;
        }
        Gvar.var_742 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1439 = 0;
        Gvar.var_83[Gvar.var_673].Var18 = 0;
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1436 = 1;
        Gvar.var_1437 = (Gvar.var_2789 - Gvar.var_66 + 4) * 40;
        Gvar.var_1438 = (Gvar.var_2790 - Gvar.var_67 + 4) * 40 - 170;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1438 = Gvar.var_1438 + 40;
        }
        Gvar.var_455 = Gvar.var_2789;
        Gvar.var_456 = Gvar.var_2790;
        await Func.func586();
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1436 = 0;
        Gvar.var_83[Gvar.var_673].Var21 = 0;
        Gvar.var_411 = 0;
        await Func.AutoDraw(5);
        return;
}

export {func616}
