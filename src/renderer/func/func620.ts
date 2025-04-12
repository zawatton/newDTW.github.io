import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Enemy from '../enemy/index'

async function func620(this: any) {
        Adap.dbgprt(620);
        if (Gvar.var_83[Gvar.var_673].Var17 != 0 || Gvar.var_83[Gvar.var_673].Var23 != 0) {
            return;
        }
        // No = 3 敵タワーオブグレーの特殊能力
        if (Gvar.enemy_list == 3) {
            // await Enemy.enemy003();
            // return;
        }
        // No = 4 敵デス・13の特殊能力
        if (Gvar.enemy_list == 4) {
            await Enemy.enemy004();
            return;
        }
        // No = 12 敵エコーズACT2の特殊能力
        if (Gvar.enemy_list == 12) {
            await Enemy.enemy012();
            return;
        }
        // No = 15 敵ペットショップの特殊能力
        if (Gvar.enemy_list == 15) {
            await Enemy.enemy015();
            return;
        }
        // No = 17 シアハートアタックの特殊能力
        if (Gvar.enemy_list == 17) {
            await Enemy.enemy017();
            return;
        }
        // No = 18 ブラック・サバスの行動
        if (Gvar.enemy_list == 18) {
            await Enemy.enemy018();
            return;
        }
        // No = 20 エンヤ婆の動作処理
        if (Gvar.enemy_list == 20) {
            await Enemy.enemy020();
            return;
        }
        // No = 26 敵ハーヴェストの特殊能力
        if (Gvar.enemy_list == 26) {
            await Enemy.enemy026();
            return;
        }
        // No = 27 敵ゲブ神の特殊能力
        if (Gvar.enemy_list == 27) {
            await Enemy.enemy027();
            return;
        }
        // No = 28 敵ジャッジメントの特殊能力
        if (Gvar.enemy_list == 28) {
            await Enemy.enemy028();
            return;
        }
        // No = 32 吉良吉影の特殊能力
        if (Gvar.enemy_list == 32) {
            await Enemy.enemy032();
            return;
        }
        // No = 38 アレッシーの特殊能力
        if (Gvar.enemy_list == 38) {
            await Enemy.enemy038();
            return;
        }
        // No = 39 敵ハイウェイスターの特殊能力
        if (Gvar.enemy_list == 39) {
            await Enemy.enemy039();
            return;
        }
        // No = 45 敵由花子の特殊能力
        if (Gvar.enemy_list == 45) {
            await Enemy.enemy045();
            return;
        }
        // No = 59 プッチ神父の特殊能力
        if (Gvar.enemy_list == 59) {
            await Enemy.enemy059();
            return;
        }
        // No = 63 プロシュート兄貴の特殊能力
        if (Gvar.enemy_list == 63) {
            await Enemy.enemy063();
            return;
        }
        // No = 64 敵ギアッチョの特殊能力
        if (Gvar.enemy_list == 64) {
            await Enemy.enemy015();
            return;
        }
        // No = 65 虹村形兆の特殊能力
        if (Gvar.enemy_list == 65) {
            await Enemy.enemy065();
            return;
        }
        // No = 69 ブラフォードの特殊能力
        if (Gvar.enemy_list == 69) {
            await Enemy.enemy069();
            return;
        }
        // No = 77 敵エコーズACT1の特殊能力
        if (Gvar.enemy_list == 77) {
            await Enemy.enemy077();
            return;
        }
        // No = 78 アヴドゥルさんの特殊能力
        if (Gvar.enemy_list == 78) {
            await Enemy.enemy078();
            return;
        }
        // No = 80 ラング・ラングラーの特殊能力
        if (Gvar.enemy_list == 80) {
            await Enemy.enemy080();
            return;
        }
        // No = 87 エシディシの特殊能力
        if (Gvar.enemy_list == 87) {
            await Enemy.enemy087();
            return;
        }
        // No = 94 ブルりんの特殊能力
        if (Gvar.enemy_list == 94) {
            await Enemy.enemy094();
            return;
        }
        // No = 119 ジョセフ(3部)の特殊能力
        if (Gvar.enemy_list == 119) {
            await Enemy.enemy119();
            return;
        }
        // No = 127 敵C-MOONの特殊能力
        if (Gvar.enemy_list == 127) {
            await Enemy.enemy127();
            return;
        }
        // No = 130 敵マリリンマンソンの特殊能力
        if (Gvar.enemy_list == 130) {
            await Enemy.enemy130();
            return;
        }
        // No = 131 ジョルノの特殊能力
        if (Gvar.enemy_list == 131) {
            await Enemy.enemy131();
            return;
        }
        // No = 132 レクイエムジョルノの動作処理
        if (Gvar.enemy_list == 132) {
            await Enemy.enemy132(); // No = 132 レクイエムジョルノの動作処理
            return;
        }
        // No = 137 成長した吉良の特殊能力
        if (Gvar.enemy_list == 137) {
            await Enemy.enemy137();
            return;
        }
        // No = 144 川尻浩作の特殊能力
        if (Gvar.enemy_list == 144) {
            await Enemy.enemy144();
            return;
        }
        // No = 145 敵康一の特殊能力
        if (Gvar.enemy_list == 145) {
            await Enemy.enemy012();
            return;
        }
        // No = 150 敵康一act2の特殊能力
        if (Gvar.enemy_list == 150) {
            await Enemy.enemy012();
            return;
        }
        // No = 157 アナスイの特殊能力
        if (Gvar.enemy_list == 157) {
            await Enemy.enemy157();
            return;
        }
        // No = 158 プッツン由花子の特殊能力
        if (Gvar.enemy_list == 158) {
            await Enemy.enemy045();
            await Enemy.enemy158(); // Ver0.1401にて修正。おそらくバグと思われる。1580 → 158へ。プッツン由花子はNo = 158。ディアボロを逃がさない。
            return;
        }
        // No = 160 ウェストウッド看守の特殊能力
        if (Gvar.enemy_list == 160) {
            await Enemy.enemy160();
            return;
        }
        // No = 170 敵カタツムリの特殊能力
        if (Gvar.enemy_list == 170) {
            await Enemy.enemy170();
            return;
        }
        // No = 999 没敵(不明)の特殊能力
        if (Gvar.enemy_list == 999) {
            await Enemy.enemy999();
            return;
        }
        // No = 9999 没敵(ジョナサン,ジョセフ等の波紋使い?)の特殊能力
        if (Gvar.enemy_list == 9999) {
            await Enemy.enemy9999();
            return;
        }
        // No = 没敵(昇り調子の大柳賢)の特殊能力
        if (Gvar.enemy_list == 9999) {
            //await enemy9999a();
            return;
        }
        return;
}

export {func620}
