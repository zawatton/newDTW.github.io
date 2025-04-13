import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func600(this: any) {
        Adap.dbgprt(600);
        Gvar.var_1292 = Gvar.var_83[Gvar.var_673].Var5;
        Gvar.var_1293 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
        Gvar.var_1294 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
        await Func.func601();
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        Gvar.var_83[Gvar.var_673].Var18 = 0;
        Gvar.var_772 = 1;
        Gvar.var_1296 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            if (Gvar.var_1296 == 6) {
                Gvar.var_747 = 1;
                Gvar.var_389 = 1;

                Adap.DSPLAY(105);
            }
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1296++;
        }
        Gvar.var_772 = 0;
        Gvar.var_1296 = 0;
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
            Gvar.var_356 = 281;
        }
        await Func.setMessage("「ワハハハハハ！」", "" + Gvar.var_209 + "のダメージをうけた。", 8, false, false, false);
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

export {func600}
