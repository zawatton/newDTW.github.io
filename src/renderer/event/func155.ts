/**
 * func155 — func155 ディアボロの試練開放イベント(岸辺露伴がヤギを追いかけるイベント)
 *
 * (org原典: newDTW_events / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func155
async function func155(this: any) {
        Adap.dbgprt(155);
        Gvar.ivents_flag = 0; // イベントフラグ初期化
        Gvar.var_759 = 1;
        Gvar.var_760 = 4;
        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_761 = Gvar.var_97;
        Gvar.var_82[0][0] = Gvar.var_97;
        Gvar.var_83[Gvar.var_97].Var0 = 142;
        Gvar.var_83[Gvar.var_97].Var1 = 0;
        Gvar.var_83[Gvar.var_97].Var2 = 0;
        Gvar.var_83[Gvar.var_97].Var3 = 999;
        Gvar.var_83[Gvar.var_97].Var4 = 0;
        Gvar.var_83[Gvar.var_97].Var5 = 2;
        Gvar.var_83[Gvar.var_97].Var10 = 1;
        Gvar.var_83[Gvar.var_97].Var31 = 4;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);
        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_762 = Gvar.var_97;
        Gvar.var_82[0][1] = Gvar.var_97;
        Gvar.var_83[Gvar.var_97].Var0 = 166;
        Gvar.var_83[Gvar.var_97].Var1 = 0;
        Gvar.var_83[Gvar.var_97].Var2 = 1;
        Gvar.var_83[Gvar.var_97].Var3 = 999;
        Gvar.var_83[Gvar.var_97].Var4 = 0;
        Gvar.var_83[Gvar.var_97].Var5 = 2;
        Gvar.var_83[Gvar.var_97].Var10 = 1;
        Gvar.var_83[Gvar.var_97].Var31 = 4;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);
        await Func.AutoDraw(20);
        await Func.func335();
        await Func.AutoDraw(20);
        Gvar.var_217 = 1;
        Adap.DSPLAY(228);
        await Func.AutoDraw(5);
        Gvar.var_83[Gvar.var_762].Var6 = 1;
        Gvar.var_83[Gvar.var_762].Var1 = 10;
        Gvar.var_83[Gvar.var_762].Var2 = 8;
        Gvar.var_82[0][0] = 0;
        Gvar.var_82[10][8] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_762].Var1 = 11;
        Gvar.var_83[Gvar.var_762].Var2 = 8;
        Gvar.var_82[10][8] = 0;
        Gvar.var_82[11][8] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_762].Var1 = 12;
        Gvar.var_83[Gvar.var_762].Var2 = 8;
        Gvar.var_82[11][8] = 0;
        Gvar.var_82[12][8] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_762].Var1 = 13;
        Gvar.var_83[Gvar.var_762].Var2 = 8;
        Gvar.var_82[12][8] = 0;
        Gvar.var_82[13][8] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_762].Var1 = 14;
        Gvar.var_83[Gvar.var_762].Var2 = 8;
        Gvar.var_82[13][8] = 0;
        Gvar.var_82[14][8] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_762].Var1 = 14;
        Gvar.var_83[Gvar.var_762].Var2 = 9;
        Gvar.var_82[14][8] = 0;
        Gvar.var_82[14][9] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 2;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 1;
        Gvar.var_83[Gvar.var_762].Var1 = 15;
        Gvar.var_83[Gvar.var_762].Var2 = 9;
        Gvar.var_82[14][9] = 0;
        Gvar.var_82[15][9] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 2;
        Gvar.var_83[Gvar.var_762].Var1 = 16;
        Gvar.var_83[Gvar.var_762].Var2 = 9;
        Gvar.var_82[15][9] = 0;
        Gvar.var_82[16][9] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 3;
        Gvar.var_83[Gvar.var_762].Var1 = 16;
        Gvar.var_83[Gvar.var_762].Var2 = 8;
        Gvar.var_82[16][9] = 0;
        Gvar.var_82[16][8] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 8;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 6;
        Gvar.var_83[Gvar.var_762].Var1 = 16;
        Gvar.var_83[Gvar.var_762].Var2 = 7;
        Gvar.var_82[16][8] = 0;
        Gvar.var_82[16][7] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 8;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 9;
        Gvar.var_83[Gvar.var_762].Var1 = 15;
        Gvar.var_83[Gvar.var_762].Var2 = 7;
        Gvar.var_82[16][7] = 0;
        Gvar.var_82[15][7] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 4;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 8;
        Gvar.var_83[Gvar.var_762].Var1 = 15;
        Gvar.var_83[Gvar.var_762].Var2 = 6;
        Gvar.var_82[15][7] = 0;
        Gvar.var_82[15][6] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 8;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 8;
        await Func.AutoDraw(20);
        Gvar.var_83[Gvar.var_762].Var1 = 15;
        Gvar.var_83[Gvar.var_762].Var2 = 5;
        Gvar.var_82[15][6] = 0;
        Gvar.var_82[15][5] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 8;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_760 = 3;

        Adap.DSPLAY(103); // 殴った時の効果音
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_760 = 2;
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_760 = 1;
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_760 = 0;
        Gvar.var_83[Gvar.var_762].Var1 = 0;
        Gvar.var_83[Gvar.var_762].Var2 = 0;
        Gvar.var_82[15][5] = 0;
        Gvar.var_82[0][0] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 8;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_83[Gvar.var_762].Var6 = 0;

        await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「？」", "", 7, true, false, false);

        await Func.setMessage("露伴「まて――ッ！」", "", 7, false, false, true);

        Gvar.var_83[Gvar.var_761].Var6 = 1;
        Gvar.var_83[Gvar.var_761].Var1 = 10;
        Gvar.var_83[Gvar.var_761].Var2 = 8;
        Gvar.var_82[0][0] = 0;
        Gvar.var_82[10][8] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_761].Var1 = 11;
        Gvar.var_83[Gvar.var_761].Var2 = 8;
        Gvar.var_82[10][8] = 0;
        Gvar.var_82[11][8] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_761].Var1 = 12;
        Gvar.var_83[Gvar.var_761].Var2 = 8;
        Gvar.var_82[11][8] = 0;
        Gvar.var_82[12][8] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_761].Var1 = 13;
        Gvar.var_83[Gvar.var_761].Var2 = 8;
        Gvar.var_82[12][8] = 0;
        Gvar.var_82[13][8] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_761].Var1 = 14;
        Gvar.var_83[Gvar.var_761].Var2 = 8;
        Gvar.var_82[13][8] = 0;
        Gvar.var_82[14][8] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_761].Var1 = 14;
        Gvar.var_83[Gvar.var_761].Var2 = 9;
        Gvar.var_82[14][8] = 0;
        Gvar.var_82[14][9] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 2;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 1;
        Gvar.var_83[Gvar.var_761].Var1 = 15;
        Gvar.var_83[Gvar.var_761].Var2 = 9;
        Gvar.var_82[14][9] = 0;
        Gvar.var_82[15][9] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 2;
        Gvar.var_83[Gvar.var_761].Var1 = 16;
        Gvar.var_83[Gvar.var_761].Var2 = 9;
        Gvar.var_82[15][9] = 0;
        Gvar.var_82[16][9] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 3;
        Gvar.var_83[Gvar.var_761].Var1 = 16;
        Gvar.var_83[Gvar.var_761].Var2 = 8;
        Gvar.var_82[16][9] = 0;
        Gvar.var_82[16][8] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 8;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 6;
        Gvar.var_83[Gvar.var_761].Var1 = 16;
        Gvar.var_83[Gvar.var_761].Var2 = 7;
        Gvar.var_82[16][8] = 0;
        Gvar.var_82[16][7] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 8;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 9;
        Gvar.var_83[Gvar.var_761].Var1 = 15;
        Gvar.var_83[Gvar.var_761].Var2 = 7;
        Gvar.var_82[16][7] = 0;
        Gvar.var_82[15][7] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 4;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 8;
        Gvar.var_83[Gvar.var_761].Var1 = 15;
        Gvar.var_83[Gvar.var_761].Var2 = 6;
        Gvar.var_82[15][7] = 0;
        Gvar.var_82[15][6] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 8;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 8;

        await Func.setMessage("露伴「くそッ！あと一歩のところで…」", "", 7, true, false, true);

        await Func.AutoDraw(20);

        Gvar.var_83[Gvar.var_761].Var5 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_83[Gvar.var_761].Var1 = 15;
        Gvar.var_83[Gvar.var_761].Var2 = 7;
        Gvar.var_82[15][6] = 0;
        Gvar.var_82[15][7] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 2;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 8;
        Gvar.var_83[Gvar.var_761].Var1 = 16;
        Gvar.var_83[Gvar.var_761].Var2 = 7;
        Gvar.var_82[15][7] = 0;
        Gvar.var_82[16][7] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_199 = 9;
        Gvar.var_83[Gvar.var_761].Var5 = 2;
        await Func.AutoDraw(20);
        Gvar.var_83[Gvar.var_761].Var6 = 0;

        await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「？？？」", "", 7, false, false, false);

        await Func.AutoDraw(20);
        await Func.func336();
        Gvar.var_217 = 0;
        return;
}

export {func155}
