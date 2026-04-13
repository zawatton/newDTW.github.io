import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'
import * as Music from '../music/index'

// 旧 func923
async function func0982(this: any) {
    await Func.setMessage("「おまたせしましたァ――ッ", "  デリバリーピッザですーっ」", 7, true, false, true);
    await Func.setMessage("「こんにちは――っ", "  どちらですかーっ」", 7, true, false, true);
    await Func.setMessage("「どちらへ運びましょうか――ッ！？」", "", 7, true, false, true);
    Adap.DSPLAY(133); // アイテムを置いた時の効果音
    Gvar.var_1756 = 1;
    Gvar.var_452 = 1;
    for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
        await Func.func384();
    }
    Gvar.var_1756 = 0;
    Gvar.var_452 = 0;
    await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
    await Func.setMessage("ピザ屋はその辺に置いて帰ったようだ。", "", 7, false, false, false);
    await Func.AutoDraw(10);
    return;
}

export {func0982}
