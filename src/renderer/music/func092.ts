import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func092
async function func092(this: any) {
        Adap.dbgprt(92);
        Gvar.se_file_name = 103;
        Adap.DSPLAY(Gvar.se_file_name);
        Gvar.var_672 = 0;
        return;
}

export {func092}
