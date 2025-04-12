import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func883(this: any) {
        Adap.dbgprt(883);
        Gvar.var_627 = 1;
        Gvar.var_3490 = Adap.sdim(10000);
        Adap.dirlist(Gvar.var_3490, "*.btq");
        Adap.notesel(Gvar.var_3490);
        Gvar.var_3491 = 0;
        Gvar.var_3491 = Adap.noteinfo(0);
        Gvar.var_3492 = Math.floor(Gvar.var_3491 / 10) + 1;
        Gvar.var_3493 = Adap.dim(Gvar.var_3491);
        Gvar.var_3494 = 0;
        Gvar.var_3495 = "";
        for (let cnt1 = 0; cnt1 < Gvar.var_3491; ++cnt1) {
            Gvar.var_3496 = Adap.noteget(Gvar.var_3494);
    
            Gvar.var_3495 = await Adap.bload(Gvar.var_3496, 1);
            if (Gvar.var_3495 == "0" || Gvar.var_3495 == "1") {
                Gvar.var_3493[Gvar.var_3494] = 0;
            }
            if (Gvar.var_3495 == "2") {
                Gvar.var_3493[Gvar.var_3494] = 1;
            }
            if (Gvar.var_3495 == "3") {
                Gvar.var_3493[Gvar.var_3494] = 2;
            }
            if (Gvar.var_3495 == "4") {
                Gvar.var_3493[Gvar.var_3494] = 3;
            }
            Gvar.var_3494++;
        }
        await Func.func884();
}

export {func883}
