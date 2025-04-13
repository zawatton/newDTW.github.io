import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func237(this: any) {
        Adap.dbgprt(237);
        await Func.setMessage("確認のため「K」キーを押してください", "", 7, false, false, false);
        Gvar.var_1061 = 2;
        await Func.func238();
}

export {func237}
