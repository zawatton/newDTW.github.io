/**
 * func500 — 「おんぶ」状態のモンスターからのダメージ処理 (背中攻撃)
 *
 * プレーヤーの向き var_199 に対応する 8方向 (+方向5は無効) の隣接タイルを調べ、
 * そこに居るモンスター var_83[].VarN が:
 *   - Var5 がプレーヤーの向きと一致 (=プレーヤーが背を向けている)
 *   - Var0 (種別) が 19/23/50/79/90 でない (=おんぶ無効モンスター除外)
 *   - Var31 (状態) が 4/5 でない (=死亡/瀕死除外)
 * を全て満たす時、3..5 のランダムダメージを与え、専用の煽りメッセージを表示。
 *
 * メッセージは「おんぶして。」「ねッ！」等、ファニー・ヴァレンタインの台詞風
 * (var_2245 = 0..8 でランダム選択)。 BGM = DSPLAY(103) 殴打音。
 *
 * リファクタ履歴:
 *   - 9個の if (var_2240 == N) → DIR_OFFSET[N] テーブル化
 *   - 6個の var_83.Var0/Var31 == N if → DISABLE_VAR0 / DISABLE_VAR31 セット化
 *   - 9個の if (var_2245 == N) → MESSAGES テーブル化
 *   - "不明" → 機能特定 (おんぶ状態 背中ダメージ)
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { tf } from '../i18n'

/**
 * 8方向 + 中央 (=0) を var_2240 1..9 に対応付け。元コードの順序を厳密保持。
 *   1=右上 (+1,-1), 2=上 (0,-1), 3=左上 (-1,-1)
 *   4=右   (+1, 0), 5=中央 ( 0, 0) ← 元コードでは (0,0) 固定 (実質スキップ)
 *   6=左   (-1, 0), 7=右下 (+1,+1), 8=下 ( 0,+1), 9=左下 (-1,+1)
 */
const DIR_OFFSET: ReadonlyArray<readonly [number, number]> = [
    [+1, -1], [0, -1], [-1, -1],
    [+1,  0], [ 0,  0], [-1,  0],
    [+1, +1], [0, +1], [-1, +1],
];

/** おんぶ無効モンスター種別 (Var0) */
const DISABLE_VAR0: ReadonlySet<number> = new Set([19, 23, 50, 79, 90]);
/** おんぶ無効モンスター状態 (Var31: 4=死亡, 5=瀕死等) */
const DISABLE_VAR31: ReadonlySet<number> = new Set([4, 5]);

/** ファニー・ヴァレンタイン風 煽りメッセージ (var_2245 0..8) */
const MESSAGES: ReadonlyArray<string> = [
    "「おんぶして。    ねっ！」",
    "「よくやるなあ～～っ！    ねッ！」",
    "「危ないよ  そんな風に歩いちゃあ！」",
    "「必ず背中を見られるよ。    ねっ！」",
    "「ﾎﾟｺﾁﾝまで干からびさせて死ぬねっ！」",
    "「離れねーんだよッ！」",
    "「ブツブツ言っちゃって…」",
    "「ぼくを取る方法は ないッ！」",
    "「もう疲れるだけだよ。」",
];

async function func500(this: any): Promise<void> {
    Adap.dbgprt(500);
    Gvar.var_2239 = 0;

    // 8方向 (var_199 と一致する方向のみ実効。元コードは for 全方向回しつつ if 内分岐)
    for (let dirIdx = 1; dirIdx <= 9; ++dirIdx) {
        Gvar.var_2240 = dirIdx;
        if (Gvar.var_199 != dirIdx) continue;
        const [dx, dy] = DIR_OFFSET[dirIdx - 1];
        Gvar.var_2241 = Gvar.var_66 + dx;
        Gvar.var_2242 = Gvar.var_67 + dy;
        if (Gvar.var_82[Gvar.var_2241][Gvar.var_2242] == 0) continue;

        Gvar.var_2243 = Gvar.var_82[Gvar.var_2241][Gvar.var_2242];
        const m = Gvar.var_83[Gvar.var_2243];
        if (m.Var5 == dirIdx) Gvar.var_2239 = 1;
        if (DISABLE_VAR31.has(m.Var31)) Gvar.var_2239 = 0;
        if (DISABLE_VAR0.has(m.Var0))   Gvar.var_2239 = 0;
        if (Gvar.var_2239 == 1) break;
    }

    if (Gvar.var_2239 != 1) return;

    Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
    Gvar.var_1321 = 1;
    Gvar.var_2244 = Adap.rnd(3) + 3; // 3..5 ダメージ
    Gvar.var_389 = 2;
    Gvar.var_747 = 1;

    Gvar.var_2245 = Adap.rnd(9);
    const msg = MESSAGES[Gvar.var_2245] ?? MESSAGES[0];
    await Func.setMessage(msg, tf("{0}のﾀﾞﾒｰｼﾞを受けた", Gvar.var_2244), 11, false, false, false);

    Adap.DSPLAY(103); // 殴打音
    for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_1321 += 1;
    }
    Gvar.var_389 = 0;
    Gvar.var_271 = 0; // OFF
    Gvar.var_1321 = 0;

    Gvar.var_211 -= Gvar.var_2244;
    Gvar.var_208 += Gvar.var_2244;
    if (Gvar.var_211 <= 0) {
        Gvar.var_211 = 0;
        Gvar.var_356 = 212;
    }
}

export { func500 }
