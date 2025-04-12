import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 119 ジョセフ(3部)の特殊能力
async function enemy119(this: any) {
        if (Gvar.var_114 >= 1 || Gvar.var_128 != 0 || Gvar.var_219 != 0) {
            return;
        }
        Gvar.var_2893 = Adap.rnd(3);
        if (Gvar.dungeon_number == 99 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
            Gvar.var_2893 = 1;
        }
        if (Gvar.var_2893 == 0) {
            return;
        }
        await Func.func619();
        Gvar.var_742 = 1;
        Gvar.var_743 = 1; //スタンド像付与フラグON
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        Gvar.var_463 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_464 = Gvar.var_83[Gvar.var_673].Var2;
        Gvar.var_114 = Gvar.var_673;
        Adap.DSPLAY(127);
        await Func.setMessage1("ハーミットパープルが絡みついた！", "", 8, false, false, false);
        await Func.AutoDraw(3);
        Adap.DSPLAY(136);
        Gvar.var_1381 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1381++;
        }
        Gvar.var_1381 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_743 = 0; //スタンド像付与フラグOFF
        Gvar.var_461 = Gvar.var_66;
        Gvar.var_462 = Gvar.var_67;
        Gvar.var_2197 = 1;
        return;
}

export {enemy119}
