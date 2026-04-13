import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func0997(this: any) {
        Adap.dbgprt(997);
        Adap.pos(0, 0);
        Adap.gcopy(37, 0, 0, 340, 340);
        Adap.pos(250, 100);
        Adap.gcopy(21, 0, 800, 40, 40);
        Adap.pos(50, 100);
        if (Gvar.var_176 == 0) {
                Gvar.var_1369 = 3;
                Gvar.var_1370 = 3;
                Gvar.var_1371 = 0;
        }
        await Func.func1016();
        Adap.gcopy(Gvar.var_1369, 40, Gvar.var_1371, 40, 40);
        Adap.pos(140, 100);
        Adap.gcopy(38, 60, 400, 60, 90);
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
                Adap.pos(70 + cnt1 * 50, 310);
                Adap.gcopy(38, 160 + cnt1 * 80, 375, 45, 15);
        }
        if (Gvar.var_3907 == 1) {
                for (let cnt1 = 0; cnt1 < Gvar.var_3908; ++cnt1) {
                        Adap.pos(65 + Math.floor(cnt1 / 5) * 13, 145 - cnt1 % 5 * 4);
                        Adap.gcopy(38, 80, 320, 11, 9);
                }
                for (let cnt1 = 0; cnt1 < Gvar.var_3908; ++cnt1) {
                        Adap.pos(250 + Math.floor(cnt1 / 5) * 13, 145 - cnt1 % 5 * 4);
                        Adap.gcopy(38, 80, 320, 11, 9);
                }
                Gvar.var_3908 = Gvar.var_3908 + 1;
                if (Gvar.var_3908 == 10) {
                        Gvar.var_3907 = 2;
                        Gvar.var_3908 = 0;
                }
        }
        if (Gvar.var_3907 == 2) {
                for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                        Adap.pos(65 + Math.floor(cnt1 / 5) * 13, 145 - cnt1 % 5 * 4);
                        Adap.gcopy(38, 80, 320, 11, 9);
                }
                for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                        Adap.pos(250 + Math.floor(cnt1 / 5) * 13, 145 - cnt1 % 5 * 4);
                        Adap.gcopy(38, 80, 320, 11, 9);
                }
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        Gvar.var_3911[cnt1] = (Gvar.var_3909[cnt1] - 140) / 10 + Gvar.var_3911[cnt1];
                        Gvar.var_3910[cnt1] = (10 - 100) / 10 + Gvar.var_3910[cnt1];
                        Adap.pos(Gvar.var_3911[cnt1], Gvar.var_3910[cnt1]);
                        Adap.gcopy(38, 0, 400, 60, 80);
                }
                Gvar.var_3908 = Gvar.var_3908 + 1;
                if (Gvar.var_3908 == 10) {
                        Gvar.var_3907 = 3;
                        Gvar.var_3908 = 0;
                        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                                Gvar.var_3911[cnt2] = 140;
                                Gvar.var_3910[cnt2] = 100;
                        }
                }
        }
        if (Gvar.var_3907 == 3) {
                for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                        Adap.pos(65 + Math.floor(cnt1 / 5) * 13, 145 - cnt1 % 5 * 4);
                        Adap.gcopy(38, 80, 320, 11, 9);
                }
                for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                        Adap.pos(250 + Math.floor(cnt1 / 5) * 13, 145 - cnt1 % 5 * 4);
                        Adap.gcopy(38, 80, 320, 11, 9);
                }
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        Adap.pos(Gvar.var_3909[cnt1], 10);
                        Adap.gcopy(38, 0, 400, 60, 80);
                }
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        Gvar.var_3911[cnt1] = (Gvar.var_3909[cnt1] - 140) / 10 + Gvar.var_3911[cnt1];
                        Gvar.var_3910[cnt1] = (200 - 100) / 10 + Gvar.var_3910[cnt1];
                        Adap.pos(Gvar.var_3911[cnt1], Gvar.var_3910[cnt1]);
                        Adap.gcopy(38, 0, 400, 60, 80);
                }
                Gvar.var_3908 = Gvar.var_3908 + 1;
                if (Gvar.var_3908 == 10) {
                        Gvar.var_3907 = 4;
                        Gvar.var_3908 = 0;
                }
        }
        if (Gvar.var_3907 == 4) {
                for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
                        Adap.pos(65 + Math.floor(cnt1 / 5) * 13, 145 - cnt1 % 5 * 4);
                        Adap.gcopy(38, 80, 320, 11, 9);
                }
                for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
                        Adap.pos(250 + Math.floor(cnt1 / 5) * 13, 145 - cnt1 % 5 * 4);
                        Adap.gcopy(38, 80, 320, 11, 9);
                }
                Adap.pos(120, 180);
                Adap.gcopy(38, 80, 320, 11, 9);
                Adap.pos(210, 180);
                Adap.gcopy(38, 80, 320, 11, 9);
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        Adap.pos(Gvar.var_3909[cnt1], 10);
                        Adap.gcopy(38, 0, 400, 60, 80);
                }
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        Adap.pos(Gvar.var_3909[cnt1], 200);
                        Adap.gcopy(38, 0, 400, 60, 80);
                }
                await Func.func084();
                if (Gvar.var_267 == 1) {
                        Gvar.var_3907 = 5;
                }
        }
        if (Gvar.var_3907 == 5) {
                for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
                        Adap.pos(65 + Math.floor(cnt1 / 5) * 13, 145 - cnt1 % 5 * 4);
                        Adap.gcopy(38, 80, 320, 11, 9);
                }
                for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
                        Adap.pos(250 + Math.floor(cnt1 / 5) * 13, 145 - cnt1 % 5 * 4);
                        Adap.gcopy(38, 80, 320, 11, 9);
                }
                Adap.pos(120, 180);
                Adap.gcopy(38, 80, 320, 11, 9);
                Adap.pos(210, 180);
                Adap.gcopy(38, 80, 320, 11, 9);
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        Adap.pos(Gvar.var_3909[cnt1], 10);
                        Adap.gcopy(38, 0, 400, 60, 80);
                }
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        Gvar.var_3912[cnt1] = Adap.rnd(53);
                        Adap.pos(Gvar.var_3909[cnt1], 200);
                        Adap.gcopy(38, Gvar.var_3912[cnt1] % 13 * 60, Math.floor(Gvar.var_3912[cnt1] / 13) * 80, 60, 80);
                }
                Gvar.var_3907 = 6;
        }
        if (Gvar.var_3907 == 6) {
                for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
                        Adap.pos(65 + Math.floor(cnt1 / 5) * 13, 145 - cnt1 % 5 * 4);
                        Adap.gcopy(38, 80, 320, 11, 9);
                }
                for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
                        Adap.pos(250 + Math.floor(cnt1 / 5) * 13, 145 - cnt1 % 5 * 4);
                        Adap.gcopy(38, 80, 320, 11, 9);
                }
                Adap.pos(120, 180);
                Adap.gcopy(38, 80, 320, 11, 9);
                Adap.pos(210, 180);
                Adap.gcopy(38, 80, 320, 11, 9);
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        Adap.pos(Gvar.var_3909[cnt1], 10);
                        Adap.gcopy(38, 0, 400, 60, 80);
                }
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        Adap.pos(Gvar.var_3909[cnt1], 200);
                        Adap.gcopy(38, Gvar.var_3912[cnt1] % 13 * 60, Math.floor(Gvar.var_3912[cnt1] / 13) * 80, 60, 80);
                        Adap.pos(Gvar.var_3909[cnt1] + 7, 290);
                        Adap.gcopy(38, 80, 360 + Gvar.var_3913[cnt1] * 15, 45, 15);
                }
                Adap.pos(Gvar.var_3909[Gvar.var_3914] + 7, 290);
                Adap.gcopy(38, 480, 360, 45, 15);
        }
        return;
}

export {func0997}
