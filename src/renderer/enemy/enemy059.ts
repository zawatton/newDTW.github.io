/**
 * enemy059 — No = 59 プッチ神父の特殊能力
 *
 * (org原典: newDTW_enemy / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'
import { tf } from '../i18n'

// No = 59 プッチ神父の特殊能力
async function enemy059(this: any) {
        Gvar.var_412 = Gvar.var_673;
        if (Gvar.var_83[Gvar.var_412].Var26 == 1) {
            return;
        }
        if (Gvar.kougeki_disc_id  == 0 && Gvar.bougyo_disc_id == 0 && Gvar.nouryoku_disc_id == 0) {
            return;
        }
        if (Gvar.var_72[Gvar.var_66][Gvar.var_67] != 0) {
            return;
        }
        Gvar.var_2830 = Adap.rnd(3);
        if (Gvar.var_2830 == 0) {
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_412].Var7 = 1;
            Gvar.var_83[Gvar.var_412].Var21 = 1;
            Gvar.var_2902 = 1;
            Gvar.var_743 = 0; //スタンド像付与フラグOFF
            Adap.DSPLAY(122);
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                if (cnt3 == 0 || cnt3 == 1 || cnt3 == 9) {
                    if (Gvar.var_83[Gvar.var_412].Var5 == 2) {
                        Gvar.var_411 = 7;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 8) {
                        Gvar.var_411 = 6;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 4) {
                        Gvar.var_411 = 5;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 6) {
                        Gvar.var_411 = 7;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 1) {
                        Gvar.var_411 = 7;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 3) {
                        Gvar.var_411 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 7) {
                        Gvar.var_411 = 2;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 9) {
                        Gvar.var_411 = 4;
                    }
                }
                if (cnt3 == 2 || cnt3 == 3 || cnt3 == 8) {
                    if (Gvar.var_83[Gvar.var_412].Var5 == 2) {
                        Gvar.var_411 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 8) {
                        Gvar.var_411 = 3;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 4) {
                        Gvar.var_411 = 2;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 6) {
                        Gvar.var_411 = 4;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 1) {
                        Gvar.var_411 = 5;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 3) {
                        Gvar.var_411 = 7;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 7) {
                        Gvar.var_411 = 6;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 9) {
                        Gvar.var_411 = 9;
                    }
                }
                if (cnt3 == 4 || cnt3 == 5 || cnt3 == 6 || cnt3 == 7) {
                    if (Gvar.var_83[Gvar.var_412].Var5 == 2) {
                        Gvar.var_411 = 5;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 8) {
                        Gvar.var_411 = 8;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 4) {
                        Gvar.var_411 = 6;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 6) {
                        Gvar.var_411 = 8;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 1) {
                        Gvar.var_411 = 2;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 3) {
                        Gvar.var_411 = 4;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 7) {
                        Gvar.var_411 = 3;
                    }
                    if (Gvar.var_83[Gvar.var_412].Var5 == 9) {
                        Gvar.var_411 = 3;
                    }
                }
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_743 = 0; //スタンド像付与フラグOFF
            Gvar.var_742 = 0;
            Gvar.var_83[Gvar.var_412].Var7 = 0;
            Gvar.var_83[Gvar.var_412].Var21 = 0;
            Gvar.var_411 = 0;
            Gvar.var_2902 = 0;
            if (Gvar.var_128 >= 1) {
                await Func.func023();
            }
            if (Gvar.equip_disc[361] == 1) {
                await Func.setMessage("装備スタンドの効果のおかげで",
                                       "DISCを抜き取られなかった。", 7, false, false, false);
                await Func.AutoDraw(10);
                Gvar.var_2197 = 1;
                return;
            }
            if (Gvar.kougeki_disc_id  != 0 && Gvar.bougyo_disc_id != 0 && Gvar.nouryoku_disc_id != 0) {
                Gvar.var_2396 = Adap.rnd(3);
                if (Gvar.var_2396 == 0) {
                    Gvar.var_2397 = 0;
                }
                if (Gvar.var_2396 == 1) {
                    Gvar.var_2397 = 1;
                }
                if (Gvar.var_2396 == 2) {
                    Gvar.var_2397 = 2;
                }
            }
            if (Gvar.kougeki_disc_id  != 0 && Gvar.bougyo_disc_id != 0 && Gvar.nouryoku_disc_id == 0) {
                Gvar.var_2396 = Adap.rnd(2);
                if (Gvar.var_2396 == 0) {
                    Gvar.var_2397 = 0;
                }
                if (Gvar.var_2396 == 1) {
                    Gvar.var_2397 = 1;
                }
            }
            if (Gvar.kougeki_disc_id  != 0 && Gvar.bougyo_disc_id == 0 && Gvar.nouryoku_disc_id != 0) {
                Gvar.var_2396 = Adap.rnd(2);
                if (Gvar.var_2396 == 0) {
                    Gvar.var_2397 = 0;
                }
                if (Gvar.var_2396 == 1) {
                    Gvar.var_2397 = 2;
                }
            }
            if (Gvar.kougeki_disc_id  == 0 && Gvar.bougyo_disc_id != 0 && Gvar.nouryoku_disc_id != 0) {
                Gvar.var_2396 = Adap.rnd(2);
                if (Gvar.var_2396 == 0) {
                    Gvar.var_2397 = 1;
                }
                if (Gvar.var_2396 == 1) {
                    Gvar.var_2397 = 2;
                }
            }
            if (Gvar.kougeki_disc_id  != 0 && Gvar.bougyo_disc_id == 0 && Gvar.nouryoku_disc_id == 0) {
                Gvar.var_2397 = 0;
            }
            if (Gvar.kougeki_disc_id  == 0 && Gvar.bougyo_disc_id != 0 && Gvar.nouryoku_disc_id == 0) {
                Gvar.var_2397 = 1;
            }
            if (Gvar.kougeki_disc_id  == 0 && Gvar.bougyo_disc_id == 0 && Gvar.nouryoku_disc_id != 0) {
                Gvar.var_2397 = 2;
            }
            if (Gvar.var_2397 == 0) {
                await Func.func426();
                Gvar.var_476 = Adap.dim(40);
                Gvar.var_580 = Gvar.var_580 - Gvar.var_894;
                Gvar.var_894 = 0;
                Gvar.kougeki_disc_id  = 0;
                await Func.func494();
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_553].Var0;
                Gvar.disc_rarity = Gvar.var_233[Gvar.var_553].Var13;
                Gvar.var_475 = Gvar.var_553;
                Gvar.var_896 = 0;
            }
            if (Gvar.var_2397 == 1) {
                await Func.func427();
                Gvar.var_477 = Adap.dim(40);
                Gvar.var_581 = Gvar.var_581 - Gvar.var_895;
                Gvar.var_895 = 0;
                Gvar.bougyo_disc_id = 0;
                await Func.func494();
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_554].Var0;
                Gvar.disc_rarity = Gvar.var_233[Gvar.var_554].Var13;
                Gvar.var_475 = Gvar.var_554;
                Gvar.var_897 = 0;
            }
            if (Gvar.var_2397 == 2) {
                await Func.func428();
                Gvar.var_478 = Adap.dim(40);
                Gvar.nouryoku_disc_id = 0;
                await Func.func494();
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_555].Var0;
                Gvar.disc_rarity = Gvar.var_233[Gvar.var_555].Var13;
                Gvar.var_475 = Gvar.var_555;
                Gvar.var_898 = 0;
            }
            Gvar.var_83[Gvar.var_412].Var26 = 1;
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_475].Var0;
            await Music.func106(); // BGM選曲呼び出し割り振り
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.target_item_name = Gvar.item_name;
            Gvar.var_419 = Gvar.var_412 + 200;
            Gvar.var_78[Gvar.var_419].Var0 = Gvar.var_233[Gvar.var_475].Var0;
            Gvar.var_78[Gvar.var_419].Var1 = Gvar.var_233[Gvar.var_475].Var1;
            Gvar.var_78[Gvar.var_419].Var2 = Gvar.var_233[Gvar.var_475].Var2;
            Gvar.var_78[Gvar.var_419].Var3 = Gvar.var_233[Gvar.var_475].Var3;
            Gvar.var_78[Gvar.var_419].Var4 = Gvar.var_233[Gvar.var_475].Var4;
            Gvar.var_78[Gvar.var_419].Var5 = Gvar.var_233[Gvar.var_475].Var5;
            Gvar.var_78[Gvar.var_419].Var6 = Gvar.var_233[Gvar.var_475].Var6;
            Gvar.var_78[Gvar.var_419].Var7 = Gvar.var_233[Gvar.var_475].Var7;
            Gvar.var_78[Gvar.var_419].Var8 = Gvar.var_233[Gvar.var_475].Var8;
            Gvar.var_78[Gvar.var_419].Var9 = Gvar.var_233[Gvar.var_475].Var9;
            Gvar.var_78[Gvar.var_419].Var10 = Gvar.var_233[Gvar.var_475].Var10;
            Gvar.var_78[Gvar.var_419].Var11 = Gvar.var_233[Gvar.var_475].Var11;
            Gvar.var_78[Gvar.var_419].Var12 = Gvar.var_233[Gvar.var_475].Var12;
            Gvar.var_78[Gvar.var_419].Var13 = Gvar.var_233[Gvar.var_475].Var13;
            Gvar.var_78[Gvar.var_419].Var14 = Gvar.var_233[Gvar.var_475].Var14;
            Gvar.var_78[Gvar.var_419].Var15 = Gvar.var_233[Gvar.var_475].Var15;
            Gvar.var_78[Gvar.var_419].Var16 = Gvar.var_233[Gvar.var_475].Var16;
            Gvar.var_78[Gvar.var_419].Var17 = Gvar.var_233[Gvar.var_475].Var17;
            Gvar.var_78[Gvar.var_419].Var18 = Gvar.var_233[Gvar.var_475].Var18;
            Gvar.var_78[Gvar.var_419].Var19 = Gvar.var_233[Gvar.var_475].Var19;
            Gvar.var_78[Gvar.var_419].Var20 = Gvar.var_233[Gvar.var_475].Var20;
            Gvar.var_78[Gvar.var_419].Var21 = Gvar.var_233[Gvar.var_475].Var21;
            Gvar.var_78[Gvar.var_419].Var22 = Gvar.var_233[Gvar.var_475].Var22;
            Gvar.var_78[Gvar.var_419].Var23 = Gvar.var_233[Gvar.var_475].Var23;
            Gvar.var_78[Gvar.var_419].Var24 = Gvar.var_233[Gvar.var_475].Var24;
            Gvar.var_78[Gvar.var_419].Var25 = Gvar.var_233[Gvar.var_475].Var25;
            Gvar.var_78[Gvar.var_419].Var26 = Gvar.var_233[Gvar.var_475].Var26;
            Gvar.var_78[Gvar.var_419].Var27 = Gvar.var_233[Gvar.var_475].Var27;
            Gvar.var_78[Gvar.var_419].Var28 = Gvar.var_233[Gvar.var_475].Var28;
            Gvar.var_78[Gvar.var_419].Var29 = Gvar.var_233[Gvar.var_475].Var29;
            Gvar.var_225 = Gvar.var_475;
            await Func.func433(); // アイテム配列(所持アイテム)初期化関数
            await Func.setMessage(tf("装備中の{0}を", Gvar.target_item_name), "抜き取られてしまった！", 8, false, false, false);
            await Func.func619();
            await Func.AutoDraw(10);
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy059}
