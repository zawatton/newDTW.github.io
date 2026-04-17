/**
 * item715 — No = 715 アイテム「点滴」を使用した時の効果
 *
 * (org原典: newDTW_item(その他))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { tf } from '../i18n'

// No = 715 アイテム「点滴」を使用した時の効果
async function item715(this: any) {
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1242 = 1;
        await Func.AutoDraw(20);
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1242 = 0;
        Gvar.var_360 = 0;
        Gvar.var_2211 = 0;
        if (Gvar.var_350 == Gvar.var_567) {
            Gvar.var_567 = Gvar.var_567 + 1;
            Gvar.var_2211 = 1;
            if (Gvar.var_567 > 999) {
                Gvar.var_567 = 999;
            }
        }
        Gvar.var_350 = Gvar.var_350 + 30;
        if (Gvar.var_350 > Gvar.var_567) {
            Gvar.var_350 = Gvar.var_567;
        }
        if (Gvar.var_350 == Gvar.var_567) {
            await Func.setMessage("「栄養補給させてもらったぜ！」",
                                   "", 7, false, false, false);
        }
        if (Gvar.var_2211 == 1) {
            await Func.setMessage(tf("最大満腹度が{0}になった。", Gvar.var_567),
                                   "", 7, false, false, false);
        }
        return;
}

export {item715}
