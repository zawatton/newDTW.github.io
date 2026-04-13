import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 店の床へ所持アイテムを置いた状態でトニオさんに話しかけた際のメッセージ処理
// 旧 func708
async function func708(this: any) {
        Adap.dbgprt(708);
        await Func.setMessage("店内に置いたアイテムを",
                               "" + Gvar.var_1009 + "G で引き取りマス", 7, false, false, true);
        await Func.AutoDraw(6);
        Gvar.var_1202 = 1;
        Gvar.var_3117 = 1;
        await Func.func712();
        return;
}

export {func708}
