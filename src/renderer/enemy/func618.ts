import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func618(this: any) {
        Adap.dbgprt(618);
        Gvar.var_240 = 0;
        Gvar.var_2881 = Gvar.var_673;
        Gvar.var_2882 = Adap.rnd(2);
        if (Gvar.var_2882 == 0) {
            await Func.setMessage("", "全隊戦闘態勢ッ！", 8, false, false, false);
        }
        if (Gvar.var_2882 == 1) {
            await Func.setMessage("", "狙えェェェェェェェ～～～～～筒！", 8, false, false, false);
        }
        await Func.AutoDraw(20);
        Gvar.var_83[Gvar.var_2881].Var18 = 0;
        Gvar.var_2883 = Gvar.var_83[Gvar.var_2881].Var1;
        Gvar.var_2884 = Gvar.var_83[Gvar.var_2881].Var2;
        Gvar.var_2546 = 1;
        Gvar.var_1845 = 5;
        Gvar.var_2519 = Gvar.var_83[Gvar.var_2881].Var10;
        Gvar.var_2353 = Gvar.var_673;
        for (let cnt1 = 0; cnt1 < 7; ++cnt1) {
            await Func.func556();
        }
        Gvar.var_673 = Gvar.var_2353;
        Gvar.var_1845 = 0;
        Gvar.var_2546 = 0;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        Adap.DSPLAY(199);
        await Func.setMessage("形兆はﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰ部隊を呼び出した！", "", 8, false, false, false);
        await Func.AutoDraw(10);
        return;
}

export {func618}
