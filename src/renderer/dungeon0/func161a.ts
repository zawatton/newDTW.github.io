import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func161a(this: any) {
        Adap.dbgprt(161);
        Gvar.var_243 = 0;
        await Func.setMessage("酒場に入った",
                               "", 7, false, false, false);
        await Func.AutoDraw(5);
        await Music.func114b(); // 酒場の選曲(BGM "")
        Gvar.var_65[Gvar.var_66][Gvar.var_67] = 0;
        Gvar.var_66 = 25; // X軸 ok25 前21
        Gvar.var_67 = 32; // Y軸  ok31 前32
        await Func.func016();
        Gvar.var_595 = 2; // Gvar.dungeon_number = 0 での場所確認。2 = 酒場
        await Func.AutoDraw(10);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func161a}
