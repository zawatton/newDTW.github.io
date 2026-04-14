/**
 * func369 — func369 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func369(this: any) {
        Adap.dbgprt(369);
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_X_on == 1) {
            Gvar.var_1209 = 0;
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            Gvar.var_221 = 1;

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func462(); // アイテムidごとに区分分け関数
            return;
        }
        if (Gvar.var_802 == 9999 && Gvar.var_802 >= 100 && Gvar.var_802 < 400 && Gvar.var_1661 == 1) {
            if (Gvar.var_257 == 1) {
                Gvar.var_1660++;
                if (Gvar.var_1660 > 3) {
                    Gvar.var_1660 = 0;
                }
                if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                    Gvar.var_233[Gvar.var_225].Var13 = Gvar.var_1660;
                    if (Gvar.var_225 == 0) {
                        Gvar.var_1676 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                        Gvar.var_78[Gvar.var_1676].Var13 = Gvar.var_1660;
                    }
                }
                if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                    Gvar.var_486[Gvar.var_682][Gvar.var_225][13] = Gvar.var_1660;
                }

                Adap.DSPLAY(100); // アイテム選択時の効果音
                await Func.AutoDraw(5);
                await Func.func369();
                return;
            }
            if (Gvar.var_254 == 1) {
                Gvar.var_1660--;
                if (Gvar.var_1660 < 0) {
                    Gvar.var_1660 = 3;
                }
                if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                    Gvar.var_233[Gvar.var_225].Var13 = Gvar.var_1660;
                    if (Gvar.var_225 == 0) {
                        Gvar.var_1676 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                        Gvar.var_78[Gvar.var_1676].Var13 = Gvar.var_1660;
                    }
                }
                if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                    Gvar.var_486[Gvar.var_682][Gvar.var_225][13] = Gvar.var_1660;
                }

                Adap.DSPLAY(100); // アイテム選択時の効果音
                await Func.AutoDraw(5);
                await Func.func369();
                return;
            }
        }
        await Func.func369();
        return;
}

export {func369}
