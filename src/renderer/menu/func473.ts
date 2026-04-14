/**
 * func473 — 「押す」動作処理 (850-854)
 *
 * 道具画面で「押す」を選んだアイテムへの動作分岐。アイテム ID 別:
 *   850 ヒーリング系  : "パウッ！" → HP/経験値 回復 (吸血鬼=Gvar.var_130 なら逆効果ダメージ)
 *   851 ビン          : 中身 (var_486[id][1+]) を 1 つ 8方向の床へ放出 (func556)
 *   852 ランドセル    : 押すと爆発 (func647 射撃攻撃)
 *   853 サーフィス人形: 8方向に向けて自分のコピーを生成 (var_83 敵スロットへ)
 *   854 聖人の脊椎    : 拠点では何も起きない、ダンジョン中なら func499 (ダンジョン動作)
 *
 * 共通パターン:
 *   - var_199 (1-9 numpad方向) → (var_2102, var_2103) 座標計算が 2回重複
 *     → setDirCoord() helper に集約
 *   - var_862[id][0] による "何かを押した" / "<識別名>を押した" メッセージが 3回
 *     → pushedMessage() helper
 *   - 終了処理 var_231=0; var_234=0; var_2040=0; (+α) も多用
 *     → resetPushFlags() helper
 *
 * リファクタ履歴:
 *   - 8方向 if 8連 × 2回 → DIR_OFFSET テーブル + setDirCoord 1関数
 *   - "押した" メッセージ 3回 → pushedMessage 1関数
 *   - "不明" → 機能特定済み
 *   - 元 330行 → 約220行
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/** numpad 方向 (var_199: 1-9) → (dx, dy) オフセット */
const DIR_OFFSET: Record<number, readonly [number, number]> = {
    1: [-1, +1], 2: [ 0, +1], 3: [+1, +1],
    4: [-1,  0],              6: [+1,  0],
    7: [-1, -1], 8: [ 0, -1], 9: [+1, -1],
};

/** var_199 から var_66/var_67 基準で var_2102/var_2103 を更新 */
function setDirCoord(): void {
    const off = DIR_OFFSET[Gvar.var_199];
    if (!off) return;
    Gvar.var_2102 = Gvar.var_66 + off[0];
    Gvar.var_2103 = Gvar.var_67 + off[1];
}

/** "押した" 系メッセージ: 識別済み (var_862[id][0]==1) なら識別名、未識別なら "何か" */
async function pushedMessage(itemId: number, identifiedLabel: string): Promise<void> {
    if (Gvar.var_862[itemId][0] == 0) {
        await Func.setMessage("何かを押した。", "", 7, false, false, false);
    } else {
        await Func.setMessage(identifiedLabel, "", 7, false, false, false);
    }
}

/** 押す処理キャンセル時の共通フラグリセット */
function resetPushFlags(): void {
    Gvar.var_231 = 0;
    Gvar.var_234 = 0;
    Gvar.var_2040 = 0;
}

