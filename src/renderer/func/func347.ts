/**
 * func347 — func347 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func347(this: any) {
        Adap.dbgprt(347);
        if (Gvar.var_243 >= 1 && Gvar.var_243 < 11) {
            if (Gvar.kougeki_disc_id  == 122) {
                Gvar.var_1272 = 1120;
            }
            if (Gvar.kougeki_disc_id  == 123) {
                Gvar.var_1272 = 1280;
            }
            if (Gvar.kougeki_disc_id  == 0) {
                Gvar.var_1272 = 0;
            }
            if (Gvar.kougeki_disc_id  == 200) {
                Gvar.var_1272 = 0;
            }
            if (Gvar.kougeki_disc_id  == 202) {
                Gvar.var_1272 = 640;
            }
            if (Gvar.kougeki_disc_id  == 204) {
                Gvar.var_1272 = 640;
            }
            if (Gvar.kougeki_disc_id  == 206) {
                Gvar.var_1272 = 640;
            }
            if (Gvar.kougeki_disc_id  == 300) {
                Gvar.var_1272 = 0;
            }
            if (Gvar.kougeki_disc_id  == 301) {
                Gvar.var_1272 = 600;
            }
            if (Gvar.kougeki_disc_id  == 302) {
                Gvar.var_1272 = 0;
            }
            if (Gvar.kougeki_disc_id  == 303) {
                Gvar.var_1272 = 0;
            }
            if (Gvar.kougeki_disc_id  == 306) {
                Gvar.var_1272 = 0;
            }
            if (Gvar.kougeki_disc_id  == 308) {
                Gvar.var_1272 = 640;
            }
            if (Gvar.kougeki_disc_id  == 310) {
                Gvar.var_1272 = 0;
            }
            if (Gvar.kougeki_disc_id  == 311) {
                Gvar.var_1272 = 0;
            }
            if (Gvar.kougeki_disc_id  == 312) {
                Gvar.var_1272 = 600;
            }
            if (Gvar.kougeki_disc_id  == 314) {
                Gvar.var_1272 = 0;
            }
            if (Gvar.kougeki_disc_id  == 315) {
                Gvar.var_1272 = 2120;
            }
            if (Gvar.kougeki_disc_id  == 316) {
                Gvar.var_1272 = 0;
            }
            if (Gvar.kougeki_disc_id  == 320) {
                Gvar.var_1272 = 0;
            }
            if (Gvar.kougeki_disc_id  == 393) {
                Gvar.var_1272 = 0;
            }
            if (Gvar.kougeki_disc_id  == 395) {
                Gvar.var_1272 = 0;
            }
            if (Gvar.kougeki_disc_id  == 396) {
                Gvar.var_1272 = 0;
            }
            if (Gvar.var_1272 != 0) {
                Adap.gsel(32);
                Adap.color(0, 0, 0);
                Adap.boxf(0, 0, 160, 160);
                if (Gvar.var_243 == 1) {
                    Adap.pos(0, 0);
                    Adap.gzoom(160, 160, 11, 960, Gvar.var_1272, 40, 40, 1);
                }
                if (Gvar.var_243 == 2) {
                    Adap.pos(60, 60);
                    Adap.gzoom(40, 40, 11, 960, Gvar.var_1272, 40, 40, 1);
                }
                if (Gvar.var_243 == 3) {
                    Adap.pos(0, 0);
                    Adap.gzoom(160, 160, 11, 960, Gvar.var_1272, 40, 40, 1);
                }
                if (Gvar.var_243 == 4) {
                    Adap.pos(5, 5);
                    Adap.gzoom(150, 150, 11, 960, Gvar.var_1272, 40, 40, 1);
                }
                if (Gvar.var_243 == 5) {
                    Adap.pos(10, 10);
                    Adap.gzoom(140, 140, 11, 960, Gvar.var_1272, 40, 40, 1);
                }
                if (Gvar.var_243 == 6) {
                    Adap.pos(20, 20);
                    Adap.gzoom(120, 120, 11, 960, Gvar.var_1272, 40, 40, 1);
                }
                if (Gvar.var_243 == 7) {
                    Adap.pos(15, 15);
                    Adap.gzoom(130, 130, 11, 960, Gvar.var_1272, 40, 40, 1);
                }
                if (Gvar.var_243 == 8) {
                    Adap.pos(20, 20);
                    Adap.gzoom(120, 120, 11, 960, Gvar.var_1272, 40, 40, 1);
                }
                if (Gvar.var_243 == 9) {
                    Adap.pos(35, 35);
                    Adap.gzoom(110, 110, 11, 960, Gvar.var_1272, 40, 40, 1);
                }
                if (Gvar.var_243 == 10) {
                    Adap.pos(30, 30);
                    Adap.gzoom(100, 100, 11, 960, Gvar.var_1272, 40, 40, 1);
                }
                Adap.gsel(0);
                Adap.gmode(2, null, null, null);
                if (Gvar.var_199 == 4) {
                    Adap.pos(100 + 40, 100 - 80);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(100 - 40, 100 - 80);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(100 + 40, 100 - 80);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(100 + 40, 100 - 80);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(100 - 40, 100 - 80);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(100 + 40, 100 - 80);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(100 + 40, 100 - 80);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(100 - 40, 100 - 80);
                }
                Adap.gcopy(32, 0, 0, 160, 160);
            }
            if (Gvar.var_1272 == 0) {
                Adap.gmode(2, null, null, null);
                if (Gvar.var_243 == 1 || Gvar.var_243 == 3 || Gvar.var_243 == 5 || Gvar.var_243 == 7 || Gvar.var_243 == 9) {
                    if (Gvar.var_199 == 4) {
                        Adap.pos(160 - 40, 160 - 40);
                    }
                    if (Gvar.var_199 == 6) {
                        Adap.pos(160 + 40, 160 - 40);
                    }
                    if (Gvar.var_199 == 2) {
                        Adap.pos(160 + 20, 160);
                    }
                    if (Gvar.var_199 == 8) {
                        Adap.pos(160 + 20, 160 - 40);
                    }
                    if (Gvar.var_199 == 1) {
                        Adap.pos(160 - 40, 160);
                    }
                    if (Gvar.var_199 == 3) {
                        Adap.pos(160 + 40, 160);
                    }
                    if (Gvar.var_199 == 7) {
                        Adap.pos(160 - 20, 160 - 40);
                    }
                    if (Gvar.var_199 == 9) {
                        Adap.pos(160 + 20, 160 - 40);
                    }
                }
                if (Gvar.var_243 == 2 || Gvar.var_243 == 4 || Gvar.var_243 == 6 || Gvar.var_243 == 8 || Gvar.var_243 == 10) {
                    if (Gvar.var_199 == 4) {
                        Adap.pos(160 - 40 + 2, 160 - 40);
                    }
                    if (Gvar.var_199 == 6) {
                        Adap.pos(160 + 40 + 2, 160 - 40);
                    }
                    if (Gvar.var_199 == 2) {
                        Adap.pos(160 + 20 + 2, 160);
                    }
                    if (Gvar.var_199 == 8) {
                        Adap.pos(160 + 20 + 2, 160 - 40);
                    }
                    if (Gvar.var_199 == 1) {
                        Adap.pos(160 - 40 + 2, 160);
                    }
                    if (Gvar.var_199 == 3) {
                        Adap.pos(160 + 40 + 2, 160);
                    }
                    if (Gvar.var_199 == 7) {
                        Adap.pos(160 - 20 + 2, 160 - 40);
                    }
                    if (Gvar.var_199 == 9) {
                        Adap.pos(160 + 20 + 2, 160 - 40);
                    }
                }
                Adap.gcopy(11, 1000, 80, 40, 40);
            }
        }
        return;
}

export {func347}
