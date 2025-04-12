import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 39 敵ハイウェイスターの特殊能力
async function enemy039(this: any) {
        Gvar.var_2830 = Adap.rnd(4);
        if (Gvar.var_2830 == 0 && Gvar.var_350 >= 11) {
            Gvar.var_83[Gvar.var_673].Var21 = 1;
            if (Gvar.var_83[Gvar.var_673].Var5 == 2) {
                Gvar.var_411 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
                Gvar.var_411 = 2;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 8) {
                Gvar.var_411 = 3;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
                Gvar.var_411 = 4;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 1) {
                Gvar.var_411 = 5;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 7) {
                Gvar.var_411 = 6;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 3) {
                Gvar.var_411 = 7;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 9) {
                Gvar.var_411 = 8;
            }
            Gvar.var_389 = 2;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1481 = 1;
            Adap.DSPLAY(161);
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1481++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1481 = 0;
            Gvar.var_389 = 0;
            if (Gvar.equip_disc[352] == 0) {
                await Func.setMessage1("養分を吸われて満腹度が下がった！", "", 8, false, false, false);
                Adap.DSPLAY(129);
                Gvar.var_350 = Gvar.var_350 - 10;
                if (Gvar.var_350 < 0) {
                    Gvar.var_350 = 0;
                }
            }
            if (Gvar.equip_disc[352] == 1) {
                await Func.setMessage1("しかし装備DISCの効果によって", "腹ヘリを防いだ！", 8, false, false, false);
            }
            if (Gvar.var_128 >= 1) {
                await Func.func023();
            }
            await Func.func619();
            await Func.AutoDraw(9);
            Gvar.var_83[Gvar.var_673].Var21 = 0;
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy039}
