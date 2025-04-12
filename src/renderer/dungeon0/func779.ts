import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func779(this: any) {
        Adap.dbgprt(779);

        await Func.setMessage1("グッド！",
                               "", 7, true, true, true);

        await Func.setMessage1("よろしく頼むよ。",
                                "", 7, true, true, true);

        Gvar.var_993 = 1; // ディアボロの試練解放フラグON
        await Func.func051(); // キー入力待ち処理
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func779}
