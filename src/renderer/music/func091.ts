import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func091
async function func091(this: any) {
        Adap.dbgprt(91);
        Gvar.se_file_name = 103;
        Adap.DSPLAY(Gvar.se_file_name);
        return;
}

export {func091}
