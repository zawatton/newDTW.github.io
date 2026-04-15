/**
 * funcLoginLang — ログイン画面「言語設定」サブメニュー
 *
 * func147 から var_64==4 で呼び出される。日本語 / English の
 * 2 択、Z/A で確定、X でキャンセル。確定時は setLanguage() を
 * 呼ぶだけで location.reload() はしない — func146 側で t() を
 * 介した描画にしてあるため、次フレーム再描画で言語が即反映される。
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { getLanguage, setLanguage, loadLanguage } from '../i18n'

async function funcLoginLang(this: any) {
    Gvar.lang_cursor = getLanguage() === 'ja' ? 0 : 1;
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
        await Func.func051();
        return;
    }

    if (Gvar.key_X_on == 1) {
        Adap.DSPLAY(212);
        await Func.func051();
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

function renderSubmenu(): void {
    // 半透明黒背景ボックス (gmode 4: alpha=150)
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
    Adap.color(255, 255, 255);
    Adap.pos(215, 70);
    Adap.mes("日本語");
    Adap.pos(215, 95);
    Adap.mes("English");

    // カーソル (鏃アイコン)
    Adap.gmode(2);
    Adap.pos(192, Gvar.lang_cursor === 0 ? 67 : 92);
    Adap.gcopy(8, 70, 50, 25, 20);
}

export {funcLoginLang}
