/**
 * enemy026 — No = 26 敵ハーヴェストの特殊能力
 *
 * (org原典: newDTW_enemy / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 26 敵ハーヴェストの特殊能力
async function enemy026(this: any) {
        Gvar.var_412 = Gvar.var_673;
        if (Gvar.var_83[Gvar.var_412].Var17 != 0 || Gvar.var_83[Gvar.var_412].Var23 != 0 || Gvar.var_83[Gvar.var_412].Var26 != 0) {
            Gvar.var_2197 = 1;
            return;
        }
        if (Gvar.var_224 == 0 || Gvar.var_97 > 90 || Gvar.var_336 > 90) {
            await Func.setMessage("ﾊｰｳﾞｪｽﾄは様子をうかがっている…",
                                   "", 8, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_2197 = 1;
            return;
        }
        Gvar.var_474 = 0;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            Gvar.var_475 = Adap.rnd(Gvar.var_224);
            Gvar.var_475 = Gvar.var_475 + 1;
            if (Gvar.var_476[Gvar.var_475] == 0 && Gvar.var_477[Gvar.var_475] == 0 && Gvar.var_478[Gvar.var_475] == 0 && Gvar.var_479[Gvar.var_475] == 0 && Gvar.var_233[Gvar.var_475].Var11 == 0) {
                Gvar.var_474 = 1;
                break;
            }
        }
        Gvar.var_2885 = Adap.rnd(3);
        if (Gvar.var_2885 == 0) {
            Gvar.var_474 = 0;
        }
        if (Gvar.var_474 == 0) {
            await Func.setMessage("ﾊｰｳﾞｪｽﾄは様子をうかがっている…",
                                   "", 8, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_2197 = 1;
            return;
        }
        Adap.DSPLAY(122);
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_412].Var7 = 1;
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_83[Gvar.var_412].Var7 = 0;
        Gvar.var_742 = 0;
        if (Gvar.equip_disc[362] == 1) {
            await Func.setMessage("装備DISCの効果で盗まれなかった。",
                                   "", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_2197 = 1;
            return;
        }
        Gvar.var_83[Gvar.var_412].Var15 = 1;
        Gvar.var_83[Gvar.var_412].Var14 = 0;
        Gvar.var_83[Gvar.var_412].Var26 = 1;
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_475].Var0;
        Gvar.var_417 = Gvar.belongings_item_list;
        Gvar.var_1249 = Gvar.var_233[Gvar.var_475].Var13;
        Gvar.disc_rarity = Gvar.var_233[Gvar.var_475].Var13;
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
        await Func.setMessage("" + Gvar.target_item_name + "を盗まれた！",
                               "", 8, false, false, false);
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        await Func.AutoDraw(10);
        Gvar.var_2197 = 1;
        Gvar.var_2695 = Gvar.var_83[Gvar.var_412].Var1;
        Gvar.var_2696 = Gvar.var_83[Gvar.var_412].Var2;
        Gvar.var_1349 = 0;
        if (Gvar.var_78[Gvar.var_419].Var15 == 2) {
            Gvar.var_78[Gvar.var_419].Var15 = 0;
            Gvar.var_83[Gvar.var_412].Var11 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1345 = 1;
            for (let cnt3 = 0; cnt3 < 14; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1345 = Gvar.var_1345 + 1;
                Gvar.var_198 = 1; // メッセージウィンドウ開く
                Gvar.var_300 = 0;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1345 = 0;
            Gvar.var_83[Gvar.var_412].Var11 = 0;
            await Func.setMessage("なんと" + Gvar.target_item_name + "は",
                                   "爆弾だった！", 7, false, false, false);
            Gvar.var_455 = Gvar.var_2695;
            Gvar.var_456 = Gvar.var_2696;
            Gvar.var_83[Gvar.var_412].Var8 = 1; // Gvar.var_83はCharactorInfo
            await Func.func668();
            return;
        }
        for (let cnt2 = 0; cnt2 < 500; ++cnt2) {
            Gvar.var_2350 = Adap.rnd(Gvar.var_33);
            Gvar.var_2351 = Adap.rnd(Gvar.var_34);
            if (Gvar.var_65[Gvar.var_2350][Gvar.var_2351] == 0 && Gvar.var_82[Gvar.var_2350][Gvar.var_2351] == 0 && Gvar.var_71[Gvar.var_2350][Gvar.var_2351] != 13 && Gvar.var_71[Gvar.var_2350][Gvar.var_2351] != 0 && Gvar.var_71[Gvar.var_2350][Gvar.var_2351] != Gvar.var_201) {
                Gvar.var_1349 = 1;
                break;
            }
        }
        if (Gvar.var_1349 == 0) {
            Gvar.var_83[Gvar.var_412].Var11 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1345 = 1;
            for (let cnt3 = 0; cnt3 < 14; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1345 = Gvar.var_1345 + 1;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1345 = 0;
            Gvar.var_83[Gvar.var_412].Var11 = 0;
            return;
        }
        if (Gvar.var_1349 == 1) {
            Gvar.var_83[Gvar.var_412].Var11 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1345 = 1;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1345 = Gvar.var_1345 + 1;
                if (Gvar.var_1345 == 16) {
                    Adap.DSPLAY(216); // ワープして逃げる時の効果音
                }
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1345 = 0;
            Gvar.var_83[Gvar.var_412].Var1 = Gvar.var_2350;
            Gvar.var_83[Gvar.var_412].Var2 = Gvar.var_2351;
            Gvar.var_82[Gvar.var_2350][Gvar.var_2351] = Gvar.var_82[Gvar.var_2695][Gvar.var_2696];
            Gvar.var_82[Gvar.var_2695][Gvar.var_2696] = 0;
            Gvar.var_83[Gvar.var_412].Var11 = 0;
            Gvar.var_83[Gvar.var_412].Var10 = Gvar.var_71[Gvar.var_2350][Gvar.var_2351];
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        return;
}

export {enemy026}
