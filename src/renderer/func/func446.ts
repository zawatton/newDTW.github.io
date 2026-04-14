/**
 * func446 — func446 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func446(this: any) {
        Adap.dbgprt(446);
        Gvar.var_1253 = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_1252 = 2;
        Adap.DSPLAY(225);
        Gvar.var_1299 = 2;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.strengthen_item_name = "" + Gvar.item_name;
        Gvar.var_1989 = 0;
        if (Gvar.var_1989 == 0 && Gvar.var_233[Gvar.var_225].Var13 == 0) {
            Gvar.var_1990 = Adap.rnd(3);
            Gvar.var_1990++;
            Gvar.var_233[Gvar.var_225].Var13 = Gvar.var_1990;
            Gvar.var_1989 = 1;
        }
        if (Gvar.var_1989 == 0 && Gvar.var_233[Gvar.var_225].Var13 == 1) {
            Gvar.var_233[Gvar.var_225].Var13 = 2;
            Gvar.var_1989 = 1;
        }
        if (Gvar.var_1989 == 0 && Gvar.var_233[Gvar.var_225].Var13 == 2) {
            Gvar.var_233[Gvar.var_225].Var13 = 3;
            Gvar.var_1989 = 1;
        }
        if (Gvar.var_1989 == 0 && Gvar.var_233[Gvar.var_225].Var13 == 3) {
            Gvar.var_233[Gvar.var_225].Var13 = 1;
            Gvar.var_1989 = 1;
        }
        Adap.DSPLAY(112);  // 刀の切れる音 or 強化した時のシャキーン 効果音
        await Func.setMessage("" + Gvar.strengthen_item_name + "の",
                                "雰囲気がちょっと変わったようだ。", 7, false, false, false);
        await Func.func437();
        await Func.AutoDraw(10);
        Gvar.var_1252 = 0;
        Gvar.var_1950 = 0;
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func446}
