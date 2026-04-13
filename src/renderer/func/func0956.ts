import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func897
async function func0956(this: any) {
    if (Gvar.wparam == 8) {
        Adap.ShowWindow(Gvar.var_15, 7);
        return (0);
    }
    else {
        return;
    }
}

export {func0956}
