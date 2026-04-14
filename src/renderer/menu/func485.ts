/**
 * func485 — アイテム名入力 UI 描画 (キーボード+履歴+カーソル)
 *
 * func484 (入力ループ) から毎フレーム呼ばれる描画ルーチン。
 * 状態フラグ:
 *   var_2123 == 1 : 履歴一覧モード (10件×2ページ、左右切替 var_2141)
 *   var_2123 == 0 : ソフトキーボードモード
 *     - var_2132 (0=全角カナ / 1=半角カナ / 2=全角かな) で 3種類のキーボードを表示
 *     - var_2131 (0-89) の現在選択行/列に応じて [カーソル枠] を描画
 *     - var_2125/2126/2127/2130 はレイアウト基準値
 *
 * 入力済み文字列バッファ (var_2133[1..20]) も画面上部に "緑文字＋下線" で表示。
 *
 * リファクタ履歴:
 *   - 9連 if (var_2131 → var_2129 行Y) → 1行式に圧縮
 *   - 5連+10連 if (var_2149 → var_2128 列X) → COL_OFFSETS_LO/HI table
 *   - 6種類のブラケット幅 if → BRACKET_WIDTHS table
 *   - 3種類のキーボードレイアウト 33行 if 連鎖 → KEYBOARDS table + 1ループ
 *   - 3pxスタック ">"/"<" カーソルを triCursor() helper化
 *   - "不明" → 機能特定 (アイテム名入力 UI)
 *   - 元 285行 → 約170行
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

/** ソフトキーボードレイアウト (var_2132: 0=全角カナ / 1=半角カナ / 2=全角かな) */
const KEYBOARDS: ReadonlyArray<readonly string[]> = [
    [
        "全角カナ  消す  やめる  履歴  決定",
        "",
        "あ い う え お      は ひ ふ へ ほ",
        "か き く け こ      ま み む め も",
        "さ し す せ そ      や    ゆ    よ",
        "た ち つ て と      ら り る れ ろ",
        "な に ぬ ね の      わ を ん ﾞ  ﾟ ",
        "ぁ ぃ ぅ ぇ ぉ      ゃ ゅ ょ っ ー",
        "１ ２ ３ ４ ５      ６ ７ ８ ９ ０",
        "＋ － ？ ！ ／      （ ） ・ ～   ",
    ],
    [
        "半角カナ  消す  やめる  履歴  決定",
        "",
        "ア イ ウ エ オ      ハ ヒ フ ヘ ホ",
        "カ キ ク ケ コ      マ ミ ム メ モ",
        "サ シ ス セ ソ      ヤ    ユ    ヨ",
        "タ チ ツ テ ト      ラ リ ル レ ロ",
        "ナ ニ ヌ ネ ノ      ワ ヲ ン ﾞ  ﾟ ",
        "ァ ィ ゥ ェ ォ      ャ ュ ョ ッ ―",
        "１ ２ ３ ４ ５      ６ ７ ８ ９ ０",
        "＋ － ？ ！ ／      （ ） ・ ～   ",
    ],
    [
        "全角かな  消す  やめる  履歴  決定",
        "",
        "ｱ  ｲ  ｳ  ｴ  ｵ       ﾊ  ﾋ  ﾌ  ﾍ  ﾎ",
        "ｶ  ｷ  ｸ  ｹ  ｺ       ﾏ  ﾐ  ﾑ  ﾒ  ﾓ",
        "ｻ  ｼ  ｽ  ｾ  ｿ       ﾔ     ﾕ     ﾖ",
        "ﾀ  ﾁ  ﾂ  ﾃ  ﾄ       ﾗ  ﾘ  ﾙ  ﾚ  ﾛ",
        "ﾅ  ﾆ  ﾇ  ﾈ  ﾉ       ﾜ  ｦ  ﾝ ﾞ  ﾟ ",
        "ｧ  ｨ  ｩ  ｪ  ｫ       ｬ  ｭ  ｮ  ｯ  ｰ",
        "1  2  3  4  5       6  7  8  9  0",
        "+  -  ?  !  /       (  )  ･  ~   ",
    ],
] as const;

/** カーソル列 X オフセット (var_2131 < 10 用; インデックス = var_2149 0-4) */
const COL_OFFSETS_LO: ReadonlyArray<readonly [number, number]> = [
    [0, 15],   // [mult, offset] → var_2130 * mult + offset
    [3, 22],
    [6, -3],
    [8, 11],
    [10, 11],
] as const;

/** カーソル列 X オフセット (var_2131 >= 10 用; インデックス = var_2149 0-9) */
const COL_OFFSETS_HI: ReadonlyArray<readonly [number, number]> = [
    [0, 16], [1, 16], [2, 16], [3, 16], [4, 16],
    [7, 6],  [8, 6],  [9, 6],  [10, 6], [11, 6],
] as const;

/** カーソル枠の文字列 (var_2131 == 0..4 用; 5..9 は使わない) */
const BRACKET_LO: ReadonlyArray<string> = [
    "[        ]", "[    ]", "[      ]", "[    ]", "[    ]",
] as const;

/** 3pxスタックでカーソル文字 ch を (x, y) を起点に 3 個描く */
function triCursor(x: number, y: number, ch: string): void {
    Adap.pos(x, y);     Adap.mes(ch);
    Adap.pos(x + 1, y); Adap.mes(ch);
    Adap.pos(x + 2, y); Adap.mes(ch);
}

