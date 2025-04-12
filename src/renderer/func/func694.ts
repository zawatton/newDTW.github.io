import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func694(this: any) {
        Adap.dbgprt(694);
        if (Gvar.var_211 == 0) {
            return;
        }
        await Func.func340(); // キー入力による選択処理
        Gvar.var_403 = "ｽｰﾊﾟｰﾌﾗｲが攻撃を跳ね返した！";
        Gvar.var_402 = Gvar.var_673;
        Gvar.var_3097 = 1;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func705();
        Gvar.var_3097 = 0;
        await Func.func340(); // キー入力による選択処理
        await Func.func051(); // キー入力待ち処理
        return;
}

export {func694}
