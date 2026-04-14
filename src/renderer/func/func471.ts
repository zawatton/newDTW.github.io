/**
 * func471 — func471 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func471(this: any) {
        Adap.dbgprt(471);
        // No = 808 聖人の眼球へアイテムを入れた時の処理
        if (Gvar.yabaimono_id == 808) {
            Gvar.var_486[Gvar.var_682][Gvar.var_683][14] = 1;
            Gvar.var_2101 = Gvar.var_486[Gvar.var_682][Gvar.var_683][0];
            Gvar.var_862[Gvar.var_2101][0] = 1;
        }
        // No = 809 聖人の左腕へアイテムを入れた時の処理
        if (Gvar.yabaimono_id == 809) {
            if (Gvar.var_486[Gvar.var_682][Gvar.var_683][12] == 1) {
                Gvar.var_486[Gvar.var_682][Gvar.var_683][12] = 0;
            }
            if (Gvar.var_486[Gvar.var_682][Gvar.var_683][15] == 1 || Gvar.var_486[Gvar.var_682][Gvar.var_683][15] == 2) {
                Gvar.var_486[Gvar.var_682][Gvar.var_683][15] = 0;
            }
            // No = 570 ジョナサンのDISCを入れた時の処理
            if (Gvar.var_486[Gvar.var_682][Gvar.var_683][0] == 570) {
                if (Gvar.var_486[Gvar.var_682][Gvar.var_683][11] == 1) {
                    Gvar.count_buying_price = Gvar.count_buying_price + 500;
                }
                for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                    Gvar.var_486[Gvar.var_682][Gvar.var_683][cnt3] = 0;
                }
                Gvar.var_486[Gvar.var_682][Gvar.var_683][0] = 414; // Ver0.1401にて修正。414 → 415 タスクact1へ変更。
                Gvar.var_486[Gvar.var_682][Gvar.var_683][3] = 5; // 変化したタスクact1の射撃回数
                Gvar.var_862[414][0] = 1;
            }
        }
        // No = 816 ミキタカのカバンへアイテムを入れた時の処理
        if (Gvar.yabaimono_id == 816) {
            if (Gvar.var_486[Gvar.var_682][Gvar.var_683][11] == 1) {
                Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_683][0];
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_482 = 0;
                Gvar.var_482 = (Gvar.var_486[Gvar.var_682][Gvar.var_683][3] + Gvar.var_486[Gvar.var_682][Gvar.var_683][4]) * 50;
                if (Gvar.var_486[Gvar.var_682][Gvar.var_683][19] > 1) {
                    Gvar.var_482 = Gvar.var_486[Gvar.var_682][Gvar.var_683][19] * 500 + Gvar.var_482;
                }
                Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price + Gvar.var_482;
            }
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                if (cnt2 != 11) {
                    Gvar.var_486[Gvar.var_682][Gvar.var_683][cnt2] = 0; // 0.1405 カウンターがリンクしていなかったので修正 cnt3 → cnt2
                }
            }
            Gvar.var_866 = 0;
            Gvar.var_1736 = Adap.rnd(100);
            if (Gvar.var_1736 >= 0 && Gvar.var_1736 < 15) {
                Gvar.var_1735 = 6;
            }
            if (Gvar.var_1736 >= 15 && Gvar.var_1736 < 32) {
                Gvar.var_1735 = 1;
            }
            if (Gvar.var_1736 >= 32 && Gvar.var_1736 < 53) {
                Gvar.var_1735 = 5;
            }
            if (Gvar.var_1736 >= 53 && Gvar.var_1736 < 71) {
                Gvar.var_1735 = 3;
            }
            if (Gvar.var_1736 >= 71 && Gvar.var_1736 < 76) {
                Gvar.var_1735 = 5;
            }
            if (Gvar.var_1736 >= 76 && Gvar.var_1736 < 86) {
                Gvar.var_1735 = 4;
            }
            if (Gvar.var_1736 >= 86 && Gvar.var_1736 < 100) {
                Gvar.var_1735 = 9;
            }
            if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
                // No = 1 なので、ホテルの外
                Gvar.dungeon_number = 1;
            }
            await Func.func385(); // 各ダンジョンごとの出現アイテム&出現確率管理
            if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
                // No = 0 なので、拠点(ホテル、亀、)
                Gvar.dungeon_number = 0;
            }
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                Gvar.var_486[Gvar.var_682][Gvar.var_683][cnt2] = Gvar.var_78[Gvar.var_866]["Var" + cnt2];
            }
            Gvar.var_486[Gvar.var_682][Gvar.var_683][11] = 0;
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                Gvar.var_78[0]["Var" + cnt2] = 0;
            }
            return;
        }
        return;
}

export {func471}
