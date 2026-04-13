import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func150
async function func150(this: any) {
    Adap.dbgprt(150);
    await Func.func233(); // ダンジョンへ入った際の全ステータス初期化処理
    await Func.func158(); // オープニング戦マップ配置処理
    await Music.func108(); // BGM用mp3ファイル再生停止
    Gvar.var_595 = 3; // Gvar.dungeon_number = 0 での場所確認。3 = ローマ・ティベレ河
    await Func.func076(); // 各ダンジョンの絵文字読込処理
    for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
        await Func.func339();
    }
    Gvar.var_350 = 100;
    Gvar.var_567 = 100;
    Gvar.var_68 = 1;
    Gvar.var_217 = 1;
    Adap.DSPLAY(178);
    Gvar.var_271 = 1;
    Gvar.var_594 = 1;
    for (let cnt1 = 0; cnt1 < 40; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_594 = Gvar.var_594 + 1;
    }
    Gvar.var_271 = 0;
    Gvar.var_594 = 0;
    await Func.func335();
    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「おまえには 死んだことを", 
                            "      後悔する時間をも…", 7, true, false, true);

    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「与えんッ！！」", "", 7, false, false, true);

    await Func.AutoDraw(3);
    // 以下、画面移動・マップ配置処理
    Gvar.var_83[1].Var6 = 1;
    Gvar.var_83[1].Var1 = 29;
    Gvar.var_83[1].Var2 = 10;
    Gvar.var_82[28][10] = 0;
    Gvar.var_82[29][10] = 1;
    Gvar.var_83[1].Var5 = 6;
    Gvar.var_409 = 3;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 2;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 1;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 0;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_83[1].Var1 = 30;
    Gvar.var_83[1].Var2 = 10;
    Gvar.var_82[29][10] = 0;
    Gvar.var_82[30][10] = 1;
    Gvar.var_83[1].Var5 = 6;
    Gvar.var_409 = 3;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 2;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 1;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 0;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_83[1].Var1 = 31;
    Gvar.var_83[1].Var2 = 10;
    Gvar.var_82[30][10] = 0;
    Gvar.var_82[31][10] = 1;
    Gvar.var_83[1].Var5 = 6;
    Gvar.var_409 = 3;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 2;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 1;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 0;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_83[1].Var6 = 0;
    Gvar.var_742 = 1;
    Gvar.var_83[1].Var7 = 1;
    Gvar.var_743 = 1; //スタンド像付与フラグON
    await Func.AutoDraw(3);
    Gvar.time_paused_count = 1;
    Gvar.var_152 = 2;

    Adap.DSPLAY(185);
    Gvar.var_271 = 1;
    Gvar.var_531 = 1;
    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_531++;
        Gvar.var_742 = 3;
    }
    Gvar.var_271 = 0;
    Gvar.var_531 = 0;
    Gvar.var_742 = 0;
    Gvar.var_83[1].Var7 = 0;
    Gvar.var_743 = 0; //スタンド像付与フラグOFF
    Gvar.var_83[1].Var5 = 4;
    Gvar.var_83[5].Var0 = 49;
    Gvar.var_83[5].Var1 = 30;
    Gvar.var_83[5].Var2 = 10;
    Gvar.var_82[30][10] = 5;
    Gvar.var_83[5].Var5 = 6;
    Gvar.var_271 = 1;
    Gvar.var_744 = 1;
    Gvar.var_745 = 5 * 40 + 20;
    Gvar.var_746 = 3 * 40 - 10;
    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「えっ」", "", 7, false, false, false);
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        Gvar.var_744++;
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_83[5].Var5 = 4;
    Gvar.var_83[6].Var0 = 49;
    Gvar.var_83[6].Var1 = 29;
    Gvar.var_83[6].Var2 = 10;
    Gvar.var_82[29][10] = 6;
    Gvar.var_83[6].Var5 = 6;
    Gvar.var_744 = 1;
    Gvar.var_745 = 4 * 40 + 20;
    Gvar.var_746 = 3 * 40 - 10;
    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「えっ」", "", 7, false, false, false);
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        Gvar.var_744++;
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_83[6].Var5 = 4;
    Gvar.var_83[7].Var0 = 49;
    Gvar.var_83[7].Var1 = 28;
    Gvar.var_83[7].Var2 = 10;
    Gvar.var_82[28][10] = 7;
    Gvar.var_83[7].Var5 = 6;
    Gvar.var_744 = 1;
    Gvar.var_745 = 3 * 40 + 20;
    Gvar.var_746 = 3 * 40 - 10;
    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「えっ」", "", 7, false, false, false);
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        Gvar.var_744++;
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_271 = 0;
    Gvar.var_744 = 0;
    Gvar.time_paused_count = 0;
    Gvar.var_152 = 0;
    Gvar.var_83[5].Var0 = 0;
    Gvar.var_83[5].Var1 = 0;
    Gvar.var_83[5].Var2 = 0;
    Gvar.var_82[28][10] = 0;
    Gvar.var_83[6].Var0 = 0;
    Gvar.var_83[6].Var1 = 0;
    Gvar.var_83[6].Var2 = 0;
    Gvar.var_82[29][10] = 0;
    Gvar.var_83[7].Var0 = 0;
    Gvar.var_83[7].Var1 = 0;
    Gvar.var_83[7].Var2 = 0;
    Gvar.var_82[30][10] = 0;
    Gvar.var_82[31][10] = 0;
    Gvar.var_83[1].Var1 = 28;
    Gvar.var_83[1].Var2 = 10;
    Gvar.var_82[28][10] = 1;
    Gvar.var_83[1].Var5 = 6;

    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「オッ…オレはッ！", 
                            "初めから何も動いていないッ！！」", 7, true, false, true);
    
    Gvar.var_83[2].Var6 = 1;
    Gvar.var_83[2].Var1 = 31;
    Gvar.var_83[2].Var2 = 10;
    Gvar.var_82[32][10] = 0;
    Gvar.var_82[31][10] = 2;
    Gvar.var_83[2].Var5 = 4;
    Gvar.var_409 = 3;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 2;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 1;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 0;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_83[2].Var1 = 30;
    Gvar.var_83[2].Var2 = 10;
    Gvar.var_82[31][10] = 0;
    Gvar.var_82[30][10] = 2;
    Gvar.var_83[2].Var5 = 4;
    Gvar.var_409 = 3;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 2;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 1;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 0;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_83[2].Var1 = 29;
    Gvar.var_83[2].Var2 = 10;
    Gvar.var_82[30][10] = 0;
    Gvar.var_82[29][10] = 2;
    Gvar.var_83[2].Var5 = 4;
    Gvar.var_409 = 3;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 2;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 1;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 0;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_83[2].Var6 = 0;

    await Func.setMessage("ｼﾞｮﾙﾉ「無駄アァァァァ！！」", "", 7, false, false, false);

    Gvar.var_742 = 1;
    Gvar.var_83[2].Var7 = 1;
    Gvar.var_743 = 1; //スタンド像付与フラグON
    await Func.AutoDraw(3);
    Gvar.var_747 = 1;
    Gvar.var_748 = 3;
    Gvar.var_749 = 4;

    Adap.DSPLAY(115);
    Gvar.var_750 = 1;
    Gvar.var_209 = 20;
    Gvar.var_211 = 0;
    await Func.func337(); // メッセージ関係呼び出し
    await Func.AutoDraw(3);
    Gvar.var_742 = 0;
    Gvar.var_83[2].Var7 = 0;
    Gvar.var_743 = 0; //スタンド像付与フラグOFF
    Gvar.var_83[1].Var6 = 1;
    Gvar.var_83[1].Var1 = 27;
    Gvar.var_83[1].Var2 = 10;
    Gvar.var_82[28][10] = 0;
    Gvar.var_82[27][10] = 1;
    Gvar.var_83[1].Var5 = 4;
    Gvar.var_409 = 2;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 0;
    Gvar.var_83[1].Var5 = 6;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_83[1].Var1 = 26;
    Gvar.var_83[1].Var2 = 10;
    Gvar.var_82[27][10] = 0;
    Gvar.var_82[26][10] = 1;
    Gvar.var_83[1].Var5 = 4;
    Gvar.var_409 = 2;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 0;
    Gvar.var_83[1].Var5 = 6;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_83[1].Var1 = 25;
    Gvar.var_83[1].Var2 = 10;
    Gvar.var_82[26][10] = 0;
    Gvar.var_82[25][10] = 1;
    Gvar.var_83[1].Var5 = 4;
    Gvar.var_409 = 2;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 0;
    Gvar.var_83[1].Var5 = 6;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_83[1].Var1 = 26;
    Gvar.var_83[1].Var2 = 11;
    Gvar.var_82[25][10] = 0;
    Gvar.var_82[26][11] = 1;
    Gvar.var_83[1].Var5 = 3;
    Gvar.var_409 = 2;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 0;
    Gvar.var_83[1].Var5 = 7;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_83[1].Var0 = 0;
    Gvar.var_83[1].Var1 = 0;
    Gvar.var_83[1].Var2 = 0;
    Gvar.var_82[25][10] = 0;
    Gvar.var_83[1].Var6 = 0;
    Adap.DSPLAY(186);
    Gvar.var_747 = 0;
    Gvar.var_750 = 0;
    Gvar.var_209 = 0;
    Gvar.var_271 = 1;
    Gvar.var_751 = 1;
    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_751++;
    }
    Gvar.var_271 = 0;
    Gvar.var_751 = 0;
    Gvar.var_83[3].Var6 = 1;
    Gvar.var_83[3].Var1 = 29;
    Gvar.var_83[3].Var2 = 7;
    Gvar.var_82[30][7] = 0;
    Gvar.var_82[29][7] = 3;
    Gvar.var_83[3].Var5 = 4;
    Gvar.var_409 = 3;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 2;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 1;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 0;
    await Func.func337(); // メッセージ関係呼び出し
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_83[3].Var1 = 28;
    Gvar.var_83[3].Var2 = 8;
    Gvar.var_82[29][7] = 0;
    Gvar.var_82[28][8] = 3;
    Gvar.var_83[3].Var5 = 1;
    Gvar.var_409 = 3;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 2;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 1;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 0;
    await Func.func337(); // メッセージ関係呼び出し
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_83[3].Var1 = 27;
    Gvar.var_83[3].Var2 = 9;
    Gvar.var_82[28][8] = 0;
    Gvar.var_82[27][9] = 3;
    Gvar.var_83[3].Var5 = 1;
    Gvar.var_409 = 3;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 2;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 1;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 0;
    await Func.func337(); // メッセージ関係呼び出し
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_83[3].Var6 = 0;

    await Func.setMessage("ﾐｽﾀ「や…  やったぞッ  ついにッ！」",
                            "      ついにッ！  倒したぞ！」", 7, false, false, true);

    await Func.AutoDraw(20);
    Gvar.var_83[2].Var0 = 131;
    Gvar.var_83[4].Var6 = 1;
    Gvar.var_83[4].Var1 = 30;
    Gvar.var_83[4].Var2 = 9;
    Gvar.var_82[31][8] = 0;
    Gvar.var_82[30][9] = 4;
    Gvar.var_83[4].Var5 = 1;
    Gvar.var_409 = 3;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 2;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 1;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 0;
    await Func.func337(); // メッセージ関係呼び出し
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_83[4].Var1 = 29;
    Gvar.var_83[4].Var2 = 9;
    Gvar.var_82[30][9] = 0;
    Gvar.var_82[29][9] = 4;
    Gvar.var_83[4].Var5 = 4;
    Gvar.var_409 = 3;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 2;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 1;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 0;
    await Func.func337(); // メッセージ関係呼び出し
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_83[4].Var1 = 28;
    Gvar.var_83[4].Var2 = 10;
    Gvar.var_82[29][9] = 0;
    Gvar.var_82[28][10] = 4;
    Gvar.var_83[4].Var5 = 1;
    Gvar.var_409 = 3;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 2;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 1;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 0;
    await Func.func337(); // メッセージ関係呼び出し
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_83[4].Var1 = 27;
    Gvar.var_83[4].Var2 = 10;
    Gvar.var_82[28][10] = 0;
    Gvar.var_82[27][10] = 4;
    Gvar.var_83[4].Var5 = 4;
    Gvar.var_409 = 3;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 2;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 1;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 0;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_83[4].Var6 = 0;

    await Func.setMessage("ﾄﾘｯｼｭ「でも…  ちょっと待って",
                            "        どこかに浮かんできてる！？」", 7, true, false, true);

    await Func.setMessage("ﾄﾘｯｼｭ「どこよッ！",
                            "        探してジョルノッ！」", 7, false, false, true);

    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        Gvar.var_83[4].Var5 = 7;
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[4].Var5 = 4;

        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[4].Var5 = 1;
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[4].Var5 = 4;

        await Func.func337(); // メッセージ関係呼び出し
    }
    await Func.AutoDraw(8);
    Gvar.var_83[2].Var6 = 1;
    Gvar.var_83[2].Var1 = 28;
    Gvar.var_83[2].Var2 = 11;
    Gvar.var_82[29][10] = 0;
    Gvar.var_82[28][11] = 2;
    Gvar.var_83[2].Var5 = 1;
    Gvar.var_409 = 3;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 2;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 1;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 0;
    await Func.func337(); // メッセージ関係呼び出し
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_83[2].Var1 = 27;
    Gvar.var_83[2].Var2 = 11;
    Gvar.var_82[28][11] = 0;
    Gvar.var_82[27][11] = 2;
    Gvar.var_83[2].Var5 = 4;
    Gvar.var_409 = 3;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 2;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 1;
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_409 = 0;
    await Func.func337(); // メッセージ関係呼び出し
    await Func.func337(); // メッセージ関係呼び出し
    Gvar.var_83[2].Var6 = 0;

    await Func.setMessage("ｼﾞｮﾙﾉ「いや…  探す必要はない",
                            "        全てはもう終わっている…」", 7, true, false, true);

    await Func.setMessage("ｼﾞｮﾙﾉ「ヤツはもう",
                            "        どこへも向かうことはない」", 7, true, false, true);

    await Func.setMessage("ｼﾞｮﾙﾉ「終わりが無いのが【終わり】」",
                            "        ", 7, true, false, true);

    await Func.setMessage("ｼﾞｮﾙﾉ「それが",
                            "      【ｺﾞｰﾙﾄﾞ･ｴｸｽﾍﾟﾘｴﾝｽ･ﾚｸｲｴﾑ】」  ", 7, false, false, true);

    await Func.AutoDraw(30);

    Adap.gsel(19);
    Adap.color(1, 1, 1);

    Adap.boxf(0, 0, 340, 340);
    Adap.gsel(0);
    Gvar.var_311 = 0;
    Gvar.var_312 = 1;
    for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_311 = Gvar.var_311 + 5;
    }
    await Func.AutoDraw(20);

    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛはＧ･Ｅ･レクイエムの能力により", 
                            "永遠に死に続けることとなった。", 7, true, false, false);

    await Func.setMessage("何百回……いや何千回死んだだろうか？", "", 7, true, false, false);

    await Func.setMessage("しかしある時、転機が訪れた…", "", 7, false, false, false);

    if (Gvar.var_726 == 1) {
        Gvar.var_735 = "01.dat";
    }
    if (Gvar.var_726 == 2) {
        Gvar.var_735 = "02.dat";
    }
    if (Gvar.var_726 == 3) {
        Gvar.var_735 = "03.dat";
    }
    await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_447, null, null);

    await Func.func504();
    if (Gvar.var_726 == 1) {
        Gvar.var_752 = "01e.dat";
    }
    if (Gvar.var_726 == 2) {
        Gvar.var_752 = "02e.dat";
    }
    if (Gvar.var_726 == 3) {
        Gvar.var_752 = "03e.dat";
    }
    await Func.func230();
    await Adap.bsave(Gvar.var_752, Gvar.data = Gvar.var_753, null, null);
    Adap.notesel(Gvar.var_754);
    await Adap.noteload(Gvar.var_752);
    await Func.AutoDraw(50);

    Gvar.var_65 = Adap.dim(70, 70, Gvar.length3 = null, null);
    Gvar.var_66 = 15;
    Gvar.var_67 = 8;
    Gvar.var_65[Gvar.var_66][Gvar.var_67] = 1;
    Gvar.var_199 = 2;
    Gvar.var_374 = 0;
    Gvar.var_211 = 15;
    Gvar.var_595 = 0; // Gvar.dungeon_number = 0 での場所確認。0 = ヴェネチアホテル
    Gvar.var_312 = 0;
    Gvar.ivents_flag = 1; // 初めてヴェネチアホテルへ訪れた際のディアボロの呟きフラグ
    Gvar.var_755 = 0;
    await Func.func159(); // ヴェネチアホテルでのイベントフラグ管理処理
    return;
}

export {func150}
