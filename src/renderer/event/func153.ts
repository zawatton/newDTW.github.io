import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func153(this: any) {
    Adap.dbgprt(153);
    Gvar.ivents_flag = 0; // イベントフラグ初期化
    Gvar.var_374 = 1;
    Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
    Gvar.var_756 = 1;
    await Func.AutoDraw(20);
    await Func.func335();
    await Func.AutoDraw(20);
    Gvar.var_757 = 1;
    for (let cnt1 = 0; cnt1 < 37; ++cnt1) {
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_756++;
        Gvar.var_757++;
        if (Gvar.var_757 == 10) {
            Adap.DSPLAY(104);
        }
    }
    Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
    Gvar.var_757 = 0;
    Gvar.var_756 = 0;
    Gvar.var_374 = 0;

    await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛ「いたたた…」", "", 7, false, false, true);

    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        Gvar.var_758 = 1;
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_758 = 2;
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_198 = 1; // メッセージウィンドウ開く
        Gvar.var_300 = 0;
    }
    Gvar.var_758 = 0;

    await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛ「ここはいつもの…」", "", 7, true, false, true);

    Gvar.var_199 = 1;
    await Func.AutoDraw(2);
    Gvar.var_199 = 4;
    await Func.AutoDraw(5);
    Gvar.var_199 = 1;
    await Func.AutoDraw(2);
    Gvar.var_199 = 2;
    await Func.AutoDraw(5);
    Gvar.var_199 = 3;
    await Func.AutoDraw(2);
    Gvar.var_199 = 6;
    await Func.AutoDraw(5);
    Gvar.var_199 = 3;
    await Func.AutoDraw(2);
    Gvar.var_199 = 2;
    await Func.AutoDraw(5);

    await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛ「さっきのホテル、いや墓場にも", "  手がかりになるものはなかった」", 7, true, false, true);
    await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛ「そして、結局はこの場所へ", "  戻ってきてしまう…」", 7, true, false, true);
    await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛ「あの老婆は別の場所を探せと", "  言っていたが、他に行ける場所は…」", 7, true, false, true);
    await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛ「ハッ？！", "", 7, true, false, true);
    await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛ「そこの階段は…", "  いつからそこにあった？？」", 7, true, false, true);
    await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛ「怪しいのは その中か？」", "", 7, false, false, true);

    await Func.AutoDraw(20);
    await Func.func336();
    return;
}

export { func153 }
