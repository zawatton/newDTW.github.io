import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func669(this: any) {
        Adap.dbgprt(669);
        if (Gvar.var_83[Gvar.var_314].Var0 == 0 || Gvar.var_83[Gvar.var_314].Var3 == 0) {
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
            Gvar.var_83[Gvar.var_314].Var12 = 0;
        }
        Gvar.var_83[Gvar.var_314].Var13 = 0;
        Gvar.var_2672 = Gvar.var_83[Gvar.var_314].Var1;
        Gvar.var_2673 = Gvar.var_83[Gvar.var_314].Var2;
        if (Gvar.var_314 == Gvar.var_114) {
            Gvar.var_114 = 0;
        }
        Gvar.var_83[Gvar.var_314].Var11 = 1;
        Gvar.var_1351 = Gvar.var_314;
        Gvar.var_1352 = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1350 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            if (Gvar.var_1350 == 2) {
    
                Adap.DSPLAY(216); // ワープして逃げる時の効果音
            }
            Gvar.var_1350 = Gvar.var_1350 + 1;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1350 = 0;
        Gvar.var_1349 = 0;
        for (let cnt1 = 0; cnt1 < 500; ++cnt1) {
            Gvar.var_2350 = Adap.rnd(Gvar.var_33);
            Gvar.var_2351 = Adap.rnd(Gvar.var_34);
            if (Gvar.var_71[Gvar.var_2350][Gvar.var_2351] != 0 && Gvar.var_65[Gvar.var_2350][Gvar.var_2351] == 0 && Gvar.var_82[Gvar.var_2350][Gvar.var_2351] == 0 && Gvar.var_71[Gvar.var_2350][Gvar.var_2351] != 13) {
                Gvar.var_1349 = 1;
                break;
            }
        }
        if (Gvar.var_1349 == 0) {
            Gvar.var_2350 = Gvar.var_2672;
            Gvar.var_2351 = Gvar.var_2673;
        }
        if (Gvar.var_1349 == 1) {
            Gvar.var_83[Gvar.var_314].Var1 = Gvar.var_2350;
            Gvar.var_83[Gvar.var_314].Var2 = Gvar.var_2351;
            Gvar.var_83[Gvar.var_314].Var10 = Gvar.var_71[Gvar.var_2350][Gvar.var_2351];
            Gvar.var_82[Gvar.var_2350][Gvar.var_2351] = Gvar.var_82[Gvar.var_2672][Gvar.var_2673];
            Gvar.var_82[Gvar.var_2672][Gvar.var_2673] = 0;
            Gvar.var_83[Gvar.var_314].Var9 = 0;
            Gvar.var_83[Gvar.var_314].Var18 = 0;
        }
        Gvar.var_83[Gvar.var_314].Var11 = 0;
        await Func.AutoDraw(5);
        return;
}

export {func669}
