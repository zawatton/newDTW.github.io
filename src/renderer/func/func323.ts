/**
 * func323 — func323 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func323(this: any) {
        Adap.dbgprt(323);
        Gvar.var_764 = 0;
        Gvar.var_1075 = 6;
        for (let cnt1 = 0; cnt1 < 38; ++cnt1) {
            Gvar.var_1076 = 6;
            for (let cnt2 = 0; cnt2 < 56; ++cnt2) {
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 35) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 0;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 46) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 1;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 49) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 1;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 50) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 2;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 51) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 3;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 52) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 4;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 53) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 5;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 54) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 6;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 55) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 7;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 56) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 8;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 57) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 9;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 97) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 10;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 98) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 11;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 99) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 12;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 94) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 13;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 45) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 14;
                }
                Gvar.var_1076 = Gvar.var_1076 + 1;
                Gvar.var_764 = Gvar.var_764 + 1;
            }
            Gvar.var_1075 = Gvar.var_1075 + 1;
        }
        if (Gvar.var_1141 == 1) {
    
            Gvar.var_73 = Adap.dim(70, 70, Gvar.length3 = null, null);
            await Func.func045();
        }
        if (Gvar.var_1142 == 1) {
            await Func.func383(); // アイテムの出現数を増やす動作処理
        }
        if (Gvar.var_1143 == 1) {
            await Func.func555();
        }
        if (Gvar.var_1144 == 1) {
            Gvar.var_65 = Adap.dim(70, 70, Gvar.length3 = null, null);
            await Func.func046();
        }
        Gvar.var_74 = Adap.dim(70, 70, Gvar.length3 = null, null);
        Gvar.var_75 = Adap.dim(20);
        Gvar.var_493 = Adap.dim(20);
        if (Gvar.var_1144 == 2) {
            Gvar.var_201 = 1;
            Gvar.var_75[Gvar.var_201] = 1;
        }
        Gvar.var_1143 = 0;
        Gvar.var_1142 = 0;
        Gvar.var_1144 = 0;
        Gvar.var_1141 = 0;
        return;
}

export {func323}
