import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func852
async function func0911(this: any) {
    Adap.redraw(0);
    await Func.func0914();
    await Func.func0919();
    await Func.func0920();
    await Func.func0912();
    if (Gvar.var_3593 != 0) {
        await Func.func0926();
    }
    Adap.redraw(1);
    await Adap.wait(1);
    return;
}

export {func0911}
