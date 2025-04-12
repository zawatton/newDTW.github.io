import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 719 アイテム「吉良の弓矢」を使用した時の効果
async function item719(this: any) {
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
    Gvar.var_2228 = 1;
    await Func.func531();
    if (Gvar.var_2228 == 0) {
        await Func.setMessage1("" + Gvar.target_item_name + "に",
                               "新たな装備効果が発現した！", 7, false, false, false);
    }
    if (Gvar.var_2228 == 1) {
        await Func.setMessage1("しかしﾃﾞｨｱﾎﾞﾛは",
                               "矢に選ばれなかった…", 7, false, false, false);
    }
    return;
}

export {item719}
