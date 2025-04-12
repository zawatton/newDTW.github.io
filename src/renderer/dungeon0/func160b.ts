import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func160b(this: any) {
        //var_97 = 0; 常時OFF。ONにすると亀が消える。おそらくキャラ配置配列初期化?
        // ここから下はオリジナルには無いロッコ・バロッコ所長をヴェネチアホテルへ追加する要素。
        // おそらくウェブ版にて独自に追加したと思われる。Ver0.1310で廃止。Ver0.1403より復活。酒場へ追加するように位置修正。
        if (Gvar.var_759 >= 1) { // 岸辺露伴とのイベントフラグがON
            Gvar.var_97 = Gvar.var_97 + 1;
            Gvar.var_761 = Gvar.var_97;
            Gvar.var_82[18][31] = Gvar.var_97; // マップ上のX軸とY軸の配列 Gvar.var_82[X軸][Y軸]
            Gvar.var_83[Gvar.var_97].Var0 = 173; // Gvar.enemy_list = 173 なのでロッコ・バロッコ所長
            Gvar.var_83[Gvar.var_97].Var1 = 18; // マップ上のX軸 18 → 18
            Gvar.var_83[Gvar.var_97].Var2 = 31; // マップ上のY軸 10 → 31
            Gvar.var_83[Gvar.var_97].Var3 = 20;
            Gvar.var_83[Gvar.var_97].Var4 = 0;
            Gvar.var_83[Gvar.var_97].Var5 = 2;
            Gvar.var_83[Gvar.var_97].Var10 = 1;
            Gvar.var_83[Gvar.var_97].Var31 = 4;
            Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);

            // Ver0.1403より追加。バーテンダー。
            Gvar.var_97 = Gvar.var_97 + 1;
            Gvar.var_761 = Gvar.var_97;
            Gvar.var_82[23][30] = Gvar.var_97; // マップ上のX軸とY軸の配列 Gvar.var_82[X軸][Y軸]
            Gvar.var_83[Gvar.var_97].Var0 = 82; // Gvar.enemy_list = 82 なのでバーテンダー
            Gvar.var_83[Gvar.var_97].Var1 = 23; // マップ上のX軸
            Gvar.var_83[Gvar.var_97].Var2 = 30; // マップ上のY軸
            Gvar.var_83[Gvar.var_97].Var3 = 20;
            Gvar.var_83[Gvar.var_97].Var4 = 0;
            Gvar.var_83[Gvar.var_97].Var5 = 2;
            Gvar.var_83[Gvar.var_97].Var10 = 1;
            Gvar.var_83[Gvar.var_97].Var31 = 4;
            Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);

            // Ver0.1403より追加。D・ダービー。
            Gvar.var_97 = Gvar.var_97 + 1;
            Gvar.var_761 = Gvar.var_97;
            Gvar.var_82[18][34] = Gvar.var_97; // マップ上のX軸とY軸の配列 Gvar.var_82[X軸][Y軸]
            Gvar.var_83[Gvar.var_97].Var0 = 70; // Gvar.enemy_list = 70 なのでD・ダービー
            Gvar.var_83[Gvar.var_97].Var1 = 18; // マップ上のX軸
            Gvar.var_83[Gvar.var_97].Var2 = 34; // マップ上のY軸
            Gvar.var_83[Gvar.var_97].Var3 = 20;
            Gvar.var_83[Gvar.var_97].Var4 = 0;
            Gvar.var_83[Gvar.var_97].Var5 = 2;
            Gvar.var_83[Gvar.var_97].Var10 = 1;
            Gvar.var_83[Gvar.var_97].Var31 = 4;
            Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);
        }
        return;
}

export {func160b}
