import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1028(this: any) {
        Adap.dbgprt(1028);
        Gvar.var_540 = 1;
        await Func.func099();
        Gvar.var_283 = Gvar.var_286;
        Gvar.var_284 = Gvar.var_287;
        Gvar.var_286 = "「暗黒空間にバラ撒いてやるッ！」";
        Gvar.var_287 = "";
        Gvar.var_24 = Gvar.var_24[2];
        Gvar.var_25 = Gvar.var_25[2];
        Gvar.var_26 = Gvar.var_26[2];
        await Func.func053();
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_540 = 2;
        await Func.func354();
        Gvar.var_540 = 3;
        await Func.func354();
        Gvar.var_540 = 4;
        await Func.func354();
        Gvar.var_540 = 5;
        await Func.func354();
        Gvar.var_540 = 6;
        await Func.func354();
        Gvar.var_540 = 7;
        await Func.func354();
        Gvar.var_540 = 8;
        await Func.func354();
        Gvar.var_540 = 0;
        Gvar.var_176 = 118;
        await Func.func1016();
        Gvar.var_540 = 2;
        await Func.func354();
        Gvar.var_540 = 1;
        await Func.func354();
        Gvar.var_540 = 0;
        await Func.func1015();
        Gvar.var_147 = 0;
        return;
}

export {func1028}
