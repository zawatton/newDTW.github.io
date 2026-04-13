import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// メニュー画面各コンディション表示
// 旧 func068
async function func068(this: any) {
        Adap.dbgprt(68);
        Gvar.var_564 = 50;
        Adap.color(0, 0, 0);

        Adap.gmode(4, null, null, 100);
        Adap.pos(20, 250 - Gvar.var_564);
        Adap.gcopy(12, 0, 0, 310, 65 + Gvar.var_564);
        Adap.color(255, 255, 255);
        Adap.line(23, 252 - Gvar.var_564, 325, 252 - Gvar.var_564);
        Adap.line(23, 312, 325, 312);
        Adap.line(22, 253 - Gvar.var_564, 22, 310);
        Adap.line(327, 253 - Gvar.var_564, 327, 310);
        Adap.pset(23, 253 - Gvar.var_564);
        Adap.pset(326, 253 - Gvar.var_564);
        Adap.pset(23, 311);
        Adap.pset(326, 311);
        Adap.gmode(2, null, null, null);

        Adap.font(Gvar.font_type, 18, 1);
        Adap.pos(40, 255);
        Adap.color(255, 255, 255);
        Adap.mes("");
        Adap.mes("精神力");
        Adap.mes("最深階");

        Adap.pos(110, 255);
        Adap.color(255, 255, 255);
        Adap.mes("");
        Adap.mes("" + Gvar.var_565 + "/" + Gvar.var_566);
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1) {
            Adap.mes("" + Gvar.dungeon1_floor + "階");
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2) {
            Adap.mes("" + Gvar.dungeon2_floor + "階");
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3) {
            Adap.mes("" + Gvar.dungeon3_floor + "階");
        }
        // No = 4 なので、一巡後の世界
        if (Gvar.dungeon_number == 4) {
            Adap.mes("" + Gvar.dungeon4_floor + "階");
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5) {
            Adap.mes("" + Gvar.dungeon5_floor + "階");
        }
        if (Gvar.dungeon_number != 1 && Gvar.dungeon_number != 2 && Gvar.dungeon_number != 3 && Gvar.dungeon_number != 4 && Gvar.dungeon_number != 5) {
            Adap.mes("- 階");
        }

        Adap.pos(165, 255);
        Adap.color(255, 255, 255);
        Adap.mes("");
        Adap.mes("満腹度");
        Adap.mes("経験値");

        Adap.pos(235, 255);
        Adap.color(255, 255, 255);
        Adap.mes("");
        Adap.mes("" + Gvar.var_350 + "/" + Gvar.var_567);
        Adap.mes(Gvar.var_568);
        return;
}

export {func068}
