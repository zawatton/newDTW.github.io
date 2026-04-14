/**
 * func526 — func526 ボーイⅡマンの発動能力2
 *
 * (org原典: newDTW_func5 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ボーイ・II・マン
// 旧 func526
async function func526(this: any) {
        Adap.dbgprt(526);
        Gvar.var_2375 = Gvar.var_2375 + 19;
        Gvar.var_233[Gvar.var_2373]["Var" + Gvar.var_2375] = 0;
        Gvar.var_2377 = 20;
        Gvar.var_2378 = 21;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            if (Gvar.var_233[Gvar.var_2373]["Var" + Gvar.var_2377] == 0 && Gvar.var_233[Gvar.var_2373]["Var" + Gvar.var_2378] != 0) {
                Gvar.var_233[Gvar.var_2373]["Var" + Gvar.var_2377] = Gvar.var_233[Gvar.var_2373]["Var" + Gvar.var_2378];
                Gvar.var_233[Gvar.var_2373]["Var" + Gvar.var_2378] = 0;
                Gvar.var_2377 = 20;
                Gvar.var_2378 = 21;
                cnt1 = -1;
                continue;
            }
            Gvar.var_2377++;
            Gvar.var_2378++;
        }
        Gvar.var_233[Gvar.var_2373].Var19 = Gvar.var_233[Gvar.var_2373].Var19 - 1;
        if (Gvar.var_233[Gvar.var_2373].Var19 <= 1) {
            Gvar.var_233[Gvar.var_2373].Var19 = 1;
        }
        Gvar.var_233[Gvar.var_2373].Var5 = Gvar.var_233[Gvar.var_2373].Var5 + 1;
        await Func.setMessage("" + Gvar.strengthen_item_name + "の", "能力を１つ消去した。", 7, false, false, false);
        await Func.AutoDraw(10);
        Gvar.var_225 = Gvar.var_2300;
        if (Gvar.var_2301 == 1) {
            Gvar.var_220 = 1; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        }
        if (Gvar.var_2301 == 2) {
            Gvar.var_234 = 1;
        }
        Gvar.belongings_item_list = 310;
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        Gvar.var_1667 = 0;
        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        Gvar.var_234 = 0;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func526}
