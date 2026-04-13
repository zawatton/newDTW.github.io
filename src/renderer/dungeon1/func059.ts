import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// ホテルの外の最終フロア、エンヤホテル以外確定処理
// 旧 func059
async function func059(this: any) {
        Adap.dbgprt(59);
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 1) { // No = 1:虹村屋敷
            Gvar.special_floor = 1; // 虹村屋敷
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 2) { // No = 2:吉良屋敷
            Gvar.special_floor = 3; // 吉良屋敷
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 3) { // No = 3:杜王町埠頭
            Gvar.special_floor = 2; // 杜王町埠頭
        }
        return;
}

export {func059}
