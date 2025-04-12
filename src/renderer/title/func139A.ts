import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// タイトル画面生成処理
async function func139A(this: any) {
    Adap.dbgprt(139);
    Adap.onexit(0);

    // ここからタイトル画面生成処理
    Adap.color(0, 0, 0);
    Adap.boxf(0, 0, 340, 340);
    await Adap.wait(1);
    Gvar.var_18 = 0;
    for (let cnt1 = 0; cnt1 < 25; ++cnt1) {
        Adap.redraw(0);
        Adap.color(0, 0, 0);
        Adap.boxf(0, 0, 340, 340);
        Adap.gmode(4, null, null, Gvar.var_18);
        Adap.pos(0, 0);
        Gvar.var_727 = 0;
        Gvar.var_728 = 350;
        for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
            Gvar.var_729 = 0;
            Gvar.var_730 = 720;
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                Adap.pos(Gvar.var_729, Gvar.var_727);
                Adap.gcopy(17, Gvar.var_730, Gvar.var_728, 40, 40);
                Gvar.var_729 = Gvar.var_729 + 40;
                Gvar.var_730 = Gvar.var_730 + 40;
            }
            Gvar.var_727 = Gvar.var_727 + 40;
            Gvar.var_728 = Gvar.var_728 + 40;
        }
        if (Gvar.var_10 >= 1) {
            await Func.func338();
        }
        Adap.redraw(1);
        await Adap.wait(1);
        Gvar.var_18 = Gvar.var_18 + 10;
    }
    Adap.redraw(0);
    Adap.color(0, 0, 0);
    Adap.boxf(0, 0, 340, 340);
    Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
    Gvar.var_727 = 0;
    Gvar.var_728 = 350;
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        Gvar.var_729 = 0;
        Gvar.var_730 = 720;
        for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
            Adap.pos(Gvar.var_729, Gvar.var_727);
            Adap.gcopy(17, Gvar.var_730, Gvar.var_728, 40, 40);
            Gvar.var_729 = Gvar.var_729 + 40;
            Gvar.var_730 = Gvar.var_730 + 40;
        }
        Gvar.var_727 = Gvar.var_727 + 40;
        Gvar.var_728 = Gvar.var_728 + 40;
    }
    if (Gvar.var_10 >= 1) {
        await Func.func338();
    }
    Adap.redraw(1);
    // await Adap.wait(50); // ver0.1405 にてコメントアウト
    Gvar.var_631 = 1000;
    await Music.func109(); // タイトル画面でのオープニング曲再生
    Gvar.var_731 = 1;

    Adap.DSPLAY(175); // タイトル画面にてキングクリムゾンの顔が出た際の "ドジュー" 音
    await Adap.wait(200); // ver0.1405 にて追加
    for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
        await Adap.wait(3);
        Adap.redraw(0);
        Adap.color(0, 0, 0);
        Adap.boxf(0, 0, 340, 340);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Gvar.var_727 = 0;
        Gvar.var_728 = 350;
        for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
            Gvar.var_729 = 0;
            Gvar.var_730 = 720;
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                Adap.pos(Gvar.var_729, Gvar.var_727);
                Adap.gcopy(17, Gvar.var_730, Gvar.var_728, 40, 40);
                Gvar.var_729 = Gvar.var_729 + 40;
                Gvar.var_730 = Gvar.var_730 + 40;
            }
            Gvar.var_727 = Gvar.var_727 + 40;
            Gvar.var_728 = Gvar.var_728 + 40;
        }
        Adap.pos(36, 110);
        if (Gvar.var_731 >= 1 && Gvar.var_731 <= 3) {
            Adap.gcopy(17, 1080, 600, 90, 83); // img3 キングクリムゾン顔(真紅)
        }
        if (Gvar.var_731 >= 4 && Gvar.var_731 <= 6) {
            Adap.gcopy(17, 1080, 480, 90, 83); // img3 キングクリムゾン顔(赤色)
        }
        if (Gvar.var_731 >= 7) {
            Adap.gcopy(17, 1080, 360, 90, 83); // img3 キングクリムゾン顔(茶色)
        }
        for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 150);
            if (cnt2 == 0) {
                Adap.pos(45, 50);
            }
            if (cnt2 == 1) {
                Adap.pos(100, 60);
            }
            if (cnt2 == 2) {
                Adap.pos(35, 90);
            }
            if (cnt2 == 3) {
                Adap.pos(80, 100);
            }
            if (Gvar.var_731 == 1 || Gvar.var_731 == 2) {
                Adap.gcopy(17, 800, 760, 40, 80); // img3 キングクリムゾン顔出現時のケムリ1
            }
            if (Gvar.var_731 == 3 || Gvar.var_731 == 4) {
                Adap.gcopy(17, 840, 760, 40, 80); // img3 キングクリムゾン顔出現時のケムリ2
            }
            if (Gvar.var_731 == 5 || Gvar.var_731 == 6) {
                Adap.gcopy(17, 880, 760, 40, 80); // img3 キングクリムゾン顔出現時のケムリ3
            }
            if (Gvar.var_731 == 7 || Gvar.var_731 == 8) {
                Adap.gcopy(17, 920, 760, 40, 80); // img3 キングクリムゾン顔出現時のケムリ4
            }
            if (Gvar.var_731 == 9 || Gvar.var_731 == 10) {
                Adap.gcopy(17, 960, 760, 40, 80); // img3 キングクリムゾン顔出現時のケムリ5
            }
            if (Gvar.var_731 == 11 || Gvar.var_731 == 12) {
                Adap.gcopy(17, 1000, 760, 40, 80); // img3 キングクリムゾン顔出現時のケムリ6
            }
            if (Gvar.var_731 == 13 || Gvar.var_731 == 14) {
                Adap.gcopy(17, 1040, 760, 40, 80); // img3 キングクリムゾン顔出現時のケムリ7
            }
            if (Gvar.var_731 == 15 || Gvar.var_731 == 16) {
                Adap.gcopy(17, 1080, 760, 40, 80); // img3 キングクリムゾン顔出現時のケムリ8
            }
            if (Gvar.var_731 == 17 || Gvar.var_731 == 18) {
                Adap.gcopy(17, 1120, 760, 40, 80); // img3 キングクリムゾン顔出現時のケムリ9
            }
            if (Gvar.var_731 == 19 || Gvar.var_731 == 20) {
                Adap.gcopy(17, 1160, 760, 40, 80); // img3 キングクリムゾン顔出現時のケムリ10
            }
        }
        if (Gvar.var_10 >= 1) {
            await Func.func338();
        }
        Adap.redraw(1);
        Gvar.var_731++;
    }
    await Adap.wait(1);
    Gvar.var_731 = 0;
    Gvar.var_732 = 0;
    await Func.func140(); // 不明(タイトル画面処理？)

}

export {func139A}