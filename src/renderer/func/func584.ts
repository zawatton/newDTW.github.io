import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func584(this: any) {
        Adap.dbgprt(584);
        Gvar.var_2803 = 0;
        if (Gvar.var_155 == 1) {
            await Func.setMessage("弾丸を止めた！", "", 7, false, false, false);
            await Func.AutoDraw(6);
            Gvar.var_240 = 0;
            Gvar.var_2803 = 1;
            Gvar.var_2804 = 0;
            return;
        }
        if (Gvar.equip_disc[397] == 1) {
            Gvar.var_2805 = Adap.rnd(2);
            if (Gvar.var_2805 == 0) {
                Adap.DSPLAY(175);
                await Func.setMessage("弾丸は燃え尽きて届かなかった", "", 7, false, false, false);
                Gvar.var_1584 = 160;
                Gvar.var_1585 = 150;
                Gvar.var_1583 = 1;
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                for (let cnt3 = 0; cnt3 < 6; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1583++;
                }
                Gvar.var_1583 = 0;
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_2803 = 1;
                Gvar.var_240 = 0;
                Gvar.var_2804 = 0;
                return;
            }
        }
        if (Gvar.equip_disc[304] == 1) {
            Gvar.var_2805 = Adap.rnd(4);
            if (Gvar.var_2805 == 0) {
                Adap.DSPLAY(175);
                await Func.setMessage("弾丸は燃え尽きて届かなかった", "", 7, false, false, false);
                Gvar.var_1584 = 160;
                Gvar.var_1585 = 150;
                Gvar.var_1583 = 1;
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                for (let cnt3 = 0; cnt3 < 6; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1583++;
                }
                Gvar.var_1583 = 0;
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_2803 = 1;
                Gvar.var_240 = 0;
                Gvar.var_2804 = 0;
                return;
            }
        }
        return;
}

export {func584}
