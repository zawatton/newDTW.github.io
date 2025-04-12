import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func518(this: any) {
        Adap.dbgprt(518);
        Gvar.var_2359 = Gvar.var_66;
        Gvar.var_2360 = Gvar.var_67;
        Gvar.var_2361 = Gvar.var_66 - 5;
        if (Gvar.var_2361 < 0) {
            Gvar.var_2361 = 0;
        }
        Gvar.var_2362 = Gvar.var_66 + 5;
        if (Gvar.var_2362 > Gvar.var_33) {
            Gvar.var_2362 = Gvar.var_33;
        }
        Gvar.var_2363 = Gvar.var_67 + 5;
        if (Gvar.var_2363 > Gvar.var_34) {
            Gvar.var_2363 = Gvar.var_34;
        }
        Gvar.var_2364 = Gvar.var_67 - 5;
        if (Gvar.var_2364 < 0) {
            Gvar.var_2364 = 0;
        }
        Gvar.var_1396 = Gvar.var_83[Gvar.var_2194].Var1;
        Gvar.var_1397 = Gvar.var_83[Gvar.var_2194].Var2;
        Adap.DSPLAY(187);
        if (Gvar.var_1396 < Gvar.var_2361 || Gvar.var_1396 > Gvar.var_2362 || Gvar.var_1397 < Gvar.var_2364 || Gvar.var_1397 > Gvar.var_2363) {
            return;
        }
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1527 = 1;
        for (let cnt1 = 0; cnt1 < 7; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1527++;
        }
        Gvar.var_1527 = 0;
        return;
}

export {func518}
