import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1055(this: any) {
        Adap.dbgprt(1055);
        if (Gvar.var_82[Gvar.var_74][Gvar.var_75] != 0 && Gvar.var_82[Gvar.var_74][Gvar.var_75] <= 12) {
            if (Gvar.var_120 == 0) {
                Gvar.var_271 = 0;
                Gvar.var_283 = "";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_283 = "この特技を使うパワーが";
                Gvar.var_284 = "残っていないようだ･･･";
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                Gvar.var_24 = Gvar.var_24[1];
                Gvar.var_25 = Gvar.var_25[1];
                Gvar.var_26 = Gvar.var_26[1];
                await Func.func050();
                await Func.func009(); return;
            }
            Gvar.var_265 = 0;
            Gvar.var_3156 = Gvar.var_445;
            Gvar.var_283 = "";
            Gvar.var_284 = "";
            Gvar.var_285 = "";
            Gvar.var_286 = "";
            Gvar.var_287 = "";
            Gvar.var_288 = "";
            Gvar.var_289 = 0;
            Gvar.var_3157 = Adap.rnd(2);
            if (Gvar.var_3157 == 0) {
                Gvar.var_283 = "";
                Gvar.var_284 = "全隊戦闘態勢ッ！";
            }
            if (Gvar.var_3157 == 1) {
                Gvar.var_283 = "";
                Gvar.var_284 = "狙えェェェェェェェ～～～～～筒！";
            }
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            Gvar.var_24 = Gvar.var_24[2];
            Gvar.var_25 = Gvar.var_25[2];
            Gvar.var_26 = Gvar.var_26[2];
            await Func.func050();
            for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                await Func.func354();
            }
            Gvar.var_3158 = Gvar.var_74;
            Gvar.var_3159 = Gvar.var_75;
            Gvar.var_2813 = 1;
            Gvar.var_443 = 5;
            Gvar.var_2785 = Gvar.var_82[Gvar.var_74][Gvar.var_75];
            Gvar.var_2816 = 1;
            Gvar.var_444 = Gvar.var_445;
            Gvar.var_3954 = 0;
            for (let cnt2 = 0; cnt2 < 7; ++cnt2) {
                await Func.func588();
                if (Gvar.var_2339 == 1) {
                    Gvar.var_3954 = 1;
                }
            }
            Gvar.var_2816 = 0;
            Gvar.var_445 = Gvar.var_444;
            Gvar.var_443 = 0;
            Gvar.var_2813 = 0;
            await Func.func348();
            Adap.DSPLAY(199);
            Gvar.var_283 = "";
            Gvar.var_284 = "";
            Gvar.var_285 = "";
            Gvar.var_286 = "";
            Gvar.var_287 = "";
            Gvar.var_288 = "";
            Gvar.var_289 = 0;
            Gvar.var_283 = "形兆はﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰ部隊を呼び出した！";
            if (Gvar.var_3954 == 0) {
                Gvar.var_283 = "しかし何も起こらなかった…";
            }
            else {
                Gvar.var_120 = Gvar.var_120 - 1;
            }
            Gvar.var_284 = "";
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            Gvar.var_24 = Gvar.var_24[2];
            Gvar.var_25 = Gvar.var_25[2];
            Gvar.var_26 = Gvar.var_26[2];
            await Func.func050();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func354();
            }
        }
        else {
            Gvar.var_271 = 0;
            Gvar.var_283 = "";
            Gvar.var_284 = "";
            Gvar.var_285 = "";
            Gvar.var_286 = "";
            Gvar.var_287 = "";
            Gvar.var_288 = "";
            Gvar.var_289 = 0;
            Gvar.var_283 = "ここでは";
            Gvar.var_284 = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰを呼べないようだ…";
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            Gvar.var_24 = Gvar.var_24[1];
            Gvar.var_25 = Gvar.var_25[1];
            Gvar.var_26 = Gvar.var_26[1];
            await Func.func050();
            await Func.func009(); return;
        }
        return;
}

export {func1055}
