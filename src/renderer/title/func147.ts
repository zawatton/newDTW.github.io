/**
 * func147 — func147 不明
 *
 * (org原典: newDTW_login / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func147(this: any) {
        Adap.dbgprt(147);
        Gvar.var_599 = 0;
        if (Gvar.var_64 == 0) {
            await Func.func178(); // 処理確認タイマー(3m秒)
            Gvar.var_726 = 1;
            Gvar.var_725 = 1;
            await Func.func144(); // ログイン画面(タイトル画面/ログイン)動作処理 (ボス日記選択等のセーブデータロード処理)
            return;
        }
        if (Gvar.var_64 == 1) {
            await Func.func178(); // 処理確認タイマー(3m秒)
            Gvar.var_726 = 1;
            Gvar.var_725 = 1;
            Gvar.var_734 = 1;
            await Func.func144(); // ログイン画面(タイトル画面/ログイン)動作処理 (ボス日記選択等のセーブデータロード処理)
            return;
        }
        if (Gvar.var_64 == 2) {
            await Func.func178(); // 処理確認タイマー(3m秒)
            Adap.onexit(0);
            await Func.func0941();
            return;
        }
        if (Gvar.var_64 == 4) {
            // 言語設定: JA / English サブメニューを開く。確定後は次フレームの
            // func146 描画で t() が新言語を返すので、自動で UI が切り替わる
            await Func.func178();
            await Func.funcLoginLang();
            await Func.func142();
            return;
        }
        if (Gvar.var_64 == 5) {
            Adap.end();
        }
        await Func.func142(); // タイトル画面キー操作処理
        return;
}

export {func147}
