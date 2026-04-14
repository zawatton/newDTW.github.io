/**
 * func470 — ヤバいものへアイテムを入れた際の特殊動作処理 (id 805/806/807/815/818)
 *
 * func469 (ヤバいものへ入れる) の最後に呼ばれ、容器ごとの特殊効果を発動する。
 *
 * 各 yabaimono_id の動作:
 *   805 ｸﾞｯﾁｮの死体: 入れた disc に応じて専用 BGM 再生 (Music.func115)
 *   806 ｶﾙﾈの死体:   識別済みなら買取価格に加算してから消滅
 *   807 DIOの骨:     直前スロットの disc と今回入れた disc を合成し能力統合
 *                    特定組合せで合成形 disc (395/396/397/398) に変化
 *   815 ｴﾙﾒｪｽのｱﾚ:  入れた要素を次スロットへ複製 (アイテム増殖)
 *   818 送信壷:      var_407 && var_536 のとき func0971 経由で 806 と同等処理
 *
 * リファクタ履歴:
 *   - 4箇所の "(Var3+Var4)*50 + 識別済なら Var19*500" 価格計算を calcSellPrice() に集約
 *   - 806/818 の slot 消滅処理 (8行) を removeYabaiSlot() に集約
 *   - 3組の特殊合成 (398/395/397) を SPECIAL_COMBOS テーブル化
 *   - 元 213行 → 約180行
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

/**
 * 識別済みアイテムの売価計算。
 *   var_482 = (count + status) * 50
 *   abilities > 1 なら + abilities * 500
 * 戻り値はそのまま Gvar.var_482 に書かれる。
 */
function calcSellPrice(count: number, status: number, abilities: number): number {
    let p = (count + status) * 50;
    if (abilities > 1) p += abilities * 500;
    return p;
}

/** ヤバいものスロット (var_486[var_682][var_683]) の消滅処理 */
function removeYabaiSlot(): void {
    Gvar.var_233[Gvar.var_1876].Var8 -= 1;
    for (let i = 0; i < 30; i++) {
        Gvar.var_486[Gvar.var_682][Gvar.var_683][i] = 0;
    }
}

/**
 * 識別済アイテムの買取価格を count_buying_price に加算する 806/818 共通処理。
 * 入れた本人 (var_233[var_225]) を見て、識別済 (Var11==1) なら売価計算 + 加算。
 */
async function addCursorItemSellPriceIfIdentified(): Promise<void> {
    const cur = Gvar.var_233[Gvar.var_225];
    if (cur.Var11 != 1) return;
    Gvar.belongings_item_list = cur.Var0;
    await Func.func492(); // アイテムリスト呼び出し (buying_price 設定)
    Gvar.var_482 = calcSellPrice(cur.Var3, cur.Var4, cur.Var19);
    Gvar.count_buying_price += Gvar.buying_price + Gvar.var_482;
}

/** 807 DIOの骨: 合成不能な with-disc ID 一覧 (既に合成形/特殊disc) */
const NON_FUSE_WITH_IDS = new Set<number>([100, 398, 108, 110, 113, 118, 123]);

/** 807 DIOの骨: 二項合成テーブル (base + with → result, var_2097 はメッセージ分岐用) */
type SpecialCombo = { base: number; with_: number; result: number; mark: number; setSlot20: boolean };
const SPECIAL_COMBOS: SpecialCombo[] = [
    // 100:ｽﾀｰ･ﾌﾟﾗﾁﾅ + 111:ｻﾞ･ﾜｰﾙﾄﾞ → 398:ｽﾀﾌﾟﾗｻﾞﾜｰﾙﾄﾞ
    { base: 100, with_: 111, result: 398, mark: 1, setSlot20: false },
    // 112:ｷﾗｰ･ｸｨｰﾝ + 204:ｼｱｰﾊｰﾄｱﾀｯｸ → 395:ﾊﾞｲﾂｧ･ﾀﾞｽﾄ
    { base: 112, with_: 204, result: 395, mark: 2, setSlot20: true },
    // 304:ｳｪｻﾞｰﾘﾎﾟｰﾄ + 114:ﾎﾜｲﾄｽﾈｲｸ → 397:ﾍﾋﾞｰ･ｳｪｻﾞｰ
    { base: 304, with_: 114, result: 397, mark: 4, setSlot20: true },
];

/** 396:ﾒｲﾄﾞ･ｲﾝ･ﾍﾌﾞﾝ 合成条件: ﾎﾜｲﾄｽﾈｲｸ(114) base に以下 4種以上吸収済 */
const HEAVEN_REQUIRED_DISCS = new Set<number>([107, 116, 201, 202]);

