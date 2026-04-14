/**
 * func466 — 同種・未識別アイテム (主に射撃disc 400-499) の自動スタック
 *
 * 所持アイテム配列 var_233 を全ペア走査し、以下を満たすペアを「合成」する:
 *   - 両者 Var0 が [400, 500) (射撃disc/矢系)
 *   - Var0 が一致 (同じID)
 *   - Var11 == 0 (未識別 = まだ命名されていない無印スタック)
 *
 * 合成処理:
 *   - 数量 Var3 を加算 (上限 99)
 *   - 装備中フラグ var_479 を生き残る側へ引き継ぎ
 *   - 消える側のスロットを var_225 にして func433 で削除/詰め
 *   - 合成が起きたら配列が変わるので最初からスキャンし直す
 *
 * 呼ばれる場面: func467 (Shift整理) の冒頭。整理前に同種スタックを統合する。
 *
 * リファクタ履歴:
 *   - 二重 for + Gvar 共有カウンタを while + ローカル i/j に整理
 *   - 「合成発生で再スタート」を merged フラグ + ラベル break で素直に表現
 *   - 同一条件式 6項を分割し可読化
 *   - 元 47行 → 約60行 (コメント増)
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func466(this: any): Promise<void> {
    Adap.dbgprt(466);

    // 合成が起きたら配列が縮むので、毎回先頭から再スキャンする
    while (true) {
        let merged = false;

        outer:
        for (let i = 1; i <= Gvar.var_224; i++) {
            const a = Gvar.var_233[i];
            // 受け側が射撃disc範囲 + 未識別でなければスキップ
            if (!(a.Var0 >= 400 && a.Var0 < 500) || a.Var11 !== 0) continue;

            for (let j = i + 1; j <= Gvar.var_224; j++) {
                const b = Gvar.var_233[j];
                if (b.Var0 !== a.Var0) continue; // 同IDのみ
                if (b.Var11 !== 0) continue;     // 相手も未識別であること

                // ----- 合成 -----
                a.Var3 = Math.min(a.Var3 + b.Var3, 99);

                // 装備中 (var_479) を引き継ぐ
                if (Gvar.var_479[j] === 1) {
                    Gvar.var_479[j] = 0;
                    Gvar.var_479[i] = 1;
                    Gvar.var_250 = a.Var0;
                }

                // 消える側を削除 → 配列が詰まる
                Gvar.var_225 = j;
                await Func.func433(); // アイテム配列(所持アイテム)初期化関数

                merged = true;
                break outer;
            }
        }

        if (!merged) break;
    }

    Gvar.Y_axis_item_position = 45;
    Gvar.var_225 = 1;
}

export { func466 }
