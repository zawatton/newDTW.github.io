import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 69 ブラフォードの特殊能力
async function enemy069(this: any) {
        if (Gvar.var_128 != 0 || Gvar.var_219 != 0) {
            return;
        }
        Gvar.var_2893 = Adap.rnd(3);
        if (Gvar.dungeon_number == 99 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
            Gvar.var_2893 = 1;
        }
        if (Gvar.var_2893 == 0) {
            return;
        }
        if (Gvar.var_114 == 0) {
            await Func.func619();
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            Gvar.var_463 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_464 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_114 = Gvar.var_673;
            await Func.setMessage1("ﾌﾞﾗﾌｫｰﾄﾞに髪の毛で掴まれた！", "", 8, false, false, false);
            await Func.AutoDraw(3);
            Adap.DSPLAY(136);
            Gvar.var_1382 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1382++;
            }
            Gvar.var_1382 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_83[Gvar.var_673].Var7 = 0;
            Gvar.var_461 = Gvar.var_66;
            Gvar.var_462 = Gvar.var_67;
            Gvar.var_2197 = 1;
            return;
        }
        if (Gvar.var_114 == Gvar.var_673) {
            Gvar.var_2893 = Adap.rnd(3);
            if (Gvar.var_2893 == 0) {
                return;
            }
            await Func.setMessage1("髪の毛から血を吸い取られている！", "", 8, false, false, false);
            Adap.DSPLAY(123);
            Gvar.var_389 = 2;
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                Gvar.var_1273 = 1;
                await Func.AutoDraw(2);
                Gvar.var_1273 = 2;
                await Func.AutoDraw(2);
                Gvar.var_1273 = 3;
                await Func.AutoDraw(2);
                Gvar.var_198 = 1; // メッセージウィンドウ開く
                Gvar.var_300 = 0;
            }
            Gvar.var_1273 = 0;
            Adap.DSPLAY(129);
            if (Gvar.equip_disc[352] == 0) {
                await Func.setMessage1("満腹度が急激に下がった！", "", 8, false, false, false);
                Adap.DSPLAY(129);
                Gvar.var_350 = Gvar.var_350 - 20;
                if (Gvar.var_350 < 0) {
                    Gvar.var_350 = 0;
                }
            }
            if (Gvar.equip_disc[352] == 1) {
                await Func.setMessage1("しかし装備DISCの効果によって", "腹ヘリを防いだ！", 8, false, false, false);
            }
            await Func.AutoDraw(10);
            Gvar.var_389 = 0;
            Gvar.var_2197 = 1;
            return;
        }
        return;
}

export {enemy069}
