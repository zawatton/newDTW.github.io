import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func843
async function func0902(this: any) {
    Adap.clrobj(Gvar.data0 = 9, Gvar.data1 = 9);
    Adap.objsize(60);
    Adap.pos(680 - 76, Gvar.var_3525 + 22);
    Adap.combox(Gvar.var_3554, 100, "回数\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10");
    return;
}

export {func0902}
