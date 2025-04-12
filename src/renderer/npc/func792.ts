import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func792(this: any) {
        Adap.dbgprt(792);

        await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛ「うっ！」",
                               "", 7, true, true, true);

        await Func.setMessage1("しかし G･ｴｸｽﾍﾟﾘｴﾝｽの能力で",
                               "歯を一本 クラゲに変えて吸い取らせた", 7, true, true, false);

        await Func.func051(); // キー入力待ち処理
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func792}
