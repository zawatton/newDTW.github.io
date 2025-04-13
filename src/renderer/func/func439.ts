import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func439(this: any) {
        Adap.dbgprt(439);
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        if (Gvar.var_225 == Gvar.var_1967 && Gvar.var_1965 == 0) {
            await Func.setMessage("それは今使っているDISCです。",
                                    "", 7, true, false, false);
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
            await Func.func051(); // キー入力待ち処理
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        Gvar.var_1945 = 0;
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.disc_rarity = Gvar.var_233[Gvar.var_225].Var13;
        Gvar.var_862[Gvar.belongings_item_list][0] = 1;
        Gvar.var_233[Gvar.var_225].Var14 = 1;
        if (Gvar.var_225 == 0) {
            Gvar.var_1968 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
            Gvar.var_78[Gvar.var_1968].Var14 = 1;
        }
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_1969 = Gvar.item_name;
        Gvar.var_1966 = Gvar.var_225;
        await Func.func437();
        if (Gvar.var_862[567][0] == 0 && Gvar.var_375 == 0) {
            Gvar.var_862[567][0] = 1;
            await Func.func492(); // アイテムリスト呼び出し
            await Func.setMessage("なんと" + Gvar.var_1938 + "は",
                                    "ｱｳﾞﾄﾞｩﾙのDISCだった！", 7, true, false, false);
        }
        Gvar.var_1970 = Adap.rnd(30);
        if (Gvar.var_1970 == 0) {
            await Func.func440(); // アヴドゥルのdisc効果(全て識別できた場合(ランダム))
            return;
        }
        await Func.setMessage("フーム…  このアイテムは、",
                                "" + Gvar.var_1969 + "のようだ", 7, true, false, true);

        if (Gvar.var_233[Gvar.var_1966].Var0 >= 100 && Gvar.var_233[Gvar.var_1966].Var0 < 400 && Gvar.var_233[Gvar.var_1966].Var4 >= 1) {
            await Func.setMessage("しかも、このDISCは基本能力に加えて",
                                    "＋" + Gvar.var_233[Gvar.var_1966].Var4 + "のｽﾀﾝﾄﾞﾊﾟﾜｰがついているぞ", 7, false, false, true);
        }
        // おそらく爆弾化されている？ Gvar.var_233[Gvar.var_1966].Var15 == 2
        if (Gvar.var_233[Gvar.var_1966].Var15 == 2) {
            await Func.setMessage("しかし…",
                                    "なんとなく危険な感じがするな…", 7, false, false, true);
        }
        await Func.AutoDraw(5);
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func439}
