import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func087(this: any) {
        Adap.dbgprt(87);
        Gvar.bgm_volume = Gvar.bgm_volume + 1;
        if (Gvar.bgm_volume >= 150) { // Ver0.1310で値を修正 (100 → 150)
            Gvar.bgm_volume = 150; // Ver0.1310で値を修正 (100 → 150)
        }
        Adap.DSSETMASTERVOLUME(Gvar.bgm_volume);
        Gvar.var_636 = 1;
        Gvar.var_635 = 0;
        Gvar.var_632 = 0;
        Gvar.var_633 = 0;
        return;
}

export {func087}
