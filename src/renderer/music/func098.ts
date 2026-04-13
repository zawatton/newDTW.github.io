import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func098
async function func098(this: any) {
        Adap.dbgprt(98);
        Gvar.se_file_name = 103;
        Adap.DSPLAY(Gvar.se_file_name);
        return;
}

export {func098}
