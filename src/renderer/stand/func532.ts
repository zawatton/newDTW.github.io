/**
 * func532 — func532 GER 発動動作処理
 *
 * (org原典: newDTW_func5 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func532
async function func532(this: any) {
        Adap.dbgprt(532);
        await Func.func335();
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.setMessage("ディアボロは思った…", "", 7, true, false, false);
        await Func.setMessage("幸福と言うのはこういうことだ…", "", 7, true, false, false);
        await Func.AutoDraw(2);
        await Func.setMessage("そうなるべきだったところに…", "", 7, true, false, false);
        await Func.AutoDraw(2);
        await Func.setMessage("戻るだけなんだ…", "", 7, true, false, false);
        await Func.AutoDraw(2);
        await Func.setMessage("ただ元に…", "", 7, true, false, false);
        await Func.AutoDraw(2);
        Gvar.var_770 = 1;
        if (Gvar.var_190 == 1) {
            if (Gvar.var_526 == 0) {
                Gvar.var_526 = 1;
                Gvar.ivents_flag = 6; // ディアボロの試練開放イベント(岸辺露伴がヤギを追いかけるイベント)フラグ
            }
            if (Gvar.var_535 == 1) {
                Gvar.var_356 = 312;
                Gvar.var_533 = 200000;
                if (Gvar.var_526 < 2) {
                    Gvar.var_526 = 2;
                }
                Gvar.var_11 = 1;
                await Adap.bsave("00.dat", Gvar.data = Gvar.var_11, null, 80);
            }
        }
        Gvar.var_356 = 258;
        Gvar.var_212 = 1;
        Gvar.var_213 = 0;
        Gvar.var_214 = 0;
        await Func.AutoDraw(10);
        await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ  再起不能", "", 7, true, false, false);
        await Func.AutoDraw(40);
        Gvar.var_1200 = 1;
        Gvar.var_2400 = 345;
        Gvar.var_532 = 1;
        await Func.func673();
        return;
}

export {func532}
