import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func725(this: any) {
        Adap.dbgprt(725);
        Gvar.var_243 = 0;
        Gvar.var_3125 = Adap.rnd(5);
        if (Gvar.var_3125 == 0) {
            await Func.setMessage1("…おまえ｢パーマン｣知らねーのか？",
                                   "", 7, false, false, true);
        }
        if (Gvar.var_3125 == 1) {
            await Func.setMessage1("この人形の｢スタンド｣の名は",
                                   "『ＳＵＲＦＡＣＥ（うわっ面）』…", 7, false, false, true);
        }
        if (Gvar.var_3125 == 2) {
            await Func.setMessage1("おれの体力はオマエの",
                                   "最大体力と同じだぜ。", 7, false, false, true);
        }
        if (Gvar.var_3125 == 3) {
            await Func.setMessage1("同じ価値観を持った者同士…",
                                   "それが『仲間』っつーもんだ", 7, false, false, true);
        }
        if (Gvar.var_3125 == 4) {
            await Func.setMessage1("おれの防御力はオマエの",
                                   "防御力と同じだぜ。", 7, false, false, true);
        }
        await Func.AutoDraw(5);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func725}
