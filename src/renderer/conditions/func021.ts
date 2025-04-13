import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func021(this: any) {
        Adap.dbgprt(21);
        // 初期化されていない場合の対策
        if (typeof Gvar.var_178 !== 'number') {
            Gvar.var_178 = 0;
        }
    
        Gvar.var_178++;
        if (Gvar.var_178 == 3) {
            Gvar.var_217 = 0;
            Gvar.var_178 = 0; // 次回以降のために初期化
            await Func.setMessage("ﾃﾞｨｱﾎﾞﾛは動けるようになった", "", 7, false, false, false);
            await Func.AutoDraw(10);
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        await Func.setMessage("…痺れていて動けない。", "", 7, false, false, false);
        await Func.AutoDraw(10);
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func021}
