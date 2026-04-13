import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1046(this: any) {
        Adap.dbgprt(1046);
        Gvar.var_131 = 0;
        Gvar.var_532 = 0;
        Gvar.var_533 = 0;
        Gvar.var_530 = 0;
        Gvar.var_531 = 0;
        Gvar.var_2605 = Gvar.var_74;
        Gvar.var_2606 = Gvar.var_75;
        Gvar.var_2607 = Gvar.var_74 - 5;
        if (Gvar.var_2607 < 0) {
            Gvar.var_2607 = 0;
        }
        Gvar.var_2608 = Gvar.var_74 + 5;
        if (Gvar.var_2608 > Gvar.var_32) {
            Gvar.var_2608 = Gvar.var_32;
        }
        Gvar.var_2609 = Gvar.var_75 + 5;
        if (Gvar.var_2609 > Gvar.var_33) {
            Gvar.var_2609 = Gvar.var_33;
        }
        Gvar.var_2610 = Gvar.var_75 - 5;
        if (Gvar.var_2610 < 0) {
            Gvar.var_2610 = 0;
        }
        Gvar.var_2611 = 0;
        for (let cnt1 = 0; cnt1 < 10000; ++cnt1) {
            Gvar.var_2612 = Adap.rnd(Gvar.var_32);
            Gvar.var_2613 = Adap.rnd(Gvar.var_33);
            if (Gvar.var_2612 == Gvar.var_2605 && Gvar.var_2613 == Gvar.var_2606) {
                continue;
            }
            if (Gvar.var_2612 > Gvar.var_2607 && Gvar.var_2612 < Gvar.var_2608 && Gvar.var_2613 > Gvar.var_2610 && Gvar.var_2613 < Gvar.var_2609 && Gvar.var_93[Gvar.var_2612][Gvar.var_2613] == 0 && Gvar.var_82[Gvar.var_2612][Gvar.var_2613] != 0 && Gvar.var_82[Gvar.var_2612][Gvar.var_2613] != 13) {
                Gvar.var_2611 = 1;
                break;
            }
        }
        Gvar.var_224 = 2;
        if (Gvar.var_2611 == 1) {
            Gvar.var_74 = Gvar.var_2612;
            Gvar.var_75 = Gvar.var_2613;
            await Func.func016();
            if (Gvar.var_226 != 14) {
                await Func.func017();
            }
            await Func.func018();
            if (Gvar.var_225 == Gvar.var_226 && Gvar.var_104 != 8) {
                Gvar.var_109 = 1;
            }
            if (Gvar.var_227 == Gvar.var_226 && Gvar.var_104 != 8) {
                Gvar.var_110 = 1;
            }
            await Func.func348();
        }
        if (Gvar.var_2611 == 0) {
            Gvar.var_74 = Gvar.var_261;
            Gvar.var_75 = Gvar.var_262;
        }
        if (Gvar.var_176 == 3) {
            Gvar.var_310 = 1;
            Gvar.var_1451 = 1;
            Gvar.var_1431 = 170;
            Gvar.var_1432 = 140;
            Adap.DSPLAY(190);
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func354();
                Gvar.var_1451++;
            }
        }
        else {
            if (Gvar.var_176 == 115) {
                Adap.DSPLAY(183);
            }
            if (Gvar.var_176 == 27) {
                Adap.DSPLAY(183);
            }
            if (Gvar.var_176 == 86) {
                Adap.DSPLAY(123);
            }
            if (Gvar.var_176 == 44) {
                Adap.DSPLAY(120);
            }
            await Func.func354();
            Gvar.var_540 = 1;
            await Func.func354();
            Gvar.var_540 = 2;
            await Func.func354();
            Gvar.var_540 = 3;
            await Func.func354();
            Gvar.var_540 = 4;
            await Func.func354();
            Gvar.var_540 = 5;
            await Func.func354();
            Gvar.var_540 = 0;
        }
        Gvar.var_310 = 0;
        Gvar.var_1451 = 0;
        for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
            await Func.func354();
        }
        return;
}

export {func1046}
