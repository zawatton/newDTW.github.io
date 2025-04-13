import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func690(this: any) {
        Adap.dbgprt(690);
        if (Gvar.var_2957 != 1) {
            Gvar.var_3095 = Adap.rnd(8);
        }
        if (Gvar.var_2957 == 1) {
            Gvar.var_3095 = 1;
            if (Gvar.var_2958 == 2) {
                Gvar.var_3095 = 0;
            }
        }
        if (Gvar.var_2957 == 2) {
            Gvar.var_3095 = 0;
        }
        if (Gvar.var_2957 == 3) {
            Gvar.var_3095 = 0;
        }
        if (Gvar.var_2959 == 1) {
            Gvar.var_3095 = 0;
        }
        if (Gvar.var_2959 == 2) {
            Gvar.var_3095 = 1;
        }
        Gvar.var_2959 = 0;
        if (Gvar.dungeon_number == 99) {
            if (Gvar.var_2957 == 4 || Gvar.var_2957 == 5) {
                Gvar.var_3095 = 1;
            }
        }
        if (Gvar.var_3095 == 0) {
            if (Gvar.var_2957 == 1) {
                Gvar.var_2531 = 1;
            }
            if (Gvar.var_2957 == 2) {
                Gvar.var_2531 = 4;
            }
            if (Gvar.var_2957 == 3) {
                Gvar.var_2531 = 5;
            }
            if (Gvar.var_2957 == 4) {
                Gvar.var_2531 = 2;
            }
            if (Gvar.var_2957 == 5) {
                Gvar.var_2531 = 3;
            }
            Gvar.var_3096 = Gvar.var_673;
            Gvar.var_1845 = 4;
            Gvar.var_2102 = Gvar.var_347;
            Gvar.var_2103 = Gvar.var_348;
            await Func.func556();
            Gvar.var_2531 = 0;
            Gvar.var_1845 = 0;
            Gvar.var_673 = Gvar.var_3096;
            if (Gvar.var_2957 == 1) {
                await Func.setMessage("", "ｴｺｰｽﾞの卵はｴｺｰｽﾞACT1に成長した！", 8, true, false, false);
            }
            if (Gvar.var_2957 == 2) {
                await Func.setMessage("", "ｴｺｰｽﾞはACT2に成長した！", 8, true, false, false);
            }
            if (Gvar.var_2957 == 3) {
                await Func.setMessage("", "ｴｺｰｽﾞはACT3に成長した！", 8, true, false, false);
            }
            if (Gvar.var_2957 == 4) {
                await Func.setMessage("", "ｴｺｰｽﾞACT1はさなぎになった！", 8, true, false, false);
            }
            if (Gvar.var_2957 == 5) {
                await Func.setMessage("", "ｴｺｰｽﾞACT2はさなぎになった！", 8, true, false, false);
            }
            await Func.AutoDraw(10);
        }
        Gvar.var_2957 = 0;
        return;
}

export {func690}
