import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 724 石仮面を使用した時の効果
async function item724(this: any) {
        Gvar.var_1251 = 1;
        await Func.setMessage("「俺は人間をやめるぞォ――！」", "", 7, true, false, true);
        Gvar.var_1251 = 2;
        await Func.AutoDraw(10);
        Gvar.var_1251 = 4;
        Gvar.var_1940 = Gvar.var_199;
        Gvar.var_199 = 2;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1411 = 1;
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
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        await Func.AutoDraw(10);
        Gvar.var_130 = 1;
        await Func.setMessage("吸血鬼体質になった！", "", 7, false, false, false);
        Gvar.var_1251 = 0;
        if (Gvar.var_125 != 0) {
            Gvar.var_389 = 2;
            Gvar.var_134 = 1;
            Gvar.var_211 = 1;
            Gvar.var_747 = 1;
            Adap.DSPLAY(105);
            await Func.AutoDraw(10);
            await Func.setMessage("吸血鬼体質で波紋呼吸をしてしまった！", "", 7, false, true, false);
            await Func.setMessage("酷いダメージを受けて回復しない！", "", 7, false, false, false);
            await Func.AutoDraw(15);
            Gvar.var_389 = 0;
        }
        Gvar.var_199 = Gvar.var_1940;
        return;
}

export {item724}
