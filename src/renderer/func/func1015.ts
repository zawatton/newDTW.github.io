import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// スキルプロパティローダー（スキルIDに応じてダメージ倍率・効果フラグ・コストを設定）
async function func1015(this: any) {
        Adap.dbgprt(1015);
        if (Gvar.var_176 == 3 || Gvar.var_176 == 72 || Gvar.var_176 == 88 || Gvar.var_176 == 99 || Gvar.var_176 == 139) {
            Gvar.var_119 = 1;
        }
        if (Gvar.var_176 == 72 || Gvar.var_176 == 135) {
            Gvar.var_138 = 1;
            Gvar.var_162 = 1;
        }
        if (Gvar.var_176 == 147 || Gvar.var_176 == 200 || Gvar.var_176 == 170) {
            Gvar.var_150 = 1;
            Gvar.var_451 = 100;
        }
        if (Gvar.var_176 == 9) {
            Gvar.var_194 = 1;
        }
        if (Gvar.var_176 == 39 || Gvar.var_176 == 60 || Gvar.var_176 == 64 || Gvar.var_176 == 68 || Gvar.var_176 == 101 || Gvar.var_176 == 102 || Gvar.var_176 == 103 || Gvar.var_176 == 104 || Gvar.var_176 == 111 || Gvar.var_176 == 117 || Gvar.var_176 == 151 || Gvar.var_176 == 172 || Gvar.var_176 == 146) {
            Gvar.var_178 = 1;
            Gvar.var_179 = 100;
        }
        if (Gvar.var_176 == 73 || Gvar.var_176 == 105 || Gvar.var_176 == 119 || Gvar.var_176 == 135 || Gvar.var_176 == 136 || Gvar.var_176 == 139 || Gvar.var_176 == 140 || Gvar.var_176 == 111) {
            Gvar.var_142 = 1;
        }
        if (Gvar.var_176 == 69 || Gvar.var_176 == 71 || Gvar.var_176 == 101 || Gvar.var_176 == 102 || Gvar.var_176 == 103 || Gvar.var_176 == 104 || Gvar.var_176 == 51 || Gvar.var_176 == 52 || Gvar.var_176 == 66 || Gvar.var_176 == 11) {
            Gvar.var_147 = 1;
        }
        if (Gvar.var_176 == 138 || Gvar.var_176 == 95 || Gvar.var_176 == 113 || Gvar.var_176 == 114 || Gvar.var_176 == 133 || Gvar.var_176 == 2) {
            Gvar.var_147 = 1;
        }
        if (Gvar.var_176 == 87 || Gvar.var_176 == 86 || Gvar.var_176 == 109 || Gvar.var_176 == 110 || Gvar.var_176 == 164) {
            Gvar.var_147 = 1;
        }
        if (Gvar.var_176 == 111) {
            Gvar.var_207 = 1;
        }
        if (Gvar.var_176 == 118) {
            Gvar.var_144 = 1;
            Gvar.var_188 = 100;
        }
        if (Gvar.var_176 == 118) {
            Gvar.var_180 = 30;
        }
        if (Gvar.var_176 == 43 || Gvar.var_176 == 111) {
            Gvar.var_195 = 1;
        }
        if (Gvar.var_176 == 27 || Gvar.var_176 == 17) {
            Gvar.var_149 = 1;
        }
        if (Gvar.var_176 == 21 || Gvar.var_176 == 27 || Gvar.var_176 == 94 || Gvar.var_176 == 96 || Gvar.var_176 == 91 || Gvar.var_176 == 92 || Gvar.var_176 == 90 || Gvar.var_176 == 79 || Gvar.var_176 == 172) {
            Gvar.var_196 = 1;
        }
        if (Gvar.var_176 == 44 || Gvar.var_176 == 129 || Gvar.var_176 == 60 || Gvar.var_176 == 162 || Gvar.var_176 == 122) {
            Gvar.var_197 = 1;
        }
        if (Gvar.var_176 == 15 || Gvar.var_176 == 42 || Gvar.var_176 == 3 || Gvar.var_176 == 99 || Gvar.var_176 == 31 || Gvar.var_176 == 48 || Gvar.var_176 == 28 || Gvar.var_176 == 118 || Gvar.var_176 == 111) {
            Gvar.var_198 = 1;
        }
        if (Gvar.var_176 == 85 || Gvar.var_176 == 118 || Gvar.var_176 == 154) {
            Gvar.var_148 = 1;
        }
        if (Gvar.var_176 == 129 || Gvar.var_176 == 14) {
            Gvar.var_160 = 1;
        }
        if (Gvar.var_176 == 35 || Gvar.var_176 == 137 || Gvar.var_176 == 32 || Gvar.var_176 == 109 || Gvar.var_176 == 72 || Gvar.var_176 == 65) {
            Gvar.var_120 = 1;
        }
        if (Gvar.var_176 == 145 || Gvar.var_176 == 84) {
            Gvar.var_120 = 3;
        }
        if (Gvar.var_176 == 150) {
            Gvar.var_120 = 2;
        }
        if (Gvar.var_176 == 125) {
            Gvar.var_120 = 6;
        }
        if (Gvar.var_176 == 148) {
            Gvar.var_120 = 3;
        }
        if (Gvar.var_176 == 4 || Gvar.var_176 == 160 || Gvar.var_176 == 12 || Gvar.var_176 == 15) {
            Gvar.var_120 = 10;
        }
        if (Gvar.var_176 == 64) {
            Gvar.var_120 = 15;
        }
        if (Gvar.var_176 == 154) {
            Gvar.var_136 = 1;
        }
        if (Gvar.var_176 == 79) {
            Gvar.var_3947 = Adap.rnd(8);
            if (Gvar.var_3947 == 0) {
                Gvar.var_120 = 1;
            }
        }
        if (Gvar.var_176 == 45 || Gvar.var_176 == 158) {
            Gvar.var_3948 = Gvar.var_250;
            if (Gvar.var_249 >= 1) {
                Gvar.var_250 = 0;
                for (let cnt1 = 0; cnt1 < Gvar.var_249 + 1; ++cnt1) {
                    Gvar.var_246 = 0;
                    Gvar.var_222 = 0;
                    Gvar.var_256 = 0;
                    if (Gvar.var_258[Gvar.var_250][12] == 1) {
                        Gvar.var_258[Gvar.var_250][12] = 0;
                        await Func.func457();
                        await Func.func458();
                        await Func.func459();
                        if (Gvar.var_250 == Gvar.var_428) {
                            Gvar.var_996 = 0;
                        }
                        if (Gvar.var_250 == Gvar.var_432) {
                            Gvar.var_997 = 0;
                        }
                        if (Gvar.var_250 == Gvar.var_474) {
                            Gvar.var_998 = 0;
                        }
                    }
                    Gvar.var_250 = Gvar.var_250 + 1;
                }
            }
            Gvar.var_250 = Gvar.var_3948;
        }
        return;
}

export {func1015}
