import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func152(this: any) {
    Adap.dbgprt(152);
    Gvar.ivents_flag = 0; // イベントフラグ初期化
    await Func.AutoDraw(20);
    await Func.func335();
    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「いったいここはどこなんだ？！」", "", 7, true, false, true);
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
    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「もしかするとこれは…」", "", 7, true, false, true);
    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「聞いたことがあるぞ", "『奇妙なダンジョン』の噂」", 7, true, false, true);
    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「ある者はダンジョンの奥に", "『黄金郷』を見つけ…」", 7, true, false, true);
    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「またある者は『幸福』を", "手に入れたと聞く」", 7, true, false, true);
    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「ここならば…", "このおれにも救いがあるに違いない！」", 7, false, false, true);

    await Func.AutoDraw(20);
    await Func.func336();
    return;
}

export { func152 }
