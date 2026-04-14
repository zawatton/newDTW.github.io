/**
 * func776 — func776 ヤバいものへアイテムを入れた時の動作処理
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// ヤバいものへアイテムを入れた時の動作処理
// 旧 func776
async function func776(this: any) {
        Adap.dbgprt(776);
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.disc_rarity = Gvar.var_233[Gvar.var_225].Var13;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_3153 = Gvar.item_name;
        Gvar.var_866 = Gvar.var_864;
        Gvar.var_987[0] = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_987[1] = 0;
        Gvar.var_987[2] = 0;
        Gvar.var_987[3] = Gvar.var_233[Gvar.var_225].Var3;
        Gvar.var_987[4] = Gvar.var_233[Gvar.var_225].Var4;
        Gvar.var_987[5] = Gvar.var_233[Gvar.var_225].Var5;
        Gvar.var_987[6] = Gvar.var_233[Gvar.var_225].Var6;
        Gvar.var_987[7] = Gvar.var_233[Gvar.var_225].Var7 + Gvar.var_233[Gvar.var_225].Var8;
        Gvar.var_987[8] = 0;
        Gvar.var_987[9] = Gvar.var_233[Gvar.var_225].Var9;
        Gvar.var_987[10] = Gvar.var_233[Gvar.var_225].Var10;
        Gvar.var_987[11] = Gvar.var_233[Gvar.var_225].Var11;
        Gvar.var_987[12] = Gvar.var_233[Gvar.var_225].Var12;
        Gvar.var_987[13] = Gvar.var_233[Gvar.var_225].Var13;
        Gvar.var_987[14] = Gvar.var_233[Gvar.var_225].Var14;
        Gvar.var_987[15] = Gvar.var_233[Gvar.var_225].Var15;
        Gvar.var_987[16] = Gvar.var_233[Gvar.var_225].Var16;
        Gvar.var_987[17] = Gvar.var_233[Gvar.var_225].Var17;
        Gvar.var_987[18] = Gvar.var_233[Gvar.var_225].Var18;
        Gvar.var_987[19] = Gvar.var_233[Gvar.var_225].Var19;
        Gvar.var_987[20] = Gvar.var_233[Gvar.var_225].Var20;
        Gvar.var_987[21] = Gvar.var_233[Gvar.var_225].Var21;
        Gvar.var_987[22] = Gvar.var_233[Gvar.var_225].Var22;
        Gvar.var_987[23] = Gvar.var_233[Gvar.var_225].Var23;
        Gvar.var_987[24] = Gvar.var_233[Gvar.var_225].Var24;
        Gvar.var_987[25] = Gvar.var_233[Gvar.var_225].Var25;
        Gvar.var_987[26] = Gvar.var_233[Gvar.var_225].Var26;
        Gvar.var_987[27] = Gvar.var_233[Gvar.var_225].Var27;
        Gvar.var_987[28] = Gvar.var_233[Gvar.var_225].Var28;
        Gvar.var_987[29] = Gvar.var_233[Gvar.var_225].Var29;
        Gvar.var_1977 = 0;
        if (Gvar.var_553 == Gvar.var_225) {
            Gvar.var_476 = Adap.dim(40);
            Gvar.var_580 = Gvar.var_580 - Gvar.var_894;
            Gvar.var_894 = 0;
            Gvar.kougeki_disc_id  = 0;
            await Func.func494();
            Gvar.var_1977 = 1;
        }
        if (Gvar.var_554 == Gvar.var_225) {
            Gvar.var_477 = Adap.dim(40);
            Gvar.var_581 = Gvar.var_581 - Gvar.var_895;
            Gvar.var_895 = 0;
            Gvar.bougyo_disc_id = 0;
            await Func.func494();
            Gvar.var_1977 = 1;
        }
        if (Gvar.var_555 == Gvar.var_225) {
            Gvar.var_478 = Adap.dim(40);
            Gvar.nouryoku_disc_id = 0;
            await Func.func494();
            Gvar.var_1977 = 1;
        }
        if (Gvar.var_556 == Gvar.var_225) {
            Gvar.var_479 = Adap.dim(40);
            Gvar.shageki_disc_id = 0;
            Gvar.var_250 = 0;
            Gvar.var_1977 = 1;
        }
        if (Gvar.var_1977 == 1) {
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
            await Music.func106(); // BGM選曲呼び出し割り振り
        }
        await Func.func430();
        await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        await Func.setMessage("" + Gvar.var_3153 + "を入れた。",
                                "", 7, true, false, false);

        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func776}
