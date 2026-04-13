import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 満腹度減少時のメッセージ処理
// 旧 func071
async function func071(this: any) {
    Adap.dbgprt(71);
    if (Gvar.var_361 <= 3) {
        Adap.DSPLAY(129);
    }
    Gvar.var_240 = 0;
    if (Gvar.var_361 == 1) {
        await Func.setMessage("お腹が減ってきた…", "", 7, false, false, false);
    }
    if (Gvar.var_361 == 2) {
        await Func.setMessage("ハラペコで目が回ってきた…", "", 7, false, false, false);
    }
    if (Gvar.var_361 == 3) {
        await Func.setMessage("だめだ！  もう倒れそうだ！", "", 7, false, false, false);
    }
    if (Gvar.var_361 == 4) {
        await Func.setMessage("早く…  何か食べないと…", "", 7, false, false, false);
    }
    if (Gvar.var_361 == 5) {
        await Func.setMessage("飢え死にしてしまう！", "", 7, false, false, false);
    }
    await Func.AutoDraw(10);
    return;
}

export { func071 }
