import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func735(this: any) {
        Adap.dbgprt(735);
        Gvar.var_243 = 0;
        Gvar.var_3072 = Gvar.var_314;
        Gvar.enemy_list = Gvar.var_83[Gvar.var_3072].Var0;
        await Func.func626();
        await Func.setMessage("" + Gvar.enemy_name + "は",
                               "話せる状態ではないようだ…", 7, false, false, false);
        await Func.AutoDraw(5);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func735}
