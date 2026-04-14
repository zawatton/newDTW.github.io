/**
 * func067 — func067 亀のジッパーでアイテムを捨てる動作処理
 *
 * ヴェネチアホテルや亀、酒場の設定
 *
 * (org原典: newDTW_dungeon0 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func067
async function func067(this: any) {
        Adap.dbgprt(67);
        Gvar.var_549 = Gvar.var_550;
        Gvar.var_551 = 0;
        Gvar.var_552 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func426();
            await Func.func427();
            await Func.func428();
            await Func.func429();
            if (Gvar.var_233[Gvar.var_552].Var0 != 0 && Gvar.var_552 != Gvar.var_553 && Gvar.var_552 != Gvar.var_554 && Gvar.var_552 != Gvar.var_555 && Gvar.var_552 != Gvar.var_556) {
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_552].Var0;
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_550 = Gvar.var_550 + Gvar.buying_price;
                Gvar.var_225 = Gvar.var_552;
                await Func.func433(); // アイテム配列(所持アイテム)初期化関数
                Gvar.var_551 = 1;
                cnt1 = -1;
                continue;
            }
            Gvar.var_552++;
        }
        // アイテムを持っているが、装備している状態で捨てられない場合
        if (Gvar.var_551 == 0) {
            await Func.setMessage("捨てられるものがない。",
                                   "", 7, false, false, false);
            await Func.AutoDraw(5);
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        await Func.setMessage("全て捨てた。",
                               "", 7, false, false, false);
        Adap.DSPLAY(148);

        // 亀の倉庫 成長計算式
        Gvar.var_557 = 1;
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_557++;
        }
        Gvar.var_557 = 0;
        if (Gvar.var_550 > 999999) {
            Gvar.var_550 = 999999;
        }
        Gvar.var_558 = 0;
        // Gvar.var_559は亀の成長レベル(拡張レベル)、var_550は投資した栄養の合計
        if (Gvar.var_559 == 0 && Gvar.var_550 >= 10000) { // Ver0.1401にて修正。5000 → 10000
            Gvar.var_559 = 1;
            Gvar.var_558 = 1;
        }
        if (Gvar.var_559 == 1 && Gvar.var_550 >= 20000) { // Ver0.1401にて修正。10000 → 20000
            Gvar.var_559 = 2;
            Gvar.var_558 = 1;
        }
        if (Gvar.var_559 == 2 && Gvar.var_550 >= 40000) { // Ver0.1401にて修正。20000 → 40000
            Gvar.var_559 = 3;
            Gvar.var_558 = 1;
        }
        if (Gvar.var_559 == 3 && Gvar.var_550 >= 80000) { // Ver0.1401にて修正。40000 → 80000
            Gvar.var_559 = 4;
            Gvar.var_558 = 1;
        }
        if (Gvar.var_558 == 1) {
            await Func.func293(); // ダンジョンマップ初期化処理(+ヴェネチアホテル)
            Gvar.var_560 = 1;
            Gvar.var_561 = 5; // マップX軸原点の初期値5 (安易に変更すると壁の中になるのでワープしてしまう)
            Gvar.var_562 = 5; // Ver0.1404にて修正。0 → 5。実験中に0へ変更したのを戻し忘れ。マップY軸原点の初期値5 (安易に変更すると壁の中になるのでワープしてしまう)
            if (Gvar.var_559 == 0) {
                await Func.func288(); // ヴェネチアホテル+亀初期マップ+ローマ・ティベレ河マップ配置処理(亀の成長0)
            }
            if (Gvar.var_559 == 1) {
                await Func.func289(); // ヴェネチアホテル+亀マップ配置処理(亀の成長1)
            }
            if (Gvar.var_559 == 2) {
                await Func.func290(); // ヴェネチアホテル+亀マップ配置処理(亀の成長2)
            }
            if (Gvar.var_559 == 3) {
                await Func.func291(); // ヴェネチアホテル+亀マップ配置処理(亀の成長3)
            }
            if (Gvar.var_559 == 4) {
                await Func.func292(); // ヴェネチアホテル+亀マップ配置処理(亀の成長4)
            }
            await Func.func248();
            await Func.setMessage("亀はアイテムを養分として",
                                   "成長したようだ。", 7, false, false, false);
            if (Gvar.var_559 == 4) {
                await Func.setMessage("亀はアイテムを養分として",
                                       "最大まで成長したようだ。", 7, false, false, false);
            }
            await Func.AutoDraw(5);
        }
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func067}