async function func485(this: any): Promise<void> {
    Adap.dbgprt(485);

    // ---- 背景 + 枠線 ----
    Adap.color(0, 0, 0);
    Adap.gmode(4, null, null, 100);
    Adap.pos(5, 35);  Adap.gcopy(12, 0, 0, 332, 62);
    Adap.pos(5, 99);  Adap.gcopy(12, 0, 0, 332, 235);

    Adap.color(255, 255, 255);
    // 下半分 (キーボード/履歴 領域)
    Adap.line(9, 101, 330, 101);
    Adap.line(9, 331, 166, 331);
    Adap.line(190, 331, 330, 331);
    Adap.line(8, 102, 8, 329);
    Adap.line(332, 102, 332, 329);
    Adap.pset(9, 102); Adap.pset(331, 102); Adap.pset(9, 330); Adap.pset(331, 330);
    // 上半分 (入力済み文字列 領域)
    Adap.line(9, 37, 330, 37);
    Adap.line(9, 94, 330, 94);
    Adap.line(8, 38, 8, 92);
    Adap.line(332, 38, 332, 92);
    Adap.pset(9, 38); Adap.pset(331, 38); Adap.pset(9, 93); Adap.pset(331, 93);

    // ====================== 履歴一覧モード ======================
    if (Gvar.var_2123 == 1) {
        Adap.color(255, 255, 255);
        Adap.font("メイリオ", 16, 1);
        Adap.notesel(Gvar.var_754);

        Gvar.var_2145 = 0;
        Gvar.var_2146 = 120;
        for (let i = 0; i < 10; i++) {
            // 左ページ: 100-109、右ページ: 110-119
            const base = (Gvar.var_2141 == 1) ? 100 : (Gvar.var_2141 == 2 ? 110 : 100);
            Gvar.var_2143 = Gvar.var_2145 + base;
            Gvar.var_2144 = Adap.noteget(Gvar.var_2143);
            Adap.pos(30, Gvar.var_2146);
            Adap.mes("" + Gvar.var_2144);
            Gvar.var_2145++;
            Gvar.var_2146 += 20;
        }

        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        // 行カーソル ">" を 3pxスタックで描画
        triCursor(13, Gvar.var_2140 * 20 + 120, ">");
        // ページ切替矢印 (右or左)
        Gvar.var_2147 = 175;
        Gvar.var_2148 = 323;
        if (Gvar.var_2141 == 1) triCursor(Gvar.var_2147, Gvar.var_2148, ">");
        if (Gvar.var_2141 == 2) triCursor(Gvar.var_2147, Gvar.var_2148, "<");
    }

    // ====================== ソフトキーボードモード ======================
    if (Gvar.var_2123 == 0) {
        Adap.color(255, 255, 255);
        Adap.line(165, 331, 191, 331);
        Adap.color(255, 0, 0);
        Adap.font("メイリオ", 16, 1);

        // var_2131 → (row, col) 分解
        const row = Math.floor(Gvar.var_2131 / 10);
        const col = Gvar.var_2131 - row * 10;
        Gvar.var_2149 = col;
        Gvar.var_2150 = row * 10;

        // 行 Y 座標: 0行目=var_2126、それ以外=var_2127*(row+1)+var_2126
        Gvar.var_2129 = (row == 0) ? Gvar.var_2126 : Gvar.var_2127 * (row + 1) + Gvar.var_2126;

        // 列 X 座標: 0行目 (var_2131<10) と 1行目以降 (>=10) でテーブルが異なる
        const offTable = (Gvar.var_2131 < 10) ? COL_OFFSETS_LO : COL_OFFSETS_HI;
        const off = offTable[col];
        if (off) {
            Gvar.var_2128 = Gvar.var_2130 * off[0] + off[1];
        }

        // カーソル枠: 0行目 (var_2131<10) はキー幅違いの専用ブラケット、それ以外は "[  ]"
        Adap.pos(Gvar.var_2128, Gvar.var_2129);
        if (Gvar.var_2131 >= 10) {
            Adap.mes("[  ]");
        } else if (col >= 0 && col < BRACKET_LO.length) {
            Adap.mes(BRACKET_LO[col]);
        }

        // ---- キーボード描画 (var_2132 で配列選択) ----
        Adap.color(255, 255, 255);
        Adap.font("メイリオ", 16, 1);
        const layout = KEYBOARDS[Gvar.var_2132];
        if (layout) {
            for (let r = 0; r < layout.length; r++) {
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * r + Gvar.var_2126);
                Adap.mes(layout[r]);
            }
        }
    }

    // ====================== 入力済み文字列バッファ表示 ======================
    Adap.font("メイリオ", 18, 1);
    Gvar.var_2151 = 0;
    Gvar.var_2152 = 1;
    for (let i = 0; i < 20; i++) {
        Adap.color(0, 255, 0);
        Adap.pos(60 + Gvar.var_2151, 60);
        Adap.mes(Gvar.var_2133[Gvar.var_2152]);
        // 下線 (白)
        Adap.color(255, 255, 255);
        Adap.pos(60 + i * 10, 75);
        Adap.mes("-");
        // 確定済み位置はグレー (再描画して上書き)
        if (Gvar.var_2152 <= Gvar.var_2136) {
            Adap.color(100, 100, 100);
            Adap.pos(60 + i * 10, 75); // 0.1405 修正: cnt2 → cnt1
            Adap.mes("-");
        }
        // 半角=10px / 全角=20px の桁送り
        if (Gvar.var_2134[Gvar.var_2152] == 1) Gvar.var_2151 += 10;
        if (Gvar.var_2134[Gvar.var_2152] == 2) Gvar.var_2151 += 20;
        Gvar.var_2152++;
    }
}

export { func485 }
