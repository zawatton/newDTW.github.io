import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func513(this: any) {
        Adap.dbgprt(513);
        if (Gvar.var_2357 == 1) {
            await Func.func817();
            return;
        }
        if (Gvar.var_1949 == 0) {
            Gvar.belongings_item_list = Gvar.activated_disc_id;
            await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
            Gvar.kougeki_disc_id  = Gvar.var_2261;
        }
        Gvar.var_1254 = 0;
        Gvar.var_2358 = Adap.rnd(5);
        if (Gvar.var_2358 == 0) {
            await Func.setMessage1("よし。",
                                    "「今起こったことはすべて忘れる」…と。", 7, true, false, true);
        }
        if (Gvar.var_2358 == 1) {
            await Func.setMessage1("最低なヤツだな……",
                                    "おまえは使えんな…", 7, true, false, true);
        }
        if (Gvar.var_2358 == 2) {
            await Func.setMessage1("実にいいッ！",
                                    "実に気に入ったよ！", 7, true, false, true);
        }
        if (Gvar.var_2358 == 3) {
            await Func.setMessage1("君の性格……",
                                    "読者からもきっと好かれると思うよ", 7, true, false, true);
        }
        if (Gvar.var_2358 == 4) {
            await Func.setMessage1("たとえ平凡でも",
                                    "人の人生を見るのはおもしろい……", 7, true, false, true);
        }
        Gvar.var_83[Gvar.var_2231].Var8 = 0;
        Gvar.var_1949 = 0;
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func513}
