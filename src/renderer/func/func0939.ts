import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'
import * as Music from '../music/index'

// 旧 func880
async function func0939(this: any) {
    await Music.func108(); // BGM用mp3ファイル再生停止
    Gvar.var_3761 = 0;
    Gvar.var_375 = 0;
    await Func.func235(); // ダンジョン(魔少年の問題のみ)へ入った際の全ステータス初期化処理
    Adap.onexit(0);
    if (Gvar.var_3774 == 1) {
        Adap.chdir("問題");
        if (Gvar.var_539 != 0) {
            Gvar.var_3775 = "2";
            await Adap.bsave(Gvar.var_3635, Gvar.data = Gvar.var_3775, 1, 0);
        }
        Gvar.var_539 = 0;
        Gvar.var_3774 = 0;
        await Func.func0942();
        return;
    }
    Gvar.var_539 = 0;
    await Func.func0900();
    return;
}

export {func0939}
