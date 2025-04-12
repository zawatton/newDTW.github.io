import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func227(this: any) {
        Adap.dbgprt(227);
        Gvar.var_978 = "disc.txt";
        Gvar.var_979 = "";
        Gvar.var_979 = Gvar.var_979 + "ディアボロがやられた時、またはＦ６キーを押した時に" + "\n";
        Gvar.var_979 = Gvar.var_979 + "装備しているDISCの情報が自動的に記録されます。" + "\n";
        Gvar.var_979 = Gvar.var_979 + "" + "\n";
        Gvar.var_980 = 1;
        Gvar.var_979 = Gvar.var_979 + "■■■攻撃ｽﾀﾝﾄﾞ■■■■■■■■■■■■■■" + "\n";
        if (Gvar.kougeki_disc_id  != 0) {
            await Func.func426();
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_553].Var0;
            Gvar.disc_rarity = Gvar.var_233[Gvar.var_553].Var13;
            await Func.func492(); // アイテムリスト呼び出し
            if (Gvar.var_233[Gvar.var_553].Var4 == 0 && Gvar.var_233[Gvar.var_553].Var19 <= 1) {
                Gvar.var_981 = "" + Gvar.item_name;
            }
            if (Gvar.var_233[Gvar.var_553].Var4 == 0 && Gvar.var_233[Gvar.var_553].Var19 > 1) {
                Gvar.var_981 = "" + Gvar.item_name + " ★" + Gvar.var_233[Gvar.var_553].Var19;
            }
            if (Gvar.var_233[Gvar.var_553].Var4 > 0 && Gvar.var_233[Gvar.var_553].Var19 <= 1) {
                Gvar.var_981 = "" + Gvar.item_name + "+" + Gvar.var_233[Gvar.var_553].Var4;
            }
            if (Gvar.var_233[Gvar.var_553].Var4 > 0 && Gvar.var_233[Gvar.var_553].Var19 > 1) {
                Gvar.var_981 = "" + Gvar.item_name + "+" + Gvar.var_233[Gvar.var_553].Var4 + " ★" + Gvar.var_233[Gvar.var_553].Var19;
            }
            Gvar.var_979 = Gvar.var_979 + "" + Gvar.var_981 + "\n";
            Gvar.var_982 = 20;
            for (let cnt2 = 0; cnt2 < Gvar.var_233[Gvar.var_553].Var19; ++cnt2) {
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_553]["Var" + Gvar.var_982];
                await Func.func492(); // アイテムリスト呼び出し
                if (Gvar.var_812 == 1) {
                    Gvar.var_979 = Gvar.var_979 + "  [攻]" + Gvar.item_ability_description + "\n";
                }
                if (Gvar.var_812 == 2) {
                    Gvar.var_979 = Gvar.var_979 + "  [防]" + Gvar.item_ability_description + "\n";
                }
                if (Gvar.var_812 == 3) {
                    Gvar.var_979 = Gvar.var_979 + "  [－]" + Gvar.item_ability_description + "\n";
                }
                if (Gvar.var_812 == 4) {
                    Gvar.var_979 = Gvar.var_979 + "  [能]" + Gvar.item_ability_description + "\n";
                }
                Gvar.var_982++;
            }
        }
        Gvar.var_979 = Gvar.var_979 + "" + "\n";
        Gvar.var_979 = Gvar.var_979 + "■■■防御ｽﾀﾝﾄﾞ■■■■■■■■■■■■■■" + "\n";
        if (Gvar.bougyo_disc_id != 0) {
            await Func.func427();
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_554].Var0;
            Gvar.disc_rarity = Gvar.var_233[Gvar.var_554].Var13;
            await Func.func492(); // アイテムリスト呼び出し
            if (Gvar.var_233[Gvar.var_554].Var4 == 0 && Gvar.var_233[Gvar.var_554].Var19 <= 1) {
                Gvar.var_981 = "" + Gvar.item_name;
            }
            if (Gvar.var_233[Gvar.var_554].Var4 == 0 && Gvar.var_233[Gvar.var_554].Var19 > 1) {
                Gvar.var_981 = "" + Gvar.item_name + " ★" + Gvar.var_233[Gvar.var_554].Var19;
            }
            if (Gvar.var_233[Gvar.var_554].Var4 > 0 && Gvar.var_233[Gvar.var_554].Var19 <= 1) {
                Gvar.var_981 = "" + Gvar.item_name + "+" + Gvar.var_233[Gvar.var_554].Var4;
            }
            if (Gvar.var_233[Gvar.var_554].Var4 > 0 && Gvar.var_233[Gvar.var_554].Var19 > 1) {
                Gvar.var_981 = "" + Gvar.item_name + "+" + Gvar.var_233[Gvar.var_554].Var4 + " ★" + Gvar.var_233[Gvar.var_554].Var19;
            }
            Gvar.var_979 = Gvar.var_979 + "" + Gvar.var_981 + "\n";
            Gvar.var_982 = 20;
            for (let cnt2 = 0; cnt2 < Gvar.var_233[Gvar.var_554].Var19; ++cnt2) {
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_554]["Var" + Gvar.var_982];
                await Func.func492(); // アイテムリスト呼び出し
                if (Gvar.var_812 == 1) {
                    Gvar.var_979 = Gvar.var_979 + "  [攻]" + Gvar.item_ability_description + "\n";
                }
                if (Gvar.var_812 == 2) {
                    Gvar.var_979 = Gvar.var_979 + "  [防]" + Gvar.item_ability_description + "\n";
                }
                if (Gvar.var_812 == 3) {
                    Gvar.var_979 = Gvar.var_979 + "  [－]" + Gvar.item_ability_description + "\n";
                }
                if (Gvar.var_812 == 4) {
                    Gvar.var_979 = Gvar.var_979 + "  [能]" + Gvar.item_ability_description + "\n";
                }
                Gvar.var_982++;
            }
        }
        Gvar.var_979 = Gvar.var_979 + "" + "\n";
        Gvar.var_979 = Gvar.var_979 + "■■■能力ｽﾀﾝﾄﾞ■■■■■■■■■■■■■■" + "\n";
        if (Gvar.nouryoku_disc_id != 0) {
            await Func.func428();
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_555].Var0;
            Gvar.disc_rarity = Gvar.var_233[Gvar.var_555].Var13;
            await Func.func492(); // アイテムリスト呼び出し
            if (Gvar.var_233[Gvar.var_555].Var4 == 0 && Gvar.var_233[Gvar.var_555].Var19 <= 1) {
                Gvar.var_981 = "" + Gvar.item_name;
            }
            if (Gvar.var_233[Gvar.var_555].Var4 == 0 && Gvar.var_233[Gvar.var_555].Var19 > 1) {
                Gvar.var_981 = "" + Gvar.item_name + " ★" + Gvar.var_233[Gvar.var_555].Var19;
            }
            if (Gvar.var_233[Gvar.var_555].Var4 > 0 && Gvar.var_233[Gvar.var_555].Var19 <= 1) {
                Gvar.var_981 = "" + Gvar.item_name + "+" + Gvar.var_233[Gvar.var_555].Var4;
            }
            if (Gvar.var_233[Gvar.var_555].Var4 > 0 && Gvar.var_233[Gvar.var_555].Var19 > 1) {
                Gvar.var_981 = "" + Gvar.item_name + "+" + Gvar.var_233[Gvar.var_555].Var4 + " ★" + Gvar.var_233[Gvar.var_555].Var19;
            }
            Gvar.var_979 = Gvar.var_979 + "" + Gvar.var_981 + "\n";
            Gvar.var_982 = 20;
            for (let cnt2 = 0; cnt2 < Gvar.var_233[Gvar.var_555].Var19; ++cnt2) {
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_555]["Var" + Gvar.var_982];
                await Func.func492(); // アイテムリスト呼び出し
                if (Gvar.var_812 == 1) {
                    Gvar.var_979 = Gvar.var_979 + "  [攻]" + Gvar.item_ability_description + "\n";
                }
                if (Gvar.var_812 == 2) {
                    Gvar.var_979 = Gvar.var_979 + "  [防]" + Gvar.item_ability_description + "\n";
                }
                if (Gvar.var_812 == 3) {
                    Gvar.var_979 = Gvar.var_979 + "  [－]" + Gvar.item_ability_description + "\n";
                }
                if (Gvar.var_812 == 4) {
                    Gvar.var_979 = Gvar.var_979 + "  [能]" + Gvar.item_ability_description + "\n";
                }
                Gvar.var_982++;
            }
        }
        Gvar.var_980 = 0;
        for (let cnt1 = 0; cnt1 < 40; ++cnt1) {
            Gvar.var_979 = Gvar.var_979 + "" + "\n";
        }
        await Adap.bsave(Gvar.var_978, Gvar.data = Gvar.var_979, null, null);
        return;
}

export {func227}
