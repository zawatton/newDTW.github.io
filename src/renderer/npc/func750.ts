import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// ペッシを仲間にする為に殴った後に話し掛けた際の処理
async function func750(this: any) {
        Adap.dbgprt(750);
        Gvar.var_181 = 0;
        Gvar.var_83[Gvar.var_3072].Var31 = 5;
        Gvar.var_83[Gvar.var_3072].Var14 = 0;
        Gvar.var_1033 = 1;

        await Func.setMessage("な！？",
                               "なんでイキナリ殴るんだよォ――", 7, true, false, true);

        await Func.setMessage("はッ！",
                               "・・・そ、そうか！", 7, true, true, true);

        await Func.setMessage("兄貴はオレの事を思って殴ったんだね？",
                               "", 7, true, true, true);

        await Func.setMessage("さすが兄貴だあッ！",
                               "どこまでも ついてきますぜッ！", 7, true, false, true);

        await Music.func126();
        await Func.AutoDraw(10);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func750}
