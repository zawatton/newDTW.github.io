/**
 * MenuController — 統合シンプルメニューシステム
 *
 * HSP由来の冗長なメニュー実装を統合。各メニュー項目につき
 * 「初期化/入力処理/描画」の3ファイルが必要だったのを1つの
 * データ駆動ハンドラに集約。
 *
 * 対応するのは「上下選択 → 確定/キャンセル」だけのSIMPLE項目のみ。
 * カラーピッカーやキーリマップ等のCOMPLEX項目は従来通り個別実装。
 *
 * 使い方:
 *   await MenuController.run(menuConfigs.gameSpeed);
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { t } from '../i18n'

export interface SimpleMenuConfig {
    /** デバッグ識別用のID */
    id: string;
    /** カーソル位置を保持するGvarキー名 (例: 'var_906', 'lang_cursor') */
    cursorVar: string;
    /** 永続化値 → カーソル位置のマッピング (初期化時に呼ばれる) */
    loadCursor: () => number;
    /** カーソル位置 → 永続化処理 (確定時に呼ばれる) */
    saveValue: (cursorIdx: number) => Promise<void> | void;
    /** 各項目のラベル */
    options: string[];
    /** 描画位置: ボックス全体の左上 (常に gcopy(12) 起点) */
    boxPos: { x: number; y: number };
    /** ボックスサイズ (gcopy切り出しサイズ) */
    boxSize: { w: number; h: number };
    /** 枠線座標 (内側): { left, top, right, bottom } */
    border: { left: number; top: number; right: number; bottom: number };
    /** 項目テキストのX座標 */
    textX: number;
    /** 項目テキストの開始Y座標 (1番目) */
    textStartY: number;
    /** 項目間の縦間隔 (デフォルト20) */
    textSpacing?: number;
    /** カーソルアイコンのX座標 */
    cursorX: number;
    /** カーソルアイコンの開始Y座標 (1番目) */
    cursorStartY: number;
    /** メニューを閉じる際にリセットするフラグ名 (例: 'var_900' for game speed) */
    closeFlag?: string;
    /**
     * 確定時の追加処理 (任意)。bsave以外の副作用が必要な場合に使う。
     * 例: 画面サイズ変更時の Adap.width() 呼び出し
     */
    onConfirm?: (cursorIdx: number) => Promise<void> | void;
}

/**
 * メニュー項目を初期化してから入力ループに入る。
 * 旧 funcXXX_init + funcXXX_config に相当。
 */
export async function run(config: SimpleMenuConfig): Promise<void> {
    // カーソル初期化 (永続化値から)
    (Gvar as any)[config.cursorVar] = config.loadCursor();
    await loop(config);
}

/**
 * 入力処理ループ (再帰)。
 * 旧 funcXXX_config の処理に相当。
 */
async function loop(config: SimpleMenuConfig): Promise<void> {
    await Func.func337(); // 画面描画 (内部で MenuController.render を呼ぶ)
    await Func.func080(); // キー入力確認

    const cursor = (Gvar as any)[config.cursorVar] as number;
    const maxIdx = config.options.length - 1;

    // Z/A: 確定 — 値を保存して呼び出し元に戻る
    if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
        Adap.DSPLAY(212); // メニュー確定の効果音
        await Func.func051(); // キー入力待ち処理
        await config.saveValue(cursor);
        if (config.onConfirm) await config.onConfirm(cursor);
        if (config.closeFlag) (Gvar as any)[config.closeFlag] = 0;
        await Func.func193(); // システム設定メニューに戻る
        return;
    }

    // X: キャンセル — 値を保存せず戻る
    if (Gvar.key_X_on == 1) {
        await Func.func051();
        if (config.closeFlag) (Gvar as any)[config.closeFlag] = 0;
        await Func.func193();
        return;
    }

    // ↑: カーソルを上に (先頭→末尾でループ)
    if (Gvar.var_255 == 1) {
        Adap.DSPLAY(100); // 項目移動の効果音
        (Gvar as any)[config.cursorVar] = cursor === 0 ? maxIdx : cursor - 1;
        await Func.func337();
    }

    // ↓: カーソルを下に (末尾→先頭でループ)
    if (Gvar.var_259 == 1) {
        Adap.DSPLAY(100);
        (Gvar as any)[config.cursorVar] = cursor === maxIdx ? 0 : cursor + 1;
        await Func.func337();
    }

    await loop(config);
}

/**
 * メニューボックスの描画。
 * 旧 funcXXX_display の処理に相当。
 * func337 から呼ばれる (フラグ条件付き)。
 */
export function render(config: SimpleMenuConfig): void {
    const spacing = config.textSpacing ?? 20;

    // 半透明黒背景 (gmode 4: alpha=100)
    Adap.color(0, 0, 0);
    Adap.gmode(4, null, null, 100);
    Adap.pos(config.boxPos.x, config.boxPos.y);
    Adap.gcopy(12, 0, 0, config.boxSize.w, config.boxSize.h);

    // 白枠線
    Adap.color(255, 255, 255);
    const b = config.border;
    Adap.line(b.left, b.top, b.right, b.top);       // 上辺
    Adap.line(b.left, b.bottom, b.right, b.bottom); // 下辺
    Adap.line(b.left - 1, b.top + 1, b.left - 1, b.bottom - 1);    // 左辺
    Adap.line(b.right + 2, b.top + 1, b.right + 2, b.bottom - 1);  // 右辺
    Adap.pset(b.left, b.top + 1);
    Adap.pset(b.right + 1, b.top + 1);
    Adap.pset(b.left, b.bottom - 1);
    Adap.pset(b.right + 1, b.bottom - 1);

    // 項目テキスト
    Adap.font(Gvar.font_type, 16, 1);
    Adap.color(255, 255, 255);
    for (let i = 0; i < config.options.length; i++) {
        Adap.pos(config.textX, config.textStartY + i * spacing);
        // i18n対応: ラベルが翻訳キーとしてen.jsonにあれば翻訳、なければ原文表示
        Adap.mes(t(config.options[i]));
    }

    // カーソル位置
    const cursor = (Gvar as any)[config.cursorVar] as number;
    Adap.pos(config.cursorX, config.cursorStartY + cursor * spacing);

    // カーソルアイコン (gmode 2: 透明色付きコピー)
    Adap.gmode(2);
    // buffer(8)="img1.gif", (70,50)から25x20で切り出し → 鏃アイコン
    Adap.gcopy(8, 70, 50, 25, 20);
}
