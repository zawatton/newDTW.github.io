/**
 * item314 — No = 314 ストレイキャットの発動処理
 *
 * 各スタンドの発動能力設定。
 *
 * (org原典: newDTW_item(スタンドdisc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 314 ストレイキャットの発動処理
async function item314(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
            await Func.AutoDraw(10);
        }
        Gvar.var_2329 = 0;
        Adap.DSPLAY(159);
        await Func.setMessage("「うにゃあ」",
                               "", 7, false, false, false);
        await Func.AutoDraw(10);
        Gvar.var_2106 = 1;
        await Func.func647(); // 射撃攻撃動作処理
        return;
}

export {item314}
