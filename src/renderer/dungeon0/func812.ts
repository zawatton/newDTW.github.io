import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func812(this: any) {
        Adap.dbgprt(812);
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        Adap.DSPLAY(211);
        Gvar.var_783 = 5;
        await Func.AutoDraw(1);
        Gvar.var_783 = 4;
        await Func.AutoDraw(1);
        Gvar.var_783 = 3;
        await Func.AutoDraw(1);
        Gvar.var_783 = 2;
        await Func.AutoDraw(1);
        Gvar.var_783 = 1;
        await Func.AutoDraw(1);
        Gvar.var_783 = 0;
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func812}
