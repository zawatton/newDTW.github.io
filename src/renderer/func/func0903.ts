import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func844
async function func0903(this: any) {
    Adap.clrobj(Gvar.data0 = 9, Gvar.data1 = 9);
    Adap.objsize(60);
    Adap.pos(680 - 76, Gvar.var_3525 + 22);
    Adap.combox(Gvar.var_3555, 100, "金額\n100G\n200G\n300G\n400G\n500G\n600G\n700G\n800G\n900G");
    return;
}

export {func0903}
