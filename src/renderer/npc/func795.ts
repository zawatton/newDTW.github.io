import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func795
async function func795(this: any) {
        Adap.dbgprt(795);
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        Gvar.var_243 = 1;
        await Func.AutoDraw(3);
        Gvar.var_747 = 1;
        await Music.func091();
        Gvar.var_2937 = 1;
        Gvar.var_455 = Gvar.var_347;
        Gvar.var_456 = Gvar.var_348;
        await Func.func660();
        Gvar.var_2937 = 0;
        Gvar.var_347 = Gvar.var_1894;
        Gvar.var_348 = Gvar.var_1895;
        Gvar.var_243 = 0;
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func795}
