import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 589 プロシュート兄貴のdiscの効果
async function item589(this: any) {
        await Func.AutoDraw(12);
        Gvar.var_1264 = 0;
        Gvar.var_1073 = Adap.rnd(2);
        if (Gvar.var_1073 == 0) {
            await Func.setMessage("「ブッ殺す」と心の中で思ったならッ！",
                                   "スデに行動は終わっているんだッ！", 7, false, false, true);
        }
        if (Gvar.var_1073 == 1) {
            await Func.setMessage("いったん食らい付いたら決して…",
                                   "スタンド能力を解除したりはしねえッ！", 7, false, false, true);
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
        Gvar.var_172 = 1; // Gvar.var_172 発動効果が向上するフラグON
        return;
}

export {item589}
