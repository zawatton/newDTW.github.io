import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func902
async function func0961(this: any) {
    if (Gvar.var_494[1] != "") {
        Gvar.var_3863 = Gvar.var_494[1];
        await Func.func0962();
        Gvar.var_3864 = "" + Gvar.var_3865 + "" + Gvar.var_494[1];
        Adap.tcpput(Gvar.var_3864, Gvar.var_1050);
        Adap.tcpput("\n", Gvar.var_1050);
    }
    if (Gvar.var_494[2] != "") {
        Gvar.var_3863 = Gvar.var_494[2];
        await Func.func0962();
        Gvar.var_3866 = "" + Gvar.var_3865 + "" + Gvar.var_494[2];
        Adap.tcpput(Gvar.var_3866, Gvar.var_1050);
        Adap.tcpput("\n", Gvar.var_1050);
    }
    await Func.func0966();
    return;
}

export {func0961}
