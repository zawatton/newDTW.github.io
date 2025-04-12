import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 588 J・ガイルのdiscの効果
async function item588(this: any) {
        await Func.AutoDraw(12);
        Gvar.var_1264 = 0;
        await Func.setMessage1("Ｊガイルの気分になって大声で叫んだ。",
                               "", 7, true, false, true);
        Gvar.var_2208 = Adap.rnd(3);
        Gvar.enemy_list = Gvar.var_1034;
        if (Gvar.enemy_list == 0) {
            Gvar.enemy_list = 5;
        }
        await Func.func626(); // 敵リスト
        Gvar.var_2209 = Gvar.enemy_name;

        if (Gvar.var_2208 == 0) {
            await Func.setMessage1("「" + Gvar.var_2209 + "は",
                                   "  おまえらのために死んだ」", 7, true, true, true);
        }
        if (Gvar.var_2208 == 1) {
            await Func.setMessage1("「青春を犠牲にして俺を追い続けたのに",
                                   "  途中で挫折するとは」", 7, true, true, true);
        }
        if (Gvar.var_2208 == 2) {
            await Func.setMessage1("「お前らの仲間にあの世であったら",
                                   "  聞かせてもらうといい…」", 7, true, true, true);
        }
        if (Gvar.var_2208 == 0) {
            await Func.setMessage1("「おまえらが いなけりゃ",
                                   "  死ななかったかもなぁ！」", 7, true, true, true);
        }
        if (Gvar.var_2208 == 1) {
            await Func.setMessage1("「なんとつまらない・・・",
                                   "  さびしい人生よ！！！」", 7, true, true, true);
        }
        if (Gvar.var_2208 == 2) {
            await Func.setMessage1("「どーやってオレに",
                                   "  殺してもらったかをなぁああ～ッ！」", 7, true, true, true);
        }
        await Func.setMessage1("全ての敵が目を覚ました！",
                               "", 7, true, true, false);
        Gvar.var_2210 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            if (Gvar.var_83[Gvar.var_2210].Var0 != 0 || Gvar.var_83[Gvar.var_2210].Var31 != 4 || Gvar.var_83[Gvar.var_2210].Var0 != 0) {
            }
            if (Gvar.var_83[Gvar.var_2210].Var25 >= 50) {
                Gvar.var_83[Gvar.var_2210].Var25 -= 2;
                if (Gvar.var_83[Gvar.var_2210].Var25 < 50) {
                    Gvar.var_83[Gvar.var_2210].Var25 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_2210].Var25 < 50) {
                Gvar.var_83[Gvar.var_2210].Var25 += 2;
                if (Gvar.var_83[Gvar.var_2210].Var25 >= 50) {
                    Gvar.var_83[Gvar.var_2210].Var25 = 49;
                }
            }
            Gvar.var_83[Gvar.var_2210].Var12 = 0;
            Gvar.var_2210++;
        }
        return;
}

export {item588}
