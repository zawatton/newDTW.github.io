/**
 * func469 — ヤバいものへの "入れる" 処理
 *
 * 道具画面でヤバいもの (id 800-899) にカーソルを合わせ、選択中アイテムを入れる。
 * 受け入れ可否チェック → 容器側 var_486 に複製 → 元アイテムを削除 → メッセージ表示。
 *
 * リファクタ履歴:
 *   - 5箇所の "入れられない理由" 提示 (10行重複) を rejectInsert(msg) に集約
 *   - var_486 への 24 フィールド複製 (24行) を VAR486_FIELDS テーブル + 1ループに圧縮
 *   - 容器名のメッセージ分岐 (10種) を CONTAINER_LABEL マップ化
 *   - 元 307行 → 約180行
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

/** 受け入れ拒否メッセージを出して敵ターンへ戻す共通処理 */
async function rejectInsert(msg: string): Promise<void> {
    Gvar.open_item_menue = 0; // 道具画面表示フラグ off
    Gvar.var_1866 = 0;
    await Func.setMessage(msg, "", 7, false, false, false);
    await Func.AutoDraw(3);
    Gvar.var_231 = 0;
    Gvar.var_234 = 0;
    Gvar.var_2040 = 0;
    await Func.func009(); // ディアボロ側ターン処理
}

/**
 * var_233 → var_486 にコピーするフィールド添字一覧。
 * Var{N} (N=0,3-6,11-29) を var_486[...][N] に複製する。
 */
const VAR486_FIELD_INDICES: ReadonlyArray<number> = [
    0, 3, 4, 5, 6,
    11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
] as const;

/** yabaimono_id → 容器名 (id 801-804 の専用ヤバいもの, 805+ は別経路) */
const CONTAINER_LABEL: Record<number, string> = {
    801: '形兆のDISCｹｰｽに入れた',
    802: 'ﾄﾗｸﾀｰのﾀｲﾔに入れた',
    803: 'ｻﾝｼﾞｪﾙﾏﾝの紙袋に入れた',
    804: '露伴のｶﾊﾞﾝに入れた',
};

/** yabaimono_id → 識別済 (var_862[id][0]==1) ヤバいものの専用容器名 */
const IDENTIFIED_CONTAINER_LABEL: Record<number, string> = {
    800: '紙の中に入れた',
    805: 'ｸﾞｯﾁｮの死体に入れた',
    806: 'ｶﾙﾈの死体に入れた',
    807: 'DIOの骨に入れた',
    808: '聖人の眼球に入れた',
    809: '聖人の左腕に入れた',
    815: 'ｴﾙﾒｪｽのｱﾚに入れた',
    816: 'ﾐｷﾀｶのｶﾊﾞﾝに入れた',
    817: '乳母車に入れた',
    818: '送信壷に入れた',
};

