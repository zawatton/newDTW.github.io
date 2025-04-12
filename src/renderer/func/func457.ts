import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func457(this: any) {
        Adap.dbgprt(457);
        if (Gvar.var_565 != Gvar.var_566 || Gvar.var_133 != 0 || Gvar.var_110 != 0 || Gvar.var_109 != 0 || Gvar.var_134 != 0 || Gvar.var_126 != 0 || Gvar.var_132 != 0 || Gvar.var_127 != 0) {
            Gvar.var_565 = Gvar.var_566;
            Gvar.var_133 = 0;
            Gvar.var_110 = 0;
            Gvar.var_109 = 0;
            Gvar.var_134 = 0;
            Gvar.var_126 = 0;
            Gvar.var_132 = 0;
            Gvar.var_127 = 0;  // 瞼が落ちるや目を切り裂かれるなどで視界が見えななくなった時のフラグOFF
            await Func.setMessage1("状態異常が治った！", "", 7, true, false, false);
            await Func.AutoDraw(3);
        }
        return;
}

export {func457}
