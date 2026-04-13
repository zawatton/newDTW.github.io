import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func933
async function func0992(this: any) {
    // No = 1 なので、ホテルの外
    if (Gvar.dungeon_number == 1) {
        Gvar.var_3864 = "行橙ﾃﾞｨｱﾎﾞﾛはホテルの外に出た";
    }
    // No = 2 なので、レクイエムの大迷宮
    if (Gvar.dungeon_number == 2) {
        Gvar.var_3864 = "行橙ﾃﾞｨｱﾎﾞﾛはレクイエムの大迷宮に入った";
    }
    // No = 3 なので、ディアボロの試練
    if (Gvar.dungeon_number == 3) {
        Gvar.var_3864 = "行橙ﾃﾞｨｱﾎﾞﾛはさらなる試練に向かった";
    }
    // No = 4 なので、一巡後の世界
    if (Gvar.dungeon_number == 4) {
        Gvar.var_3864 = "行橙ﾃﾞｨｱﾎﾞﾛは一巡後の世界へ進んだ";
    }
    // No = 5 なので、鉄獄(鉄の牢獄)
    if (Gvar.dungeon_number == 5) {
        Gvar.var_3864 = "行橙ﾃﾞｨｱﾎﾞﾛは鉄獄に入った";
    }
    // α版より移植, No = 6 なので、白蛇の祠
    if (Gvar.dungeon_number == 6) {
        Gvar.var_3864 = "行橙ﾃﾞｨｱﾎﾞﾛは白蛇の祠に入った";
    }
    // α版より移植, No = 7 なので、絶頂の世界
    if (Gvar.dungeon_number == 7) {
        Gvar.var_3864 = "行橙ﾃﾞｨｱﾎﾞﾛは絶頂の世界に向かった";
    }
    // α版より移植, No = 8 なので、オシリス神の祠
    if (Gvar.dungeon_number == 8) {
        Gvar.var_3864 = "行橙ﾃﾞｨｱﾎﾞﾛはオシリス神の祠に向かった";
    }
    // α版より移植, No = 9 なので、ホテル裏の洞窟
    if (Gvar.dungeon_number == 9) {
        Gvar.var_3864 = "行橙ﾃﾞｨｱﾎﾞﾛはホテル裏の洞窟に向かった";
    }
    Adap.tcpput(Gvar.var_3864, Gvar.var_1050);
    Adap.tcpput("\n", Gvar.var_1050);
    await Func.func0988();
    return;
}

export {func0992}
