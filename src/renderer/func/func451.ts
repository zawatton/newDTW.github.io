/**
 * func451 — func451 願いの数を増やしてくれと選択した時の動作処理
 *
 * (org原典: newDTW_item(その他))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func451(this: any) {
        Adap.dbgprt(451);
        Gvar.var_1207 = 0;
        await Func.setMessage("「きさま」",
                                "", 7, true, false, true);
        await Func.setMessage("「そういう冗談は・・・！」",
                                "", 7, true, false, true);
        Gvar.var_199 = 8;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            if (cnt1 == 3) {
                Gvar.var_389 = 2;
                Gvar.var_747 = 1;
                Adap.DSPLAY(105);
            }
            Gvar.var_1582++;
        }
        Gvar.var_389 = 0;
        if (Gvar.var_211 == 1) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 250;
        }
        if (Gvar.var_211 >= 2) {
            Gvar.var_211 = 1;
        }
        Gvar.var_1582 = 1;
        await Func.AutoDraw(10);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1582 = 0;
        Gvar.var_1586 = 1;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1586++;
        }
        Gvar.var_1586 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        await Func.AutoDraw(6);
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func451}