async function func470(this: any): Promise<void> {
    Adap.dbgprt(470);

    const yid = Gvar.yabaimono_id;

    // ----- 805 ｸﾞｯﾁｮの死体: BGM 再生 -----
    if (yid == 805) {
        await Music.func115();
        return;
    }

    // ----- 806 ｶﾙﾈの死体: 識別済なら売価加算してから消滅 -----
    if (yid == 806) {
        await addCursorItemSellPriceIfIdentified();
        removeYabaiSlot();
        return;
    }

    // ----- 818 送信壷: var_407 && var_536 のとき func0971 経由で同等処理 -----
    if (yid == 818) {
        if (Gvar.var_407 == 1 && Gvar.var_536 == 1) {
            await Func.func0971();
            await addCursorItemSellPriceIfIdentified();
            removeYabaiSlot();
        }
        return;
    }

    // ----- 815 ｴﾙﾒｪｽのｱﾚ: 入れた要素を次スロットへ複製 -----
    if (yid == 815 && Gvar.var_233[Gvar.var_1876].Var7 >= 1) {
        Gvar.var_2088 = 0;
        Gvar.var_233[Gvar.var_1876].Var8 += 1;
        Gvar.var_233[Gvar.var_1876].Var7 -= 1;
        Gvar.var_2089 = Gvar.var_683 + 1;
        for (let i = 0; i < 30; i++) {
            Gvar.var_486[Gvar.var_682][Gvar.var_2089][i] = Gvar.var_486[Gvar.var_682][Gvar.var_683][i];
        }
        return;
    }

    // ----- 807 DIOの骨: 直前スロットと現スロットの disc を合成 -----
    if (yid != 807) return;

    const bag = Gvar.var_486[Gvar.var_682];
    const cur = bag[Gvar.var_683];

    // 合成不可な with-disc は即終了
    if (cur[0] < 100 || cur[0] >= 400) return;
    if (NON_FUSE_WITH_IDS.has(cur[0])) return;

    Gvar.var_2089 = Gvar.var_683 - 1;
    if (Gvar.var_2089 <= 0) return;

    Gvar.var_2090 = Gvar.var_2089; // base slot
    Gvar.var_2091 = Gvar.var_683;  // with slot
    const base = bag[Gvar.var_2090];
    const wth  = bag[Gvar.var_2091];

    // base も disc 範囲でなければ終了
    if (base[0] < 100 || base[0] >= 400) return;

    Gvar.base_disc_list = base[0];
    Gvar.with_disc_list = wth[0];
    Gvar.belongings_item_list = base[0];
    await Func.func492();

    // ----- with の能力 (slot 20 から var_2092 個) を base の能力スロットに吸収 -----
    Gvar.var_2092 = wth[19];
    Gvar.var_2093 = 20;
    if (base[5] != 0) {
        for (let n = 0; n < Gvar.var_2092; n++) {
            Gvar.var_2094 = 20;
            for (let k = 0; k < 10; k++) {
                Gvar.var_2095 = 0;
                if (base[Gvar.var_2094] == wth[Gvar.var_2093]) {
                    Gvar.var_2095 = 1;
                    break;
                }
                if (base[Gvar.var_2094] == 0) {
                    Gvar.var_2096 = Gvar.var_2094;
                    break;
                }
                Gvar.var_2094 += 1;
            }
            if (Gvar.var_2095 == 0) {
                base[Gvar.var_2096] = wth[Gvar.var_2093];
                base[19] += 1;
                base[5]  -= 1;
            }
            if (base[5] == 0) break;
            Gvar.var_2093 += 1;
        }
    }

    // ----- ステータス Var4 加算 (dungeon 5 では加算なし) -----
    if (Gvar.dungeon_number != 5) {
        base[4] = Math.min(base[4] + wth[4], 99);
    }

    // ----- 呪い/祝福 (Var12) 伝播 -----
    if (wth[12] == 1 || base[12] == 1) base[12] = 1;
    if (wth[12] == 2 || base[12] == 2) base[12] = 2;

    // ----- with が識別済なら売価を buying_price と count_buying_price に加算 (1回目) -----
    if (wth[11] == 1) {
        Gvar.belongings_item_list = wth[0];
        await Func.func492();
        Gvar.var_106 = 1;
        Gvar.var_482 = calcSellPrice(wth[3], wth[4], wth[19]);
        Gvar.buying_price += Gvar.var_482;
        Gvar.count_buying_price += Gvar.buying_price;
    }

    base[14] = 1; // 合成済フラグ
    Gvar.belongings_item_list = base[0];
    Gvar.var_2097 = 0;

    // ----- 二項合成テーブル -----
    for (const c of SPECIAL_COMBOS) {
        if (Gvar.base_disc_list == c.base && Gvar.with_disc_list == c.with_) {
            Gvar.var_2097 = c.mark;
            base[0] = c.result;
            Gvar.var_862[c.result][0] = 1;
            if (c.setSlot20) base[20] = c.result;
            break;
        }
    }

    // ----- 396:ﾒｲﾄﾞ･ｲﾝ･ﾍﾌﾞﾝ: ﾎﾜｲﾄｽﾈｲｸ(114) base に [107/116/201/202] 4種以上吸収済 -----
    if (Gvar.base_disc_list == 114) {
        Gvar.var_2098 = 21;
        Gvar.var_2099 = 0;
        for (let i = 0; i < 9; i++) {
            if (HEAVEN_REQUIRED_DISCS.has(base[Gvar.var_2098])) Gvar.var_2099++;
            Gvar.var_2098++;
        }
        if (Gvar.var_2099 >= 4) {
            base[0] = 396;
            Gvar.var_862[396][0] = 1;
            base[20] = 396;
        }
    }

    // ----- with 識別済の売価加算 (2回目: HSP 原典通り重複実行) -----
    if (wth[11] == 1) {
        Gvar.var_106 = 1;
        Gvar.belongings_item_list = wth[0];
        await Func.func492();
        Gvar.var_482 = calcSellPrice(wth[3], wth[4], wth[19]);
        Gvar.buying_price += Gvar.var_482;
        Gvar.count_buying_price += Gvar.buying_price;
    }

    // ----- with スロットを消滅 (func434) -----
    Gvar.var_2100 = Gvar.var_225;
    Gvar.var_225 = Gvar.var_2091;
    await Func.func434();
    Gvar.var_233[Gvar.var_1876].Var7 -= 1;
    Gvar.var_225 = Gvar.var_2100;
}

export { func470 }
