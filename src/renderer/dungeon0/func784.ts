import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func784
async function func784(this: any) {
        Adap.dbgprt(784);
        await Func.setMessage("おやっ？君が持っているのは", "僕のマンガじゃあないか。", 7, true, false, true);

        await Func.setMessage("僕のマンガが好きなのかい？", "【波調が合う】…ってことかな。", 7, true, true, true);

        Gvar.var_1261 = 1;

        Adap.DSPLAY(103); // 殴った時の効果音
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1542 = 21;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1542++;
        }
        Adap.DSPLAY(118);
        await Func.AutoDraw(20);
        Gvar.var_1261 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1542 = 0;

        await Func.setMessage("冗談！冗談だよ", "嫌だなあ～", 7, true, false, true);

        await Func.func051(); // キー入力待ち処理
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func784}
