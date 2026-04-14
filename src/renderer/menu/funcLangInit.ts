/**
 * funcLangInit — 言語設定サブメニュー初期化
 *
 * 現在の言語設定からカーソル位置を設定し、入力処理(funcLangConfig)へ遷移する。
 * パターン: func194 (ゲームスピード初期化) と同じ構造。
 * HSP原本にない新規追加関数。
 */
import { Gvar } from '../variable'
import * as Func from '../func/index'
import { getLanguage } from '../i18n'

async function funcLangInit(this: any) {
    const lang = getLanguage();
    if (lang === 'ja') {
        Gvar.lang_cursor = 0;
    } else {
        Gvar.lang_cursor = 1; // 'en' またはその他
    }
    await Func.funcLangConfig();
}

export { funcLangInit }
