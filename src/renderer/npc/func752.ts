/**
 * func752 — func752 ペッシ関係
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'
import { tf } from '../i18n'

// ダンジョン内で仲間になったペッシに話しかけた時のメッセージ処理
// 旧 func752
async function func752(this: any) {
        Adap.dbgprt(752);
        await Func.func729();

        Gvar.var_3130 = 0;
        Gvar.var_3125 = Adap.rnd(4);
        if (Gvar.var_2571 == 0) {
            Gvar.var_3125 = Adap.rnd(3);
        }
        if (Gvar.var_3125 == 0) {
            if (Gvar.var_191 == 0) {
                await Func.setMessage("兄貴ィ！",
                                       "釣りでもしてみますかい？", 7, false, false, true);
                Gvar.var_3130 = 1;
            }
            if (Gvar.var_191 != 0) {
                await Func.setMessage("また釣りかい？",
                                       "少し休ませてくれよ…", 7, false, false, true);
            }
        }
        if (Gvar.var_3125 == 1) {
            if (Gvar.var_1332 < 10) {
                await Func.setMessage("ゴメンよ兄貴…",
                                       "俺、やっぱ足手まといだったなぁ…", 7, false, false, true);
            }
            if (Gvar.var_1332 >= 10 && Gvar.var_1332 < 30) {
                await Func.setMessage("うわぁぁん！",
                                       "い、痛ぇーーー！", 7, false, false, true);
            }
            if (Gvar.var_1332 >= 30 && Gvar.var_1332 < 60) {
                await Func.setMessage("兄貴ィ～、痛ェよ～",
                                       "回復してくれよォ～", 7, false, false, true);
            }
            if (Gvar.var_1332 >= 60 && Gvar.var_1332 < 80) {
                await Func.setMessage("兄貴ィ～…あ、あてにしねーでくれよ",
                                       "俺なんかの勘をよォー", 7, false, false, true);
            }
            if (Gvar.var_1332 >= 80 && Gvar.var_1332 < 100) {
                await Func.setMessage("あ、兄貴ィ～",
                                       "本当に行くのかい？", 7, false, false, true);
            }
            if (Gvar.var_1332 >= 100) {
                await Func.setMessage("ブッ殺してやるッ！！",
                                       "", 7, false, false, true);
            }
        }
        if (Gvar.var_3125 == 2) {
            Gvar.var_3088 = Gvar.var_83[Gvar.var_3072].Var16;
            Gvar.var_3089 = Gvar.var_83[Gvar.var_3072].Var39;
            await Func.func682();
            if (Gvar.var_3073 < 99999) {
                await Func.setMessage(tf("あと{0}くらいで", Gvar.var_3073), "もっと強くなれるよ兄貴ィッ！", 7, false, false, true);
            }
            if (Gvar.var_3073 >= 99999) {
                await Func.setMessage("俺の強さはこれが限界だァ～",
                                       "", 7, false, false, true);
            }
            await Music.func126();
        }
        if (Gvar.var_3125 == 3) {
            Gvar.enemy_list = Gvar.var_2571;
            await Func.func626();
            Gvar.var_3125 = Adap.rnd(2);
            if (Gvar.var_3125 == 0) {
                await Func.setMessage(tf("{0}を", Gvar.enemy_name), "｢ブッ殺した｣！", 7, false, false, true);
            }
            if (Gvar.var_3125 == 1) {
                await Func.setMessage("俺でも何とか", tf("{0}を倒せたぜ！", Gvar.enemy_name), 7, false, false, true);
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
        await Func.func0898(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func752}
