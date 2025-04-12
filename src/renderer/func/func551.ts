import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func551(this: any) {
        Adap.dbgprt(551);
        Gvar.var_371 = 0;
        await Func.setMessage1("特別な敵の棲家に入りますか？", "", 7, true, false, false);
        await Func.AutoDraw(2);
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_2495 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func551}
