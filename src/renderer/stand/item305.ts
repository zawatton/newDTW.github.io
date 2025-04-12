import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 305 シンデレラの発動処理
async function item305(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.var_1024 = 1; // 次の階の出現アイテム数＋6個するフラグON
        await Func.setMessage1("幸運な顔のメイクをしてみた。",
                               "", 7, true, false, false);
        await Func.setMessage1("次のフロアでアイテムがたくさん",
                               "出現する気がする…！", 7, false, true, false);
        await Func.AutoDraw(5);
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item305}
