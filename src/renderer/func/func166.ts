import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func166(this: any) {
        Adap.dbgprt(166);
        Adap.redraw(0);
        await Func.func168(); // ダンジョンクリア時のスコア判定
        if (Gvar.var_10 >= 1) {
            await Func.func338();
        }
        Adap.redraw(1);
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func339();
        }
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_767 == 1) {
            if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
                await Func.func178(); // 処理確認タイマー(3m秒)
                await Func.func167();
                Gvar.var_767 = 0;
                Gvar.var_788 = 0;
                Gvar.var_790 = 0;
                Gvar.var_791 = 0;
                Gvar.var_629 = 0;
                await Func.func159(); // ヴェネチアホテルでのイベントフラグ管理処理
                return;
            }
            if (Gvar.key_X_on == 1) {
                await Func.func178(); // 処理確認タイマー(3m秒)
                await Func.func167();
                Gvar.var_767 = 0;
                Gvar.var_788 = 0;
                Gvar.var_790 = 0;
                Gvar.var_791 = 0;
                Gvar.var_629 = 0;
                await Func.func159(); // ヴェネチアホテルでのイベントフラグ管理処理
                return;
            }
        }
        if (Gvar.var_767 == 0) {
            if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
                if (Gvar.var_792[Gvar.var_793][Gvar.var_786][3] != 0) {
                    Gvar.var_794 = 1;
                    Gvar.var_795 = 225;
                    await Func.func178(); // 処理確認タイマー(3m秒)
                    await Func.func169();
                    return;
                }
            }
            if (Gvar.key_X_on == 1) {
                Gvar.var_790 = 0;
                Gvar.var_791 = 0;
                await Func.func0877();
                Gvar.var_629 = 0;
                await Func.func051(); // キー入力待ち処理
                await Func.func0875();
                return;
            }
            if (Gvar.var_257 == 1 && Gvar.var_785 == 1) {
                Gvar.var_785 = 2;
                Gvar.var_786 = 6;
                Gvar.var_787 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    await Func.func339();
                }
                await Func.func166();
                return;
            }
            if (Gvar.var_257 == 1 && Gvar.var_785 == 2) {
                Gvar.var_785 = 3;
                Gvar.var_786 = 11;
                Gvar.var_787 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    await Func.func339();
                }
                await Func.func166();
                return;
            }
            if (Gvar.var_257 == 1 && Gvar.var_785 == 3) {
                Gvar.var_785 = 4;
                Gvar.var_786 = 16;
                Gvar.var_787 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    await Func.func339();
                }
                await Func.func166();
                return;
            }
            if (Gvar.var_257 == 1 && Gvar.var_785 == 4) {
                Gvar.var_785 = 1;
                Gvar.var_786 = 1;
                Gvar.var_787 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    await Func.func339();
                }
                await Func.func166();
                return;
            }
            if (Gvar.var_254 == 1 && Gvar.var_785 == 1) {
                Gvar.var_785 = 4;
                Gvar.var_786 = 16;
                Gvar.var_787 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    await Func.func339();
                }
                await Func.func166();
                return;
            }
            if (Gvar.var_254 == 1 && Gvar.var_785 == 2) {
                Gvar.var_785 = 1;
                Gvar.var_786 = 1;
                Gvar.var_787 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    await Func.func339();
                }
                await Func.func166();
                return;
            }
            if (Gvar.var_254 == 1 && Gvar.var_785 == 3) {
                Gvar.var_785 = 2;
                Gvar.var_786 = 6;
                Gvar.var_787 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    await Func.func339();
                }
                await Func.func166();
                return;
            }
            if (Gvar.var_254 == 1 && Gvar.var_785 == 4) {
                Gvar.var_785 = 3;
                Gvar.var_786 = 11;
                Gvar.var_787 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    await Func.func339();
                }
                await Func.func166();
                return;
            }
            if (Gvar.var_259 == 1 && Gvar.var_787 <= 4) { // var_259:入力判定[↓]
                Gvar.var_786 = Gvar.var_786 + 1;
                Gvar.var_787 = Gvar.var_787 + 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    await Func.func339();
                }
                await Func.func166();
                return;
            }
            if (Gvar.var_255 == 1 && Gvar.var_787 >= 2) { // var_255:入力判定[↑]
                Gvar.var_786 = Gvar.var_786 - 1;
                Gvar.var_787 = Gvar.var_787 - 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    await Func.func339();
                }
                await Func.func166();
                return;
            }
            if (Gvar.var_259 == 1 && Gvar.var_787 == 5) { // var_259:入力判定[↓]
                Gvar.var_786 = Gvar.var_786 - 4;
                Gvar.var_787 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    await Func.func339();
                }
                await Func.func166();
                return;
            }
            if (Gvar.var_255 == 1 && Gvar.var_787 == 1) { // var_255:入力判定[↑]
                Gvar.var_786 = Gvar.var_786 + 4;
                Gvar.var_787 = 5;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    await Func.func339();
                }
                await Func.func166();
                return;
            }
        }
        await Func.func166();
        return;
}

export {func166}
