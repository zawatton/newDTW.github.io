import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 729 アイテム「吉良の財布」を使用した時の効果
async function item729(this: any) {
        Gvar.var_2229 = Adap.rnd(5);
        Gvar.var_2229 = Gvar.var_2229 + 1;
        Gvar.var_2229 = Gvar.var_2229 * 1000;
        await Func.setMessage("財布の中には" + Gvar.var_2229 + "G入っていた！",
                               "", 7, true, false, false);
        Adap.DSPLAY(207);
        Gvar.wallet = Gvar.wallet + Gvar.var_2229;
        if (Gvar.wallet > 999999) {
            Gvar.wallet = 999999;
        }
        return;
}

export {item729}
