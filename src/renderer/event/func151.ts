import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func151(this: any) {
    Adap.dbgprt(151);
    Gvar.ivents_flag = 2; // 初めてダンジョンを訪れた際のディアボロの呟きフラグ
    await Func.AutoDraw(20);
    await Func.func335();
    await Func.AutoDraw(20);

    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「ハッ？！こ…今度は何だ？」", "", 7, true, false, true);

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

    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「どこから襲ってくるんだ？！」", "", 7, true, false, true);

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

    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「………」", "", 7, true, false, false);
    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「………」", "", 7, true, false, false);

    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「おかしいな…",
                            "何もおこらないぞ」", 7, true, false, true);

    await Func.setMessage("ﾃﾞｱﾎﾞﾛ「何か…",
                            "何かいつもと違うようだぞ？」", 7, true, false, true);

    await Func.AutoDraw(20);
    await Func.func336();
    return;
}

export { func151 }
