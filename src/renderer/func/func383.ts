import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func383(this: any) {
        Adap.dbgprt(383);
        Gvar.var_336 = Adap.rnd(3);
        Gvar.var_336 = Gvar.var_336 + 4;
        // シンデレラの効果が発動していたら、+6個
        if (Gvar.var_1024 == 1) { // 次の階の出現アイテム数＋6個するフラグがONであれば
            Gvar.var_1024 = 0; // 次の階の出現アイテム数＋6個するフラグOFF
            Gvar.var_336 = Gvar.var_336 + 6;
        }
        Gvar.var_1727 = 0;
        await Func.func384();
}

export {func383}
