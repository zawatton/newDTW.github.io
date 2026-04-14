/**
 * func161b — func161b 酒場からホテルの部屋へ戻った時の表示
 *
 * ヴェネチアホテルや亀、酒場の設定
 *
 * (org原典: newDTW_dungeon0 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func161b
async function func161b(this: any) {
        Adap.dbgprt(161);
        Gvar.var_243 = 0;
        await Func.setMessage("部屋に戻った",
                               "", 7, false, false, false);
        await Func.AutoDraw(5);
        await Music.func113(); // ヴェネチアホテルのBGMを選曲
        Gvar.var_65[Gvar.var_66][Gvar.var_67] = 0;
        Gvar.var_66 = 11; // X軸
        Gvar.var_67 = 8; // Y軸
        await Func.func016();
        Gvar.var_595 = 0; // Gvar.dungeon_number = 0 での場所確認。0 = ヴェネチアホテル
        await Func.AutoDraw(10);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func161b}
