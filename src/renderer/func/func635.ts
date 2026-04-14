/**
 * func635 — func635 ディアボロの攻撃動作処理
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ディアボロの攻撃動作処理
async function func635(this: any) {
        Adap.dbgprt(635);
        // No = 110 没ディスクであれば No = 108 ステッキー・フィンガーズ 
        if (Gvar.kougeki_disc_id  == 110) {
            Gvar.kougeki_disc_id  = 108;
        }
        Gvar.var_2923 = Gvar.kougeki_disc_id ;
        // No = 101 シルバーチャリオッツ
        if (Gvar.equip_disc[101] == 1 && Gvar.var_2924 == 0) {
            Gvar.var_2925 = Adap.rnd(2);
        }
        Gvar.var_2926 = 1;
        Gvar.var_2927 = 0;

        // No = 135 共鳴で2回攻撃
        if (Gvar.sympathy_id == 135) {
            Gvar.var_341 = 1;
        }
        // No = 105 チリペッパー
        if (Gvar.equip_disc[105] == 0) {
            Gvar.var_1030 = 0;
        }
        await Func.func636(); // ディアボロが攻撃or話しかけた時の動作処理
}

export {func635}
