/**
 * func104 — func104 BGM用mp3ファイル再生
 *
 * (org原典: newDTW_audio)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func104
async function func104(this: any) {
        Adap.dbgprt(104);
        await Adap.exist(Gvar.bgm_file_name);
        Gvar.var_679 = Gvar.strsize;
        Gvar.var_680 = Adap.sdim(Gvar.var_679);
        Gvar.var_680 = await Adap.bload(Gvar.bgm_file_name);
        Adap.DMLOADMEMORY(Gvar.var_680, Gvar.var_679, 1);
        if (Gvar.var_631 != 0) {
            Adap.DMPLAY(Gvar.var_631, 1);
        }
        return;
}

export {func104}
