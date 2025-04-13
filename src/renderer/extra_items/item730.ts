import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 730 アイテム「大家のカバン」を使用した時の効果
async function item730(this: any) {
        Gvar.var_2229 = Gvar.disc_rarity;
        await Func.setMessage("カバンの中には" + Gvar.var_2229 + "G入っていた！",
                               "", 7, false, false, false);
        Adap.DSPLAY(207);
        Gvar.wallet = Gvar.wallet + Gvar.var_2229;
        if (Gvar.wallet > 999999) {
            Gvar.wallet = 999999;
        }
        return;
}

export {item730}
