/**
 * item727 — No = 727 アイテム「ゾンビ馬」を使用した時の効果
 *
 * (org原典: newDTW_item(その他))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 727 アイテム「ｿﾞﾝﾋﾞ馬」を使用した時の効果
async function item727(this: any) {
        Adap.DSPLAY(143);
        Gvar.var_1558 = 160;
        Gvar.var_1559 = 160;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1557 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1557++;
            Gvar.var_198 = 1; // メッセージウィンドウ開く
            Gvar.var_300 = 0;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1557 = 0;
        Gvar.var_211 = Gvar.var_352;
        return;
}

export {item727}
