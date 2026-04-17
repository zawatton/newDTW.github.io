/**
 * func746 — func746 ツェッペリ男爵関係
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'
import { tf } from '../i18n'

// 旧 func746
async function func746(this: any) {
        Adap.dbgprt(746);
        await Func.func729();

        Gvar.animationStep = 0;
        Gvar.var_3133 = 0;
        Gvar.var_3125 = Adap.rnd(4);
        if (Gvar.var_2571 == 0) {
            Gvar.var_3125 = Adap.rnd(3);
        }
        if (Gvar.var_3125 == 0) {
            if (Gvar.var_130 == 0) {
                await Func.setMessage("軽い波紋を作れるようにしてやろうか？",
                                        "", 7, true, false, true);
                Gvar.var_3133 = 1;
            }
            if (Gvar.var_130 != 0) {
                Gvar.var_3125 = Adap.rnd(3);
                if (Gvar.var_2571 == 0) {
                    Gvar.var_3125 = Adap.rnd(2);
                }
                Gvar.var_3125 = Gvar.var_3125 + 1;
            }
        }
        if (Gvar.var_3125 == 1) {
            if (Gvar.var_1332 < 10) {
                await Func.setMessage("ま…まるで親友と息子を同時に",
                                        "持ったような気持ちだぞ…", 7, true, false, true);
            }
            if (Gvar.var_1332 >= 10 && Gvar.var_1332 < 30) {
                await Func.setMessage("ついに  ついにきたか",
                                        "あの予言の時が…", 7, true, false, true);
            }
            if (Gvar.var_1332 >= 30 && Gvar.var_1332 < 60) {
                await Func.setMessage("やれやれ…こいつらの魂を",
                                        "解き放つのは骨が折れそうじゃわい", 7, true, false, true);
            }
            if (Gvar.var_1332 >= 60 && Gvar.var_1332 < 80) {
                await Func.setMessage("戦いの思考２！勇気とは怖さを知る事！",
                                        "恐怖を我が物とすることじゃあッ！", 7, true, false, true);
            }
            if (Gvar.var_1332 >= 80 && Gvar.var_1332 < 100) {
                await Func.setMessage("戦いの思考１！相手の立場になって",
                                        "考える…これは大事じゃぞ！", 7, true, false, true);
            }
            if (Gvar.var_1332 >= 100) {
                await Func.setMessage("ゆくぞディアボロ君！",
                                        "ところでコルク抜きもってなぁい？", 7, true, false, true);
            }
        }
        if (Gvar.var_3125 == 2) {
            Gvar.var_3088 = Gvar.var_83[Gvar.var_3072].Var16;
            Gvar.var_3089 = Gvar.var_83[Gvar.var_3072].Var39;
            await Func.func682();
            if (Gvar.var_3073 < 99999) {
                await Func.setMessage(tf("あと{0}くらいで", Gvar.var_3073), "もっと強くなれるだろう", 7, true, false, true);
            }
            if (Gvar.var_3073 >= 99999) {
                await Func.setMessage("私の強さはこれが限界のようだ。",
                                        "", 7, true, false, true);
            }
            await Music.func124();
        }
        if (Gvar.var_3125 == 3) {
            Gvar.enemy_list = Gvar.var_2571;
            await Func.func626();
            Gvar.var_3125 = Adap.rnd(3);
            if (Gvar.var_3125 == 0) {
                await Func.setMessage(tf("{0}なんぞ", Gvar.enemy_name), "ノミと同類よォー！", 7, true, false, true);
            }
            if (Gvar.var_3125 == 1) {
                await Func.setMessage("波紋エネルギーをぶつければ",
                                        "吸血鬼どもは砕け散るッ！！", 7, true, false, true);
            }
            if (Gvar.var_3125 == 2) {
                await Func.setMessage("どうだディアボロ君",
                                        "これが「仙道」だ！", 7, true, false, true);
            }
        }
        await Func.func051(); // キー入力待ち処理
        if (Gvar.var_3133 == 0) {
            Gvar.var_198 = 0; // メッセージウィンドウ閉じる
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3134 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func0898(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func746}
