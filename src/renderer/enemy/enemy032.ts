import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 32 吉良吉影の特殊能力
async function enemy032(this: any) {
        Gvar.var_2830 = Adap.rnd(6);
        if (Gvar.var_2830 == 0) {
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
                await Func.setMessage("何かが爆弾にされた！",
                                       "", 8, false, false, false);
                await Func.AutoDraw(15);
                Gvar.var_2197 = 1;
            }
        }
        if (Gvar.var_2830 == 1) {
            await Func.setMessage("誰にも私を追うことはできない…",
                                   "", 8, false, false, true);
            for (let cnt3 = 0; cnt3 < 16; ++cnt3) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_2523 = 1;
            Gvar.var_1845 = 1;
            Gvar.var_2353 = Gvar.var_673;
            await Func.func556();
            Gvar.var_2457 = Gvar.var_673;
            Gvar.var_673 = Gvar.var_2353;
            Gvar.var_2523 = 0;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 == 0) {
                await Func.setMessage("君さえ消えていなくなってくれればね…",
                                       "", 8, false, false, true);
                Gvar.var_2197 = 1;
                return;
            }
            Gvar.var_1584 = (Gvar.var_83[Gvar.var_2457].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1585 = (Gvar.var_83[Gvar.var_2457].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1583 = 1;
            Adap.DSPLAY(168);
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_198 = 1; // メッセージウィンドウ開く
                Gvar.var_300 = 0;
                Gvar.var_1583++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1583 = 0;
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            await Func.setMessage("吉良はｼｱｰﾊｰﾄｱﾀｯｸを繰り出した！",
                                   "", 8, false, false, false);
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy032}
