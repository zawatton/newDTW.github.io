import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 137 成長した吉良の特殊能力
async function enemy137(this: any) {
        Gvar.var_2830 = Adap.rnd(6);
        if (Gvar.var_2830 == 1) {
            if (Gvar.var_224 == 0) {
                return;
            }
            Gvar.var_474 = 0;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                Gvar.var_475 = Adap.rnd(Gvar.var_224);
                Gvar.var_475 = Gvar.var_475 + 1;
                if (Gvar.var_233[Gvar.var_475].Var0 >= 500 && Gvar.var_233[Gvar.var_475].Var0 < 800 && Gvar.var_233[Gvar.var_475].Var15 == 0) {
                    Gvar.var_474 = 1;
                    break;
                }
                if (Gvar.var_233[Gvar.var_475].Var0 >= 900 && Gvar.var_233[Gvar.var_475].Var15 == 0) {
                    Gvar.var_474 = 1;
                    break;
                }
            }
            if (Gvar.var_474 == 1) {
                Gvar.var_742 = 1;
                Gvar.var_83[Gvar.var_673].Var7 = 1;
                Gvar.var_743 = 1; //スタンド像付与フラグON
                await Func.AutoDraw(10);
                Gvar.var_743 = 0; //スタンド像付与フラグOFF
                Gvar.var_742 = 0;
                Gvar.var_83[Gvar.var_673].Var7 = 0;
                Gvar.var_233[Gvar.var_475].Var15 = 2;
                Adap.DSPLAY(181);
                await Func.setMessage1("何かが爆弾にされた！", "", 8, false, false, false);
                await Func.AutoDraw(15);
                Gvar.var_2197 = 1;
            }
        }
        if (Gvar.var_2830 == 0 && Gvar.var_83[Gvar.var_673].Var10 == Gvar.var_201 && Gvar.var_201 != 14 && Gvar.var_201 != 13 && Gvar.var_201 != 0) {
            Gvar.var_1920 = 2;
            Gvar.var_1914 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_1915 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_1845 = 3;
            Gvar.var_2353 = Gvar.var_673;
            await Func.func556();
            Gvar.var_673 = Gvar.var_2353;
            Gvar.var_1920 = 0;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 == 0) {
                return;
            }
            Gvar.var_2273 = Gvar.var_97;
            Gvar.var_83[Gvar.var_2273].Var7 = 1;
            Gvar.var_83[Gvar.var_2273].Var5 = 3;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_83[Gvar.var_2273].Var5 = 6;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_83[Gvar.var_2273].Var5 = 9;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_83[Gvar.var_2273].Var5 = 8;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_83[Gvar.var_2273].Var5 = 7;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_83[Gvar.var_2273].Var5 = 4;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_83[Gvar.var_2273].Var5 = 1;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_83[Gvar.var_2273].Var5 = 2;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_83[Gvar.var_2273].Var7 = 0;
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            Gvar.var_1073 = Adap.rnd(3);
            if (Gvar.var_1073 == 0) {
                await Func.setMessage1("こォ～～ろォ～～すゥ～～っ！", "", 8, false, false, true);
            }
            if (Gvar.var_1073 == 1) {
                await Func.setMessage1("カワイイおまえを守ってやるよ…", "", 8, false, false, true);
            }
            if (Gvar.var_1073 == 2) {
                await Func.setMessage1("吉影や…", "", 8, false, false, true);
            }
            for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ表示処理(自動)
            }
            await Func.setMessage1("鉄塔がカエルに変化した！", "", 8, false, false, false);
            await Func.AutoDraw(15);
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy137}
