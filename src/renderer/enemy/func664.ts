import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func664(this: any) {
        Adap.dbgprt(664);
        if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
            Gvar.var_83[Gvar.var_314].Var12 = 0;
        }
        Gvar.var_83[Gvar.var_314].Var13 = 0;
        Adap.DSPLAY(122);
        await Func.setMessage("暗黒空間に消えた", "", 8, false, false, false);
        Gvar.var_748 = Gvar.var_83[Gvar.var_314].Var1 - Gvar.var_66 + 4;
        Gvar.var_749 = Gvar.var_83[Gvar.var_314].Var2 - Gvar.var_67 + 4;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1356 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1356++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1356 = 0;
        return;
}

export {func664}
