import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func550(this: any) {
        Adap.dbgprt(550);
        await Func.func340(); // キー入力による選択処理
        Gvar.var_1951 = 0;
        Adap.DSPLAY(101); // 階段を昇るor降りる時の効果音
        Gvar.var_373 = 5;
        await Func.AutoDraw(2);
        Gvar.var_373 = 4;
        await Func.AutoDraw(2);
        Gvar.var_373 = 3;
        await Func.AutoDraw(2);
        Gvar.var_373 = 2;
        await Func.AutoDraw(2);
        Gvar.var_373 = 1;
        await Func.AutoDraw(10);
        Gvar.var_373 = 0;
        Gvar.special_floor = 0;
        Gvar.var_532 = 1;
        // No = 0 なので、拠点(ホテル、亀、)
        if (Gvar.dungeon_number == 0) {
            Gvar.var_356 = 306;
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1) {
            Gvar.var_356 = 307;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2) {
            Gvar.var_356 = 308;
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3) {
            Gvar.var_356 = 309;
        }
        // No = 4 なので、一巡後の世界
        if (Gvar.dungeon_number == 4) {
            Gvar.var_356 = 310;
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5) {
            Gvar.var_356 = 313;
        }
        await Func.func173();
        return;
}

export {func550}
