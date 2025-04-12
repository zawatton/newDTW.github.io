import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func036(this: any) {
        Adap.dbgprt(36);
        await Func.setMessage1("混乱状態が治った", "", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func036}
