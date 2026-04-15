/**
 * func142 — func142 タイトル画面キー操作処理
 *
 * (org原典: newDTW_login / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// タイトル画面キー操作処理
async function func142(this: any) {
        Adap.dbgprt(142);
        Gvar.var_734 = 0;
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func147();
            return;
        }
        if (Gvar.key_X_on == 1) {

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func178(); // 処理確認タイマー(3m秒)
            Gvar.var_599 = 5;
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                Adap.redraw(0);
                await Func.func146(); // ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)
                await Func.func180(); // ロード中の黒画面処理?
                if (Gvar.var_10 >= 1) {
                    await Func.func338();
                }
                await Adap.wait(2);
                Adap.redraw(1);
                Gvar.var_599 = Gvar.var_599 - 1;
            }
            Gvar.var_599 = 0;
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                Adap.redraw(0);
                Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
                Gvar.var_727 = 0;
                Gvar.var_728 = 350;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    Gvar.var_729 = 0;
                    Gvar.var_730 = 720;
                    for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                        Adap.pos(Gvar.var_729, Gvar.var_727);
                        Adap.gcopy(17, Gvar.var_730, Gvar.var_728, 40, 40);
                        Gvar.var_729 = Gvar.var_729 + 40;
                        Gvar.var_730 = Gvar.var_730 + 40;
                    }
                    Gvar.var_727 = Gvar.var_727 + 40;
                    Gvar.var_728 = Gvar.var_728 + 40;
                }
                Adap.pos(36, 110);
                Adap.gcopy(17, 1080, 360, 90, 83);
                await Func.func180(); // ロード中の黒画面処理?
                if (Gvar.var_10 >= 1) {
                    await Func.func338();
                }
                await Adap.wait(2);
                Adap.redraw(1);
                Gvar.var_599 = Gvar.var_599 + 1;
            }
            Adap.pos(0, 0);
            Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
            await Func.func140(); // 不明(タイトル画面処理？)
            return;
        }
        if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
            if (Gvar.var_64 == 0) {
                Gvar.var_64 = 4;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                await Func.func143();
                await Adap.wait(13);
                await Func.func142(); // タイトル画面キー操作処理
                return;
            }
            if (Gvar.var_64 == 1) {
                Gvar.var_64 = 0;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                await Func.func143();
                await Adap.wait(10);
            }
            if (Gvar.var_64 == 2) {
                Gvar.var_64 = 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                await Func.func143();
                await Adap.wait(10);
            }
            if (Gvar.var_64 == 3) {
                Gvar.var_64 = 2;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                await Func.func143();
                await Adap.wait(10);
            }
            if (Gvar.var_64 == 4) {
                Gvar.var_64 = 1; // 2 (魔少年の問題) と 3 (配布サイトへ) は未解析のためスキップ

                Adap.DSPLAY(100); // アイテム選択時の効果音
                await Func.func143();
                await Adap.wait(10);
            }
        }
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
            if (Gvar.var_64 == 4) {
                Gvar.var_64 = 0;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                await Func.func143();
                await Adap.wait(13);
                await Func.func142(); // タイトル画面キー操作処理
                return;
            }
            if (Gvar.var_64 == 3) {
                Gvar.var_64 = 4;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                await Func.func143();
                await Adap.wait(10);
            }
            if (Gvar.var_64 == 2) {
                Gvar.var_64 = 3;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                await Func.func143();
                await Adap.wait(10);
            }
            if (Gvar.var_64 == 1) {
                Gvar.var_64 = 4; // 2 (魔少年の問題) と 3 (配布サイトへ) は未解析のためスキップ

                Adap.DSPLAY(100); // アイテム選択時の効果音
                await Func.func143();
                await Adap.wait(10);
            }
            if (Gvar.var_64 == 0) {
                Gvar.var_64 = 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                await Func.func143();
                await Adap.wait(10);
            }
        }
        await Func.func143();
        await  Adap.await_(25);
        await Func.func142(); // タイトル画面キー操作処理
        return;
}

export {func142}
