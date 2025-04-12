import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// アバッキオセリフ
async function func790(this: any) {
        Adap.dbgprt(790);

        await Func.setMessage1("ｱﾊﾞｯｷｫ「ヌルイから飲むのは いやか？」",
                               "", 7, true, false, true);

        await Func.func051(); // キー入力待ち処理
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3163 = 3;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func790}
