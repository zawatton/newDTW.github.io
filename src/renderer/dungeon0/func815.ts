import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func815(this: any) {
        Adap.dbgprt(815);
        Gvar.wallet = 0;

        Adap.DSPLAY(207);
        Gvar.var_1032 = Gvar.var_1032 - Gvar.var_3190;
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func816();
        return;
}

export {func815}
