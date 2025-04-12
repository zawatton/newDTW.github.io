import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func882(this: any) {
        Adap.dbgprt(882);
        await Music.func108(); // BGM用mp3ファイル再生停止
        Gvar.var_3481 = 26;
        Gvar.var_3482 = 106;
        Gvar.var_3483 = Gvar.var_3482;
        Gvar.var_3484 = 57;
        Gvar.var_3485 = 110;
        Gvar.var_3486 = 1;
        Gvar.var_3487 = 1;
        Gvar.var_3488 = 1;
        Gvar.var_3489 = 0;
        if (Gvar.var_709 != 0 || Gvar.var_716 != 0 || Gvar.var_723 != 0) {
            Gvar.var_3489 = 1;
            Gvar.var_3486 = 0;
        }
        if (Gvar.var_710 != 0 || Gvar.var_717 != 0 || Gvar.var_724 != 0) {
            Gvar.var_3489 = 2;
            Gvar.var_3486 = 0;
        }
        Gvar.var_3490 = Adap.sdim(10000);

        Adap.dirlist(Gvar.var_3490, "問題", 5);
        if (Gvar.stat == 0) {
            Adap.mkdir("問題");
        }
        Adap.chdir("問題");
        await Func.func883();
}

export {func882}
