import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func445(this: any) {
        Adap.dbgprt(445);
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        Gvar.var_1981 = Gvar.var_233[Gvar.var_225].Var0;
        if (Gvar.var_862[Gvar.var_1981][0] == 0 && Gvar.var_262 == 0) {
            await Func.setMessage("何のDISCかわからないので研究できない",
                                    "", 7, true, false, false);
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
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
            if (Gvar.var_1984 == 3 || Gvar.var_1984 == 4 || Gvar.var_1984 == 5 || Gvar.var_1984 == 7 || Gvar.var_1984 == 8 || Gvar.var_1984 == 9 || Gvar.var_1984 == 10 || Gvar.var_1984 == 11) {
                Gvar.var_1983 = 1;
            }
        }
        // 7部コミック
        if (Gvar.var_1950 == 7) {
            Gvar.var_1983 = 1;
        }
        await Func.setMessage("" + Gvar.var_1937 + "を読んだ。",
                                "", 7, true, false, false);
        if (Gvar.var_1983 == 0) {
            await Func.setMessage("" + Gvar.strengthen_item_name + "の研究は",
                                    "この単行本ではできなかった…", 7, false, false, false);
            await Func.AutoDraw(10);
            await Func.func437();
            Gvar.var_1252 = 0;
            Gvar.var_1950 = 0;
            Gvar.var_217 = 1;
            await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
            return;
        }
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.strengthen_item_name = Gvar.item_name;
        Gvar.var_1988 = Gvar.var_233[Gvar.var_225].Var7 + Gvar.var_233[Gvar.var_225].Var8;
        if (Gvar.var_1988 >= 10) {
            await Func.setMessage("" + Gvar.strengthen_item_name + "の",
                                    "容量は限界のようだ", 7, false, false, false);
            await Func.AutoDraw(10);
            await Func.func437();
            Gvar.var_1252 = 0;
            Gvar.var_1950 = 0;
            Gvar.var_217 = 1;
            await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
            return;
        }
        Gvar.var_1253 = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_1252 = 2;
        Adap.DSPLAY(128);
        Gvar.var_1299 = 2;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        Gvar.var_233[Gvar.var_225].Var7 = Gvar.var_233[Gvar.var_225].Var7 + 1;
        Adap.DSPLAY(112);  // 刀の切れる音 or 強化した時のシャキーン 効果音
        await Func.setMessage("" + Gvar.strengthen_item_name + "の",
                                "容量が増えた！", 7, false, false, false);
        await Func.func437();
        await Func.AutoDraw(10);
        Gvar.var_1252 = 0;
        Gvar.var_1950 = 0;
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func445}
