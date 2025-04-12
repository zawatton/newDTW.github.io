import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func491(this: any) {
        Adap.dbgprt(491);
        Gvar.var_2153 = "";
        Gvar.var_2152 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            Gvar.var_2153 = "" + Gvar.var_2153 + "" + Gvar.var_2133[Gvar.var_2152];
            Gvar.var_2152++;
        }
        Gvar.var_1203 = 0;
        Gvar.var_2163 = 0;
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func491}
