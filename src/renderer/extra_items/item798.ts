/**
 * item798 — No = 798 没アイテム「」を使用した時の効果
 *
 * (org原典: newDTW_item(その他))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 798 没アイテム「」を使用した時の効果
async function item798(this: any) {
        if (Gvar.kougeki_disc_id  != 0) {
            await Func.func426();
            if (Gvar.var_233[Gvar.var_553].Var4 <= 89) {
                Gvar.var_233[Gvar.var_553].Var4 = Gvar.var_233[Gvar.var_553].Var4 + 10;
                Gvar.var_580 = Gvar.var_580 + 10;
                Gvar.var_894 = Gvar.var_894 + 10;
            }
        }
        if (Gvar.bougyo_disc_id != 0) {
            await Func.func427();
            if (Gvar.var_233[Gvar.var_554].Var4 <= 89) {
                Gvar.var_233[Gvar.var_554].Var4 = Gvar.var_233[Gvar.var_554].Var4 + 10;
                Gvar.var_581 = Gvar.var_581 + 10;
                Gvar.var_895 = Gvar.var_895 + 10;
            }
        }
        if (Gvar.nouryoku_disc_id != 0) {
            await Func.func428();
            if (Gvar.var_233[Gvar.var_555].Var4 <= 89) {
                Gvar.var_233[Gvar.var_555].Var4 = Gvar.var_233[Gvar.var_555].Var4 + 10;
            }
        }
}

export {item798}
