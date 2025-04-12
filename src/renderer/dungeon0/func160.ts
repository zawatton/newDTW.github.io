import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func160(this: any) {
        Adap.dbgprt(160);
        Gvar.var_97 = 0;
        if (Gvar.var_404 >= 1) { // ホテルの外クリアフラグ
            Gvar.var_97 = Gvar.var_97 + 1;
            Gvar.var_771 = Gvar.var_97;
            Gvar.var_82[13][9] = Gvar.var_97;
            Gvar.var_83[Gvar.var_97].Var0 = 55; // Gvar.enemy_list = 55 なので亀
            Gvar.var_83[Gvar.var_97].Var1 = 13; // マップ上のX軸
            Gvar.var_83[Gvar.var_97].Var2 = 9; // マップ上のY軸
            Gvar.var_83[Gvar.var_97].Var3 = 20;
            Gvar.var_83[Gvar.var_97].Var4 = 1;
            Gvar.var_83[Gvar.var_97].Var5 = 3;
            Gvar.var_83[Gvar.var_97].Var10 = 1;
            Gvar.var_83[Gvar.var_97].Var14 = 1; // ランダム移動??
            Gvar.var_83[Gvar.var_97].Var31 = 4;
            Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);
        }
        if (Gvar.var_759 >= 1) { // 岸辺露伴とのイベントフラグがON
            Gvar.var_97 = Gvar.var_97 + 1;
            Gvar.var_761 = Gvar.var_97;
            Gvar.var_82[16][7] = Gvar.var_97;
            Gvar.var_83[Gvar.var_97].Var0 = 142; // Gvar.enemy_list = 142 なので岸辺露伴
            Gvar.var_83[Gvar.var_97].Var1 = 16; // マップ上のX軸
            Gvar.var_83[Gvar.var_97].Var2 = 7; // マップ上のY軸
            Gvar.var_83[Gvar.var_97].Var3 = 20;
            Gvar.var_83[Gvar.var_97].Var4 = 0;
            Gvar.var_83[Gvar.var_97].Var5 = 2;
            Gvar.var_83[Gvar.var_97].Var10 = 1;
            Gvar.var_83[Gvar.var_97].Var31 = 4;
            Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);
        }
        /* まだ調整中なのでコメントアウト
        if (Gvar.var_759 >= 1) { // 岸辺露伴とのイベントフラグがON
            Gvar.var_97 = Gvar.var_97 + 1;
            Gvar.var_761 = Gvar.var_97;
            Gvar.var_82[18][8] = Gvar.var_97;
            Gvar.var_83[Gvar.var_97].Var0 = 180; // Gvar.enemy_list = 180 NPC デッドマンズ吉良
            Gvar.var_83[Gvar.var_97].Var1 = 18; // マップ上のX軸
            Gvar.var_83[Gvar.var_97].Var2 = 8; // マップ上のY軸
            Gvar.var_83[Gvar.var_97].Var3 = 20;
            Gvar.var_83[Gvar.var_97].Var4 = 0;
            Gvar.var_83[Gvar.var_97].Var5 = 2;
            Gvar.var_83[Gvar.var_97].Var10 = 1;
            Gvar.var_83[Gvar.var_97].Var31 = 4;
            Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);
        }
        */
        return;
}

export {func160}
