/**
 * func467 — Shift キーで所持アイテムを整理する
 *
 * 11本のバブルソートパスを順次実行して所持アイテム配列 var_233 を並べ替える。
 * 各パスは隣接2要素を比較し、入れ替えが必要なら func468 (swap) を呼ぶ。
 * func468 は呼ばれると var_1620=1 / var_1621=2 / var_1623=1 にリセットして
 * パスを最初から再走させる (バブルソート 1 段)。
 *
 * パス順序 (元コード上から下):
 *   1) ヤバいもの   (800-899) を先頭へ寄せ、内部はID順 + 識別済優先
 *   2) 750-799 + 900-999 を寄せ、特殊順序付け
 *   3) 700-749  (使う系1) を寄せて整列
 *   4) 600-699  (食べる系) を寄せて整列
 *   5) 500-599  (使う系2) を寄せて整列
 *   6) 400-499  (射撃disc) を寄せて整列
 *   7) 100-399  (装備disc) を寄せて整列
 *   8-11) フラグ var_476/477/478/479 をそれぞれ末尾に寄せる
 *
 * リファクタ履歴:
 *   - 11個のバブルソートパスを sortPass + 述語クロージャに分解
 *   - 6個の同型パス (1,3,4,5,6,7) を rangeCheck で共通化
 *   - 4個の同型フラグパス (8-11) を flagCheck で共通化
 *   - 元 332行 → 約170行
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/**
 * バブルソート 1 種類を実行する。
 * func468 (swap) が var_1620=1, var_1621=2 にリセットしつつ var_1623=1 を立てるので、
 * このループ側では var_1623 を見て前進するか戻るかを判断するだけ。
 */
async function sortPass(check: () => Promise<void>): Promise<void> {
    Gvar.var_1620 = 1;
    Gvar.var_1621 = 2;
    while (Gvar.var_1620 < Gvar.var_224) {
        Gvar.var_1623 = 0;
        await check();
        if (Gvar.var_1623 === 0) {
            Gvar.var_1620 += 1;
            Gvar.var_1621 += 1;
        }
    }
}

/**
 * [start, end) の範囲に属するアイテムを先頭に寄せ、範囲内では
 * (識別済アイテム優先 + 同種ならID昇順) に整える共通述語。
 */
function rangeCheck(start: number, end: number): () => Promise<void> {
    return async () => {
        const v1 = Gvar.var_233[Gvar.var_1620].Var0;
        const v2 = Gvar.var_233[Gvar.var_1621].Var0;
        const v1In = v1 >= start && v1 < end;
        const v2In = v2 >= start && v2 < end;

        // 範囲外→範囲内 の隣接 → 範囲内を前へ
        if (!v1In && v2In) {
            await Func.func468();
            return;
        }
        if (v1In && v2In) {
            Gvar.var_2050 = v1;
            Gvar.var_2051 = v2;
            const ident1 = Gvar.var_862[v1][0] === 1;
            const ident2 = Gvar.var_862[v2][0] === 1;
            if (ident1 && ident2 && v1 > v2)        await Func.func468(); // 両識別済 ID昇順
            else if (!ident1 && !ident2 && v1 > v2) await Func.func468(); // 両未識別 ID昇順
            else if (!ident1 && ident2)             await Func.func468(); // 識別済を前へ
        }
    };
}

/** フラグ配列 (var_476-479 等) で 0→1 を見つけたら 1 を前へ寄せる述語 */
function flagCheck(flagArr: number[]): () => Promise<void> {
    return async () => {
        if (flagArr[Gvar.var_1620] === 0 && flagArr[Gvar.var_1621] === 1) {
            await Func.func468();
        }
    };
}

/**
 * パス 2: 750-799 + 900-999 を寄せ、内部は特殊順序
 *   - 両者 [900, 1000) で v1>v2 → swap
 *   - 両者 [750, 800)  で v1>v2 → swap
 *   - v1∈[750,800), v2∈[900, 986]  → swap (900-986 を 750-799 より前へ)
 */
const sortPass2: () => Promise<void> = async () => {
    const v1 = Gvar.var_233[Gvar.var_1620].Var0;
    const v2 = Gvar.var_233[Gvar.var_1621].Var0;
    Gvar.var_2048 = (v1 >= 750 && v1 < 800) || (v1 >= 900 && v1 < 1000) ? 1 : 0;
    Gvar.var_2049 = (v2 >= 750 && v2 < 800) || (v2 >= 900 && v2 < 1000) ? 1 : 0;

    if (Gvar.var_2048 === 0 && Gvar.var_2049 === 1) {
        await Func.func468();
        return;
    }
    if (Gvar.var_2048 === 1 && Gvar.var_2049 === 1) {
        Gvar.var_2050 = v1;
        Gvar.var_2051 = v2;
        Gvar.var_2052 = 0;
        if (v1 > v2 && v1 >= 900 && v2 >= 900) {
            await Func.func468();
            Gvar.var_2052 = 1;
            return;
        }
        if (v1 > v2 && v1 < 800 && v2 < 800) {
            await Func.func468();
            Gvar.var_2052 = 1;
            return;
        }
        if (v1 < 800 && v2 >= 900 && v2 <= 986) {
            await Func.func468();
            Gvar.var_2052 = 1;
        }
    }
};

async function func467(this: any): Promise<void> {
    Adap.dbgprt(467);

    await Func.func466();

    // 所持アイテム1個なら整列するものがない
    if (Gvar.var_224 == 1) {
        await Func.func461(); // 道具画面入力ハンドラ
        return;
    }

    // ----- 11本のバブルソートパス -----
    await sortPass(rangeCheck(800, 900)); // パス 1: ヤバいもの先頭
    await sortPass(sortPass2);            // パス 2: 750-799 + 900-999 特殊
    await sortPass(rangeCheck(700, 750)); // パス 3
    await sortPass(rangeCheck(600, 700)); // パス 4
    await sortPass(rangeCheck(500, 600)); // パス 5
    await sortPass(rangeCheck(400, 500)); // パス 6: 射撃disc
    await sortPass(rangeCheck(100, 400)); // パス 7: 装備disc
    await sortPass(flagCheck(Gvar.var_479));
    await sortPass(flagCheck(Gvar.var_478));
    await sortPass(flagCheck(Gvar.var_477));
    await sortPass(flagCheck(Gvar.var_476));

    // ----- 後処理: 射撃discが残っていればその位置を var_250 に記録 -----
    Gvar.var_250 = 0;
    Gvar.var_1956 = 1;
    for (let i = 0; i < Gvar.var_224; i++) {
        if (Gvar.var_479[Gvar.var_1956] == 1) {
            Gvar.var_250 = Gvar.var_1956;
        }
        Gvar.var_1956 += 1;
    }

    Gvar.item_page_number = 1;
    await Func.func052(); // Shift キー入力待ち
    await Func.func461(); // 道具画面入力ハンドラ
}

export { func467 }
