import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 不明(タイトル画面処理？)
async function func140(this: any) {
        Adap.dbgprt(140);
        await  Adap.await_(25);
        await Func.func141(); // タイトル画面表示
        
        if (Gvar.var_12 == 1) { // 通信サーバーフラグ？？
            Gvar.conf_keyon = Adap.getkey(112); // キーF1入力確認(画面サイズ変更)
            if (Gvar.conf_keyon == 1) {
                await Func.func221();
                return;
            }
            Gvar.conf_keyon = Adap.getkey(113); // キーF2入力確認(BGM音量下げ)
            if (Gvar.conf_keyon == 1) {
                await Func.func224();
                return;
            }
        }
        Gvar.var_628 = 1;
        await Func.func080(); // 各キー入力確認
        // Ver0.1401にて「Gvar.key_F_on == 1」を追加
        if (Gvar.key_Z_on == 1 || Gvar.key_X_on == 1 || Gvar.key_A_on == 1 || Gvar.key_S_on == 1 || Gvar.key_Shift_on == 1 || Gvar.key_C_on == 1 || Gvar.key_F_on == 1) {

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func178(); // 処理確認タイマー(3m秒)
            Gvar.var_599 = 5;
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                Adap.redraw(0);
                Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
                Gvar.var_727 = 0;
                Gvar.var_728 = 350;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    Gvar.var_729 = 0;
                    Gvar.var_730 = 720;
                    for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                        Adap.pos(Gvar.var_729, Gvar.var_727);
                        Adap.gcopy(17, Gvar.var_730, Gvar.var_728, 40, 40); // img3 タイトル画面背景(720, 350)
                        Gvar.var_729 = Gvar.var_729 + 40;
                        Gvar.var_730 = Gvar.var_730 + 40;
                    }
                    Gvar.var_727 = Gvar.var_727 + 40;
                    Gvar.var_728 = Gvar.var_728 + 40;
                }
                Adap.pos(36, 110);
                Adap.gcopy(17, 1080, 360, 90, 83); // img3 キングクリムゾン顔(茶色)
                await Func.func180(); // ロード中の黒画面処理?
                if (Gvar.var_10 >= 1) {
                    await Func.func338();
                }
                await Adap.wait(2);
                Adap.redraw(1);
                Gvar.var_599 = Gvar.var_599 - 1;
            }
            Gvar.var_599 = 0;
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                Adap.redraw(0);
                await Func.func146(); // ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)
                await Func.func180(); // ロード中の黒画面処理?
                if (Gvar.var_10 >= 1) {
                    await Func.func338();
                }
                await Adap.wait(2);
                Adap.redraw(1);
                Gvar.var_599 = Gvar.var_599 + 1;
            }
            Gvar.var_732 = 0;
            await Func.func142(); // タイトル画面キー操作処理
            return;
        }
        await Func.func140(); // 不明(タイトル画面処理？)
        return;
}

export {func140}
