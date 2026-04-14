/**
 * item122 — No = 122 アヌビス神の発動処理
 *
 * 各スタンドの発動能力設定。
 *
 * (org原典: newDTW_item(スタンドdisc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 122 アヌビス神の発動処理 
async function item122(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.var_2267 = Adap.dim(10);
        Gvar.var_143 = 1;
        await Func.setMessage("「どの程度の ふみ込みまで",
                               "  耐えられるか 憶えるゼ！」", 7, false, false, true);
        await Func.AutoDraw(10);

        Adap.DSPLAY(140);
        await Func.AutoDraw(10);
        
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item122}
