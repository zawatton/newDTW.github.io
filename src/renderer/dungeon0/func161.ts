import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 亀の中に入った時の表示
// 旧 func161
async function func161(this: any) {
        Adap.dbgprt(161);
        Gvar.var_243 = 0;
        await Func.setMessage("亀の中に入った",
                              "", 7, false, false, false);
        await Func.AutoDraw(5);
        await Music.func114(); // 亀の中の選曲(BGM "20th Century Boy")
        Gvar.var_65[Gvar.var_66][Gvar.var_67] = 0;
        Gvar.var_66 = 14; // X軸
        Gvar.var_67 = 23; // Y軸
        await Func.func016();
        Gvar.var_595 = 1; // Gvar.dungeon_number = 0 での場所確認。1 = 亀の中
        Gvar.var_374 = 1;
        Gvar.var_772 = 1;
        Gvar.var_773 = 1;
        Gvar.var_774 = 0;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_773++;
            Gvar.var_774 = Gvar.var_774 + 20;
        }
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_773++;
        }
        Gvar.var_773 = 0;
        Gvar.var_772 = 0;
        Gvar.var_374 = 0;
        Gvar.var_199 = 2;
        await Func.AutoDraw(10);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func161}
