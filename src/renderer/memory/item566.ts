import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 566 ケンゾーのdiscの効果
async function item566(this: any) {
        await Func.AutoDraw(12);
        Gvar.var_1264 = 0;
        Gvar.var_1073 = Adap.rnd(4);
        if (Gvar.var_1073 == 0) {
            await Func.setMessage1("「健康の秘訣は睡眠8時間半と",
                                   "  毎朝一杯の尿療法」", 7, false, false, true);
        }
        if (Gvar.var_1073 == 1) {
            await Func.setMessage1("「40年前",
                                   "  わしは輝いておったんじゃあああああ」", 7, false, false, true);
        }
        if (Gvar.var_1073 == 2) {
            await Func.setMessage1("「教祖復活じゃああああああ",
                                   "  あああああああああああああ」", 7, false, false, true);
        }
        if (Gvar.var_1073 == 3) {
            await Func.setMessage1("「完璧なる【守りの方角】",
                                   "これで極めたって事じゃよのオオ！」", 7, false, false, true);
        }
        await Func.AutoDraw(12);
        Adap.DSPLAY(182);
        Gvar.var_1299 = 8;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        Gvar.var_105 = 1; // Gvar.var_105 攻撃を躱わしやすくなるフラグON
        return;
}

export {item566}
