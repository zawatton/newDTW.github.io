import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 300 パール・ジャムの発動処理
async function item300(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        await Func.setMessage1("パールジャムを食べた。",
                              "", 7, true, false, false);
        Gvar.var_1214 = 1;
        Adap.DSPLAY(119); // 食べた時の効果音
        await Func.AutoDraw(15);
        Gvar.var_1214 = 0;
        Gvar.var_360 = 0;
        Gvar.var_2211 = 0;
        if (Gvar.var_350 == Gvar.var_567) {
            Gvar.var_567 = Gvar.var_567 + 1;
            Gvar.var_2211 = 1;
            if (Gvar.var_567 > 999) {
                Gvar.var_567 = 999;
            }
        }
        Gvar.var_350 = Gvar.var_350 + 50;
        if (Gvar.var_350 > Gvar.var_567) {
            Gvar.var_350 = Gvar.var_567;
        }
        await Func.setMessage1("お腹が少し膨らんだ",
                               "", 7, false, true, false);
        if (Gvar.var_350 == Gvar.var_567) {
            await Func.setMessage1("お腹がいっぱいになった。",
                                   "", 7, false, true, false);
        }
        if (Gvar.var_2211 == 1) {
            await Func.setMessage1("最大満腹度が" + Gvar.var_567 + "になった。",
                                   "", 7, false, true, false);
        }
        await Func.AutoDraw(5);
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item300}
