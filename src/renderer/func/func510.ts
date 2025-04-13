import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func510(this: any) {
        Adap.dbgprt(510);
        await Func.setMessage("呪われていて発動できない！",
                                "", 7, false, false, false);
        Gvar.var_747 = 1;
        Gvar.var_1212 = 1;
        Adap.DSPLAY(127);
        Gvar.var_389 = 2;
        Gvar.var_1498 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1498 = 1;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1498 = 2;
        }
        await Func.AutoDraw(10);
        Gvar.var_1498 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_389 = 0;
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func510}
