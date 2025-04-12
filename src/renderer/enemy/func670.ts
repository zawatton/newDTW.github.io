import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func670(this: any) {
        Adap.dbgprt(670);
        Gvar.var_3071 = 0;
        Gvar.var_83[Gvar.var_314].Var8 = 1;

        Adap.DSPLAY(120);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1387 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1387 = Gvar.var_1387 + 1;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1387 = 0;
        Gvar.var_83[Gvar.var_314].Var8 = 0;
        Gvar.var_3077 = Gvar.var_83[Gvar.var_314].Var1;
        Gvar.var_3078 = Gvar.var_83[Gvar.var_314].Var2;
        Gvar.var_82[Gvar.var_3077][Gvar.var_3078] = 0;
        Gvar.var_83[Gvar.var_314].Var0 = 0;
        Gvar.var_83[Gvar.var_314].Var1 = 0;
        Gvar.var_83[Gvar.var_314].Var2 = 0;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        await Func.setMessage1("ﾁﾘﾍﾟｯﾊﾟｰは海水に散って消えた…", "", 7, false, false, false);
        Gvar.var_3071 = 1;
        await Func.AutoDraw(10);
        return;
}

export {func670}
