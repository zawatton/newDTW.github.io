import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func393(this: any) {
        Adap.dbgprt(393);
        if (Gvar.current_floor == 20 && Gvar.dungeon_number != 5) {
            Gvar.var_452 = 1;
            Gvar.var_1748 = 1;
            await Func.func384();
            Gvar.var_1748 = 0;
            Gvar.var_452 = 0;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor == 1 && Gvar.var_1037 != 0) {
            Gvar.var_1732 = 1;
            Gvar.var_452 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_1037; ++cnt2) {
                await Func.func384();
                Gvar.var_1732++;
            }
            Gvar.var_452 = 0;
            Gvar.var_1732 = 0;
            Gvar.var_1037 = 0;
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99 && Gvar.var_537 >= 1) {
            Gvar.var_452 = 1;
            Gvar.var_1766 = 1;
            await Func.func384();
            Gvar.var_1766 = 0;
            Gvar.var_452 = 0;
        }
        // No = 4 なので、一巡後の世界
        if (Gvar.dungeon_number == 4 && Gvar.current_floor == 99) {
            Gvar.var_452 = 1;
            Gvar.var_1751 = 1;
            await Func.func384();
            Gvar.var_1751 = 0;
            Gvar.var_452 = 0;
        }
        return;
}

export {func393}
