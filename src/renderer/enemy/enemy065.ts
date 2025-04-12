import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 65 虹村形兆の特殊能力
async function enemy065(this: any) {
        Gvar.var_2830 = Adap.rnd(2);
        if (Gvar.var_2830 == 0) {
            Gvar.var_2882 = Adap.rnd(6);
            if (Gvar.var_2882 == 0) {
                await Func.setMessage1("全隊戦闘態勢ッ！", "", 8, false, false, true);
            }
            if (Gvar.var_2882 == 1) {
                await Func.setMessage1("お前を殺す決定には変わりはない…", "", 8, false, false, true);
            }
            if (Gvar.var_2882 == 2) {
                await Func.setMessage1("几帳面な性格でね―――",
                                        "必ずやると言ったらやる！", 8, false, false, true);
            }
            if (Gvar.var_2882 == 3) {
                await Func.setMessage1("はたして無事でいられるかなあァ",
                                        "―――――――ッ", 8, false, false, true);
            }
            if (Gvar.var_2882 == 4) {
                await Func.setMessage1("予告どおりは気分がいい～～～ッ", "", 8, false, false, true);
            }
            if (Gvar.var_2882 == 5) {
                await Func.setMessage1("キッカケを与えてやるよォ――ッ", "", 8, false, false, true);
            }
            Gvar.var_83[Gvar.var_673].Var21 = 1;
            Gvar.var_411 = 1;
            for (let cnt3 = 0; cnt3 < 16; ++cnt3) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_83[Gvar.var_673].Var21 = 0;
            Gvar.var_411 = 0;
            Gvar.var_2534 = 1;
            Gvar.var_1845 = 1;
            Gvar.var_2353 = Gvar.var_673;
            await Func.func556();
            Gvar.var_673 = Gvar.var_2353;
            Gvar.var_2534 = 0;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 == 0) {
                await Func.setMessage1("攻撃開始イ―――――ッ！", "", 8, false, false, true);
                Gvar.var_2197 = 1;
                return;
            }
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            await Func.setMessage1("グリーンベレーッ！", 
                                    "やれッ！", 8, false, false, true);
        }
        Gvar.var_2197 = 1;
        return;
}

export {enemy065}
