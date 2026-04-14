/**
 * func557 — func557 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func557(this: any) {
        Adap.dbgprt(557);
        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_673 = Gvar.var_97;
        Gvar.var_440 = Gvar.var_2102;
        Gvar.var_441 = Gvar.var_2103;
        if (Gvar.var_2509 == 1) {
            Gvar.var_953 = 102;
        }
        if (Gvar.var_2509 == 2) {
            Gvar.var_953 = 103;
        }
        if (Gvar.var_2509 == 3) {
            Gvar.var_953 = 104;
        }
        Gvar.var_82[Gvar.var_440][Gvar.var_441] = Gvar.var_673;
        Gvar.var_83[Gvar.var_673].Var0 = Gvar.var_953;
        Gvar.enemy_list = Gvar.var_953;
        await Func.func626(); // 敵リスト
        Gvar.var_83[Gvar.var_673].Var1 = Gvar.var_440;
        Gvar.var_83[Gvar.var_673].Var2 = Gvar.var_441;
        Gvar.var_83[Gvar.var_673].Var3 = Gvar.enemy_hp;
        Gvar.var_83[Gvar.var_673].Var4 = 3;
        if (Gvar.var_2509 == 1) {
            Gvar.var_83[Gvar.var_673].Var5 = 1;
        }
        if (Gvar.var_2509 == 2) {
            Gvar.var_83[Gvar.var_673].Var5 = 9;
        }
        if (Gvar.var_2509 == 3) {
            Gvar.var_83[Gvar.var_673].Var5 = 7;
        }
        Gvar.var_83[Gvar.var_673].Var6 = 0;
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_83[Gvar.var_673].Var8 = 0;
        Gvar.var_83[Gvar.var_673].Var9 = 0;
        Gvar.var_83[Gvar.var_673].Var10 = Gvar.var_71[Gvar.var_440][Gvar.var_441];
        Gvar.var_83[Gvar.var_673].Var11 = 0;
        Gvar.var_83[Gvar.var_673].Var12 = 99;
        Gvar.var_83[Gvar.var_673].Var13 = 0;
        Gvar.var_83[Gvar.var_673].Var14 = 0;
        Gvar.var_83[Gvar.var_673].Var15 = 1;
        Gvar.var_83[Gvar.var_673].Var16 = 0;
        Gvar.var_83[Gvar.var_673].Var17 = 0;
        Gvar.var_83[Gvar.var_673].Var18 = 0;
        Gvar.var_83[Gvar.var_673].Var19 = 0;
        Gvar.var_83[Gvar.var_673].Var20 = 0;
        Gvar.var_83[Gvar.var_673].Var21 = 0;
        Gvar.var_83[Gvar.var_673].Var22 = 0;
        Gvar.var_83[Gvar.var_673].Var23 = 0;
        Gvar.var_83[Gvar.var_673].Var24 = 0;
        Gvar.var_83[Gvar.var_673].Var25 = 0;
        Gvar.var_83[Gvar.var_673].Var26 = 0;
        Gvar.var_83[Gvar.var_673].Var27 = 0;
        Gvar.var_83[Gvar.var_673].Var28 = 0;
        Gvar.var_83[Gvar.var_673].Var29 = 0;
        Gvar.var_83[Gvar.var_673].Var30 = 0;
        Gvar.var_83[Gvar.var_673].Var31 = 2;
        Gvar.var_83[Gvar.var_673].Var32 = Adap.rnd(12);
        Gvar.var_83[Gvar.var_673].Var33 = 6;
        Gvar.var_83[Gvar.var_673].Var34 = 6;
        Gvar.var_83[Gvar.var_673].Var35 = Gvar.var_440;
        Gvar.var_83[Gvar.var_673].Var36 = Gvar.var_441;
        Gvar.var_83[Gvar.var_673].Var37 = Gvar.var_83[Gvar.var_673].Var5;
        Gvar.var_83[Gvar.var_673].Var38 = 0;
        Gvar.var_83[Gvar.var_673].Var39 = 0;
        // No = 4 なので、一巡後の世界
        if (Gvar.dungeon_number == 4 && Gvar.current_floor >= 10) {
            await Func.func558();
        }
        return;
}

export {func557}
