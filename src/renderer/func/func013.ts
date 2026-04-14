/**
 * func013 — func013 不明
 *
 * (org原典: newDTW_func0)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func013(this: any) {
        Adap.dbgprt(13);
        await Func.func080(false); // 各キー入力確認 OFF?
        if (Gvar.var_253 == 1) {
            Gvar.var_66 = Gvar.var_66 - 1;
            Gvar.var_67 = Gvar.var_67 - 1;
            Gvar.var_199 = 7;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_254 == 1 && Gvar.var_255 == 1) { // var_255:入力判定[↑]
            Gvar.var_66 = Gvar.var_66 - 1;
            Gvar.var_67 = Gvar.var_67 - 1;
            Gvar.var_199 = 7;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_256 == 1) {
            Gvar.var_66 = Gvar.var_66 + 1;
            Gvar.var_67 = Gvar.var_67 - 1;
            Gvar.var_199 = 9;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_257 == 1 && Gvar.var_255 == 1) { // var_255:入力判定[↑]
            Gvar.var_66 = Gvar.var_66 + 1;
            Gvar.var_67 = Gvar.var_67 - 1;
            Gvar.var_199 = 9;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_258 == 1) {
            Gvar.var_66 = Gvar.var_66 - 1;
            Gvar.var_67 = Gvar.var_67 + 1;
            Gvar.var_199 = 1;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_254 == 1 && Gvar.var_259 == 1) { // var_259:入力判定[↓]
            Gvar.var_66 = Gvar.var_66 - 1;
            Gvar.var_67 = Gvar.var_67 + 1;
            Gvar.var_199 = 1;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_260 == 1) {
            Gvar.var_66 = Gvar.var_66 + 1;
            Gvar.var_67 = Gvar.var_67 + 1;
            Gvar.var_199 = 3;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_257 == 1 && Gvar.var_259 == 1) { // var_259:入力判定[↓]
            Gvar.var_66 = Gvar.var_66 + 1;
            Gvar.var_67 = Gvar.var_67 + 1;
            Gvar.var_199 = 3;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        Gvar.conf_keyon = Adap.getkey(81); // キーQ 入力確認
        if (Gvar.conf_keyon == 1) {
            await Func.func236();
            return;
        }
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func013}
