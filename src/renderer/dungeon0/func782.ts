/**
 * func782 — func782 岸辺露伴に話しかけた時のメッセージ処理
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func782
async function func782(this: any) {
        Adap.dbgprt(782);
        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_762 = Gvar.var_97;
        Gvar.var_82[0][0] = Gvar.var_97;
        Gvar.var_83[Gvar.var_97].Var0 = 56;
        Gvar.var_83[Gvar.var_97].Var1 = 0;
        Gvar.var_83[Gvar.var_97].Var2 = 0;
        Gvar.var_83[Gvar.var_97].Var3 = 999;
        Gvar.var_83[Gvar.var_97].Var4 = 0;
        Gvar.var_83[Gvar.var_97].Var5 = 2;
        Gvar.var_83[Gvar.var_97].Var10 = 1;
        Gvar.var_83[Gvar.var_97].Var31 = 4;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);
        await Func.AutoDraw(20);
        await Func.func335();
        await Func.AutoDraw(20);
        await Func.setMessage("おおっ！君が持っているのは",
                               "「ﾎﾞﾍﾐｱﾝ･ﾗﾌﾟｿﾃﾞｨのDISC」！！", 7, true, false, true);

        await Func.setMessage("よし、お礼に…",
                                "君が主役のマンガを描いてやろう", 7, true, true, true);


        await Func.setMessage("なになに、組織のボスだった頃の",
                               "絶頂だった自分を描いて欲しい？", 7, true, true, true);

        await Func.setMessage("ちょっと待っててくれよ。",
                               "", 7, true, true, true);

        Gvar.var_83[Gvar.var_761].Var21 = 1;
        Gvar.var_411 = 1;
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_411 = 2;
        // await Func.func337(); // メッセージ表示処理(自動)
        // await Func.func337(); // メッセージ表示処理(自動)
        // await Func.func337(); // メッセージ表示処理(自動)
        // await Func.func337(); // メッセージ表示処理(自動)
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)

        await Func.setMessage("ズババッ！",
                               "ジャキィン！  シュバッ！", 7, false, true, false);

        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            Adap.DSPLAY(127);
            Gvar.var_411 = 3;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 4;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 5;
            await Func.func337(); // メッセージ表示処理(自動)
            Adap.DSPLAY(0);
            Gvar.var_411 = 3;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 4;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 5;
            await Func.func337(); // メッセージ表示処理(自動)
        }
        Gvar.var_411 = 2;
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_411 = 1;
        // await Func.func337(); // メッセージ表示処理(自動)
        // await Func.func337(); // メッセージ表示処理(自動)
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_83[Gvar.var_761].Var21 = 0;
        Gvar.var_411 = 0;

        await Func.setMessage("できたぜ。",
                               "", 7, true, true, true);

        await Func.setMessage("タイトル？タイトルは",
                               "別に決めてないな…", 7, true, true, true);
        
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        
        Gvar.var_217 = 1;
        Adap.DSPLAY(228);
        await Func.AutoDraw(5);
        Gvar.var_3158 = 10;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            if (Gvar.var_82[Gvar.var_3158][8] != 0) {
                Gvar.var_3159 = Gvar.var_82[Gvar.var_3158][8];
                Gvar.var_83[Gvar.var_3159].Var6 = 1;
                Gvar.var_83[Gvar.var_3159].Var1 = Gvar.var_3158;
                Gvar.var_83[Gvar.var_3159].Var2 = 9;
                Gvar.var_82[Gvar.var_3158][8] = 0;
                Gvar.var_82[Gvar.var_3158][9] = Gvar.var_3159;
                Gvar.var_83[Gvar.var_3159].Var5 = 2;
                Gvar.var_409 = 3;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_409 = 2;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_409 = 1;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_409 = 0;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_83[Gvar.var_3159].Var6 = 0;
            }
            Gvar.var_3158++;
        }
        Gvar.var_83[Gvar.var_771].Var6 = 0;
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
        if (Gvar.var_65[15][8] == 0) {
            Gvar.var_83[Gvar.var_762].Var1 = 15;
            Gvar.var_83[Gvar.var_762].Var2 = 8;
            Gvar.var_82[14][8] = 0;
            Gvar.var_82[15][8] = Gvar.var_762;
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
        }
        Gvar.var_83[Gvar.var_762].Var6 = 0;

        await Func.setMessage("このシュトロハイムが",
                               "名づけ親(ｺﾞｯﾄﾞﾌｧｰｻﾞｰ)になってやるッ！", 7, true, false, true);

        await Func.setMessage("そうだな…不思議のダンジョンに",
                               "挑戦するディアボロ！という意味の", 7, true, true, true);

        await Func.setMessage("ディアボロの大冒険！というのは",
                               "どうかな！？", 7, true, true, true);

        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func785();
        return;
}

export {func782}
