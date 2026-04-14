/**
 * func014 — func014 不明
 *
 * (org原典: newDTW_func0)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func014(this: any) {
        Adap.dbgprt(14);
        await Func.func080(false); // 各キー入力確認 OFF?
        Gvar.var_274 = Gvar.var_66 - 1;
        if (Gvar.var_274 < 0) {
            Gvar.var_274 = 0;
        }
        Gvar.var_275 = Gvar.var_66 + 1;
        if (Gvar.var_275 > Gvar.var_33) {
            Gvar.var_275 = Gvar.var_33;
        }
        Gvar.var_276 = Gvar.var_67 - 1;
        if (Gvar.var_276 < 0) {
            Gvar.var_276 = 0;
        }
        Gvar.var_277 = Gvar.var_67 + 1;
        if (Gvar.var_277 > Gvar.var_34) {
            Gvar.var_277 = Gvar.var_34;
        }
        Gvar.var_278 = 0;
        if (Gvar.var_240 == 1 && Gvar.key_Z_on == 0 && Gvar.key_X_on == 1) {
            if (Gvar.var_201 == 14 && Gvar.var_279 == 14) {
                if (Gvar.var_71[Gvar.var_274][Gvar.var_67] <= 12 && Gvar.var_71[Gvar.var_274][Gvar.var_67] != 0) {
                    Gvar.var_278 = 1;
                }
                if (Gvar.var_71[Gvar.var_275][Gvar.var_67] <= 12 && Gvar.var_71[Gvar.var_275][Gvar.var_67] != 0) {
                    Gvar.var_278 = 1;
                }
                if (Gvar.var_71[Gvar.var_66][Gvar.var_277] <= 12 && Gvar.var_71[Gvar.var_66][Gvar.var_277] != 0) {
                    Gvar.var_278 = 1;
                }
                if (Gvar.var_71[Gvar.var_66][Gvar.var_276] <= 12 && Gvar.var_71[Gvar.var_66][Gvar.var_276] != 0) {
                    Gvar.var_278 = 1;
                }
            }
            if (Gvar.var_201 == 14 && Gvar.var_71[Gvar.var_274][Gvar.var_67] == 14 && Gvar.var_71[Gvar.var_275][Gvar.var_67] == 14 && Gvar.var_71[Gvar.var_66][Gvar.var_277] == 14 && Gvar.var_71[Gvar.var_66][Gvar.var_276] == 14) {
                if (Gvar.var_71[Gvar.var_274][Gvar.var_277] != 14 && Gvar.var_71[Gvar.var_275][Gvar.var_277] != 14 && Gvar.var_71[Gvar.var_274][Gvar.var_276] != 14 && Gvar.var_71[Gvar.var_275][Gvar.var_276] != 14) {
                    Gvar.var_278 = 1;
                }
            }
            if (Gvar.var_201 != 0 && Gvar.var_201 <= 12) {
                if (Gvar.var_73[Gvar.var_274][Gvar.var_67] != 0 && Gvar.var_199 != 6) {
                    Gvar.var_278 = 1;
                }
                if (Gvar.var_73[Gvar.var_275][Gvar.var_67] != 0 && Gvar.var_199 != 4) {
                    Gvar.var_278 = 1;
                }
                if (Gvar.var_73[Gvar.var_66][Gvar.var_277] != 0 && Gvar.var_199 != 8) {
                    Gvar.var_278 = 1;
                }
                if (Gvar.var_73[Gvar.var_66][Gvar.var_276] != 0 && Gvar.var_199 != 2) {
                    Gvar.var_278 = 1;
                }
                if (Gvar.var_80[Gvar.var_274][Gvar.var_67] != 0) {
                    Gvar.var_280 = Gvar.var_80[Gvar.var_274][Gvar.var_67];
                    // Gvar.var_121 罠が見えるようになるフラグON
                    if (Gvar.var_81[Gvar.var_280][4] == 1 || Gvar.var_121 == 1 || Gvar.equip_disc[303] == 1 || Gvar.equip_disc[315] == 1) {
                        Gvar.var_278 = 1;
                    }
                }
                if (Gvar.var_80[Gvar.var_275][Gvar.var_67] != 0) {
                    Gvar.var_280 = Gvar.var_80[Gvar.var_275][Gvar.var_67];
                    // Gvar.var_121 罠が見えるようになるフラグON
                    if (Gvar.var_81[Gvar.var_280][4] == 1 || Gvar.var_121 == 1 || Gvar.equip_disc[303] == 1 || Gvar.equip_disc[315] == 1) {
                        Gvar.var_278 = 1;
                    }
                }
                if (Gvar.var_80[Gvar.var_66][Gvar.var_277] != 0) {
                    Gvar.var_280 = Gvar.var_80[Gvar.var_66][Gvar.var_277];
                    // Gvar.var_121 罠が見えるようになるフラグON
                    if (Gvar.var_81[Gvar.var_280][4] == 1 || Gvar.var_121 == 1 || Gvar.equip_disc[303] == 1 || Gvar.equip_disc[315] == 1) {
                        Gvar.var_278 = 1;
                    }
                }
                if (Gvar.var_80[Gvar.var_66][Gvar.var_276] != 0) {
                    Gvar.var_280 = Gvar.var_80[Gvar.var_66][Gvar.var_276];
                    // Gvar.var_121 罠が見えるようになるフラグON
                    if (Gvar.var_81[Gvar.var_280][4] == 1 || Gvar.var_121 == 1 || Gvar.equip_disc[303] == 1 || Gvar.equip_disc[315] == 1) {
                        Gvar.var_278 = 1;
                    }
                }
                if (Gvar.var_80[Gvar.var_274][Gvar.var_277] != 0) {
                    Gvar.var_280 = Gvar.var_80[Gvar.var_274][Gvar.var_277];
                    if (Gvar.var_81[Gvar.var_280][4] == 1 || Gvar.var_121 == 1 || Gvar.equip_disc[303] == 1 || Gvar.equip_disc[315] == 1) {
                        Gvar.var_278 = 1;
                    }
                }
                if (Gvar.var_80[Gvar.var_275][Gvar.var_277] != 0) {
                    Gvar.var_280 = Gvar.var_80[Gvar.var_275][Gvar.var_277];
                    // Gvar.var_121 罠が見えるようになるフラグON
                    if (Gvar.var_81[Gvar.var_280][4] == 1 || Gvar.var_121 == 1 || Gvar.equip_disc[303] == 1 || Gvar.equip_disc[315] == 1) {
                        Gvar.var_278 = 1;
                    }
                }
                if (Gvar.var_80[Gvar.var_274][Gvar.var_276] != 0) {
                    Gvar.var_280 = Gvar.var_80[Gvar.var_274][Gvar.var_276];
                    if (Gvar.var_81[Gvar.var_280][4] == 1 || Gvar.var_121 == 1 || Gvar.equip_disc[303] == 1 || Gvar.equip_disc[315] == 1) {
                        Gvar.var_278 = 1;
                    }
                }
                if (Gvar.var_80[Gvar.var_275][Gvar.var_276] != 0) {
                    Gvar.var_280 = Gvar.var_80[Gvar.var_275][Gvar.var_276];
                    // Gvar.var_121 罠が見えるようになるフラグON
                    if (Gvar.var_81[Gvar.var_280][4] == 1 || Gvar.var_121 == 1 || Gvar.equip_disc[303] == 1 || Gvar.equip_disc[315] == 1) {
                        Gvar.var_278 = 1;
                    }
                }
            }
            if (Gvar.var_77[Gvar.var_274][Gvar.var_67] != 0 && Gvar.var_199 != 6) {
                Gvar.var_278 = 1;
            }
            if (Gvar.var_77[Gvar.var_275][Gvar.var_67] != 0 && Gvar.var_199 != 4) {
                Gvar.var_278 = 1;
            }
            if (Gvar.var_77[Gvar.var_66][Gvar.var_277] != 0 && Gvar.var_199 != 8) {
                Gvar.var_278 = 1;
            }
            if (Gvar.var_77[Gvar.var_66][Gvar.var_276] != 0 && Gvar.var_199 != 2) {
                Gvar.var_278 = 1;
            }
            if (Gvar.var_278 == 1) {
                Gvar.var_240 = 0;
                await Func.func179();
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
        }
        if (Gvar.var_253 == 1) {
            Gvar.var_66 = Gvar.var_66 - 1;
            Gvar.var_67 = Gvar.var_67 - 1;
            Gvar.var_199 = 7;
            Gvar.var_240 = 1;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_254 == 1 && Gvar.var_255 == 1) { // var_255:入力判定[↑]
            Gvar.var_66 = Gvar.var_66 - 1;
            Gvar.var_67 = Gvar.var_67 - 1;
            Gvar.var_199 = 7;
            Gvar.var_240 = 1;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_256 == 1) {
            Gvar.var_66 = Gvar.var_66 + 1;
            Gvar.var_67 = Gvar.var_67 - 1;
            Gvar.var_199 = 9;
            Gvar.var_240 = 1;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_257 == 1 && Gvar.var_255 == 1) { // var_255:入力判定[↑]
            Gvar.var_66 = Gvar.var_66 + 1;
            Gvar.var_67 = Gvar.var_67 - 1;
            Gvar.var_199 = 9;
            Gvar.var_240 = 1;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_258 == 1) {
            Gvar.var_66 = Gvar.var_66 - 1;
            Gvar.var_67 = Gvar.var_67 + 1;
            Gvar.var_199 = 1;
            Gvar.var_240 = 1;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_254 == 1 && Gvar.var_259 == 1) { // var_259:入力判定[↓]
            Gvar.var_66 = Gvar.var_66 - 1;
            Gvar.var_67 = Gvar.var_67 + 1;
            Gvar.var_199 = 1;
            Gvar.var_240 = 1;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_260 == 1) {
            Gvar.var_66 = Gvar.var_66 + 1;
            Gvar.var_67 = Gvar.var_67 + 1;
            Gvar.var_199 = 3;
            Gvar.var_240 = 1;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_257 == 1 && Gvar.var_259 == 1) { // var_259:入力判定[↓]
            Gvar.var_66 = Gvar.var_66 + 1;
            Gvar.var_67 = Gvar.var_67 + 1;
            Gvar.var_199 = 3;
            Gvar.var_240 = 1;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_254 == 1) {
            Gvar.var_66 = Gvar.var_66 - 1;
            Gvar.var_199 = 4;
            Gvar.var_240 = 1;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_257 == 1) {
            Gvar.var_66 = Gvar.var_66 + 1;
            Gvar.var_199 = 6;
            Gvar.var_240 = 1;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
            Gvar.var_67 = Gvar.var_67 - 1;
            Gvar.var_199 = 8;
            Gvar.var_240 = 1;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
            Gvar.var_67 = Gvar.var_67 + 1;
            Gvar.var_199 = 2;
            Gvar.var_240 = 1;
            await Func.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        Gvar.var_281 = Gvar.var_66 - 4;
        if (Gvar.var_281 < 0) {
            Gvar.var_281 = 0;
        }
        Gvar.var_282 = Gvar.var_66 + 4;
        if (Gvar.var_282 > Gvar.var_33) {
            Gvar.var_282 = Gvar.var_33;
        }
        Gvar.var_283 = Gvar.var_67 - 4;
        if (Gvar.var_283 < 0) {
            Gvar.var_283 = 0;
        }
        Gvar.var_284 = Gvar.var_67 + 4;
        if (Gvar.var_284 > Gvar.var_34) {
            Gvar.var_284 = Gvar.var_34;
        }
        Gvar.var_285 = 0;
        Gvar.var_286 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_286].Var1 > Gvar.var_281 && Gvar.var_83[Gvar.var_286].Var1 < Gvar.var_282 && Gvar.var_83[Gvar.var_286].Var2 > Gvar.var_283 && Gvar.var_83[Gvar.var_286].Var2 < Gvar.var_284 && Gvar.var_83[Gvar.var_286].Var31 != 4 && Gvar.var_83[Gvar.var_286].Var31 != 5) {
                if (Gvar.var_83[Gvar.var_286].Var0 != 0 && Gvar.var_83[Gvar.var_286].Var0 != 79 && Gvar.var_83[Gvar.var_286].Var0 != 94 && Gvar.var_83[Gvar.var_286].Var29 == 0 && Gvar.var_83[Gvar.var_286].Var12 == 0 && Gvar.var_83[Gvar.var_286].Var13 == 0 && Gvar.var_83[Gvar.var_286].Var30 == 0) {
                    Gvar.var_285 = 1;
                    break;
                }
            }
            Gvar.var_286 = Gvar.var_286 + 1;
        }
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_285 == 1) {
            Gvar.var_240 = 0;
            if (Gvar.key_Z_on == 1 && Gvar.key_X_on == 1) {
                Gvar.var_287 = 1;
                Gvar.var_241 = 1;
                await Func.AutoDraw(10);
                Gvar.var_287 = 0;
                Gvar.var_241 = 0;
                Gvar.var_217 = 1;
                await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
                return;
            }
        }
        if (Gvar.key_Z_on == 1 && Gvar.key_X_on == 1) {
            Gvar.var_217 = 1;
            Gvar.var_240 = 1;
            Gvar.var_241 = 1;
            await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
            return;
        }
        Gvar.var_241 = 0;
        Gvar.var_240 = 0;
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func014}
