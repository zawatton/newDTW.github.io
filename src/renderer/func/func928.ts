import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func928(this: any) {
        Adap.dbgprt(928);
        if (Gvar.var_3600 == 0) {
            Gvar.var_3601 = "地上";
        }
        if (Gvar.var_3600 == 1) {
            Gvar.var_3601 = "ホテル外 ";
        }
        if (Gvar.var_3600 == 2) {
            Gvar.var_3601 = "大迷宮 ";
        }
        if (Gvar.var_3600 == 3) {
            Gvar.var_3601 = "試練  ";
        }
        if (Gvar.var_3600 == 4) {
            Gvar.var_3601 = "一巡後 ";
        }
        if (Gvar.var_3600 == 5) {
            Gvar.var_3601 = "鉄獄 ";
        }
        if (Gvar.var_3600 >= 6) {
            Gvar.var_3601 = "";
        }
        return;
}

export {func928}
