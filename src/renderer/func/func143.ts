import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func143(this: any) {
        Adap.dbgprt(143);
        Adap.redraw(0);
        await Func.func146(); // ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)
        if (Gvar.var_10 >= 1) {
            await Func.func338();
        }
        Adap.redraw(1);
        return;
}

export {func143}
