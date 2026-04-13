import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1007(this: any) {
        Adap.dbgprt(1007);
        await Func.func763();
        if (Gvar.var_631 >= 1) {
                await Func.func0890(); return;
        }
        Gvar.var_76 = 0;
        Gvar.var_70 = 6;
        Gvar.var_79 = 1;
        if (Gvar.var_79 > Gvar.var_408) {
                Gvar.var_408 = Gvar.var_79;
        }
        if (Gvar.var_79 > Gvar.var_413) {
                Gvar.var_413 = Gvar.var_79;
        }
        Gvar.var_461 = 0;
        Gvar.var_375 = 0;
        Gvar.var_405 = 5;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_405 = 4;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_405 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_405 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_405 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_405 = 0;
        Gvar.var_300 = 0;
        await Func.func117();
        await Func.func195();
        await Func.func065();
        await Func.func534();
        await Func.func536();
        await Func.func537();
        Gvar.var_483 = 0;
        Gvar.var_381 = 100;
        Gvar.var_649 = 100;
        Gvar.var_383 = 15;
        Gvar.var_236 = 15;
        Gvar.var_944 = 1;
        Gvar.var_650 = 0;
        Gvar.var_647 = 8;
        Gvar.var_648 = 8;
        if (Gvar.var_859 == 1) {
                Gvar.var_859 = 2;
        }
        if (Gvar.var_463 == 1) {
                await Func.func0964();
        }
        if (Gvar.var_463 == 2) {
                await Func.func0992();
        }
        Gvar.var_230 = 1;
        await Func.func244();
        await Func.func080();
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
                await Func.func357();
        }
        Adap.DSPLAY(101);
        Gvar.var_886 = 0;
        await Func.func006(); return;
}

export {func1007}
