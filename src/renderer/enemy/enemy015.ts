import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 15 敵ペットショップ & No = 64 敵ギアッチョの特殊能力
async function enemy015(this: any) {
        Gvar.var_2830 = Adap.rnd(4);
        if (Gvar.var_2830 == 0 && Gvar.var_128 == 0 && Gvar.var_219 == 0) {
            Gvar.var_1359 = 0;
            if (Gvar.enemy_list == 15) {
                Gvar.var_1359 = 1;
            }
            Gvar.var_314 = Gvar.var_673;
            Gvar.var_1360 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_1361 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1358 = 1;
            Adap.DSPLAY(215);
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1358 = Gvar.var_1358 + 1;
            }
            Gvar.var_1358 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            if (Gvar.var_173 == 1) {
                await Func.setMessage1("冷やされる攻撃に強くなっていて",
                                       "冷凍攻撃を防いだ！", 7, false, false, false);
                await Func.AutoDraw(9);
                Gvar.var_2197 = 1;
                return;
            }
            if (Gvar.nouryoku_disc_id == 109 || Gvar.shageki_disc_id == 404 || Gvar.nouryoku_disc_id == 202) {
                await Func.setMessage1("装備中のDISCの効果で",
                                       "冷凍攻撃を防いだ！", 7, false, false, false);
                await Func.AutoDraw(9);
                Gvar.var_2197 = 1;
                return;
            }
            Gvar.var_128 = 1;
            Adap.DSPLAY(126);
            await Func.setMessage1("体を凍らされてしまった！", "", 7, false, false, false);
            await Func.AutoDraw(9);
            Gvar.var_2197 = 1;
        }
        return;                
}

export {enemy015}
