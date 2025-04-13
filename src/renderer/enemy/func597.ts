import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func597(this: any) {
        Adap.dbgprt(597);
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_2853 = Gvar.var_83[Gvar.var_673].Var3;
        if (Gvar.var_2853 < 4) {
            Gvar.var_2853 = 4;
        }
        Gvar.var_2852 = Math.floor(Gvar.var_2853 / 4);
        if (Gvar.var_2852 < 1) {
            Gvar.var_2852 = 1;
        }
        Gvar.var_83[Gvar.var_673].Var21 = 1;
        Gvar.var_411 = Adap.rnd(8);
        Gvar.var_411++;

        Adap.DSPLAY(103); // 殴られた時の効果音
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_2578 = 1;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_2578 = 0;
            await Func.func337(); // メッセージ表示処理(自動)
        }
        Gvar.var_83[Gvar.var_673].Var3 = Gvar.var_83[Gvar.var_673].Var3 - Gvar.var_2852;
        if (Gvar.var_83[Gvar.var_673].Var3 < 1) {
            Gvar.var_83[Gvar.var_673].Var3 = 1;
        }
        Gvar.var_1396 = Gvar.var_66;
        Gvar.var_1397 = Gvar.var_67;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1551 = 1;
        for (let cnt1 = 0; cnt1 < 16; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1551++;
        }
        Gvar.var_1551 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_389 = 2;
        Gvar.var_209 = Gvar.var_2852;
        Gvar.var_747 = 1;

        Adap.DSPLAY(104);
        await Func.setMessage("道連れにされている！", "" + Gvar.var_2852 + "のダメージをうけた！", 8, false, false, false);
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        Gvar.var_211 = Gvar.var_211 - Gvar.var_2852;
        Gvar.var_208 = Gvar.var_208 + Gvar.var_2852;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 255;
        }
        await Func.AutoDraw(6);
        Gvar.var_83[Gvar.var_673].Var21 = 0;
        Gvar.var_411 = 0;
        Gvar.var_389 = 0;
        Gvar.var_240 = 0;
        return;
}

export {func597}
