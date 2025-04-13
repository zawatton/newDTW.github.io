import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 28 敵ジャッジメントの特殊能力
async function enemy028(this: any) {
        Gvar.var_2830 = Adap.rnd(3);
        if (Gvar.var_2830 == 0) {
            await Func.setMessage("HAIL 2 U !!",
                                   "", 8, false, false, true);
            for (let cnt3 = 0; cnt3 < 16; ++cnt3) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_2524 = 1;
            Gvar.var_1845 = 1;
            Gvar.var_2353 = Gvar.var_673;
            await Func.func556();
            Gvar.var_673 = Gvar.var_2353;
            Gvar.var_2524 = 0;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 == 0) {
                await Func.setMessage("お前の願いを言え！",
                                       "", 8, false, true, true);
                Gvar.var_2197 = 1;
                return;
            }
            Adap.DSPLAY(166);
            Gvar.var_2273 = Gvar.var_97;
            Gvar.var_83[Gvar.var_2273].Var21 = 1;
            Gvar.var_411 = 1;
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_411 = 2;
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_411 = 3;
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_411 = 4;
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_411 = 0;
            Gvar.var_83[Gvar.var_2273].Var21 = 0;
            Gvar.var_83[Gvar.var_2273].Var5 = 2;
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            await Func.setMessage("地面から 土人形 が現れた！",
                                   "", 8, false, true, false);
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy028}
