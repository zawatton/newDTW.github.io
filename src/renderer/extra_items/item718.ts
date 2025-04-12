import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 718 アイテム「聖なる弓矢」を使用した時の効果
async function item718(this: any) {
        Adap.DSPLAY(111);
        Gvar.var_1257 = 1;
        Gvar.var_1591 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1591 = Gvar.var_1591 + 1;
        }
        Gvar.var_1257 = 0;
        Gvar.var_1591 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        await Func.func530();
        return;
}

export {item718}
