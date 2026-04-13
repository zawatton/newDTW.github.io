import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ステータス初期化＆ポスト能力クリーンアップ（能力実行後のリセット処理）
async function func1014(this: any) {
        Adap.dbgprt(1014);
        Gvar.var_119 = 0;
        Gvar.var_120 = 0;
        Gvar.var_121 = 0;
        Gvar.var_133 = 0;
        Gvar.var_131 = 0;
        Gvar.var_151 = 0;
        Gvar.var_152 = 0;
        Gvar.var_153 = 0;
        Gvar.var_154 = 0;
        Gvar.var_202 = 0;
        Gvar.var_115 = 0;
        Gvar.var_108 = 0;
        Gvar.var_142 = 0;
        Gvar.var_125 = 0;
        Gvar.var_207 = 0;
        Gvar.var_127 = 0;
        Gvar.var_128 = 0;
        Gvar.var_1132 = 0;
        Gvar.var_146 = 0;
        Gvar.var_147 = 0;
        Gvar.var_150 = 0;
        Gvar.var_451 = 0;
        Gvar.var_178 = 0;
        Gvar.var_196 = 0;
        Gvar.var_144 = 0;
        Gvar.var_188 = 0;
        Gvar.var_149 = 0;
        Gvar.var_148 = 0;
        Gvar.var_194 = 0;
        Gvar.var_195 = 0;
        Gvar.var_196 = 0;
        Gvar.var_197 = 0;
        Gvar.var_198 = 0;
        Gvar.var_180 = 0;
        Gvar.var_218 = 0;
        Gvar.var_160 = 0;
        Gvar.var_138 = 0;
        Gvar.var_136 = 0;
        Gvar.var_155 = 0;
        if (Gvar.var_129 < 710) {
            Gvar.var_112 = 0;
        }
        Gvar.var_137 = 0;
        Gvar.var_172 = 0;
        Gvar.var_167 = 0;
        Gvar.var_189 = 0;
        Gvar.var_3945 = 0;
        Gvar.var_3946 = 0;
        Gvar.var_162 = 0;
        Gvar.var_1920 = 0;
        Gvar.var_181 = 0;
        Gvar.var_183 = 0;
        Gvar.var_182 = 0;
        Gvar.var_130 = 0;
        Gvar.var_166 = 0;
        Gvar.var_159 = 0;
        Gvar.var_3384 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_107; ++cnt1) {
            if (Gvar.var_308[Gvar.var_3384][0] == 40 || Gvar.var_308[Gvar.var_3384][0] == 41 || Gvar.var_308[Gvar.var_3384][0] == 42 || Gvar.var_308[Gvar.var_3384][0] == 54 || Gvar.var_308[Gvar.var_3384][0] == 17 || Gvar.var_308[Gvar.var_3384][0] == 76 || Gvar.var_308[Gvar.var_3384][0] == 77 || (Gvar.var_308[Gvar.var_3384][0] == 12 && Gvar.var_308[Gvar.var_3384][31] == 5)) {
                Gvar.var_3158 = Gvar.var_308[Gvar.var_3384][1];
                Gvar.var_3159 = Gvar.var_308[Gvar.var_3384][2];
                Gvar.var_93[Gvar.var_3158][Gvar.var_3159] = 0;
                for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                    Gvar.var_308[Gvar.var_3384][cnt2] = 0;
                }
            }
            if (Gvar.var_308[Gvar.var_3384][0] == 68 || Gvar.var_308[Gvar.var_3384][0] == 67 || (Gvar.var_308[Gvar.var_3384][0] == 43 && Gvar.var_308[Gvar.var_3384][31] == 5)) {
                Gvar.var_308[Gvar.var_3384][31] = 7;
                if (Gvar.var_308[Gvar.var_3384][0] == 43) {
                    Gvar.var_308[Gvar.var_3384][31] = 1;
                }
            }
            Gvar.var_3384 = Gvar.var_3384 + 1;
        }
        if (Gvar.var_185 != 0) {
            Gvar.var_170 = 0;
            Gvar.var_185 = 0;
            Gvar.var_184 = 0;
            if (Gvar.var_83[Gvar.var_74][Gvar.var_75] == 0 && Gvar.var_96 == 0) {
                await Func.func762();
            }
        }
        await Func.func348();
        return;
}

export {func1014}
