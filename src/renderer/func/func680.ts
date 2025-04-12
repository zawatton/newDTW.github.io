import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// ディアボロのレベルが上がる際の処理
async function func680(this: any) {
        Adap.dbgprt(680);
        Gvar.var_839 = Gvar.var_839 + 1;
        Gvar.var_1015 = Gvar.var_1015 + 1;
        Gvar.var_29[Gvar.var_2945][1] = Gvar.var_29[Gvar.var_2945][1] + 1;
        if (Gvar.var_29[Gvar.var_2945][1] == 40) {
            Gvar.var_29[Gvar.var_2945][2] = 5;
        }
        if (Gvar.var_29[Gvar.var_2945][1] == 30) {
            Gvar.var_29[Gvar.var_2945][2] = 4;
        }
        if (Gvar.var_29[Gvar.var_2945][1] == 20) {
            Gvar.var_29[Gvar.var_2945][2] = 3;
        }
        if (Gvar.var_29[Gvar.var_2945][1] == 10) {
            Gvar.var_29[Gvar.var_2945][2] = 2;
        }
        if (Gvar.var_29[Gvar.var_2945][1] == 1) {
            Gvar.var_29[Gvar.var_2945][2] = 1;
        }
        if (Gvar.var_568 >= 9999999) {
            Gvar.var_568 = 9999999;
        }
        if (Gvar.current_level == 99) {
            return;
        }
        for (let cnt1 = 0; cnt1 < 99; ++cnt1) {
            if (Gvar.current_level == 99) {
                break;
            }
            if (Gvar.var_568 >= Gvar.var_948[Gvar.current_level]) {
                await Func.func681();
            }
        }
        if (Gvar.var_2201 == 1) {
            await Music.func099();
            await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛはﾚﾍﾞﾙ" + Gvar.current_level + "に上がった！", "", 7, true, false, false);
            await Func.AutoDraw(5);
        }
        Gvar.var_2201 = 0;
        return;
}

export {func680}
