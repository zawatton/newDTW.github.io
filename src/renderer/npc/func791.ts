import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// アバッキオ茶のダメージセリフ
async function func791(this: any) {
        Adap.dbgprt(791);
        if (Gvar.nouryoku_disc_id == 115) {
            await Func.func792();
            return;
        }

        await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「★※○■¶◆ЖΘ！！！」",
                               "", 7, true, true, true);

        if (Gvar.var_211 <= 1) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 280;
            Gvar.var_212 = 1;
        }
        if (Gvar.var_211 >= 2) {
            Gvar.var_211 = 1;
        }
        Gvar.var_389 = 2;

        Adap.DSPLAY(103); // 殴った時の効果音
        await Func.setMessage("ﾃﾞｨｱﾎﾞﾛは酷いダメージを受けた！",
                               "", 7, true, true, false);

        await Func.func051(); // キー入力待ち処理
        Gvar.var_389 = 0;
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func791}
