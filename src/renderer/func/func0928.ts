import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'
import * as Class from '../classes'

// 旧 func869
async function func0928(this: any) {
    if (Gvar.var_3573 == 0) {
        Adap.dialog(Gvar.data0 = "btq", Gvar.data1 = 16, "魔少年の問題ファイル");
        if (Gvar.stat == 0) {
            await Func.func0910();
            return;
        }
        Gvar.var_3635 = Gvar.refstr;
    }
    Adap.chdir(Gvar.var_30);
    Gvar.var_983 = Adap.sdim(3000);

    Gvar.var_71 = Adap.dim(70, 70, null, null);

    Gvar.var_65 = Adap.dim(70, 70, null, null);

    Gvar.var_82 = Adap.dim(70, 70, null, null);

    Gvar.var_77 = Adap.dim(70, 70, null, null);

    Gvar.var_80 = Adap.dim(70, 70, null, null);

    Gvar.var_73 = Adap.dim(70, 70, null, null);
    Gvar.var_986 = Adap.dim(100);

    Gvar.var_486 = Adap.dim(80, 21, 30, null);

    Gvar.var_76 = Adap.dim(100, 5, 3, null);

    Gvar.var_74 = Adap.dim(70, 70, null, null);
    Gvar.var_75 = Adap.dim(20);
    Gvar.var_83 = Class.CharactorInfo.dim(300);
    Gvar.var_78 = Class.ItemInfo.dim(300);

    Gvar.var_81 = Adap.dim(300, 7, null, null);
    await Func.func0940();
    await Func.func0929();
    Adap.clrobj(Gvar.data0 = 12, Gvar.data1 = null);
    await Func.func0915();
    await Func.func0916();
    Adap.objsel(0);
    Gvar.var_199 = 2;
    Gvar.var_66 = 26;
    Gvar.var_67 = 15;
    if (Gvar.var_3573 == 1) {
        Gvar.var_66 = Gvar.var_3636;
        Gvar.var_67 = Gvar.var_3637;
    }
    Gvar.var_3572 = 1;
    await Func.func0910();
    return;
}

export {func0928}
