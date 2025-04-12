import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func759(this: any) {
        Adap.dbgprt(759);
        Gvar.var_243 = 0;

        Gvar.var_2877 = Adap.rnd(8);
        if (Gvar.var_2877 == 0) {
            await Func.setMessage1("ﾖｰﾖｰﾏｯ「もっとおお わたしを叱ってええ」",
                                    "", 7, true, false, true);
        }
        if (Gvar.var_2877 == 1) {
            await Func.setMessage1("ﾖｰﾖｰﾏｯ「わたしが おくつを磨きましょう」",
                                    "", 7, true, false, true);
        }
        if (Gvar.var_2877 == 2) {
            await Func.setMessage1("ﾖｰﾖｰﾏｯ「マンガお読みになられますか」",
                                    "", 7, true, false, true);
        }
        if (Gvar.var_2877 == 3) {
            await Func.setMessage1("ﾖｰﾖｰﾏｯ「マッチ棒パズルやります？」",
                                    "", 7, true, false, true);
        }
        if (Gvar.var_2877 == 4) {
            await Func.setMessage1("ﾖｰﾖｰﾏｯ「黄色い花はヘビイチゴ」",
                                    "", 7, true, false, true);
        }
        if (Gvar.var_2877 == 5) {
            await Func.setMessage1("ﾖｰﾖｰﾏｯ「だんな様あああ～」",
                                    "", 7, true, false, true);
        }
        if (Gvar.var_2877 == 6) {
            await Func.setMessage1("ﾖｰﾖｰﾏｯ「お逃げになりますか？」",
                                    "", 7, true, false, true);
        }
        if (Gvar.var_2877 == 7) {
            await Func.setMessage1("ﾖｰﾖｰﾏｯ「おっしゃるとおりに いたします」",
                                    "", 7, true, false, true);
        }
        Gvar.var_3146 = Gvar.var_77[Gvar.var_347][Gvar.var_348];
        if (Gvar.var_78[Gvar.var_3146].Var0 == 650 || Gvar.var_78[Gvar.var_3146].Var0 == 651 || Gvar.var_78[Gvar.var_3146].Var0 == 652 || Gvar.var_78[Gvar.var_3146].Var0 == 653) {
            await Func.setMessage1("ﾖｰﾖｰﾏｯ「のっかりてぇ―のっかりてェ―」",
                                    "", 7, true, false, true);
        }
        await Func.func051(); // キー入力待ち処理
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3147 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func759}
