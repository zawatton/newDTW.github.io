import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func034(this: any) {
        Adap.dbgprt(34);
        if (Gvar.var_132 != 0) {
            return;
        }
        await Func.setMessage("盲目状態が治った", "", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func034}
