import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 77 敵エコーズACT1の特殊能力
async function enemy077(this: any) {
        Gvar.var_2830 = Adap.rnd(5);
        if (Gvar.var_2830 == 0 && Gvar.var_126 == 0) {
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            Adap.DSPLAY(149);
            await Func.setMessage("「ドガ！」「バキ！」「ボ！」「ビシ！」",
                                    "    「ボ！」「ドヒュン！」「バキ！」", 8, true, false, false);
            await Func.AutoDraw(10);
            if (Gvar.var_128 >= 1) {
                await Func.func023();
            }
            Gvar.var_126 = 1;
            Gvar.var_166 = 0;
            Adap.DSPLAY(134);
            await Func.func619();
            await Func.setMessage("頭がおかしくなってしまった！", "", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy077}
