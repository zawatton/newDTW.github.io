import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// ダンジョン内で仲間の成長したペッシに話しかけた時のメッセージ処理
async function func753(this: any) {
        Adap.dbgprt(753);
        Gvar.var_243 = 0;
        Gvar.var_3072 = Gvar.var_314;
        await Func.func729();
        Gvar.var_3130 = 0;
        Gvar.var_3125 = Adap.rnd(4);
        if (Gvar.var_2571 == 0) {
            Gvar.var_3125 = Adap.rnd(3);
        }
        if (Gvar.var_3125 == 0) {
            if (Gvar.var_191 == 0) {
                await Func.setMessage1("兄貴ィ！",
                                       "釣りでもしてみますかい？", 7, false, false, true);
                Gvar.var_3130 = 1;
            }
            if (Gvar.var_191 != 0) {
                await Func.setMessage1("また釣りかい？",
                                       "少し休ませてくれよ…", 7, false, false, true);
            }
        }
        if (Gvar.var_3125 == 1) {
            if (Gvar.var_1332 < 10) {
                await Func.setMessage1("落ちてくだけるのはウヒャハハハ",
                                       "俺だぁぁーーーッ！！！", 7, false, false, true);
            }
            if (Gvar.var_1332 >= 10 && Gvar.var_1332 < 30) {
                await Func.setMessage1("ガブッ…負けた…のか…",
                                       "俺は死ぬ…死ぬのか…", 7, false, false, true);
            }
            if (Gvar.var_1332 >= 30 && Gvar.var_1332 < 60) {
                await Func.setMessage1("栄光は…俺にある…！",
                                       "兄貴…見守っていてくれ…！", 7, false, false, true);
            }
            if (Gvar.var_1332 >= 60 && Gvar.var_1332 < 80) {
                await Func.setMessage1("グッ…落ち着くんだ！",
                                       "疑心暗鬼は心の弱さだ…！", 7, false, false, true);
            }
            if (Gvar.var_1332 >= 80 && Gvar.var_1332 < 100) {
                await Func.setMessage1("兄貴と同じ苦しみを味わうんだなァーッ！",
                                       "", 7, false, false, true);
            }
            if (Gvar.var_1332 >= 100) {
                await Func.setMessage1("償わせてやるぜッ！",
                                       "兄貴の意志はオイラがとげるッ！", 7, false, false, true);
            }
        }
        if (Gvar.var_3125 == 2) {
            Gvar.var_3088 = Gvar.var_83[Gvar.var_3072].Var16;
            Gvar.var_3089 = Gvar.var_83[Gvar.var_3072].Var39;
            await Func.func682();
            if (Gvar.var_3073 < 99999) {
                await Func.setMessage1("あと" + Gvar.var_3073 + "くらいで",
                                       "もっと強くなれるぜ！", 7, false, false, true);
            }
            if (Gvar.var_3073 >= 99999) {
                await Func.setMessage1("俺の強さはこれが限界だぜ！",
                                       "｢ブッ殺した｣！", 7, false, false, true);
            }
            await Func.AutoDraw(10);
            await Music.func127();
        }
        if (Gvar.var_3125 == 3) {
            Gvar.enemy_list = Gvar.var_2571;
            await Func.func626();
            Gvar.var_3125 = Adap.rnd(3);
            if (Gvar.var_3125 == 0) {
                await Func.setMessage1("" + Gvar.enemy_name + "をやっちまった～♪",
                                       "でも思ったよりたいしたことないな", 7, false, false, true);
            }
            if (Gvar.var_3125 == 1) {
                await Func.setMessage1("これで俺に向かってマンモーニだなんて",
                                       "言えるヤツは  誰一人いねー…", 7, false, false, true);
            }
            if (Gvar.var_3125 == 2) {
                await Func.setMessage1("" + Gvar.enemy_name + "の",
                                       "心臓えぐりとってやったぜ…", 7, false, false, true);
            }
        }
        await Func.AutoDraw(15);
        await Func.func051(); // キー入力待ち処理
        if (Gvar.var_3130 == 0) {
            Gvar.var_198 = 0; // メッセージウィンドウ閉じる
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3137 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func753}
