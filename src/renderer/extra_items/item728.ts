/**
 * item728 — No = 728 赤石つき石仮面
 *
 * (org原典: newDTW_item(その他))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 728 赤石つき石仮面
async function item728(this: any) {
        Gvar.var_1251 = 1;
        await Func.AutoDraw(10);
        Gvar.var_1251 = 6;
        await Func.AutoDraw(10);
        Gvar.var_1251 = 8;
        Gvar.var_1940 = Gvar.var_199;
        Gvar.var_199 = 2;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1411 = 1;
        Gvar.var_1413 = 1;
        for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
    
            Adap.DSPLAY(111);
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_198 = 1; // メッセージウィンドウ開く
            Gvar.var_300 = 0;
            Gvar.var_1411++;
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_198 = 1; // メッセージウィンドウ開く
            Gvar.var_300 = 0;
            Gvar.var_1411++;
        }
        for (let cnt2 = 0; cnt2 < 17; ++cnt2) {
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_198 = 1; // メッセージウィンドウ開く
            Gvar.var_300 = 0;
            Gvar.var_1411++;
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_198 = 1; // メッセージウィンドウ開く
            Gvar.var_300 = 0;
            Gvar.var_1411++;
        }
        Gvar.var_1411 = 0;
        Gvar.var_1413 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        await Func.AutoDraw(10);
        Gvar.var_182 = 1;
        await Func.setMessage("「究極の生命体ﾃﾞｨｱﾎﾞﾛの誕生だッーっ」",
                               "", 7, true, false, false);
        Gvar.var_1251 = 0;
        Gvar.var_199 = Gvar.var_1940;
        return;
}

export {item728}
