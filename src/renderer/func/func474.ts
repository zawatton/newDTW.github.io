/**
 * func474 — func474 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func474(this: any) {
        Adap.dbgprt(474);
        // 所持アイテム数が20個以上になる場合
        if (Gvar.var_224 >= 20) {
            Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            Gvar.var_1866 = 0;
            await Func.setMessage("持ち物がいっぱいで出せない", "", 7, false, false, false);
            await Func.AutoDraw(3);
            if (Gvar.var_234 == 1) {
                Gvar.var_234 = 0;
            }
            Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        // 所持アイテム数が20個未満であれば場合
        // アイテムリスト更新のための配列呼び出し？？
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        Gvar.var_1866 = 0;
        Gvar.var_224 = Gvar.var_224 + 1;
        Gvar.var_683 = Gvar.var_233[Gvar.var_1876].Var8;
        Gvar.var_233[Gvar.var_224].Var0 = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
        Gvar.var_233[Gvar.var_224].Var3 = Gvar.var_486[Gvar.var_682][Gvar.var_225][3];
        Gvar.var_233[Gvar.var_224].Var4 = Gvar.var_486[Gvar.var_682][Gvar.var_225][4];
        Gvar.var_233[Gvar.var_224].Var5 = Gvar.var_486[Gvar.var_682][Gvar.var_225][5];
        Gvar.var_233[Gvar.var_224].Var6 = Gvar.var_486[Gvar.var_682][Gvar.var_225][6];
        Gvar.var_233[Gvar.var_224].Var11 = Gvar.var_486[Gvar.var_682][Gvar.var_225][11];
        Gvar.var_233[Gvar.var_224].Var12 = Gvar.var_486[Gvar.var_682][Gvar.var_225][12];
        Gvar.var_233[Gvar.var_224].Var13 = Gvar.var_486[Gvar.var_682][Gvar.var_225][13];
        Gvar.var_233[Gvar.var_224].Var14 = Gvar.var_486[Gvar.var_682][Gvar.var_225][14];
        Gvar.var_233[Gvar.var_224].Var15 = Gvar.var_486[Gvar.var_682][Gvar.var_225][15];
        Gvar.var_233[Gvar.var_224].Var16 = Gvar.var_486[Gvar.var_682][Gvar.var_225][16];
        Gvar.var_233[Gvar.var_224].Var17 = Gvar.var_486[Gvar.var_682][Gvar.var_225][17];
        Gvar.var_233[Gvar.var_224].Var18 = Gvar.var_486[Gvar.var_682][Gvar.var_225][18];
        Gvar.var_233[Gvar.var_224].Var19 = Gvar.var_486[Gvar.var_682][Gvar.var_225][19];
        Gvar.var_233[Gvar.var_224].Var20 = Gvar.var_486[Gvar.var_682][Gvar.var_225][20];
        Gvar.var_233[Gvar.var_224].Var21 = Gvar.var_486[Gvar.var_682][Gvar.var_225][21];
        Gvar.var_233[Gvar.var_224].Var22 = Gvar.var_486[Gvar.var_682][Gvar.var_225][22];
        Gvar.var_233[Gvar.var_224].Var23 = Gvar.var_486[Gvar.var_682][Gvar.var_225][23];
        Gvar.var_233[Gvar.var_224].Var24 = Gvar.var_486[Gvar.var_682][Gvar.var_225][24];
        Gvar.var_233[Gvar.var_224].Var25 = Gvar.var_486[Gvar.var_682][Gvar.var_225][25];
        Gvar.var_233[Gvar.var_224].Var26 = Gvar.var_486[Gvar.var_682][Gvar.var_225][26];
        Gvar.var_233[Gvar.var_224].Var27 = Gvar.var_486[Gvar.var_682][Gvar.var_225][27];
        Gvar.var_233[Gvar.var_224].Var28 = Gvar.var_486[Gvar.var_682][Gvar.var_225][28];
        Gvar.var_233[Gvar.var_224].Var29 = Gvar.var_486[Gvar.var_682][Gvar.var_225][29];


        Gvar.disc_rarity = Gvar.var_233[Gvar.var_224].Var13;
        // ここまで？？
        await Func.func492(); // アイテムリスト呼び出し
        await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        Gvar.var_1866 = 0;
        await Func.setMessage("" + Gvar.item_name + "を出した", "", 7, false, false, false);
        await Func.AutoDraw(3);
        await Func.func051(); // キー入力待ち処理
        Gvar.var_213 = 1;
        Gvar.var_226 = Gvar.var_1876;
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func474}
