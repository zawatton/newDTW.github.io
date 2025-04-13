import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 岸辺露伴に話しかけた時のメッセージ処理
async function func778(this: any) {
        Adap.dbgprt(778);
        Gvar.var_243 = 0;
        Gvar.var_3154 = 0;
        Gvar.var_3155 = 0;
        Gvar.var_480 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            if (Gvar.var_233[Gvar.var_480].Var0 == 393) {
                Gvar.var_3154 = 1;
            }
            if (Gvar.var_233[Gvar.var_480].Var0 == 995) {
                Gvar.var_3155 = 1;
            }
            if (Gvar.var_233[Gvar.var_480].Var0 >= 800 && Gvar.var_233[Gvar.var_480].Var0 < 900) {
                Gvar.var_484 = 1;
                Gvar.var_485 = Gvar.var_233[Gvar.var_480].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] == 393) {
                        Gvar.var_3154 = 1;
                    }
                    if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] == 995) {
                        Gvar.var_3155 = 1;
                    }
                    Gvar.var_484 = Gvar.var_484 + 1;
                }
            }
            Gvar.var_480 = Gvar.var_480 + 1;
        }
        if (Gvar.var_3154 == 1) {
            await Func.func781();
            return;
        }
        if (Gvar.var_3155 == 1) {
            await Func.func784();
            return;
        }
        // ディアボロの試練解放フラグがONなら
        if (Gvar.var_993 == 1) {
            await Func.func783(); // ディアボロの試練解放後、岸辺露伴に話しかけた時のメッセージ処理
            return;
        }
        await Func.setMessage("さて、どうしたものかな…",
                                "", 7, true, false, true);

        await Func.setMessage("ん？何か用かい？",
                                "用も無いのに話しかけないで欲しいな…", 7, true, false, true);

        await Func.setMessage("いやまてよ、ひょっとして君も",
                                "奇妙なﾀﾞﾝｼﾞｮﾝを探索してるのかい？", 7, true, false, true);

        await Func.setMessage("それはちょうど良かった！",
                                "ひとつ頼まれてくれないかな。", 7, true, false, true);

        await Func.setMessage("このﾀﾞﾝｼﾞｮﾝのどこかに、",
                                "ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨｰっていう", 7, true, false, true);

        await Func.setMessage("マンガを現実にするスタンドが",
                                "あるそうなんだ。", 7, true, false, true);

        await Func.setMessage("僕はそのスタンドをずっと",
                                "探していてね。", 7, true, false, true);

        await Func.setMessage("さっきのヤギが怪しいんだが、",
                                "いつも良いところで逃げられてしまう。", 7, true, false, true);

        await Func.setMessage("どうやらそこの壁の穴が、",
                                "やつらの住処のようだが…", 7, true, false, true);

        await Func.setMessage("どうだろう、代わりに取ってきて",
                                "もらえないかな？", 7, true, false, true);

        await Func.func051(); // キー入力待ち処理
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3156 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func778}
