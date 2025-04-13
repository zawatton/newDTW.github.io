import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 亀の中の幽霊のポルナレフに話しかけた時のメッセージ処理
async function func756(this: any) {
        Adap.dbgprt(756);
        Gvar.var_243 = 0;

        await Func.setMessage("ﾎﾟﾙﾅﾚﾌ「亀の中はなかなか快適だな」",
                                "", 7, true, false, true);

        await Func.setMessage("ﾎﾟﾙﾅﾚﾌ「ところでそこのジッパー…」",
                                "", 7, true, false, true);

        await Func.setMessage("ﾎﾟﾙﾅﾚﾌ「自分が入ったら",
                                "            どこに行くんだろうな？」", 7, true, false, true);        

        await Func.func051(); // キー入力待ち処理
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func756}
