import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 310 エンプレスの発動処理
async function item310(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_407 == 1 && Gvar.var_536 == 1 && Gvar.dungeon_number == Adap.int(Gvar.var_1068[12])) {
            await Func.func915();
            return;
        }
        Gvar.var_1845 = 1;
        await Func.func556();
        Gvar.var_1845 = 0;
        if (Gvar.var_2110 != 0) {
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                Gvar.var_1845 = 1;
                await Func.func556();
                Gvar.var_1845 = 0;
            }
            await Func.setMessage1("敵が集まってしまった！",
                                   "", 7, false, true, false);
        }
        await Func.AutoDraw(15);
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item310}
