/**
 * func0853 — func853 不明
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func0853(this: any) {
    Adap.dbgprt(853);
    await Func.func0354();
    await Func.func0084();
    if (Gvar.var_264 == 1) {
        Gvar.var_1319 = 0;
        await Func.func0854();
    }
    if (Gvar.var_292 == 1 && Gvar.var_3474 != 6) {
        Adap.DSPLAY(100);
        Gvar.var_3474 = Gvar.var_3474 + 1;
        Gvar.var_3475 = Gvar.var_3475 - 15;
        await Func.func0354();
        await Func.func0354();
    }
    if (Gvar.var_295 == 1 && Gvar.var_3474 != 1) {
        Adap.DSPLAY(100);
        Gvar.var_3474 = Gvar.var_3474 - 1;
        Gvar.var_3475 = Gvar.var_3475 + 15;
        await Func.func0354();
        await Func.func0354();
    }
    if (Gvar.var_293 == 1) {
        Adap.DSPLAY(100);
        if (Gvar.var_3474 == 1) {
            Gvar.var_3465 = Gvar.var_3465 + 1;
            if (Gvar.var_3465 == 10) {
                Gvar.var_3465 = 0;
            }
        }
        if (Gvar.var_3474 == 2) {
            Gvar.var_3466 = Gvar.var_3466 + 1;
            if (Gvar.var_3466 == 10) {
                Gvar.var_3466 = 0;
            }
        }
        if (Gvar.var_3474 == 3) {
            Gvar.var_3467 = Gvar.var_3467 + 1;
            if (Gvar.var_3467 == 10) {
                Gvar.var_3467 = 0;
            }
        }
        if (Gvar.var_3474 == 4) {
            Gvar.var_3468 = Gvar.var_3468 + 1;
            if (Gvar.var_3468 == 10) {
                Gvar.var_3468 = 0;
            }
        }
        if (Gvar.var_3474 == 5) {
            Gvar.var_3469 = Gvar.var_3469 + 1;
            if (Gvar.var_3469 == 10) {
                Gvar.var_3469 = 0;
            }
        }
        if (Gvar.var_3474 == 6) {
            Gvar.var_3470 = Gvar.var_3470 + 1;
            if (Gvar.var_3470 == 10) {
                Gvar.var_3470 = 0;
            }
        }
        Gvar.var_3471 = Gvar.var_3470 * 100000 + Gvar.var_3469 * 10000 + Gvar.var_3468 * 1000 + Gvar.var_3467 * 100 + Gvar.var_3466 * 10 + Gvar.var_3465;
        if (Gvar.var_1319 == 1 && Gvar.var_3471 > Gvar.var_483) {
            Gvar.var_3476 = Math.floor(Gvar.var_483 / 100000);
            Gvar.var_3477 = Math.floor((Gvar.var_483 - Gvar.var_3476 * 100000) / 10000);
            Gvar.var_3478 = Math.floor((Gvar.var_483 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000) / 1000);
            Gvar.var_3479 = Math.floor((Gvar.var_483 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000 - Gvar.var_3478 * 1000) / 100);
            Gvar.var_3480 = Math.floor((Gvar.var_483 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000 - Gvar.var_3478 * 1000 - Gvar.var_3479 * 100) / 10);
            Gvar.var_678 = Gvar.var_483 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000 - Gvar.var_3478 * 1000 - Gvar.var_3479 * 100 - Gvar.var_3480 * 10;
            Gvar.var_3465 = Gvar.var_678;
            Gvar.var_3466 = Gvar.var_3480;
            Gvar.var_3467 = Gvar.var_3479;
            Gvar.var_3468 = Gvar.var_3478;
            Gvar.var_3469 = Gvar.var_3477;
            Gvar.var_3470 = Gvar.var_3476;
            Gvar.var_3471 = Gvar.var_483;
        }
        Gvar.var_3472 = Gvar.var_1134 + Gvar.var_3471;
        if (Gvar.var_1319 == 1 && Gvar.var_3472 >= 999999) {
            Gvar.var_3473 = 999999 - Gvar.var_1134;
            Gvar.var_3476 = Math.floor(Gvar.var_3473 / 100000);
            Gvar.var_3477 = Math.floor((Gvar.var_3473 - Gvar.var_3476 * 100000) / 10000);
            Gvar.var_3478 = Math.floor((Gvar.var_3473 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000) / 1000);
            Gvar.var_3479 = Math.floor((Gvar.var_3473 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000 - Gvar.var_3478 * 1000) / 100);
            Gvar.var_3480 = Math.floor((Gvar.var_3473 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000 - Gvar.var_3478 * 1000 - Gvar.var_3479 * 100) / 10);
            Gvar.var_678 = Gvar.var_3473 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000 - Gvar.var_3478 * 1000 - Gvar.var_3479 * 100 - Gvar.var_3480 * 10;
            Gvar.var_3465 = Gvar.var_678;
            Gvar.var_3466 = Gvar.var_3480;
            Gvar.var_3467 = Gvar.var_3479;
            Gvar.var_3468 = Gvar.var_3478;
            Gvar.var_3469 = Gvar.var_3477;
            Gvar.var_3470 = Gvar.var_3476;
            Gvar.var_3471 = Gvar.var_3473;
        }
        if (Gvar.var_1319 == 2 && Gvar.var_3471 > Gvar.var_1134) {
            Gvar.var_3476 = Math.floor(Gvar.var_1134 / 100000);
            Gvar.var_3477 = Math.floor((Gvar.var_1134 - Gvar.var_3476 * 100000) / 10000);
            Gvar.var_3478 = Math.floor((Gvar.var_1134 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000) / 1000);
            Gvar.var_3479 = Math.floor((Gvar.var_1134 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000 - Gvar.var_3478 * 1000) / 100);
            Gvar.var_3480 = Math.floor((Gvar.var_1134 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000 - Gvar.var_3478 * 1000 - Gvar.var_3479 * 100) / 10);
            Gvar.var_678 = Gvar.var_1134 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000 - Gvar.var_3478 * 1000 - Gvar.var_3479 * 100 - Gvar.var_3480 * 10;
            Gvar.var_3465 = Gvar.var_678;
            Gvar.var_3466 = Gvar.var_3480;
            Gvar.var_3467 = Gvar.var_3479;
            Gvar.var_3468 = Gvar.var_3478;
            Gvar.var_3469 = Gvar.var_3477;
            Gvar.var_3470 = Gvar.var_3476;
            Gvar.var_3471 = Gvar.var_1134;
        }
        await Func.func0354();
        await Func.func0354();
    }
    if (Gvar.var_297 == 1) {
        Adap.DSPLAY(100);
        if (Gvar.var_3474 == 1) {
            Gvar.var_3465 = Gvar.var_3465 - 1;
            if (Gvar.var_3465 < 0) {
                Gvar.var_3465 = 9;
            }
        }
        if (Gvar.var_3474 == 2) {
            Gvar.var_3466 = Gvar.var_3466 - 1;
            if (Gvar.var_3466 < 0) {
                Gvar.var_3466 = 9;
            }
        }
        if (Gvar.var_3474 == 3) {
            Gvar.var_3467 = Gvar.var_3467 - 1;
            if (Gvar.var_3467 < 0) {
                Gvar.var_3467 = 9;
            }
        }
        if (Gvar.var_3474 == 4) {
            Gvar.var_3468 = Gvar.var_3468 - 1;
            if (Gvar.var_3468 < 0) {
                Gvar.var_3468 = 9;
            }
        }
        if (Gvar.var_3474 == 5) {
            Gvar.var_3469 = Gvar.var_3469 - 1;
            if (Gvar.var_3469 < 0) {
                Gvar.var_3469 = 9;
            }
        }
        if (Gvar.var_3474 == 6) {
            Gvar.var_3470 = Gvar.var_3470 - 1;
            if (Gvar.var_3470 < 0) {
                Gvar.var_3470 = 9;
            }
        }
        Gvar.var_3471 = Gvar.var_3470 * 100000 + Gvar.var_3469 * 10000 + Gvar.var_3468 * 1000 + Gvar.var_3467 * 100 + Gvar.var_3466 * 10 + Gvar.var_3465;
        if (Gvar.var_1319 == 1 && Gvar.var_3471 > Gvar.var_483) {
            Gvar.var_3476 = Math.floor(Gvar.var_483 / 100000);
            Gvar.var_3477 = Math.floor((Gvar.var_483 - Gvar.var_3476 * 100000) / 10000);
            Gvar.var_3478 = Math.floor((Gvar.var_483 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000) / 1000);
            Gvar.var_3479 = Math.floor((Gvar.var_483 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000 - Gvar.var_3478 * 1000) / 100);
            Gvar.var_3480 = Math.floor((Gvar.var_483 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000 - Gvar.var_3478 * 1000 - Gvar.var_3479 * 100) / 10);
            Gvar.var_678 = Gvar.var_483 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000 - Gvar.var_3478 * 1000 - Gvar.var_3479 * 100 - Gvar.var_3480 * 10;
            Gvar.var_3465 = Gvar.var_678;
            Gvar.var_3466 = Gvar.var_3480;
            Gvar.var_3467 = Gvar.var_3479;
            Gvar.var_3468 = Gvar.var_3478;
            Gvar.var_3469 = Gvar.var_3477;
            Gvar.var_3470 = Gvar.var_3476;
            Gvar.var_3471 = Gvar.var_483;
        }
        Gvar.var_3472 = Gvar.var_1134 + Gvar.var_3471;
        if (Gvar.var_1319 == 1 && Gvar.var_3472 >= 999999) {
            Gvar.var_3473 = 999999 - Gvar.var_1134;
            Gvar.var_3476 = Math.floor(Gvar.var_3473 / 100000);
            Gvar.var_3477 = Math.floor((Gvar.var_3473 - Gvar.var_3476 * 100000) / 10000);
            Gvar.var_3478 = Math.floor((Gvar.var_3473 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000) / 1000);
            Gvar.var_3479 = Math.floor((Gvar.var_3473 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000 - Gvar.var_3478 * 1000) / 100);
            Gvar.var_3480 = Math.floor((Gvar.var_3473 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000 - Gvar.var_3478 * 1000 - Gvar.var_3479 * 100) / 10);
            Gvar.var_678 = Gvar.var_3473 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000 - Gvar.var_3478 * 1000 - Gvar.var_3479 * 100 - Gvar.var_3480 * 10;
            Gvar.var_3465 = Gvar.var_678;
            Gvar.var_3466 = Gvar.var_3480;
            Gvar.var_3467 = Gvar.var_3479;
            Gvar.var_3468 = Gvar.var_3478;
            Gvar.var_3469 = Gvar.var_3477;
            Gvar.var_3470 = Gvar.var_3476;
            Gvar.var_3471 = Gvar.var_3473;
        }
        if (Gvar.var_1319 == 2 && Gvar.var_3471 > Gvar.var_1134) {
            Gvar.var_3476 = Math.floor(Gvar.var_1134 / 100000);
            Gvar.var_3477 = Math.floor((Gvar.var_1134 - Gvar.var_3476 * 100000) / 10000);
            Gvar.var_3478 = Math.floor((Gvar.var_1134 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000) / 1000);
            Gvar.var_3479 = Math.floor((Gvar.var_1134 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000 - Gvar.var_3478 * 1000) / 100);
            Gvar.var_3480 = Math.floor((Gvar.var_1134 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000 - Gvar.var_3478 * 1000 - Gvar.var_3479 * 100) / 10);
            Gvar.var_678 = Gvar.var_1134 - Gvar.var_3476 * 100000 - Gvar.var_3477 * 10000 - Gvar.var_3478 * 1000 - Gvar.var_3479 * 100 - Gvar.var_3480 * 10;
            Gvar.var_3465 = Gvar.var_678;
            Gvar.var_3466 = Gvar.var_3480;
            Gvar.var_3467 = Gvar.var_3479;
            Gvar.var_3468 = Gvar.var_3478;
            Gvar.var_3469 = Gvar.var_3477;
            Gvar.var_3470 = Gvar.var_3476;
            Gvar.var_3471 = Gvar.var_1134;
        }
        await Func.func0354();
        await Func.func0354();
    }
    if (Gvar.var_267 == 1 || Gvar.var_272 == 1) {
        if (Gvar.var_1319 == 1) {
            Gvar.var_1134 = Gvar.var_1134 + Gvar.var_3471;
            Gvar.var_483 = Gvar.var_483 - Gvar.var_3471;
            await Func.func0854(); return;
        }
        if (Gvar.var_1319 == 2) {
            Gvar.var_1134 = Gvar.var_1134 - Gvar.var_3471;
            Gvar.var_483 = Gvar.var_483 + Gvar.var_3471;
            if (Gvar.var_483 > 999999) {
                Gvar.var_483 = 999999;
            }
            await Func.func0854(); return;
        }
    }
    await Func.func0853(); return;
}

export { func0853 }
