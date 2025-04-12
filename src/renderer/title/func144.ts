import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ログイン画面(タイトル画面/ログイン)動作処理 (ボス日記選択等のセーブデータロード処理)
async function func144(this: any) {
        Adap.dbgprt(144);
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            if (Gvar.var_734 == 0) {
                Gvar.var_628 = 0;
                Gvar.var_632 = 0;
                Gvar.var_633 = 0;
                Gvar.var_634 = 0;
                Gvar.var_635 = 0;
                Gvar.var_636 = 0;
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                if (Gvar.var_726 == 1) {
                    Gvar.var_735 = "01.dat";
                }
                if (Gvar.var_726 == 2) {
                    Gvar.var_735 = "02.dat";
                }
                if (Gvar.var_726 == 3) {
                    Gvar.var_735 = "03.dat";
                }
                await Adap.exist(Gvar.var_735); //おそらくセーブデータが無ければ
                if (Gvar.strsize == (-1)) {
                    await Func.func178(); // 処理確認タイマー(3m秒)
                    await Func.func150(); // オープニング (5部最終決戦 ジョルノ達との戦いの場面)
                    return;
                }
                await Func.func178(); // 処理確認タイマー(3m秒)
                await Func.func005(); // セーブデータを読み込む前のフラグ確認処理(ホテルのイベントフラグ、BGM再生曲、マップ背景画像)
                return;
            }
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            if (Gvar.var_734 == 1) {
    
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func178(); // 処理確認タイマー(3m秒)
                await Func.func145(); // ボス日記選択画面処理
                return;
            }
        }
        if (Gvar.key_X_on == 1) {

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func178(); // 処理確認タイマー(3m秒)
            Gvar.var_725 = 0;
            await Func.func142(); // タイトル画面キー操作処理
            return;
        }
        if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
            if (Gvar.var_726 == 1) {
                Gvar.var_726 = 1;
            }
            if (Gvar.var_726 == 2) {
                Gvar.var_726 = 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                await Adap.wait(8);
            }
            if (Gvar.var_726 == 3) {
                Gvar.var_726 = 2;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                await Adap.wait(8);
            }
        }
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
            if (Gvar.var_726 == 3) {
                Gvar.var_726 = 3;
            }
            if (Gvar.var_726 == 2) {
                Gvar.var_726 = 3;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                await Adap.wait(8);
            }
            if (Gvar.var_726 == 1) {
                Gvar.var_726 = 2;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                await Adap.wait(8);
            }
        }
        Adap.redraw(0);
        await Func.func146(); // ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)
        await Func.func148(); // ボス日記選択画面(タイトル画面/ログイン画面/ボス日記選択画面)の表示
        if (Gvar.var_10 >= 1) {
            await Func.func338();
        }
        Adap.redraw(1);
        await  Adap.await_(25);
        await Func.func144(); // ログイン画面(タイトル画面/ログイン)動作処理 (ボス日記選択等のセーブデータロード処理)
        return;
}

export {func144}
