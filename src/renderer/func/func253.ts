import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func253(this: any) {
        Adap.dbgprt(253);
        Gvar.var_1134 = 0;
        Gvar.var_447 = 1;
        for (let cnt1 = 0; cnt1 < 12; ++cnt1) {
            if (Gvar.var_493[Gvar.var_447] == 1) {
                Gvar.var_1134 = Gvar.var_1134 + 1;
            }
            Gvar.var_447 = Gvar.var_447 + 1;
        }
        if (Gvar.var_1134 < 6) {
            await Func.func007(); // 配列初期化処理
            return;
        }
        if (Gvar.var_493[1] == 1) {
            if (Gvar.var_493[2] == 0 || Gvar.var_493[3] == 0 || Gvar.var_493[4] == 1) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_493[5] == 1) {
            if (Gvar.var_493[6] == 0 || Gvar.var_493[7] == 0 || Gvar.var_493[8] == 1) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_493[9] == 1) {
            if (Gvar.var_493[10] == 0 || Gvar.var_493[11] == 0 || Gvar.var_493[12] == 1) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_95 == 1 && Gvar.var_1005 == 2) {
            if (Gvar.var_493[2] != 1 && Gvar.var_493[3] != 1) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_95 == 1 && Gvar.var_1005 == 0) {
            if (Gvar.var_493[5] != 1 && Gvar.var_493[9] != 1) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_95 == 4 && Gvar.var_1005 == 1) {
            if (Gvar.var_493[2] != 1 && Gvar.var_493[3] != 1) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_95 == 4 && Gvar.var_1005 == 0) {
            if (Gvar.var_493[8] != 1 && Gvar.var_493[12] != 1) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_95 == 5 && Gvar.var_1005 == 2) {
            if (Gvar.var_493[6] != 1 && Gvar.var_493[7] != 1) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_95 == 5 && Gvar.var_1005 == 0) {
            if (Gvar.var_493[9] != 1) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_95 == 5 && Gvar.var_1005 == 3) {
            if (Gvar.var_493[1] != 1) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_95 == 8 && Gvar.var_1005 == 1) {
            if (Gvar.var_493[6] != 1 && Gvar.var_493[7] != 1) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_95 == 8 && Gvar.var_1005 == 0) {
            if (Gvar.var_493[12] != 1) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_95 == 8 && Gvar.var_1005 == 3) {
            if (Gvar.var_493[4] != 1) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_95 == 9 && Gvar.var_1005 == 2) {
            if (Gvar.var_493[10] != 1 && Gvar.var_493[11] != 1) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_95 == 9 && Gvar.var_1005 == 3) {
            if (Gvar.var_493[1] != 1 && Gvar.var_493[5] != 1) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_95 == 12 && Gvar.var_1005 == 1) {
            if (Gvar.var_493[10] != 1 && Gvar.var_493[11] != 1) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_95 == 12 && Gvar.var_1005 == 3) {
            if (Gvar.var_493[4] != 1 && Gvar.var_493[8] != 1) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_95 == 5 && Gvar.var_493[1] == 1) {
            if (Gvar.var_493[2] == 0 && Gvar.var_493[3] == 0 && Gvar.var_493[4] == 0) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_95 == 5 && Gvar.var_493[9] == 1) {
            if (Gvar.var_493[10] == 0 && Gvar.var_493[11] == 0 && Gvar.var_493[12] == 0) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_95 == 8 && Gvar.var_493[4] == 1) {
            if (Gvar.var_493[1] == 0 && Gvar.var_493[2] == 0 && Gvar.var_493[3] == 0) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_95 == 8 && Gvar.var_493[12] == 1) {
            if (Gvar.var_493[9] == 0 && Gvar.var_493[10] == 0 && Gvar.var_493[11] == 0) {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_493[1] == 1) {
            if (Gvar.var_493[2] == 1 || Gvar.var_493[3] == 1 || Gvar.var_493[5] == 1 || Gvar.var_493[9] == 1) {
                Gvar.var_1135 = 1;
            }
            else {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_493[2] == 1) {
            if (Gvar.var_493[1] == 1 || Gvar.var_493[3] == 1 || Gvar.var_493[4] == 1 || Gvar.var_493[6] == 1 || Gvar.var_493[10] == 1) {
                Gvar.var_1135 = 1;
            }
            else {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_493[3] == 1) {
            if (Gvar.var_493[1] == 1 || Gvar.var_493[2] == 1 || Gvar.var_493[4] == 1 || Gvar.var_493[7] == 1 || Gvar.var_493[11] == 1) {
                Gvar.var_1135 = 1;
            }
            else {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_493[4] == 1) {
            if (Gvar.var_493[2] == 1 || Gvar.var_493[3] == 1 || Gvar.var_493[8] == 1 || Gvar.var_493[12] == 1) {
                Gvar.var_1135 = 1;
            }
            else {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_493[5] == 1) {
            if (Gvar.var_493[1] == 1 || Gvar.var_493[6] == 1 || Gvar.var_493[7] == 1 || Gvar.var_493[9] == 1) {
                Gvar.var_1135 = 1;
            }
            else {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_493[6] == 1) {
            if (Gvar.var_493[2] == 1 || Gvar.var_493[7] == 1 || Gvar.var_493[8] == 1 || Gvar.var_493[10] == 1) {
                Gvar.var_1135 = 1;
            }
            else {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_493[7] == 1) {
            if (Gvar.var_493[3] == 1 || Gvar.var_493[5] == 1 || Gvar.var_493[6] == 1 || Gvar.var_493[11] == 1) {
                Gvar.var_1135 = 1;
            }
            else {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_493[8] == 1) {
            if (Gvar.var_493[4] == 1 || Gvar.var_493[6] == 1 || Gvar.var_493[7] == 1 || Gvar.var_493[12] == 1) {
                Gvar.var_1135 = 1;
            }
            else {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_493[9] == 1) {
            if (Gvar.var_493[1] == 1 || Gvar.var_493[5] == 1 || Gvar.var_493[10] == 1 || Gvar.var_493[11] == 1) {
                Gvar.var_1135 = 1;
            }
            else {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_493[10] == 1) {
            if (Gvar.var_493[2] == 1 || Gvar.var_493[6] == 1 || Gvar.var_493[9] == 1 || Gvar.var_493[11] == 1 || Gvar.var_493[12] == 1) {
                Gvar.var_1135 = 1;
            }
            else {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_493[11] == 1) {
            if (Gvar.var_493[3] == 1 || Gvar.var_493[7] == 1 || Gvar.var_493[9] == 1 || Gvar.var_493[10] == 1 || Gvar.var_493[12] == 1) {
                Gvar.var_1135 = 1;
            }
            else {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        if (Gvar.var_493[12] == 1) {
            if (Gvar.var_493[4] == 1 || Gvar.var_493[8] == 1 || Gvar.var_493[10] == 1 || Gvar.var_493[11] == 1) {
                Gvar.var_1135 = 1;
            }
            else {
                await Func.func007(); // 配列初期化処理
                return;
            }
        }
        await Func.func008();
        return;
}

export {func253}
