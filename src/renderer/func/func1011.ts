import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// スキルシステムディスパッチャ（40+種の特殊能力をvar_176のスキルIDでルーティング）
async function func1011(this: any) {
        Adap.dbgprt(1011);
        await Func.func1016();
        Gvar.var_378 = Gvar.var_74;
        Gvar.var_379 = Gvar.var_75;
        if (Gvar.var_224 == 4) {
            Gvar.var_378 = Gvar.var_378 - 1;
        }
        if (Gvar.var_224 == 6) {
            Gvar.var_378 = Gvar.var_378 + 1;
        }
        if (Gvar.var_224 == 8) {
            Gvar.var_379 = Gvar.var_379 - 1;
        }
        if (Gvar.var_224 == 2) {
            Gvar.var_379 = Gvar.var_379 + 1;
        }
        if (Gvar.var_224 == 1) {
            Gvar.var_378 = Gvar.var_378 - 1;
            Gvar.var_379 = Gvar.var_379 + 1;
        }
        if (Gvar.var_224 == 3) {
            Gvar.var_378 = Gvar.var_378 + 1;
            Gvar.var_379 = Gvar.var_379 + 1;
        }
        if (Gvar.var_224 == 7) {
            Gvar.var_378 = Gvar.var_378 - 1;
            Gvar.var_379 = Gvar.var_379 - 1;
        }
        if (Gvar.var_224 == 9) {
            Gvar.var_378 = Gvar.var_378 + 1;
            Gvar.var_379 = Gvar.var_379 - 1;
        }
        // スキルIDに応じてディスパッチ
        if (Gvar.var_176 == 3 || Gvar.var_176 == 115 || Gvar.var_176 == 27 || Gvar.var_176 == 86 || Gvar.var_176 == 44 || Gvar.var_176 == 18) {
            await Func.func1046();
        }
        else if (Gvar.var_176 == 59) {
            await Func.func1045();
        }
        else if (Gvar.var_176 == 109) {
            await Func.func1044();
        }
        else if (Gvar.var_176 == 4) {
            await Func.func1043();
        }
        else if (Gvar.var_176 == 39) {
            await Func.func1042();
        }
        else if (Gvar.var_176 == 69) {
            await Func.func1018();
        }
        else if (Gvar.var_176 == 38) {
            await Func.func1017();
        }
        else if (Gvar.var_176 == 159) {
            await Func.func1020();
        }
        else if (Gvar.var_176 == 125) {
            await Func.func1021();
        }
        else if (Gvar.var_176 == 148) {
            await Func.func1022();
        }
        else if (Gvar.var_176 == 98) {
            await Func.func1023();
        }
        else if (Gvar.var_176 == 47 || Gvar.var_176 == 67) {
            await Func.func1024();
        }
        else if (Gvar.var_176 == 127) {
            await Func.func1025();
        }
        else if (Gvar.var_176 == 135) {
            await Func.func1026();
        }
        else if (Gvar.var_176 == 26) {
            await Func.func1027();
        }
        else if (Gvar.var_176 == 133) {
            await Func.func1028();
        }
        else if (Gvar.var_176 == 118) {
            await Func.func1029();
        }
        else if (Gvar.var_176 == 15 || Gvar.var_176 == 64) {
            await Func.func1030();
        }
        else if (Gvar.var_176 == 30) {
            await Func.func1031();
        }
        else if (Gvar.var_176 == 119 || Gvar.var_176 == 147) {
            await Func.func1032();
        }
        else if (Gvar.var_176 == 17) {
            await Func.func1033();
        }
        else if (Gvar.var_176 == 160) {
            await Func.func1034();
        }
        else if (Gvar.var_176 == 136 || Gvar.var_176 == 80 || Gvar.var_176 == 158 || Gvar.var_176 == 120 || Gvar.var_176 == 76) {
            await Func.func683();
        }
        else if (Gvar.var_176 == 144) {
            await Func.func1035();
        }
        else if (Gvar.var_176 == 63) {
            await Func.func1036();
        }
        else if (Gvar.var_176 == 12) {
            await Func.func1037();
        }
        else if (Gvar.var_176 == 77) {
            await Func.func1019();
        }
        else if (Gvar.var_176 == 114 || Gvar.var_176 == 113 || Gvar.var_176 == 128) {
            await Func.func1038();
        }
        else if (Gvar.var_176 == 32) {
            await Func.func1039();
        }
        else if (Gvar.var_176 == 164 || Gvar.var_176 == 165) {
            await Func.func1040();
        }
        else if (Gvar.var_176 == 153) {
            await Func.func1041();
        }
        else if (Gvar.var_176 == 72) {
            await Func.func1047();
        }
        else if (Gvar.var_176 == 170) {
            await Func.func1056();
        }
        else if (Gvar.var_176 == 28) {
            await Func.func1053();
        }
        else if (Gvar.var_176 == 154) {
            await Func.func1049();
        }
        else if (Gvar.var_176 == 145) {
            await Func.func1051();
        }
        else if (Gvar.var_176 == 150) {
            await Func.func1052();
        }
        else if (Gvar.var_176 == 65) {
            await Func.func1055();
        }
        else if (Gvar.var_176 == 84) {
            await Func.func1050();
        }
        else if (Gvar.var_176 == 35) {
            await Func.func1048();
        }
        else {
            // 特技がないようだ（デフォルト）
            Gvar.var_271 = 0;
            await Func.setMessage("特技がないようだ", "", 1, false, false, false);
            await Func.AutoDraw(10);
            await Func.func009();
            return;
        }
        Gvar.var_242 = 1;
        await Func.func019();
        return;
}

export {func1011}
