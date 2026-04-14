/**
 * item584 — No = 584 ヌケサクのdiscの効果
 *
 * (org原典: newDTW_item(記憶disc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 584 ヌケサクのdiscの効果
async function item584(this: any) {
        await Func.AutoDraw(12);
        Gvar.var_1264 = 0;
        Gvar.var_601 = Adap.rnd(5);
        await Func.setMessage("嫌な記憶がよみがえってきた…",
                               "", 7, true, false, false);

        if (Gvar.var_601 == 0) {
            await Func.setMessage("「黙って引っ込んでろよ  いいな…」",
                                   "", 7, true, true, true);
        }
        if (Gvar.var_601 == 1) {
            await Func.setMessage("「よけいなことをしてみろ",
                                   "おれたちが てめーを殺すぜ」", 7, true, true, true);
        }
        if (Gvar.var_601 == 2) {
            await Func.setMessage("「おとなしく補欠してろヌケサク」",
                                   "", 7, true, true, true);
        }
        if (Gvar.var_601 == 3) {
            await Func.setMessage("「きさまの能力では",
                                   "ジョースターたちを倒すのは無理だ」", 7, true, true, true);
        }
        if (Gvar.var_601 == 4) {
            await Func.setMessage("「しょせんきさまはただの吸血鬼」",
                                   "", 7, true, true, true);
        }
        Adap.DSPLAY(151);
        Gvar.var_1299 = 4;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        Gvar.var_109 = 1;
        if (Gvar.var_104 == 1) { // Gvar.var_104 攻撃力が上がるフラグがONであれば
            Gvar.var_104 = 0; // Gvar.var_104 攻撃力が上がるフラグOFF
            Gvar.var_109 = 0;
        }
        Adap.DSPLAY(164);
        return;
}

export {item584}
