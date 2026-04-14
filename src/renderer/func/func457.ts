/**
 * func457 — func457 体力を回復させてくれと選択した時、体力回復後の状態異常回復の動作処理
 *
 * (org原典: newDTW_item(その他))
 * // @org-injected
 */
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
            await Func.setMessage("状態異常が治った！", "", 7, true, false, false);
            await Func.AutoDraw(3);
        }
        return;
}

export {func457}
