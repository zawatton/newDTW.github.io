import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func898
async function func0957(this: any) {
    if (Gvar.var_3838 == 0) {
        Gvar.var_3839 = "初水";
    }
    if (Gvar.var_3838 == 1) {
        Gvar.var_3839 = "初赤";
    }
    if (Gvar.var_3838 == 2) {
        Gvar.var_3839 = "初青";
    }
    if (Gvar.var_3838 == 3) {
        Gvar.var_3839 = "初黄";
    }
    Adap.tcpput("" + Gvar.var_3839 + "" + Gvar.var_40, Gvar.var_1050);
    Adap.tcpput("\n", Gvar.var_1050);
    Gvar.var_3833 = 0;
    Gvar.var_3834 = 0;
    for (let cnt1 = 0; true; ++cnt1) {
        Gvar.var_3840 = Adap.sdim(1024);
        Adap.tcpgetl(Gvar.var_3840, 1024, Gvar.var_1050);
        if (Gvar.stat != 0 && Gvar.var_3840 == "o2") {
            Gvar.var_3834 = 1;
            break;
        }
        if (Gvar.stat != 0 && Gvar.var_3840 == "ok") {
            Gvar.var_3834 = 0;
            break;
        }
        if (Gvar.stat != 0 && Gvar.var_3840 == "man") {
            Gvar.var_3833 = 1;
            break;
        }
        await Adap.wait(1);
    }
    return;
}

export {func0957}
