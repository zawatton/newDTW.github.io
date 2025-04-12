import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func665(this: any) {
        Adap.dbgprt(665);
        if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
            Gvar.var_83[Gvar.var_314].Var12 = 0;
        }
        Gvar.var_83[Gvar.var_314].Var13 = 0;
        Adap.DSPLAY(175);
        await Func.setMessage1("ウェザーに届く寸前で燃え尽きた。", "", 8, false, false, false);
        Gvar.var_1584 = (Gvar.var_83[Gvar.var_314].Var1 - Gvar.var_66 + 4) * 40;
        Gvar.var_1585 = (Gvar.var_83[Gvar.var_314].Var2 - Gvar.var_67 + 4) * 40 - 10;
        Gvar.var_1583 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        for (let cnt1 = 0; cnt1 < 16; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1583++;
        }
        Gvar.var_1583 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        return;
}

export {func665}
