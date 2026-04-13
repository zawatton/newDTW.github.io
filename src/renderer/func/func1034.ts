import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1034(this: any) {
        Adap.dbgprt(1034);
        Gvar.var_3949 = 0;
        if (Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0) {
                Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
                if (Gvar.var_308[Gvar.var_1638][0] != 50) {
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
                        Gvar.var_120 = Gvar.var_120 - 1;
                        Gvar.var_3949 = 1;
                        Gvar.var_1509 = Gvar.var_308[Gvar.var_1638][1];
                        Gvar.var_1510 = Gvar.var_308[Gvar.var_1638][2];
                        Gvar.var_681 = Adap.rnd(5);
                        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                                await Func.func354();
                        }
                        await Func.func099();
                        Gvar.var_283 = "";
                        Gvar.var_284 = "";
                        Gvar.var_285 = "";
                        Gvar.var_286 = "";
                        Gvar.var_287 = "";
                        Gvar.var_288 = "";
                        Gvar.var_289 = 0;
                        if (Gvar.var_681 == 0) {
                                Gvar.var_283 = "「スカッとキレまくって　はらしてやる！！」";
                                Gvar.var_284 = "";
                        }
                        if (Gvar.var_681 == 1) {
                                Gvar.var_283 = "「カスのくせによォォ～～";
                                Gvar.var_284 = "　ええ！　ナメやがって　てめえ」";
                        }
                        if (Gvar.var_681 == 2) {
                                Gvar.var_283 = "「オレは最強だ！はらしてやる！」";
                                Gvar.var_284 = "";
                        }
                        if (Gvar.var_681 == 3) {
                                Gvar.var_283 = "「お前はもう戦闘不能なんだあああ」";
                                Gvar.var_284 = "";
                        }
                        if (Gvar.var_681 == 4) {
                                Gvar.var_283 = "「とどめが来たぞォ―――ッ！」";
                                Gvar.var_284 = "";
                        }
                        Gvar.var_223 = 1;
                        Gvar.var_290 = 0;
                        Gvar.var_24 = Gvar.var_24[2];
                        Gvar.var_25 = Gvar.var_25[2];
                        Gvar.var_26 = Gvar.var_26[2];
                        await Func.func050();
                        await Func.func358();
                        Gvar.var_681 = Adap.rnd(10);
                        Gvar.var_283 = Gvar.var_286;
                        Gvar.var_284 = Gvar.var_287;
                        if (Gvar.var_681 == 0) {
                                Gvar.var_286 = "「ｱｰｽ･ｳｨﾝﾄﾞ･ｱﾝﾄﾞ･ﾌｧｲﾔｰ」！！";
                                Gvar.var_287 = "";
                        }
                        if (Gvar.var_681 >= 1) {
                                Gvar.var_286 = "「プラネット・ウェイブス」！！";
                                Gvar.var_287 = "";
                        }
                        Gvar.var_223 = 1;
                        Gvar.var_290 = 0;
                        Gvar.var_24 = Gvar.var_24[2];
                        Gvar.var_25 = Gvar.var_25[2];
                        Gvar.var_26 = Gvar.var_26[2];
                        await Func.func050();
                        await Func.func053();
                        await Func.func358();
                        Gvar.var_310 = 1;
                        Gvar.var_1593 = 1;
                        Gvar.var_1595 = Adap.rnd(2);
                        if (Gvar.var_1595 == 0) {
                                Gvar.var_1580 = 0 + (Gvar.var_378 - Gvar.var_74) * 40;
                                Gvar.var_1581 = 0 + (Gvar.var_379 - Gvar.var_75) * 40;
                        }
                        if (Gvar.var_1595 == 1) {
                                Gvar.var_1580 = 320 - 40 + (Gvar.var_378 - Gvar.var_74) * 40;
                                Gvar.var_1581 = 0 + (Gvar.var_379 - Gvar.var_75) * 40;
                        }
                        Adap.DSPLAY(201);
                        for (let cnt1 = 0; cnt1 < 7; ++cnt1) {
                                await Func.func354();
                                if (Gvar.var_1595 == 0) {
                                        Gvar.var_1580 = Gvar.var_1580 + 20;
                                        Gvar.var_1581 = Gvar.var_1581 + 20;
                                }
                                if (Gvar.var_1595 == 1) {
                                        Gvar.var_1580 = Gvar.var_1580 - 20;
                                        Gvar.var_1581 = Gvar.var_1581 + 20;
                                }
                                Gvar.var_1593 = Gvar.var_1593 + 1;
                        }
                        Gvar.var_310 = 0;
                        Gvar.var_1593 = 0;
                        Gvar.var_308[Gvar.var_1638][8] = 1;
                        Gvar.var_234 = 50;
                        Adap.DSPLAY(115);
                        Gvar.var_846 = 1;
                        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                                await Func.func354();
                        }
                        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
                                Gvar.var_664 = 3;
                                await Func.func354();
                                Gvar.var_664 = 0;
                                await Func.func354();
                        }
                        Gvar.var_846 = 0;
                        Gvar.var_457 = "隕石が直撃した！";
                        Gvar.var_2455 = 1;
                        Gvar.var_3127 = 50;
                        Gvar.var_456 = Gvar.var_1638;
                        Gvar.var_234 = Gvar.var_3127;
                        Gvar.var_2425 = 2;
                        await Func.func548();
                        await Func.func745();
                        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                                await Func.func354();
                        }
                        Gvar.var_308[Gvar.var_1638][8] = 0;
                        Gvar.var_2426 = 0;
                        Gvar.var_2455 = 0;
                        Gvar.var_2427 = 1;
                        Gvar.var_2425 = 0;
                }
        }
        if (Gvar.var_3949 == 0) {
                Gvar.var_271 = 0;
                Gvar.var_283 = "";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_283 = "目の前に敵がいないようだ";
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

export {func1034}
