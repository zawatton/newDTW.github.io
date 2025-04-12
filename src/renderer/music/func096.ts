import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func096(this: any) {
        Adap.dbgprt(96);
        Gvar.se_file_name = 103;
        if (Gvar.var_674 == 151 || Gvar.var_674 == 171 || Gvar.var_674 == 132) {
            Gvar.se_file_name = 111;
        }
        if (Gvar.var_674 == 113) {
            Gvar.se_file_name = 115;
        }
        if (Gvar.var_674 == 136) {
            Gvar.se_file_name = 195;
        }
        Adap.DSPLAY(Gvar.se_file_name);
        Gvar.var_674 = 0;
        return;
}

export {func096}
