import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 563 ンドゥールのdiscの効果
async function item563(this: any) {
    await Func.setMessage("目が見えなくなってしまった！", "", 7, false, false, false);
    await Func.AutoDraw(12);
    Gvar.var_1264 = 0;
    Gvar.var_132 = 1;
    Adap.DSPLAY(153);
    return;
}

export {item563}
