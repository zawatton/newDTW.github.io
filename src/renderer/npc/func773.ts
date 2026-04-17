/**
 * func773 — func773 鮮血のシャボンへ話しかけた時のメッセージ処理
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { tf } from '../i18n'

// 鮮血のシャボンへ話しかけた時のメッセージ処理
// 旧 func773
async function func773(this: any) {
        Adap.dbgprt(773);
        Gvar.var_243 = 0;
        await Func.setMessage("鮮血のｼｬﾎﾞﾝが浮かんでいる…",
                               "", 7, true, false, false);
        if (Gvar.var_987[0] == 0) {
            await Func.setMessage("中には何も入っていないようだ。",
                                   "", 7, true, true, false);
            await Func.setMessage("何か入れますか？",
                                   "", 7, true, false, false);

            await Func.func051(); // キー入力待ち処理
            Gvar.var_245 = 19;
            Gvar.var_246 = 45;
            Gvar.var_546 = 1;
            Gvar.var_3151 = 1;
            Gvar.var_548 = 1; // 選択肢処理フラグON
            await Func.func0898(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
            return;
        }
        if (Gvar.var_987[0] != 0) {
            Gvar.belongings_item_list = Gvar.var_987[0];
            Gvar.disc_rarity = Gvar.var_987[13];
            await Func.func492(); // アイテムリスト呼び出し
            await Func.setMessage(tf("{0}が", Gvar.item_name), "入っているようだ。", 7, true, true, false);
            await Func.setMessage("取り出しますか？",
                                    "", 7, true, false, false);

            await Func.func051(); // キー入力待ち処理
            Gvar.var_245 = 19;
            Gvar.var_246 = 45;
            Gvar.var_546 = 1;
            Gvar.var_3152 = 1;
            Gvar.var_548 = 1; // 選択肢処理フラグON
            await Func.func0898(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
            return;
        }
        await Func.func774();
}

export {func773}
