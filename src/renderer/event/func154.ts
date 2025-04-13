import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func154(this: any) {
    Adap.dbgprt(154);
    Gvar.ivents_flag = 0; // イベントフラグ初期化
    await Func.AutoDraw(20);
    await Func.func335();

    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「うう…こ、今度はどこだ…？」", "", 7, true, false, true);

    Gvar.var_199 = 1;
    await Func.AutoDraw(2);
    Gvar.var_199 = 4;
    await Func.AutoDraw(5);
    Gvar.var_199 = 1;
    await Func.AutoDraw(2);
    Gvar.var_199 = 2;
    await Func.AutoDraw(5);
    Gvar.var_199 = 3;
    await Func.AutoDraw(2);
    Gvar.var_199 = 6;
    await Func.AutoDraw(5);
    Gvar.var_199 = 3;
    await Func.AutoDraw(2);
    Gvar.var_199 = 2;
    await Func.AutoDraw(5);

    await Func.setMessage("…またこのホテルか？", "", 7, true, false, true);
    await Func.setMessage("これもレクイエムの能力なのか、", "それとも奇妙なダンジョンの力なのか…", 7, true, false, true);
    await Func.setMessage("どちらなのかはわからんが、", "せいぜい足掻いてみるとしよう…", 7, false, false, true);

    await Func.AutoDraw(20);
    await Func.func336();
    return;
}

export { func154 }
