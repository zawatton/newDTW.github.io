import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// ザ・ハンド
// 旧 func646
async function func646(this: any) {
        Adap.dbgprt(646);
        await Func.func426();
        Gvar.var_2986 = Gvar.var_553;
        Gvar.var_233[Gvar.var_2986].Var18 = Gvar.var_233[Gvar.var_2986].Var18 + 1;
        if (Gvar.var_233[Gvar.var_2986].Var18 <= 10) {
            Gvar.var_2987 = 1;
        }
        if (Gvar.var_233[Gvar.var_2986].Var18 >= 11 && Gvar.var_233[Gvar.var_2986].Var18 <= 15) {
            Gvar.var_2987 = Adap.rnd(12);
        }
        if (Gvar.var_233[Gvar.var_2986].Var18 >= 16 && Gvar.var_233[Gvar.var_2986].Var18 <= 21) {
            Gvar.var_2987 = Adap.rnd(10);
        }
        if (Gvar.var_233[Gvar.var_2986].Var18 >= 22 && Gvar.var_233[Gvar.var_2986].Var18 <= 24) {
            Gvar.var_2987 = Adap.rnd(8);
        }
        if (Gvar.var_233[Gvar.var_2986].Var18 >= 25 && Gvar.var_233[Gvar.var_2986].Var18 <= 27) {
            Gvar.var_2987 = Adap.rnd(6);
        }
        if (Gvar.var_233[Gvar.var_2986].Var18 >= 28 && Gvar.var_233[Gvar.var_2986].Var18 <= 30) {
            Gvar.var_2987 = Adap.rnd(4);
        }
        if (Gvar.var_233[Gvar.var_2986].Var18 >= 31) {
            Gvar.var_2987 = Adap.rnd(2);
        }
        if (Gvar.var_2987 == 0) {
            Gvar.var_2985 = 1;
            Gvar.belongings_item_list = Gvar.kougeki_disc_id ;
            await Func.func492(); // アイテムリスト呼び出し
            await Func.AutoDraw(10);
            Adap.DSPLAY(172);
            await Func.setMessage("" + Gvar.item_name + "は", "使いすぎて壊れてしまった。", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.belongings_item_list = Gvar.kougeki_disc_id ;
            await Music.func106(); // BGM選曲呼び出し割り振り
            await Func.func426();
            Gvar.var_476 = Adap.dim(40);
            Gvar.var_580 = Gvar.var_580 - Gvar.var_894;
            Gvar.var_894 = 0;
            Gvar.kougeki_disc_id  = 0;
            await Func.func494();
            Gvar.var_225 = Gvar.var_553;
            await Func.func433(); // アイテム配列(所持アイテム)初期化関数
            await Func.func494();
            Gvar.var_896 = 0;
            Gvar.var_2926 = 0;
        }
        return;
}

export {func646}
