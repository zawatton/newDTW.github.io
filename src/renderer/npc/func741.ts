import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func741(this: any) {
        Adap.dbgprt(741);
        await Func.func729();
        Gvar.var_3128 = Gvar.var_83[Gvar.var_3072].Var1;
        Gvar.var_3129 = Gvar.var_83[Gvar.var_3072].Var2;
        Gvar.var_3130 = 0;
        Gvar.var_3125 = Adap.rnd(4);
        if (Gvar.var_2571 == 0) {
            Gvar.var_3125 = Adap.rnd(3);
        }
        if (Gvar.var_3125 == 0) {
            if (Gvar.var_180 == 0 && Gvar.var_73[Gvar.var_3128][Gvar.var_3129] == 0 && Gvar.var_80[Gvar.var_3128][Gvar.var_3129] == 0 && Gvar.var_77[Gvar.var_3128][Gvar.var_3129] == 0) {
                await Func.setMessage1("ここに砂のDIOを潜ませてやろうか？", "", 7, true, false, true);
                Gvar.var_3130 = 1;
            }
            if (Gvar.var_3130 == 0) {
                Gvar.var_3125 = Adap.rnd(3);
                if (Gvar.var_2571 == 0) {
                    Gvar.var_3125 = Adap.rnd(2);
                }
                Gvar.var_3125 = Gvar.var_3125 + 1;
            }
        }
        if (Gvar.var_3125 == 1) {
            if (Gvar.var_1332 < 10) {
                await Func.setMessage1("(ガフッ…ググ…ニヤリ)", "", 7, true, false, true);
            }
            if (Gvar.var_1332 >= 10 && Gvar.var_1332 < 30) {
                await Func.setMessage1("(な…なんのトラブルもない人生を送る", "ハズだったのに…ミスったぜ…)", 7, true, false, true);
            }
            if (Gvar.var_1332 >= 30 && Gvar.var_1332 < 60) {
                await Func.setMessage1("(クソー、手加減なしの凶暴なヤツだ…)", "", 7, true, false, true);
            }
            if (Gvar.var_1332 >= 60 && Gvar.var_1332 < 80) {
                await Func.setMessage1("(やれやれ…犬好きは見殺しには", "できねーぜッ！)", 7, true, false, true);
            }
            if (Gvar.var_1332 >= 80 && Gvar.var_1332 < 100) {
                await Func.setMessage1("(うるせーな、犬の俺に聞くな！)", "", 7, true, false, true);
            }
            if (Gvar.var_1332 >= 100) {
                await Func.setMessage1("(くるなら来いッ！ブッ殺してやる！)", "", 7, true, false, true);
            }
        }
        if (Gvar.var_3125 == 2) {
            Gvar.var_3088 = Gvar.var_83[Gvar.var_3072].Var16;
            Gvar.var_3089 = Gvar.var_83[Gvar.var_3072].Var39;
            await Func.func682();
            if (Gvar.var_3073 < 99999) {
                await Func.setMessage1("(あと" + Gvar.var_3073 + "くらいで", "もっと強くなれる気がするぜ！)", 7, true, false, true);
            }
            if (Gvar.var_3073 >= 99999) {
                await Func.setMessage1("(おれの強さはこれが限界だ！)", "", 7, true, false, true);
            }
            await Music.func128();
        }
        if (Gvar.var_3125 == 3) {
            Gvar.enemy_list = Gvar.var_2571;
            await Func.func626();
            Gvar.var_3125 = Adap.rnd(3);
            if (Gvar.var_3125 == 0) {
                await Func.setMessage1("や…やった、やっつけたぞ", "" + Gvar.enemy_name + "め…", 7, true, false, true);
            }
            if (Gvar.var_3125 == 1) {
                await Func.setMessage1("かかってきやがれ", "" + Gvar.enemy_name + "め！", 7, true, false, true);
            }
            if (Gvar.var_3125 == 2) {
                await Func.setMessage1("やり～！" + Gvar.enemy_name + "め", "頭悪いぜッ！", 7, true, false, true);
            }
        }
        await Func.func051(); // キー入力待ち処理
        if (Gvar.var_3130 == 0) {
            Gvar.var_198 = 0; // メッセージウィンドウ閉じる
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3131 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func741}
