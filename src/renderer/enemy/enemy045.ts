import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 45 敵由花子 & No = 158 敵プッツン由花子の特殊能力
async function enemy045(this: any) {
        Gvar.var_412 = Gvar.var_673;
        if (Gvar.var_224 == 0) {
            return;
        }
        Gvar.var_2885 = Adap.rnd(4);
        if (Gvar.var_2885 != 0) {
            return;
        }
        Gvar.var_474 = 0;
        for (let cnt2 = 0; cnt2 < 100; ++cnt2) {
            Gvar.var_475 = Adap.rnd(Gvar.var_224);
            Gvar.var_475 = Gvar.var_475 + 1;
            if (Gvar.var_233[Gvar.var_475].Var0 >= 100 && Gvar.var_233[Gvar.var_475].Var0 < 400 && Gvar.var_233[Gvar.var_475].Var12 != 1) {
                Gvar.var_474 = 1;
                break;
            }
        }
        if (Gvar.var_474 == 0) {
            return;
        }
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_475].Var0;
        Gvar.disc_rarity = Gvar.var_233[Gvar.var_475].Var13;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_2886 = Gvar.item_name;
        Gvar.var_2887 = 0;
        // discが漆黒のオーラを纏っていない場合
        if (Gvar.var_233[Gvar.var_475].Var12 != 2) {
            // もし射撃discにエコーズAct2以外を装備していた場合
            if (Gvar.shageki_disc_id != 405) {
                Gvar.var_233[Gvar.var_475].Var12 = 1;
                Gvar.var_233[Gvar.var_475].Var14 = 1;
                await Func.func426();
                if (Gvar.var_553 == Gvar.var_475) {
                    Gvar.var_896 = 1;
                }
                await Func.func427();
                if (Gvar.var_554 == Gvar.var_475) {
                    Gvar.var_897 = 1;
                }
                await Func.func428();
                if (Gvar.var_555 == Gvar.var_475) {
                    Gvar.var_898 = 1;
                }
            }
            // もし射撃discにエコーズAct2を装備していた場合
            if (Gvar.shageki_disc_id == 405) {
                await Func.func426();
                await Func.func427();
                await Func.func428();
                if (Gvar.var_553 != Gvar.var_475 && Gvar.var_554 != Gvar.var_475 && Gvar.var_555 != Gvar.var_475) {
                    Gvar.var_233[Gvar.var_475].Var12 = 1;
                    Gvar.var_233[Gvar.var_475].Var14 = 1;
                }
                if (Gvar.var_553 == Gvar.var_475 || Gvar.var_554 == Gvar.var_475 || Gvar.var_555 == Gvar.var_475) {
                    Gvar.var_2887 = 2;
                }
            }
        }
        // discが漆黒のオーラを纏っていた場合
        if (Gvar.var_233[Gvar.var_475].Var12 == 2) {
            Gvar.var_2887 = 1;
        }
        await Func.func619();
        Gvar.var_83[Gvar.var_412].Var21 = 1;
        if (Gvar.var_83[Gvar.var_412].Var5 == 2) {
            Gvar.var_411 = 1;
        }
        if (Gvar.var_83[Gvar.var_412].Var5 == 4) {
            Gvar.var_411 = 2;
        }
        if (Gvar.var_83[Gvar.var_412].Var5 == 8) {
            Gvar.var_411 = 3;
        }
        if (Gvar.var_83[Gvar.var_412].Var5 == 6) {
            Gvar.var_411 = 4;
        }
        if (Gvar.var_83[Gvar.var_412].Var5 == 1) {
            Gvar.var_411 = 5;
        }
        if (Gvar.var_83[Gvar.var_412].Var5 == 7) {
            Gvar.var_411 = 6;
        }
        if (Gvar.var_83[Gvar.var_412].Var5 == 3) {
            Gvar.var_411 = 7;
        }
        if (Gvar.var_83[Gvar.var_412].Var5 == 9) {
            Gvar.var_411 = 8;
        }
        Gvar.var_389 = 2;
        Adap.DSPLAY(220);
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            Gvar.var_2578 = 1;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_2578 = 0;
            await Func.func337(); // メッセージ表示処理(自動)
        }
        await Func.AutoDraw(5);
        Gvar.var_411 = 0;
        Gvar.var_83[Gvar.var_412].Var21 = 0;
        Gvar.var_389 = 0;
        await Func.setMessage("" + Gvar.var_2886 + "が",
                               "呪われた！", 8, true, false, false);
        if (Gvar.var_2887 == 1) {
            await Func.setMessage("･･･と思ったが、",
                                   "漆黒のオーラに守られて無事だった。", 7, false, false, false);
        }
        if (Gvar.var_2887 == 2) {
            await Func.setMessage("･･･と思ったが、",
                                   "装備DISCの効果によって呪いを防いだ！", 7, true, true, false);
            Gvar.var_1073 = Adap.rnd(4);
            if (Gvar.var_1073 == 0) {
                await Func.setMessage("君はもう「エコーズact2」の能力に",
                                       "勝つことはできない！", 7, false, false, false);
            }
            if (Gvar.var_1073 == 1) {
                await Func.setMessage("「大嫌い」だ！", "", 7, false, false, false);
            }
            if (Gvar.var_1073 == 2) {
                await Func.setMessage("言ったってわからないから",
                                       "こんな目に遭ったんだよ！", 7, false, false, false);
            }
            if (Gvar.var_1073 == 3) {
                await Func.setMessage("僕を捕まえることはできない…！", "", 7, false, false, false);
            }
        }
        await Func.AutoDraw(10);
        Gvar.var_2197 = 1;
        return;
}

export {enemy045}
