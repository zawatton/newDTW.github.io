/**
 * item315 — No = 315 エピタフの発動処理
 *
 * 各スタンドの発動能力設定。
 *
 * (org原典: newDTW_item(スタンドdisc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 315 エピタフの発動処理
async function item315(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        await Func.setMessage("「エピタフ！」",
                               "", 7, false, false, false);
        Gvar.var_119 = 1;
        Gvar.var_121 = 1; // Gvar.var_121 罠が見えるようになるフラグON
        Gvar.var_101 = 1;
        Adap.DSPLAY(184);
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        Adap.gsel(19);
        Adap.color(10, 10, 10);
        Adap.boxf(Gvar.left = 0, Gvar.top1 = 0, Gvar.right = 680, Gvar.bottom = 680);
        Adap.gsel(0);
        Gvar.var_311 = 255;
        Gvar.var_312 = 1;
        for (let cnt2 = 0; cnt2 < 51; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_311 = Gvar.var_311 - 5;
            Gvar.var_198 = 1; // メッセージウィンドウ開く
            Gvar.var_300 = 0;
        }
        Gvar.var_312 = 0;
        await Func.setMessage("「迫り来る危険を感知できる…！」",
                               "", 7, true, true, false);
        await Func.setMessage("見えないものが見えるようになった！",
                               "", 7, false, true, false);
        await Func.AutoDraw(10);
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item315}
