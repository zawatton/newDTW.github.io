/**
 * func702 — func702 吸血鬼4兄弟に攻撃した際のメッセージ表示
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'
import { tf } from '../i18n'

async function func702(this: any) {
        Adap.dbgprt(702);
        Gvar.var_3102 = Adap.dim(10);
        Gvar.var_3103 = 0;
        if (Gvar.var_2946 == 101) {
            if (Gvar.var_82[Gvar.var_2947][Gvar.var_2948] != 0) {
                Gvar.var_433 = Gvar.var_82[Gvar.var_2947][Gvar.var_2948];
                if (Gvar.var_83[Gvar.var_433].Var0 == 101) {
                    Gvar.var_83[Gvar.var_433].Var12 = 0;
                    Gvar.var_3102[1] = 1;
                    Gvar.var_434 = Gvar.var_83[Gvar.var_433].Var1;
                    Gvar.var_435 = Gvar.var_83[Gvar.var_433].Var2;
                    await Func.func704();
                }
            }
            if (Gvar.var_82[Gvar.var_2949][Gvar.var_2948] != 0) {
                Gvar.var_433 = Gvar.var_82[Gvar.var_2949][Gvar.var_2948];
                if (Gvar.var_83[Gvar.var_433].Var0 == 102 && Gvar.var_83[Gvar.var_433].Var12 == 99) {
                    Gvar.var_83[Gvar.var_433].Var12 = 0;
                    Gvar.var_3102[2] = 1;
                    Gvar.var_434 = Gvar.var_83[Gvar.var_433].Var1;
                    Gvar.var_435 = Gvar.var_83[Gvar.var_433].Var2;
                    await Func.func704();
                    Gvar.var_3103 = 1;
                }
            }
            if (Gvar.var_82[Gvar.var_2947][Gvar.var_2950] != 0) {
                Gvar.var_433 = Gvar.var_82[Gvar.var_2947][Gvar.var_2950];
                if (Gvar.var_83[Gvar.var_433].Var0 == 103 && Gvar.var_83[Gvar.var_433].Var12 == 99) {
                    Gvar.var_83[Gvar.var_433].Var12 = 0;
                    Gvar.var_3102[3] = 1;
                    Gvar.var_434 = Gvar.var_83[Gvar.var_433].Var1;
                    Gvar.var_435 = Gvar.var_83[Gvar.var_433].Var2;
                    await Func.func704();
                    Gvar.var_3103 = 1;
                }
            }
            if (Gvar.var_82[Gvar.var_2949][Gvar.var_2950] != 0) {
                Gvar.var_433 = Gvar.var_82[Gvar.var_2949][Gvar.var_2950];
                if (Gvar.var_83[Gvar.var_433].Var0 == 104 && Gvar.var_83[Gvar.var_433].Var12 == 99) {
                    Gvar.var_83[Gvar.var_433].Var12 = 0;
                    Gvar.var_3102[4] = 1;
                    Gvar.var_434 = Gvar.var_83[Gvar.var_433].Var1;
                    Gvar.var_435 = Gvar.var_83[Gvar.var_433].Var2;
                    await Func.func704();
                    Gvar.var_3103 = 1;
                }
            }
        }
        if (Gvar.var_2946 == 102) {
            if (Gvar.var_82[Gvar.var_2947][Gvar.var_2948] != 0) {
                Gvar.var_433 = Gvar.var_82[Gvar.var_2947][Gvar.var_2948];
                if (Gvar.var_83[Gvar.var_433].Var0 == 102) {
                    Gvar.var_83[Gvar.var_433].Var12 = 0;
                    Gvar.var_3102[2] = 1;
                    Gvar.var_434 = Gvar.var_83[Gvar.var_433].Var1;
                    Gvar.var_435 = Gvar.var_83[Gvar.var_433].Var2;
                    await Func.func704();
                }
            }
            if (Gvar.var_82[Gvar.var_2951][Gvar.var_2948] != 0) {
                Gvar.var_433 = Gvar.var_82[Gvar.var_2951][Gvar.var_2948];
                if (Gvar.var_83[Gvar.var_433].Var0 == 101 && Gvar.var_83[Gvar.var_433].Var12 == 99) {
                    Gvar.var_83[Gvar.var_433].Var12 = 0;
                    Gvar.var_3102[1] = 1;
                    Gvar.var_434 = Gvar.var_83[Gvar.var_433].Var1;
                    Gvar.var_435 = Gvar.var_83[Gvar.var_433].Var2;
                    await Func.func704();
                    Gvar.var_3103 = 1;
                }
            }
            if (Gvar.var_82[Gvar.var_2951][Gvar.var_2950] != 0) {
                Gvar.var_433 = Gvar.var_82[Gvar.var_2951][Gvar.var_2950];
                if (Gvar.var_83[Gvar.var_433].Var0 == 103 && Gvar.var_83[Gvar.var_433].Var12 == 99) {
                    Gvar.var_83[Gvar.var_433].Var12 = 0;
                    Gvar.var_3102[3] = 1;
                    Gvar.var_434 = Gvar.var_83[Gvar.var_433].Var1;
                    Gvar.var_435 = Gvar.var_83[Gvar.var_433].Var2;
                    await Func.func704();
                    Gvar.var_3103 = 1;
                }
            }
            if (Gvar.var_82[Gvar.var_2947][Gvar.var_2950] != 0) {
                Gvar.var_433 = Gvar.var_82[Gvar.var_2947][Gvar.var_2950];
                if (Gvar.var_83[Gvar.var_433].Var0 == 104 && Gvar.var_83[Gvar.var_433].Var12 == 99) {
                    Gvar.var_83[Gvar.var_433].Var12 = 0;
                    Gvar.var_3102[4] = 1;
                    Gvar.var_434 = Gvar.var_83[Gvar.var_433].Var1;
                    Gvar.var_435 = Gvar.var_83[Gvar.var_433].Var2;
                    await Func.func704();
                    Gvar.var_3103 = 1;
                }
            }
        }
        if (Gvar.var_2946 == 103) {
            if (Gvar.var_82[Gvar.var_2947][Gvar.var_2948] != 0) {
                Gvar.var_433 = Gvar.var_82[Gvar.var_2947][Gvar.var_2948];
                if (Gvar.var_83[Gvar.var_433].Var0 == 103) {
                    Gvar.var_83[Gvar.var_433].Var12 = 0;
                    Gvar.var_3102[3] = 1;
                    Gvar.var_434 = Gvar.var_83[Gvar.var_433].Var1;
                    Gvar.var_435 = Gvar.var_83[Gvar.var_433].Var2;
                    await Func.func704();
                }
            }
            if (Gvar.var_82[Gvar.var_2947][Gvar.var_2952] != 0) {
                Gvar.var_433 = Gvar.var_82[Gvar.var_2947][Gvar.var_2952];
                if (Gvar.var_83[Gvar.var_433].Var0 == 101 && Gvar.var_83[Gvar.var_433].Var12 == 99) {
                    Gvar.var_83[Gvar.var_433].Var12 = 0;
                    Gvar.var_3102[1] = 1;
                    Gvar.var_434 = Gvar.var_83[Gvar.var_433].Var1;
                    Gvar.var_435 = Gvar.var_83[Gvar.var_433].Var2;
                    await Func.func704();
                    Gvar.var_3103 = 1;
                }
            }
            if (Gvar.var_82[Gvar.var_2949][Gvar.var_2952] != 0) {
                Gvar.var_433 = Gvar.var_82[Gvar.var_2949][Gvar.var_2952];
                if (Gvar.var_83[Gvar.var_433].Var0 == 102 && Gvar.var_83[Gvar.var_433].Var12 == 99) {
                    Gvar.var_83[Gvar.var_433].Var12 = 0;
                    Gvar.var_3102[2] = 1;
                    Gvar.var_434 = Gvar.var_83[Gvar.var_433].Var1;
                    Gvar.var_435 = Gvar.var_83[Gvar.var_433].Var2;
                    await Func.func704();
                    Gvar.var_3103 = 1;
                }
            }
            if (Gvar.var_82[Gvar.var_2949][Gvar.var_2948] != 0) {
                Gvar.var_433 = Gvar.var_82[Gvar.var_2949][Gvar.var_2948];
                if (Gvar.var_83[Gvar.var_433].Var0 == 104 && Gvar.var_83[Gvar.var_433].Var12 == 99) {
                    Gvar.var_83[Gvar.var_433].Var12 = 0;
                    Gvar.var_3102[4] = 1;
                    Gvar.var_434 = Gvar.var_83[Gvar.var_433].Var1;
                    Gvar.var_435 = Gvar.var_83[Gvar.var_433].Var2;
                    await Func.func704();
                    Gvar.var_3103 = 1;
                }
            }
        }
        if (Gvar.var_2946 == 104) {
            if (Gvar.var_82[Gvar.var_2947][Gvar.var_2948] != 0) {
                Gvar.var_433 = Gvar.var_82[Gvar.var_2947][Gvar.var_2948];
                if (Gvar.var_83[Gvar.var_433].Var0 == 104) {
                    Gvar.var_83[Gvar.var_433].Var12 = 0;
                    Gvar.var_3102[4] = 1;
                    Gvar.var_434 = Gvar.var_83[Gvar.var_433].Var1;
                    Gvar.var_435 = Gvar.var_83[Gvar.var_433].Var2;
                    await Func.func704();
                }
            }
            if (Gvar.var_82[Gvar.var_2951][Gvar.var_2952] != 0) {
                Gvar.var_433 = Gvar.var_82[Gvar.var_2951][Gvar.var_2952];
                if (Gvar.var_83[Gvar.var_433].Var0 == 101 && Gvar.var_83[Gvar.var_433].Var12 == 99) {
                    Gvar.var_83[Gvar.var_433].Var12 = 0;
                    Gvar.var_3102[1] = 1;
                    Gvar.var_434 = Gvar.var_83[Gvar.var_433].Var1;
                    Gvar.var_435 = Gvar.var_83[Gvar.var_433].Var2;
                    await Func.func704();
                    Gvar.var_3103 = 1;
                }
            }
            if (Gvar.var_82[Gvar.var_2947][Gvar.var_2952] != 0) {
                Gvar.var_433 = Gvar.var_82[Gvar.var_2947][Gvar.var_2952];
                if (Gvar.var_83[Gvar.var_433].Var0 == 102 && Gvar.var_83[Gvar.var_433].Var12 == 99) {
                    Gvar.var_83[Gvar.var_433].Var12 = 0;
                    Gvar.var_3102[2] = 1;
                    Gvar.var_434 = Gvar.var_83[Gvar.var_433].Var1;
                    Gvar.var_435 = Gvar.var_83[Gvar.var_433].Var2;
                    await Func.func704();
                    Gvar.var_3103 = 1;
                }
            }
            if (Gvar.var_82[Gvar.var_2951][Gvar.var_2948] != 0) {
                Gvar.var_433 = Gvar.var_82[Gvar.var_2951][Gvar.var_2948];
                if (Gvar.var_83[Gvar.var_433].Var0 == 103 && Gvar.var_83[Gvar.var_433].Var12 == 99) {
                    Gvar.var_83[Gvar.var_433].Var12 = 0;
                    Gvar.var_3102[3] = 1;
                    Gvar.var_434 = Gvar.var_83[Gvar.var_433].Var1;
                    Gvar.var_435 = Gvar.var_83[Gvar.var_433].Var2;
                    await Func.func704();
                    Gvar.var_3103 = 1;
                }
            }
        }
        Gvar.var_2946 = 0;
        if (Gvar.var_1280 == 0 && Gvar.var_2217 == 0 && Gvar.var_3103 == 1) {
            if (Gvar.var_3102[1] == 1 || Gvar.var_3102[2] == 1 || Gvar.var_3102[3] == 1 || Gvar.var_3102[4] == 1) {
                Gvar.var_198 = 1; // メッセージウィンドウ開く
                Gvar.var_300 = 0;
                Gvar.var_3104 = "";
                await Func.AutoDraw(10);
                if (Gvar.var_3102[1] == 1) {
                    Gvar.var_3104 = "おれの名は";
                    await Func.setMessage(tf("「{0}ペイジ」", Gvar.var_3104), "", 8, false, false, true);
                }
                if (Gvar.var_3102[2] == 1) {
                    if (Gvar.var_3104 == "") {
                        Gvar.var_3104 = "おれの名は";
                        await Func.setMessage(tf("「{0}ジョーンズ」", Gvar.var_3104), "", 8, false, false, true);
                    }
                    else {
                        await Func.setMessage("「ジョーンズ」", "", 8, false, false, true);
                    }
                }
                if (Gvar.var_3102[3] == 1) {
                    if (Gvar.var_3104 == "") {
                        Gvar.var_3104 = "おれの名は";
                        await Func.setMessage(tf("「{0}プラント」", Gvar.var_3104), "", 8, false, false, true);
                    }
                    else {
                        await Func.setMessage("「プラント」", "", 8, false, false, true);
                    }
                }
                if (Gvar.var_3102[4] == 1) {
                    if (Gvar.var_3104 == "") {
                        Gvar.var_3104 = "おれの名は";
                        await Func.setMessage(tf("「{0}ボーンナム」", Gvar.var_3104), "", 8, false, false, true);
                    }
                    else {
                        await Func.setMessage("「ボーンナム」", "", 8, false, false, true);
                    }
                }
                await Func.AutoDraw(10);
                await Func.setMessage("「血管針攻撃！！！」", "", 8, false, false, true);
                await Func.AutoDraw(10);
            }
        }
        return;
}

export {func702}
