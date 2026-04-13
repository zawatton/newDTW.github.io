import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func854
async function func0913(this: any) {
    Adap.color(255, 255, 255);
    Adap.line(Gvar.var_3538, Gvar.var_3539, Gvar.var_3538 + Gvar.var_3540, Gvar.var_3539);
    Adap.line(Gvar.var_3538, Gvar.var_3539, Gvar.var_3538, Gvar.var_3539 + Gvar.var_3541);
    Adap.color(100, 100, 100);
    Adap.line(Gvar.var_3538, Gvar.var_3539 + Gvar.var_3541, Gvar.var_3538 + Gvar.var_3540, Gvar.var_3539 + Gvar.var_3541);
    Adap.line(Gvar.var_3538, Gvar.var_3539 + Gvar.var_3541 + 1, Gvar.var_3538 + Gvar.var_3540, Gvar.var_3539 + Gvar.var_3541 + 1);
    Adap.line(Gvar.var_3538 + Gvar.var_3540, Gvar.var_3539, Gvar.var_3538 + Gvar.var_3540, Gvar.var_3539 + Gvar.var_3541);
    Adap.line(Gvar.var_3538 + Gvar.var_3540 - 1, Gvar.var_3539, Gvar.var_3538 + Gvar.var_3540 - 1, Gvar.var_3539 + Gvar.var_3541);
    Gvar.var_1149 = 4;
    Gvar.var_449 = 2;
    Gvar.var_3302 = 1;
    for (let cnt1 = 0; cnt1 < Gvar.var_3537; ++cnt1) {
        Gvar.var_3303 = 4;
        Gvar.var_447 = 2;
        Gvar.var_3304 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_3536; ++cnt2) {
            if (Gvar.var_71[Gvar.var_3303][Gvar.var_1149] == 0) {
                Adap.color(0, 0, 0);
                Adap.boxf(Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3532, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3532);
            }
            if (Gvar.var_3303 == 4 || Gvar.var_1149 == 4 || Gvar.var_3304 == Gvar.var_3536 || Gvar.var_3302 == Gvar.var_3537) {
                Adap.color(130, 130, 130);
                Adap.boxf(Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3532, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3532);
            }
            if (Gvar.var_71[Gvar.var_3303][Gvar.var_1149] == 13) {
                Adap.color(0, 0, 0);
                Adap.boxf(Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3532, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3532);
            }
            if (Gvar.var_71[Gvar.var_3303][Gvar.var_1149] == 14 || Gvar.var_71[Gvar.var_3303][Gvar.var_1149] == 21 || Gvar.var_71[Gvar.var_3303][Gvar.var_1149] == 22 || Gvar.var_71[Gvar.var_3303][Gvar.var_1149] == 23 || Gvar.var_71[Gvar.var_3303][Gvar.var_1149] == 24) {
                Adap.color(0, 0, 255);
                Adap.boxf(Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3532, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3532);
            }
            if (Gvar.var_71[Gvar.var_3303][Gvar.var_1149] > 0 && Gvar.var_71[Gvar.var_3303][Gvar.var_1149] <= 12) {
                Adap.color(0, 0, 255);
                Adap.boxf(Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3532, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3532);
            }
            if (Gvar.var_80[Gvar.var_3303][Gvar.var_1149] >= 1) {
                Adap.color(255, 0, 255);
                Adap.boxf(Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3533, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3533);
            }
            if (Gvar.var_77[Gvar.var_3303][Gvar.var_1149] >= 1) {
                Adap.color(0, 255, 255);
                Adap.boxf(Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3533, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3533);
            }
            if (Gvar.var_73[Gvar.var_3303][Gvar.var_1149] == 1) {
                Adap.color(0, 255, 255);
                Adap.boxf(Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3532, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3532);
                Adap.color(0, 0, 255);
                Adap.pset(Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530 + 1, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531 + 1);
            }
            if (Gvar.var_82[Gvar.var_3303][Gvar.var_1149] >= 1) {
                Adap.color(255, 0, 0);
                Adap.boxf(Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3533, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3533);
            }
            if (Gvar.var_65[Gvar.var_3303][Gvar.var_1149] == 1) {
                Adap.color(255, 255, 255);
                Adap.boxf(Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3533, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3533);
            }
            Gvar.var_447++;
            Gvar.var_3303++;
            Gvar.var_3304++;
        }
        Gvar.var_449++;
        Gvar.var_1149++;
        Gvar.var_3302++;
    }
    Adap.color(255, 255, 0);
    Adap.line((Gvar.var_66 - 1) * Gvar.var_3532 + Gvar.var_3530 - 1, (Gvar.var_67 - 1) * Gvar.var_3532 + Gvar.var_3531, (Gvar.var_66 + 7) * Gvar.var_3532 + Gvar.var_3530, (Gvar.var_67 - 1) * Gvar.var_3532 + Gvar.var_3531);
    Adap.line((Gvar.var_66 - 1) * Gvar.var_3532 + Gvar.var_3530, (Gvar.var_67 - 1) * Gvar.var_3532 + Gvar.var_3531, (Gvar.var_66 - 1) * Gvar.var_3532 + Gvar.var_3530, (Gvar.var_67 + 7) * Gvar.var_3532 + Gvar.var_3531);
    Adap.line((Gvar.var_66 + 7) * Gvar.var_3532 + Gvar.var_3530, (Gvar.var_67 - 1) * Gvar.var_3532 + Gvar.var_3531, (Gvar.var_66 + 7) * Gvar.var_3532 + Gvar.var_3530, (Gvar.var_67 + 7) * Gvar.var_3532 + Gvar.var_3531);
    Adap.line((Gvar.var_66 - 1) * Gvar.var_3532 + Gvar.var_3530, (Gvar.var_67 + 7) * Gvar.var_3532 + Gvar.var_3531, (Gvar.var_66 + 7) * Gvar.var_3532 + Gvar.var_3530, (Gvar.var_67 + 7) * Gvar.var_3532 + Gvar.var_3531);
    return;
}

export {func0913}
