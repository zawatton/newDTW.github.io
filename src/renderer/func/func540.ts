/**
 * func540 — func540 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func540(this: any) {
        Adap.dbgprt(540);
        Gvar.var_2441 = Adap.rnd(6);
        if (Gvar.dungeon_number == 99) {
            Gvar.var_2441 = 1;
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 95) {
            Gvar.var_2441 = 0;
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 30) {
            Gvar.var_2441 = 0;
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 84 || Gvar.var_81[Gvar.var_2442][0] == 85 || Gvar.var_81[Gvar.var_2442][0] == 86 || Gvar.var_81[Gvar.var_2442][0] == 87 || Gvar.var_81[Gvar.var_2442][0] == 88 || Gvar.var_81[Gvar.var_2442][0] == 89 || Gvar.var_81[Gvar.var_2442][0] == 90 || Gvar.var_81[Gvar.var_2442][0] == 91 || Gvar.var_81[Gvar.var_2442][0] == 92 || Gvar.var_81[Gvar.var_2442][0] == 93 || Gvar.var_81[Gvar.var_2442][0] == 94 || Gvar.var_81[Gvar.var_2442][0] == 81 || Gvar.var_81[Gvar.var_2442][0] == 80 || Gvar.var_81[Gvar.var_2442][0] == 78 || Gvar.var_81[Gvar.var_2442][0] == 77) {
            Gvar.var_2441 = 1;
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 31) {
            Gvar.var_2441 = 1;
        }
        if (Gvar.var_2441 == 0) {
            Gvar.var_80[Gvar.var_2443][Gvar.var_2444] = 0;
            Gvar.var_81[Gvar.var_2442][0] = 0;
            Gvar.var_81[Gvar.var_2442][1] = 0;
            Gvar.var_81[Gvar.var_2442][2] = 0;
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        return;
}

export {func540}
