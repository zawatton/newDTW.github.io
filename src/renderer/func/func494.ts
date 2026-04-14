/**
 * func494 — func494 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func494(this: any) {
        Adap.dbgprt(494);
        // No = 204 シアハートアタックのdiscを装備していれば
        if (Gvar.equip_disc[204] == 1) {
            Gvar.var_352 = Gvar.var_352 - Gvar.var_1047;
        }
        // No = 396 メイド・イン・ヘブンのdiscを装備していれば
        if (Gvar.equip_disc[396] == 1) {
            Gvar.var_157 = 0; // Gvar.var_157 倍速移動フラグOFF
        }
        
        Gvar.equip_disc = Adap.dim(400);

        if (Gvar.kougeki_disc_id  > 0) {
            await Func.func426();
            Gvar.var_2179 = Gvar.var_553;
            Gvar.var_2180 = 1;
            await Func.func495(); // 装備disc関係??
        }
        if (Gvar.bougyo_disc_id > 0) {
            await Func.func427();
            Gvar.var_2179 = Gvar.var_554;
            Gvar.var_2180 = 2;
            await Func.func495(); // 装備disc関係??
        }
        if (Gvar.nouryoku_disc_id > 0) {
            await Func.func428();
            Gvar.var_2179 = Gvar.var_555;
            Gvar.var_2180 = 4;
            await Func.func495(); // 装備disc関係??
        }
        // No = 204 シアハートアタックのdiscを装備していれば
        if (Gvar.equip_disc[204] == 1) {
            Gvar.var_1047 = 20;
            Gvar.var_1047 = Math.floor(Gvar.var_352 / 10) + Gvar.var_566;
            Gvar.var_2181 = Gvar.var_352 + Gvar.var_1047;
            if (Gvar.var_2181 > 999) {
                Gvar.var_1047 = 999 - Gvar.var_352;
                if (Gvar.var_1047 < 0) {
                    Gvar.var_1047 = 0;
                }
            }
            Gvar.var_352 = Gvar.var_352 + Gvar.var_1047;
        }
        // No = 320 メタリカのdiscを装備していれば
        if (Gvar.equip_disc[320] == 1) {
            Gvar.var_140 = 0;
        }
        // No = 396 メイド・イン・ヘブンのdiscを装備していれば
        if (Gvar.equip_disc[396] == 1) {
            Gvar.var_157 = 1; // Gvar.var_157 倍速移動フラグON
            Gvar.var_133 = 0;
        }
        if (Gvar.var_352 <= 1) {
            Gvar.var_352 = 1;
        }
        if (Gvar.var_211 >= Gvar.var_352) {
            Gvar.var_211 = Gvar.var_352;
        }
        await Func.func496(); // 装備discの共鳴組み合わせ関数
        if (Gvar.var_71[Gvar.var_66][Gvar.var_67] == 13 && Gvar.nouryoku_disc_id != 202 && Gvar.nouryoku_disc_id != 117 && Gvar.var_125 == 0 && Gvar.var_1059 == 0) {
            Gvar.var_216 = 1;
            Gvar.var_213 = 0;
            Gvar.var_214 = 0;
            Adap.DSPLAY(216); // ワープして逃げる時の効果音
            await Func.func499(); // ダンジョン動作処理?
        }
        return;
}

export {func494}
