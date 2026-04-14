/**
 * item726 — No = 726 アイテム「鉄球」を使用した時の効果を使用した時の効果
 *
 * (org原典: newDTW_item(その他))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 726 アイテム「鉄球」を使用した時の効果を使用した時の効果
async function item726(this: any) {
        Adap.DSPLAY(182);
        Gvar.var_1299 = 9;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        Gvar.var_168 = 1; // アイテム「鉄球」を使用して射撃攻撃ダメージがアップしている場合のフラグ。1 = ON
        return;
}

export {item726}
