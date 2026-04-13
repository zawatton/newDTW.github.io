import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func731
async function func731(this: any) {
        Adap.dbgprt(731);
        Gvar.var_83[Gvar.var_3072].Var31 = 5;
        Gvar.var_83[Gvar.var_3072].Var14 = 0;
        Gvar.var_1033 = 1;
        await Func.setMessage("ｽﾋﾟｰﾄﾞﾜｺﾞﾝが仲間になった！",
                                "", 7, true, false, false);
        await Music.func125();
        await Func.setMessage("よろしくなッ！",
                                "", 7, false, false, true);
        await Func.AutoDraw(5);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func731}
