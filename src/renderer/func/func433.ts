/**
 * func433 — func433 アイテム配列の "数" 増減？関数
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func433(this: any) {
        Adap.dbgprt(433);
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            await Func.func434();
            return;
        }
        // Gvar.var_1957はアイテムを一つでも持っているかどうか？
        Gvar.var_1957 = 0;
        // Gvar.var_1957が0の時は、配列を初期化する

        Gvar.var_233[Gvar.var_225].Var0 = 0;
        Gvar.var_233[Gvar.var_225].Var1 = 0;
        Gvar.var_233[Gvar.var_225].Var2 = 0;
        Gvar.var_233[Gvar.var_225].Var3 = 0;
        Gvar.var_233[Gvar.var_225].Var4 = 0;
        Gvar.var_233[Gvar.var_225].Var5 = 0;
        Gvar.var_233[Gvar.var_225].Var6 = 0;
        Gvar.var_233[Gvar.var_225].Var7 = 0;
        Gvar.var_233[Gvar.var_225].Var8 = 0;
        Gvar.var_233[Gvar.var_225].Var9 = 0;
        Gvar.var_233[Gvar.var_225].Var10 = 0;
        Gvar.var_233[Gvar.var_225].Var11 = 0;
        Gvar.var_233[Gvar.var_225].Var12 = 0;
        Gvar.var_233[Gvar.var_225].Var13 = 0;
        Gvar.var_233[Gvar.var_225].Var14 = 0;
        Gvar.var_233[Gvar.var_225].Var15 = 0;
        Gvar.var_233[Gvar.var_225].Var16 = 0;
        Gvar.var_233[Gvar.var_225].Var17 = 0;
        Gvar.var_233[Gvar.var_225].Var18 = 0;
        Gvar.var_233[Gvar.var_225].Var19 = 0;
        Gvar.var_233[Gvar.var_225].Var20 = 0;
        Gvar.var_233[Gvar.var_225].Var21 = 0;
        Gvar.var_233[Gvar.var_225].Var22 = 0;
        Gvar.var_233[Gvar.var_225].Var23 = 0;
        Gvar.var_233[Gvar.var_225].Var24 = 0;
        Gvar.var_233[Gvar.var_225].Var25 = 0;
        Gvar.var_233[Gvar.var_225].Var26 = 0;
        Gvar.var_233[Gvar.var_225].Var27 = 0;
        Gvar.var_233[Gvar.var_225].Var28 = 0;
        Gvar.var_233[Gvar.var_225].Var29 = 0;

        Gvar.var_447 = 1;
        Gvar.var_449 = 2;

        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            if (Gvar.var_233[Gvar.var_447].Var0 == 0) {

                Gvar.var_233[Gvar.var_447].Var0 = Gvar.var_233[Gvar.var_449].Var0;
                Gvar.var_233[Gvar.var_447].Var1 = Gvar.var_233[Gvar.var_449].Var1;
                Gvar.var_233[Gvar.var_447].Var2 = Gvar.var_233[Gvar.var_449].Var2;
                Gvar.var_233[Gvar.var_447].Var3 = Gvar.var_233[Gvar.var_449].Var3;
                Gvar.var_233[Gvar.var_447].Var4 = Gvar.var_233[Gvar.var_449].Var4;
                Gvar.var_233[Gvar.var_447].Var5 = Gvar.var_233[Gvar.var_449].Var5;
                Gvar.var_233[Gvar.var_447].Var6 = Gvar.var_233[Gvar.var_449].Var6;
                Gvar.var_233[Gvar.var_447].Var7 = Gvar.var_233[Gvar.var_449].Var7;
                Gvar.var_233[Gvar.var_447].Var8 = Gvar.var_233[Gvar.var_449].Var8;
                Gvar.var_233[Gvar.var_447].Var9 = Gvar.var_233[Gvar.var_449].Var9;
                Gvar.var_233[Gvar.var_447].Var10 = Gvar.var_233[Gvar.var_449].Var10;
                Gvar.var_233[Gvar.var_447].Var11 = Gvar.var_233[Gvar.var_449].Var11;
                Gvar.var_233[Gvar.var_447].Var12 = Gvar.var_233[Gvar.var_449].Var12;
                Gvar.var_233[Gvar.var_447].Var13 = Gvar.var_233[Gvar.var_449].Var13;
                Gvar.var_233[Gvar.var_447].Var14 = Gvar.var_233[Gvar.var_449].Var14;
                Gvar.var_233[Gvar.var_447].Var15 = Gvar.var_233[Gvar.var_449].Var15;
                Gvar.var_233[Gvar.var_447].Var16 = Gvar.var_233[Gvar.var_449].Var16;
                Gvar.var_233[Gvar.var_447].Var17 = Gvar.var_233[Gvar.var_449].Var17;
                Gvar.var_233[Gvar.var_447].Var18 = Gvar.var_233[Gvar.var_449].Var18;
                Gvar.var_233[Gvar.var_447].Var19 = Gvar.var_233[Gvar.var_449].Var19;
                Gvar.var_233[Gvar.var_447].Var20 = Gvar.var_233[Gvar.var_449].Var20;
                Gvar.var_233[Gvar.var_447].Var21 = Gvar.var_233[Gvar.var_449].Var21;
                Gvar.var_233[Gvar.var_447].Var22 = Gvar.var_233[Gvar.var_449].Var22;
                Gvar.var_233[Gvar.var_447].Var23 = Gvar.var_233[Gvar.var_449].Var23;
                Gvar.var_233[Gvar.var_447].Var24 = Gvar.var_233[Gvar.var_449].Var24;
                Gvar.var_233[Gvar.var_447].Var25 = Gvar.var_233[Gvar.var_449].Var25;
                Gvar.var_233[Gvar.var_447].Var26 = Gvar.var_233[Gvar.var_449].Var26;
                Gvar.var_233[Gvar.var_447].Var27 = Gvar.var_233[Gvar.var_449].Var27;
                Gvar.var_233[Gvar.var_447].Var28 = Gvar.var_233[Gvar.var_449].Var28;
                Gvar.var_233[Gvar.var_447].Var29 = Gvar.var_233[Gvar.var_449].Var29;
                Gvar.var_476[Gvar.var_447] = Gvar.var_476[Gvar.var_449];
                Gvar.var_477[Gvar.var_447] = Gvar.var_477[Gvar.var_449];
                Gvar.var_478[Gvar.var_447] = Gvar.var_478[Gvar.var_449];
                Gvar.var_479[Gvar.var_447] = Gvar.var_479[Gvar.var_449];
                
                Gvar.var_1957 = 1;
                Gvar.var_224 = Gvar.var_224 - 1; // アイテムの数を減らしている。唯一ここだけ

            }
            if (Gvar.var_1957 == 1) {

                Gvar.var_233[Gvar.var_447].Var0 = Gvar.var_233[Gvar.var_449].Var0;
                Gvar.var_233[Gvar.var_447].Var1 = Gvar.var_233[Gvar.var_449].Var1;
                Gvar.var_233[Gvar.var_447].Var2 = Gvar.var_233[Gvar.var_449].Var2;
                Gvar.var_233[Gvar.var_447].Var3 = Gvar.var_233[Gvar.var_449].Var3;
                Gvar.var_233[Gvar.var_447].Var4 = Gvar.var_233[Gvar.var_449].Var4;
                Gvar.var_233[Gvar.var_447].Var5 = Gvar.var_233[Gvar.var_449].Var5;
                Gvar.var_233[Gvar.var_447].Var6 = Gvar.var_233[Gvar.var_449].Var6;
                Gvar.var_233[Gvar.var_447].Var7 = Gvar.var_233[Gvar.var_449].Var7;
                Gvar.var_233[Gvar.var_447].Var8 = Gvar.var_233[Gvar.var_449].Var8;
                Gvar.var_233[Gvar.var_447].Var9 = Gvar.var_233[Gvar.var_449].Var9;
                Gvar.var_233[Gvar.var_447].Var10 = Gvar.var_233[Gvar.var_449].Var10;
                Gvar.var_233[Gvar.var_447].Var11 = Gvar.var_233[Gvar.var_449].Var11;
                Gvar.var_233[Gvar.var_447].Var12 = Gvar.var_233[Gvar.var_449].Var12;
                Gvar.var_233[Gvar.var_447].Var13 = Gvar.var_233[Gvar.var_449].Var13;
                Gvar.var_233[Gvar.var_447].Var14 = Gvar.var_233[Gvar.var_449].Var14;
                Gvar.var_233[Gvar.var_447].Var15 = Gvar.var_233[Gvar.var_449].Var15;
                Gvar.var_233[Gvar.var_447].Var16 = Gvar.var_233[Gvar.var_449].Var16;
                Gvar.var_233[Gvar.var_447].Var17 = Gvar.var_233[Gvar.var_449].Var17;
                Gvar.var_233[Gvar.var_447].Var18 = Gvar.var_233[Gvar.var_449].Var18;
                Gvar.var_233[Gvar.var_447].Var19 = Gvar.var_233[Gvar.var_449].Var19;
                Gvar.var_233[Gvar.var_447].Var20 = Gvar.var_233[Gvar.var_449].Var20;
                Gvar.var_233[Gvar.var_447].Var21 = Gvar.var_233[Gvar.var_449].Var21;
                Gvar.var_233[Gvar.var_447].Var22 = Gvar.var_233[Gvar.var_449].Var22;
                Gvar.var_233[Gvar.var_447].Var23 = Gvar.var_233[Gvar.var_449].Var23;
                Gvar.var_233[Gvar.var_447].Var24 = Gvar.var_233[Gvar.var_449].Var24;
                Gvar.var_233[Gvar.var_447].Var25 = Gvar.var_233[Gvar.var_449].Var25;
                Gvar.var_233[Gvar.var_447].Var26 = Gvar.var_233[Gvar.var_449].Var26;
                Gvar.var_233[Gvar.var_447].Var27 = Gvar.var_233[Gvar.var_449].Var27;
                Gvar.var_233[Gvar.var_447].Var28 = Gvar.var_233[Gvar.var_449].Var28;
                Gvar.var_233[Gvar.var_447].Var29 = Gvar.var_233[Gvar.var_449].Var29;
                Gvar.var_476[Gvar.var_447] = Gvar.var_476[Gvar.var_449];
                Gvar.var_477[Gvar.var_447] = Gvar.var_477[Gvar.var_449];
                Gvar.var_478[Gvar.var_447] = Gvar.var_478[Gvar.var_449];
                Gvar.var_479[Gvar.var_447] = Gvar.var_479[Gvar.var_449];
                
            }
            Gvar.var_447 = Gvar.var_447 + 1;
            Gvar.var_449 = Gvar.var_449 + 1;
        }
        // 
        Gvar.var_233[Gvar.var_447].Var0 = 0; // Ver 0.1309で追加。これが無いと消費アイテムを使用した時にアイテム欄にどんどん使用したアイテムが消えずに溜まっていく。
        Gvar.var_233[Gvar.var_449].Var0 = 0; // Ver 0.1309で追加。これが無いと消費アイテムを使用した時にアイテム欄にどんどん使用したアイテムが消えずに溜まっていく。

        Gvar.var_1956 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            if (Gvar.var_479[Gvar.var_1956] == 1) {
                Gvar.var_250 = Gvar.var_1956;
            }
            Gvar.var_1956 = Gvar.var_1956 + 1;
        }
        return;
}

export {func433}
