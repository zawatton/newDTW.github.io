/**
 * menuConfigs — シンプルメニュー項目の定義データ
 *
 * 各項目はSimpleMenuConfigインターフェースに従う。
 * MenuController.run(config) で実行される。
 *
 * 対応項目:
 *   - gameSpeed: ゲームスピード (旧 func194/195/196)
 *   - screenSize: 画面サイズ (旧 func205/206/207)
 *   - language: 言語 (旧 funcLangInit/Config/Display)
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import { SimpleMenuConfig } from './MenuController'
import { setLanguage, loadLanguage, getLanguage } from '../i18n'

/**
 * ゲームスピード設定
 * - 5段階: 超速(30) / 速い(40) / 標準(50) / 遅い(60) / 超遅(70)
 * - storage: Gvar.animationDelay (描画wait時間ms)
 * - bsave offset: 0 (00.dat)
 */
export const gameSpeed: SimpleMenuConfig = {
    id: 'gameSpeed',
    cursorVar: 'var_906',
    loadCursor: () => {
        // animationDelay → cursor の逆引き
        const delay = Gvar.animationDelay;
        if (delay === 30) return 0;
        if (delay === 40) return 1;
        if (delay === 50) return 2;
        if (delay === 60) return 3;
        if (delay === 70) return 4;
        return 2; // デフォルト = 標準
    },
    saveValue: async (idx: number) => {
        const delays = [30, 40, 50, 60, 70];
        Gvar.animationDelay = delays[idx];
        await Adap.bsave("00.dat", Gvar.data = Gvar.animationDelay, null, 0);
    },
    options: ["超速", "速い", "標準", "遅い", "超遅"],
    boxPos: { x: 42, y: 137 },
    boxSize: { w: 113, h: 123 },
    border: { left: 45, top: 139, right: 150, bottom: 256 },
    textX: 85,
    textStartY: 150,
    cursorX: 50,
    cursorStartY: 147,
    closeFlag: 'var_900',
};

/**
 * 画面サイズ設定
 * - 2段階: 340x340 / 680x680
 * - storage: Gvar.var_10 (0/1), Gvar.var_11 も同時保存
 * - bsave offset: 20 (var_10), 80 (var_11)
 * - 確定時に Adap.width() を呼んでウィンドウサイズを実際に変更
 */
export const screenSize: SimpleMenuConfig = {
    id: 'screenSize',
    cursorVar: 'var_910',
    loadCursor: () => Gvar.var_10 === 1 ? 1 : 0,
    saveValue: async (idx: number) => {
        Gvar.var_10 = idx;
        await Adap.bsave("00.dat", Gvar.data = Gvar.var_10, null, 20);
        await Adap.bsave("00.dat", Gvar.data = Gvar.var_11, null, 80);
    },
    onConfirm: async (idx: number) => {
        // ウィンドウサイズを実際に変更する
        // 注: 旧func206はバグで両方とも width(340,340) になっていた。
        //     正しい挙動は func0900 (旧func841) を参考に修正。
        if (idx === 0) {
            Adap.width(340, 340);
        } else {
            Adap.width(680, 680);
        }
    },
    options: ["340×340", "680×680"],
    boxPos: { x: 42, y: 137 },
    boxSize: { w: 123, h: 63 },
    border: { left: 45, top: 139, right: 160, bottom: 196 },
    textX: 85,
    textStartY: 150,
    cursorX: 50,
    cursorStartY: 147,
    closeFlag: 'var_904',
};

/**
 * 言語設定 (i18n)
 * - 2段階: 日本語 / English
 * - storage: localStorage 'newdtw_lang' (i18n.tsが管理)
 * - bsave使用なし
 * - 確定時に setLanguage() を呼んで即時反映
 */
export const language: SimpleMenuConfig = {
    id: 'language',
    cursorVar: 'lang_cursor',
    loadCursor: () => getLanguage() === 'ja' ? 0 : 1,
    saveValue: async (idx: number) => {
        if (idx === 0) {
            setLanguage('ja');
        } else {
            await loadLanguage('en');
            setLanguage('en');
        }
    },
    options: ["日本語", "English"],
    boxPos: { x: 42, y: 137 },
    boxSize: { w: 113, h: 83 },
    border: { left: 45, top: 139, right: 150, bottom: 216 },
    textX: 75,
    textStartY: 150,
    cursorX: 50,
    cursorStartY: 147,
    closeFlag: 'lang_menu_open',
};
