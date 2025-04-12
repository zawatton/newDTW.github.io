import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 9999 没アイテム？
async function item9999(this: any) {
        if (Gvar.var_199 == 2) {
            Gvar.var_2102 = Gvar.var_66;
            Gvar.var_2103 = Gvar.var_67 + 1;
        }
        if (Gvar.var_199 == 8) {
            Gvar.var_2102 = Gvar.var_66;
            Gvar.var_2103 = Gvar.var_67 - 1;
        }
        if (Gvar.var_199 == 4) {
            Gvar.var_2102 = Gvar.var_66 - 1;
            Gvar.var_2103 = Gvar.var_67;
        }
        if (Gvar.var_199 == 6) {
            Gvar.var_2102 = Gvar.var_66 + 1;
            Gvar.var_2103 = Gvar.var_67;
        }
        if (Gvar.var_199 == 1) {
            Gvar.var_2102 = Gvar.var_66 - 1;
            Gvar.var_2103 = Gvar.var_67 + 1;
        }
        if (Gvar.var_199 == 3) {
            Gvar.var_2102 = Gvar.var_66 + 1;
            Gvar.var_2103 = Gvar.var_67 + 1;
        }
        if (Gvar.var_199 == 7) {
            Gvar.var_2102 = Gvar.var_66 - 1;
            Gvar.var_2103 = Gvar.var_67 - 1;
        }
        if (Gvar.var_199 == 9) {
            Gvar.var_2102 = Gvar.var_66 + 1;
            Gvar.var_2103 = Gvar.var_67 - 1;
        }
        Gvar.var_2107 = 0;
        await Func.setMessage1("ペラペラに空気を入れた。",
                               "", 7, false, false, false);
        await Func.AutoDraw(10);
        if (Gvar.var_71[Gvar.var_2102][Gvar.var_2103] == 0 || Gvar.var_71[Gvar.var_2102][Gvar.var_2103] == 13 || Gvar.var_82[Gvar.var_2102][Gvar.var_2103] != 0) {
            Gvar.var_2108 = 0;
        }
        if (Gvar.var_71[Gvar.var_2102][Gvar.var_2103] != 0 && Gvar.var_71[Gvar.var_2102][Gvar.var_2103] != 13 && Gvar.var_82[Gvar.var_2102][Gvar.var_2103] == 0) {
            Gvar.var_2108 = 1;
        }
        if (Gvar.var_2108 == 0) {
            Gvar.var_2214 = Gvar.disc_rarity;
            Gvar.var_1845 = 1;
            await Func.func556();
            Gvar.var_2214 = 0;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 == 1) {
                Gvar.var_2107 = 1;
                Gvar.var_199 = Gvar.var_2111;
            }
            if (Gvar.var_2110 == 0) {
                await Func.setMessage1("十分なスペースがないため",
                                       "うまくいかなかった…", 7, false, false, false);
                Gvar.var_231 = 0;
                Gvar.var_234 = 0;
                Gvar.var_2040 = 0;
                return;
            }
        }
        if (Gvar.var_2108 == 1) {
            Gvar.var_2214 = Gvar.disc_rarity;
            Gvar.var_1845 = 4;
            await Func.func556();
            Gvar.var_2214 = 0;
            Gvar.var_1845 = 0;
            Gvar.var_2107 = 1;
        }
        if (Gvar.var_2107 == 1) {
            Gvar.var_1584 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1585 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1583 = 1;
    
            Adap.DSPLAY(168);
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_198 = 1; // メッセージウィンドウ開く
                Gvar.var_300 = 0;
                Gvar.var_1583++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1583 = 0;
        }
        await Func.AutoDraw(10);
        return;
}

export {item9999}
