import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1031(this: any) {
        Adap.dbgprt(1031);
        if (Gvar.var_120 > 0) {
                Gvar.var_271 = 0;
                Gvar.var_283 = "";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_283 = "新しいﾍﾟｰｼﾞはまだ現れていないようだ…";
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                Gvar.var_24 = Gvar.var_24[1];
                Gvar.var_25 = Gvar.var_25[1];
                Gvar.var_26 = Gvar.var_26[1];
                await Func.func050();
                await Func.func009(); return;
        }
        Gvar.var_265 = 0;
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "ﾎﾙ･ﾎｰｽはﾄﾄ神のﾏﾝｶﾞを読んだ。";
        Gvar.var_284 = "";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        Gvar.var_24 = Gvar.var_24[2];
        Gvar.var_25 = Gvar.var_25[2];
        Gvar.var_26 = Gvar.var_26[2];
        await Func.func050();
        Adap.DSPLAY(118);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                Gvar.var_540 = 4;
                await Func.func354();
                Gvar.var_540 = 5;
                await Func.func354();
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
        }
        Gvar.var_540 = 6;
        await Func.func099();
        Gvar.var_283 = Gvar.var_286;
        Gvar.var_284 = Gvar.var_287;
        Gvar.var_286 = "ﾎﾙ･ﾎｰｽ「新しいﾍﾟｰｼﾞが現れたぞ…」";
        Gvar.var_287 = "";
        Gvar.var_24 = Gvar.var_24[2];
        Gvar.var_25 = Gvar.var_25[2];
        Gvar.var_26 = Gvar.var_26[2];
        await Func.func053();
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func050();
        await Func.func358();
        Adap.DSPLAY(118);
        Gvar.var_283 = Gvar.var_286;
        Gvar.var_284 = Gvar.var_287;
        Gvar.var_286 = "【ﾎﾙ･ﾎｰｽの次の攻撃は…】";
        Gvar.var_287 = "";
        Gvar.var_24 = Gvar.var_24[2];
        Gvar.var_25 = Gvar.var_25[2];
        Gvar.var_26 = Gvar.var_26[2];
        await Func.func053();
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func050();
        await Func.func358();
        Adap.DSPLAY(118);
        Gvar.var_283 = Gvar.var_286;
        Gvar.var_284 = Gvar.var_287;
        Gvar.var_1181 = Adap.rnd(4);
        if (Gvar.var_1181 <= 1) {
                Gvar.var_286 = "【ウオオン！";
                Gvar.var_287 = "　　いつもの２倍のダメージだッ！】";
                Gvar.var_120 = 1;
        }
        if (Gvar.var_1181 == 2) {
                Gvar.var_286 = "【いつもの３倍ダメージだッ！";
                Gvar.var_287 = "　　ﾎﾙ･ﾎｰｽは本当にラッキー！】";
                Gvar.var_120 = 2;
        }
        if (Gvar.var_1181 == 3) {
                Gvar.var_286 = "【いつもの半分のダメージでした…";
                Gvar.var_287 = "　でもくじけちゃダメだよ ﾎﾙ･ﾎｰｽ！】";
                Gvar.var_120 = 3;
        }
        Gvar.var_24 = Gvar.var_24[2];
        Gvar.var_25 = Gvar.var_25[2];
        Gvar.var_26 = Gvar.var_26[2];
        await Func.func053();
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func050();
        await Func.func358();
        await Func.func099();
        Gvar.var_283 = Gvar.var_286;
        Gvar.var_284 = Gvar.var_287;
        if (Gvar.var_1181 <= 1) {
                Gvar.var_286 = "ﾎﾙ･ﾎｰｽ「こ…　こいつはすげえ！」";
                Gvar.var_287 = "　　";
        }
        if (Gvar.var_1181 == 2) {
                Gvar.var_286 = "ﾎﾙ･ﾎｰｽ「おれたちは無敵だッ！」";
                Gvar.var_287 = "";
        }
        if (Gvar.var_1181 == 3) {
                Gvar.var_286 = "ﾎﾙ･ﾎｰｽ「にゃんじゃああ～～～ッ";
                Gvar.var_287 = "　　　これは！？」";
        }
        Gvar.var_24 = Gvar.var_24[2];
        Gvar.var_25 = Gvar.var_25[2];
        Gvar.var_26 = Gvar.var_26[2];
        await Func.func053();
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_540 = 0;
        return;
}

export {func1031}
