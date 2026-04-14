/**
 * func444 — func444 discに対してコミックを読んだ時の強化処理
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

 // discに対してコミックを読んだ時の強化処理
async function func444(this: any) {
        Adap.dbgprt(444);
        if (Gvar.var_233[Gvar.var_225].Var0 >= 800 && Gvar.var_233[Gvar.var_225].Var0 < 900 && Gvar.var_1950 != 20) {
            await Func.func445(); // ヤバいものに対してコミックを読んだ時の強化処理
            return;
        }
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        if (Gvar.var_233[Gvar.var_225].Var0 >= 800 && Gvar.var_233[Gvar.var_225].Var0 < 900 && Gvar.var_1950 == 20) {
            Gvar.var_1980 = 1;
        }
        if (Gvar.var_233[Gvar.var_225].Var0 >= 400 && Gvar.var_233[Gvar.var_225].Var0 < 500 && Gvar.var_1950 == 20) {
            Gvar.var_1980 = 1;
        }
        if (Gvar.var_233[Gvar.var_225].Var0 < 100 || Gvar.var_233[Gvar.var_225].Var0 >= 500) {
            Gvar.var_1980 = 1;
        }
        Gvar.var_1981 = Gvar.var_233[Gvar.var_225].Var0;
        if (Gvar.var_233[Gvar.var_225].Var0 >= 100 && Gvar.var_233[Gvar.var_225].Var0 < 400 && Gvar.var_862[Gvar.var_1981][0] == 0 && Gvar.var_262 == 0) {
            Gvar.var_1980 = 0;
            await Func.setMessage("何のDISCかわからないので研究できない", "", 7, true, false, false);
            await Func.AutoDraw(4);
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051(); // キー入力待ち処理
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        if (Gvar.var_1980 == 1) {
            Gvar.var_1980 = 0;
            await Func.setMessage("それには使えません。", "", 7, true, false, false);
            await Func.AutoDraw(4);
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051(); // キー入力待ち処理
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.strengthen_item_name = Gvar.item_name;
        Gvar.var_1983 = 0;
        // 3部コミック
        if (Gvar.var_1950 == 3) {
            if (Gvar.var_1984 == 3 || Gvar.var_1984 == 7 || Gvar.var_1984 == 9 || Gvar.var_1984 == 10) {
                Gvar.var_1983 = 1;
            }
        }
        // 4部コミック
        if (Gvar.var_1950 == 4) {
            if (Gvar.var_1984 == 4 || Gvar.var_1984 == 7 || Gvar.var_1984 == 8 || Gvar.var_1984 == 10) {
                Gvar.var_1983 = 1;
            }
        }
        // 5部コミック
        if (Gvar.var_1950 == 5) {
            if (Gvar.var_1984 == 5 || Gvar.var_1984 == 8 || Gvar.var_1984 == 9) {
                Gvar.var_1983 = 1;
            }
        }
        // 6部コミック
        if (Gvar.var_1950 == 6) {
            if (Gvar.var_1984 == 6 || Gvar.var_1984 == 7) {
                Gvar.var_1983 = 1;
            }
        }
        // 部コミック
        if (Gvar.var_1950 == 10) {
            if (Gvar.var_1984 == 3 || Gvar.var_1984 == 4 || Gvar.var_1984 == 5 || Gvar.var_1984 == 7 || Gvar.var_1984 == 8 || Gvar.var_1984 == 9 || Gvar.var_1984 == 10) {
                Gvar.var_1983 = 1;
            }
        }
        // 7部コミック
        if (Gvar.var_1950 == 7) {
            Gvar.var_1983 = 1;
        }
        Adap.DSPLAY(118);
        await Func.setMessage("" + Gvar.var_1937 + "を読んだ。", "", 7, true, false, false);
        if (Gvar.var_1950 == 20) {
            await Func.func446();
            return;
        }
        if (Gvar.var_1983 == 0) {
            await Func.setMessage("" + Gvar.strengthen_item_name + "の研究は", "この単行本ではできなかった…", 7, true, false, false);
            await Func.AutoDraw(10);
            Gvar.var_1950 = 0;
            await Func.func437();
            Gvar.var_1252 = 0;
            Gvar.var_217 = 1;
            await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
            return;
        }
        Gvar.var_1985 = 0;
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        await Func.func492(); // アイテムリスト呼び出し
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400 && Gvar.var_233[Gvar.var_225].Var4 >= 99) {
            Gvar.var_1985 = 1;
        }
        if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 500 && Gvar.var_233[Gvar.var_225].Var3 >= 99) {
            Gvar.var_1985 = 1;
        }
        if (Gvar.var_1985 == 1) {
            Gvar.var_233[Gvar.var_225].Var14 = 1;
            await Func.setMessage("" + Gvar.strengthen_item_name + "は", "スデに強さの限界のようだ", 7, true, false, false);
            if (Gvar.var_233[Gvar.var_225].Var12 == 1) {
                Gvar.var_233[Gvar.var_225].Var12 = 0;
                await Func.func426();
                if (Gvar.var_225 == Gvar.var_553) {
                    Gvar.var_896 = 0;
                }
                await Func.func427();
                if (Gvar.var_225 == Gvar.var_554) {
                    Gvar.var_897 = 0;
                }
                await Func.func428();
                if (Gvar.var_225 == Gvar.var_555) {
                    Gvar.var_898 = 0;
                }
                await Func.setMessage("DISCの呪いは解除された！", "", 7, false, false, false);
            }
            if (Gvar.var_1950 == 7) {
                await Func.func340(); // キー入力による選択処理
                Gvar.var_233[Gvar.var_225].Var12 = 2;
                await Func.setMessage("" + Gvar.strengthen_item_name + "は", "漆黒のオーラに包まれた！", 7, false, false, false);
            }
            await Func.AutoDraw(10);
            Gvar.var_1950 = 0;
            await Func.func437();
            Gvar.var_1252 = 0;
            Gvar.var_217 = 1;
            await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
            return;
        }
        Gvar.var_1253 = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_1252 = 2;
        Adap.DSPLAY(225);
        Gvar.var_1299 = 2;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.strengthen_item_name = Gvar.item_name;
        Gvar.var_1986 = 1;
        Gvar.var_1987 = Adap.rnd(30);
        if (Gvar.var_1987 == 0) {
            Gvar.var_1986 = 3;
        }
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400 && Gvar.var_233[Gvar.var_225].Var4 >= 95) {
            Gvar.var_1986 = 1;
        }
        if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 500 && Gvar.var_233[Gvar.var_225].Var3 >= 80) {
            Gvar.var_1986 = 1;
        }
        if (Gvar.dungeon_number == 99) {
            Gvar.var_1986 = 1;
        }
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
            Gvar.var_233[Gvar.var_225].Var4 = Gvar.var_233[Gvar.var_225].Var4 + Gvar.var_1986;
            Gvar.var_233[Gvar.var_225].Var14 = 1;
            if (Gvar.var_476[Gvar.var_225] == 1) {
                Gvar.var_580 = Gvar.var_580 + Gvar.var_1986;
                Gvar.var_894 = Gvar.var_894 + Gvar.var_1986;
            }
            if (Gvar.var_477[Gvar.var_225] == 1) {
                Gvar.var_581 = Gvar.var_581 + Gvar.var_1986;
                Gvar.var_895 = Gvar.var_895 + Gvar.var_1986;
            }
        }
        if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 500) {
            Gvar.var_233[Gvar.var_225].Var3 = Gvar.var_233[Gvar.var_225].Var3 + Gvar.var_1986 * 5;
            if (Gvar.var_233[Gvar.var_225].Var3 >= 99) {
                Gvar.var_233[Gvar.var_225].Var3 = 99;
            }
        }
        Adap.DSPLAY(112);  // 刀の切れる音 or 強化した時のシャキーン 効果音
        if (Gvar.var_1986 == 1) {
            if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
                await Func.setMessage("" + Gvar.strengthen_item_name + "が", "強くなった！", 7, false, false, false);
            }
            if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 500) {
                await Func.setMessage("" + Gvar.strengthen_item_name + "の", "エネルギーが増えた！", 7, false, false, false);
            }
        }
        if (Gvar.var_1986 == 3) {
            if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
                await Func.setMessage("" + Gvar.strengthen_item_name + "が", "ものすごく強くなった！", 7, false, false, false);
            }
            if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 500) {
                await Func.setMessage("" + Gvar.strengthen_item_name + "の", "エネルギーがたくさん増えた！", 7, false, false, false);
            }
        }
        if (Gvar.var_233[Gvar.var_225].Var12 == 1) {
            await Func.func340(); // キー入力による選択処理
            Adap.DSPLAY(192);
            Gvar.var_233[Gvar.var_225].Var12 = 0;
            await Func.func426();
            if (Gvar.var_225 == Gvar.var_553) {
                Gvar.var_896 = 0;
            }
            await Func.func427();
            if (Gvar.var_225 == Gvar.var_554) {
                Gvar.var_897 = 0;
            }
            await Func.func428();
            if (Gvar.var_225 == Gvar.var_555) {
                Gvar.var_898 = 0;
            }
            await Func.setMessage("DISCの呪いが解除された！", "", 7, false, false, false);
        }
        if (Gvar.var_1950 == 7) {
            Gvar.var_233[Gvar.var_225].Var12 = 2;
            await Func.setMessage("" + Gvar.strengthen_item_name + "は", "漆黒のオーラに包まれた！", 7, true, false, false);
        }
        await Func.func437();
        await Func.AutoDraw(10);
        Gvar.var_1252 = 0;
        Gvar.var_1950 = 0;
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func444}
