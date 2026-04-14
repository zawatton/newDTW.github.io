/**
 * enemy132 — No = 132 レクイエムジョルノの動作処理
 *
 * (org原典: newDTW_enemy / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 132 レクイエムジョルノの動作処理
async function enemy132(this: any) {
        if (Gvar.var_146 >= 1 && Gvar.var_147 == Gvar.var_66 && Gvar.var_148 == Gvar.var_67) {
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            Gvar.var_743 = 1; //スタンド像付与フラグON
            Adap.DSPLAY(121);
            await Func.setMessage("「ｺﾞｰﾙﾄﾞ･ｴｸｽﾍﾟﾘｴﾝｽ･ﾚｸｲｴﾑ」！", "", 8, true, false, false);
            await Func.AutoDraw(10);
            Gvar.var_743 = 0; //スタンド像付与フラグOFF
            Gvar.var_146 = 0;
            Gvar.var_147 = 0;
            Gvar.var_148 = 0;
            await Func.func619();
            Gvar.var_389 = 2;
            Gvar.var_1320 = 100;
            Gvar.var_1319 = 155;
            Adap.DSPLAY(200);
            Gvar.var_1316 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1316++;
            }
            Gvar.var_1316 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1906 = Gvar.var_66;
            Gvar.var_1907 = Gvar.var_67;
            Gvar.var_1908 = Gvar.var_66;
            Gvar.var_1909 = Gvar.var_67;
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                Gvar.var_309 = Gvar.var_66;
                Gvar.var_310 = Gvar.var_67;
                Gvar.var_66 = Gvar.var_1906;
                Gvar.var_67 = Gvar.var_1907;
                await Func.func405();
                Gvar.var_66 = Gvar.var_309;
                Gvar.var_67 = Gvar.var_310;
                if (Gvar.var_446 == 0) {
                    break;
                }
                await Func.func724();
                Gvar.var_77[Gvar.var_448][Gvar.var_450] = Gvar.var_854;
                Gvar.var_78[Gvar.var_854].Var0 = 650;
                Gvar.var_78[Gvar.var_854].Var1 = Gvar.var_448;
                Gvar.var_78[Gvar.var_854].Var2 = Gvar.var_450;
                Gvar.var_78[Gvar.var_854].Var9 = Gvar.var_71[Gvar.var_448][Gvar.var_450];
                Gvar.var_78[Gvar.var_854].Var10 = 1;
            }
            await Func.func018();
            await Func.setMessage("鉄塔がカエルに変化した！", "", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_389 = 0;
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy132}
