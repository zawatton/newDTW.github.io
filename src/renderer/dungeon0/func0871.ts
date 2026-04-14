/**
 * func0871 — func871 不明
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func816
async function func0871(this: any) {
    Gvar.var_2233 = Gvar.var_1038 + 1;
    Gvar.var_2234 = 0;
    for (let cnt1 = 0; cnt1 < Gvar.var_2233; ++cnt1) {
        if (Gvar.var_989[cnt1] == Gvar.var_830) {
            Gvar.var_2234 = 1;
            Gvar.var_1610 = cnt1;
            break;
        }
    }
    if (Gvar.var_2234 == 0) {
        Gvar.var_1038 = Gvar.var_1038 + 1;
        Gvar.var_989[Gvar.var_1038] = Gvar.var_830;
        Gvar.var_1610 = Gvar.var_1038;
    }
    Gvar.var_830 = 0;
    Gvar.var_1609 = 1;
    Gvar.var_2357 = 1;
    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
    Gvar.var_502 = 1;
    await Func.func356();
    return;
}

export {func0871}
