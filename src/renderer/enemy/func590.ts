import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func590(this: any) {
        Adap.dbgprt(590);
        await Func.setMessage1("「命」を「運」んでくると書いて", "「運命」！", 8, false, false, true);
        for (let cnt1 = 0; cnt1 < 16; ++cnt1) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ表示処理(自動)
        }
        Gvar.var_1920 = 1;
        Gvar.var_1914 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_1915 = Gvar.var_83[Gvar.var_673].Var2;
        Gvar.var_1845 = 3;
        Gvar.var_2353 = Gvar.var_673;
        await Func.func556();
        Gvar.var_2457 = Gvar.var_673;
        Gvar.var_673 = Gvar.var_2353;
        Gvar.var_1920 = 0;
        Gvar.var_1845 = 0;
        if (Gvar.var_2110 == 0) {
            return;
        }
        Gvar.var_1584 = (Gvar.var_83[Gvar.var_2457].Var1 - Gvar.var_66 + 4) * 40;
        Gvar.var_1585 = (Gvar.var_83[Gvar.var_2457].Var2 - Gvar.var_67 + 4) * 40;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1583 = 1;
        Adap.DSPLAY(168);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1583++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1583 = 0;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        await Func.setMessage1("……フフ", "よくぞ言ったものだ", 8, false, false, true);
        return;
}

export {func590}
