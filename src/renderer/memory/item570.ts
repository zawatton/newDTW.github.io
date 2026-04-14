/**
 * item570 — No = 570 ジョナサンのdiscの効果
 *
 * (org原典: newDTW_item(記憶disc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 570 ジョナサンのdiscの効果
async function item570(this: any) {
        await Func.AutoDraw(12);
        Gvar.var_1264 = 0;
        Gvar.var_1073 = Adap.rnd(4);
        if (Gvar.var_1073 == 0) {
            await Func.setMessage("「ふるえるぞハート！",
                                   "  燃え尽きるほどヒ―――ト！！」", 7, false, false, true);
        }
        if (Gvar.var_1073 == 1) {
            await Func.setMessage("「刻むぞ  血液のビート！」",
                                   "", 7, false, false, true);
        }
        if (Gvar.var_1073 == 2) {
            await Func.setMessage("「浄めてやるッ",
                                   "  その穢れたる野望！」", 7, false, false, true);
        }
        if (Gvar.var_1073 == 3) {
            await Func.setMessage("「たっぷり波紋を流し込んでやるッ！」",
                                   "", 7, false, false, true);
        }
        await Func.AutoDraw(12);
        Gvar.var_125 = 1;
        Adap.DSPLAY(182);
        Gvar.var_1299 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        if (Gvar.var_130 != 0) {
            Gvar.var_389 = 2;
            Gvar.var_134 = 1;
            Gvar.var_211 = 1;
            Gvar.var_747 = 1;
            Adap.DSPLAY(105);
            await Func.AutoDraw(10);
            await Func.setMessage("吸血鬼体質で波紋呼吸をしてしまった！",
                                   "", 7, false, false, false);
            await Func.setMessage("酷いダメージを受けて回復しない！",
                                   "", 7, false, false, false);
            await Func.AutoDraw(15);
            Gvar.var_389 = 0;
        }
        return;
}

export {item570}
