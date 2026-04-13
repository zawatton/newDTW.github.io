import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func882
async function func0941(this: any) {
    await Music.func108(); // BGM用mp3ファイル再生停止
    Gvar.var_3780 = 26;
    Gvar.var_3781 = 106;
    Gvar.var_3782 = Gvar.var_3781;
    Gvar.var_3783 = 57;
    Gvar.var_3784 = 110;
    Gvar.var_3785 = 1;
    Gvar.var_3786 = 1;
    Gvar.var_3787 = 1;
    Gvar.var_3788 = 0;
    // α版より変更
    if (Gvar.var_3789 != 0 || Gvar.var_3890 != 0 || Gvar.var_723 != 0) {
        Gvar.var_3788 = 1;
        Gvar.var_3785 = 0;
    }
    if (Gvar.var_3791 != 0 || Gvar.var_3792 != 0 || Gvar.var_724 != 0) {
        Gvar.var_3788 = 2;
        Gvar.var_3785 = 0;
    }
    Gvar.var_3793 = Adap.sdim(10000);
    Adap.dirlist(Gvar.var_3793, "問題", 5);
    if (Gvar.stat == 0) {
        Adap.mkdir("問題");
    }
    Adap.chdir("問題");
    // await Func.func0942(); // α版より消去
}

export {func0941}
