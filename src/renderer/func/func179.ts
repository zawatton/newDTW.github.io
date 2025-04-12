import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func179(this: any) {
        Adap.dbgprt(179);
        for (let cnt1 = 0; cnt1 < 50; ++cnt1) {
            await Func.func080(); // 各キー入力確認
            if (Gvar.var_199 == 6 && Gvar.var_257 == 0) {
                break;
            }
            if (Gvar.var_199 == 4 && Gvar.var_254 == 0) {
                break;
            }
            if (Gvar.var_199 == 2 && Gvar.var_259 == 0) { // var_259:入力判定[↓]
                break;
            }
            if (Gvar.var_199 == 8 && Gvar.var_255 == 0) { // var_255:入力判定[↑]
                break;
            }
            if (Gvar.var_199 == 1 && Gvar.var_258 == 0) {
                if (Gvar.var_254 == 0 || Gvar.var_259 == 0) { // var_259:入力判定[↓]
                    break;
                }
            }
            if (Gvar.var_199 == 3 && Gvar.var_260 == 0) {
                if (Gvar.var_257 == 0 || Gvar.var_259 == 0) { // var_259:入力判定[↓]
                    break;
                }
            }
            if (Gvar.var_199 == 7 && Gvar.var_253 == 0) {
                if (Gvar.var_254 == 0 || Gvar.var_255 == 0) { // var_255:入力判定[↑]
                    break;
                }
            }
            if (Gvar.var_199 == 9 && Gvar.var_256 == 0) {
                if (Gvar.var_257 == 0 || Gvar.var_255 == 0) { // var_255:入力判定[↑]
                    break;
                }
            }
            await Func.func337(); // メッセージ表示処理(自動)
        }
        return;
}

export {func179}
