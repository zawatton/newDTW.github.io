import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 仲間でない状態のツェッペリさんへ話しかけた際の処理
async function func743(this: any) {
        Adap.dbgprt(743);
        Gvar.var_243 = 0;
        Gvar.var_3072 = Gvar.var_314;
        if (Gvar.var_83[Gvar.var_3072].Var31 == 5) {
            await Func.func746();
            return;
        }
        await Func.setMessage1("わたしはツェペリ男爵だ。",
                               "勇気だけでは勝てんよォ――", 7, true, false, true);
                               
        await Func.setMessage1("そして私は味方だ。",
                               "ディアボロ君。", 7, true, false, true);

        await Func.func051(); // キー入力待ち処理
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3132 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func743}
