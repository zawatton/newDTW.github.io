import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 80 ラング・ラングラーの特殊能力
async function enemy080(this: any) {
        Gvar.var_2830 = Adap.rnd(4);
        if (Gvar.var_2830 == 0 && Gvar.var_126 == 0) {
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            Adap.DSPLAY(161);
            await Func.setMessage1("ﾗﾝｸﾞ･ﾗﾝｸﾞﾗｰは無重力を作り出した！", "", 8, true, false, false);
            await Func.AutoDraw(10);
            if (Gvar.var_128 >= 1) {
                await Func.func023();
            }
            Gvar.var_126 = 1;
            Gvar.var_166 = 0;
            Adap.DSPLAY(134);
            await Func.func619();
            await Func.setMessage1("思うように動けなくなってしまった！", "", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy080}
