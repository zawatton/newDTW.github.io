import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func088(this: any) {
        Adap.dbgprt(88);
        Gvar.bgm_volume = Gvar.bgm_volume - 1;
        if (Gvar.bgm_volume <= 0) {
            Gvar.bgm_volume = 0;
        }
        Adap.DSSETMASTERVOLUME(Gvar.bgm_volume);
        Gvar.var_636 = 1;
        Gvar.var_635 = 0;
        Gvar.var_632 = 0;
        Gvar.var_633 = 0;
        return;
}

export {func088}
