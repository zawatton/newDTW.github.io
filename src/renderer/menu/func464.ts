/**
 * func464 — 装備disc サブメニュー入力ハンドラ (攻撃/防御/能力 3項目)
 *
 * 道具画面で装備disc (item_class1==1) を選択すると開かれる。
 *
 * 入力 (Gvar):
 *   var_2032: 0=未装備 / 1=攻撃装備中 / 2=防御装備中 / 3=能力装備中
 *             (装備中の枠はサブメニューから除外され、カーソル位置 2 がスキップされる)
 *   var_2043: 1/2/3 = カーソル位置
 *   var_246:  カーソル Y 座標 (px) — 1段=17px
 *   var_231:  1=拾い動線
 *
 * 出力:
 *   disc_class: 1=攻撃 / 2=防御 / 3=能力 (確定後 func420 へ)
 *
 * リファクタ履歴:
 *   - 末尾再帰 5箇所を while ループ化
 *   - DSPLAY(100)+func337() を cursorBeep() に集約
 *   - var_2032 × var_2043 → disc_class マッピングをテーブル化
 *   - 元 130行 → 約100行
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

/**
 * (var_2032 → カーソル位置 var_2043) → disc_class のマッピング。
 * var_2032 != 0 のときは装備中の disc 種が選択肢から除外されるので、
 * カーソル位置 1 と 3 のみ有効 (2 はスキップ)。
 */
const DISC_CLASS_TABLE: Record<number, Record<number, number>> = {
    0: { 1: 1, 2: 2, 3: 3 },
    1: { 1: 2,        3: 3 },
    2: { 1: 1,        3: 3 },
    3: { 1: 1,        3: 2 },
};

async function func464(this: any): Promise<void> {
    Adap.dbgprt(464);

    while (true) {
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認

        // ----- X キー: サブメニューを閉じて道具画面へ戻る -----
        if (Gvar.key_X_on == 1) {
            Gvar.var_221 = 1;
            Adap.DSPLAY(212); // メニュー画面/設定項目を開く時の効果音
            await Func.func051(); // キー入力待ち処理
            await Func.func462(); // アイテムidごとに区分分け関数
            return;
        }

        // ----- ↓キー: カーソル下方向 -----
        if (Gvar.var_259 == 1 && Gvar.var_2043 != 3) {
            Gvar.var_246 += 17;
            // var_2032 != 0 (装備中) の時はカーソル位置 2 をスキップして 3 へ
            Gvar.var_2043 = (Gvar.var_2032 == 0) ? Gvar.var_2043 + 1 : 3;
            await cursorBeep();
            continue;
        }
        if (Gvar.var_259 == 1 && Gvar.var_2043 == 3) {
            // 末尾→先頭へラップ
            Gvar.var_246 = 44;
            Gvar.var_2043 = 1;
            await cursorBeep();
            continue;
        }

        // ----- ↑キー: カーソル上方向 -----
        if (Gvar.var_255 == 1 && Gvar.var_2043 != 1) {
            Gvar.var_246 -= 17;
            Gvar.var_2043 = (Gvar.var_2032 == 0) ? Gvar.var_2043 - 1 : 1;
            await cursorBeep();
            continue;
        }
        if (Gvar.var_255 == 1 && Gvar.var_2043 == 1) {
            // 先頭→末尾へラップ。装備中(var_2032!=0)は2段スキップで Y=61, 通常は3段で Y=78
            Gvar.var_2043 = 3;
            Gvar.var_246 = (Gvar.var_2032 == 0) ? 78 : 61;
            await cursorBeep();
            continue;
        }

        // ----- Z/A キー: 確定 -----
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            // 拾い動線中の確定: アイテムを拾ってから装備処理
            if (Gvar.var_231 == 1) {
                Adap.DSPLAY(212);
                Gvar.var_231 = 0;
                if (Gvar.var_224 >= 20) {
                    // 所持数 20 個以上になる場合は専用処理
                    await Func.func477();
                    return;
                }
                await Func.func400(); // アイテムを拾う動作
                Gvar.var_225 = Gvar.var_224;
            }
            Gvar.var_221 = 0;
            Gvar.open_item_menue = 0; // 道具画面表示フラグ off

            const cls = DISC_CLASS_TABLE[Gvar.var_2032]?.[Gvar.var_2043];
            if (cls !== undefined) Gvar.disc_class = cls;

            await Func.func420(); // 各アイテムの効果発動
            return;
        }
    }
}

export { func464 }
