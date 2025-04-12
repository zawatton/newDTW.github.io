import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func688(this: any) {
        Adap.dbgprt(688);
        Gvar.var_387 = 0;
        Gvar.var_3092 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_3092].Var0 == 40 || Gvar.var_83[Gvar.var_3092].Var0 == 41 || Gvar.var_83[Gvar.var_3092].Var0 == 42 || Gvar.var_83[Gvar.var_3092].Var0 == 54) {
                Gvar.var_2883 = Gvar.var_83[Gvar.var_3092].Var1;
                Gvar.var_2884 = Gvar.var_83[Gvar.var_3092].Var2;
                Gvar.var_82[Gvar.var_2883][Gvar.var_2884] = 0;
                for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                    Gvar.var_83[Gvar.var_3092][cnt3] = 0;
                }
            }
            Gvar.var_3092 = Gvar.var_3092 + 1;
        }
        Gvar.var_3092 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_337; ++cnt1) {
            if (Gvar.var_81[Gvar.var_3092][0] == 17) {
                Gvar.var_2883 = Gvar.var_81[Gvar.var_3092][1];
                Gvar.var_2884 = Gvar.var_81[Gvar.var_3092][2];
                Gvar.var_80[Gvar.var_2883][Gvar.var_2884] = 0;
                Gvar.var_81[Gvar.var_3092][0] = 0;
                Gvar.var_81[Gvar.var_3092][1] = 0;
                Gvar.var_81[Gvar.var_3092][2] = 0;
            }
            Gvar.var_3092 = Gvar.var_3092 + 1;
        }
        Gvar.var_103 = 1;
        Adap.gsel(19);
        Adap.color(255, 255, 255);
        Adap.boxf(0, 0, 680, 680);
        Adap.gsel(0);
        Adap.DSPLAY(192);
        Gvar.var_311 = 255;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        Gvar.var_312 = 1;
        for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_311 = Gvar.var_311 - 5;
            Gvar.var_198 = 1; // メッセージウィンドウ開く
            Gvar.var_300 = 0;
        }
        Gvar.var_312 = 0;
        return;
}

export {func688}
