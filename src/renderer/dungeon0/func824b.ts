import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// Ver0.1403にて追加。// 酒場 or ホテルの外の入り口へ入ろうとした際のメッセージ処理
async function func824b(this: any) {
        Adap.dbgprt(824);
        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        await Func.setMessage1("どこへ行きますか？", "", 7, false, false, false);
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3198 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func824b}
