import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func598(this: any) {
        Adap.dbgprt(598);
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        Gvar.var_1292 = Gvar.var_83[Gvar.var_673].Var5;
        Gvar.var_1293 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
        Gvar.var_1294 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
        Gvar.var_2854 = 0;
        Gvar.var_2806 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_2807 = Gvar.var_83[Gvar.var_673].Var2;
        Gvar.var_2808 = Gvar.var_83[Gvar.var_673].Var1 - 1;
        if (Gvar.var_2808 < 0) {
            Gvar.var_2808 = 0;
        }
        Gvar.var_2809 = Gvar.var_83[Gvar.var_673].Var1 + 1;
        if (Gvar.var_2809 > Gvar.var_33) {
            Gvar.var_2809 = Gvar.var_33;
        }
        Gvar.var_2810 = Gvar.var_83[Gvar.var_673].Var2 - 1;
        if (Gvar.var_2810 < 0) {
            Gvar.var_2810 = 0;
        }
        Gvar.var_2811 = Gvar.var_83[Gvar.var_673].Var2 + 1;
        if (Gvar.var_2811 > Gvar.var_34) {
            Gvar.var_2811 = Gvar.var_34;
        }
        if (Gvar.var_1292 == 4) {
            if (Gvar.var_82[Gvar.var_2808][Gvar.var_2807] != 0 || Gvar.var_71[Gvar.var_2808][Gvar.var_2807] == 0) {
                Gvar.var_2854 = 1;
            }
        }
        if (Gvar.var_1292 == 6) {
            if (Gvar.var_82[Gvar.var_2809][Gvar.var_2807] != 0 || Gvar.var_71[Gvar.var_2809][Gvar.var_2807] == 0) {
                Gvar.var_2854 = 1;
            }
        }
        if (Gvar.var_1292 == 2) {
            if (Gvar.var_82[Gvar.var_2806][Gvar.var_2811] != 0 || Gvar.var_71[Gvar.var_2806][Gvar.var_2811] == 0) {
                Gvar.var_2854 = 1;
            }
        }
        if (Gvar.var_1292 == 8) {
            if (Gvar.var_82[Gvar.var_2806][Gvar.var_2810] != 0 || Gvar.var_71[Gvar.var_2806][Gvar.var_2810] == 0) {
                Gvar.var_2854 = 1;
            }
        }
        if (Gvar.var_1292 == 1) {
            if (Gvar.var_82[Gvar.var_2808][Gvar.var_2811] != 0 || Gvar.var_71[Gvar.var_2808][Gvar.var_2811] == 0) {
                Gvar.var_2854 = 1;
            }
        }
        if (Gvar.var_1292 == 3) {
            if (Gvar.var_82[Gvar.var_2809][Gvar.var_2811] != 0 || Gvar.var_71[Gvar.var_2809][Gvar.var_2811] == 0) {
                Gvar.var_2854 = 1;
            }
        }
        if (Gvar.var_1292 == 7) {
            if (Gvar.var_82[Gvar.var_2808][Gvar.var_2810] != 0 || Gvar.var_71[Gvar.var_2808][Gvar.var_2810] == 0) {
                Gvar.var_2854 = 1;
            }
        }
        if (Gvar.var_1292 == 9) {
            if (Gvar.var_82[Gvar.var_2809][Gvar.var_2810] != 0 || Gvar.var_71[Gvar.var_2809][Gvar.var_2810] == 0) {
                Gvar.var_2854 = 1;
            }
        }
        Gvar.var_2854 = 0;
        await Func.func601();
        Gvar.var_772 = 1;
        Gvar.var_1290 = 1;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            if (Gvar.var_1290 == 3) {
                Gvar.var_747 = 1;
                Gvar.var_389 = 1;

                Adap.DSPLAY(105);
            }
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1290++;
        }
        Gvar.var_772 = 0;
        Gvar.var_1290 = 0;
        Gvar.var_742 = 0;
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_83[Gvar.var_673].Var18 = 0;
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        Gvar.var_211 = Gvar.var_211 - Gvar.var_209;
        Gvar.var_208 = Gvar.var_208 + Gvar.var_209;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 123;
        }
        await Func.setMessage("ﾌﾞﾁｬﾗﾃｨの攻撃！", "" + Gvar.var_209 + "のダメージをうけた。", 8, false, false, false);
        await Func.AutoDraw(6);
        Gvar.var_389 = 0;
        // No = 115 G・エクスペリエンスのDISCを装備している場合
        if (Gvar.equip_disc[115] == 1) {
            await Func.func695(); // 敵からのダメージを反射する際の動作処理
            if (Gvar.var_2855 != 0) {
                Gvar.var_2855 = 0;
                return;
            }
        }
        Gvar.var_240 = 0;
        return;
}

export {func598}
