import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func0832(this: any) {
    Adap.dbgprt(832);
    Gvar.var_271 = 0;
    Gvar.var_3449 = 0;
    Gvar.var_3450 = 0;
    Gvar.var_548 = 1;
    for (let cnt1 = 0; cnt1 < Gvar.var_249; ++cnt1) {
        if (Gvar.var_258[Gvar.var_548][0] == 393) {
            Gvar.var_3449 = 1;
        }
        if (Gvar.var_258[Gvar.var_548][0] == 995) {
            Gvar.var_3450 = 1;
        }
        if (Gvar.var_258[Gvar.var_548][0] >= 800 && Gvar.var_258[Gvar.var_548][0] < 900) {
            Gvar.var_552 = 1;
            Gvar.var_553 = Gvar.var_258[Gvar.var_548][6];
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                if (Gvar.var_554[Gvar.var_553][Gvar.var_552][0] == 393) {
                    Gvar.var_3449 = 1;
                }
                if (Gvar.var_554[Gvar.var_553][Gvar.var_552][0] == 995) {
                    Gvar.var_3450 = 1;
                }
                Gvar.var_552 = Gvar.var_552 + 1;
            }
        }
        Gvar.var_548 = Gvar.var_548 + 1;
    }
    if (Gvar.var_460 == 1) {
        await Func.func0838(); return;
    }
    if (Gvar.var_3449 == 1) {
        await Func.func0835(); return;
    }
    if (Gvar.var_3450 == 1) {
        await Func.func0839(); return;
    }
    if (Gvar.var_1095 == 1) {
        await Func.func0837(); return;
    }
    await Func.func0099();
    Gvar.var_283 = "";
    Gvar.var_284 = "";
    Gvar.var_285 = "";
    Gvar.var_286 = "";
    Gvar.var_287 = "";
    Gvar.var_288 = "";
    Gvar.var_289 = 0;
    Gvar.var_283 = "さて、どうしたものかな…";
    Gvar.var_284 = "";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    Gvar.var_24 = Gvar.var_24[1];
    Gvar.var_25 = Gvar.var_25[1];
    Gvar.var_26 = Gvar.var_26[1];
    await Func.func0050();
    await Func.func0358();
    await Func.func0099();
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "ん？何か用かい？";
    Gvar.var_287 = "用も無いのに話しかけないで欲しいな…";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0053();
    await Func.func0358();
    await Func.func0099();
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "いやまてよ、ひょっとして君も";
    Gvar.var_287 = "奇妙なﾀﾞﾝｼﾞｮﾝを探索してるのかい？";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0053();
    await Func.func0358();
    await Func.func0099();
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "それはちょうど良かった！";
    Gvar.var_287 = "ひとつ頼まれてくれないかな。";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0053();
    await Func.func0358();
    await Func.func0099();
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "このﾀﾞﾝｼﾞｮﾝのどこかに、";
    Gvar.var_287 = "ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨｰっていう";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0053();
    await Func.func0358();
    await Func.func0099();
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "マンガを現実にするスタンドが";
    Gvar.var_287 = "あるそうなんだ。";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0053();
    await Func.func0358();
    await Func.func0099();
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "僕はそのスタンドをずっと";
    Gvar.var_287 = "探していてね。";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0053();
    await Func.func0358();
    await Func.func0099();
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "さっきのヤギが怪しいんだが、";
    Gvar.var_287 = "いつも良いところで逃げられてしまう。";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0053();
    await Func.func0358();
    await Func.func0099();
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "どうやらそこの壁の穴が、";
    Gvar.var_287 = "やつらの住処のようだが…";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0053();
    await Func.func0358();
    await Func.func0099();
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "どうだろう、代わりに取ってきて";
    Gvar.var_287 = "もらえないかな？";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0053();
    await Func.func0358();
    await Func.func0054();
    Gvar.var_273 = 19;
    Gvar.var_274 = 45;
    Gvar.var_627 = 1;
    Gvar.var_3451 = 1;
    Gvar.var_629 = 1;
    await Func.func0898(); return;
}

export { func0832 }
