import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func236(this: any) {
        Adap.dbgprt(236);
        await Func.setMessage("今回の冒険を諦めますか？",
                                "諦めるならば「Y」キーを押してください", 7, false, false, false);
        await Func.func051(); // キー入力待ち処理
        Gvar.var_1061 = 1;
        await Func.func238();
        return;
}

export {func236}
