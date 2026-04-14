/**
 * funcLangConfig — 言語設定サブメニュー入力処理
 *
 * 上下キーで言語を選択、Z/Aキーで確定(localStorage保存+即時反映)、Xキーでキャンセル。
 * パターン: func195 (ゲームスピード入力処理) と同じ構造。
 * HSP原本にない新規追加関数。
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { setLanguage, loadLanguage } from '../i18n'

async function funcLangConfig(this: any) {
    await Func.func337(); // メッセージ関係呼び出し(画面描画)
    await Func.func080(); // 各キー入力確認

    // Z/Aキー: 確定 — 言語を切り替えて保存
    if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        await Func.func051(); // func051: 画面更新待ち

        // 選択された言語を適用
        if (Gvar.lang_cursor == 0) {
            setLanguage('ja');
        } else {
            await loadLanguage('en');
            setLanguage('en');
        }

        Gvar.lang_menu_open = 0;
        await Func.func193(); // システムメニューに戻る
        return;
    }

    // Xキー: キャンセル — 変更せずに戻る
    if (Gvar.key_X_on == 1) {
        await Func.func051();
        Gvar.lang_menu_open = 0;
        await Func.func193(); // システムメニューに戻る
        return;
    }

    // ↑キー: カーソル上移動
    if (Gvar.var_255 == 1) { // var_255: 入力判定[↑]
        if (Gvar.lang_cursor == 1) {
            Gvar.lang_cursor = 0;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Func.func337();
        }
    }

    // ↓キー: カーソル下移動
    if (Gvar.var_259 == 1) { // var_259: 入力判定[↓]
        if (Gvar.lang_cursor == 0) {
            Gvar.lang_cursor = 1;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Func.func337();
        }
    }

    await funcLangConfig();
    return;
}

export { funcLangConfig }
