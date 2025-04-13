import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func727(this: any) {
        Adap.dbgprt(727);
        Gvar.var_243 = 0;
        Gvar.var_3125 = Adap.rnd(2);
        if (Gvar.var_3125 == 0) {
            await Func.setMessage("キュルキュルキュルキュル",
                                   "", 7, false, false, true);
        }
        if (Gvar.var_3125 == 1) {
            await Func.setMessage("ギャルギャルギャルギャル",
                                   "", 7, false, false, true);
        }
        await Func.AutoDraw(5);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func727}
