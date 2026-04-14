/**
 * func0891 — func891 不明
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// NPC プッチ神父との会話メッセージ
// 旧 func832
async function func0891(this: any) {
    Gvar.var_243 = 0;
    if (Gvar.var_523 == 0) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
        await Func.setMessage("ﾌﾟｯﾁ神父「【天国に行く方法】…", "それには必要なものがある」", 7, true, false, true);
        await Func.setMessage("我がスタンド", "「ホワイトスネイク」", 7, true, false, true);
        await Func.setMessage("「４つのカブト虫」", "", 7, true, false, true);
        await Func.setMessage("そして", "「親友DIOの骨」", 7, true, false, true);
        await Func.func051(); // キー入力待ち処理
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
    }
    if (Gvar.var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
        await Func.setMessage("ﾌﾟｯﾁ神父「【一巡後の世界】に", "        挑戦してみるか？」", 7, true, false, true);
        await Func.func051(); // キー入力待ち処理
        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3201 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func0898(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
    }
    await Func.func0892(); // NPC DIOとの会話メッセージ
}

export {func0891}
