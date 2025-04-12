import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 78 アヴドゥルさんの特殊能力
async function enemy078(this: any) {
        if (Gvar.var_128 != 0 || Gvar.var_219 != 0) {
            return;
        }
        Gvar.var_2893 = Adap.rnd(4);
        if (Gvar.dungeon_number == 99 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
            Gvar.var_2893 = 0;
        }
        if (Gvar.var_2893 == 0 && Gvar.var_114 == 0) {
            await Func.func619();
            Adap.DSPLAY(128);
            Gvar.var_742 = 1;
            Gvar.var_743 = 1; //スタンド像付与フラグON
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            Gvar.var_463 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_464 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_114 = Gvar.var_673;
            await Func.setMessage1("「ムウン！", "  レッド・バインド」！！", 8, true, false, false);
            await Func.AutoDraw(3);
            Adap.DSPLAY(136);
            Gvar.var_1380 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1380++;
            }
            Gvar.var_1380 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_83[Gvar.var_673].Var7 = 0;
            Gvar.var_743 = 0; //スタンド像付与フラグOFF
            if (Gvar.nouryoku_disc_id == 109 || Gvar.var_173 == 1) {
                Gvar.var_114 = 0;
                await Func.setMessage1("装備DISCの効果で平気だった", "", 7, false, false, false);
                await Func.AutoDraw(10);
                Gvar.var_2197 = 1;
                return;
            }
            Gvar.var_461 = Gvar.var_66;
            Gvar.var_462 = Gvar.var_67;
            Gvar.var_2473 = 0;
            Gvar.var_2474 = 0;
            if (Gvar.kougeki_disc_id  != 0 && Gvar.bougyo_disc_id == 0) {
                await Func.func426();
                if (Gvar.var_233[Gvar.var_553].Var4 != 0) {
                    Gvar.var_2474 = 1;
                }
            }
            if (Gvar.kougeki_disc_id  == 0 && Gvar.bougyo_disc_id != 0) {
                await Func.func427();
                if (Gvar.var_233[Gvar.var_554].Var4 != 0) {
                    Gvar.var_2474 = 2;
                }
            }
            if (Gvar.kougeki_disc_id  != 0 && Gvar.bougyo_disc_id != 0) {
                await Func.func426();
                await Func.func427();
                if (Gvar.var_233[Gvar.var_553].Var4 == 0 && Gvar.var_233[Gvar.var_554].Var4 == 0) {
                    Gvar.var_2474 = 0;
                    Gvar.var_2473 = 0;
                }
                if (Gvar.var_233[Gvar.var_553].Var4 != 0 && Gvar.var_233[Gvar.var_554].Var4 == 0) {
                    Gvar.var_2474 = 1;
                }
                if (Gvar.var_233[Gvar.var_553].Var4 == 0 && Gvar.var_233[Gvar.var_554].Var4 != 0) {
                    Gvar.var_2474 = 2;
                }
                if (Gvar.var_233[Gvar.var_553].Var4 != 0 && Gvar.var_233[Gvar.var_554].Var4 != 0) {
                    Gvar.var_2475 = Adap.rnd(2);
                    if (Gvar.var_2475 == 0) {
                        Gvar.var_2474 = 1;
                    }
                    if (Gvar.var_2475 == 1) {
                        Gvar.var_2474 = 2;
                    }
                }
            }
            if (Gvar.kougeki_disc_id  == 0 && Gvar.bougyo_disc_id == 0) {
                Gvar.var_2474 = 0;
                Gvar.var_2473 = 0;
            }
            if (Gvar.var_211 <= 0) {
                Gvar.var_2474 = 0;
                Gvar.var_2473 = 0;
            }
            if (Gvar.var_2474 == 1 && Gvar.var_233[Gvar.var_553].Var12 == 2) {
                Gvar.var_2474 = 0;
                Gvar.var_2473 = 3;
            }
            if (Gvar.var_2474 == 2 && Gvar.var_233[Gvar.var_554].Var12 == 2) {
                Gvar.var_2474 = 0;
                Gvar.var_2473 = 3;
            }
            if (Gvar.var_2474 == 1) {
                await Func.func426();
                Gvar.var_233[Gvar.var_553].Var4 = Gvar.var_233[Gvar.var_553].Var4 - 1;
                Gvar.var_580 = Gvar.var_580 - 1;
                Gvar.var_894 = Gvar.var_894 - 1;
                Gvar.var_2473 = 1;
                Gvar.belongings_item_list = Gvar.kougeki_disc_id ;
                Gvar.disc_rarity = Gvar.var_233[Gvar.var_553].Var13;
                await Func.func492(); // アイテムリスト呼び出し
            }
            if (Gvar.var_2474 == 2) {
                await Func.func427();
                Gvar.var_233[Gvar.var_554].Var4 = Gvar.var_233[Gvar.var_554].Var4 - 1;
                Gvar.var_581 = Gvar.var_581 - 1;
                Gvar.var_895 = Gvar.var_895 - 1;
                Gvar.var_2473 = 1;
                Gvar.belongings_item_list = Gvar.bougyo_disc_id;
                Gvar.disc_rarity = Gvar.var_233[Gvar.var_554].Var13;
                await Func.func492(); // アイテムリスト呼び出し
            }
            if (Gvar.var_2473 == 1) {
                await Func.setMessage1("い・・・息が・・・", "", 7, true, false, false);
                await Func.setMessage1("熱で呼吸が苦しくなると", "スタンドは弱まってしまう！", 7, true, false, false);
                await Func.setMessage1("" + Gvar.item_name + "は", "弱くなってしまった…", 7, true, false, false);
            }
            if (Gvar.var_2473 == 3) {
                await Func.setMessage1("スタンドが弱まりそうになったが", "漆黒のオーラに包まれていて無事だった", 7, true, false, false);
            }
            await Func.AutoDraw(10);
            Gvar.var_2197 = 1;
            return;
        }
        if (Gvar.var_2893 == 1) {
            Gvar.var_412 = Gvar.var_673;
            if (Gvar.var_83[Gvar.var_412].Var17 != 0 || Gvar.var_83[Gvar.var_412].Var23 != 0) {
                return;
            }
            if (Gvar.var_224 == 0 || Gvar.var_97 > 90 || Gvar.var_336 > 90) {
                return;
            }
            Gvar.var_474 = 0;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                Gvar.var_475 = Adap.rnd(Gvar.var_224);
                Gvar.var_475 = Gvar.var_475 + 1;
                if (Gvar.var_476[Gvar.var_475] == 0 && Gvar.var_477[Gvar.var_475] == 0 && Gvar.var_478[Gvar.var_475] == 0 && Gvar.var_479[Gvar.var_475] == 0 && Gvar.var_233[Gvar.var_475].Var11 == 0 && Gvar.var_233[Gvar.var_475].Var0 != 641) {
                    Gvar.var_474 = 1;
                    break;
                }
            }
            if (Gvar.var_474 == 0) {
                return;
            }
            await Func.setMessage1("「消し炭にしてくれる！」", "", 7, false, false, true);
            await Func.AutoDraw(5);
            await Func.func619();
            Gvar.var_742 = 1;
            Gvar.var_743 = 1; //スタンド像付与フラグON
            Gvar.var_83[Gvar.var_412].Var7 = 1;
            await Func.AutoDraw(3);
            Adap.DSPLAY(128);
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            for (let cnt3 = 0; cnt3 < 6; ++cnt3) {
                Gvar.var_389 = 2;
                Gvar.var_1305++;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_389 = 0;
                Gvar.var_1305++;
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1305 = 0;
            Gvar.var_742 = 0;
            Gvar.var_743 = 0; //スタンド像付与フラグOFF
            Gvar.var_83[Gvar.var_412].Var7 = 0;
            Gvar.var_389 = 0;
            if (Gvar.var_173 == 1) {
                await Func.setMessage1("燃やす攻撃に強くなっていて平気だった", "", 7, false, false, false);
                await Func.AutoDraw(10);
                Gvar.var_2197 = 1;
                return;
            }
            if (Gvar.nouryoku_disc_id == 109) {
                await Func.setMessage1("装備DISCの効果で燃やされなかった", "", 7, false, false, false);
                await Func.AutoDraw(10);
                Gvar.var_2197 = 1;
                return;
            }
            Gvar.var_225 = Gvar.var_475;
            if (Gvar.var_233[Gvar.var_225].Var0 >= 800 && Gvar.var_233[Gvar.var_225].Var0 < 900) {
                Gvar.var_455 = Gvar.var_66;
                Gvar.var_456 = Gvar.var_67;
                Gvar.var_448 = Gvar.var_66;
                Gvar.var_450 = Gvar.var_67;
                Gvar.var_1903 = 1;
                await Func.func414(); // ヤバいもの関係の容量設定？？
                Gvar.var_1903 = 0;
            }
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_475].Var0;
            Gvar.disc_rarity = Gvar.var_233[Gvar.var_475].Var13;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.target_item_name = Gvar.item_name;
            for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                Gvar.var_233[Gvar.var_475]["Var" + cnt3] = 0;
            }
            Gvar.var_233[Gvar.var_475].Var0 = 641;
            await Func.setMessage1("" + Gvar.target_item_name + "は", "消し炭になった！", 7, false, false, false);
            if (Gvar.var_128 >= 1) {
                await Func.func023();
            }
            await Func.AutoDraw(10);
            Gvar.var_2197 = 1;
            return;
        }
        return;
}

export {enemy078}
