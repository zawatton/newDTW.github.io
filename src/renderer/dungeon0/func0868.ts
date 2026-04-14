/**
 * func0868 — func868 不明
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func813
async function func0868(this: any) {
    Adap.DSPLAY(210);
    Gvar.var_783 = 1;
    await Func.AutoDraw(1);
    Gvar.var_783 = 2;
    await Func.AutoDraw(1);
    Gvar.var_783 = 3;
    await Func.AutoDraw(1);
    Gvar.var_783 = 4;
    await Func.AutoDraw(5);
    Gvar.var_783 = 5;
    await Func.AutoDraw(1);
    Gvar.var_783 = 6;
    await Func.AutoDraw(1);
    Gvar.var_783 = 7;
    await Func.AutoDraw(1);
    Gvar.var_783 = 5;
    await Func.AutoDraw(1);
    Gvar.var_783 = 14;
    await Func.AutoDraw(1);
    Gvar.var_783 = 15;
    if (Gvar.var_830 == 0) {
        await Func.setMessage("「はい…こちらはSPW財団です」", "", 7, true, false, true);
        await Func.setMessage("「前回の冒険でやられた敵の", "  能力を調べることができます」", 7, true, false, true);
        await Func.setMessage("「調査費用は1000Gです」", "", 7, true, false, true);
        await Func.func0872();
        return;
    }
    Gvar.enemy_list = Gvar.var_830;
    await Func.func626();
    Gvar.var_3194 = "" + Gvar.enemy_name;
    await Func.setMessage("「はい…こちらはSPW財団です」", "", 7, true, false, true);
    await Func.setMessage("「" + Gvar.var_3194 + "に", "  やられてしまったようですね？」", 7, true, false, true);
    await Func.setMessage("「1000Gの調査費で", "  敵の能力を調べられます」", 7, true, false, true);
    await Func.func051(); // キー入力待ち処理
    Gvar.var_245 = 19;
    Gvar.var_246 = 45;
    Gvar.var_546 = 1;
    Gvar.var_3195 = 1;
    Gvar.var_548 = 1; // 選択肢処理フラグON
    await Func.func0898(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
    return;
}

export {func0868}
