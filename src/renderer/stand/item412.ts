/**
 * item412 — No = 412 ヘブンズドアーの発動処理
 *
 * 各スタンドの発動能力設定。
 *
 * (org原典: newDTW_item(スタンドdisc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 412 ヘブンズドアーの発動処理
async function item412(this: any) {
        await Func.setMessage("「ヘブンズドアーッ」！！",
                               "", 7, false, false, true);
        Gvar.var_2261 = Gvar.kougeki_disc_id ;
        Gvar.kougeki_disc_id  = 0;
        Gvar.var_243 = 1;
        Gvar.var_347 = Gvar.var_66;
        Gvar.var_348 = Gvar.var_67;
        if (Gvar.var_199 == 4) {
            Gvar.var_347 = Gvar.var_347 - 1;
        }
        if (Gvar.var_199 == 6) {
            Gvar.var_347 = Gvar.var_347 + 1;
        }
        if (Gvar.var_199 == 8) {
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        if (Gvar.var_199 == 2) {
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 1) {
            Gvar.var_347 = Gvar.var_347 - 1;
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 3) {
            Gvar.var_347 = Gvar.var_347 + 1;
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 7) {
            Gvar.var_347 = Gvar.var_347 - 1;
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        if (Gvar.var_199 == 9) {
            Gvar.var_347 = Gvar.var_347 + 1;
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        if (Gvar.var_82[Gvar.var_347][Gvar.var_348] != 0) {
            Gvar.var_2231 = Gvar.var_82[Gvar.var_347][Gvar.var_348];
            Gvar.var_2232 = 0;
            if (Gvar.var_83[Gvar.var_2231].Var23 == 0) {
                Gvar.var_2232 = 1;
            }
            if (Gvar.var_83[Gvar.var_2231].Var23 != 0) {
                Gvar.var_2232 = 2;
            }
            if (Gvar.var_83[Gvar.var_2231].Var0 == 50) {
                Gvar.var_2232 = 0;
            }
            if (Gvar.var_83[Gvar.var_2231].Var0 == 118) {
                Gvar.var_2232 = 1;
            }
            if (Gvar.var_2232 == 1) {
                Adap.DSPLAY(161);
                Gvar.var_1324 = (Gvar.var_83[Gvar.var_2231].Var1 - Gvar.var_66 + 4) * 40;
                Gvar.var_1325 = (Gvar.var_83[Gvar.var_2231].Var2 - Gvar.var_67 + 4) * 40 - 10;
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                Gvar.var_1323 = 1;
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1323++;
                }
                Gvar.var_83[Gvar.var_2231].Var8 = 1;
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1323++;
                }
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_1323 = 0;
                Gvar.var_2233 = Gvar.var_1038 + 1;
                Gvar.var_2234 = 0;
                for (let cnt4 = 0; cnt4 < Gvar.var_2233; ++cnt4) {
                    if (Gvar.var_989[Gvar.cnt4] == Gvar.var_83[Gvar.var_2231].Var0) {
                        Gvar.var_2234 = 1;
                        Gvar.var_1610 = cnt4;
                        break;
                    }
                }
                if (Gvar.var_2234 == 0) {
                    Gvar.var_1038 = Gvar.var_1038 + 1;
                    Gvar.var_989[Gvar.var_1038] = Gvar.var_83[Gvar.var_2231].Var0;
                    Gvar.var_1610 = Gvar.var_1038;
                }
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                Gvar.var_1609 = 1;
                Adap.DSPLAY(100); // アイテム選択時の効果音
                Gvar.var_502 = 1;
                Adap.DSPLAY(118);
                await Func.func356();
                return;
            }
            if (Gvar.var_2232 == 2) {
                Gvar.var_1324 = (Gvar.var_83[Gvar.var_2231].Var1 - Gvar.var_66 + 4) * 40;
                Gvar.var_1325 = (Gvar.var_83[Gvar.var_2231].Var2 - Gvar.var_67 + 4) * 40 - 10;
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                Gvar.var_1323 = 1;
                await Func.AutoDraw(20);
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_1323 = 0;
                await Func.setMessage("見えてなくて効かなかった…",
                                       "", 7, false, true, false);
            }
        }
        await Func.AutoDraw(10);
        Gvar.kougeki_disc_id  = Gvar.var_2261;
        Gvar.belongings_item_list = Gvar.activated_disc_id;
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item412}
