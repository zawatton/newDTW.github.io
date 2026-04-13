import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func785
async function func785(this: any) {
        Adap.dbgprt(785);
        Gvar.var_199 = 2;
        await Func.AutoDraw(5);
        Adap.DSPLAY(117);
        Gvar.var_1264 = 1;
        await Func.AutoDraw(12);
        Gvar.var_1264 = 0;
        Gvar.var_1233 = 1;
        await Music.func123(); // 効果音

        Adap.DSPLAY(192);
        await Func.setMessage("「ボヘミアン・ラプソディ！」",
                               "", 7, false, false, false);
        Adap.gsel(19);
        Adap.color(255, 255, 255);
        Adap.boxf(0, 0, 680, 680);
        Adap.gsel(0);
        Gvar.var_311 = 255;
        Gvar.var_312 = 1;
        for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_311 = Gvar.var_311 - 5;
        }
        Adap.gsel(19);
        Adap.color(1, 1, 1);
        Adap.boxf(0, 0, 680, 680);
        Adap.gsel(0);
        Gvar.var_311 = 0;
        Gvar.var_312 = 1;
        for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_311 = Gvar.var_311 + 5;
        }
        await Func.AutoDraw(50);
        await Func.func336();
        await Func.setMessage("こうしてﾃﾞｨｱﾎﾞﾛは、露伴の描いた漫画を",
                               "ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨの能力で現実化させ", 7, true, false, false);

        await Func.setMessage("かつての絶頂の日々に",
                               "戻ることができたのです…", 7, true, true, false);

        await Func.setMessage("          【ディアボロの大冒険】",
                               "                      完", 7, false, true, false);
        for (let cnt1 = 0; true; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_198 = 1; // メッセージウィンドウ開く
            Gvar.var_300 = 0;
            await Func.func080(); // 各キー入力確認
        }
}

export {func785}
