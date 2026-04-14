/**
 * func421 — func421 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func421(this: any) {
        Adap.dbgprt(421);
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            await Func.func423();
            return;
        }
        Gvar.var_233[Gvar.var_225].Var3 = Gvar.var_233[Gvar.var_225].Var3 - 1;
        if (Gvar.var_233[Gvar.var_225].Var11 == 1) {
            Gvar.var_106 = 1;
            Gvar.count_buying_price = Gvar.count_buying_price + 50;
        }
        Gvar.var_1953 = 0;
        if (Gvar.var_233[Gvar.var_225].Var0 >= 400 && Gvar.var_233[Gvar.var_225].Var0 < 500 && Gvar.var_233[Gvar.var_225].Var3 <= 0) {
            await Func.AutoDraw(10);
            Gvar.var_1953 = 1;
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
            await Func.func492(); // アイテムリスト呼び出し
            await Func.setMessage("" + Gvar.item_name + "は",
                                    "ｽﾀﾝﾄﾞﾊﾟﾜｰが尽きて消滅した", 7, false, false, false);
            if (Gvar.var_233[Gvar.var_225].Var11 == 1) {
                Gvar.var_106 = 1;
                Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
            }
            if (Gvar.var_479[Gvar.var_225] == 1) {
                await Music.func106(); // BGM選曲呼び出し割り振り
                Gvar.var_479 = Adap.dim(40);
                Gvar.var_250 = 0;
                Gvar.shageki_disc_id = 0;
            }
            await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        }
        return;
}

export {func421}
