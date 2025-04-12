import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func109(this: any) {
        Adap.dbgprt(109);
        Adap.DMINIT();
        Gvar.bgm_file_name = "102.mp3";
        await Adap.exist(Gvar.bgm_file_name);
        Gvar.var_679 = Gvar.strsize;
        Gvar.var_680 = Adap.sdim(Gvar.var_679);
        Gvar.var_680 = await Adap.bload(Gvar.bgm_file_name);
        Adap.DMLOADMEMORY(Gvar.var_680, Gvar.var_679, 1);
        //var_680 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_679);
        //Adap.DMLOADMEMORY(Gvar.var_680, 1);
        if (Gvar.var_631 != 0) {
            Adap.DMPLAY(Gvar.var_631, 1);
        }
        return;
}

export {func109}
