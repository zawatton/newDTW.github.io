import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 720 アイテム「ときのがくぼう」を使用した時の効果
async function item720(this: any) {
        Gvar.time_paused = 1; // 時止め(時消し飛ばし)状態フラグON
        Gvar.var_164 = 1;
        Gvar.var_153 = 0;
        Gvar.var_114 = 0;
        Gvar.var_463 = 0;
        Gvar.var_464 = 0;
        Gvar.var_461 = 0;
        Gvar.var_462 = 0;
        Adap.DSPLAY(185);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1491 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1491++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1491 = 0;
        await Func.AutoDraw(5);
        Gvar.var_1952 = 1;
        return;
}

export {item720}
