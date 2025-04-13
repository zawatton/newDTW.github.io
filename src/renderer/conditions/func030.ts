import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func030(this: any) {
        Adap.dbgprt(30);
        await Func.setMessage("鈍足状態が治った", "", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func030}
