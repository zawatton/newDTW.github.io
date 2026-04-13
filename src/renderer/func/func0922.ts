import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func863
async function func0922(this: any) {
    if (Gvar.mousex >= Gvar.var_3510 && Gvar.mousex <= Gvar.var_3510 + 40 && Gvar.mousey >= Gvar.var_3511 && Gvar.mousey <= Gvar.var_3511 + 40) {
        Gvar.var_3565 = 0;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func0911();
        }
        await Func.func0910();
        return;
    }

    if (Gvar.mousex >= Gvar.var_3512 && Gvar.mousex <= Gvar.var_3512 + 40 && Gvar.mousey >= Gvar.var_3513 && Gvar.mousey <= Gvar.var_3513 + 40) {
        Gvar.var_3565 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func0911();
        }
        await Func.func0910();
        return;
    }

    if (Gvar.mousex >= Gvar.var_3514 && Gvar.mousex <= Gvar.var_3514 + 40 && Gvar.mousey >= Gvar.var_3515 && Gvar.mousey <= Gvar.var_3515 + 40) {
        Gvar.var_3565 = 2;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func0911();
        }
        await Func.func0910();
        return;
    }

    if (Gvar.mousex >= Gvar.var_3516 && Gvar.mousex <= Gvar.var_3516 + 40 && Gvar.mousey >= Gvar.var_3517 && Gvar.mousey <= Gvar.var_3517 + 40) {
        Gvar.var_3565 = 3;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func0911();
        }
        await Func.func0910();
        return;
    }

    if (Gvar.mousex >= Gvar.var_3518 && Gvar.mousex <= Gvar.var_3518 + 40 && Gvar.mousey >= Gvar.var_3519 && Gvar.mousey <= Gvar.var_3519 + 40) {
        Gvar.var_3565 = 4;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func0911();
        }
        await Func.func0910();
        return;
    }
    if (Gvar.mousex >= Gvar.var_3520 && Gvar.mousex <= Gvar.var_3520 + 40 && Gvar.mousey >= Gvar.var_3521 && Gvar.mousey <= Gvar.var_3521 + 40) {
        Gvar.var_3565 = 5;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func0911();
        }
        await Func.func0910();
        return;
    }

    if (Gvar.mousex >= Gvar.var_3522 && Gvar.mousex <= Gvar.var_3522 + 40 && Gvar.mousey >= Gvar.var_3523 && Gvar.mousey <= Gvar.var_3523 + 40) {
        Gvar.var_3565 = 6;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func0911();
        }
        await Func.func0910();
        return;
    }
    if (Gvar.mousex >= Gvar.var_3528 && Gvar.mousex <= Gvar.var_3528 + 40 && Gvar.mousey >= Gvar.var_3529 && Gvar.mousey <= Gvar.var_3529 + 40) {
        Gvar.var_3565 = 7;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func0911();
        }
        await Func.func0910();
        return;
    }

    if (Gvar.mousex >= Gvar.var_3524 && Gvar.mousex <= Gvar.var_3524 + 40 && Gvar.mousey >= Gvar.var_3525 && Gvar.mousey <= Gvar.var_3525 + 40) {
        Gvar.var_3565 = 8;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func0911();
        }
        await Func.func0910();
        return;
    }

    if (Gvar.mousex >= Gvar.var_3526 && Gvar.mousex <= Gvar.var_3526 + 40 && Gvar.mousey >= Gvar.var_3527 && Gvar.mousey <= Gvar.var_3527 + 40) {
        Gvar.var_3565 = 9;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func0911();
        }
        await Func.func0910();
        return;
    }

    if (Gvar.mousex >= 362 && Gvar.mousex <= 517 && Gvar.mousey >= 206 && Gvar.mousey <= 304) {

        Gvar.var_3325 = Math.floor((Gvar.mousex - 362) / 3);
        Gvar.var_3326 = Math.floor((Gvar.mousey - 206) / 3);
        Gvar.var_66 = Gvar.var_3325;
        Gvar.var_67 = Gvar.var_3326;
        if (Gvar.var_66 < 3) {
            Gvar.var_66 = 3;
        }
        if (Gvar.var_66 > 49) {
            Gvar.var_66 = 49;
        }
        if (Gvar.var_67 < 3) {
            Gvar.var_67 = 3;
        }
        if (Gvar.var_67 > 30) {
            Gvar.var_67 = 30;
        }
        await Func.func0911();
        await Func.func0910();
        return;
    }

    if (Gvar.mousex < 330 && Gvar.mousex > 10 && Gvar.mousey > 10 && Gvar.mousey < 330 && await Adap.ginfo(2) != (-1) && await Adap.ginfo(0) > Gvar.var_3583 && await Adap.ginfo(0) < Gvar.var_3585 && await Adap.ginfo(1) > Gvar.var_3584 && await Adap.ginfo(1) < Gvar.var_3586) {
        Gvar.var_3614 = Gvar.var_3578;
        Gvar.var_3615 = Gvar.var_3579;
        if (Gvar.var_3614 < 5 || Gvar.var_3614 > 56 || Gvar.var_3615 < 5 || Gvar.var_3615 > 37) {
            await Func.func0910();
            return;
        }
        if (Gvar.var_3565 == 0) {
            Gvar.var_71[Gvar.var_3614][Gvar.var_3615] = Gvar.var_3569;
            await Func.func0923();
        }
        if (Gvar.var_3565 == 1) {
            Gvar.var_71[Gvar.var_3614][Gvar.var_3615] = 14;
            await Func.func0923();
        }
        if (Gvar.var_3565 == 2) {
            if (Gvar.var_71[Gvar.var_3614][Gvar.var_3615] != 0) {
                await Func.func0925();
                Gvar.var_71[Gvar.var_3614][Gvar.var_3615] = 0;
                await Func.func0923();
            }
        }
        if (Gvar.var_3565 == 3) {
            if (Gvar.var_71[Gvar.var_3614][Gvar.var_3615] != 13) {
                await Func.func0925();
                Gvar.var_71[Gvar.var_3614][Gvar.var_3615] = 13;
                await Func.func0923();
            }
        }
        if (Gvar.var_3565 == 4) {
            if (Gvar.var_73[Gvar.var_3614][Gvar.var_3615] != 0 || Gvar.var_65[Gvar.var_3614][Gvar.var_3615] != 0 || Gvar.var_82[Gvar.var_3614][Gvar.var_3615] != 0 || Gvar.var_77[Gvar.var_3614][Gvar.var_3615] != 0 || Gvar.var_80[Gvar.var_3614][Gvar.var_3615] != 0) {
                await Func.func0925();
            }
        }
        if (Gvar.var_3565 >= 5) {
            if (Gvar.var_71[Gvar.var_3614][Gvar.var_3615] == 0 || Gvar.var_71[Gvar.var_3614][Gvar.var_3615] == 13) {
                Gvar.var_3593 = 2;
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    await Func.func0911();
                }
                Gvar.var_3593 = 0;
                await Func.func0910();
                return;
            }
        }
        if (Gvar.var_3565 == 5) {
            if (Gvar.var_73[Gvar.var_3614][Gvar.var_3615] == 0) {
                await Func.func0925();
        
                Gvar.var_73 = Adap.dim(70, 70, null, null);
                Gvar.var_73[Gvar.var_3614][Gvar.var_3615] = 1;
                Gvar.var_3327 = Gvar.var_3614;
                Gvar.var_3328 = Gvar.var_3615;
            }
        }
        if (Gvar.var_3565 == 6) {
            if (Gvar.var_65[Gvar.var_3614][Gvar.var_3615] == 0) {
                await Func.func0925();
        
                Gvar.var_65 = Adap.dim(70, 70, null, null);
                Gvar.var_65[Gvar.var_3614][Gvar.var_3615] = 1;
                Gvar.var_3329 = Gvar.var_3614;
                Gvar.var_3330 = Gvar.var_3615;
            }
        }
        if (Gvar.var_3565 == 7 && Gvar.var_3591[Gvar.var_3545] != 0) {
            Gvar.var_3331 = 0;
            if (Gvar.var_82[Gvar.var_3614][Gvar.var_3615] != 0) {
                Gvar.var_3332 = Gvar.var_82[Gvar.var_3614][Gvar.var_3615];
                Gvar.var_3331 = Gvar.var_83[Gvar.var_3332].Var0;
            }
            await Func.func0925();
            Gvar.var_3333 = 1;
            Gvar.var_3334 = 0;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                if (Gvar.var_83[Gvar.var_3333].Var0 == 0) {
                    Gvar.var_3334 = 1;
                    break;
                }
                Gvar.var_3333++;
            }
            if (Gvar.var_3334 == 0 && Gvar.var_82[Gvar.var_3614][Gvar.var_3615] == 0) {
                Gvar.var_3593 = 1;
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    await Func.func0911();
                }
                Gvar.var_3593 = 0;
                await Func.func0910();
                return;
            }
            Gvar.var_97 = Gvar.var_3333;
            Gvar.var_82[Gvar.var_3614][Gvar.var_3615] = Gvar.var_97;
            Gvar.var_83[Gvar.var_97].Var0 = Gvar.var_3611;
            Gvar.var_83[Gvar.var_97].Var1 = Gvar.var_3614;
            Gvar.var_83[Gvar.var_97].Var2 = Gvar.var_3615;
            Gvar.var_83[Gvar.var_97].Var16 = Gvar.var_3574;
        }
        if (Gvar.var_3565 == 8 && Gvar.var_884[Gvar.var_873] != 0) {
            Gvar.var_3331 = 0;
            if (Gvar.var_77[Gvar.var_3614][Gvar.var_3615] != 0) {
                Gvar.var_3332 = Gvar.var_77[Gvar.var_3614][Gvar.var_3615];
                Gvar.var_3331 = Gvar.var_78[Gvar.var_3332].Var0;
            }
            await Func.func0925();
            Gvar.var_3333 = 1;
            Gvar.var_3334 = 0;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                if (Gvar.var_78[Gvar.var_3333].Var0 == 0) {
                    Gvar.var_3334 = 1;
                    break;
                }
                Gvar.var_3333++;
            }
            if (Gvar.var_3334 == 0 && Gvar.var_77[Gvar.var_3614][Gvar.var_3615] == 0) {
                Gvar.var_3593 = 1;
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    await Func.func0911();
                }
                Gvar.var_3593 = 0;
                await Func.func0910();
                return;
            }
            Gvar.var_336 = Gvar.var_3333;
            Gvar.var_77[Gvar.var_3614][Gvar.var_3615] = Gvar.var_336;
            Gvar.var_78[Gvar.var_336].Var0 = Gvar.var_3612;
            Gvar.var_78[Gvar.var_336].Var1 = Gvar.var_3614;
            Gvar.var_78[Gvar.var_336].Var2 = Gvar.var_3615;
            if (Gvar.var_78[Gvar.var_336].Var0 >= 100 && Gvar.var_78[Gvar.var_336].Var0 < 400) {
                Gvar.var_78[Gvar.var_336].Var4 = Gvar.var_3553;
            }
            if (Gvar.var_78[Gvar.var_336].Var0 >= 400 && Gvar.var_78[Gvar.var_336].Var0 < 500) {
                Gvar.var_78[Gvar.var_336].Var3 = Gvar.var_3554;
                if (Gvar.var_78[Gvar.var_336].Var3 == 0) {
                    Gvar.var_78[Gvar.var_336].Var3 = 1;
                }
            }
            if (Gvar.var_78[Gvar.var_336].Var0 >= 800 && Gvar.var_78[Gvar.var_336].Var0 < 900) {
                Gvar.var_78[Gvar.var_336].Var7 = Gvar.var_3554;
            }
            if (Gvar.var_78[Gvar.var_336].Var0 == 1) {
                if (Gvar.var_3555 == 0) {
                    Gvar.var_78[Gvar.var_336].Var13 = 1;
                }
                if (Gvar.var_3555 >= 1) {
                    Gvar.var_78[Gvar.var_336].Var13 = Gvar.var_3555 * 100;
                }
            }
        }
        if (Gvar.var_3565 == 9 && Gvar.var_3599[Gvar.var_3548] != 0) {
            Gvar.var_3331 = 0;
            if (Gvar.var_80[Gvar.var_3614][Gvar.var_3615] != 0) {
                Gvar.var_3332 = Gvar.var_80[Gvar.var_3614][Gvar.var_3615];
                Gvar.var_3331 = Gvar.var_81[Gvar.var_3332][0];
            }
            await Func.func0925();
            Gvar.var_3333 = 1;
            Gvar.var_3334 = 0;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                if (Gvar.var_81[Gvar.var_3333][0] == 0) {
                    Gvar.var_3334 = 1;
                    break;
                }
                Gvar.var_3333++;
            }
            if (Gvar.var_3334 == 0 && Gvar.var_80[Gvar.var_3614][Gvar.var_3615] == 0) {
                Gvar.var_3593 = 1;
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    await Func.func0911();
                }
                Gvar.var_3593 = 0;
                await Func.func0910();
                return;
            }
            Gvar.var_337 = Gvar.var_3333;
            Gvar.var_80[Gvar.var_3614][Gvar.var_3615] = Gvar.var_337;
            Gvar.var_81[Gvar.var_337][0] = Gvar.var_3613;
            Gvar.var_81[Gvar.var_337][1] = Gvar.var_3614;
            Gvar.var_81[Gvar.var_337][2] = Gvar.var_3615;
        }
    }
    await Func.func0911();
    Gvar.var_3593 = 0;
    await Func.func0910();
    return;
}

export {func0922}
