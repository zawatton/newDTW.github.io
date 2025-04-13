import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 574 エンポリオのdiscの効果
async function item574(this: any) {
        await Func.AutoDraw(12);
        Gvar.var_1264 = 0;
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            await Func.setMessage("しかし何も起こらなかった…",
                                   "", 7, false, false, false);
            return;
        }
        Gvar.var_126 = 1;

        Adap.DSPLAY(134);
        return;
}

export {item574}