async function func469(this: any): Promise<void> {
    Adap.dbgprt(469);

    Gvar.yabaimono_id = Gvar.var_233[Gvar.var_1876].Var0;
    const cursorId = Gvar.var_233[Gvar.var_225].Var0;

    // ----- 受け入れ可否チェック群 (拒否なら早期 return) -----

    // ヤバいものをヤバいものに入れることはできない
    if (cursorId >= 800 && cursorId < 900) {
        await rejectInsert("これを入れることはできない");
        return;
    }

    // 801=形兆のDISCｹｰｽ / 802=ﾄﾗｸﾀｰのﾀｲﾔ → DISCのみ受付
    if (Gvar.yabaimono_id == 801 || Gvar.yabaimono_id == 802) {
        const isDisc = !(Gvar.belongings_item_list < 100
                      || (Gvar.belongings_item_list >= 600 && Gvar.belongings_item_list != 700));
        if (!isDisc) {
            await rejectInsert("DISCしか入れることはできない");
            return;
        }
    }

    // 803=ｻﾝｼﾞｪﾙﾏﾝの紙袋 → 食べ物 (600-699) のみ受付
    if (Gvar.yabaimono_id == 803) {
        const isFood = Gvar.belongings_item_list >= 600 && Gvar.belongings_item_list < 700;
        if (!isFood) {
            await rejectInsert("食べ物しか入れることはできない");
            return;
        }
    }

    // 804=露伴のｶﾊﾞﾝ → 本 (750-799 / 900-999) のみ受付
    if (Gvar.yabaimono_id == 804) {
        const isBook = (Gvar.belongings_item_list >= 900 && Gvar.belongings_item_list < 1000)
                    || (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list < 800);
        if (!isBook) {
            await rejectInsert("本しか入れることはできない");
            return;
        }
    }

    // 容器に空きが無い
    if (Gvar.var_233[Gvar.var_1876].Var7 == 0) {
        await rejectInsert("これ以上入れられない");
        return;
    }

    // 装備中のものを入れることはできない (Var12=入れる扱いフラグ)
    Gvar.var_2084 = 0;
    if (Gvar.kougeki_disc_id != 0 && Gvar.var_225 != 0) {
        await Func.func426();
        if (Gvar.var_553 == Gvar.var_225 && Gvar.var_233[Gvar.var_225].Var12 == 1) Gvar.var_2084 = 1;
    }
    if (Gvar.bougyo_disc_id != 0 && Gvar.var_225 != 0) {
        await Func.func427();
        if (Gvar.var_554 == Gvar.var_225 && Gvar.var_233[Gvar.var_225].Var12 == 1) Gvar.var_2084 = 1;
    }
    if (Gvar.nouryoku_disc_id != 0 && Gvar.var_225 != 0) {
        await Func.func428();
        if (Gvar.var_555 == Gvar.var_225 && Gvar.var_233[Gvar.var_225].Var12 == 1) Gvar.var_2084 = 1;
    }
    if (Gvar.var_2084 == 1) {
        await rejectInsert("" + Gvar.item_name + "を");
        return;
    }

    // ----- 受け入れ確定: 容器側に複製 -----

    Gvar.var_2085 = Gvar.var_233[Gvar.var_225].Var0;
    Gvar.disc_rarity = Gvar.var_233[Gvar.var_225].Var13;
    Gvar.open_item_menue = 0;
    if (Gvar.var_2040 == 1) {
        await Func.func479();
    }
    Gvar.var_233[Gvar.var_1876].Var8 += 1;
    Gvar.var_233[Gvar.var_1876].Var7 -= 1;
    if (Gvar.var_233[Gvar.var_1876].Var11 == 1 && Gvar.yabaimono_id >= 805) {
        Gvar.count_buying_price += 100;
    }
    Gvar.var_683 = Gvar.var_233[Gvar.var_1876].Var8;

    // var_233[var_225].VarN → var_486[var_682][var_683][N]  (24 フィールド)
    const src = Gvar.var_233[Gvar.var_225] as any;
    const dst = Gvar.var_486[Gvar.var_682][Gvar.var_683];
    for (const n of VAR486_FIELD_INDICES) {
        dst[n] = src['Var' + n];
    }

    await Func.func470(); // disc同士の合成 (DIOの骨)

    // 装備中フラグの解除と再描画
    Gvar.var_1977 = 0;
    if (Gvar.var_476[Gvar.var_225] == 1) {
        Gvar.var_476[Gvar.var_225] = 0;
        Gvar.kougeki_disc_id = 0;
        Gvar.var_580 -= Gvar.var_894;
        Gvar.var_894 = 0;
        await Func.func494();
        Gvar.var_1977 = 1;
    }
    if (Gvar.var_477[Gvar.var_225] == 1) {
        Gvar.var_477[Gvar.var_225] = 0;
        Gvar.bougyo_disc_id = 0;
        Gvar.var_581 -= Gvar.var_895;
        Gvar.var_895 = 0;
        await Func.func494();
        Gvar.var_1977 = 1;
    }
    if (Gvar.var_479[Gvar.var_225] == 1) {
        Gvar.var_479[Gvar.var_225] = 0;
        Gvar.shageki_disc_id = 0;
        Gvar.var_250 = 0;
        Gvar.var_1977 = 1;
    }
    if (Gvar.var_478[Gvar.var_225] == 1) {
        Gvar.var_478[Gvar.var_225] = 0;
        Gvar.nouryoku_disc_id = 0;
        await Func.func494();
        Gvar.var_1977 = 1;
    }
    if (Gvar.var_1977 == 1 && Gvar.yabaimono_id != 805) {
        Gvar.belongings_item_list = Gvar.var_2085;
        await Music.func106(); // BGM選曲
    }
    Gvar.belongings_item_list = Gvar.var_2085;
    await Func.func492(); // アイテムリスト呼び出し
    if (Gvar.var_2040 == 0) {
        await Func.func433(); // 所持アイテム配列再構築
    }
    Adap.DSPLAY(130);
    Gvar.var_1866 = 0;

    // ----- 容器名つきメッセージ -----
    const yid = Gvar.yabaimono_id;
    const itemPrefix = "" + Gvar.item_name + "を";
    if (CONTAINER_LABEL[yid] !== undefined) {
        await Func.setMessage(itemPrefix, CONTAINER_LABEL[yid], 7, false, false, false);
    } else if (yid >= 805 || yid == 800) {
        if (Gvar.var_862[yid][0] == 0) {
            await Func.setMessage(itemPrefix, "ヤバイものに入れた", 7, false, false, false);
        } else {
            const label = IDENTIFIED_CONTAINER_LABEL[yid];
            if (label !== undefined) {
                await Func.setMessage(itemPrefix, label, 7, false, false, false);
            }
        }
    }

    await Func.AutoDraw(3);
    await Func.func051(); // キー入力待ち

    // ｸﾞｯﾁｮ(805)+ﾋﾟｯﾂｧ(631) 特殊処理
    if (yid == 805 && Gvar.var_2085 == 631 && Gvar.var_683 >= 2) {
        Gvar.var_2086 = Gvar.var_683 - 1;
        if (Gvar.var_486[Gvar.var_682][Gvar.var_2086][0] >= 600
         && Gvar.var_486[Gvar.var_682][Gvar.var_2086][0] <= 605) {
            await Func.func472(); // ｸﾞｯﾁｮにﾋﾟｯﾂｧ&トマトチーズのサラダ
        }
    }

    await Func.func471();
    Gvar.var_213 = 1;
    if (Gvar.var_2040 == 1) Gvar.var_2040 = 0;

    if (Gvar.var_234 == 1) {
        Gvar.var_2087 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
        Gvar.var_78[Gvar.var_2087].Var8 = Gvar.var_233[0].Var8;
        Gvar.var_78[Gvar.var_2087].Var7 = Gvar.var_233[0].Var7;
    }

    // カーソル位置の補正
    if (Gvar.var_225 > Gvar.var_1876)      Gvar.var_226 = Gvar.var_1876;
    else if (Gvar.var_225 < Gvar.var_1876) Gvar.var_226 = Gvar.var_1876 - 1;
    if (Gvar.var_225 == 0)                 Gvar.var_226 = Gvar.var_1876;

    Gvar.var_231 = 0;
    Gvar.var_234 = 0;
    Gvar.var_2040 = 0;
    Gvar.var_217 = 1;
    await Func.func019(); // ターン変更処理
}

export { func469 }
