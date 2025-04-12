import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 585 億泰のdiscの効果
async function item585(this: any) {
        await Func.AutoDraw(12);
        Gvar.var_1264 = 0;
        Gvar.var_1073 = Adap.rnd(2);
        if (Gvar.var_1073 == 0) {
            await Func.setMessage1("「あっ！  こりゃたまらん！",
                                   "    ヨダレ  ずびっ！」", 7, true, false, true);
        }
        if (Gvar.var_1073 == 1) {
            await Func.setMessage1("「うわあああああ",
                                   "  はっ  腹が空いていくうよぉ～～っ」", 7, true, false, true);
        }
        Adap.DSPLAY(164);
        Gvar.var_129 = 1;
        Gvar.var_193 = 0;
        return;
}

export {item585}
