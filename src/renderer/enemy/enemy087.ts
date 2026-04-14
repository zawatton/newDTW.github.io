/**
 * enemy087 — No = 87 エシディシの特殊能力
 *
 * (org原典: newDTW_enemy / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 87 エシディシの特殊能力
async function enemy087(this: any) {
        Gvar.var_412 = Gvar.var_673;
        if (Gvar.var_83[Gvar.var_412].Var17 != 0 || Gvar.var_83[Gvar.var_412].Var23 != 0) {
            return;
        }
        if (Gvar.var_224 == 0 || Gvar.var_97 > 90 || Gvar.var_336 > 90) {
            return;
        }
        Gvar.var_474 = 0;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            Gvar.var_475 = Adap.rnd(Gvar.var_224);
            Gvar.var_475 = Gvar.var_475 + 1;
            if (Gvar.var_476[Gvar.var_475] == 0 && Gvar.var_477[Gvar.var_475] == 0 && Gvar.var_478[Gvar.var_475] == 0 && Gvar.var_479[Gvar.var_475] == 0 && Gvar.var_233[Gvar.var_475].Var11 == 0 && Gvar.var_233[Gvar.var_475].Var0 != 641) {
                Gvar.var_474 = 1;
                break;
            }
        }
        Gvar.var_2885 = Adap.rnd(3);
        if (Gvar.var_2885 != 0) {
            Gvar.var_474 = 0;
        }
        if (Gvar.var_474 == 0) {
            return;
        }
        await Func.setMessage("くらってくたばれ", "「怪焔王」の流法！！", 8, false, false, true);
        await Func.AutoDraw(5);
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_412].Var7 = 1;
        Gvar.var_83[Gvar.var_412].Var21 = 1;
        Gvar.var_411 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_411 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_411 = 3;
        Adap.DSPLAY(128);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
            Gvar.var_389 = 1;
            Gvar.var_1305++;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_389 = 3;
            Gvar.var_1305++;
            await Func.func337(); // メッセージ表示処理(自動)
        }
        Gvar.var_411 = 0;
        Gvar.var_83[Gvar.var_412].Var21 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1305 = 0;
        Gvar.var_389 = 0;
        Gvar.var_83[Gvar.var_412].Var7 = 0;
        Gvar.var_742 = 0;
        if (Gvar.var_173 == 1) {
            await Func.setMessage("燃やす攻撃に強くなっていて平気だった", "", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_2197 = 1;
            return;
        }
        if (Gvar.nouryoku_disc_id == 109) {
            await Func.setMessage("装備DISCの効果で燃やされなかった", "", 7, false, false, false);
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
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            Gvar.var_233[Gvar.var_475]["Var" + cnt2] = 0;
        }
        Gvar.var_233[Gvar.var_475].Var0 = 641;
        await Func.setMessage("" + Gvar.target_item_name + "は", "消し炭になった！", 8, false, false, false);
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        await Func.AutoDraw(10);
        Gvar.var_2197 = 1;
        return;
}

export {enemy087}
