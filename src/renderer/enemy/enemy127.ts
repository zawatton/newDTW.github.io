import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 127 敵C-MOONの特殊能力
async function enemy127(this: any) {
        Gvar.var_2830 = Adap.rnd(3);
        if (Gvar.var_2830 == 0) {
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            Adap.DSPLAY(147);
            await Func.setMessage("C-MOONの裏返り攻撃！", "", 8, false, false, false);
            await Func.AutoDraw(9);
            await Func.func619();
            if (Gvar.nouryoku_disc_id != 120) {
                Gvar.var_2904 = Gvar.var_352 - Gvar.var_211;
                Gvar.var_211 = Gvar.var_2904;
                if (Gvar.var_211 == 0) {
                    Gvar.var_211 = 1;
                }
                await Func.setMessage("体力が逆転してしまった！！", "", 7, false, false, false);
            }
            if (Gvar.nouryoku_disc_id == 120) {
                await Func.setMessage("しかしメビウスの輪を作って", "裏返り攻撃を防いだ！", 7, false, false, false);
            }
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy127}
