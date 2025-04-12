import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 寝ている時の動作処理
async function func025(this: any) {
    Adap.dbgprt(25);
    
    // 初期化されていない場合の対策
    if (typeof Gvar.var_219 !== 'number') {
        Gvar.var_219 = 0;
    }

    Gvar.var_219++;

    if (Gvar.var_219 >= 5) {
        Gvar.var_217 = 0;
        Gvar.var_219 = 0; // 次回以降のために初期化
        await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛは目を覚ました", "", 7, false, false, false);
        await Func.AutoDraw(10);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
    }

    Adap.DSPLAY(132);
    await Func.setMessage1("…眠くて何もできない。", "", 7, false, false, false);
    await Func.AutoDraw(10);
    Gvar.var_217 = 1;
    await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
    return;
}


export {func025}
