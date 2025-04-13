import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 731 アイテム「盗まれた財布」を使用した時の効果
async function item731(this: any) {
        Gvar.var_2230 = Adap.rnd(5);
        Gvar.var_2229 = Gvar.disc_rarity;
        await Func.setMessage("財布の中には" + Gvar.var_2229 + "G入っていた！",
                               "", 7, true, false, false);
        if (Gvar.var_2230 != 0) {
            Adap.DSPLAY(207);
            Gvar.wallet = Gvar.wallet + Gvar.var_2229;
            if (Gvar.wallet > 999999) {
                Gvar.wallet = 999999;
            }
        }
        if (Gvar.var_2230 == 0) {
            await Func.setMessage("……と思ったら、はしっこのとこだけ",
                                   "やぶかれたお金だった！", 7, true, true, false);
            await Func.setMessage("「やっ！  野郎ッ！」",
                                   "やぶかれたお金だった！", 7, false, true, true);
        }
        return;
}

export {item731}
