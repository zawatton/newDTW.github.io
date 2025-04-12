import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func880(this: any) {
        Adap.dbgprt(880);
        await Music.func108(); // BGM用mp3ファイル再生停止
        Gvar.var_3462 = 0;
        Gvar.var_375 = 0;
        await Func.func235(); // ダンジョン(魔少年の問題のみ)へ入った際の全ステータス初期化処理
        Adap.onexit(0);
        if (Gvar.var_3475 == 1) {
            Adap.chdir("問題");
            if (Gvar.var_539 != 0) {
                Gvar.var_3476 = "2";
                await Adap.bsave(Gvar.var_3336, Gvar.data = Gvar.var_3476, 1, 0);
            }
            Gvar.var_539 = 0;
            Gvar.var_3475 = 0;
            await Func.func883();
            return;
        }
        Gvar.var_539 = 0;
        await Func.func841();
        return;
}

export {func880}
