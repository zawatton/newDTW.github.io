import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func744(this: any) {
        Adap.dbgprt(744);
        Gvar.var_83[Gvar.var_3072].Var31 = 5;
        Gvar.var_83[Gvar.var_3072].Var14 = 0;
        Gvar.var_1033 = 1;
        await Func.setMessage1("ﾂｪﾍﾟﾘさんが仲間になった！",
                               "", 7, true, false, false);
        await Music.func124();
        await Func.setMessage1("君は｢仙道｣を学ばなければならんッ！",
                               "さもないと死ぬッ！", 7, true, false, true);
        await Func.AutoDraw(5);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func744}
