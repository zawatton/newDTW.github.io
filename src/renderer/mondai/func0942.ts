import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func883
async function func0942(this: any) {
    Gvar.var_627 = 1;
    Gvar.var_3793 = Adap.sdim(10000);
    Adap.dirlist(Gvar.var_3793, "*.btq");
    Adap.notesel(Gvar.var_3793);
    Gvar.var_3794 = 0;
    Gvar.var_3794 = Adap.noteinfo(0);
    Gvar.var_3795 = Math.floor(Gvar.var_3794 / 10) + 1;
    Gvar.var_3796 = Adap.dim(Gvar.var_3794);
    Gvar.var_3797 = 0;
    Gvar.var_3798 = "";
    for (let cnt1 = 0; cnt1 < Gvar.var_3794; ++cnt1) {
        Gvar.var_3496 = Adap.noteget(Gvar.var_3797);

        Gvar.var_3798 = await Adap.bload(Gvar.var_3496, 1);
        if (Gvar.var_3798 == "0" || Gvar.var_3798 == "1") {
            Gvar.var_3796[Gvar.var_3797] = 0;
        }
        if (Gvar.var_3798 == "2") {
            Gvar.var_3796[Gvar.var_3797] = 1;
        }
        if (Gvar.var_3798 == "3") {
            Gvar.var_3796[Gvar.var_3797] = 2;
        }
        if (Gvar.var_3798 == "4") {
            Gvar.var_3796[Gvar.var_3797] = 3;
        }
        Gvar.var_3797++;
    }
    // await Func.func0943(); // α版より消去
}

export {func0942}
