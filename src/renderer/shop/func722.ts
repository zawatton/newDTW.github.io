import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func722
async function func722(this: any) {
        Adap.dbgprt(722);
        await Music.func137();
        if (Gvar.var_72[Gvar.var_66][Gvar.var_67] >= 1) {
            return;
        }
        if (Gvar.var_85 == 1) {
            return;
        }
        await Func.func721();
        if (Gvar.var_1008 == 0) {
            return;
        }
        Gvar.var_1010 = 0;
        Gvar.var_3120 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_3120].Var0 == 33) {
                Gvar.var_83[Gvar.var_3120].Var0 = 34;
                Gvar.var_83[Gvar.var_3120].Var12 = 0;
                Gvar.var_83[Gvar.var_3120].Var13 = 0;
                Gvar.var_83[Gvar.var_3120].Var31 = 1;
                Gvar.var_1010 = 1;
            }
            if (Gvar.var_83[Gvar.var_3120].Var0 == 34) {
                Gvar.var_83[Gvar.var_3120].Var12 = 0;
                Gvar.var_83[Gvar.var_3120].Var13 = 0;
                Gvar.var_1010 = 1;
            }
            Gvar.var_3120 = Gvar.var_3120 + 1;
        }
        if (Gvar.var_1010 == 0) {
            return;
        }
        Gvar.var_85 = 1;

        Adap.DSPLAY(150);
        await Music.func132();
        await Func.setMessage("ドロボーーー！", "", 9, true, false, true);
        await Func.setMessage("ただじゃあおきませンッ！", "", 9, false, false, true);
        for (let cnt1 = 0; cnt1 < 12; ++cnt1) {
            await Func.func556();
        }
        await Func.AutoDraw(5);
        return;
}

export {func722}
