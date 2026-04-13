import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func907
async function func0966(this: any) {
    await Func.func426();
    await Func.func427();
    await Func.func428();
    await Func.func429();
    if (Gvar.sympathy_id == 135) {
        if (Gvar.bougyo_disc_id == 122) {
            Gvar.kougeki_disc_id  = 101;
        }
        if (Gvar.bougyo_disc_id == 101) {
            Gvar.kougeki_disc_id  = 122;
        }
    }
    Gvar.var_3819 = Adap.dim(30);
    Gvar.var_3819[0] = Gvar.shageki_disc_id;
    Gvar.var_3819[1] = Gvar.current_level;
    Gvar.var_3819[2] = Gvar.var_352;
    Gvar.var_3819[3] = Gvar.var_211;
    Gvar.var_3819[4] = Gvar.var_566;
    Gvar.var_3819[5] = Gvar.var_565;
    Gvar.var_3819[6] = Gvar.var_567;
    Gvar.var_3819[7] = Gvar.var_350;
    Gvar.var_3819[8] = Gvar.current_floor;
    Gvar.var_3819[9] = Gvar.wallet;
    Gvar.var_3819[10] = Gvar.dungeon_number;
    Gvar.var_3819[11] = Gvar.kougeki_disc_id ;
    Gvar.var_3819[12] = Gvar.var_233[Gvar.var_553].Var4;
    Gvar.var_3819[13] = Gvar.var_580;
    Gvar.var_3819[14] = Gvar.bougyo_disc_id;
    Gvar.var_3819[15] = Gvar.var_233[Gvar.var_554].Var4;
    Gvar.var_3819[16] = Gvar.var_581;
    Gvar.var_3819[17] = Gvar.nouryoku_disc_id;
    Gvar.var_3819[18] = Gvar.var_233[Gvar.var_555].Var4;
    Gvar.var_3819[19] = Gvar.var_233[Gvar.var_556].Var3;
    Gvar.var_3869 = 0;
    Gvar.var_3870 = "捨送";
    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
        Gvar.var_3870 = "" + Gvar.var_3870 + "," + Gvar.var_3819[Gvar.var_3869];
        Gvar.var_3869++;
    }
    Gvar.var_3870 = "" + Gvar.var_3870 + "," + Gvar.var_1170;
    Adap.tcpput(Gvar.var_3870, Gvar.var_1050);
    Adap.tcpput("\n", Gvar.var_1050);
    return;
}

export {func0966}
