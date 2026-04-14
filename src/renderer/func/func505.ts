/**
 * func505 — func505 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func505(this: any) {
        Adap.dbgprt(505);
        
        Gvar.var_1066 = Adap.sdim(1000, 1000, Gvar.length3 = null);
        // 現在プレイ中の冒険の書番号確認
        if (Gvar.var_726 == 1) {
            Gvar.var_735 = "01n.dat";
        }
        if (Gvar.var_726 == 2) {
            Gvar.var_735 = "02n.dat";
        }
        if (Gvar.var_726 == 3) {
            Gvar.var_735 = "03n.dat";
        }

        // n.datファイルの存在確認
        await Adap.exist(Gvar.var_735);
        if (Gvar.strsize == (-1)) {
            await Func.func504();
        }

        Adap.notesel(Gvar.var_2156);
        await Adap.noteload(Gvar.var_735);
        
        Gvar.var_2252 = 0;
        for (let cnt1 = 0; cnt1 < 145; ++cnt1) {
            Gvar.var_2253 = Adap.noteget(Gvar.var_2252);
            Gvar.var_1066[Gvar.var_2252] = Gvar.var_2253;
            Gvar.var_2252++;
        }
        return;
}

export {func505}
