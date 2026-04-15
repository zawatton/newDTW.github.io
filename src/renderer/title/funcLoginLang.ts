/**
 * funcLoginLang — ログイン画面「言語設定」サブメニュー
 *
 * func147 から var_64==4 で呼び出される。日本語 / English の
 * 2 択、Z/A で確定、X でキャンセル。
 *
 * 表示色は「現在有効な言語」を基準に:
 *   - 現在選ばれている言語 → 白
 *   - もう一方の言語 → グレー
 * カーソル位置は独立していて、カーソルで確定した瞬間に色が反転する。
 *
 * 確定時は setLanguage() を呼ぶだけ。func146 側で t() 経由描画にして
 * あるため、次フレーム再描画でそのまま新言語に切り替わる
 * (location.reload は不要)。
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { getLanguage, setLanguage, loadLanguage } from '../i18n'

async function funcLoginLang(this: any) {
    Gvar.lang_cursor = getLanguage() === 'ja' ? 0 : 1;
    // サブメニューに入る前にキーリリース待ち
    // (func147 への遷移で押した Z/A がまだ押しっぱなしだと即確定してしまう)
    await waitKeyRelease();
    await loopLoginLang();
}

async function loopLoginLang(): Promise<void> {
    Adap.redraw(0);
    await Func.func146();
    renderSubmenu();
    Adap.redraw(1);

    await Func.func080();

    if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
        Adap.DSPLAY(212);
        const target = Gvar.lang_cursor === 0 ? 'ja' : 'en';
        if (target !== 'ja') await loadLanguage(target);
        setLanguage(target);
        await waitKeyRelease();
        return;
    }

    if (Gvar.key_X_on == 1) {
        Adap.DSPLAY(212);
        await waitKeyRelease();
        return;
    }

    if (Gvar.var_255 == 1) {
        Adap.DSPLAY(100);
        Gvar.lang_cursor = Gvar.lang_cursor === 0 ? 1 : 0;
        await Adap.wait(10);
    }

    if (Gvar.var_259 == 1) {
        Adap.DSPLAY(100);
        Gvar.lang_cursor = Gvar.lang_cursor === 1 ? 0 : 1;
        await Adap.wait(10);
    }

    await loopLoginLang();
}

// ログイン文脈専用の軽量キーリリース待ち
// (func051 は func337 経由でダンジョン描画パイプラインを回してしまうため不可)
async function waitKeyRelease(): Promise<void> {
    for (let i = 0; i < 50; i++) {
        await Adap.wait(2);
        await Func.func080();
        if (Gvar.key_Z_on == 0 && Gvar.key_X_on == 0 && Gvar.key_A_on == 0) {
            return;
        }
    }
}

function renderSubmenu(): void {
    // 半透明黒背景ボックス
    Adap.color(0, 0, 0);
    Adap.gmode(4, null, null, 150);
    Adap.pos(180, 50);
    Adap.gcopy(12, 0, 0, 130, 80);

    // 白枠
    Adap.color(255, 255, 255);
    Adap.line(183, 53, 307, 53);
    Adap.line(183, 127, 307, 127);
    Adap.line(182, 54, 182, 126);
    Adap.line(308, 54, 308, 126);
    Adap.pset(183, 54);
    Adap.pset(307, 54);
    Adap.pset(183, 126);
    Adap.pset(307, 126);

    Adap.font(Gvar.font_type, 16, 1);

    // 現在有効な言語を基準に色分け (active=白, 非active=グレー)
    const currentLang = getLanguage();
    const jaColor: [number, number, number] = currentLang === 'ja' ? [255, 255, 255] : [155, 155, 155];
    const enColor: [number, number, number] = currentLang === 'en' ? [255, 255, 255] : [155, 155, 155];

    Adap.color(jaColor[0], jaColor[1], jaColor[2]);
    Adap.pos(215, 70);
    Adap.mes("日本語");

    Adap.color(enColor[0], enColor[1], enColor[2]);
    Adap.pos(215, 95);
    Adap.mes("English");

    // カーソル (鏃アイコン) — 選択中の項目を示す
    Adap.gmode(2);
    Adap.pos(192, Gvar.lang_cursor === 0 ? 67 : 92);
    Adap.gcopy(8, 70, 50, 25, 20);
}

export {funcLoginLang}
