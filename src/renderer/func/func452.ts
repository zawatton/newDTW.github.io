import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func452(this: any) {
        Adap.dbgprt(452);
        Adap.DSPLAY(166);
        await Func.setMessage1("ザグッ！  ザグッ！  ザグッ！",
                                "", 7, true, false, false);
        await Func.setMessage1("このフロアにお金が出現した！",
                                    "", 7, true, false, false);
        Gvar.var_1759 = 1;
        Gvar.var_452 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func384();
        }
        Gvar.var_1759 = 0;
        Gvar.var_452 = 0;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func452}
