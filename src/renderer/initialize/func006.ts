/**
 * func006 — func006 一巡後の世界のみのフラグ処理
 *
 * newDTW のゲームの根幹となる処理
 *
 * (org原典: newDTW_mainframe / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 一巡後の世界のみのフラグ処理
// 旧 func006
async function func006(this: any) {
        Adap.dbgprt(6);
        // No = 4 なので、一巡後の世界
        if (Gvar.dungeon_number == 4) {
            await Func.func458(); // 恐竜の化石に関するもの(一巡後の世界のみで効果があるようになっている)
            if (Gvar.var_69 == 1 && Gvar.var_70 == 0) {
                Gvar.var_70 = 7;
            }
        }
        await Func.func243();
        await Func.func007(); // 配列初期化処理
}

export {func006}
