import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ボス日記選択画面処理
async function func145(this: any) {
        Adap.dbgprt(145);
        Gvar.conf_keyon = Adap.getkey(89); // キーY入力確認
        if (Gvar.conf_keyon == 1) {
            Gvar.conf_keyon = 0;
            Gvar.var_736 = 0;

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func240();
            Gvar.var_737 = 0;
            Gvar.var_725 = 0;
            await Func.func142(); // タイトル画面キー操作処理
            return;
        }
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_X_on == 1) {
            await Func.func178(); // 処理確認タイマー(3m秒)
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            Gvar.var_737 = 0;
            await Func.func144(); // ログイン画面(タイトル画面/ログイン)動作処理 (ボス日記選択等のセーブデータロード処理)
            return;
        }
        Adap.redraw(0);
        await Func.func146(); // ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)
        await Func.func148(); // ボス日記選択画面(タイトル画面/ログイン画面/ボス日記選択画面)の表示
        await Func.func149(); // ボス日記消去選択時の表示
        if (Gvar.var_10 >= 1) {
            await Func.func338();
        }
        Adap.redraw(1);
        await  Adap.await_(25);
        await Func.func145(); // ボス日記選択画面処理
        return;
}

export {func145}
