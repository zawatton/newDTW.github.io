import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func917
async function func0976(this: any) {
    Gvar.var_3886 = 1;
    for (let cnt1 = 0; cnt1 < Gvar.var_1046; ++cnt1) {
        Gvar.var_2535 = Gvar.var_1058[Gvar.var_3886][0];
        Gvar.var_2551 = Gvar.var_1058[Gvar.var_3886][1];
        Gvar.var_2552 = Gvar.var_1058[Gvar.var_3886][2];
        Gvar.var_2553 = Gvar.var_1058[Gvar.var_3886][3];
        Gvar.var_2554 = Gvar.var_1058[Gvar.var_3886][4];
        Gvar.var_2555 = Gvar.var_1058[Gvar.var_3886][5];
        Gvar.var_2556 = Gvar.var_1058[Gvar.var_3886][6];
        Gvar.var_2557 = Gvar.var_1058[Gvar.var_3886][7];
        Gvar.var_2558 = Gvar.var_1058[Gvar.var_3886][8];
        Gvar.var_2559 = Gvar.var_1058[Gvar.var_3886][9];
        Gvar.var_2560 = Gvar.var_1058[Gvar.var_3886][10];
        if (Gvar.var_2535 == 0) {
            Gvar.var_2535 = 168;
            Gvar.var_2554 = 1;
            Gvar.var_2552 = 70;
        }
        Gvar.var_1845 = 1;
        await Func.func556();
        if (Gvar.var_2110 == 0) {
            Gvar.var_1845 = 5;
            Gvar.var_2519 = Gvar.var_201;
            await Func.func556();
            Gvar.var_2519 = 0;
        }
        if (Gvar.var_2110 == 0) {
            Gvar.var_1845 = 0;
            await Func.func556();
        }
        Gvar.var_1845 = 0;
        Gvar.var_2535 = 0;
        Gvar.var_3886++;
    }
    Gvar.var_1046 = 0;
    Gvar.var_1058 = Adap.dim(30, 30);
    await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
    await Func.setMessage("敵が集まってしまった！", "", 7, false, false, false);
    return;
}

export {func0976}
