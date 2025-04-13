import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// アイテムを拾う際の動作処理
async function func400(this: any) {
        Adap.dbgprt(400);
        Gvar.var_321 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
        Gvar.belongings_item_list = Gvar.var_78[Gvar.var_321].Var0;
        Gvar.disc_rarity = Gvar.var_78[Gvar.var_321].Var13;
        await Func.func492(); // アイテムリスト呼び出し
        // 拾ったアイテムが No = 1 お金であれば。また、床に落ちているアイテムが Gvar.var_321 ?
        if (Gvar.var_78[Gvar.var_321].Var0 == 1) {
            Adap.DSPLAY(207);
            await Func.func435(); // お金を拾った時の動作処理
            return;
        }
        if (Gvar.var_78[Gvar.var_321].Var0 >= 400 && Gvar.var_78[Gvar.var_321].Var0 < 500) {
            await Func.func401(); // 射撃discを拾った際、同じものを既に所持していた時にまとめる動作処理
            if (Gvar.var_1839 == 1) {
                Gvar.var_1839 = 0;
                return;
            }
        }
        await Func.func398(); // 道具(メニュー画面/道具)へ直接表示されるアイテム表示
        // Gvar.var_224 は持っているアイテム数と思われる。アイテムは20個まで持てる。
        // 所持アイテム数が20個以上になる場合
        if (Gvar.var_224 >= 20) {
            await Func.setMessage("" + Gvar.disp_item_name + "に乗った",
                                    "持ち物が多くて拾えない", 7, false, false, false);
            await Func.func047(); // メッセージ履歴追加処理
            await Func.AutoDraw(5);
            return;
        }
        // 所持アイテムが20個未満の場合'
        await Func.setMessage("" + Gvar.disp_item_name + "を拾った", "", 7, false, false, false);
        await Func.func047(); // メッセージ履歴追加処理
        if (Gvar.belongings_item_list >= 900 && Gvar.belongings_item_list < 1000) {
            Gvar.var_1840 = Gvar.belongings_item_list - 900;
            Gvar.var_988[Gvar.var_1840] = 1;
        }
        if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list < 770) {
            Gvar.var_1840 = Gvar.belongings_item_list + 250 - 900;
            Gvar.var_988[Gvar.var_1840] = 1;
        }
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400 && Gvar.dungeon_number != 3 && Gvar.dungeon_number != 4 && Gvar.dungeon_number != 5) {
            Gvar.var_862[Gvar.belongings_item_list][0] = 1;
        }
        // おそらくアイテム欄へ追加していくプログラム
        Gvar.var_224 = Gvar.var_224 + 1; // 個数を追加

        // 手持ちへ床に落ちているアイテム情報を移動
        Gvar.var_233[Gvar.var_224].Var0 = Gvar.var_78[Gvar.var_321].Var0;
        Gvar.var_233[Gvar.var_224].Var3 = Gvar.var_78[Gvar.var_321].Var3;
        Gvar.var_233[Gvar.var_224].Var4 = Gvar.var_78[Gvar.var_321].Var4;
        Gvar.var_233[Gvar.var_224].Var5 = Gvar.var_78[Gvar.var_321].Var5;
        Gvar.var_233[Gvar.var_224].Var6 = Gvar.var_78[Gvar.var_321].Var6;
        Gvar.var_233[Gvar.var_224].Var7 = Gvar.var_78[Gvar.var_321].Var7;
        Gvar.var_233[Gvar.var_224].Var8 = Gvar.var_78[Gvar.var_321].Var8;
        Gvar.var_233[Gvar.var_224].Var11 = Gvar.var_78[Gvar.var_321].Var11;
        Gvar.var_233[Gvar.var_224].Var12 = Gvar.var_78[Gvar.var_321].Var12;
        Gvar.var_233[Gvar.var_224].Var13 = Gvar.var_78[Gvar.var_321].Var13;
        Gvar.var_233[Gvar.var_224].Var14 = Gvar.var_78[Gvar.var_321].Var14;
        Gvar.var_233[Gvar.var_224].Var15 = Gvar.var_78[Gvar.var_321].Var15;
        Gvar.var_233[Gvar.var_224].Var16 = Gvar.var_78[Gvar.var_321].Var16;
        Gvar.var_233[Gvar.var_224].Var17 = Gvar.var_78[Gvar.var_321].Var17;
        Gvar.var_233[Gvar.var_224].Var18 = Gvar.var_78[Gvar.var_321].Var18;
        Gvar.var_233[Gvar.var_224].Var19 = Gvar.var_78[Gvar.var_321].Var19;
        Gvar.var_233[Gvar.var_224].Var20 = Gvar.var_78[Gvar.var_321].Var20;
        Gvar.var_233[Gvar.var_224].Var21 = Gvar.var_78[Gvar.var_321].Var21;
        Gvar.var_233[Gvar.var_224].Var22 = Gvar.var_78[Gvar.var_321].Var22;
        Gvar.var_233[Gvar.var_224].Var23 = Gvar.var_78[Gvar.var_321].Var23;
        Gvar.var_233[Gvar.var_224].Var24 = Gvar.var_78[Gvar.var_321].Var24;
        Gvar.var_233[Gvar.var_224].Var25 = Gvar.var_78[Gvar.var_321].Var25;
        Gvar.var_233[Gvar.var_224].Var26 = Gvar.var_78[Gvar.var_321].Var26;
        Gvar.var_233[Gvar.var_224].Var27 = Gvar.var_78[Gvar.var_321].Var27;
        Gvar.var_233[Gvar.var_224].Var28 = Gvar.var_78[Gvar.var_321].Var28;
        Gvar.var_233[Gvar.var_224].Var29 = Gvar.var_78[Gvar.var_321].Var29;

       // 床に落ちていたアイテム情報を削除
        Gvar.var_77[Gvar.var_66][Gvar.var_67] = 0;
        Gvar.var_78[Gvar.var_321].Var0 = 0;
        Gvar.var_78[Gvar.var_321].Var1 = 0;
        Gvar.var_78[Gvar.var_321].Var2 = 0;
        Gvar.var_78[Gvar.var_321].Var3 = 0;
        Gvar.var_78[Gvar.var_321].Var4 = 0;
        Gvar.var_78[Gvar.var_321].Var5 = 0;
        Gvar.var_78[Gvar.var_321].Var6 = 0;
        Gvar.var_78[Gvar.var_321].Var7 = 0;
        Gvar.var_78[Gvar.var_321].Var8 = 0;
        Gvar.var_78[Gvar.var_321].Var9 = 0;
        Gvar.var_78[Gvar.var_321].Var11 = 0;
        Gvar.var_78[Gvar.var_321].Var12 = 0;
        Gvar.var_78[Gvar.var_321].Var13 = 0;
        Gvar.var_78[Gvar.var_321].Var14 = 0;
        Gvar.var_78[Gvar.var_321].Var15 = 0;
        Gvar.var_78[Gvar.var_321].Var16 = 0;
        Gvar.var_78[Gvar.var_321].Var17 = 0;
        Gvar.var_78[Gvar.var_321].Var18 = 0;
        Gvar.var_78[Gvar.var_321].Var19 = 0;
        Gvar.var_78[Gvar.var_321].Var20 = 0;
        Gvar.var_78[Gvar.var_321].Var21 = 0;
        Gvar.var_78[Gvar.var_321].Var22 = 0;
        Gvar.var_78[Gvar.var_321].Var23 = 0;
        Gvar.var_78[Gvar.var_321].Var24 = 0;
        Gvar.var_78[Gvar.var_321].Var25 = 0;
        Gvar.var_78[Gvar.var_321].Var26 = 0;
        Gvar.var_78[Gvar.var_321].Var27 = 0;
        Gvar.var_78[Gvar.var_321].Var28 = 0;
        Gvar.var_78[Gvar.var_321].Var29 = 0;
        Adap.DSPLAY(108); // アイテムを拾った時の効果音
        if (Gvar.var_362 == 1) {
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
        }
        return;
}

export {func400}
