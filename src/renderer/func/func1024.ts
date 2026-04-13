import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1024(this: any) {
        Adap.dbgprt(1024);
        Gvar.var_475 = 11;
        Gvar.var_271 = 1;
        Gvar.var_1307 = 1;
        Adap.DSPLAY(121);
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "空間をけずりとる！ ";
        Gvar.var_284 = "……するとお～～～～っ！";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        Gvar.var_24 = Gvar.var_24[1];
        Gvar.var_25 = Gvar.var_25[1];
        Gvar.var_26 = Gvar.var_26[1];
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                await Func.func354();
        }
        await Func.func358();
        Gvar.var_523 = Gvar.var_74;
        Gvar.var_524 = Gvar.var_75;
        if (Gvar.var_224 == 4) {
                Gvar.var_523 = Gvar.var_523 - 1;
        }
        if (Gvar.var_224 == 6) {
                Gvar.var_523 = Gvar.var_523 + 1;
        }
        if (Gvar.var_224 == 8) {
                Gvar.var_524 = Gvar.var_524 - 1;
        }
        if (Gvar.var_224 == 2) {
                Gvar.var_524 = Gvar.var_524 + 1;
        }
        if (Gvar.var_224 == 1) {
                Gvar.var_523 = Gvar.var_523 - 1;
                Gvar.var_524 = Gvar.var_524 + 1;
        }
        if (Gvar.var_224 == 3) {
                Gvar.var_523 = Gvar.var_523 + 1;
                Gvar.var_524 = Gvar.var_524 + 1;
        }
        if (Gvar.var_224 == 7) {
                Gvar.var_523 = Gvar.var_523 - 1;
                Gvar.var_524 = Gvar.var_524 - 1;
        }
        if (Gvar.var_224 == 9) {
                Gvar.var_523 = Gvar.var_523 + 1;
                Gvar.var_524 = Gvar.var_524 - 1;
        }
        Gvar.var_2530 = Gvar.var_523;
        Gvar.var_2531 = Gvar.var_524;
        Gvar.var_2532 = Gvar.var_74;
        Gvar.var_2533 = Gvar.var_75;
        Gvar.var_523 = Gvar.var_74;
        Gvar.var_524 = Gvar.var_75;
        for (let cnt1 = 0; cnt1 < 40; ++cnt1) {
                Gvar.var_2118 = Gvar.var_523;
                Gvar.var_2119 = Gvar.var_524;
                if (Gvar.var_224 == 4) {
                        Gvar.var_523 = Gvar.var_523 - 1;
                }
                if (Gvar.var_224 == 6) {
                        Gvar.var_523 = Gvar.var_523 + 1;
                }
                if (Gvar.var_224 == 8) {
                        Gvar.var_524 = Gvar.var_524 - 1;
                }
                if (Gvar.var_224 == 2) {
                        Gvar.var_524 = Gvar.var_524 + 1;
                }
                if (Gvar.var_224 == 1) {
                        Gvar.var_523 = Gvar.var_523 - 1;
                        Gvar.var_524 = Gvar.var_524 + 1;
                }
                if (Gvar.var_224 == 3) {
                        Gvar.var_523 = Gvar.var_523 + 1;
                        Gvar.var_524 = Gvar.var_524 + 1;
                }
                if (Gvar.var_224 == 7) {
                        Gvar.var_523 = Gvar.var_523 - 1;
                        Gvar.var_524 = Gvar.var_524 - 1;
                }
                if (Gvar.var_224 == 9) {
                        Gvar.var_523 = Gvar.var_523 + 1;
                        Gvar.var_524 = Gvar.var_524 - 1;
                }
                if (Gvar.var_523 < 5 || Gvar.var_523 > Gvar.var_32 || Gvar.var_524 < 5 || Gvar.var_524 > Gvar.var_33) {
                        Gvar.var_523 = Gvar.var_2118;
                        Gvar.var_524 = Gvar.var_2119;
                }
                if (Gvar.var_82[Gvar.var_523][Gvar.var_524] == 0) {
                        break;
                }
                if (Gvar.var_93[Gvar.var_523][Gvar.var_524] > 0 || Gvar.var_88[Gvar.var_523][Gvar.var_524] > 0) {
                        if (Gvar.var_93[Gvar.var_523][Gvar.var_524] > 0) {
                                Gvar.var_2534 = Gvar.var_93[Gvar.var_523][Gvar.var_524];
                                Gvar.var_93[Gvar.var_523][Gvar.var_524] = 0;
                                if (Gvar.var_82[Gvar.var_2530][Gvar.var_2531] == 13) {
                                        Gvar.var_2535 = Gvar.var_2530 - 1;
                                        if (Gvar.var_2535 < 0) {
                                                Gvar.var_2535 = 0;
                                        }
                                        Gvar.var_2536 = Gvar.var_2530 + 1;
                                        if (Gvar.var_2536 > Gvar.var_32) {
                                                Gvar.var_2536 = Gvar.var_32;
                                        }
                                        Gvar.var_2537 = Gvar.var_2531 + 1;
                                        if (Gvar.var_2537 > Gvar.var_33) {
                                                Gvar.var_2537 = Gvar.var_33;
                                        }
                                        Gvar.var_2538 = Gvar.var_2531 - 1;
                                        if (Gvar.var_2538 < 0) {
                                                Gvar.var_2538 = 0;
                                        }
                                        Gvar.var_2539 = 0;
                                        if (Gvar.var_2539 == 0 && Gvar.var_82[Gvar.var_2535][Gvar.var_2537] != 0 && Gvar.var_82[Gvar.var_2535][Gvar.var_2537] != 13 && Gvar.var_93[Gvar.var_2535][Gvar.var_2537] == 0 && Gvar.var_73[Gvar.var_2535][Gvar.var_2537] == 0) {
                                                Gvar.var_2530 = Gvar.var_2535;
                                                Gvar.var_2531 = Gvar.var_2537;
                                                Gvar.var_2539 = 1;
                                        }
                                        if (Gvar.var_2539 == 0 && Gvar.var_82[Gvar.var_2536][Gvar.var_2537] != 0 && Gvar.var_82[Gvar.var_2536][Gvar.var_2537] != 13 && Gvar.var_93[Gvar.var_2536][Gvar.var_2537] == 0 && Gvar.var_73[Gvar.var_2536][Gvar.var_2537] == 0) {
                                                Gvar.var_2530 = Gvar.var_2536;
                                                Gvar.var_2531 = Gvar.var_2537;
                                                Gvar.var_2539 = 1;
                                        }
                                        if (Gvar.var_2539 == 0 && Gvar.var_82[Gvar.var_2535][Gvar.var_2538] != 0 && Gvar.var_82[Gvar.var_2535][Gvar.var_2538] != 13 && Gvar.var_93[Gvar.var_2535][Gvar.var_2538] == 0 && Gvar.var_73[Gvar.var_2535][Gvar.var_2538] == 0) {
                                                Gvar.var_2530 = Gvar.var_2535;
                                                Gvar.var_2531 = Gvar.var_2538;
                                                Gvar.var_2539 = 1;
                                        }
                                        if (Gvar.var_2539 == 0 && Gvar.var_82[Gvar.var_2536][Gvar.var_2538] != 0 && Gvar.var_82[Gvar.var_2536][Gvar.var_2538] != 13 && Gvar.var_93[Gvar.var_2536][Gvar.var_2538] == 0 && Gvar.var_73[Gvar.var_2536][Gvar.var_2538] == 0) {
                                                Gvar.var_2530 = Gvar.var_2536;
                                                Gvar.var_2531 = Gvar.var_2538;
                                                Gvar.var_2539 = 1;
                                        }
                                        if (Gvar.var_2539 == 0 && Gvar.var_82[Gvar.var_2535][Gvar.var_2119] != 0 && Gvar.var_82[Gvar.var_2535][Gvar.var_2119] != 13 && Gvar.var_93[Gvar.var_2535][Gvar.var_2119] == 0 && Gvar.var_73[Gvar.var_2535][Gvar.var_2119] == 0) {
                                                Gvar.var_2530 = Gvar.var_2535;
                                                Gvar.var_2539 = 1;
                                        }
                                        if (Gvar.var_2539 == 0 && Gvar.var_82[Gvar.var_2536][Gvar.var_2119] != 0 && Gvar.var_82[Gvar.var_2536][Gvar.var_2119] != 13 && Gvar.var_93[Gvar.var_2536][Gvar.var_2119] == 0 && Gvar.var_73[Gvar.var_2536][Gvar.var_2119] == 0) {
                                                Gvar.var_2530 = Gvar.var_2536;
                                                Gvar.var_2539 = 1;
                                        }
                                        if (Gvar.var_2539 == 0 && Gvar.var_82[Gvar.var_2118][Gvar.var_2537] != 0 && Gvar.var_82[Gvar.var_2118][Gvar.var_2537] != 13 && Gvar.var_93[Gvar.var_2118][Gvar.var_2537] == 0 && Gvar.var_73[Gvar.var_2118][Gvar.var_2537] == 0) {
                                                Gvar.var_2531 = Gvar.var_2537;
                                                Gvar.var_2539 = 1;
                                        }
                                        if (Gvar.var_2539 == 0 && Gvar.var_82[Gvar.var_2118][Gvar.var_2538] != 0 && Gvar.var_82[Gvar.var_2118][Gvar.var_2538] != 13 && Gvar.var_93[Gvar.var_2118][Gvar.var_2538] == 0 && Gvar.var_73[Gvar.var_2118][Gvar.var_2538] == 0) {
                                                Gvar.var_2531 = Gvar.var_2538;
                                                Gvar.var_2539 = 1;
                                        }
                                }
                                Gvar.var_308[Gvar.var_2534][1] = Gvar.var_2530;
                                Gvar.var_308[Gvar.var_2534][2] = Gvar.var_2531;
                                Gvar.var_93[Gvar.var_2530][Gvar.var_2531] = Gvar.var_2534;
                        }
                        if (Gvar.var_88[Gvar.var_523][Gvar.var_524] > 0) {
                                if (Gvar.var_84[Gvar.var_2532][Gvar.var_2533] >= 1 || Gvar.var_88[Gvar.var_2532][Gvar.var_2533] != 0) {
                                        if (Gvar.var_224 == 4) {
                                                Gvar.var_2532 = Gvar.var_2532 - 1;
                                        }
                                        if (Gvar.var_224 == 6) {
                                                Gvar.var_2532 = Gvar.var_2532 + 1;
                                        }
                                        if (Gvar.var_224 == 8) {
                                                Gvar.var_2533 = Gvar.var_2533 - 1;
                                        }
                                        if (Gvar.var_224 == 2) {
                                                Gvar.var_2533 = Gvar.var_2533 + 1;
                                        }
                                        if (Gvar.var_224 == 1) {
                                                Gvar.var_2532 = Gvar.var_2532 - 1;
                                                Gvar.var_2533 = Gvar.var_524 + 1;
                                        }
                                        if (Gvar.var_224 == 3) {
                                                Gvar.var_2532 = Gvar.var_2532 + 1;
                                                Gvar.var_2533 = Gvar.var_524 + 1;
                                        }
                                        if (Gvar.var_224 == 7) {
                                                Gvar.var_2532 = Gvar.var_2532 - 1;
                                                Gvar.var_2533 = Gvar.var_524 - 1;
                                        }
                                        if (Gvar.var_224 == 9) {
                                                Gvar.var_2532 = Gvar.var_2532 + 1;
                                                Gvar.var_2533 = Gvar.var_524 - 1;
                                        }
                                }
                                Gvar.var_2534 = Gvar.var_88[Gvar.var_523][Gvar.var_524];
                                Gvar.var_88[Gvar.var_523][Gvar.var_524] = 0;
                                Gvar.var_89[Gvar.var_2534][1] = Gvar.var_2532;
                                Gvar.var_89[Gvar.var_2534][2] = Gvar.var_2533;
                                Gvar.var_88[Gvar.var_2532][Gvar.var_2533] = Gvar.var_2534;
                        }
                        Gvar.var_223 = 0;
                        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                                await Func.func354();
                        }
                        break;
                }
        }
        Gvar.var_476 = 0;
        return;
}

export {func1024}
