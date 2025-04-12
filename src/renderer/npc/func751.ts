import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ペッシに話しかけて仲間にするのを拒んだ際の動作処理
async function func751(this: any) {
        Adap.dbgprt(751);
        await Func.setMessage1("そッ！  そんなッ！",
                               "", 7, false, false, true);
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func751}
