/**
 * func156 — func156 初めてダンジョンを訪れ、クリア出来ずにヴェネチアホテルに戻った際のディアボロの呟き
 *
 * (org原典: newDTW_events / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func156
async function func156(this: any) {
        Adap.dbgprt(156);
        if (Gvar.var_759 == 0) {
            Gvar.var_760 = 4;
        }
        Gvar.var_374 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        await Func.AutoDraw(20);
        await Func.func335();
        Gvar.var_757 = 1;
        for (let cnt1 = 0; cnt1 < 37; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_757++;
            if (Gvar.var_757 == 10) {
        
                Adap.DSPLAY(104);
            }
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_757 = 0;
        Gvar.var_374 = 0;

        await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「いたたた…」", "", 7, false, false, true);

        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_758 = 1;
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_758 = 2;
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_198 = 1; // メッセージウィンドウ開く
            Gvar.var_300 = 0;
        }
        Gvar.var_758 = 0;

        await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「ここはいつもの…」", "", 7, true, false, true);

        Gvar.var_199 = 1;
        await Func.AutoDraw(2);
        Gvar.var_199 = 4;
        await Func.AutoDraw(5);
        Gvar.var_199 = 1;
        await Func.AutoDraw(2);
        Gvar.var_199 = 2;
        await Func.AutoDraw(5);
        Gvar.var_199 = 3;
        await Func.AutoDraw(2);
        Gvar.var_199 = 6;
        await Func.AutoDraw(5);
        Gvar.var_199 = 3;
        await Func.AutoDraw(2);
        Gvar.var_199 = 2;
        await Func.AutoDraw(5);

        await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「何でまたここに",
                                "  落ちてくるんだ？？」", 7, false, false, true);

        await Func.AutoDraw(20);
        await Func.func336();
        return;
}

export {func156}
