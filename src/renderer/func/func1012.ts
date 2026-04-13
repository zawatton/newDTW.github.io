import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1012(this: any) {
        Adap.dbgprt(1012);
        Gvar.var_990 = Gvar.var_92[Gvar.var_2750][0];
        Gvar.var_2709 = Gvar.var_92[Gvar.var_2750][6];
        await Func.func586();
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_268 = Gvar.var_308[Gvar.var_1335][0];
        await Func.func658();
        Gvar.var_3936 = Gvar.var_1872;
        if (Gvar.var_990 != 37 && Gvar.var_990 != 19 && Gvar.var_990 != 97 && Gvar.var_990 != 80 && Gvar.var_990 != 82 && Gvar.var_990 != 84 && Gvar.var_990 != 85 && Gvar.var_990 != 86 && Gvar.var_990 != 87 && Gvar.var_990 != 88 && Gvar.var_990 != 89 && Gvar.var_990 != 90 && Gvar.var_990 != 91 && Gvar.var_990 != 92 && Gvar.var_990 != 93 && Gvar.var_990 != 94 && Gvar.var_990 != 79 && Gvar.var_990 != 78 && Gvar.var_990 != 77) {
            Gvar.var_283 = "" + Gvar.var_3936 + "は罠にかかった";
            if (Gvar.var_990 != 5) {
                Adap.DSPLAY(165);
            }
            if (Gvar.var_990 == 5) {
                Adap.DSPLAY(167);
            }
        }
        if (Gvar.var_990 == 37 || Gvar.var_990 == 80 || Gvar.var_990 == 82 || Gvar.var_990 == 84 || Gvar.var_990 == 86 || Gvar.var_990 == 87 || Gvar.var_990 == 88 || Gvar.var_990 == 89 || Gvar.var_990 == 90 || Gvar.var_990 == 91 || Gvar.var_990 == 92 || Gvar.var_990 == 93 || Gvar.var_990 == 94 || Gvar.var_990 == 79 || Gvar.var_990 == 81 || Gvar.var_990 == 78 || Gvar.var_990 == 77) {
            Gvar.var_283 = "" + Gvar.var_3936 + "は地面を調べた。";
        }
        if (Gvar.var_990 == 97 || Gvar.var_990 == 19) {
            Gvar.var_283 = "" + Gvar.var_3936 + "は地面を調べた。";
        }
        if (Gvar.var_990 == 85) {
            Gvar.var_283 = "幽霊部屋に入った。";
        }
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        Gvar.var_24 = Gvar.var_24[4];
        Gvar.var_25 = Gvar.var_25[4];
        Gvar.var_26 = Gvar.var_26[4];
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func354();
        }
        Gvar.var_1333 = 0;
        Gvar.var_3359 = Gvar.var_308[Gvar.var_1335][5];
        if (Gvar.var_2758 == 36) {
            await Func.func050();
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Gvar.var_284 = "";
            await Func.func050();
            Gvar.var_290 = 0;
            Adap.DSPLAY(161);
            Gvar.var_310 = 1;
            Gvar.var_1759 = 1;
            Gvar.var_1760 = 0;
            if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                    await Func.func354();
                    Gvar.var_1760++;
                }
            }
            else {
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                    await Func.func354();
                }
            }
            Gvar.var_283 = "" + Gvar.var_3936 + "の頭に";
            Gvar.var_284 = "熱を集めた！";
            await Func.func050();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            Adap.DSPLAY(123);
            Gvar.var_2712 = 1;
            if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
                    Gvar.var_1759 = 2;
                    await Func.func354();
                    await Func.func354();
                    Gvar.var_1759 = 3;
                    await Func.func354();
                    await Func.func354();
                }
            }
            else {
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                    await Func.func354();
                }
            }
            Gvar.var_308[Gvar.var_1335][3] = Gvar.var_308[Gvar.var_1335][3] - 20;
            if (Gvar.var_308[Gvar.var_1335][3] <= 0) {
                Gvar.var_308[Gvar.var_1335][3] = 1;
            }
            Gvar.var_1759 = 0;
            Gvar.var_92[Gvar.var_2750][3] = 0;
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "" + Gvar.var_3936 + "は気絶した！";
            Gvar.var_287 = "";
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            await Func.func053();
            await Func.func358();
            Gvar.var_310 = 0;
            Gvar.var_2424 = Gvar.var_1335;
            await Func.func552();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            Gvar.var_308[Gvar.var_1335][8] = 0;
            Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
            Gvar.var_1760 = 0;
            Adap.DSPLAY(132);
        }
        if (Gvar.var_2758 == 1) {
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Gvar.var_310 = 1;
            Gvar.var_1758 = 1;
            Adap.DSPLAY(156);
            if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                    await Func.func354();
                    Gvar.var_1758++;
                }
            }
            else {
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                    await Func.func354();
                }
            }
            Gvar.var_310 = 0;
            Gvar.var_1758 = 0;
            Gvar.var_92[Gvar.var_2750][3] = 0;
            if (Gvar.var_308[Gvar.var_1335][0] != 119 && Gvar.var_308[Gvar.var_1335][0] != 147) {
                if (Gvar.var_308[Gvar.var_1335][25] <= 50) {
                    Gvar.var_308[Gvar.var_1335][25] = 50;
                }
                Gvar.var_308[Gvar.var_1335][25] = Gvar.var_308[Gvar.var_1335][25] + 5;
                if (Gvar.var_308[Gvar.var_1335][25] >= 99) {
                    Gvar.var_308[Gvar.var_1335][25] = 99;
                }
                Gvar.var_284 = "攻撃力を下げた！";
            }
            else {
                if (Gvar.var_308[Gvar.var_1335][0] == 147) {
                    Gvar.var_268 = 119;
                    Gvar.var_308[Gvar.var_1335][14] = 0;
                }
                if (Gvar.var_308[Gvar.var_1335][0] == 119) {
                    Gvar.var_268 = 135;
                }
                if (Gvar.var_131 == Gvar.var_1335) {
                    Gvar.var_131 = 0;
                    Gvar.var_532 = 0;
                    Gvar.var_533 = 0;
                    Gvar.var_530 = 0;
                    Gvar.var_531 = 0;
                }
                Gvar.var_308[Gvar.var_1335][0] = Gvar.var_268;
                await Func.func658();
                Gvar.var_308[Gvar.var_1335][3] = Gvar.var_505;
                Gvar.var_284 = "" + Gvar.var_3936 + "は若返った！";
            }
            await Func.func050();
            Adap.DSPLAY(164);
            Gvar.var_308[Gvar.var_1335][8] = 0;
            Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
        }
        if (Gvar.var_2758 == 2) {
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Adap.DSPLAY(161);
            if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                    await Func.func354();
                }
            }
            else {
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                    await Func.func354();
                }
            }
            Gvar.var_308[Gvar.var_1335][8] = 0;
            Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
            Gvar.var_92[Gvar.var_2750][3] = 0;
            Gvar.var_204 = Adap.rnd(2);
            await Func.func1013();
            Gvar.var_284 = "" + Gvar.var_422 + "のことを忘れた！";
            await Func.func348();
            Adap.DSPLAY(164);
            Gvar.var_308[Gvar.var_1335][41] = 1;
            if (Gvar.var_308[Gvar.var_1335][0] == 134) {
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "しかし" + Gvar.var_3936 + "は糸を使って";
                Gvar.var_287 = "" + Gvar.var_422 + "の顔を覚え直した！";
                Gvar.var_24 = Gvar.var_24[1];
                Gvar.var_25 = Gvar.var_25[1];
                Gvar.var_26 = Gvar.var_26[1];
                await Func.func053();
                await Func.func050();
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                Gvar.var_308[Gvar.var_1335][41] = 0;
            }
        }
        if (Gvar.var_2758 == 3) {
            await Func.func348();
            Gvar.var_457 = "ダイバーダウンの潜水攻撃！";
            Gvar.var_1549 = Gvar.var_491;
            Gvar.var_1550 = Gvar.var_492;
            Gvar.var_310 = 1;
            Gvar.var_1692 = 1;
            for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
                await Func.func354();
                Gvar.var_1692++;
            }
            Gvar.var_268 = Gvar.var_308[Gvar.var_1335][0];
            await Func.func658();
            Gvar.var_456 = Gvar.var_1335;
            Gvar.var_345 = Gvar.var_1335;
            await Func.func673();
            await Func.func745();
            if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                    await Func.func354();
                    Gvar.var_1692++;
                }
            }
            else {
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                    await Func.func354();
                }
            }
            Gvar.var_310 = 0;
            Gvar.var_1692 = 0;
        }
        if (Gvar.var_2758 == 30) {
            Gvar.var_2720 = 20;
            Gvar.var_234 = 20;
            Gvar.var_1549 = Gvar.var_308[Gvar.var_1335][1];
            Gvar.var_1550 = Gvar.var_308[Gvar.var_1335][2];
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Gvar.var_846 = 1;
            for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                await Func.func354();
                Adap.DSPLAY(104);
            }
            Gvar.var_308[Gvar.var_1335][8] = 0;
            Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
            Gvar.var_92[Gvar.var_2750][3] = 0;
            Gvar.var_268 = Gvar.var_308[Gvar.var_1335][0];
            await Func.func658();
            Gvar.var_456 = Gvar.var_1335;
            Gvar.var_345 = Gvar.var_1335;
            Gvar.var_234 = 20;
            Gvar.var_457 = "血の槍が" + Gvar.var_3936 + "に突き刺さった！";
            Gvar.var_2425 = 2;
            Gvar.var_3937 = 0;
            await Func.func745();
            for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                await Func.func354();
            }
            Gvar.var_91[Gvar.var_491][Gvar.var_492] = 0;
            Gvar.var_92[Gvar.var_2750][0] = 0;
            Gvar.var_92[Gvar.var_2750][1] = 0;
            Gvar.var_92[Gvar.var_2750][2] = 0;
            Gvar.var_92[Gvar.var_2750][7] = 0;
        }
        if (Gvar.var_2758 == 4) {
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Gvar.var_308[Gvar.var_1335][8] = 0;
            Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
            Gvar.var_92[Gvar.var_2750][3] = 0;
            Gvar.var_284 = "地面の記憶を呼び出した！";
            await Func.func050();
            Adap.DSPLAY(166);
            if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                    await Func.func354();
                    Gvar.var_223 = 1;
                    Gvar.var_290 = 0;
                }
                Adap.DSPLAY(166);
                for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                    await Func.func354();
                    Gvar.var_223 = 1;
                    Gvar.var_290 = 0;
                }
            }
            else {
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                    await Func.func354();
                }
            }
            Gvar.var_869 = 1;
            for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                await Func.func568();
            }
            Gvar.var_869 = 0;
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "罠がたくさん現れたようだ…";
            await Func.func050();
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            Gvar.var_91[Gvar.var_491][Gvar.var_492] = 0;
            Gvar.var_92[Gvar.var_2750][0] = 0;
            Gvar.var_92[Gvar.var_2750][1] = 0;
            Gvar.var_92[Gvar.var_2750][2] = 0;
            Gvar.var_92[Gvar.var_2750][7] = 0;
            await Func.func348();
        }
        if (Gvar.var_2758 == 5) {
            Gvar.var_284 = "「ボ ﾑ ギ ！」";
            await Func.func050();
            for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                await Func.func354();
            }
            Gvar.var_2797 = 1;
            Gvar.var_443 = 1;
            await Func.func588();
            Gvar.var_446 = Gvar.var_445;
            Gvar.var_2797 = 0;
            Gvar.var_443 = 0;
            if (Gvar.var_2339 == 0) {
                Gvar.var_283 = "";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_283 = "しかし何も起こらなかった。";
                Gvar.var_284 = "";
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                await Func.func050();
            }
            if (Gvar.var_2339 == 1) {
                await Func.func348();
                Gvar.var_283 = "";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_283 = "俺のネコ殺しといて";
                Gvar.var_284 = "タダで行っちまうつもりかよ！";
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                await Func.func050();
                Gvar.var_466 = (Gvar.var_308[Gvar.var_446][1] - Gvar.var_74 + 4) * 40;
                Gvar.var_467 = (Gvar.var_308[Gvar.var_446][2] - Gvar.var_75 + 4) * 40;
                Gvar.var_310 = 1;
                Gvar.var_468 = 1;
                Adap.DSPLAY(168);
                if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                        Gvar.var_290 = 0;
                        await Func.func354();
                        Gvar.var_468++;
                    }
                }
                Gvar.var_310 = 0;
                Gvar.var_468 = 0;
            }
            Gvar.var_91[Gvar.var_491][Gvar.var_492] = 0;
            Gvar.var_92[Gvar.var_2750][0] = 0;
            Gvar.var_92[Gvar.var_2750][1] = 0;
            Gvar.var_92[Gvar.var_2750][2] = 0;
            Gvar.var_92[Gvar.var_2750][7] = 0;
        }
        if (Gvar.var_2758 == 6) {
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Gvar.var_310 = 1;
            Gvar.var_1707 = 1;
            if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                    await Func.func354();
                    Gvar.var_1707++;
                }
            }
            else {
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                    await Func.func354();
                }
            }
            Gvar.var_284 = "とっておきの世界にお連れしましょう";
            await Func.func050();
            Adap.DSPLAY(135);
            if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                for (let cnt1 = 0; cnt1 < 8; ++cnt1) {
                    await Func.func354();
                    Gvar.var_1707++;
                }
            }
            Gvar.var_93[Gvar.var_308[Gvar.var_1335][1]][Gvar.var_308[Gvar.var_1335][2]] = 0;
            Gvar.var_308[Gvar.var_1335][0] = 0;
            Gvar.var_308[Gvar.var_1335][1] = 0;
            Gvar.var_308[Gvar.var_1335][2] = 0;
            Gvar.var_92[Gvar.var_2750][3] = 0;
            Gvar.var_310 = 0;
            Gvar.var_1707 = 0;
        }
        if (Gvar.var_2758 == 7) {
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Gvar.var_310 = 1;
            Gvar.var_1694 = 1;
            if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                for (let cnt1 = 0; cnt1 < 14; ++cnt1) {
                    await Func.func354();
                    Gvar.var_1694++;
                }
            }
            else {
                Adap.DSPLAY(137);
            }
            Gvar.var_310 = 0;
            Gvar.var_457 = "巨大な岩で押しつぶされた！";
            Gvar.var_1694 = 0;
            Gvar.var_268 = Gvar.var_308[Gvar.var_1335][0];
            await Func.func658();
            Gvar.var_456 = Gvar.var_1335;
            Gvar.var_345 = Gvar.var_1335;
            Gvar.var_2425 = 2;
            Gvar.var_234 = Math.trunc(Gvar.var_308[Gvar.var_1335][3] / 2);
            if (Gvar.var_234 == 0) {
                Gvar.var_234 = 1;
            }
            await Func.func745();
            Gvar.var_2425 = 0;
            Gvar.var_92[Gvar.var_2750][3] = 0;
            Gvar.var_308[Gvar.var_1335][8] = 0;
            Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
        }
        if (Gvar.var_2758 == 8) {
            Gvar.var_265 = 0;
            for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                await Func.func354();
            }
            Gvar.var_308[Gvar.var_1335][13] = 1;
            Adap.DSPLAY(126);
        }
        if (Gvar.var_2758 == 9 || Gvar.var_2758 == 31) {
            Gvar.var_290 = 0;
            Gvar.var_284 = "地面に「ボョヨオン」と書かれていた！";
            await Func.func050();
            Gvar.var_265 = 0;
            for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                await Func.func354();
            }
            Gvar.var_1541 = Gvar.var_308[Gvar.var_1335][1];
            Gvar.var_1542 = Gvar.var_308[Gvar.var_1335][2];
            Gvar.var_345 = Gvar.var_1335;
            Gvar.var_3363 = 1;
            await Func.func706();
            Gvar.var_3363 = 0;
            Gvar.var_2755 = 1;
            for (let cnt1 = 0; cnt1 < Gvar.var_107; ++cnt1) {
                if (Gvar.var_308[Gvar.var_2755][27] == Gvar.var_1335) {
                    Gvar.var_308[Gvar.var_2755][27] = 0;
                }
                Gvar.var_2755++;
            }
            Gvar.var_308[Gvar.var_1335][28] = 0;
            await Func.func348();
        }
        if (Gvar.var_2758 == 10) {
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Gvar.var_1329 = 1;
            Gvar.var_849 = 1;
            Gvar.var_847 = Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74 + 4;
            Gvar.var_848 = Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75 + 4;
            Gvar.var_1775 = 1;
            Gvar.var_310 = 1;
            if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                    await Func.func354();
                    if (Gvar.var_1775 == 3) {
                        Gvar.var_846 = 1;
                        Adap.DSPLAY(105);
                    }
                    Gvar.var_1775++;
                    Gvar.var_223 = 1;
                    Gvar.var_290 = 0;
                }
            }
            else {
                Adap.DSPLAY(105);
            }
            Gvar.var_1329 = 0;
            Gvar.var_849 = 0;
            Gvar.var_1775 = 0;
            Gvar.var_310 = 0;
            Gvar.var_284 = "地面に固定した！";
            await Func.func050();
            for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                await Func.func354();
            }
            Gvar.var_308[Gvar.var_1335][8] = 0;
            Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
            Gvar.var_308[Gvar.var_1335][13] = 99;
            Gvar.var_92[Gvar.var_2750][3] = 0;
        }
        if (Gvar.var_2758 == 11) {
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Gvar.var_457 = "ワムウの影に触れてしまった！";
            Gvar.var_268 = Gvar.var_308[Gvar.var_1335][0];
            await Func.func658();
            Gvar.var_456 = Gvar.var_1335;
            Gvar.var_345 = Gvar.var_1335;
            await Func.func673();
            Gvar.var_2719 = Adap.rnd(10);
            Gvar.var_234 = Math.trunc(Gvar.var_308[Gvar.var_1335][5] / 5) + Gvar.var_2719;
            await Func.func745();
            Gvar.var_308[Gvar.var_1335][8] = 0;
            Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
            Gvar.var_92[Gvar.var_2750][3] = 0;
        }
        if (Gvar.var_2758 == 12) {
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Gvar.var_290 = 0;
            Gvar.var_284 = "「ロードローラーだッ！」";
            await Func.func050();
            Gvar.var_310 = 1;
            Gvar.var_1695 = 1;
            if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
                    await Func.func354();
                    Gvar.var_1695++;
                }
            }
            else {
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                    await Func.func354();
                }
            }
            Gvar.var_310 = 0;
            Gvar.var_1695 = 0;
            if (Gvar.var_308[Gvar.var_1335][0] == 120 || Gvar.var_308[Gvar.var_1335][0] == 128) {
                Gvar.var_308[Gvar.var_1335][3] = Math.trunc(Gvar.var_308[Gvar.var_1335][3] / 2);
            }
            else {
                Gvar.var_308[Gvar.var_1335][3] = 1;
            }
            if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) <= 1 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) <= 1) {
                if (Gvar.var_236 == 1) {
                    Gvar.var_236 = 0;
                    Gvar.var_387 = 233;
                    Gvar.var_224 = 2;
                }
                if (Gvar.var_236 > 1) {
                    if (Gvar.var_240 == 100 || Gvar.var_240 == 398 && Gvar.var_176 == 0 || Gvar.var_176 == 120 || Gvar.var_176 == 128) {
                        // @ts-ignore HSP numeric operation
                        Gvar.var_233 = Math.trunc(Gvar.var_236 / 2) + Gvar.var_233;
                        Gvar.var_236 = Math.trunc(Gvar.var_236 / 2);
                    }
                    else {
                        // @ts-ignore HSP numeric operation
                        Gvar.var_233 = Gvar.var_236 - 1 + Gvar.var_233;
                        Gvar.var_236 = 1;
                    }
                }
                Gvar.var_124 = 1;
            }
            for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                await Func.func354();
            }
            Gvar.var_92[Gvar.var_2750][3] = 0;
            Gvar.var_1541 = Gvar.var_308[Gvar.var_1335][1];
            Gvar.var_1542 = Gvar.var_308[Gvar.var_1335][2];
            Gvar.var_2221 = Gvar.var_1541 - 1;
            if (Gvar.var_2221 < 0) {
                Gvar.var_2221 = 0;
            }
            Gvar.var_2222 = Gvar.var_1541 + 1;
            Gvar.var_2223 = Gvar.var_1542 + 1;
            Gvar.var_2224 = Gvar.var_1542 - 1;
            if (Gvar.var_2224 < 0) {
                Gvar.var_2224 = 0;
            }
            Gvar.var_457 = "";
            Gvar.var_2424 = 1;
            Gvar.var_2425 = 1;
            Gvar.var_2426 = 2;
            for (let cnt1 = 0; cnt1 < Gvar.var_107; ++cnt1) {
                if (Gvar.var_308[Gvar.var_2424][31] != 5) {
                    if (Gvar.var_308[Gvar.var_2424][1] == Gvar.var_1541 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2223) {
                        Gvar.var_456 = Gvar.var_2424;
                        Gvar.var_234 = 999;
                        await Func.func745();
                    }
                    if (Gvar.var_308[Gvar.var_2424][1] == Gvar.var_1541 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2224) {
                        Gvar.var_456 = Gvar.var_2424;
                        Gvar.var_234 = 999;
                        await Func.func745();
                    }
                    if (Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2221 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_1542) {
                        Gvar.var_456 = Gvar.var_2424;
                        Gvar.var_234 = 999;
                        await Func.func745();
                    }
                    if (Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2222 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_1542) {
                        Gvar.var_456 = Gvar.var_2424;
                        Gvar.var_234 = 999;
                        await Func.func745();
                    }
                    if (Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2221 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2223) {
                        Gvar.var_456 = Gvar.var_2424;
                        Gvar.var_234 = 999;
                        await Func.func745();
                    }
                    if (Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2222 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2223) {
                        Gvar.var_456 = Gvar.var_2424;
                        Gvar.var_234 = 999;
                        await Func.func745();
                    }
                    if (Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2221 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2224) {
                        Gvar.var_456 = Gvar.var_2424;
                        Gvar.var_234 = 999;
                        await Func.func745();
                    }
                    if (Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2222 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2224) {
                        Gvar.var_456 = Gvar.var_2424;
                        Gvar.var_234 = 999;
                        await Func.func745();
                    }
                }
                if (Gvar.var_308[Gvar.var_2424][31] == 5) {
                    if (Gvar.var_308[Gvar.var_2424][1] == Gvar.var_1541 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2223) {
                        Gvar.var_308[Gvar.var_2424][3] = 1;
                        Gvar.var_308[Gvar.var_2424][8] = 1;
                        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                            await Func.func354();
                        }
                        Gvar.var_308[Gvar.var_2424][8] = 0;
                    }
                    if (Gvar.var_308[Gvar.var_2424][1] == Gvar.var_1541 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2224) {
                        Gvar.var_308[Gvar.var_2424][3] = 1;
                        Gvar.var_308[Gvar.var_2424][8] = 1;
                        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                            await Func.func354();
                        }
                        Gvar.var_308[Gvar.var_2424][8] = 0;
                    }
                    if (Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2221 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_1542) {
                        Gvar.var_308[Gvar.var_2424][3] = 1;
                        Gvar.var_308[Gvar.var_2424][8] = 1;
                        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                            await Func.func354();
                        }
                        Gvar.var_308[Gvar.var_2424][8] = 0;
                    }
                    if (Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2222 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_1542) {
                        Gvar.var_308[Gvar.var_2424][3] = 1;
                        Gvar.var_308[Gvar.var_2424][8] = 1;
                        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                            await Func.func354();
                        }
                        Gvar.var_308[Gvar.var_2424][8] = 0;
                    }
                    if (Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2221 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2223) {
                        Gvar.var_308[Gvar.var_2424][3] = 1;
                        Gvar.var_308[Gvar.var_2424][8] = 1;
                        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                            await Func.func354();
                        }
                        Gvar.var_308[Gvar.var_2424][8] = 0;
                    }
                    if (Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2222 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2223) {
                        Gvar.var_308[Gvar.var_2424][3] = 1;
                        Gvar.var_308[Gvar.var_2424][8] = 1;
                        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                            await Func.func354();
                        }
                        Gvar.var_308[Gvar.var_2424][8] = 0;
                    }
                    if (Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2221 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2224) {
                        Gvar.var_308[Gvar.var_2424][3] = 1;
                        Gvar.var_308[Gvar.var_2424][8] = 1;
                        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                            await Func.func354();
                        }
                        Gvar.var_308[Gvar.var_2424][8] = 0;
                    }
                    if (Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2222 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2224) {
                        Gvar.var_308[Gvar.var_2424][3] = 1;
                        Gvar.var_308[Gvar.var_2424][8] = 1;
                        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                            await Func.func354();
                        }
                        Gvar.var_308[Gvar.var_2424][8] = 0;
                    }
                }
                Gvar.var_234 = 0;
                Gvar.var_2424 = Gvar.var_2424 + 1;
            }
            Gvar.var_2426 = 0;
            Gvar.var_2425 = 0;
            if (Gvar.var_308[Gvar.var_1335][3] != 0) {
                if (Gvar.var_308[Gvar.var_1335][0] == 120 || Gvar.var_308[Gvar.var_1335][0] == 128) {
                    await Func.func358();
                    Gvar.var_283 = Gvar.var_286;
                    Gvar.var_284 = Gvar.var_287;
                    Gvar.var_286 = "しかし、ｽﾀｰﾌﾟﾗﾁﾅのｶﾞｰﾄﾞのおかげで";
                    Gvar.var_287 = "ダメージを抑えられた！";
                    Gvar.var_24 = Gvar.var_24[1];
                    Gvar.var_25 = Gvar.var_25[1];
                    Gvar.var_26 = Gvar.var_26[1];
                    await Func.func053();
                    Gvar.var_223 = 1;
                    Gvar.var_290 = 0;
                    await Func.func050();
                }
            }
            if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) <= 1 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) <= 1) {
                await Func.func1013();
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "" + Gvar.var_422 + "も巻き込まれた！";
                Gvar.var_287 = "";
                await Func.func050();
                await Func.func053();
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                if (Gvar.var_240 == 100 || Gvar.var_240 == 398 && Gvar.var_176 == 0 || Gvar.var_176 == 120 || Gvar.var_176 == 128) {
                    await Func.func358();
                    Gvar.var_283 = Gvar.var_286;
                    Gvar.var_284 = Gvar.var_287;
                    Gvar.var_286 = "しかし、ｽﾀｰﾌﾟﾗﾁﾅのｶﾞｰﾄﾞのおかげで";
                    Gvar.var_287 = "ダメージを抑えられた！";
                    Gvar.var_24 = Gvar.var_24[1];
                    Gvar.var_25 = Gvar.var_25[1];
                    Gvar.var_26 = Gvar.var_26[1];
                    await Func.func053();
                    Gvar.var_223 = 1;
                    Gvar.var_290 = 0;
                    await Func.func050();
                }
            }
            Gvar.var_308[Gvar.var_1335][8] = 0;
            Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
            Gvar.var_124 = 0;
        }
        if (Gvar.var_2758 == 13) {
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Adap.DSPLAY(161);
            Gvar.var_310 = 1;
            Gvar.var_1696 = 1;
            if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                    await Func.func354();
                    Gvar.var_1696++;
                }
            }
            else {
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                    await Func.func354();
                }
            }
            Gvar.var_310 = 0;
            Gvar.var_1696 = 0;
            Gvar.var_290 = 0;
            Gvar.var_284 = "ロッズが目から体温を奪った！";
            Adap.DSPLAY(153);
            await Func.func050();
            Gvar.var_308[Gvar.var_1335][8] = 0;
            Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
            Gvar.var_92[Gvar.var_2750][3] = 0;
            Gvar.var_308[Gvar.var_1335][23] = 1;
            await Func.func348();
        }
        if (Gvar.var_2758 == 14) {
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Gvar.var_284 = "地面に「ドジュｩウ」と書かれていた！";
            await Func.func050();
            for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                await Func.func354();
            }
            Adap.DSPLAY(175);
            Gvar.var_310 = 1;
            Gvar.var_526 = 1;
            Gvar.var_1748 = 0;
            Gvar.var_308[Gvar.var_1335][11] = 1;
            Gvar.var_1748 = 1;
            if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                    await Func.func354();
                    Gvar.var_526++;
                }
            }
            Gvar.var_507 = Gvar.var_308[Gvar.var_1335][1];
            Gvar.var_508 = Gvar.var_308[Gvar.var_1335][2];
            Gvar.var_509 = Gvar.var_308[Gvar.var_1335][1];
            Gvar.var_510 = Gvar.var_308[Gvar.var_1335][2];
            Gvar.var_93[Gvar.var_308[Gvar.var_1335][1]][Gvar.var_308[Gvar.var_1335][2]] = 0;
            Gvar.var_308[Gvar.var_1335][0] = 0;
            Gvar.var_308[Gvar.var_1335][1] = 0;
            Gvar.var_308[Gvar.var_1335][2] = 0;
            Gvar.var_512 = 1;
            await Func.func436();
            Gvar.var_512 = 0;
            if (Gvar.var_513 != 0) {
                Gvar.var_514 = Gvar.var_515;
                Gvar.var_516 = Gvar.var_517;
                Gvar.var_518 = 1;
                Gvar.var_519 = 1;
                Gvar.var_520 = 1;
                Gvar.var_521 = 1;
                Gvar.var_1996 = 1;
                await Func.func415();
                Gvar.var_1996 = 0;
                Gvar.var_521 = 0;
                Gvar.var_518 = 0;
                Gvar.var_519 = 0;
                Gvar.var_520 = 0;
            }
            Gvar.var_1748 = 0;
            Gvar.var_310 = 0;
            Gvar.var_526 = 0;
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "" + Gvar.var_3936 + "は消し炭になった！";
            await Func.func050();
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
        }
        if (Gvar.var_2758 == 15) {
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Gvar.var_284 = "";
            await Func.func050();
            Gvar.var_290 = 0;
            Adap.DSPLAY(161);
            Gvar.var_310 = 1;
            Gvar.var_1704 = 1;
            if (Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                    await Func.func354();
                    Gvar.var_1704++;
                }
            }
            else {
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                    await Func.func354();
                }
                Gvar.var_1704 = Gvar.var_1704 + 20;
            }
            Gvar.var_2711 = Adap.rnd(1);
            if (Gvar.var_308[Gvar.var_1335][23] != 0) {
                Gvar.var_2711 = 99;
            }
            if (Gvar.var_2711 == 99) {
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "見えなくて平気だった";
                Gvar.var_287 = "";
                await Func.func050();
                await Func.func053();
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                    await Func.func354();
                }
                Gvar.var_308[Gvar.var_1335][8] = 0;
                Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
                Gvar.var_92[Gvar.var_2750][3] = 0;
                Gvar.var_310 = 0;
                Gvar.var_1704 = 0;
                await Func.func358();
                return;
            }
            Adap.DSPLAY(103);
            for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                await Func.func354();
                Gvar.var_1704++;
            }
            if (Gvar.var_2711 == 0) {
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "「『能力』がボロボロになる」";
                Gvar.var_287 = "と書き込んだ";
                if (Gvar.var_308[Gvar.var_1335][20] == 1) {
                    await Func.func1013();
                    Gvar.var_286 = "「私は" + Gvar.var_422 + "を攻撃できない」";
                    Gvar.var_287 = "と書き込んだ！";
                }
                Adap.DSPLAY(118);
                await Func.func050();
                await Func.func053();
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                    await Func.func354();
                }
                Gvar.var_308[Gvar.var_1335][8] = 0;
                Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
                Gvar.var_92[Gvar.var_2750][3] = 0;
                Gvar.var_310 = 0;
                Gvar.var_1704 = 0;
                Adap.DSPLAY(226);
                if (Gvar.var_308[Gvar.var_1335][20] == 1) {
                    Gvar.var_308[Gvar.var_1335][20] = 2;
                }
                if (Gvar.var_308[Gvar.var_1335][20] == 0) {
                    Gvar.var_308[Gvar.var_1335][20] = 1;
                }
                Gvar.var_308[Gvar.var_1335][15] = 0;
                Gvar.var_308[Gvar.var_1335][30] = 0;
                if (Gvar.var_308[Gvar.var_1335][0] == 97) {
                    Gvar.var_308[Gvar.var_1335][31] = 0;
                }
                if (Gvar.var_131 == Gvar.var_1335) {
                    Gvar.var_131 = 0;
                }
            }
            if (Gvar.var_2711 == 1) {
                Adap.DSPLAY(118);
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "「思うように動けなくなる！」";
                Gvar.var_287 = "と書き込んだ";
                await Func.func050();
                await Func.func053();
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                    await Func.func354();
                }
                Gvar.var_308[Gvar.var_1335][8] = 0;
                Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
                Gvar.var_92[Gvar.var_2750][3] = 0;
                Gvar.var_310 = 0;
                Gvar.var_1704 = 0;
                Gvar.var_308[Gvar.var_1335][17] = 1;
                Adap.DSPLAY(149);
                Gvar.var_1397 = 0;
            }
            if (Gvar.var_2711 == 2) {
                Adap.DSPLAY(118);
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "「何も見えなくなってすっ飛ぶ！」";
                Gvar.var_287 = "と書き込まれた";
                await Func.func050();
                await Func.func053();
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                    await Func.func354();
                }
                Gvar.var_308[Gvar.var_1335][8] = 0;
                Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
                Gvar.var_92[Gvar.var_2750][3] = 0;
                Gvar.var_310 = 0;
                Gvar.var_1704 = 0;
                await Func.func358();
                Gvar.var_1397 = 0;
                Gvar.var_308[Gvar.var_1335][23] = 1;
                Gvar.var_2552 = 1;
                Gvar.var_3938 = Gvar.var_224;
                if (Gvar.var_308[Gvar.var_1335][5] == 8) {
                    Gvar.var_224 = 2;
                }
                if (Gvar.var_308[Gvar.var_1335][5] == 2) {
                    Gvar.var_224 = 8;
                }
                if (Gvar.var_308[Gvar.var_1335][5] == 6) {
                    Gvar.var_224 = 4;
                }
                if (Gvar.var_308[Gvar.var_1335][5] == 4) {
                    Gvar.var_224 = 6;
                }
                if (Gvar.var_308[Gvar.var_1335][5] == 9) {
                    Gvar.var_224 = 1;
                }
                if (Gvar.var_308[Gvar.var_1335][5] == 7) {
                    Gvar.var_224 = 3;
                }
                if (Gvar.var_308[Gvar.var_1335][5] == 3) {
                    Gvar.var_224 = 7;
                }
                if (Gvar.var_308[Gvar.var_1335][5] == 1) {
                    Gvar.var_224 = 9;
                }
                Gvar.var_2543 = 1;
                Gvar.var_523 = Gvar.var_308[Gvar.var_1335][1];
                Gvar.var_524 = Gvar.var_308[Gvar.var_1335][2];
                Gvar.var_345 = Gvar.var_1335;
                await Func.func697();
                Gvar.var_2552 = 0;
                Gvar.var_308[Gvar.var_1335][1] = Gvar.var_2118;
                Gvar.var_308[Gvar.var_1335][2] = Gvar.var_2119;
            }
        }
        if (Gvar.var_2758 == 26) {
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Gvar.var_284 = "";
            await Func.func050();
            Gvar.var_290 = 0;
            Gvar.var_2727 = Adap.rnd(4);
            Gvar.var_3939 = 0;
            if (Gvar.var_308[Gvar.var_1335][31] == 3 || Gvar.var_308[Gvar.var_1335][31] == 8 || Gvar.var_308[Gvar.var_1335][31] == 10 && Gvar.var_2727 == 0) {
                Gvar.var_3939 = 99;
            }
            Adap.DSPLAY(103);
            Gvar.var_308[Gvar.var_1335][11] = 1;
            Gvar.var_310 = 1;
            if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                if (Gvar.var_3939 == 0 || Gvar.var_3939 == 99) {
                    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        Gvar.var_1705 = 1;
                        await Func.func354();
                        Gvar.var_1705 = 2;
                        await Func.func354();
                    }
                }
                if (Gvar.var_3939 == 1 || Gvar.var_3939 == 2) {
                    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        Gvar.var_1705 = 3;
                        await Func.func354();
                        Gvar.var_1705 = 4;
                        await Func.func354();
                    }
                }
            }
            else {
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                    await Func.func354();
                }
            }
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            if (Gvar.var_3939 == 0) {
                Gvar.var_286 = "装備DISCを抜き取り";
                Gvar.var_287 = "攻撃と防御力が下がった";
            }
            if (Gvar.var_3939 == 1) {
                Gvar.var_286 = "視力部分のDISCを抜き取った！";
            }
            if (Gvar.var_3939 == 2) {
                Gvar.var_286 = "記憶DISCを抜き取られた！";
                Gvar.var_287 = "「思い出のない人間は死人と同じだ」";
            }
            if (Gvar.var_3939 == 99) {
                Gvar.var_286 = "スタンドDISCを抜き取った！";
                Gvar.var_287 = "" + Gvar.var_1872 + "は消滅した";
            }
            await Func.func050();
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            Gvar.var_1705 = 0;
            Gvar.var_310 = 0;
            Gvar.var_308[Gvar.var_1335][11] = 0;
            if (Gvar.var_3939 == 0) {
                if (Gvar.var_308[Gvar.var_1335][25] <= 50) {
                    Gvar.var_308[Gvar.var_1335][25] = 50;
                }
                Gvar.var_308[Gvar.var_1335][25] = Gvar.var_308[Gvar.var_1335][25] + 5;
                if (Gvar.var_308[Gvar.var_1335][25] >= 99) {
                    Gvar.var_308[Gvar.var_1335][25] = 99;
                }
                if (Gvar.var_308[Gvar.var_1335][43] <= 50) {
                    Gvar.var_308[Gvar.var_1335][43] = 50;
                }
                Gvar.var_308[Gvar.var_1335][43] = Gvar.var_308[Gvar.var_1335][43] + 5;
                if (Gvar.var_308[Gvar.var_1335][43] >= 99) {
                    Gvar.var_308[Gvar.var_1335][43] = 99;
                }
            }
            if (Gvar.var_3939 == 1) {
                Adap.DSPLAY(226);
                Gvar.var_308[Gvar.var_1335][23] = 1;
                if (Gvar.var_131 == Gvar.var_1335) {
                    Gvar.var_131 = 0;
                }
            }
            if (Gvar.var_3939 == 2) {
                Adap.DSPLAY(226);
                Gvar.var_308[Gvar.var_1335][20] = 2;
                Gvar.var_308[Gvar.var_1335][15] = 0;
                Gvar.var_308[Gvar.var_1335][30] = 0;
                if (Gvar.var_308[Gvar.var_1335][0] == 97) {
                    Gvar.var_308[Gvar.var_1335][31] = 0;
                }
                if (Gvar.var_131 == Gvar.var_1335) {
                    Gvar.var_131 = 0;
                }
            }
            if (Gvar.var_3939 == 99) {
                Gvar.var_457 = "";
                Gvar.var_456 = Gvar.var_1335;
                Gvar.var_2425 = 1;
                Gvar.var_2426 = 2;
                Gvar.var_234 = 999;
                await Func.func745();
            }
            Gvar.var_308[Gvar.var_1335][8] = 0;
            Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
            Gvar.var_92[Gvar.var_2750][3] = 0;
        }
        if (Gvar.var_2758 == 16) {
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                await Func.func354();
            }
            Adap.DSPLAY(134);
            Gvar.var_284 = "思うように動けなくなった！";
            Gvar.var_290 = 0;
            await Func.func050();
            Gvar.var_308[Gvar.var_1335][8] = 0;
            Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
            Gvar.var_92[Gvar.var_2750][3] = 0;
            Gvar.var_308[Gvar.var_1335][8] = 0;
            Gvar.var_308[Gvar.var_1335][17] = 1;
        }
        if (Gvar.var_2758 == 17) {
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Adap.DSPLAY(179);
            Gvar.var_310 = 1;
            Gvar.var_1700 = 1;
            if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                    await Func.func354();
                    Gvar.var_1700++;
                }
            }
            Gvar.var_310 = 0;
            Gvar.var_1700 = 0;
            Gvar.var_92[Gvar.var_2750][3] = 0;
            Gvar.var_268 = Gvar.var_308[Gvar.var_1335][0];
            await Func.func658();
            Gvar.var_456 = Gvar.var_1335;
            Gvar.var_345 = Gvar.var_1335;
            Gvar.var_234 = 5;
            Gvar.var_457 = "「まず足にダメーージーーッ」";
            Gvar.var_2425 = 2;
            Gvar.var_3937 = 0;
            if (Gvar.var_308[Gvar.var_1335][3] - Gvar.var_234 <= 0) {
                Gvar.var_3937 = 1;
            }
            await Func.func745();
            if (Gvar.var_3937 != 1) {
                Gvar.var_308[Gvar.var_1335][8] = 0;
                Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
                if (Gvar.var_308[Gvar.var_1335][12] == 99) {
                    Gvar.var_308[Gvar.var_1335][12] = 0;
                }
                Gvar.var_308[Gvar.var_1335][13] = 0;
                if (Gvar.var_308[Gvar.var_1335][15] == 0) {
                    Gvar.var_308[Gvar.var_1335][14] = 1;
                    Adap.DSPLAY(162);
                }
                if (Gvar.var_308[Gvar.var_1335][15] != 0) {
                    Gvar.var_308[Gvar.var_1335][14] = 0;
                    Gvar.var_308[Gvar.var_1335][15] = 0;
                }
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "足を負傷して 動きが遅くなった！";
                await Func.func050();
                await Func.func053();
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
            }
            Gvar.var_2425 = 0;
        }
        if (Gvar.var_2758 == 18) {
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Adap.DSPLAY(120);
            for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                await Func.func354();
            }
            Gvar.var_3940 = 0;
            Gvar.var_3941 = Adap.rnd(100);
            if (Gvar.var_944 < 4) {
                if (Gvar.var_3941 < 30) {
                    Gvar.var_3940 = 0;
                }
                else {
                    if (Gvar.var_3941 < 70) {
                        Gvar.var_3940 = 1;
                    }
                    else {
                        Gvar.var_3940 = 2;
                    }
                }
            }
            else {
                if (Gvar.var_944 < 7) {
                    if (Gvar.var_3941 < 30) {
                        Gvar.var_3940 = 0;
                    }
                    else {
                        if (Gvar.var_3941 < 70) {
                            Gvar.var_3940 = 2;
                        }
                        else {
                            Gvar.var_3940 = 3;
                        }
                    }
                }
                else {
                    if (Gvar.var_944 < 15) {
                        if (Gvar.var_3941 < 15) {
                            Gvar.var_3940 = 3;
                        }
                        else {
                            if (Gvar.var_3941 < 40) {
                                Gvar.var_3940 = 4;
                            }
                            else {
                                if (Gvar.var_3941 < 80) {
                                    Gvar.var_3940 = 5;
                                }
                                else {
                                    Gvar.var_3940 = 6;
                                }
                            }
                        }
                    }
                    else {
                        if (Gvar.var_944 < 20) {
                            if (Gvar.var_3941 < 30) {
                                Gvar.var_3940 = 4;
                            }
                            else {
                                if (Gvar.var_3941 < 60) {
                                    Gvar.var_3940 = 5;
                                }
                                else {
                                    Gvar.var_3940 = 6;
                                }
                            }
                        }
                        else {
                            if (Gvar.var_3941 < 10) {
                                Gvar.var_3940 = 6;
                            }
                            else {
                                if (Gvar.var_3941 < 50) {
                                    Gvar.var_3940 = 5;
                                }
                                else {
                                    Gvar.var_3940 = 7;
                                }
                            }
                        }
                    }
                }
            }
            if (Gvar.var_3940 == 0) {
                Gvar.var_310 = 1;
                Gvar.var_1559 = 1;
                Gvar.var_1561 = 1;
                Gvar.var_1560 = Adap.rnd(3);
                if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                        await Func.func354();
                        Gvar.var_1559 = Gvar.var_1559 + 1;
                        if (Gvar.var_1559 == 6) {
                            Adap.DSPLAY(103);
                        }
                    }
                }
                else {
                    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        await Func.func354();
                        if (cnt1 == 2) {
                            Adap.DSPLAY(103);
                        }
                    }
                }
                Gvar.var_234 = 5;
                Gvar.var_457 = "磁力でカナヅチが飛んできた！";
            }
            if (Gvar.var_3940 == 1) {
                Gvar.var_310 = 1;
                Gvar.var_1559 = 1;
                Gvar.var_1561 = 3;
                Gvar.var_1560 = Adap.rnd(3);
                if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                        await Func.func354();
                        Gvar.var_1559 = Gvar.var_1559 + 1;
                        if (Gvar.var_1559 == 6) {
                            Adap.DSPLAY(157);
                        }
                    }
                }
                else {
                    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        await Func.func354();
                        if (cnt1 == 2) {
                            Adap.DSPLAY(157);
                        }
                    }
                }
                Gvar.var_234 = 3;
                Gvar.var_457 = "磁力でカンヅメが飛んできた！";
            }
            if (Gvar.var_3940 == 2) {
                Gvar.var_310 = 1;
                Gvar.var_1559 = 1;
                Gvar.var_1561 = 2;
                Gvar.var_1560 = Adap.rnd(3);
                if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                        await Func.func354();
                        Gvar.var_1559 = Gvar.var_1559 + 1;
                        if (Gvar.var_1559 == 6) {
                            Adap.DSPLAY(104);
                        }
                    }
                }
                else {
                    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        await Func.func354();
                        if (cnt1 == 2) {
                            Adap.DSPLAY(104);
                        }
                    }
                }
                Gvar.var_234 = 8;
                Gvar.var_457 = "磁力でラジカセが飛んできた！";
            }
            if (Gvar.var_3940 == 3) {
                Gvar.var_310 = 1;
                Gvar.var_1558 = 1;
                if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                        await Func.func354();
                        Gvar.var_1558 = Gvar.var_1558 + 1;
                        if (Gvar.var_1558 == 6) {
                            Adap.DSPLAY(111);
                        }
                    }
                }
                else {
                    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        await Func.func354();
                        if (cnt1 == 2) {
                            Adap.DSPLAY(111);
                        }
                    }
                }
                Gvar.var_234 = 10;
                Gvar.var_457 = "磁力で刃物が飛んできた！";
            }
            if (Gvar.var_3940 == 4) {
                Gvar.var_310 = 1;
                Gvar.var_1559 = 1;
                Gvar.var_1561 = 5;
                Gvar.var_1560 = Adap.rnd(3);
                if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                        await Func.func354();
                        Gvar.var_1559 = Gvar.var_1559 + 1;
                        if (Gvar.var_1559 == 6) {
                            Adap.DSPLAY(105);
                        }
                    }
                }
                else {
                    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        await Func.func354();
                        if (cnt1 == 2) {
                            Adap.DSPLAY(105);
                        }
                    }
                }
                Gvar.var_234 = 15;
                Gvar.var_457 = "磁力で自転車が飛んできた！";
            }
            if (Gvar.var_3940 == 5) {
                Gvar.var_310 = 1;
                Gvar.var_1559 = 1;
                Gvar.var_1561 = 5;
                Gvar.var_1560 = Adap.rnd(3);
                if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                        await Func.func354();
                        Gvar.var_1559 = Gvar.var_1559 + 1;
                        if (Gvar.var_1559 == 6) {
                            Adap.DSPLAY(103);
                        }
                    }
                }
                else {
                    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        await Func.func354();
                        if (cnt1 == 2) {
                            Adap.DSPLAY(103);
                        }
                    }
                }
                Gvar.var_234 = 20;
                Gvar.var_457 = "磁力でアヴドゥルが飛んできた！";
            }
            if (Gvar.var_3940 == 6) {
                Gvar.var_310 = 1;
                Gvar.var_1562 = 1;
                if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                        await Func.func354();
                        Gvar.var_1562 = Gvar.var_1562 + 1;
                        if (Gvar.var_1562 == 6) {
                            Adap.DSPLAY(138);
                        }
                    }
                }
                else {
                    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        await Func.func354();
                        if (cnt1 == 2) {
                            Adap.DSPLAY(138);
                        }
                    }
                }
                Gvar.var_234 = Math.trunc(Gvar.var_308[Gvar.var_1335][3] / 2);
                Gvar.var_457 = "磁力で車が飛んできた！";
            }
            if (Gvar.var_3940 == 7) {
                Gvar.var_310 = 1;
                Gvar.var_1563 = 1;
                if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                        await Func.func354();
                        Gvar.var_1563 = Gvar.var_1563 + 1;
                        if (Gvar.var_1563 == 6) {
                            Adap.DSPLAY(103);
                        }
                    }
                }
                else {
                    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        await Func.func354();
                        if (cnt1 == 2) {
                            Adap.DSPLAY(103);
                        }
                    }
                }
                Gvar.var_234 = Gvar.var_308[Gvar.var_1335][3] - 1;
                Gvar.var_457 = "はさみうちだァ――――ッ！";
            }
            Gvar.var_1558 = 0;
            Gvar.var_1559 = 0;
            Gvar.var_1560 = 0;
            Gvar.var_1561 = 0;
            Gvar.var_1562 = 0;
            Gvar.var_1563 = 0;
            Gvar.var_268 = Gvar.var_308[Gvar.var_1335][0];
            await Func.func658();
            Gvar.var_456 = Gvar.var_1335;
            Gvar.var_345 = Gvar.var_1335;
            Gvar.var_2425 = 2;
            await Func.func745();
            Gvar.var_308[Gvar.var_1335][8] = 0;
            if (Gvar.var_308[Gvar.var_1335][3] > 0) {
                Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
            }
            await Func.func050();
            Gvar.var_2425 = 0;
        }
        if (Gvar.var_2758 == 19) {
            await Func.func050();
            Gvar.var_443 = 0;
            Gvar.var_2729 = 1;
            await Func.func588();
            Gvar.var_443 = 0;
            Gvar.var_2729 = 0;
            Gvar.var_284 = "";
            await Func.func358();
            Adap.DSPLAY(173);
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "　　このラクガキを見て　　うしろを";
            Gvar.var_287 = "　　ふり向いた時　　おまえらは";
            Gvar.var_24 = Gvar.var_24[1];
            Gvar.var_25 = Gvar.var_25[1];
            Gvar.var_26 = Gvar.var_26[1];
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            await Func.func358();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "";
            Gvar.var_287 = "　　　　　　　　　　　死ぬ";
            Gvar.var_24 = Gvar.var_24[1];
            Gvar.var_25 = Gvar.var_25[1];
            Gvar.var_26 = Gvar.var_26[1];
            Adap.DSPLAY(173);
            await Func.func053();
            Adap.DSPLAY(178);
            Gvar.var_310 = 1;
            Gvar.var_673 = 1;
            for (let cnt1 = 0; cnt1 < 40; ++cnt1) {
                await Func.func354();
                Gvar.var_673 = Gvar.var_673 + 1;
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
            }
            Gvar.var_310 = 0;
            Gvar.var_673 = 0;
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt1 = 0; cnt1 < 11; ++cnt1) {
                await Func.func354();
            }
            Gvar.var_91[Gvar.var_491][Gvar.var_492] = 0;
            Gvar.var_92[Gvar.var_2750][0] = 0;
            Gvar.var_92[Gvar.var_2750][1] = 0;
            Gvar.var_92[Gvar.var_2750][2] = 0;
            Gvar.var_92[Gvar.var_2750][7] = 0;
            return;
        }
        if (Gvar.var_2758 == 20) {
            Gvar.var_92[Gvar.var_2750][3] = 1;
            for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                await Func.func354();
            }
            Gvar.var_284 = "地面に「ドヒュｩウ」と書かれていた！";
            await Func.func050();
            for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                await Func.func354();
            }
            Adap.DSPLAY(121);
            Gvar.var_2552 = 1;
            Gvar.var_3938 = Gvar.var_224;
            if (Gvar.var_308[Gvar.var_1335][5] == 8) {
                Gvar.var_224 = 2;
            }
            if (Gvar.var_308[Gvar.var_1335][5] == 2) {
                Gvar.var_224 = 8;
            }
            if (Gvar.var_308[Gvar.var_1335][5] == 6) {
                Gvar.var_224 = 4;
            }
            if (Gvar.var_308[Gvar.var_1335][5] == 4) {
                Gvar.var_224 = 6;
            }
            if (Gvar.var_308[Gvar.var_1335][5] == 9) {
                Gvar.var_224 = 1;
            }
            if (Gvar.var_308[Gvar.var_1335][5] == 7) {
                Gvar.var_224 = 3;
            }
            if (Gvar.var_308[Gvar.var_1335][5] == 3) {
                Gvar.var_224 = 7;
            }
            if (Gvar.var_308[Gvar.var_1335][5] == 1) {
                Gvar.var_224 = 9;
            }
            Gvar.var_2543 = 1;
            Gvar.var_523 = Gvar.var_308[Gvar.var_1335][1];
            Gvar.var_524 = Gvar.var_308[Gvar.var_1335][2];
            Gvar.var_345 = Gvar.var_1335;
            await Func.func697();
            Gvar.var_2552 = 0;
            Gvar.var_308[Gvar.var_1335][1] = Gvar.var_2118;
            Gvar.var_308[Gvar.var_1335][2] = Gvar.var_2119;
            Gvar.var_92[Gvar.var_2750][3] = 0;
        }
        if (Gvar.var_2758 == 21) {
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Adap.DSPLAY(173);
            Gvar.var_284 = "「チュミミ～～～ン！」";
            await Func.func050();
            for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                await Func.func354();
            }
            Adap.DSPLAY(173);
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "ｴﾝﾌﾟﾚｽ「" + Gvar.var_3936 + "はここよッ！";
            Gvar.var_287 = "　　　ここにいるわよォ―――ッ」";
            await Func.func050();
            await Func.func053();
            for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
                await Func.func354();
            }
            await Func.func358();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            Gvar.var_308[Gvar.var_1335][8] = 0;
            Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
            Gvar.var_423 = 1;
            for (let cnt1 = 0; cnt1 < Gvar.var_107; ++cnt1) {
                Gvar.var_308[Gvar.var_423][12] = 0;
                Gvar.var_423 = Gvar.var_423 + 1;
            }
            Gvar.var_92[Gvar.var_2750][3] = 0;
            Gvar.var_308[Gvar.var_1335][42] = 1;
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "フロアの敵が全員 目を覚ましたが";
            Gvar.var_287 = "" + Gvar.var_3936 + "の位置がわかった！";
            await Func.func050();
            await Func.func053();
            for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                await Func.func354();
            }
        }
        if (Gvar.var_2758 == 22) {
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Gvar.var_284 = "";
            await Func.func050();
            Adap.DSPLAY(161);
            if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                Gvar.var_310 = 1;
                Gvar.var_1636 = 1;
                for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                    await Func.func354();
                    Gvar.var_1636++;
                }
            }
            else {
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                    await Func.func354();
                }
            }
            Adap.DSPLAY(129);
            Gvar.var_310 = 0;
            Gvar.var_1636 = 0;
            Gvar.var_457 = "";
            Gvar.var_456 = Gvar.var_1335;
            Gvar.var_2425 = 1;
            Gvar.var_2426 = 2;
            Gvar.var_234 = 999;
            await Func.func745();
            Gvar.var_1442 = 1;
            Adap.DSPLAY(143);
            Gvar.var_310 = 1;
            for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                await Func.func354();
                Gvar.var_1442++;
            }
            Gvar.var_310 = 0;
            Gvar.var_1442 = 0;
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = Gvar.var_3936 + "の養分を吸収し";
            Gvar.var_381 = Gvar.var_381 + 20;
            Gvar.var_287 = "満腹度が回復した。";
            if (Gvar.var_381 >= Gvar.var_649) {
                Gvar.var_381 = Gvar.var_649;
                Gvar.var_287 = "満腹度が完全回復した。";
            }
            Gvar.var_289 = 0;
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            await Func.func053();
            for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                await Func.func354();
            }
            Gvar.var_91[Gvar.var_491][Gvar.var_492] = 0;
        }
        if (Gvar.var_2758 == 23) {
            Gvar.var_2449 = 0;
            Gvar.var_1690 = 0;
            Gvar.var_968 = 0;
            if (Gvar.var_308[Gvar.var_1335][26] == 2 || (Gvar.var_308[Gvar.var_1638][44] == 1 && Gvar.var_308[Gvar.var_1638][26] != 1)) {
                Gvar.var_284 = "しかし何も持っていないようだ…";
                await Func.func050();
            }
            else {
                if (Gvar.var_367 >= 200) {
                    return;
                }
                Gvar.var_3372 = 1;
                await Func.func713();
                Gvar.var_3942 = Gvar.var_968;
                Gvar.var_257 = Gvar.var_89[Gvar.var_3942][0];
                Gvar.var_89[Gvar.var_3942][1] = Gvar.var_74 + 10;
                Gvar.var_89[Gvar.var_3942][2] = Gvar.var_75 + 10;
                Gvar.var_555 = Gvar.var_89[Gvar.var_3942][13];
                Gvar.var_2724 = Gvar.var_89[Gvar.var_3942][6];
                await Func.func524();
                Gvar.var_2732 = Gvar.var_557;
                Gvar.var_290 = 0;
                Gvar.var_284 = "" + Gvar.var_2732 + "を釣り上げた！";
                await Func.func050();
                Gvar.var_92[Gvar.var_2750][3] = 1;
                Gvar.var_308[Gvar.var_1335][8] = 1;
                Gvar.var_308[Gvar.var_1335][5] = 2;
                Gvar.var_308[Gvar.var_1335][26] = 2;
                Gvar.var_310 = 1;
                Gvar.var_1688 = 1;
                for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
                    await Func.func354();
                }
                Adap.DSPLAY(174);
                if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                    Gvar.var_875 = (Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75 + 4) * 40;
                    Gvar.var_3943 = Math.trunc(Math.abs(Gvar.var_875) / 20);
                    for (let cnt1 = 0; cnt1 < Gvar.var_3943; ++cnt1) {
                        await Func.func354();
                        Gvar.var_875 = Gvar.var_875 - 20;
                        Gvar.var_1688++;
                    }
                }
                Gvar.var_310 = 0;
                Gvar.var_1688 = 0;
                Gvar.var_308[Gvar.var_1335][8] = 0;
                Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
                Gvar.var_92[Gvar.var_2750][3] = 0;
                Gvar.var_2504 = 0;
                for (let cnt1 = 0; cnt1 < 500; ++cnt1) {
                    Gvar.var_1714 = Adap.rnd(Gvar.var_32);
                    Gvar.var_255 = Adap.rnd(Gvar.var_33);
                    if (Gvar.var_82[Gvar.var_1714][Gvar.var_255] != 0 && Gvar.var_82[Gvar.var_1714][Gvar.var_255] != Gvar.var_226 && Gvar.var_82[Gvar.var_1714][Gvar.var_255] <= 12 && Gvar.var_88[Gvar.var_1714][Gvar.var_255] == 0 && Gvar.var_84[Gvar.var_1714][Gvar.var_255] == 0 && Gvar.var_83[Gvar.var_1714][Gvar.var_255] == 0 && Gvar.var_91[Gvar.var_1714][Gvar.var_255] == 0) {
                        Gvar.var_2504 = 1;
                        break;
                    }
                    if (Gvar.var_104 == 8 && Gvar.var_82[Gvar.var_1714][Gvar.var_255] == 14 && Gvar.var_88[Gvar.var_1714][Gvar.var_255] == 0 && Gvar.var_84[Gvar.var_1714][Gvar.var_255] == 0 && Gvar.var_91[Gvar.var_1714][Gvar.var_255] == 0) {
                        Gvar.var_2504 = 1;
                        break;
                    }
                }
                if (Gvar.var_2504 == 0) {
                    for (let cnt1 = 0; cnt1 < 500; ++cnt1) {
                        Gvar.var_1714 = Adap.rnd(Gvar.var_32);
                        Gvar.var_255 = Adap.rnd(Gvar.var_33);
                        if (Gvar.var_82[Gvar.var_1714][Gvar.var_255] != 0 && Gvar.var_82[Gvar.var_1714][Gvar.var_255] <= 12 && Gvar.var_88[Gvar.var_1714][Gvar.var_255] == 0 && Gvar.var_84[Gvar.var_1714][Gvar.var_255] == 0 && Gvar.var_83[Gvar.var_1714][Gvar.var_255] == 0 && Gvar.var_91[Gvar.var_1714][Gvar.var_255] == 0) {
                            break;
                        }
                        if (Gvar.var_104 == 8 && Gvar.var_82[Gvar.var_1714][Gvar.var_255] == 14 && Gvar.var_88[Gvar.var_1714][Gvar.var_255] == 0 && Gvar.var_84[Gvar.var_1714][Gvar.var_255] == 0 && Gvar.var_91[Gvar.var_1714][Gvar.var_255] == 0) {
                            Gvar.var_2504 = 1;
                            break;
                        }
                    }
                }
                if (Gvar.var_89[Gvar.var_3942][0] < 800 || Gvar.var_89[Gvar.var_3942][0] >= 900) {
                    Gvar.var_2723 = 0;
                }
                else {
                    Gvar.var_2723 = 1;
                    if (Gvar.var_177[119] == 1 && Gvar.var_2723 == 1 && Gvar.var_176 == 0 || Gvar.var_176 == 152) {
                        await Func.func358();
                        Gvar.var_283 = Gvar.var_286;
                        Gvar.var_284 = Gvar.var_287;
                        Gvar.var_286 = "破壊されそうになったが";
                        Gvar.var_287 = "柔らかくしていて平気だった。";
                        await Func.func050();
                        await Func.func053();
                        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                            await Func.func354();
                        }
                        Gvar.var_2723 = 0;
                    }
                }
                if (Gvar.var_2723 == 0) {
                    Gvar.var_515 = Gvar.var_1714;
                    Gvar.var_517 = Gvar.var_255;
                    await Func.func764();
                    Gvar.var_88[Gvar.var_515][Gvar.var_517] = Gvar.var_958;
                    Gvar.var_89[Gvar.var_958][0] = Gvar.var_89[Gvar.var_3942][0];
                    Gvar.var_89[Gvar.var_958][1] = Gvar.var_515;
                    Gvar.var_89[Gvar.var_958][2] = Gvar.var_517;
                    Gvar.var_89[Gvar.var_958][3] = Gvar.var_89[Gvar.var_3942][3];
                    Gvar.var_89[Gvar.var_958][4] = Gvar.var_89[Gvar.var_3942][4];
                    Gvar.var_89[Gvar.var_958][5] = Gvar.var_89[Gvar.var_3942][5];
                    Gvar.var_89[Gvar.var_958][6] = Gvar.var_89[Gvar.var_3942][6];
                    Gvar.var_89[Gvar.var_958][7] = Gvar.var_89[Gvar.var_3942][7];
                    Gvar.var_89[Gvar.var_958][8] = Gvar.var_89[Gvar.var_3942][8];
                    Gvar.var_89[Gvar.var_958][9] = Gvar.var_82[Gvar.var_515][Gvar.var_517];
                    Gvar.var_89[Gvar.var_958][10] = 0;
                    Gvar.var_89[Gvar.var_958][11] = Gvar.var_89[Gvar.var_3942][11];
                    Gvar.var_89[Gvar.var_958][12] = Gvar.var_89[Gvar.var_3942][12];
                    Gvar.var_89[Gvar.var_958][13] = Gvar.var_89[Gvar.var_3942][13];
                    Gvar.var_89[Gvar.var_958][14] = Gvar.var_89[Gvar.var_3942][14];
                    Gvar.var_89[Gvar.var_958][15] = Gvar.var_89[Gvar.var_3942][15];
                    Gvar.var_89[Gvar.var_958][16] = Gvar.var_89[Gvar.var_3942][16];
                    Gvar.var_89[Gvar.var_958][17] = Gvar.var_89[Gvar.var_3942][17];
                    Gvar.var_89[Gvar.var_958][18] = Gvar.var_89[Gvar.var_3942][18];
                    Gvar.var_89[Gvar.var_958][19] = Gvar.var_89[Gvar.var_3942][19];
                    Gvar.var_89[Gvar.var_958][20] = Gvar.var_89[Gvar.var_3942][20];
                    Gvar.var_89[Gvar.var_958][21] = Gvar.var_89[Gvar.var_3942][21];
                    Gvar.var_89[Gvar.var_958][22] = Gvar.var_89[Gvar.var_3942][22];
                    Gvar.var_89[Gvar.var_958][23] = Gvar.var_89[Gvar.var_3942][23];
                    Gvar.var_89[Gvar.var_958][24] = Gvar.var_89[Gvar.var_3942][24];
                    Gvar.var_89[Gvar.var_958][25] = Gvar.var_89[Gvar.var_3942][25];
                    Gvar.var_89[Gvar.var_958][26] = Gvar.var_89[Gvar.var_3942][26];
                    Gvar.var_89[Gvar.var_958][27] = Gvar.var_89[Gvar.var_3942][27];
                    Gvar.var_89[Gvar.var_958][28] = Gvar.var_89[Gvar.var_3942][28];
                    Gvar.var_89[Gvar.var_958][29] = Gvar.var_89[Gvar.var_3942][29];
                    Gvar.var_352 = Gvar.var_958;
                    Gvar.var_257 = Gvar.var_89[Gvar.var_958][0];
                    await Func.func018();
                }
                else {
                    if (Gvar.var_89[Gvar.var_3942][0] != 806 && Gvar.var_89[Gvar.var_3942][0] != 851 && Gvar.var_89[Gvar.var_3942][0] != 852 && Gvar.var_89[Gvar.var_3942][8] >= 1) {
                        Gvar.var_2449 = 1;
                        Gvar.var_2131 = Gvar.var_89[Gvar.var_3942][8];
                        Gvar.var_2136 = 1;
                        for (let cnt1 = 0; cnt1 < Gvar.var_2131; ++cnt1) {
                            Gvar.var_340 = Gvar.var_74;
                            Gvar.var_341 = Gvar.var_75;
                            Gvar.var_74 = Gvar.var_1714;
                            Gvar.var_75 = Gvar.var_255;
                            await Func.func436();
                            Gvar.var_74 = Gvar.var_340;
                            Gvar.var_75 = Gvar.var_341;
                            if (Gvar.var_513 == 0) {
                                break;
                            }
                            await Func.func764();
                            Gvar.var_88[Gvar.var_515][Gvar.var_517] = Gvar.var_958;
                            Gvar.var_89[Gvar.var_958][0] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][0];
                            Gvar.var_89[Gvar.var_958][1] = Gvar.var_515;
                            Gvar.var_89[Gvar.var_958][2] = Gvar.var_517;
                            Gvar.var_89[Gvar.var_958][3] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][3];
                            Gvar.var_89[Gvar.var_958][4] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][4];
                            Gvar.var_89[Gvar.var_958][5] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][5];
                            Gvar.var_89[Gvar.var_958][6] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][6];
                            Gvar.var_89[Gvar.var_958][7] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][7];
                            Gvar.var_89[Gvar.var_958][8] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][8];
                            Gvar.var_89[Gvar.var_958][9] = Gvar.var_82[Gvar.var_515][Gvar.var_517];
                            Gvar.var_89[Gvar.var_958][10] = 0;
                            Gvar.var_89[Gvar.var_958][11] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][11];
                            Gvar.var_89[Gvar.var_958][12] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][12];
                            Gvar.var_89[Gvar.var_958][13] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][13];
                            Gvar.var_89[Gvar.var_958][14] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][14];
                            Gvar.var_89[Gvar.var_958][15] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][15];
                            Gvar.var_89[Gvar.var_958][16] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][16];
                            Gvar.var_89[Gvar.var_958][17] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][17];
                            Gvar.var_89[Gvar.var_958][18] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][18];
                            Gvar.var_89[Gvar.var_958][19] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][19];
                            Gvar.var_89[Gvar.var_958][20] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][20];
                            Gvar.var_89[Gvar.var_958][21] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][21];
                            Gvar.var_89[Gvar.var_958][22] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][22];
                            Gvar.var_89[Gvar.var_958][23] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][23];
                            Gvar.var_89[Gvar.var_958][24] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][24];
                            Gvar.var_89[Gvar.var_958][25] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][25];
                            Gvar.var_89[Gvar.var_958][26] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][26];
                            Gvar.var_89[Gvar.var_958][27] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][27];
                            Gvar.var_89[Gvar.var_958][28] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][28];
                            Gvar.var_89[Gvar.var_958][29] = Gvar.var_554[Gvar.var_2724][Gvar.var_2136][29];
                            Gvar.var_2136++;
                        }
                    }
                    if (Gvar.var_89[Gvar.var_3942][0] == 806) {
                        Gvar.var_2137 = Gvar.var_89[Gvar.var_3942][7] - Gvar.var_89[Gvar.var_3942][8];
                        if (Gvar.var_2137 >= 1) {
                            Gvar.var_2449 = 1;
                            Gvar.var_2138 = Gvar.var_445;
                            Gvar.var_2139 = 1;
                            Gvar.var_443 = 3;
                            Gvar.var_2140 = Gvar.var_1714;
                            Gvar.var_2141 = Gvar.var_255;
                            for (let cnt1 = 0; cnt1 < Gvar.var_2137; ++cnt1) {
                                await Func.func588();
                            }
                            Gvar.var_2139 = 0;
                            Gvar.var_443 = 0;
                            Gvar.var_445 = Gvar.var_2138;
                        }
                    }
                    if (Gvar.var_89[Gvar.var_3942][0] == 851) {
                        Gvar.var_2137 = Gvar.var_89[Gvar.var_3942][8];
                        if (Gvar.var_2137 >= 1) {
                            Gvar.var_2449 = 1;
                            Gvar.var_2138 = Gvar.var_445;
                            Gvar.var_2142 = Gvar.var_89[Gvar.var_3942][6];
                            Gvar.var_443 = 3;
                            Gvar.var_2140 = Gvar.var_1714;
                            Gvar.var_2141 = Gvar.var_255;
                            Gvar.var_2143 = 1;
                            for (let cnt1 = 0; cnt1 < Gvar.var_2137; ++cnt1) {
                                Gvar.var_2144 = Gvar.var_554[Gvar.var_2142][Gvar.var_2143][15];
                                Gvar.var_2145 = Gvar.var_554[Gvar.var_2142][Gvar.var_2143][18];
                                if (Gvar.var_2144 != 0) {
                                    await Func.func588();
                                }
                                Gvar.var_2143++;
                            }
                            Gvar.var_2144 = 0;
                            Gvar.var_443 = 0;
                            Gvar.var_445 = Gvar.var_2138;
                        }
                    }
                    if (Gvar.var_89[Gvar.var_3942][0] == 852) {
                        Gvar.var_2137 = Gvar.var_89[Gvar.var_3942][7] - Gvar.var_89[Gvar.var_3942][8];
                        if (Gvar.var_2137 >= 1) {
                            Gvar.var_2449 = 1;
                            Gvar.var_2138 = Gvar.var_445;
                            Gvar.var_2146 = 1;
                            Gvar.var_443 = 3;
                            Gvar.var_2140 = Gvar.var_1714;
                            Gvar.var_2141 = Gvar.var_255;
                            for (let cnt1 = 0; cnt1 < Gvar.var_2137; ++cnt1) {
                                await Func.func588();
                            }
                            Gvar.var_2146 = 0;
                            Gvar.var_443 = 0;
                            Gvar.var_445 = Gvar.var_2138;
                        }
                    }
                    await Func.func018();
                    await Func.func358();
                    await Func.func106();
                    Gvar.var_283 = Gvar.var_286;
                    Gvar.var_284 = Gvar.var_287;
                    if (Gvar.var_2449 == 1) {
                        Gvar.var_286 = "" + Gvar.var_2732 + "は破壊され";
                        Gvar.var_287 = "中身をバラ撒かれた。";
                    }
                    if (Gvar.var_2449 == 0) {
                        Gvar.var_286 = "" + Gvar.var_2732 + "は破壊された";
                        Gvar.var_287 = "";
                    }
                    Gvar.var_2449 = 0;
                    await Func.func050();
                    await Func.func053();
                    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                        await Func.func354();
                    }
                }
                Gvar.var_88[Gvar.var_89[0][1]][Gvar.var_89[0][2]] = 0;
                Gvar.var_88[Gvar.var_89[Gvar.var_3942][1]][Gvar.var_89[Gvar.var_3942][2]] = 0;
                Gvar.var_3944 = 0;
                for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
                    Gvar.var_89[Gvar.var_3942][Gvar.var_3944] = 0;
                    Gvar.var_89[0][Gvar.var_3944] = 0;
                    Gvar.var_3944++;
                }
                await Func.func348();
            }
        }
        if (Gvar.var_2758 == 24) {
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Gvar.var_284 = "透明な何者かを呼んでしまった！！";
            Gvar.var_289 = 0;
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            Adap.DSPLAY(170);
            for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                await Func.func354();
            }
            Gvar.var_308[Gvar.var_1335][8] = 0;
            Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
            Gvar.var_2733 = Adap.rnd(3);
            Gvar.var_2734 = 1;
            Gvar.var_443 = 1;
            for (let cnt1 = 0; cnt1 < Gvar.var_2733 + 1; ++cnt1) {
                await Func.func588();
            }
            Gvar.var_2734 = 0;
            Gvar.var_443 = 0;
            await Func.func348();
            Gvar.var_91[Gvar.var_491][Gvar.var_492] = 0;
            Gvar.var_92[Gvar.var_2750][0] = 0;
            Gvar.var_92[Gvar.var_2750][1] = 0;
            Gvar.var_92[Gvar.var_2750][2] = 0;
            Gvar.var_92[Gvar.var_2750][7] = 0;
        }
        if (Gvar.var_2758 == 25) {
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Gvar.var_310 = 1;
            Gvar.var_1703 = 1;
            for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                await Func.func354();
                if (Gvar.var_1703 == 5) {
                    Adap.DSPLAY(111);
                }
                Gvar.var_1703++;
            }
            Gvar.var_268 = Gvar.var_308[Gvar.var_1335][0];
            await Func.func658();
            Gvar.var_456 = Gvar.var_1335;
            Gvar.var_345 = Gvar.var_1335;
            Gvar.var_234 = 10;
            Gvar.var_457 = "茂みから毒針を飛ばした！";
            Gvar.var_2425 = 2;
            Gvar.var_3937 = 0;
            if (Gvar.var_308[Gvar.var_1335][3] - Gvar.var_234 <= 0) {
                Gvar.var_3937 = 1;
            }
            await Func.func745();
            Gvar.var_92[Gvar.var_2750][3] = 0;
            Gvar.var_310 = 0;
            Gvar.var_1703 = 0;
            Gvar.var_268 = Gvar.var_308[Gvar.var_1335][0];
            await Func.func658();
            if (Gvar.var_3937 == 0) {
                await Func.func358();
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "" + Gvar.var_1872 + "は体が溶けて";
                Gvar.var_287 = "防御が出来なくなった！";
                await Func.func050();
                await Func.func053();
                await Func.func358();
                Adap.DSPLAY(164);
                Gvar.var_308[Gvar.var_1335][43] = 99;
            }
            Gvar.var_308[Gvar.var_1335][8] = 0;
            Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
        }
        if (Gvar.var_2758 == 28) {
            Gvar.var_92[Gvar.var_2750][3] = 1;
            for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
                await Func.func354();
            }
            Gvar.var_310 = 1;
            Gvar.var_1457 = 1;
            if (Math.abs(Gvar.var_308[Gvar.var_1335][1] - Gvar.var_74) < 5 && Math.abs(Gvar.var_308[Gvar.var_1335][2] - Gvar.var_75) < 5) {
                for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
                    await Func.func354();
                    Gvar.var_1457++;
                    if (Gvar.var_1457 == 11) {
                        Gvar.var_308[Gvar.var_1335][8] = 1;
                        Gvar.var_308[Gvar.var_1335][5] = 2;
                        Adap.DSPLAY(181);
                        if (Gvar.var_308[Gvar.var_1335][24] == 0) {
                            Gvar.var_308[Gvar.var_1335][24] = 10;
                        }
                    }
                }
            }
            else {
                for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                    if (cnt1 == 5) {
                        Adap.DSPLAY(181);
                        if (Gvar.var_308[Gvar.var_1335][24] == 0) {
                            Gvar.var_308[Gvar.var_1335][24] = 10;
                        }
                    }
                }
            }
            Gvar.var_310 = 0;
            Gvar.var_1457 = 0;
            Gvar.var_284 = "" + Gvar.var_1872 + "の体にピンが付いた！";
            Gvar.var_289 = 0;
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            Gvar.var_92[Gvar.var_2750][3] = 0;
            Gvar.var_308[Gvar.var_1335][8] = 0;
            Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
        }
        if (Gvar.var_2758 == 95) {
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Gvar.var_310 = 1;
            Gvar.var_1702 = 1;
            for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                await Func.func354();
                Gvar.var_1702++;
                if (Gvar.var_1702 == 4) {
                    Adap.DSPLAY(111);
                }
            }
            Gvar.var_284 = "波紋入りの薔薇が右目に入った！";
            await Func.func050();
            for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
                await Func.func354();
                Gvar.var_1702++;
            }
            await Func.func358();
            Adap.DSPLAY(173);
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "ﾀﾞｲｱｰさん「フフ……は…波紋入りの";
            Gvar.var_287 = "　　　　　薔薇の棘は 痛か…ろう…」";
            await Func.func050();
            await Func.func053();
            for (let cnt1 = 0; cnt1 < 11; ++cnt1) {
                await Func.func354();
            }
            for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                Gvar.var_2703 = 1;
                await Func.func354();
                Gvar.var_2703 = 2;
                await Func.func354();
            }
            Gvar.var_310 = 0;
            Gvar.var_1702 = 0;
            Gvar.var_2703 = 0;
            Gvar.var_308[Gvar.var_1335][8] = 0;
            Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
            Gvar.var_92[Gvar.var_2750][3] = 0;
            Gvar.var_308[Gvar.var_1335][23] = 1;
            Gvar.var_91[Gvar.var_491][Gvar.var_492] = 0;
            Gvar.var_92[Gvar.var_2750][0] = 0;
            Gvar.var_92[Gvar.var_2750][1] = 0;
            Gvar.var_92[Gvar.var_2750][2] = 0;
            Gvar.var_92[Gvar.var_2750][7] = 0;
        }
        if (Gvar.var_2758 == 98) {
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Gvar.var_310 = 1;
            Gvar.var_1701 = 1;
            Gvar.var_846 = 1;
            Adap.DSPLAY(111);
            for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
                await Func.func354();
                Gvar.var_1701++;
            }
            Gvar.var_308[Gvar.var_1335][8] = 0;
            Gvar.var_308[Gvar.var_1335][5] = Gvar.var_3359;
            Gvar.var_92[Gvar.var_2750][3] = 0;
            Gvar.var_310 = 0;
            Gvar.var_1701 = 0;
            Gvar.var_2719 = Adap.rnd(5);
            Gvar.var_268 = Gvar.var_308[Gvar.var_1335][0];
            await Func.func658();
            Gvar.var_456 = Gvar.var_1335;
            Gvar.var_345 = Gvar.var_1335;
            Gvar.var_234 = 8 + Gvar.var_2719;
            Gvar.var_457 = "鏡の中からﾊﾝｸﾞﾄﾞﾏﾝが攻撃した！";
            Gvar.var_2425 = 2;
            await Func.func745();
            Gvar.var_91[Gvar.var_491][Gvar.var_492] = 0;
            Gvar.var_92[Gvar.var_2750][0] = 0;
            Gvar.var_92[Gvar.var_2750][1] = 0;
            Gvar.var_92[Gvar.var_2750][2] = 0;
            Gvar.var_92[Gvar.var_2750][7] = 0;
        }
        if (Gvar.var_2758 == 99) {
            Gvar.var_308[Gvar.var_1335][8] = 1;
            Gvar.var_308[Gvar.var_1335][5] = 2;
            Gvar.var_92[Gvar.var_2750][3] = 1;
            Adap.DSPLAY(148);
            for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                await Func.func354();
            }
            Gvar.var_284 = "下の階に落ちた！";
            await Func.func050();
            for (let cnt1 = 0; cnt1 < 8; ++cnt1) {
                await Func.func354();
            }
            Gvar.var_404 = 1;
            Gvar.var_91[Gvar.var_491][Gvar.var_492] = 0;
            Gvar.var_92[Gvar.var_2750][0] = 0;
            Gvar.var_92[Gvar.var_2750][1] = 0;
            Gvar.var_92[Gvar.var_2750][2] = 0;
            Gvar.var_92[Gvar.var_2750][7] = 0;
        }
        Gvar.var_2425 = 0;
        return;
}

export {func1012}
