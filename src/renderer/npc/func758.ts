/**
 * func758 — func758 ボインゴに話しかけた時のメッセージ処理
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { tf } from '../i18n'

// ボインゴに話しかけた時のメッセージ処理
// 旧 func758
async function func758(this: any) {
        Adap.dbgprt(758);
        Gvar.var_243 = 0;

        await Func.setMessage("ボインゴ「新しいページが現れたぞ…」",
                               "", 7, true, false, true);

        await Func.setMessage("「ディアボロは次の階で…",
                               "", 7, true, true, true);                               

        Gvar.var_3143 = Gvar.current_floor;
        Gvar.current_floor = Gvar.current_floor + 1;
        await Func.func627(); // 各ダンジョンごとの出現敵設定
        Gvar.var_356 = Gvar.var_977[Gvar.var_2569];
        await Func.func177(); // 死因原因
        Gvar.current_floor = Gvar.var_3143;

        await Func.setMessage(tf("{0}", Gvar.var_849), "リタイアだァ―ッ！」", 7, true, true, true);         

        await Func.setMessage("ｳｸｹｺ ｳﾋｺ ｳｹｹｹ ｳｹｺｹｺｹﾛｵ ",
                                "ｳｹﾛｵｵｵﾌﾊﾎｯ！", 7, true, true, true);                                  
        
        await Func.AutoDraw(5);

        await Func.func051(); // キー入力待ち処理
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func758}
