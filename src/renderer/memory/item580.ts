import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 580 ドッピオのdiscの効果
async function item580(this: any) {
        await Func.AutoDraw(12);
        Gvar.var_1264 = 0;
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            await Func.setMessage1("しかし何も起こらなかった…",
                                   "", 7, false, false, false);
            return;
        }
        Gvar.var_144 = 1;
        Adap.DSPLAY(168);
        Gvar.var_1584 = 160;
        Gvar.var_1585 = 160;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1583 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1583++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1583 = 0;
        Gvar.var_116 = 0;
        Gvar.var_114 = 0;
        Gvar.var_126 = 0;
        Gvar.var_134 = 0;
        Gvar.var_135 = 0;
        Gvar.var_136 = 0;
        Gvar.var_137 = 0;
        Gvar.var_177 = 0;
        if (Gvar.var_199 == 1) {
            Gvar.var_199 = 4;
        }
        if (Gvar.var_199 == 7) {
            Gvar.var_199 = 8;
        }
        if (Gvar.var_199 == 9) {
            Gvar.var_199 = 6;
        }
        if (Gvar.var_199 == 3) {
            Gvar.var_199 = 2;
        }
        return;
}

export {item580}
