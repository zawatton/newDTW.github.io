import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 200 スーパーフライの発動処理
async function item200(this: any) {
        if (Gvar.var_73[Gvar.var_66][Gvar.var_67] != 0) {
            await Func.setMessage1("ここには鉄塔を建てられない。",
                                   "", 7, false, false, false);
            await Func.AutoDraw(5);
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        await Func.setMessage1("「スーパーフライ！」",
                               "", 7, true, false, false);     
        Gvar.var_147 = Gvar.var_66;
        Gvar.var_148 = Gvar.var_67;
        Gvar.var_146 = 1;

        Adap.DSPLAY(188);
        Gvar.var_114 = 0;
        await Func.setMessage1("鉄塔を建てた！",
                               "", 7, false, true, false);
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item200}
