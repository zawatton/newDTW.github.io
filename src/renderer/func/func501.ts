import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func501(this: any) {
        Adap.dbgprt(501);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1515 = 1;
        Gvar.var_2244 = Adap.rnd(3);
        Gvar.var_2244 = Gvar.var_2244 + 3;
        Gvar.var_389 = 2;
        Gvar.var_747 = 1;

        Adap.DSPLAY(103); // 殴られた時の効果音
        await Func.setMessage("電気のエネルギーが散っている！", 
                                "" + Gvar.var_2244 + "のﾀﾞﾒｰｼﾞを受けた", 11, false, false, false);
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1515 = Gvar.var_1515 + 1;
        }
        Gvar.var_389 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1515 = 0;
        Gvar.var_211 = Gvar.var_211 - Gvar.var_2244;
        Gvar.var_208 = Gvar.var_208 + Gvar.var_2244;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 229;
        }
        return;
}

export {func501}
