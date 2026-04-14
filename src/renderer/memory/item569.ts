/**
 * item569 — No = 569 ポルナレフのdiscの効果
 *
 * (org原典: newDTW_item(記憶disc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 569 ポルナレフのdiscの効果
async function item569(this: any) {
        await Func.AutoDraw(12);
        Gvar.var_601 = Adap.rnd(5);
        if (Gvar.var_601 == 0) {
            await Func.setMessage("ｱﾌﾞﾄﾞｩﾙが死んだ時の事を思い出した。",
                                  "", 7, true, false, true);
        }
        if (Gvar.var_601 == 1) {
            await Func.setMessage("ｲｷﾞｰが死んだ時の事を思い出した。",
                                   "", 7, true, false, true);
        }
        if (Gvar.var_601 == 2) {
            await Func.setMessage("ｼｪﾘｰが死んだ時の事を思い出した。",
                                  "", 7, true, false, true);
        }
        if (Gvar.var_601 == 3) {
            await Func.setMessage("ｱﾌﾞﾄﾞｩﾙが死んだ時の事を思い出した。",
                                  "", 7, true, false, true);
        }
        if (Gvar.var_601 == 4) {
            await Func.setMessage("階段でDIOに会った時の事を思い出した。",
                                   "", 7, true, false, true);
        }

        if (Gvar.var_601 == 0) {
            await Func.setMessage("「このドグサレがァァ――――ッ!!」",
                                  "", 7, true, true, true);
        }
        if (Gvar.var_601 == 1) {
            await Func.setMessage("「今のおれには…",
                                   "悲しみで泣いている時間なんかないぜ」", 7, true, true, true);
        }
        if (Gvar.var_601 == 2) {
            await Func.setMessage("「しかるべき報いを与えてやるッ！」",
                                   "", 7, true, true, true);
        }
        if (Gvar.var_601 == 3) {
            await Func.setMessage("「やつの気持ちを無駄にはしない",
                                   "  生きるために戦う……！」", 7, true, true, true);
        }
        if (Gvar.var_601 == 4) {
            await Func.setMessage("このままではまずい…はね返さなくてな…",
                                   "おれに勇気をくれッ！", 7, true, true, true);
        }
        Adap.DSPLAY(182);
        Gvar.var_1299 = 3;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        Gvar.var_104 = 1; // Gvar.var_104 攻撃力が上がるフラグON
        if (Gvar.var_109 == 1) {
            Gvar.var_104 = 0; // Gvar.var_104 攻撃力が上がるフラグOFF
            Gvar.var_109 = 0;
        }
        return;
}

export {item569}
