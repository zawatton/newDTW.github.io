import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 間田へ話しかけた時のメッセージ処理
// 旧 func793
async function func793(this: any) {
        Adap.dbgprt(793);
        Gvar.var_243 = 0;

        if (Gvar.var_1042 == 0) {
            await Func.setMessage("間田「ジョジョも面白いけどさ、",
                                   "なんと言っても一番なのは」", 7, true, false, true);

            await Func.setMessage("間田「岸辺露伴先生の",
                                   "【ピンクダークの少年】だね」", 7, true, true, true);
        }
        if (Gvar.var_1042 == 1) {
            await Func.setMessage("間田「遠距離ｽﾀﾝﾄﾞも、ｺﾐｯｸｽで",
                                   "強化できるって知ってたかい？」", 7, true, true, true);

            await Func.setMessage("間田「残り回数が増えるから、",
                                   "無くなる前に増やした方がいいよ」", 7, true, true, true);
        }
        if (Gvar.var_1042 == 2) {
            await Func.setMessage("間田「ｺﾐｯｸｽを読んで",
                                   "装備DISCを強化した時に、", 7, true, false, true);

            await Func.setMessage("間田「まれに、いつもの３倍",
                                   "強化されることがあるぞ」", 7, true, true, true);
        }
        if (Gvar.var_1042 == 3) {
            await Func.setMessage("間田「【ヤバイもの】も、",
                                    "ｺﾐｯｸｽで回数を増やせるぜ」", 7, true, false, true);
            await Func.setMessage("間田「当然、関連のある部の",
                                   "ｺﾐｯｸｽが必要だけどな」", 7, true, true, true);
        }
        if (Gvar.var_1042 == 4) {
            await Func.setMessage("間田「ﾊｰﾐｯﾄﾊﾟｰﾌﾟﾙは3部でも4部でも",
                                   "登場するｽﾀﾝﾄﾞだ」", 7, true, false, true);
            await Func.setMessage("間田「ｺﾐｯｸｽで強化するときも、",
                                   "両方の部が使えるぞ。」", 7, true, true, true);
        }
        if (Gvar.var_1042 == 5) {
            await Func.setMessage("間田「忘れがちなことだが、",
                                   "ｺﾐｯｸｽで呪いを解くことができる」", 7, true, false, true);
            await Func.setMessage("間田「もったいぶらずに",
                                   "さっさと使っておいた方が良いぜ」", 7, true, true, true);
        }
        if (Gvar.var_1042 == 6) {
            await Func.setMessage("間田「露伴先生のカバンの中には、",
                                   "漫画の資料が入っているらしい」", 7, true, false, true);
            await Func.setMessage("間田「自分の漫画の原稿も入ってたり",
                                   "するのかなぁ～」", 7, true, true, true);
        }
        await Func.func051(); // キー入力待ち処理
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func793}
