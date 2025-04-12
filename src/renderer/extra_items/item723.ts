import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 723 アイテム「魔法のランプ」を使用した時の効果
async function item723(this: any) {
        await Func.AutoDraw(12);
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            await Func.setMessage1("しかし何も起こらなかった…",
                                  "", 7, false, false, false);
            return;
        }
        Gvar.var_1055 = 1;
        return;
}

export {item723}