async function func473(this: any): Promise<void> {
    Adap.dbgprt(473);
    Gvar.open_item_menue = 0;
    Gvar.var_1866 = 0;
    const item = Gvar.var_233[Gvar.var_225];

    // ---- 851 以外で残回数 0 (Var7) → "これ以上押せない" ----
    if (item.Var0 != 851 && item.Var7 == 0) {
        await Func.setMessage("これ以上押せないようだ。", "", 7, false, false, false);
        resetPushFlags();
        await Func.AutoDraw(10);
        await Func.func009();
        return;
    }

    // ---- 851 で中身が空 → "何も入っていない" ----
    if (item.Var0 == 851) {
        Gvar.var_1916 = item.Var6;
        if (Gvar.var_486[Gvar.var_1916][1][15] == 0 || item.Var8 == 0) {
            await Func.setMessage("何も入っていないようだ。", "", 7, false, false, false);
            resetPushFlags();
            await Func.AutoDraw(10);
            await Func.func009();
            return;
        }
    }

    // ---- 851 以外: 残回数 -1 + 買物時の値段加算 ----
    if (item.Var0 != 851) {
        item.Var7 = item.Var7 - 1;
        if (item.Var11 == 1) {
            Gvar.count_buying_price = Gvar.count_buying_price + 100;
        }
        if (Gvar.var_234 == 1) {
            Gvar.var_2087 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
            Gvar.var_78[Gvar.var_2087].Var7 = Gvar.var_233[0].Var7;
        }
    }
    Adap.DSPLAY(221);

    // ====================== 850 ヒーリング系 ======================
    if (item.Var0 == 850) {
        Gvar.var_1940 = Gvar.var_199;
        Gvar.var_199 = 2;
        await Func.setMessage("パウッ！", "", 7, false, false, false);
        await Func.AutoDraw(10);
        Gvar.var_389 = 2;
        Gvar.var_747 = 1;
        Adap.DSPLAY(103); // 殴られた時の効果音
        await Func.AutoDraw(15);
        Gvar.var_389 = 0;
        Adap.DSPLAY(182);
        Gvar.var_1299 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" ON
        Gvar.var_1297 = 1;
        for (let i = 0; i < 20; i++) {
            await Func.func337();
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0;
        Gvar.var_1297 = 0;

        if (Gvar.var_130 != 0) {
            // 吸血鬼体質 → 波紋呼吸でダメージ
            Gvar.var_389 = 2;
            Gvar.var_134 = 1;
            Gvar.var_211 = 1;
            Gvar.var_747 = 1;
            Adap.DSPLAY(105);
            await Func.AutoDraw(10);
            await Func.setMessage("吸血鬼体質で波紋呼吸をしてしまった！", "", 7, true, false, false);
            await Func.setMessage("酷いダメージを受けて回復しない！", "", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_389 = 0;
        } else {
            // 通常: HP回復 + 吸血鬼耐性付与
            if (Gvar.var_211 != Gvar.var_352) {
                Adap.DSPLAY(143);
                Gvar.var_211 = Gvar.var_352;
                await Func.setMessage("ＨＰが回復した！", "", 7, true, false, false);
                await Func.AutoDraw(3);
            }
            await Func.func457();
            Gvar.var_125 = 1;
            await Func.setMessage("吸血鬼に強くなった！", "", 7, false, false, false);
        }
        Gvar.var_199 = Gvar.var_1940;
        await Func.AutoDraw(10);
    }

    // ====================== 851 ビン ======================
    if (item.Var0 == 851) {
        setDirCoord();
        await pushedMessage(851, "ビンの中を押した。");
        await Func.AutoDraw(10);

        const wallOrEnemy =
            Gvar.var_71[Gvar.var_2102][Gvar.var_2103] == 0 ||
            Gvar.var_71[Gvar.var_2102][Gvar.var_2103] == 13 ||
            Gvar.var_82[Gvar.var_2102][Gvar.var_2103] != 0;

        if (wallOrEnemy) {
            await Func.setMessage("何かが飛び出そうになったが", "出てこなかった。", 7, false, false, false);
            await Func.AutoDraw(10);
        } else {
            // ビン内アイテムを 1個射出
            Gvar.var_1845 = 4;
            Gvar.var_1916 = item.Var6;
            Gvar.var_1918 = Gvar.var_486[Gvar.var_1916][1][15];
            Gvar.var_1919 = Gvar.var_486[Gvar.var_1916][1][18];
            await Func.func556();
            Gvar.var_1918 = 0;
            Gvar.var_1845 = 0;
            Gvar.var_1584 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1585 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_271 = 1;
            Gvar.var_1583 = 1;
            for (let i = 0; i < 10; i++) {
                Gvar.var_300 = 0;
                await Func.func337();
                Gvar.var_1583++;
            }
            Gvar.var_271 = 0;
            Gvar.var_1583 = 0;
            Gvar.var_486[Gvar.var_1916][1][15] = 0;

            // 後続スロットを 1つずつ前へシフト (ﾋﾞﾝ内の "詰める" 処理)
            Gvar.var_1957 = 0;
            Gvar.var_447 = 1;
            Gvar.var_449 = 2;
            Gvar.var_2104 = item.Var7 + item.Var8;
            for (let i = 0; i < Gvar.var_2104; i++) {
                if (Gvar.var_486[Gvar.var_1916][Gvar.var_447][15] == 0) {
                    Gvar.var_486[Gvar.var_1916][Gvar.var_447][15] = Gvar.var_486[Gvar.var_1916][Gvar.var_449][15];
                    Gvar.var_486[Gvar.var_1916][Gvar.var_447][18] = Gvar.var_486[Gvar.var_1916][Gvar.var_449][18];
                    Gvar.var_1957 = 1;
                }
                if (Gvar.var_1957 == 1) {
                    Gvar.var_486[Gvar.var_1916][Gvar.var_447][15] = Gvar.var_486[Gvar.var_1916][Gvar.var_449][15];
                    Gvar.var_486[Gvar.var_1916][Gvar.var_447][18] = Gvar.var_486[Gvar.var_1916][Gvar.var_449][18];
                }
                Gvar.var_447 = Gvar.var_447 + 1;
                Gvar.var_449 = Gvar.var_449 + 1;
            }
            Gvar.var_2105 = Gvar.var_2104;
            Gvar.var_486[Gvar.var_1916][Gvar.var_2105][15] = 0;
            Gvar.var_486[Gvar.var_1916][Gvar.var_2105][18] = 0;

            item.Var8 = item.Var8 - 1;
            if (item.Var11 == 1) {
                Gvar.count_buying_price = Gvar.count_buying_price + 100;
            }
            if (Gvar.var_234 == 1) {
                Gvar.var_2087 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                Gvar.var_78[Gvar.var_2087].Var7 = Gvar.var_233[0].Var7;
                Gvar.var_78[Gvar.var_2087].Var8 = Gvar.var_233[0].Var8;
            }
            await Func.AutoDraw(10);
        }
    }

    // ====================== 852 ランドセル ======================
    if (item.Var0 == 852) {
        await pushedMessage(852, "ランドセルを押した。");
        await Func.AutoDraw(10);
        await Func.setMessage("ギャ――ス！", "", 7, false, false, false);
        await Func.AutoDraw(3);
        resetPushFlags();
        Gvar.var_2106 = 2;
        Gvar.var_1213 = 1;
        await Func.func647(); // 射撃攻撃動作
        return;
    }

    // ====================== 853 サーフィス人形 ======================
    if (item.Var0 == 853) {
        setDirCoord();
        Gvar.var_2107 = 0;
        await pushedMessage(853, "サーフィス人形を押した。");
        await Func.AutoDraw(10);

        const blocked =
            Gvar.var_71[Gvar.var_2102][Gvar.var_2103] == 0 ||
            Gvar.var_71[Gvar.var_2102][Gvar.var_2103] == 13 ||
            Gvar.var_82[Gvar.var_2102][Gvar.var_2103] != 0;
        Gvar.var_2108 = blocked ? 0 : 1;

        if (Gvar.var_2108 == 0) {
            // 隣接ブロック → スペース無いので別方向探索
            Gvar.var_2109 = 1;
            Gvar.var_1845 = 1;
            await Func.func556();
            Gvar.var_2109 = 0;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 == 1) {
                Gvar.var_2107 = 1;
                Gvar.var_199 = Gvar.var_2111;
            } else {
                await Func.setMessage("十分なスペースがないため", "うまくいかなかった。", 7, false, false, false);
                resetPushFlags();
                Gvar.var_217 = 1;
                await Func.func019();
                return;
            }
        } else {
            Gvar.var_2109 = 1;
            Gvar.var_1845 = 4;
            await Func.func556();
            Gvar.var_2109 = 0;
            Gvar.var_1845 = 0;
            Gvar.var_2107 = 1;
        }

        if (Gvar.var_2107 == 1) {
            Gvar.var_439 = Gvar.var_673;
            Gvar.var_83[Gvar.var_439].Var11 = 1;
            Gvar.var_83[Gvar.var_439].Var5 = 2;
            Gvar.var_271 = 1;
            Gvar.var_444 = 1;
            for (let i = 0; i < 25; i++) {
                await Func.func337();
                Gvar.var_444 = Gvar.var_444 + 1;
                Gvar.var_198 = 1; // メッセージウィンドウ開く
                Gvar.var_300 = 0;
            }
            Gvar.var_271 = 0;
            Gvar.var_444 = 0;
            Gvar.var_83[Gvar.var_439].Var11 = 0;
            await Func.setMessage("ｺﾋﾟｰ人形が現れた。", "うまくいかなかった。", 7, false, false, false);
        }
        await Func.AutoDraw(10);
    }

    // ====================== 854 聖人の脊椎 ======================
    if (item.Var0 == 854) {
        await pushedMessage(854, "聖人の脊椎を押した。");
        await Func.AutoDraw(10);
        Gvar.var_234 = 0;
        if (Gvar.var_262 == 0) {
            // ダンジョン中 → ダンジョン動作開始
            resetPushFlags();
            Gvar.var_2112 = 1;
            Adap.DSPLAY(190);
            await Func.func499(); // ダンジョン動作処理
        } else {
            // 拠点 (ホテル/亀) → 何も起きない
            await Func.setMessage("ここでは何も起こらなかった。", "", 7, false, false, false);
        }
    }

    // ---- 共通終了: フラグリセット & ターン進行 ----
    resetPushFlags();
    Gvar.var_217 = 1;
    await Func.func019();
}

export { func473 }
