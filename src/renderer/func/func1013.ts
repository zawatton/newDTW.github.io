import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 敵名前取得（var_176のスキルIDに対応する敵名をvar_422に格納）
async function func1013(this: any) {
        Adap.dbgprt(1013);
        if (Gvar.var_176 == 0) {
            Gvar.var_422 = "ﾃﾞｨｱﾎﾞﾛ";
        }
        else {
            Gvar.var_268 = Gvar.var_176;
            await Func.func658();
            Gvar.var_422 = Gvar.var_1872;
        }
        return;
}

export {func1013}
