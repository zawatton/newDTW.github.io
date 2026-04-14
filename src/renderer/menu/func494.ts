/**
 * func494 — 装備 disc 全解除 + 共鳴再計算
 *
 * 全装備 disc を一度クリア (Gvar.equip_disc = dim(400)) して、
 * 攻撃/防御/能力 disc を 3スロット個別に再装備し直し、共鳴計算 (func496) を呼ぶ。
 * 主にメニュー外からの「装備状態リフレッシュ」ハンドラ。
 *
 * シアハートアタック (id=204): クリア前に var_352 から var_1047 を引き、
 *   再装備後に var_352/10 + var_566 を加算 (HP上限+10%補正)。
 * メイド・イン・ヘブン (id=396): 倍速移動フラグ var_157 をクリア前にOFF、後にON。
 * メタリカ (id=320): var_140 (磁力フィールド系) をクリア。
 *
 * 末尾: ワープタイル踏み + 特定無効化条件 → func499 (フロア内ワープ)。
 *
 * リファクタ履歴:
 *   - 攻撃/防御/能力 disc の 3 重複ブロック → SLOTS テーブル + ループ
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/** disc スロット (id var, var_2179 source, var_2180 種別タグ, equip 関数) */
const DISC_SLOTS: ReadonlyArray<readonly ['kougeki_disc_id' | 'bougyo_disc_id' | 'nouryoku_disc_id',
                                          'var_553' | 'var_554' | 'var_555',
                                          number,
                                          () => Promise<void>]> = [
    ['kougeki_disc_id', 'var_553', 1, () => Func.func426()],
    ['bougyo_disc_id',  'var_554', 2, () => Func.func427()],
    ['nouryoku_disc_id','var_555', 4, () => Func.func428()],
];

async function func494(this: any): Promise<void> {
    Adap.dbgprt(494);

    // クリア前: シアハートアタック (HP補正引き戻し), メイド・イン・ヘブン (倍速OFF)
    if (Gvar.equip_disc[204] == 1) Gvar.var_352 -= Gvar.var_1047;
    if (Gvar.equip_disc[396] == 1) Gvar.var_157 = 0; // 倍速移動フラグOFF

    Gvar.equip_disc = Adap.dim(400);

    // 攻撃/防御/能力 disc を再装備
    for (const [idVar, srcVar, kind, equipFn] of DISC_SLOTS) {
        if ((Gvar as any)[idVar] > 0) {
            await equipFn();
            Gvar.var_2179 = (Gvar as any)[srcVar];
            Gvar.var_2180 = kind;
            await Func.func495(); // 装備disc反映
        }
    }

    // 再装備後の補正: シアハートアタック (HP上限 +var_352/10 +var_566, 上限999)
    if (Gvar.equip_disc[204] == 1) {
        Gvar.var_1047 = Math.floor(Gvar.var_352 / 10) + Gvar.var_566;
        if (Gvar.var_352 + Gvar.var_1047 > 999) {
            Gvar.var_1047 = Math.max(0, 999 - Gvar.var_352);
        }
        Gvar.var_352 += Gvar.var_1047;
    }
    if (Gvar.equip_disc[320] == 1) Gvar.var_140 = 0; // メタリカ
    if (Gvar.equip_disc[396] == 1) {                 // メイド・イン・ヘブン
        Gvar.var_157 = 1; // 倍速移動フラグON
        Gvar.var_133 = 0;
    }

    if (Gvar.var_352 <= 1) Gvar.var_352 = 1;
    if (Gvar.var_211 >= Gvar.var_352) Gvar.var_211 = Gvar.var_352;

    await Func.func496(); // 装備disc 共鳴組み合わせ計算

    // ワープタイル (var_71==13) 踏み + 特殊無効化条件 → フロア内ワープ
    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] == 13
        && Gvar.nouryoku_disc_id != 202 && Gvar.nouryoku_disc_id != 117
        && Gvar.var_125 == 0 && Gvar.var_1059 == 0) {
        Gvar.var_216 = 1;
        Gvar.var_213 = 0;
        Gvar.var_214 = 0;
        Adap.DSPLAY(216); // ワープ効果音
        await Func.func499(); // フロア内ワープ実行
    }
}

export { func494 }
