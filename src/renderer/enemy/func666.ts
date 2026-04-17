/**
 * func666 — func666 敵ギアッチョの射撃&投擲無効化処理
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { tf } from '../i18n'

async function func666(this: any) {
        Adap.dbgprt(666);
        Adap.DSPLAY(126);
        await Func.setMessage("ジェントリー・ウィープス！", "", 8, false, false, false);
        Adap.gsel(19);
        Adap.color(255, 255, 255);
        Adap.boxf(0, 0, 680, 680);
        Adap.gsel(0);
        Gvar.var_311 = 255;
        Gvar.var_312 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_312 = 0;
        Gvar.var_1415 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1415 = Gvar.var_1415 + 1;
        }
        Gvar.var_1415 = 0;
        Gvar.var_1423 = 1;
        Adap.DSPLAY(215);
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1423 = Gvar.var_1423 + 1;
        }
        Gvar.var_1423 = 0;
        Gvar.var_1270 = 0;
        Gvar.var_340 = 0;
        Gvar.var_1424 = 0;
        for (let cnt1 = 0; cnt1 < 8; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1424 = Gvar.var_1424 + 20;
        }
        Gvar.var_1424 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
        await Func.func626(); // 敵リスト
        if (Gvar.var_83[Gvar.var_314].Var39 >= 2) {
            Gvar.enemy_power = Math.floor(Gvar.enemy_power * (Gvar.var_83[Gvar.var_314].Var39 * 2 + 10) / 10);
        }
        if (Gvar.var_83[Gvar.var_314].Var25 >= 1 && Gvar.var_83[Gvar.var_314].Var25 <= 50) {
            Gvar.enemy_power = Gvar.enemy_power + Gvar.var_83[Gvar.var_314].Var25;
        }
        if (Gvar.var_83[Gvar.var_314].Var25 >= 51 && Gvar.var_83[Gvar.var_314].Var25 < 99) {
            Gvar.enemy_power = Gvar.enemy_power - (Gvar.var_83[Gvar.var_314].Var25 - 50);
            if (Gvar.enemy_power <= 1) {
                Gvar.enemy_power = 1;
            }
        }
        Gvar.var_949 = Math.floor(Gvar.enemy_power * (Gvar.enemy_power + Gvar.enemy_power - 8) / 16) + Gvar.enemy_power;
        for (let cnt1 = 0; cnt1 < Gvar.var_581; ++cnt1) {
            Gvar.var_949 = Math.floor(Gvar.var_949 * 15 / 16);
        }
        Gvar.var_2817 = Adap.rnd(33);
        Gvar.var_2817 = Gvar.var_2817 + 111;
        Gvar.var_209 = Math.floor(Gvar.var_949 * Gvar.var_2817 / 128);
        if (Gvar.var_209 <= 1) {
            Gvar.var_209 = 1;
        }
        Gvar.var_209 = Math.floor(Gvar.var_209 / 2);
        if (Gvar.var_209 <= 1) {
            Gvar.var_209 = 1;
        }

        Adap.DSPLAY(105);
        Gvar.var_747 = 1;
        Gvar.var_389 = 2;
        Gvar.var_211 = Gvar.var_211 - Gvar.var_209;
        Gvar.var_208 = Gvar.var_208 + Gvar.var_2455;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 223;
        }
        await Func.setMessage("氷の塊を喰らった！", tf("{0}のダメージ！", Gvar.var_209), 8, false, false, false);
        await Func.AutoDraw(10);
        Gvar.var_389 = 0;
        Gvar.var_747 = 0;
        return;
}

export {func666}
