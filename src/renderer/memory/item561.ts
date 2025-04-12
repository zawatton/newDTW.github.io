import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 561  空き のdiscの効果
async function item561(this: any) {
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            await Func.setMessage1("しかし何も起こらなかった…", "", 7, false, false, false);
            return;
        }
        Gvar.var_2200 = 1;
        Gvar.var_1845 = 1;
        await Func.func556();
        Gvar.var_2200 = 0;
        Gvar.var_1845 = 0;
        if (Gvar.var_2110 == 0) {
            await Func.setMessage1("しかし何も起こらなかった…", "", 7, false, false, false);
        }
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        return;
}

export {item561}
