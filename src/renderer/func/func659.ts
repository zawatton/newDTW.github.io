import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func659(this: any) {
        Adap.dbgprt(659);
        Gvar.var_2712 = 0;
        Gvar.var_616 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_616].Var0 == 49) { // No = 49 コピー人形
                Gvar.var_2712 = 1;
            }
            Gvar.var_616++;
        }
        // No = 132 レクイエムジョルノ
        if (Gvar.var_83[Gvar.var_314].Var0 == 132 && Gvar.var_83[Gvar.var_314].Var20 == 0 && Gvar.var_83[Gvar.var_314].Var12 == 0 && Gvar.var_83[Gvar.var_314].Var13 == 0 && Gvar.var_83[Gvar.var_314].Var14 == 0 && Gvar.var_83[Gvar.var_314].Var17 == 0 && Gvar.var_83[Gvar.var_314].Var23 == 0 && Gvar.var_83[Gvar.var_314].Var19 == 0 && Gvar.var_83[Gvar.var_314].Var25 <= 50 && Gvar.var_2712 == 0) {
            return;
        }
        // No = 143 ウンガロ
        if (Gvar.var_83[Gvar.var_314].Var0 == 143 && Gvar.var_83[Gvar.var_314].Var20 == 0 && Gvar.var_83[Gvar.var_314].Var12 == 0 && Gvar.var_83[Gvar.var_314].Var13 == 0 && Gvar.var_83[Gvar.var_314].Var14 == 0 && Gvar.var_83[Gvar.var_314].Var17 == 0 && Gvar.var_83[Gvar.var_314].Var23 == 0 && Gvar.var_83[Gvar.var_314].Var19 == 0 && Gvar.var_83[Gvar.var_314].Var25 <= 50) {
            return;
        }
        // Ver0.1403にて追加。No = 171 離婚した承太郎
        if (Gvar.var_83[Gvar.var_314].Var0 == 171 && Gvar.var_83[Gvar.var_314].Var20 == 0 && Gvar.var_83[Gvar.var_314].Var12 == 0 && Gvar.var_83[Gvar.var_314].Var13 == 0 && Gvar.var_83[Gvar.var_314].Var14 == 0 && Gvar.var_83[Gvar.var_314].Var17 == 0 && Gvar.var_83[Gvar.var_314].Var23 == 0 && Gvar.var_83[Gvar.var_314].Var19 == 0 && Gvar.var_83[Gvar.var_314].Var25 <= 50) {
            return;
        }
        await Func.AutoDraw(10);
        Gvar.var_3055 = 0;
        if (Gvar.var_83[Gvar.var_314].Var20 != 0 || Gvar.var_83[Gvar.var_314].Var12 != 0 || Gvar.var_83[Gvar.var_314].Var13 != 0 || Gvar.var_83[Gvar.var_314].Var14 != 0 || Gvar.var_83[Gvar.var_314].Var17 != 0 || Gvar.var_83[Gvar.var_314].Var23 != 0 || Gvar.var_83[Gvar.var_314].Var19 != 0 || Gvar.var_83[Gvar.var_314].Var25 != 0) {
            Gvar.var_3055 = 1;
        }
        // No = 132 レクイエムジョルノの状態異常無効化能力
        if (Gvar.var_83[Gvar.var_314].Var0 == 132) {  // No = 132 レクイエムジョルノ
            await Func.setMessage1("「ｺﾞｰﾙﾄﾞ･ｴｸｽﾍﾟﾘｴﾝｽ･ﾚｸｲｴﾑ！！」", "", 8, true, false, true);
            if (Gvar.var_2712 == 1) {
                Gvar.var_421 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_97; ++cnt3) {
                    if (Gvar.var_83[Gvar.var_421].Var0 == 49) { // No = 49 コピー人形
                        Gvar.var_439 = Gvar.var_83[Gvar.var_421].Var0;
                        Gvar.var_83[Gvar.var_421].Var5 = 2;
                        Gvar.var_440 = Gvar.var_83[Gvar.var_421].Var1;
                        Gvar.var_441 = Gvar.var_83[Gvar.var_421].Var2;
                        Gvar.var_442 = Gvar.var_83[Gvar.var_421].Var1;
                        Gvar.var_443 = Gvar.var_83[Gvar.var_421].Var2;
                        Gvar.var_83[Gvar.var_421].Var11 = 1;
                        Gvar.var_399 = Gvar.var_83[Gvar.var_421].Var1;
                        Gvar.var_400 = Gvar.var_83[Gvar.var_421].Var2;
                        Gvar.var_82[Gvar.var_399][Gvar.var_400] = 0;
                        Gvar.var_83[Gvar.var_421].Var0 = 0;
                        Gvar.var_83[Gvar.var_421].Var1 = 0;
                        Gvar.var_83[Gvar.var_421].Var2 = 0;
                        Gvar.var_445 = 1;
                        await Func.func405();
                        Gvar.var_445 = 0;
                        if (Gvar.var_446 != 0) {
                            Gvar.var_447 = Gvar.var_448;
                            Gvar.var_449 = Gvar.var_450;
                            Gvar.var_451 = 1;
                            Gvar.var_452 = 1;
                            Gvar.var_453 = 1;
                            Gvar.var_454 = 1;
                            await Func.func384();
                            Gvar.var_454 = 0;
                            Gvar.var_451 = 0;
                            Gvar.var_452 = 0;
                            Gvar.var_453 = 0;
                        }
                    }
                    Gvar.var_421++;
                }
            }
            Adap.gsel(19);
            Adap.color(255, 255, 0);
            Adap.boxf(0, 0, 680, 680);
            Adap.gsel(0);
            Gvar.var_311 = 255;
            Gvar.var_312 = 1;
            Adap.DSPLAY(161);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_311 = Gvar.var_311 - 25;
                if (Gvar.var_311 <= 0) {
                    Gvar.var_311 = 0;
                }
            }
            Gvar.var_312 = 0;
            Gvar.var_83[Gvar.var_314].Var20 = 0;
            Gvar.var_83[Gvar.var_314].Var12 = 0;
            Gvar.var_83[Gvar.var_314].Var13 = 0;
            Gvar.var_83[Gvar.var_314].Var14 = 0;
            Gvar.var_83[Gvar.var_314].Var17 = 0;
            Gvar.var_83[Gvar.var_314].Var23 = 0;
            Gvar.var_83[Gvar.var_314].Var19 = 0;
            Gvar.var_83[Gvar.var_314].Var25 = 0;
            Gvar.var_83[Gvar.var_314].Var4 = 3;
            if (Gvar.var_3055 == 1 && Gvar.var_2712 == 0) {
                await Func.setMessage1("ｼﾞｮﾙﾉの状態異常が治った！", "", 8, false, false, false);
            }
            if (Gvar.var_3055 == 0 && Gvar.var_2712 == 1) {
                await Func.setMessage1("サーフィスが人形に戻された！", "", 8, false, false, false);
            }
            if (Gvar.var_3055 == 1 && Gvar.var_2712 == 1) {
                await Func.setMessage1("ｼﾞｮﾙﾉの状態異常が治った！", "サーフィスが人形に戻された！", 8, false, false, false);
            }
            await Func.AutoDraw(10);
            return;
        }
        // No = 143 ウンガロの状態異常無効化能力
        if (Gvar.var_83[Gvar.var_314].Var0 == 143) { // No = 143 ウンガロ
            await Func.setMessage1("「ボヘミアン・ラプソディ」！！", "", 8, true, false, true);
            Adap.gsel(19);
            Adap.color(255, 255, 255);
            Adap.boxf(0, 0, 680, 680);
            Adap.gsel(0);
            Gvar.var_311 = 255;
            Gvar.var_312 = 1;
            Adap.DSPLAY(161);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_311 = Gvar.var_311 - 25;
                if (Gvar.var_311 <= 0) {
                    Gvar.var_311 = 0;
                }
            }
            Gvar.var_312 = 0;
            Gvar.var_83[Gvar.var_314].Var20 = 0;
            Gvar.var_83[Gvar.var_314].Var12 = 0;
            Gvar.var_83[Gvar.var_314].Var13 = 0;
            Gvar.var_83[Gvar.var_314].Var14 = 0;
            Gvar.var_83[Gvar.var_314].Var17 = 0;
            Gvar.var_83[Gvar.var_314].Var23 = 0;
            Gvar.var_83[Gvar.var_314].Var19 = 0;
            Gvar.var_83[Gvar.var_314].Var25 = 0;
            Gvar.var_83[Gvar.var_314].Var4 = 3;
            await Func.setMessage1("精神と肉体は分離され…", "スタンド能力は無効となる！", 8, false, false, true);
            await Func.AutoDraw(10);
            return;
        }
        // Ver0.1403にて追加。No = 171 離婚した承太郎の状態異常無効化能力
        if (Gvar.var_83[Gvar.var_314].Var0 == 171) { // No = 171 離婚した承太郎
            await Func.setMessage1("「スタープラチナ・ザ・ワールド」！！", "", 8, true, false, true);
            Adap.gsel(19);
            Adap.color(255, 255, 255);
            Adap.boxf(0, 0, 680, 680);
            Adap.gsel(0);
            Gvar.var_311 = 255;
            Gvar.var_312 = 1;
            Adap.DSPLAY(161);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_311 = Gvar.var_311 - 25;
                if (Gvar.var_311 <= 0) {
                    Gvar.var_311 = 0;
                }
            }
            Gvar.var_312 = 0;
            Gvar.var_83[Gvar.var_314].Var20 = 0;
            Gvar.var_83[Gvar.var_314].Var12 = 0;
            Gvar.var_83[Gvar.var_314].Var13 = 0;
            Gvar.var_83[Gvar.var_314].Var14 = 0;
            Gvar.var_83[Gvar.var_314].Var17 = 0;
            Gvar.var_83[Gvar.var_314].Var23 = 0;
            Gvar.var_83[Gvar.var_314].Var19 = 0;
            Gvar.var_83[Gvar.var_314].Var25 = 0;
            Gvar.var_83[Gvar.var_314].Var4 = 3;
            await Func.setMessage1("承太郎は時止めにより", "ギリギリで見切った！", 8, false, false, true);
            await Func.AutoDraw(10);
            return;
        }
        return;
}

export {func659}
