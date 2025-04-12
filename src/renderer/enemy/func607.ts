import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func607(this: any) {
        Adap.dbgprt(607);
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        Gvar.var_240 = 0;
        Gvar.var_2871 = Gvar.var_66 - 5;
        Gvar.var_2872 = Gvar.var_66 + 5;
        Gvar.var_2873 = Gvar.var_67 + 5;
        Gvar.var_2874 = Gvar.var_67 - 5;
        if (Gvar.var_2871 < 5) {
            Gvar.var_2871 = 5;
        }
        if (Gvar.var_2874 < 5) {
            Gvar.var_2874 = 5;
        }
        if (Gvar.var_2872 > Gvar.var_33) {
            Gvar.var_2872 = Gvar.var_33;
        }
        if (Gvar.var_2873 > Gvar.var_34) {
            Gvar.var_2873 = Gvar.var_34;
        }
        if (Gvar.var_83[Gvar.var_673].Var1 > Gvar.var_2621 && Gvar.var_83[Gvar.var_673].Var1 < Gvar.var_2622 && Gvar.var_83[Gvar.var_673].Var2 > Gvar.var_2624 && Gvar.var_83[Gvar.var_673].Var2 < Gvar.var_2623) {
            Gvar.var_83[Gvar.var_673].Var21 = 1;
            Gvar.var_411 = 1;

            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 2;

            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 3;

            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 4;

            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 3;

            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 4;

            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 6;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 7;
            await Func.func337(); // メッセージ表示処理(自動)
        }
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1429 = 1;
        Gvar.var_1430 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_1431 = Gvar.var_83[Gvar.var_673].Var2;

        Adap.DSPLAY(116);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1429 = Gvar.var_1429 + 1;
        }
        Gvar.var_742 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1429 = 0;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1425 = 1;
        Gvar.var_1426 = Adap.rnd(3);
        if (Gvar.var_1426 == 0) {
            Gvar.var_1427 = 160;
            Gvar.var_1428 = 0;
        }
        if (Gvar.var_1426 == 1) {
            Gvar.var_1427 = 0;
            Gvar.var_1428 = 0;
        }
        if (Gvar.var_1426 == 2) {
            Gvar.var_1427 = 320;
            Gvar.var_1428 = 0;
        }
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            if (Gvar.var_1426 == 0) {
                Gvar.var_1427 = Gvar.var_1427;
                Gvar.var_1428 = Gvar.var_1428 + 40;
            }
            if (Gvar.var_1426 == 1) {
                Gvar.var_1427 = Gvar.var_1427 + 40;
                Gvar.var_1428 = Gvar.var_1428 + 40;
            }
            if (Gvar.var_1426 == 2) {
                Gvar.var_1427 = Gvar.var_1427 - 40;
                Gvar.var_1428 = Gvar.var_1428 + 40;
            }
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1425 = 0;
        Gvar.var_83[Gvar.var_673].Var18 = 0;
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_411 = 0;
        Gvar.var_83[Gvar.var_673].Var21 = 0;
        await Func.func584(); // 射撃攻撃を受けた時の回避動作処理(弾丸を止める、燃え尽きる等)
        if (Gvar.var_2803 == 1) {
            return;
        }
        Gvar.var_747 = 1;
        Gvar.var_389 = 2;

        Adap.DSPLAY(104);
        Gvar.var_2852 = 30;
        if (Gvar.var_83[Gvar.var_673].Var39 >= 2) {
            Gvar.var_2852 = (Gvar.var_83[Gvar.var_673].Var39 - 1) * 2 + Gvar.var_2852;
        }
        if (Gvar.var_128 >= 1) {
            Gvar.var_2852 = Math.floor(Gvar.var_2852 * 3 / 2);
        }
        if (Gvar.equip_disc[205] == 1) {
            Gvar.var_2852 = Math.floor(Gvar.var_2852 * 2 / 3);
        }
        // アイテム「鉄球」を使用して射撃攻撃ダメージがアップしている場合
        if (Gvar.var_168 == 1) {
            Gvar.var_2852 = Math.floor(Gvar.var_2852 * 2 / 3);
        }
        Gvar.var_209 = Gvar.var_2852;
        await Func.setMessage1("ﾋﾟｽﾄﾙｽﾞの弾丸を喰らった！", "" + Gvar.var_2852 + "のダメージをうけた！", 8, false, false, false);
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        await Func.AutoDraw(8);
        Gvar.var_389 = 0;
        Gvar.var_211 = Gvar.var_211 - Gvar.var_2852;
        Gvar.var_208 = Gvar.var_208 + Gvar.var_2852;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 240;
        }
        Gvar.var_240 = 0;
        return;
}

export {func607}
