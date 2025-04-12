import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// タイトル画面表示
async function func141(this: any) {
        Adap.dbgprt(141);
        Adap.redraw(0);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Gvar.var_727 = 0;
        Gvar.var_728 = 350;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            Gvar.var_729 = 0;
            Gvar.var_730 = 720;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                Adap.pos(Gvar.var_729, Gvar.var_727);
                Adap.gcopy(17, Gvar.var_730, Gvar.var_728, 40, 40); // img3 タイトル画面背景(720, 350)
                Gvar.var_729 = Gvar.var_729 + 40;
                Gvar.var_730 = Gvar.var_730 + 40;
            }
            Gvar.var_727 = Gvar.var_727 + 40;
            Gvar.var_728 = Gvar.var_728 + 40;
        }
        Adap.pos(36, 110);
        Adap.gcopy(17, 1080, 360, 90, 83); // img3 キングクリムゾン顔(1080, 360)
        Adap.pos(100, 250);
        Adap.color(0, 0, 0);
        Gvar.var_733 = Gvar.var_732;
        if (Gvar.var_732 > 255) {
            Gvar.var_733 = 255 - (Gvar.var_732 - 255);
        }
        Adap.gmode(4, null, null, Gvar.var_733);
        Adap.gcopy(17, 0, 1090, 140, 25); // img3 "PUSH ANY KEY"
        Gvar.var_732 = Gvar.var_732 + 6;
        if (Gvar.var_732 > 500) {
            Gvar.var_732 = 0;
        }
        if (Gvar.var_635 >= 1 || Gvar.var_636 >= 1 || Gvar.var_633 >= 1 || Gvar.var_632 >= 1) {
            await Music.func102(); // 各ボリューム調整キーを押した時の表示
        }
        if (Gvar.var_10 >= 1) {
            await Func.func338();
        }
        Adap.redraw(1);
        return;
}

export {func141}
