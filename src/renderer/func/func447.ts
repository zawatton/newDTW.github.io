import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func447(this: any) {
        Adap.dbgprt(447);
        Gvar.var_1055 = 0;
        Gvar.var_1584 = 160;
        Gvar.var_1585 = 120;
        Gvar.var_1587 = 130;
        Gvar.var_1588 = 100;
        Gvar.var_1589 = 190;
        Gvar.var_1590 = 100;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1582 = 1;
        Gvar.var_1586 = 1;
        Adap.DSPLAY(168);
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1586++;
        }
        Gvar.var_1586 = 0;
        await Func.AutoDraw(10);
        await Func.setMessage("「願い事を ひとつ言え！」",
                                "", 7, true, false, false);
        await Func.func051(); // キー入力待ち処理
        Gvar.var_1207 = 1;
        Gvar.var_1991 = 1;
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        await Func.func448();
}

export {func447}
