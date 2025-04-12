import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 586 ペッシのdiscの効果
async function item586(this: any) {
        await Func.AutoDraw(12);
        Gvar.var_1264 = 0;
        if (Gvar.current_level > 1) {
            await Func.AutoDraw(6);
            Gvar.var_1264 = 0;
            Gvar.var_389 = 2;
            await Func.setMessage1("兄貴ィ～～  もう駄目だァ～～",
                                   "", 7, false, false, true);
            await Func.AutoDraw(2);
            Adap.DSPLAY(151);
            Gvar.var_1299 = 4;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1297 = 1;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1297++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1297 = 0;
            Gvar.current_level = Gvar.current_level - 1;
            Gvar.var_352 = Gvar.var_352 - 3;
            Gvar.var_211 = Gvar.var_211 - 3;
            if (Gvar.var_352 < 1) {
                Gvar.var_352 = 1;
            }
            if (Gvar.var_211 < 1) {
                Gvar.var_211 = 1;
            }
            Gvar.var_568 = Gvar.var_948[Gvar.current_level] - 1;
            Gvar.var_389 = 0;
            return;
        }
        if (Gvar.current_level == 1) {
            await Func.AutoDraw(6);
            Gvar.var_1264 = 0;
            await Func.setMessage1("おれはもう「マンモーニ」じゃねえッ！",
                                   "", 7, false, false, true);
            await Func.AutoDraw(10);
            Adap.DSPLAY(142); // レベルアップした時の効果音
            Gvar.var_1299 = 9;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1297 = 1;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1297++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1297 = 0;
            Gvar.var_568 = Gvar.var_948[Gvar.current_level];
            await Func.func681();
            Gvar.var_2201 = 0;
            await Func.setMessage1("ディアボロはレベルが上がった！",
                                    "", 7, false, false, false);
            return;
        }
}

export {item586}
