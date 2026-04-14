/**
 * func326 — func326 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func326(this: any) {
        Adap.dbgprt(326);
        Gvar.var_449 = Gvar.var_67 - 5;
        for (let cnt1 = 0; cnt1 < 11; ++cnt1) {
            Gvar.var_447 = Gvar.var_66 - 5;
            for (let cnt2 = 0; cnt2 < 11; ++cnt2) {
                if (Gvar.var_73[Gvar.var_447][Gvar.var_449] >= 1) {
                    await Func.func553(); // ダンジョン毎の階段処理
                }
                if (Gvar.var_127 == 0 && Gvar.var_132 == 0) {
                    if (Gvar.var_77[Gvar.var_447][Gvar.var_449] != 0) {
                        // Ver0.1403にて修正。
                        if (Gvar.dungeon_number != 0) {
                            await Func.func396(); // 床のアイテム表示処理
                        }
                        if (Gvar.dungeon_number == 0 && Gvar.var_595 == 1) {
                            await Func.func396(); // 床のアイテム表示処理
                        }
                    }
                    if (Gvar.var_80[Gvar.var_447][Gvar.var_449] != 0) {
                        await Func.func538();
                    }
                    if (Gvar.var_65[Gvar.var_447][Gvar.var_449] == 1) {
                        await Func.func344();
                    }
                    if (Gvar.var_82[Gvar.var_447][Gvar.var_449] != 0) {
                        Gvar.var_1161 = 1;
                        await Func.func565();
                        Gvar.var_1161 = 0;
                    }
                }
                Gvar.var_447++;
            }
            Gvar.var_449++;
        }
        if (Gvar.var_1162 == 1 && Gvar.var_127 == 0 && Gvar.var_132 == 0) {
            await Func.func621();
        }
        Gvar.var_449 = Gvar.var_67 - 5;
        for (let cnt1 = 0; cnt1 < 11; ++cnt1) {
            Gvar.var_447 = Gvar.var_66 - 5;
            for (let cnt2 = 0; cnt2 < 11; ++cnt2) {
                if (Gvar.var_65[Gvar.var_447][Gvar.var_449] == 1) {
                    await Func.func345(); // ディアボロ本体の描画処理
                }
                if (Gvar.var_82[Gvar.var_447][Gvar.var_449] != 0 && Gvar.var_127 == 0 && Gvar.var_132 == 0) {
                    await Func.func565();
                }
                if (Gvar.var_146 >= 1) {
                    await Func.func327(); // スーパーフライの鉄塔描写処理
                }
                Gvar.var_447++;
            }
            Gvar.var_449++;
        }
        return;
}

export {func326}
