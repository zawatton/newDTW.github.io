/**
 * func467 — func467 Shiftキーを押してアイテムを整理する時の関数
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func467(this: any) {
        Adap.dbgprt(467);
        await Func.func466();
        if (Gvar.var_224 == 1) {
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        Gvar.var_1620 = 1;
        Gvar.var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            Gvar.var_1623 = 0;
            Gvar.var_2048 = 0;
            Gvar.var_2049 = 0;
            if (Gvar.var_233[Gvar.var_1620].Var0 >= 900 || Gvar.var_233[Gvar.var_1620].Var0 < 800) {
                if (Gvar.var_233[Gvar.var_1621].Var0 >= 800 && Gvar.var_233[Gvar.var_1621].Var0 < 900) {
                    await Func.func468();
                }
            }
            if (Gvar.var_233[Gvar.var_1620].Var0 >= 800 && Gvar.var_233[Gvar.var_1620].Var0 < 900) {
                if (Gvar.var_233[Gvar.var_1621].Var0 >= 800 && Gvar.var_233[Gvar.var_1621].Var0 < 900) {
                    Gvar.var_2050 = Gvar.var_233[Gvar.var_1620].Var0;
                    Gvar.var_2051 = Gvar.var_233[Gvar.var_1621].Var0;
                    if (Gvar.var_862[Gvar.var_2050][0] == 1 && Gvar.var_862[Gvar.var_2051][0] == 1 && Gvar.var_233[Gvar.var_1620].Var0 > Gvar.var_233[Gvar.var_1621].Var0) {
                        await Func.func468();
                    }
                    if (Gvar.var_862[Gvar.var_2050][0] == 0 && Gvar.var_862[Gvar.var_2051][0] == 0 && Gvar.var_233[Gvar.var_1620].Var0 > Gvar.var_233[Gvar.var_1621].Var0) {
                        await Func.func468();
                    }
                    if (Gvar.var_862[Gvar.var_2050][0] == 0 && Gvar.var_862[Gvar.var_2051][0] == 1) {
                        await Func.func468();
                    }
                }
            }
            if (Gvar.var_1623 == 0) {
                Gvar.var_1620 = Gvar.var_1620 + 1;
                Gvar.var_1621 = Gvar.var_1621 + 1;
            }
            if (Gvar.var_1620 >= Gvar.var_224) {
                break;
            }
        }
        Gvar.var_1620 = 1;
        Gvar.var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            Gvar.var_1623 = 0;
            Gvar.var_2048 = 0;
            Gvar.var_2049 = 0;
            if (Gvar.var_233[Gvar.var_1620].Var0 >= 750 && Gvar.var_233[Gvar.var_1620].Var0 < 800) {
                Gvar.var_2048 = 1;
            }
            if (Gvar.var_233[Gvar.var_1620].Var0 >= 900 && Gvar.var_233[Gvar.var_1620].Var0 < 1000) {
                Gvar.var_2048 = 1;
            }
            if (Gvar.var_233[Gvar.var_1621].Var0 >= 750 && Gvar.var_233[Gvar.var_1621].Var0 < 800) {
                Gvar.var_2049 = 1;
            }
            if (Gvar.var_233[Gvar.var_1621].Var0 >= 900 && Gvar.var_233[Gvar.var_1621].Var0 < 1000) {
                Gvar.var_2049 = 1;
            }
            if (Gvar.var_2048 == 0 && Gvar.var_2049 == 1) {
                await Func.func468();
            }
            if (Gvar.var_2048 == 1 && Gvar.var_2049 == 1) {
                Gvar.var_2050 = Gvar.var_233[Gvar.var_1620].Var0;
                Gvar.var_2051 = Gvar.var_233[Gvar.var_1621].Var0;
                Gvar.var_2052 = 0;
                if (Gvar.var_2052 == 0 && Gvar.var_233[Gvar.var_1620].Var0 > Gvar.var_233[Gvar.var_1621].Var0 && Gvar.var_233[Gvar.var_1620].Var0 >= 900 && Gvar.var_233[Gvar.var_1621].Var0 >= 900) {
                    await Func.func468();
                    Gvar.var_2052 = 1;
                }
                if (Gvar.var_2052 == 0 && Gvar.var_233[Gvar.var_1620].Var0 > Gvar.var_233[Gvar.var_1621].Var0 && Gvar.var_233[Gvar.var_1620].Var0 < 800 && Gvar.var_233[Gvar.var_1621].Var0 < 800) {
                    await Func.func468();
                    Gvar.var_2052 = 1;
                }
                if (Gvar.var_2052 == 0 && Gvar.var_233[Gvar.var_1620].Var0 < 800 && Gvar.var_233[Gvar.var_1621].Var0 >= 900 && Gvar.var_233[Gvar.var_1621].Var0 <= 986) {
                    await Func.func468();
                    Gvar.var_2052 = 1;
                }
            }
            if (Gvar.var_1623 == 0) {
                Gvar.var_1620 = Gvar.var_1620 + 1;
                Gvar.var_1621 = Gvar.var_1621 + 1;
            }
            if (Gvar.var_1620 >= Gvar.var_224) {
                break;
            }
        }
        Gvar.var_1620 = 1;
        Gvar.var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            Gvar.var_1623 = 0;
            if (Gvar.var_233[Gvar.var_1620].Var0 >= 750 || Gvar.var_233[Gvar.var_1620].Var0 < 700) {
                if (Gvar.var_233[Gvar.var_1621].Var0 >= 700 && Gvar.var_233[Gvar.var_1621].Var0 < 750) {
                    await Func.func468();
                }
            }
            if (Gvar.var_233[Gvar.var_1620].Var0 >= 700 && Gvar.var_233[Gvar.var_1620].Var0 < 750) {
                if (Gvar.var_233[Gvar.var_1621].Var0 >= 700 && Gvar.var_233[Gvar.var_1621].Var0 < 750) {
                    Gvar.var_2050 = Gvar.var_233[Gvar.var_1620].Var0;
                    Gvar.var_2051 = Gvar.var_233[Gvar.var_1621].Var0;
                    if (Gvar.var_862[Gvar.var_2050][0] == 1 && Gvar.var_862[Gvar.var_2051][0] == 1 && Gvar.var_233[Gvar.var_1620].Var0 > Gvar.var_233[Gvar.var_1621].Var0) {
                        await Func.func468();
                    }
                    if (Gvar.var_862[Gvar.var_2050][0] == 0 && Gvar.var_862[Gvar.var_2051][0] == 0 && Gvar.var_233[Gvar.var_1620].Var0 > Gvar.var_233[Gvar.var_1621].Var0) {
                        await Func.func468();
                    }
                    if (Gvar.var_862[Gvar.var_2050][0] == 0 && Gvar.var_862[Gvar.var_2051][0] == 1) {
                        await Func.func468();
                    }
                }
            }
            if (Gvar.var_1623 == 0) {
                Gvar.var_1620 = Gvar.var_1620 + 1;
                Gvar.var_1621 = Gvar.var_1621 + 1;
            }
            if (Gvar.var_1620 >= Gvar.var_224) {
                break;
            }
        }
        Gvar.var_1620 = 1;
        Gvar.var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            Gvar.var_1623 = 0;
            if (Gvar.var_233[Gvar.var_1620].Var0 >= 700 || Gvar.var_233[Gvar.var_1620].Var0 < 600) {
                if (Gvar.var_233[Gvar.var_1621].Var0 >= 600 && Gvar.var_233[Gvar.var_1621].Var0 < 700) {
                    await Func.func468();
                }
            }
            if (Gvar.var_233[Gvar.var_1620].Var0 >= 600 && Gvar.var_233[Gvar.var_1620].Var0 < 700) {
                if (Gvar.var_233[Gvar.var_1621].Var0 >= 600 && Gvar.var_233[Gvar.var_1621].Var0 < 700) {
                    Gvar.var_2050 = Gvar.var_233[Gvar.var_1620].Var0;
                    Gvar.var_2051 = Gvar.var_233[Gvar.var_1621].Var0;
                    if (Gvar.var_862[Gvar.var_2050][0] == 1 && Gvar.var_862[Gvar.var_2051][0] == 1 && Gvar.var_233[Gvar.var_1620].Var0 > Gvar.var_233[Gvar.var_1621].Var0) {
                        await Func.func468();
                    }
                    if (Gvar.var_862[Gvar.var_2050][0] == 0 && Gvar.var_862[Gvar.var_2051][0] == 0 && Gvar.var_233[Gvar.var_1620].Var0 > Gvar.var_233[Gvar.var_1621].Var0) {
                        await Func.func468();
                    }
                    if (Gvar.var_862[Gvar.var_2050][0] == 0 && Gvar.var_862[Gvar.var_2051][0] == 1) {
                        await Func.func468();
                    }
                }
            }
            if (Gvar.var_1623 == 0) {
                Gvar.var_1620 = Gvar.var_1620 + 1;
                Gvar.var_1621 = Gvar.var_1621 + 1;
            }
            if (Gvar.var_1620 >= Gvar.var_224) {
                break;
            }
        }
        Gvar.var_1620 = 1;
        Gvar.var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            Gvar.var_1623 = 0;
            if (Gvar.var_233[Gvar.var_1620].Var0 >= 600 || Gvar.var_233[Gvar.var_1620].Var0 < 500) {
                if (Gvar.var_233[Gvar.var_1621].Var0 >= 500 && Gvar.var_233[Gvar.var_1621].Var0 < 600) {
                    await Func.func468();
                }
            }
            if (Gvar.var_233[Gvar.var_1620].Var0 >= 500 && Gvar.var_233[Gvar.var_1620].Var0 < 600) {
                if (Gvar.var_233[Gvar.var_1621].Var0 >= 500 && Gvar.var_233[Gvar.var_1621].Var0 < 600) {
                    Gvar.var_2050 = Gvar.var_233[Gvar.var_1620].Var0;
                    Gvar.var_2051 = Gvar.var_233[Gvar.var_1621].Var0;
                    if (Gvar.var_862[Gvar.var_2050][0] == 1 && Gvar.var_862[Gvar.var_2051][0] == 1 && Gvar.var_233[Gvar.var_1620].Var0 > Gvar.var_233[Gvar.var_1621].Var0) {
                        await Func.func468();
                    }
                    if (Gvar.var_862[Gvar.var_2050][0] == 0 && Gvar.var_862[Gvar.var_2051][0] == 0 && Gvar.var_233[Gvar.var_1620].Var0 > Gvar.var_233[Gvar.var_1621].Var0) {
                        await Func.func468();
                    }
                    if (Gvar.var_862[Gvar.var_2050][0] == 0 && Gvar.var_862[Gvar.var_2051][0] == 1) {
                        await Func.func468();
                    }
                }
            }
            if (Gvar.var_1623 == 0) {
                Gvar.var_1620 = Gvar.var_1620 + 1;
                Gvar.var_1621 = Gvar.var_1621 + 1;
            }
            if (Gvar.var_1620 >= Gvar.var_224) {
                break;
            }
        }
        Gvar.var_1620 = 1;
        Gvar.var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            Gvar.var_1623 = 0;
            if (Gvar.var_233[Gvar.var_1620].Var0 >= 500 || Gvar.var_233[Gvar.var_1620].Var0 < 400) {
                if (Gvar.var_233[Gvar.var_1621].Var0 >= 400 && Gvar.var_233[Gvar.var_1621].Var0 < 500) {
                    await Func.func468();
                }
            }
            if (Gvar.var_233[Gvar.var_1620].Var0 >= 400 && Gvar.var_233[Gvar.var_1620].Var0 < 500) {
                if (Gvar.var_233[Gvar.var_1621].Var0 >= 400 && Gvar.var_233[Gvar.var_1621].Var0 < 500) {
                    Gvar.var_2050 = Gvar.var_233[Gvar.var_1620].Var0;
                    Gvar.var_2051 = Gvar.var_233[Gvar.var_1621].Var0;
                    if (Gvar.var_862[Gvar.var_2050][0] == 1 && Gvar.var_862[Gvar.var_2051][0] == 1 && Gvar.var_233[Gvar.var_1620].Var0 > Gvar.var_233[Gvar.var_1621].Var0) {
                        await Func.func468();
                    }
                    if (Gvar.var_862[Gvar.var_2050][0] == 0 && Gvar.var_862[Gvar.var_2051][0] == 0 && Gvar.var_233[Gvar.var_1620].Var0 > Gvar.var_233[Gvar.var_1621].Var0) {
                        await Func.func468();
                    }
                    if (Gvar.var_862[Gvar.var_2050][0] == 0 && Gvar.var_862[Gvar.var_2051][0] == 1) {
                        await Func.func468();
                    }
                }
            }
            if (Gvar.var_1623 == 0) {
                Gvar.var_1620 = Gvar.var_1620 + 1;
                Gvar.var_1621 = Gvar.var_1621 + 1;
            }
            if (Gvar.var_1620 >= Gvar.var_224) {
                break;
            }
        }
        Gvar.var_1620 = 1;
        Gvar.var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            Gvar.var_1623 = 0;
            if (Gvar.var_233[Gvar.var_1620].Var0 >= 400 || Gvar.var_233[Gvar.var_1620].Var0 < 100) {
                if (Gvar.var_233[Gvar.var_1621].Var0 >= 100 && Gvar.var_233[Gvar.var_1621].Var0 < 400) {
                    await Func.func468();
                }
            }
            if (Gvar.var_233[Gvar.var_1620].Var0 >= 100 && Gvar.var_233[Gvar.var_1620].Var0 < 400) {
                if (Gvar.var_233[Gvar.var_1621].Var0 >= 100 && Gvar.var_233[Gvar.var_1621].Var0 < 400) {
                    Gvar.var_2050 = Gvar.var_233[Gvar.var_1620].Var0;
                    Gvar.var_2051 = Gvar.var_233[Gvar.var_1621].Var0;
                    if (Gvar.var_862[Gvar.var_2050][0] == 1 && Gvar.var_862[Gvar.var_2051][0] == 1 && Gvar.var_233[Gvar.var_1620].Var0 > Gvar.var_233[Gvar.var_1621].Var0) {
                        await Func.func468();
                    }
                    if (Gvar.var_862[Gvar.var_2050][0] == 0 && Gvar.var_862[Gvar.var_2051][0] == 0 && Gvar.var_233[Gvar.var_1620].Var0 > Gvar.var_233[Gvar.var_1621].Var0) {
                        await Func.func468();
                    }
                    if (Gvar.var_862[Gvar.var_2050][0] == 0 && Gvar.var_862[Gvar.var_2051][0] == 1) {
                        await Func.func468();
                    }
                }
            }
            if (Gvar.var_1623 == 0) {
                Gvar.var_1620 = Gvar.var_1620 + 1;
                Gvar.var_1621 = Gvar.var_1621 + 1;
            }
            if (Gvar.var_1620 >= Gvar.var_224) {
                break;
            }
        }
        Gvar.var_1620 = 1;
        Gvar.var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            Gvar.var_1623 = 0;
            if (Gvar.var_479[Gvar.var_1620] == 0 && Gvar.var_479[Gvar.var_1621] == 1) {
                await Func.func468();
            }
            if (Gvar.var_1623 == 0) {
                Gvar.var_1620 = Gvar.var_1620 + 1;
                Gvar.var_1621 = Gvar.var_1621 + 1;
            }
            if (Gvar.var_1620 >= Gvar.var_224) {
                break;
            }
        }
        Gvar.var_1620 = 1;
        Gvar.var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            Gvar.var_1623 = 0;
            if (Gvar.var_478[Gvar.var_1620] == 0 && Gvar.var_478[Gvar.var_1621] == 1) {
                await Func.func468();
            }
            if (Gvar.var_1623 == 0) {
                Gvar.var_1620 = Gvar.var_1620 + 1;
                Gvar.var_1621 = Gvar.var_1621 + 1;
            }
            if (Gvar.var_1620 >= Gvar.var_224) {
                break;
            }
        }
        Gvar.var_1620 = 1;
        Gvar.var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            Gvar.var_1623 = 0;
            if (Gvar.var_477[Gvar.var_1620] == 0 && Gvar.var_477[Gvar.var_1621] == 1) {
                await Func.func468();
            }
            if (Gvar.var_1623 == 0) {
                Gvar.var_1620 = Gvar.var_1620 + 1;
                Gvar.var_1621 = Gvar.var_1621 + 1;
            }
            if (Gvar.var_1620 >= Gvar.var_224) {
                break;
            }
        }
        Gvar.var_1620 = 1;
        Gvar.var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            Gvar.var_1623 = 0;
            if (Gvar.var_476[Gvar.var_1620] == 0 && Gvar.var_476[Gvar.var_1621] == 1) {
                await Func.func468();
            }
            if (Gvar.var_1623 == 0) {
                Gvar.var_1620 = Gvar.var_1620 + 1;
                Gvar.var_1621 = Gvar.var_1621 + 1;
            }
            if (Gvar.var_1620 >= Gvar.var_224) {
                break;
            }
        }
        Gvar.var_250 = 0;
        Gvar.var_1956 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            if (Gvar.var_479[Gvar.var_1956] == 1) {
                Gvar.var_250 = Gvar.var_1956;
            }
            Gvar.var_1956 = Gvar.var_1956 + 1;
        }
        Gvar.item_page_number = 1;
        await Func.func052(); // Shiftキー入力待ち処理
        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
}

export {func467}
