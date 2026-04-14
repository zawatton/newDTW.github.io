/**
 * func458 — func458 恐竜の化石に関するもの(一巡後の世界のみで効果があるようになっている)
 *
 * (org原典: newDTW_item(その他))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func458(this: any) {
        Adap.dbgprt(458);
        Gvar.var_69 = 0;
        Gvar.var_480 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {            
            // No = 716 恐竜の化石
            // 一巡後の世界で持っているだけで必ず大部屋モンスターハウスが出現する。使用すると次の階が西戸ハウスになってしまう
            if (Gvar.var_233[Gvar.var_480].Var0 == 716) {
                Gvar.var_69 = 1;
            }
            if (Gvar.var_233[Gvar.var_480].Var0 >= 800 && Gvar.var_233[Gvar.var_480].Var0 < 900) {
                Gvar.var_484 = 1;
                Gvar.var_485 = Gvar.var_233[Gvar.var_480].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    // No = 716 恐竜の化石
                    // 一巡後の世界で持っているだけで必ず大部屋モンスターハウスが出現する。使用すると次の階が西戸ハウスになってしまう
                    if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] == 716) {
                        Gvar.var_69 = 1;
                    }
                    Gvar.var_484 = Gvar.var_484 + 1;
                }
            }
            Gvar.var_480 = Gvar.var_480 + 1;
        }
        return;
}

export {func458}
