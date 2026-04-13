import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func733
async function func733(this: any) {
        Adap.dbgprt(733);
        await Func.func729();
        Gvar.var_3125 = Adap.rnd(3);
        if (Gvar.var_2571 == 0) {
            Gvar.var_3125 = Adap.rnd(2);
        }
        if (Gvar.var_3125 == 0) {
            if (Gvar.var_1332 < 10) {
                await Func.setMessage("うう…このキズは…急所だ…！",
                                       "", 7, true, false, true);
            }
            if (Gvar.var_1332 >= 10 && Gvar.var_1332 < 30) {
                await Func.setMessage("やめりゃあよかった!こんなﾀﾌｶﾞｲに",
                                       "ケンカふっかけるのはよォ！", 7, true, false, true);
            }
            if (Gvar.var_1332 >= 30 && Gvar.var_1332 < 60) {
                await Func.setMessage("こんなもんカスリ傷だぜッ！",
                                       "…イ、イデーイデー！つ…杖！", 7, true, false, true);
            }
            if (Gvar.var_1332 >= 60 && Gvar.var_1332 < 80) {
                await Func.setMessage("ここまで首をつっこんだんだ！",
                                       "黙っているのは性分じゃねえからな", 7, true, false, true);
            }
            if (Gvar.var_1332 >= 80 && Gvar.var_1332 < 100) {
                await Func.setMessage("俺は物を盗むが",
                                       "こいつらは命を盗む！許せねえ！", 7, true, false, true);
            }
            if (Gvar.var_1332 >= 100) {
                await Func.setMessage("この紳士に手を出すことは…",
                                       "このスピードワゴンが許さねえ！", 7, true, false, true);
            }
        }
        if (Gvar.var_3125 == 1) {
            Gvar.var_3088 = Gvar.var_83[Gvar.var_3072].Var16;
            Gvar.var_3089 = Gvar.var_83[Gvar.var_3072].Var39;
            await Func.func682();
            if (Gvar.var_3073 < 99999) {
                await Func.setMessage("あと" + Gvar.var_3073 + "くらいで",
                                       "もっと強くなれる気がするぜ！", 7, true, false, true);
            }
            if (Gvar.var_3073 >= 99999) {
                await Func.setMessage("おれの強さはこれが限界だ！",
                                       "", 7, true, false, true);
            }
            await Music.func125();
        }
        if (Gvar.var_3125 == 2) {
            Gvar.enemy_list = Gvar.var_2571;
            await Func.func626();
            Gvar.var_3125 = Adap.rnd(3);
            if (Gvar.var_3125 == 0) {
                await Func.setMessage("" + Gvar.enemy_name + "は死んだッ！",
                                       "大げさかもしれんが世界は救われたッ！", 7, true, false, true);
            }
            if (Gvar.var_3125 == 1) {
                await Func.setMessage("" + Gvar.enemy_name + "は臭えーッ！",
                                       "ゲロ以下のニオイがﾌﾟﾝﾌﾟﾝするぜーッ！", 7, true, false, true);
            }
            if (Gvar.var_3125 == 2) {
                await Func.setMessage("気をつけな！",
                                       "" + Gvar.enemy_name + "はこすずるいぜ！", 7, true, false, true);
            }
        }
        if (Gvar.var_83[Gvar.var_3072].Var3 == 1) {
            await Func.setMessage("礼は  戦いが終わって",
                                   "生きのびてから言えってんだ…", 7, true, false, true);
        }

        await Func.func051(); // キー入力待ち処理
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func733}
