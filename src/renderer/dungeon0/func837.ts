import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 店のアイテムを購入せずに帰還した際、NPC マリリン・マンソンの登場処理
async function func837(this: any) {
        Adap.dbgprt(837);
        Gvar.var_3204 = 0;
        Gvar.var_1056 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            if (Gvar.var_233[Gvar.var_1056].Var0 >= 800 && Gvar.var_233[Gvar.var_1056].Var0 < 900) {
                Gvar.var_484 = 1;
                Gvar.var_485 = Gvar.var_233[Gvar.var_1056].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (Gvar.var_486[Gvar.var_485][Gvar.var_484][11] == 1 && Gvar.var_486[Gvar.var_485][Gvar.var_484][0] != 0) {
                        Gvar.var_3205 = Gvar.var_484;
                        Gvar.var_220 = 1; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                        Gvar.var_682 = Gvar.var_485;
                        Gvar.var_1876 = Gvar.var_1056;
                        await Func.func838();
                        Gvar.var_3204 = 1;
                        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                        Gvar.var_484 = 1;
                        cnt3 = -1;
                        continue;
                    }
                    Gvar.var_484 = Gvar.var_484 + 1;
                }
            }
            if (Gvar.var_233[Gvar.var_1056].Var11 == 1 && Gvar.var_233[Gvar.var_1056].Var0 != 0) {
                Gvar.var_3205 = Gvar.var_1056;
                await Func.func838();
                Gvar.var_3204 = 1;
                Gvar.var_1056 = 1;
                Gvar.var_3206 = 1;
                cnt1 = -1;
                continue;
            }
            Gvar.var_1056 = Gvar.var_1056 + 1;
        }
        if (Gvar.var_3204 == 1) {
            Gvar.var_3204 = 0;
            await Func.setMessage1("ﾏﾘﾘﾝﾏﾝｿﾝ「また 会オウ！」", "", 7, true, false, true);
            Gvar.var_1470 = 5;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1470 = 6;
            await Func.AutoDraw(2);
            Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1470 = 0;
        return;
}

export {func837}
