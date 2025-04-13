import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func440(this: any) {
        Adap.dbgprt(440);
        Gvar.var_1945 = 0;
        Gvar.var_1966 = 0;
        Gvar.var_1971 = Gvar.var_199;
        Gvar.var_199 = 2;
        await Func.setMessage("「YES！ I am！」",
                                "", 7, true, false, true);
        await Func.setMessage("持ち物すべてが識別された！",
                                "", 7, false, false, false);
        Gvar.var_1972 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_1972].Var0;
            Gvar.var_862[Gvar.belongings_item_list][0] = 1;
            Gvar.var_233[Gvar.var_1972].Var14 = 1;
            Gvar.var_1972++;
        }
        if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
            Gvar.var_1968 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
            Gvar.var_78[Gvar.var_1968].Var14 = 1;
            Gvar.belongings_item_list = Gvar.var_78[Gvar.var_1968].Var0;
            Gvar.var_862[Gvar.belongings_item_list][0] = 1;
        }
        await Func.AutoDraw(5);
        Gvar.var_199 = Gvar.var_1971;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func440}
