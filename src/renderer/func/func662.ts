import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Enemy from '../enemy/index'

async function func662(this: any) {
        Adap.dbgprt(662);
        Gvar.var_1162 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1238 = 1;
        Gvar.var_1971 = Gvar.var_199;
        await Func.AutoDraw(5);
        for (let cnt1 = 0; cnt1 < 60; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1238 = Gvar.var_1238 + 1;
            if (Gvar.var_1238 == 10) {
        
                Adap.DSPLAY(218);
            }
            if (Gvar.var_1238 == 23) {
        
                Adap.DSPLAY(103); // 殴った時の効果音
            }
            if (Gvar.var_1238 == 34) {
        
                Adap.DSPLAY(218);
            }
            if (Gvar.var_1238 == 22) {
                Gvar.var_83[Gvar.var_314].Var8 = 1;
                Gvar.var_199 = 8;
            }
            if (Gvar.var_1238 == 35) {
                Gvar.var_83[Gvar.var_314].Var11 = 1;
            }
        }
        Gvar.var_65[Gvar.var_66][Gvar.var_67] = 0;
        Gvar.var_65[Gvar.var_455][Gvar.var_456] = 1;
        Gvar.var_314 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
        Gvar.var_83[Gvar.var_314].Var1 = Gvar.var_66;
        Gvar.var_83[Gvar.var_314].Var2 = Gvar.var_67;
        Gvar.var_83[Gvar.var_314].Var10 = Gvar.var_71[Gvar.var_66][Gvar.var_67];
        Gvar.var_82[Gvar.var_455][Gvar.var_456] = 0;
        Gvar.var_82[Gvar.var_66][Gvar.var_67] = Gvar.var_314;
        Gvar.var_66 = Gvar.var_455;
        Gvar.var_67 = Gvar.var_456;
        Gvar.var_279 = Gvar.var_201;
        Gvar.var_201 = Gvar.var_71[Gvar.var_66][Gvar.var_67];
        Gvar.var_74[Gvar.var_66][Gvar.var_67] = 1;
        Gvar.var_74[Gvar.var_289][Gvar.var_67] = 1;
        Gvar.var_74[Gvar.var_290][Gvar.var_67] = 1;
        Gvar.var_74[Gvar.var_66][Gvar.var_291] = 1;
        Gvar.var_74[Gvar.var_66][Gvar.var_292] = 1;
        Gvar.var_74[Gvar.var_289][Gvar.var_291] = 1;
        Gvar.var_74[Gvar.var_289][Gvar.var_292] = 1;
        Gvar.var_74[Gvar.var_290][Gvar.var_291] = 1;
        Gvar.var_74[Gvar.var_290][Gvar.var_292] = 1;
        Gvar.var_75[Gvar.var_201] = 1;
        if (Gvar.var_314 == Gvar.var_114) {
            Gvar.var_114 = 0;
        }
        await Func.AutoDraw(5);
        Gvar.var_83[Gvar.var_314].Var11 = 0;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1238 = Gvar.var_1238 + 1;
            if (Gvar.var_1238 == 65) {
        
                Adap.DSPLAY(107);
            }
            if (Gvar.var_1238 == 76) {
        
                Adap.DSPLAY(218);
            }
            if (Gvar.var_1238 == 75) {
                Gvar.var_83[Gvar.var_314].Var8 = 0;
                Gvar.var_199 = 2;
            }
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1238 = 0;
        Gvar.var_1162 = 0;
        Gvar.var_199 = Gvar.var_1971;
        Gvar.var_3069 = Gvar.var_83[Gvar.var_314].Var1;
        Gvar.var_3070 = Gvar.var_83[Gvar.var_314].Var2;
        if (Gvar.var_71[Gvar.var_3069][Gvar.var_3070] == 0 || Gvar.var_71[Gvar.var_3069][Gvar.var_3070] == 13) {
            if (Gvar.var_71[Gvar.var_3069][Gvar.var_3070] == 13 && Gvar.var_83[Gvar.var_314].Var0 == 44) {
                await Enemy.func670();
                if (Gvar.var_3071 == 1) {
                    Gvar.var_3071 = 0;
                    return;
                }
            }
            await Func.func669();
        }
        return;
}

export {func662}
