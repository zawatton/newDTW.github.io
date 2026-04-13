import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 口座へ入金、口座から出金した時の表示
// 旧 func799
async function func0854(this: any) {
    if (Gvar.var_1205 != 0) {
        Adap.DSPLAY(207);
        if (Gvar.var_1205 == 1) {
            await Func.setMessage("" + Gvar.var_3176 + "G 口座に入れた。", "        ", 7, false, false, false);
            Gvar.var_1205 = 0;
        }
        if (Gvar.var_1205 == 2) {
            await Func.setMessage("" + Gvar.var_3176 + "G 口座から出した。", "        ", 7, false, false, false);
            Gvar.var_1205 = 0;
        }
    }
    await Func.AutoDraw(10);
    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
    return;
}
// ↑ここまで口座設定

export {func0854}
