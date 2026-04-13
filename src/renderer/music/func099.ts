import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func099
async function func099(this: any) {
        Adap.dbgprt(99);
        Gvar.se_file_name = 142;
        Adap.DSPLAY(Gvar.se_file_name);
        return;
}

export {func099}
