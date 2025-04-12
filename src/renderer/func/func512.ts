import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func512(this: any) {
        Adap.dbgprt(512);
        Gvar.var_320 = Gvar.var_2194;
        if (Gvar.var_78[Gvar.var_320].Var15 == 1) {
            Gvar.var_1842 = Gvar.var_78[Gvar.var_320].Var1;
            Gvar.var_1843 = Gvar.var_78[Gvar.var_320].Var2;
            if (Gvar.current_floor < 19) {
                Gvar.var_1844 = 1;
            }
            if (Gvar.current_floor >= 19) {
                Gvar.var_1844 = 2;
            }
            Gvar.var_1845 = 3;
            Gvar.var_1914 = Gvar.var_78[Gvar.var_320].Var1;
            Gvar.var_1915 = Gvar.var_78[Gvar.var_320].Var2;
            await Func.func556();
            Gvar.var_1844 = 0;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 == 1) {
                Gvar.var_78[Gvar.var_320].Var15 = 0;
            }
            if (Gvar.var_2110 != 0) {
                Gvar.var_77[Gvar.var_1842][Gvar.var_1843] = 0;
                Gvar.var_2356 = 0;
                for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                    Gvar.var_78[Gvar.var_320][Gvar.var_2356] = 0;
                }
                Gvar.var_83[Gvar.var_673].Var21 = 1;
                if (Gvar.current_floor < 19) {
                    for (let cnt4 = 0; cnt4 < 6; ++cnt4) {
                        if (cnt4 == 1) {
                            Gvar.var_411 = 2;
                        }
                        if (cnt4 == 2) {
                            Gvar.var_411 = 1;
                        }
                        if (cnt4 == 3) {
                            Gvar.var_411 = 2;
                        }
                        if (cnt4 == 4) {
                            Gvar.var_411 = 2;
                        }
                        if (cnt4 == 5) {
                            Gvar.var_411 = 1;
                        }
                        if (cnt4 == 6) {
                            Gvar.var_411 = 4;
                        }
                        await Func.func337(); // メッセージ表示処理(自動)
                    }
                }
                if (Gvar.current_floor >= 19) {
                    for (let cnt4 = 0; cnt4 < 8; ++cnt4) {
                        if (cnt4 == 1) {
                            Gvar.var_411 = 1;
                        }
                        if (cnt4 == 2) {
                            Gvar.var_411 = 2;
                        }
                        if (cnt4 == 3) {
                            Gvar.var_411 = 3;
                        }
                        if (cnt4 == 4) {
                            Gvar.var_411 = 4;
                        }
                        if (cnt4 == 5) {
                            Gvar.var_411 = 5;
                        }
                        if (cnt4 == 6) {
                            Gvar.var_411 = 6;
                        }
                        if (cnt4 == 7) {
                            Gvar.var_411 = 7;
                        }
                        if (cnt4 == 8) {
                            Gvar.var_411 = 8;
                        }
                        await Func.func337(); // メッセージ表示処理(自動)
                    }
                }
                Gvar.var_83[Gvar.var_673].Var21 = 0;
            }
        }
        return;
}

export {func512}
