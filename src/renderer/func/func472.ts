/**
 * func472 — func472 グッチョの死体にピッツァ&トマトチーズのサラダを入れた時の動作処理
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func472(this: any) {
        Adap.dbgprt(472);
        await Func.setMessage("オホン", "", 7, true, false, true);
        await Func.setMessage("ン", "", 7, true, false, false);
        await Func.setMessage("「ピザ・モッツァレラ♪」", "", 7, true, false, true);
        await Func.setMessage("「ピザ・モッツァレラ♪」", "", 7, true, false, true);
        await Func.setMessage("「レラレラレラレラ♪」", "「レラレラレラレラ♪」", 7, true, false, true);
        await Func.setMessage("「ピザ・モッツァレラ♪」", "", 7, true, false, true);
        return;
}

export {func472}
