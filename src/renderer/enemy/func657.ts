/**
 * func657 — func657 敵 玉美へ攻撃した時の罪悪感処理
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'
import { tf } from '../i18n'

async function func657(this: any) {
        Adap.dbgprt(657);
        if (Gvar.var_83[Gvar.var_314].Var12 != 0 || Gvar.var_83[Gvar.var_314].Var13 != 0 || Gvar.var_83[Gvar.var_314].Var17 != 0) {
            return;
        }
        Gvar.var_412 = Gvar.var_314;
        Gvar.var_83[Gvar.var_314].Var8 = 1;
        await Func.AutoDraw(10);
        await Func.setMessage("玉美「イイイイイデェ～～～～ッ", "      前歯がハァァ―――――ッ」", 8, true, false, true);
        if (Gvar.shageki_disc_id == 406) {
            Gvar.var_1073 = Adap.rnd(4);
            if (Gvar.var_1073 == 0) {
                await Func.setMessage("ちっとも罪悪感を感じなかった。", "", 7, false, false, false);
            }
            if (Gvar.var_1073 == 1) {
                await Func.setMessage("「かあさんとお姉ちゃんに手を出すことは", "決してさせないぞッ！」", 7, false, false, false);
            }
            if (Gvar.var_1073 == 2) {
                await Func.setMessage("「閑けさや岩にしみ入る蝉の声」", "", 7, false, false, false);
            }
            if (Gvar.var_1073 == 3) {
                await Func.setMessage("「よし！それじゃあ明日までにキッチリ", "５０万持って来い！」", 7, false, false, false);
            }
            await Func.AutoDraw(20);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            return;
        }
        Adap.DSPLAY(188);
        Gvar.var_389 = 2;
        Gvar.var_413 = Gvar.var_199;
        Gvar.var_199 = 2;
        Gvar.var_414 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        for (let cnt1 = 0; cnt1 < 25; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_414++;
        }
        Gvar.var_389 = 0;
        Gvar.var_414 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_83[Gvar.var_314].Var8 = 0;
        if (Gvar.wallet < 1) {
            if (Gvar.equip_disc[396] == 0) {
                if (Gvar.var_157 == 0) { // Gvar.var_157 倍速移動フラグOFFであれば
                    Gvar.var_133 = 1;
                    Gvar.var_397 = 0;
                }
                if (Gvar.var_157 != 0) { // Gvar.var_157 倍速移動フラグOFFでなければ
                    Gvar.var_157 = 0; // Gvar.var_157 倍速移動フラグOFF
                    Gvar.var_158 = 0;
                }
            }
            Adap.DSPLAY(162);
            await Func.setMessage("罪悪感で体が重くなった！", "", 8, true, false, false);
            if (Gvar.equip_disc[396] == 1) {
                await Func.setMessage("しかし装備スタンドの効果で", "速度は遅くならない！", 8, false, false, true);
            }
            await Func.AutoDraw(20);
            Gvar.var_199 = Gvar.var_413;
        }
        if (Gvar.wallet >= 1) {
            Adap.DSPLAY(207);
            if (Gvar.wallet <= 500) {
                Gvar.stolen_money = Gvar.wallet;
            }
            if (Gvar.wallet > 500) {
                Gvar.stolen_money = Math.floor(Gvar.wallet / 2);
            }
            Gvar.wallet = Gvar.wallet - Gvar.stolen_money;
            Gvar.var_83[Gvar.var_412].Var26 = 1;
            Gvar.belongings_item_list = 1;
            Gvar.var_417 = Gvar.belongings_item_list;
            Gvar.var_1249 = Gvar.var_78[Gvar.var_419].Var13;
            Gvar.target_item_name = "" + Gvar.stolen_money + "G";
            Gvar.var_419 = Gvar.var_412 + 200;
            Gvar.var_78[Gvar.var_419].Var0 = 1;
            Gvar.var_78[Gvar.var_419].Var1 = 0;
            Gvar.var_78[Gvar.var_419].Var2 = 0;
            Gvar.var_78[Gvar.var_419].Var3 = 0;
            Gvar.var_78[Gvar.var_419].Var4 = 0;
            Gvar.var_78[Gvar.var_419].Var5 = 0;
            Gvar.var_78[Gvar.var_419].Var6 = 0;
            Gvar.var_78[Gvar.var_419].Var7 = 0;
            Gvar.var_78[Gvar.var_419].Var8 = 0;
            Gvar.var_78[Gvar.var_419].Var9 = 0;
            Gvar.var_78[Gvar.var_419].Var10 = 0;
            Gvar.var_78[Gvar.var_419].Var11 = 0;
            Gvar.var_78[Gvar.var_419].Var12 = 0;
            if (Gvar.var_78[Gvar.var_419].Var13 != 0) {
                Gvar.var_78[Gvar.var_419].Var13 = Gvar.var_78[Gvar.var_419].Var13 + Gvar.stolen_money;
            }
            if (Gvar.var_78[Gvar.var_419].Var13 == 0) {
                Gvar.var_78[Gvar.var_419].Var13 = Gvar.stolen_money;
            }
            Gvar.var_78[Gvar.var_419].Var14 = 0;
            Gvar.var_78[Gvar.var_419].Var15 = 0;
            Gvar.var_78[Gvar.var_419].Var16 = 0;
            Gvar.var_78[Gvar.var_419].Var17 = 0;
            Gvar.var_78[Gvar.var_419].Var18 = 0;
            Gvar.var_78[Gvar.var_419].Var19 = 0;
            Gvar.var_78[Gvar.var_419].Var20 = 0;
            Gvar.var_78[Gvar.var_419].Var21 = 0;
            Gvar.var_78[Gvar.var_419].Var22 = 0;
            Gvar.var_78[Gvar.var_419].Var23 = 0;
            Gvar.var_78[Gvar.var_419].Var24 = 0;
            Gvar.var_78[Gvar.var_419].Var25 = 0;
            Gvar.var_78[Gvar.var_419].Var26 = 0;
            Gvar.var_78[Gvar.var_419].Var27 = 0;
            Gvar.var_78[Gvar.var_419].Var28 = 0;
            Gvar.var_78[Gvar.var_419].Var29 = 0;
            await Func.setMessage(tf("罪悪感で{0} 奪われた！", Gvar.target_item_name), "", 8, false, false, false);
            await Func.AutoDraw(20);
            Gvar.var_199 = Gvar.var_413;
        }
        return;
}

export {func657}
