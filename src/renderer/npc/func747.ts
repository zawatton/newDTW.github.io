import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func747
async function func747(this: any) {
        Adap.dbgprt(747);
        await Func.setMessage("パウッ！",
                                "", 7, true, false, true);
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_3072].Var7 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        for (let cnt1 = 0; cnt1 < 12; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            if (cnt1 == 3) {
                Gvar.var_1514 = 1;
                Gvar.var_747 = 1;
                Gvar.var_389 = 2;
            }
            if (cnt1 >= 3) {
                Gvar.var_1514++;
            }
        }
        Gvar.var_1514 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_83[Gvar.var_3072].Var7 = 0;
        Gvar.var_389 = 0;
        await Func.AutoDraw(10);
        Gvar.var_3135 = Adap.rnd(2);

        if (Gvar.var_3135 == 0) {
            await Func.setMessage("ちょいとミスった",
                                    "指がスベっちゃった  いやごめん！", 7, true, false, true);
            Gvar.var_211 = Math.floor(Gvar.var_211 / 2) + 1;
        }
        if (Gvar.var_3135 == 1) {
            await Func.setMessage("しばらく呼吸はできん……",
                                    "が……心配はいらん", 7, true, false, true);
            Gvar.var_125 = 1;
        }
        await Func.AutoDraw(5);
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func747}
