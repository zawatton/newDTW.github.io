/**
 * item701 — No = 701 没アイテム「ソフト・マシーンの発動によって罠にした敵」を使用した時の効果
 *
 * (org原典: newDTW_item(その他))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 701 没アイテム「ソフト・マシーンの発動によって罠にした敵」を使用した時の効果
async function item701(this: any) {
        if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 || Gvar.var_80[Gvar.var_66][Gvar.var_67] != 0 || Gvar.var_73[Gvar.var_66][Gvar.var_67] != 0) {
            await Func.setMessage("足元のものが邪魔で",
                                   "うまく使えなかった。", 7, false, false, false);
            return;
        }
        Gvar.var_337 = Gvar.var_337 + 1;
        Gvar.var_80[Gvar.var_66][Gvar.var_67] = Gvar.var_337;
        Gvar.var_81[Gvar.var_337][0] = 77;
        Gvar.var_81[Gvar.var_337][1] = Gvar.var_66;
        Gvar.var_81[Gvar.var_337][2] = Gvar.var_67;
        Gvar.var_81[Gvar.var_337][4] = 1;
        Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_66][Gvar.var_67];
        Gvar.var_81[Gvar.var_337][6] = Gvar.disc_rarity;
        Gvar.enemy_list = Gvar.disc_rarity;
        await Func.func626(); // 敵リスト
        Gvar.var_2213 = Gvar.enemy_name;

        await Func.setMessage("" + Gvar.var_2213 + "を",
                               "地面に出して人質にした！", 7, true, false, false);
        await Func.setMessage("この上にいれば",
                               "" + Gvar.var_2213 + "から攻撃されないぞ", 7, false, true, false);
        return;
}

export {item701}
