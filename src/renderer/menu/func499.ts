/**
 * func499 — フロア内ワープ実行 (ワープタイル踏みorワープ系効果)
 *
 * func494 (ワープタイル踏み) や var_216==1 (キラキラワープ演出フラグ) で呼ばれる。
 * フロア内のランダム移動先を 3段階の緩和条件で探索し、見つけた地点へプレーヤーを移動。
 *
 * 探索3段階 (緩和):
 *   1) 道タイル (var_71 1..12) かつ未占有 (var_82==0) かつ 同種タイル除外 → 500回試行
 *   2) 道タイル かつ 未占有 (同種除外無し)            → 500回試行
 *   3) 非ワープ (var_71 != 13) かつ 未占有             → 10000回試行
 *
 * 移動後: 隣接 4方向の var_71 値で var_201 (現在いる部屋ID) を更新、
 * func016/017/018 (各種マップ更新), モンスターハウス判定 (func074),
 * 店出入り判定 (func722/706) を実行。
 *
 * リファクタ履歴:
 *   - 3探索ループ (類似コード) → tryFindWarpTarget(opts) 共通化
 *   - 4方向 var_71 → var_201 if 連鎖 → DIRS テーブル + ループ
 *   - "ダンジョン基本動作フレーム" (誤認) → 機能特定 (フロア内ワープ実行)
 *
 * (org原典: newDTW_dungeon_main / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/** ランダム位置を tries 回引いて、cond を満たす最初の (x,y) を返す。見つからなければ null。 */
function tryFindWarpTarget(
    tries: number,
    excludeOrigin: boolean,
    cond: (x: number, y: number) => boolean,
): { x: number; y: number } | null {
    for (let i = 0; i < tries; ++i) {
        const x = Adap.rnd(Gvar.var_33);
        const y = Adap.rnd(Gvar.var_34);
        if (excludeOrigin && x == Gvar.var_2235 && y == Gvar.var_2236) continue;
        if (cond(x, y)) return { x, y };
    }
    return null;
}

