import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 115 Gエクスペリエンスの発動処理
async function item115(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数

        await Func.setMessage("生まれろ…  新しい生命…",
                               "", 7, false, false, true);

        for (let cnt2 = 0; cnt2 < 16; ++cnt2) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ表示処理(自動)
        }
        for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
            Gvar.var_2272 = 1;
            Gvar.var_1845 = 1;
            await Func.func556();
            Gvar.var_2272 = 0;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 != 0) {
                Gvar.var_2273 = Gvar.var_97;
                Gvar.var_83[Gvar.var_2273].Var21 = 1;
                Gvar.var_411 = 1;
                for (let cnt4 = 0; cnt4 < 3; ++cnt4) {
                    Gvar.var_300 = 0;
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                Gvar.var_411 = 2;
                for (let cnt4 = 0; cnt4 < 3; ++cnt4) {
                    Gvar.var_300 = 0;
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                Gvar.var_411 = 3;
                for (let cnt4 = 0; cnt4 < 3; ++cnt4) {
                    Gvar.var_300 = 0;
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                Gvar.var_411 = 4;
                for (let cnt4 = 0; cnt4 < 3; ++cnt4) {
                    Gvar.var_300 = 0;
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                Gvar.var_411 = 0;
                Gvar.var_83[Gvar.var_2273].Var21 = 0;
                Gvar.var_83[Gvar.var_2273].Var5 = 2;
            }
        }
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item115}
