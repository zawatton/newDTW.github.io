import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func780(this: any) {
        Adap.dbgprt(780);

        await Func.setMessage("この岸部露伴が頭下げて",
                               "頼んでるのに…", 7, true, true, true);

        await Func.setMessage("ふぅ～～ん",
                               "そうかい！", 7, true, true, true);

        await Func.setMessage("君は、ちょいと深い所まで行って",
                               "帰ってくるだけのことを断るのか…", 7, true, true, true);

        await Func.setMessage("念のためもう一度聞くが、",
                               "", 7, true, true, false);

        await Func.setMessage("どうだろう、代わりに取ってきて",
                               "もらえないかな？", 7, true, false, true);

        await Func.func051(); // キー入力待ち処理
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3156 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func780}
