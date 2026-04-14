/**
 * func465 — アイテム使用サブメニュー入力ハンドラ (使う/やめる 2項目)
 *
 * 特定アイテム (使うdisc 等) にカーソルを合わせ Z を押した時のサブメニュー。
 *
 * 入力 (Gvar):
 *   var_2043: 1=「使う」 / 2=「やめる」
 *   var_246:  カーソル Y 座標 (px) — 1段=17px
 *
 * 動作:
 *   var_2043==1 で確定 → func511 (各discごとの発動)
 *   var_2043==2 で確定 → サブメニューを閉じて道具画面 (func462) へ戻る
 *
 * リファクタ履歴:
 *   - 末尾再帰を while ループ化
 *   - DSPLAY(100)+func337() を cursorBeep() に集約
 *   - 元 58行 → 約60行 (構造改善)
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/** カーソル移動時の効果音 + メッセージ表示更新 */
async function cursorBeep(): Promise<void> {
    Adap.DSPLAY(100);
    await Func.func337();
}

async function func465(this: any): Promise<void> {
    Adap.dbgprt(465);

    while (true) {
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認

        // ----- X キー: サブメニューを閉じて道具画面へ -----
        if (Gvar.key_X_on == 1) {
            Gvar.var_221 = 1;
            Gvar.var_234 = 0;
            Adap.DSPLAY(212);
            await Func.func051();
            await Func.func462();
            return;
        }

        // ----- ↓キー: 1→2 -----
        if (Gvar.var_259 == 1 && Gvar.var_2043 == 1) {
            Gvar.var_246 += 17;
            Gvar.var_2043 = 2;
            await cursorBeep();
            continue;
        }

        // ----- ↑キー: 2→1 -----
        if (Gvar.var_255 == 1 && Gvar.var_2043 == 2) {
            Gvar.var_246 -= 17;
            Gvar.var_2043 = 1;
            await cursorBeep();
            continue;
        }

        // ----- Z/A キー: 確定 -----
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            Adap.DSPLAY(212);
            if (Gvar.var_2043 == 1) {
                // 「使う」: スタンド能力発動へ
                Gvar.var_221 = 0;
                Gvar.open_item_menue = 0;
                Gvar.var_231 = 0;
                await Func.func511();
                return;
            }
            if (Gvar.var_2043 == 2) {
                // 「やめる」: 道具画面に戻る
                Gvar.var_221 = 1;
                Gvar.var_234 = 0;
                await Func.func051();
                await Func.func462();
                return;
            }
        }
    }
}

export { func465 }
