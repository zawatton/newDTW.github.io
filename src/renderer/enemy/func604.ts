import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func604(this: any) {
        Adap.dbgprt(604);
        Gvar.var_2862 = Adap.rnd(2);
        if (Gvar.var_2862 == 0 && Gvar.var_83[Gvar.var_673].Var0 == 30 && Gvar.var_83[Gvar.var_673].Var29 == 0) {
            Gvar.var_240 = 0;
            Gvar.var_83[Gvar.var_673].Var7 = 0;
            await Func.setMessage1("ﾎﾙ･ﾎｰｽはﾄﾄ神のﾏﾝｶﾞを読んだ。", "", 8, false, false, false);
            Adap.DSPLAY(118);
            Gvar.var_83[Gvar.var_673].Var21 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                Gvar.var_411 = 4;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_411 = 5;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_198 = 1; // メッセージウィンドウ開く
                Gvar.var_300 = 0;
            }
            Gvar.var_411 = 6;
            await Func.setMessage1("ﾎﾙ･ﾎｰｽ「新しいﾍﾟｰｼﾞが現れたぞ…」", "", 8, true, false, true);
            Adap.DSPLAY(118);
            await Func.setMessage1("【ﾎﾙ･ﾎｰｽの次の攻撃は…】", "", 8, true, false, false);
            Adap.DSPLAY(118);
            Gvar.var_1073 = Adap.rnd(4);
            if (Gvar.var_1073 <= 1) {
                await Func.setMessage1("【ウオオン！", "    いつもの２倍のダメージだッ！】", 8, true, false, false);
                Gvar.var_83[Gvar.var_673].Var29 = 1;
            }
            if (Gvar.var_1073 == 2) {
                await Func.setMessage1("【いつもの３倍ダメージだッ！", "    ﾎﾙ･ﾎｰｽは本当にラッキー！】", 8, true, false, false);
                Gvar.var_83[Gvar.var_673].Var29 = 2;
            }
            if (Gvar.var_1073 == 3) {
                await Func.setMessage1("【いつもの半分のダメージでした…", "  でもくじけちゃダメだよ ﾎﾙ･ﾎｰｽ！】", 8, true, false, false);
                Gvar.var_83[Gvar.var_673].Var29 = 3;
            }
            if (Gvar.var_1073 <= 1) {
                await Func.setMessage1("ﾎﾙ･ﾎｰｽ「こ…  こいつはすげえ！」", "", 8, false, false, true);
            }
            if (Gvar.var_1073 == 2) {
                await Func.setMessage1("ﾎﾙ･ﾎｰｽ「おれたちは無敵だッ！」", "", 8, false, false, true);
            }
            if (Gvar.var_1073 == 3) {
                await Func.setMessage1("ﾎﾙ･ﾎｰｽ「にゃんじゃああ～～～ッ", "      これは！？」", 8, false, false, true);
            }
            await Func.AutoDraw(6);
            Gvar.var_83[Gvar.var_673].Var21 = 0;
            Gvar.var_411 = 0;
            return;
        }
        Gvar.var_240 = 0;

        Adap.DSPLAY(141);
        Gvar.var_83[Gvar.var_673].Var21 = 1;
        Gvar.var_411 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_411 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_411 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_411 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_411 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_411 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_411 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_83[Gvar.var_673].Var21 = 0;
        Gvar.var_411 = 0;
        Adap.DSPLAY(116);
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1435 = 1;
        Gvar.var_1430 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_1431 = Gvar.var_83[Gvar.var_673].Var2;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1435 = Gvar.var_1435 + 1;
        }
        Gvar.var_742 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1435 = 0;
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_2862 = Adap.rnd(3);
        if (Gvar.var_2862 == 0 && Gvar.var_83[Gvar.var_673].Var0 == 46 && Gvar.var_337 < 50) {
            Gvar.var_2863 = 0;
            Gvar.var_2864 = Gvar.var_67 - 1;
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                Gvar.var_2865 = Gvar.var_66 - 1;
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    if (Gvar.var_71[Gvar.var_2865][Gvar.var_2864] != 0 && Gvar.var_71[Gvar.var_2865][Gvar.var_2864] != 13 && Gvar.var_77[Gvar.var_2865][Gvar.var_2864] == 0 && Gvar.var_80[Gvar.var_2865][Gvar.var_2864] == 0 && Gvar.var_73[Gvar.var_2865][Gvar.var_2864] == 0) {
                        Gvar.var_768 = 1;
                        Gvar.var_1728 = 1;
                        Gvar.var_2424 = 1;
                        Gvar.var_1550 = Gvar.var_2865;
                        Gvar.var_230 = Gvar.var_2864;
                        Gvar.var_2412 = 1;
                        await Func.func536();
                        Gvar.var_768 = 0;
                        Gvar.var_1728 = 0;
                        Gvar.var_2424 = 0;
                        Gvar.var_2412 = 0;
                        Gvar.var_83[Gvar.var_2611].Var22 = 1;
                        Gvar.var_83[Gvar.var_2611].Var9 = 0;
                        await Func.func337(); // メッセージ表示処理(自動)
                        Gvar.var_2863 = 1;
                    }
                    Gvar.var_2865++;
                }
                Gvar.var_2864++;
            }
            if (Gvar.var_2863 == 1) {
                Gvar.var_240 = 0;
                Adap.DSPLAY(205);
                await Func.setMessage1("「J・ガイルの旦那！」", "", 8, false, false, false);
                Gvar.var_83[Gvar.var_673].Var7 = 0;
                return;
            }
        }
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1434 = 1;
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
        Gvar.var_1434 = 0;
        Gvar.var_83[Gvar.var_673].Var18 = 0;
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        await Func.func584(); // 射撃攻撃を受けた時の回避動作処理(弾丸を止める、燃え尽きる等)
        if (Gvar.var_2803 == 1) {
            return;
        }
        Gvar.var_747 = 1;
        Gvar.var_389 = 2;

        Adap.DSPLAY(104);
        Gvar.var_2852 = 15;
        if (Gvar.var_83[Gvar.var_673].Var0 == 30) {
            Gvar.var_2852 = 30;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 30 && Gvar.var_83[Gvar.var_673].Var29 == 1) {
            Gvar.var_2852 = 60;
            Gvar.var_83[Gvar.var_673].Var29 = 0;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 30 && Gvar.var_83[Gvar.var_673].Var29 == 2) {
            Gvar.var_2852 = 90;
            Gvar.var_83[Gvar.var_673].Var29 = 0;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 30 && Gvar.var_83[Gvar.var_673].Var29 == 3) {
            Gvar.var_2852 = 15;
            Gvar.var_83[Gvar.var_673].Var29 = 0;
        }
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
        await Func.setMessage1("ｴﾝﾍﾟﾗｰの弾丸を喰らった！", "" + Gvar.var_2852 + "のダメージをうけた！", 8, false, false, false);
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        await Func.AutoDraw(8);
        Gvar.var_389 = 0;
        Gvar.var_211 = Gvar.var_211 - Gvar.var_2852;
        Gvar.var_208 = Gvar.var_208 + Gvar.var_2852;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 215;
            if (Gvar.var_83[Gvar.var_673].Var0 == 30) {
                Gvar.var_356 = 263;
            }
        }
        Gvar.var_240 = 0;
        return;
}

export {func604}
