/**
 * func777 — func777 ヤバいものからアイテムを取り出す時の動作処理
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ヤバいものからアイテムを取り出す時の動作処理
// 旧 func777
async function func777(this: any) {
        Adap.dbgprt(777);
        // 所持アイテム数が20個以上になる場合
        if (Gvar.var_224 >= 20) {
            await Func.setMessage("持ち物がいっぱいで出せない。",
                                    "", 7, true, false, false);

            await Func.func051(); // キー入力待ち処理
            Gvar.var_198 = 0; // メッセージウィンドウ閉じる
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        Gvar.belongings_item_list = Gvar.var_987[0];
        Gvar.disc_rarity = Gvar.var_987[13];
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_3153 = Gvar.item_name;
        if (Gvar.belongings_item_list >= 800 && Gvar.belongings_item_list < 900) {
            Gvar.var_1806 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_224; ++cnt2) {
                if (Gvar.var_233[Gvar.var_1806].Var0 >= 800 && Gvar.var_233[Gvar.var_1806].Var0 < 900) {
                    Gvar.var_1807 = Gvar.var_233[Gvar.var_1806].Var6;
                    Gvar.var_986[Gvar.var_1807] = 1;
                }
                Gvar.var_1806 = Gvar.var_1806 + 1;
            }
            Gvar.var_1806 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_336; ++cnt2) {
                if (Gvar.var_78[Gvar.var_1806].Var0 >= 800 && Gvar.var_78[Gvar.var_1806].Var0 < 900) {
                    Gvar.var_1807 = Gvar.var_78[Gvar.var_1806].Var6;
                    Gvar.var_986[Gvar.var_1807] = 1;
                }
                Gvar.var_1806 = Gvar.var_1806 + 1;
            }
            Gvar.var_858 = 1;
            for (let cnt2 = 0; cnt2 < 80; ++cnt2) {
                if (Gvar.var_986[Gvar.var_858] == 0) {
                    Gvar.var_1811 = 0;
                    for (let cnt4 = 0; cnt4 < 11; ++cnt4) {
                        Gvar.var_1812 = 0;
                        for (let cnt5 = 0; cnt5 < 30; ++cnt5) {
                            Gvar.var_486[Gvar.var_858][Gvar.var_1811][Gvar.var_1812] = 0;
                            Gvar.var_1812++;
                        }
                        Gvar.var_1811++;
                    }
                    Gvar.var_986[Gvar.var_858] = 1;
                    break;
                }
                Gvar.var_858 = Gvar.var_858 + 1;
            }
        }
        Gvar.var_224 = Gvar.var_224 + 1;
        Gvar.var_233[Gvar.var_224].Var0 = Gvar.var_987[0];
        Gvar.var_233[Gvar.var_224].Var3 = Gvar.var_987[3];
        Gvar.var_233[Gvar.var_224].Var4 = Gvar.var_987[4];
        Gvar.var_233[Gvar.var_224].Var5 = Gvar.var_987[5];
        Gvar.var_233[Gvar.var_224].Var6 = 0;
        if (Gvar.belongings_item_list >= 800 && Gvar.belongings_item_list < 900) {
            Gvar.var_233[Gvar.var_224].Var6 = Gvar.var_858;
        }
        Gvar.var_233[Gvar.var_224].Var7 = Gvar.var_987[7];
        Gvar.var_233[Gvar.var_224].Var8 = Gvar.var_987[8];
        Gvar.var_233[Gvar.var_224].Var11 = Gvar.var_987[11];
        Gvar.var_233[Gvar.var_224].Var12 = Gvar.var_987[12];
        Gvar.var_233[Gvar.var_224].Var13 = Gvar.var_987[13];
        Gvar.var_233[Gvar.var_224].Var14 = Gvar.var_987[14];
        Gvar.var_233[Gvar.var_224].Var15 = Gvar.var_987[15];
        Gvar.var_233[Gvar.var_224].Var16 = Gvar.var_987[16];
        Gvar.var_233[Gvar.var_224].Var17 = Gvar.var_987[17];
        Gvar.var_233[Gvar.var_224].Var18 = Gvar.var_987[18];
        Gvar.var_233[Gvar.var_224].Var19 = Gvar.var_987[19];
        Gvar.var_233[Gvar.var_224].Var20 = Gvar.var_987[20];
        Gvar.var_233[Gvar.var_224].Var21 = Gvar.var_987[21];
        Gvar.var_233[Gvar.var_224].Var22 = Gvar.var_987[22];
        Gvar.var_233[Gvar.var_224].Var23 = Gvar.var_987[23];
        Gvar.var_233[Gvar.var_224].Var24 = Gvar.var_987[24];
        Gvar.var_233[Gvar.var_224].Var25 = Gvar.var_987[25];
        Gvar.var_233[Gvar.var_224].Var26 = Gvar.var_987[26];
        Gvar.var_233[Gvar.var_224].Var27 = Gvar.var_987[27];
        Gvar.var_233[Gvar.var_224].Var28 = Gvar.var_987[28];
        Gvar.var_233[Gvar.var_224].Var29 = Gvar.var_987[29];
        Gvar.var_987[0] = 0;

        await Func.setMessage("" + Gvar.var_3153 + "を出した。",
                               "", 7, true, false, false);

        await Func.func051(); // キー入力待ち処理
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}
// ↑おそらくここまで鮮血のシャボン玉の機能

export {func777}
