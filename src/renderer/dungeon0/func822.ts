import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func822(this: any) {
        Adap.dbgprt(822);
        Adap.gsel(19);
        Adap.color(1, 1, 1);
        Adap.boxf(0, 0, 680, 680);
        Adap.gsel(0);
        Gvar.var_311 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Adap.redraw(0);
            await Func.func168(); // ダンジョンクリア時のスコア判定
            Adap.color(0, 0, 0);
            Adap.gmode(4, null, null, Gvar.var_311);
            Adap.pos(0, 0);
            Adap.gcopy(19, 0, 0, 340, 340);
            if (Gvar.var_10 >= 1) {
                await Func.func338();
            }
            Adap.redraw(1);
            await  Adap.await_(Gvar.animationDelay);
            Gvar.var_311 = Gvar.var_311 + 25;
            if (Gvar.var_311 >= 255) {
                Gvar.var_311 = 255;
            }
        }
        Gvar.var_311 = 255;
        Gvar.var_312 = 1;
        await Func.AutoDraw(4);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_311 = Gvar.var_311 - 25;
            if (Gvar.var_311 <= 0) {
                Gvar.var_311 = 0;
            }
        }
        Gvar.var_311 = 0;
        Gvar.var_312 = 0;
        Gvar.var_508 = 1; // Mフラグ:資料(設定画面) Func.func058
        Gvar.var_499 = 1; // Mフラグ:設定画面 Func.func056
        Gvar.var_980 = 0;
        return;
}

export {func822}
