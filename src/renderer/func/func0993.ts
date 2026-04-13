import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func934
async function func0993(this: any) {
    if (Gvar.var_624 == 0) {
        Gvar.var_3905 = "０";
    }
    if (Gvar.var_624 == 1) {
        Gvar.var_3905 = "１";
    }
    if (Gvar.var_624 == 2) {
        Gvar.var_3905 = "２";
    }
    if (Gvar.var_624 == 3) {
        Gvar.var_3905 = "３";
    }
    if (Gvar.var_624 == 4) {
        Gvar.var_3905 = "４";
    }
    if (Gvar.var_624 == 5) {
        Gvar.var_3905 = "５";
    }
    if (Gvar.var_624 == 6) {
        Gvar.var_3905 = "６";
    }
    if (Gvar.var_624 == 7) {
        Gvar.var_3905 = "７";
    }
    if (Gvar.var_624 == 8) {
        Gvar.var_3905 = "８";
    }
    Gvar.var_3906 = "窓数" + Gvar.var_3905;
    Adap.tcpput(Gvar.var_3906, Gvar.var_1050);
    Adap.tcpput("\n", Gvar.var_1050);
    return;
}

export {func0993}
