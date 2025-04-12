import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func041(this: any) {
        Adap.dbgprt(41);
        await Func.setMessage1("ﾄﾞｯﾋﾟｵ「とぅるるるるるるるるるる」", "", 7, true, false, true);

        await Func.setMessage1("ﾄﾞｯﾋﾟｵ「ボスからの電話だッ！」", "", 7, true, false, true);

        Gvar.var_144 = 91;
        await Func.setMessage1("ﾄﾞｯﾋﾟｵ「もしもし」", "", 7, true, false, true);

        await Func.setMessage1("ﾄﾞｯﾋﾟｵ「早く来てください！ボス！」", "", 7, true, false, true);

        await Func.setMessage1("ﾄﾞｯﾋﾟｵ「・・・・・・・・」", "", 7, true, false, true);

        Gvar.var_192 = Adap.rnd(4);
        if (Gvar.var_192 == 0) {
            await Func.setMessage1("ﾄﾞｯﾋﾟｵ「わかりました！",
                                    "       １０ターン後ですねッ！」", 7, false, false, true);
        }
        if (Gvar.var_192 == 1) {
            await Func.setMessage1("ﾄﾞｯﾋﾟｵ「わかりました！",
                                    "       ２０ターン後ですねッ！」", 7, false, false, true);
        }
        if (Gvar.var_192 == 2) {
            await Func.setMessage1("ﾄﾞｯﾋﾟｵ「わかりました！",
                                    "       ３０ターン後ですねッ！」", 7, false, false, true);
        }
        if (Gvar.var_192 == 3) {
            await Func.setMessage1("ﾄﾞｯﾋﾟｵ「わかりました！",
                                    "   すぐ来てくれるんですねッ！」", 7, false, false, true);
        }
        await Func.AutoDraw(9);
        Gvar.var_144 = 92;
        return;
}

export {func041}
