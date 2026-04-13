import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func872
async function func0931(this: any) {
    Adap.dialog(Gvar.data0 = "btq", Gvar.data1 = 17, "魔少年の問題ファイル");
    if (Gvar.stat == 0) {
        Adap.chdir(Gvar.var_30);
        await Func.func0910();
        return;
    }
    Gvar.var_3635 = Gvar.refstr;
    if (Adap.instr(Gvar.var_3635, 0, ".btq") == (-1)) {
        Gvar.var_3635 = "" + Gvar.var_3635 + ".btq";
    }
    Gvar.var_3572 = 1;
    await Func.func0932();
    Adap.chdir(Gvar.var_30);
    Adap.objsel(0);
    await Func.func0910();
    return;
}

export {func0931}
