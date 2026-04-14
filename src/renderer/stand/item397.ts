/**
 * item397 — No = 397 ヘビー・ウェザーの発動処理
 *
 * 各スタンドの発動能力設定。
 *
 * (org原典: newDTW_item(スタンドdisc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 397 ヘビー・ウェザーの発動処理
async function item397(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.var_2327 = 1;
        Gvar.var_768 = 1;
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            await Func.func536();
            if (Gvar.var_2328 == 1) {
                break;
            }
        }
        Gvar.var_768 = 0;
        Gvar.var_2327 = 0;
        await Func.setMessage("「悪魔の虹」が大量にあらわれた！！",
                               "", 7, false, false, false);
        await Func.AutoDraw(10);
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item397}
