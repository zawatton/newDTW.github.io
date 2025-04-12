import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 396 メイド・イン・ヘブンの発動処理
async function item396(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Adap.DSPLAY(154);
        await Func.setMessage1("自分だけ速く動けるようになった！",
                               "", 7, false, false, false);
        if (Gvar.var_133 == 0) {
            Gvar.var_157 = 1; // Gvar.var_157 倍速移動フラグON
            Gvar.var_158 = 0;
        }
        if (Gvar.var_133 != 0) {
            Gvar.var_133 = 0;
        }
        await Func.AutoDraw(10);
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item396}
