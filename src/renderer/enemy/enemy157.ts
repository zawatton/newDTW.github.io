import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// No = 157 アナスイの特殊能力
async function enemy157(this: any) {
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
            if (Gvar.var_233[Gvar.var_475].Var0 >= 800 && Gvar.var_233[Gvar.var_475].Var0 < 900 && Gvar.var_233[Gvar.var_475].Var11 == 0) {
                Gvar.var_474 = 1;
                break;
            }
        }
        Gvar.var_2885 = Adap.rnd(3);
        if (Gvar.var_2885 != 0) {
            Gvar.var_474 = 0;
        }
        if (Gvar.var_474 == 0) {
            return;
        }
        await Func.setMessage1("いいもの持ってるな…", "解体してやる！", 8, false, false, true);
        await Func.AutoDraw(15);
        Adap.DSPLAY(122);
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_412].Var7 = 1;
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
        if (Gvar.equip_disc[119]) {
            await Func.setMessage1("破壊されそうになったが", "柔らかくしていて平気だった。", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_2197 = 1;
            return;
        }
        Gvar.var_488 = Gvar.var_233[Gvar.var_225].Var0;
        await Music.func100(); // 効果音
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
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.target_item_name = Gvar.item_name;
        Gvar.var_225 = Gvar.var_475;
        await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        await Func.setMessage1("" + Gvar.target_item_name + "は", "バラバラにされてしまった！", 8, false, false, true);
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        await Func.AutoDraw(10);
        Gvar.var_2197 = 1;
        return;
}

export {enemy157}
