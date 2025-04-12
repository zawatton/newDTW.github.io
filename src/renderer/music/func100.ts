import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func100(this: any) {
        Adap.dbgprt(100);
        Gvar.se_file_name = 171;
        if (Gvar.var_488 >= 100 && Gvar.var_488 < 500) {
            Gvar.se_file_name = 171;
        }
        if (Gvar.var_488 == 800) {
            Gvar.se_file_name = 203;
        }
        if (Gvar.var_488 >= 750 && Gvar.var_488 < 800) {
            Gvar.se_file_name = 203;
        }
        if (Gvar.var_488 >= 900 && Gvar.var_488 < 1000) {
            Gvar.se_file_name = 203;
        }
        if (Gvar.var_488 >= 805 && Gvar.var_488 <= 809) {
            Gvar.se_file_name = 204;
        }
        if (Gvar.var_488 == 854) {
            Gvar.se_file_name = 204;
        }
        if (Gvar.var_488 == 850 || Gvar.var_488 == 851) {
            Gvar.se_file_name = 205;
        }
        Adap.DSPLAY(Gvar.se_file_name);
        Gvar.var_488 = 0;
        return;
}

export {func100}
