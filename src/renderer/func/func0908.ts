import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func849
async function func0908(this: any) {
    Adap.dialog(Gvar.data0 = "メニュー画面に戻りますか？", Gvar.data1 = 2, "");
    if (Gvar.stat == 7) {
        await Func.func0910();
        return;
    }
    Adap.clrobj();
    if (Gvar.var_10 == 0) {
        Adap.width(340, 340);
    }
    if (Gvar.var_10 == 1) {
        Adap.width(680, 680);
    }
    Gvar.var_626 = 0;
    Gvar.var_3572 = 0;
    if (Adap.dirinfo(0) == Gvar.var_30) {
        Adap.chdir("問題");
    }
    await Func.func0942();
    return;
}

export {func0908}