async function func499(this: any): Promise<void> {
    Adap.dbgprt(499);
    Gvar.var_114 = 0;
    Gvar.var_463 = 0;
    Gvar.var_464 = 0;
    Gvar.var_461 = 0;
    Gvar.var_462 = 0;

    // ワープ前演出 (var_216==1: キラキラフェードアウト)
    if (Gvar.var_216 == 1) {
        Gvar.var_374 = 1;
        Gvar.var_774 = 160;
        Gvar.var_1576 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_774 -= 20;
        }
        Gvar.var_271 = 0; // OFF
        Gvar.var_1576 = 0;
        await Func.AutoDraw(10);
        Gvar.var_374 = 0;
        Gvar.var_216 = 0;
    }

    Gvar.var_2235 = Gvar.var_66;
    Gvar.var_2236 = Gvar.var_67;
    Gvar.var_2237 = 0;
    Gvar.var_65[Gvar.var_66][Gvar.var_67] = 0;

    // 探索 3段階 (緩和)
    let target = tryFindWarpTarget(500, false,
        (x, y) => Gvar.var_71[x][y] != 0 && Gvar.var_71[x][y] <= 12
            && Gvar.var_82[x][y] == 0 && Gvar.var_71[x][y] != Gvar.var_201);
    if (!target) target = tryFindWarpTarget(500, true,
        (x, y) => Gvar.var_71[x][y] != 0 && Gvar.var_71[x][y] <= 12 && Gvar.var_82[x][y] == 0);
    if (!target) target = tryFindWarpTarget(10000, true,
        (x, y) => Gvar.var_71[x][y] != 0 && Gvar.var_71[x][y] != 13 && Gvar.var_82[x][y] == 0);
    if (target) {
        Gvar.var_491 = target.x;
        Gvar.var_492 = target.y;
        Gvar.var_2237 = 1;
    }

    // 演出ループ (var_2112==0: 既に演出済み判定無)
    if (Gvar.var_2112 == 0) {
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            Gvar.var_374 = 1;
            await Func.func337();
            Gvar.var_374 = 0;
            await Func.func337();
        }
    }

    // 移動先確定 (失敗時は前回位置 var_236/var_237 へフォールバック)
    if (Gvar.var_2237 == 0) {
        Gvar.var_66 = Gvar.var_236;
        Gvar.var_67 = Gvar.var_237;
    } else {
        Gvar.var_66 = Gvar.var_491;
        Gvar.var_67 = Gvar.var_492;
    }

    // 隣接 4方向の var_71 値 → 部屋ID var_201 を更新 (13/0/14 は除外)
    Gvar.var_289 = Gvar.var_66 - 1;
    Gvar.var_290 = Gvar.var_66 + 1;
    Gvar.var_291 = Gvar.var_67 + 1;
    Gvar.var_292 = Gvar.var_67 - 1;
    Gvar.var_201 = 13;
    const NEIGHBORS: ReadonlyArray<readonly [number, number]> = [
        [Gvar.var_289, Gvar.var_67],
        [Gvar.var_290, Gvar.var_67],
        [Gvar.var_66, Gvar.var_291],
        [Gvar.var_66, Gvar.var_292],
    ];
    for (const [x, y] of NEIGHBORS) {
        const t = Gvar.var_71[x][y];
        if (t != 13 && t != 0 && t != 14) Gvar.var_201 = t;
    }

    await Func.func016();
    await Func.func017();
    await Func.func018();

    if (Gvar.var_200 == Gvar.var_201 && Gvar.special_floor != 8) Gvar.var_98 = 1;
    if (Gvar.var_202 == Gvar.var_201 && Gvar.special_floor != 8) Gvar.var_99 = 1;

    // ワープ後演出 (var_2112==0: キラキラフェードイン)
    if (Gvar.var_2112 == 0) {
        Gvar.var_374 = 1;
        Gvar.var_774 = 0;
        Gvar.var_1578 = 1;
        Gvar.var_271 = 1; // ON
        for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
            await Func.func337();
            Gvar.var_774 += 20;
        }
        Adap.DSPLAY(217);
        Gvar.var_1578 = 0;
        Gvar.var_271 = 0; // OFF
        Gvar.var_374 = 0;
        Gvar.var_199 = 2;
        await Func.AutoDraw(10);
    }

    // 全モンスターの状態リセット (Var9/Var18 = 0)
    Gvar.var_2238 = 1;
    for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
        Gvar.var_83[Gvar.var_2238].Var9 = 0;
        Gvar.var_83[Gvar.var_2238].Var18 = 0;
        Gvar.var_2238 += 1;
    }

    await Func.func331(); // 装備/消費アイテム エフェクト処理

    if (Gvar.var_2112 == 1) await Func.AutoDraw(10);
    Gvar.var_2112 = 0;

    // モンスターハウス侵入判定
    if (Gvar.var_96 >= 1 && Gvar.var_201 == Gvar.var_204) {
        Gvar.var_240 = 0;
        await Func.func074(); // モンスターハウスメッセージ
    }
    // 店出退店判定
    if (Gvar.var_72[Gvar.var_236][Gvar.var_237] >= 1 && Gvar.var_72[Gvar.var_66][Gvar.var_67] == 0 && Gvar.var_85 == 0) {
        await Func.func722(); // 店から出た→泥棒判定
    }
    if (Gvar.var_72[Gvar.var_236][Gvar.var_237] == 0 && Gvar.var_72[Gvar.var_66][Gvar.var_67] >= 1
        && Gvar.var_85 == 0 && Gvar.var_210 == 0) {
        if (Gvar.var_66 != Gvar.var_236 || Gvar.var_67 != Gvar.var_237) {
            Gvar.var_240 = 0;
            await Func.func706(); // トラサルディー入店メッセージ
        }
    }
    Gvar.var_383 = 1;
}

export { func499 }
