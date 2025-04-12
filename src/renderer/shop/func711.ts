import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func711(this: any) {
        Adap.dbgprt(711);
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_259 == 1 && Gvar.var_3118 == 1) { // var_259:入力判定[↓]
            Gvar.var_516 = Gvar.var_516 + 19;
            Gvar.var_3118 = 0;
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.var_255 == 1 && Gvar.var_3118 == 0) { // var_255:入力判定[↑]
            Gvar.var_516 = Gvar.var_516 - 19;
            Gvar.var_3118 = 1;
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            if (Gvar.var_3118 == 1) {
                await Func.func051(); // キー入力待ち処理
                await Func.func716();
                return;
            }
            if (Gvar.var_3118 == 0) {
                await Func.func051(); // キー入力待ち処理
                await Func.func717();
                return;
            }
        }
        if (Gvar.key_X_on == 1) {
            await Func.func051(); // キー入力待ち処理
            await Func.func717();
            return;
        }
        Gvar.var_198 = 1; // メッセージウィンドウ開く
        Gvar.var_300 = 0;
        await Func.func711();
        return;
}

export {func711}
