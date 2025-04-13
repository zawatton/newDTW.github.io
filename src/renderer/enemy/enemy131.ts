import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 131 ジョルノの特殊能力
async function enemy131(this: any) {
        Gvar.var_412 = Gvar.var_673;
        if (Gvar.var_83[Gvar.var_412].Var17 != 0 || Gvar.var_83[Gvar.var_412].Var23 != 0) {
            return;
        }
        if (Gvar.var_224 == 0 || Gvar.var_97 > 90 || Gvar.var_336 > 90) {
            return;
        }
        Gvar.var_474 = 0;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            Gvar.var_475 = Adap.rnd(Gvar.var_224);
            Gvar.var_475 = Gvar.var_475 + 1;
            if (Gvar.var_476[Gvar.var_475] == 0 && Gvar.var_477[Gvar.var_475] == 0 && Gvar.var_478[Gvar.var_475] == 0 && Gvar.var_479[Gvar.var_475] == 0 && Gvar.var_233[Gvar.var_475].Var11 == 0 && Gvar.var_233[Gvar.var_475].Var0 != 650 && Gvar.var_233[Gvar.var_475].Var0 != 651 && Gvar.var_233[Gvar.var_475].Var0 != 653 && Gvar.var_233[Gvar.var_475].Var0 != 654) {
                Gvar.var_474 = 1;
                break;
            }
        }
        Gvar.var_2885 = Adap.rnd(5);
        if (Gvar.var_2885 != 0) {
            Gvar.var_474 = 0;
        }
        if (Gvar.var_474 == 0) {
            return;
        }
        await Func.setMessage("「ゴールド・エクスペリエンス！」", "", 8, false, false, false);
        await Func.AutoDraw(15);
        Adap.DSPLAY(121);
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_412].Var7 = 1;
        Gvar.var_743 = 1; //スタンド像付与フラグON
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_83[Gvar.var_412].Var7 = 0;
        Gvar.var_742 = 0;
        Gvar.var_743 = 0; //スタンド像付与フラグOFF
        if (Gvar.nouryoku_disc_id == 202) {
            await Func.setMessage("ﾎﾜｲﾄｱﾙﾊﾞﾑの能力によって", "生命が生まれるのを防いだ！", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_2197 = 1;
            return;
        }
        if (Gvar.equip_disc[360] == 1) {
            await Func.setMessage("装備DISCの効果で きかなかった", "", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_2197 = 1;
            return;
        }
        Gvar.var_225 = Gvar.var_475;
        if (Gvar.var_233[Gvar.var_225].Var0 >= 800 && Gvar.var_233[Gvar.var_225].Var0 < 900) {
            Gvar.var_455 = Gvar.var_66;
            Gvar.var_456 = Gvar.var_67;
            Gvar.var_448 = Gvar.var_66;
            Gvar.var_450 = Gvar.var_67;
            Gvar.var_1903 = 1;
            await Func.func414(); // ヤバいもの関係の容量設定？？
            Gvar.var_1903 = 0;
        }
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_475].Var0;
        Gvar.disc_rarity = Gvar.var_233[Gvar.var_475].Var13;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.target_item_name = Gvar.item_name;
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            Gvar.var_233[Gvar.var_475]["Var" + cnt2] = 0;
        }
        Gvar.var_2892 = "";
        Gvar.var_233[Gvar.var_475].Var0 = 650;
        Gvar.var_2892 = "ｶｴﾙ";
        Adap.DSPLAY(200);
        await Func.setMessage("" + Gvar.target_item_name + "は", "" + Gvar.var_2892 + "に生まれ変わった！", 8, false, false, false);
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        await Func.AutoDraw(10);
        Gvar.var_2197 = 1;
        return;
}

export {enemy131}
