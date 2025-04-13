import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// アバッキオセリフ
async function func787(this: any) {
        Adap.dbgprt(787);
        Gvar.var_243 = 0;

        await Func.setMessage("ｱﾊﾞｯｷｫ「おれのｽﾀﾝﾄﾞ【ﾑｰﾃﾞｨｰﾌﾞﾙｰｽ】",
                              "          のﾘﾌﾟﾚｲ能力を使えば、」", 7, true, false, true);

        await Func.setMessage("ｱﾊﾞｯｷｫ「このﾀﾞﾝｼﾞｮﾝから脱出も可能だ」",
                               "", 7, true, false, true);

        await Func.setMessage("ｱﾊﾞｯｷｫ「地上まで帰還するか？」",
                               "", 7, true, false, true);

        await Func.func051(); // キー入力待ち処理
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3163 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func787}
