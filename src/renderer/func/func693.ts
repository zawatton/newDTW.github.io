import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func693(this: any) {
        Adap.dbgprt(693);
        Gvar.var_3096 = Gvar.var_673;
        Gvar.var_2539 = 1;
        Gvar.var_1845 = 3;
        Gvar.var_1914 = Gvar.var_184;
        Gvar.var_1915 = Gvar.var_185;
        await Func.func556();
        Gvar.var_1845 = 0;
        Gvar.var_2539 = 0;
        Gvar.var_673 = Gvar.var_3096;
        Gvar.var_183 = 0;
        Gvar.var_184 = 0;
        Gvar.var_185 = 0;
        Gvar.var_186 = 0;
        return;
}

export {func693}
