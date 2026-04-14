/**
 * func223 — func223 不明
 *
 * (org原典: newDTW_func2)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func223(this: any) {
        Adap.dbgprt(223);
        Gvar.var_934 = Gvar.var_933 - 1;
        Gvar.var_941 = Gvar.var_948[Gvar.var_933] - Gvar.var_948[Gvar.var_934];
        Gvar.current_level = Gvar.var_933;
        await Func.func679();
        Gvar.var_949 = Math.floor(Gvar.var_950 * (Gvar.var_935 + Gvar.var_937 - 8) / 16) + Gvar.var_950;
        Gvar.var_951 = Gvar.var_949;
        for (let cnt1 = 0; cnt1 < Gvar.var_943; ++cnt1) {
            Gvar.var_949 = Math.floor(Gvar.var_949 * 15 / 16);
        }
        Gvar.var_944 = Math.floor(Gvar.var_949 * 111 / 128);
        Gvar.var_945 = Math.floor(Gvar.var_949 * 143 / 128);
        Gvar.var_949 = Math.floor(Gvar.var_942 * (Gvar.var_942 + Gvar.var_942 - 8) / 16) + Gvar.var_942;
        for (let cnt1 = 0; cnt1 < Gvar.var_936; ++cnt1) {
            Gvar.var_949 = Math.floor(Gvar.var_949 * 15 / 16);
        }
        Gvar.var_946 = Math.floor(Gvar.var_949 * 111 / 128);
        Gvar.var_947 = Math.floor(Gvar.var_949 * 143 / 128);
        Gvar.current_floor = Gvar.var_63;
        Gvar.var_939 = 0;
        Gvar.var_952 = 1;
        if (Gvar.current_floor >= 1 && Gvar.current_floor < 6) {
            Gvar.var_952 = Gvar.var_952 + 4;
        }
        if (Gvar.current_floor >= 6 && Gvar.current_floor < 13) {
            Gvar.var_952 = Gvar.var_952 + 5;
        }
        if (Gvar.current_floor >= 13 && Gvar.current_floor < 20) {
            Gvar.var_952 = Gvar.var_952 + 6;
        }
        if (Gvar.current_floor >= 20 && Gvar.current_floor < 30) {
            Gvar.var_952 = Gvar.var_952 + 7;
        }
        if (Gvar.current_floor >= 30) {
            Gvar.var_952 = Gvar.var_952 + 7;
        }
        // No = 2 なので、レクイエムの大迷宮
        Gvar.dungeon_number = 2;
        for (let cnt1 = 0; cnt1 < Gvar.var_952; ++cnt1) {
            await Func.func627(); // 各ダンジョンごとの出現敵設定
            Gvar.enemy_list = Gvar.var_953;
            await Func.func626(); // 敵リスト
            Gvar.var_939 = Gvar.var_939 + Gvar.enemy_exp_point;
        }
        Gvar.var_940 = Math.floor(Gvar.var_939 / Gvar.var_952);
        return;
}

export {func223}
