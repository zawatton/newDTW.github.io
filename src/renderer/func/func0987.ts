import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func928
async function func0987(this: any) {
    if (Gvar.var_3903 == 0) {
        Gvar.var_3904 = "地上";
    }
    if (Gvar.var_3903 == 1) {
        Gvar.var_3904 = "ホテル外 ";
    }
    if (Gvar.var_3903 == 2) {
        Gvar.var_3904 = "大迷宮 ";
    }
    if (Gvar.var_3903 == 3) {
        Gvar.var_3904 = "試練  ";
    }
    if (Gvar.var_3903 == 4) {
        Gvar.var_3904 = "一巡後 ";
    }
    if (Gvar.var_3903 == 5) {
        Gvar.var_3904 = "鉄獄 ";
    }
    if (Gvar.var_3903 >= 6) { // α版より移植
        Gvar.var_3904 = "白蛇";
    }
    if (Gvar.var_3903 >= 7) { // α版より移植
        Gvar.var_3904 = "絶頂";
    }
    if (Gvar.var_3903 >= 8) { // α版より移植
        Gvar.var_3904 = "";
    }
    return;
}

export {func0987}
