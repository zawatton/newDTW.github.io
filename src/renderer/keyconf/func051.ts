import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// キー入力待ち処理
// 旧 func051
async function func051(this: any) {
        Adap.dbgprt(51);
        for (let cnt1 = 0; cnt1 < 50; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func080(); // 各キー入力確認
            if (Gvar.key_Z_on == 0 && Gvar.key_X_on == 0 && Gvar.key_A_on == 0 && Gvar.key_C_on == 0 && Gvar.key_S_on == 0) {
                break;
            }
        }
        return;
}

export {func051}
