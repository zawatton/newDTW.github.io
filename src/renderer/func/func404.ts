import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// アイテムを置く時の動作処理
async function func404(this: any) {
        Adap.dbgprt(404);
        if (Gvar.var_72[Gvar.var_66][Gvar.var_67] >= 2) {
            Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            Gvar.var_1866 = 0;
            Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            await Func.setMessage("ここには置くことができない。", "", 7, false, false, false);
            await Func.AutoDraw(3);
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        await Func.func405();
        // No = 0 なので、拠点(ホテル、亀、)
        if (Gvar.dungeon_number == 0 && Gvar.var_66 == 15 && Gvar.var_67 == 21) {
            Gvar.var_1867 = Gvar.belongings_item_list;
            await Func.setMessage("" + Gvar.item_name + "を捨てた", "", 7, false, false, false);
            if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                await Func.func430();
            }
            await Func.func433(); // アイテム配列(所持アイテム)初期化関数
            Adap.DSPLAY(148);
            Gvar.var_557 = 1;
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_557++;
            }
            Gvar.var_557 = 0;
            Gvar.belongings_item_list = Gvar.var_1867;
            await Func.func492(); // アイテムリスト呼び出し
            // Gvar.var_550は亀へ投資した栄養の合計
            Gvar.var_550 = Gvar.var_550 + Gvar.buying_price;
            if (Gvar.var_550 > 999999) {
                Gvar.var_550 = 999999;
            }
            Gvar.var_558 = 0;
            // Gvar.var_559は亀の成長レベル
            if (Gvar.var_559 == 0 && Gvar.var_550 >= 10000) { // Ver0.1401にて修正。5000 → 10000
                Gvar.var_559 = 1;
                Gvar.var_558 = 1;
            }
            if (Gvar.var_559 == 1 && Gvar.var_550 >= 20000) { // Ver0.1401にて修正。10000 → 20000
                Gvar.var_559 = 2;
                Gvar.var_558 = 1;
            }
            if (Gvar.var_559 == 2 && Gvar.var_550 >= 40000) { // Ver0.1401にて修正。20000 → 40000
                Gvar.var_559 = 3;
                Gvar.var_558 = 1;
            }
            if (Gvar.var_559 == 3 && Gvar.var_550 >= 80000) { // Ver0.1401にて修正。40000 → 80000
                Gvar.var_559 = 4;
                Gvar.var_558 = 1;
            }
            if (Gvar.var_558 == 1) {
                await Func.func293(); // ダンジョンマップ初期化処理(+ヴェネチアホテル)
                Gvar.var_560 = 1;
                Gvar.var_561 = 5; // マップX軸原点の初期値5 (安易に変更すると壁の中になるのでワープしてしまう)
                Gvar.var_562 = 5; // Ver0.1404にて修正。0 → 5。実験中に0へ変更したのを戻し忘れ。マップY軸原点の初期値5 (安易に変更すると壁の中になるのでワープしてしまう)
                if (Gvar.var_559 == 0) {
                    await Func.func288(); // ヴェネチアホテル+亀初期マップ+ローマ・ティベレ河マップ配置処理(亀の成長0)
                }
                if (Gvar.var_559 == 1) {
                    await Func.func289(); // ヴェネチアホテル+亀マップ配置処理(亀の成長1)
                }
                if (Gvar.var_559 == 2) {
                    await Func.func290(); // ヴェネチアホテル+亀マップ配置処理(亀の成長2)
                }
                if (Gvar.var_559 == 3) {
                    await Func.func291(); // ヴェネチアホテル+亀マップ配置処理(亀の成長3)
                }
                if (Gvar.var_559 == 4) {
                    await Func.func292(); // ヴェネチアホテル+亀マップ配置処理(亀の成長4)
                }
                await Func.func248();

                await Func.setMessage("亀はアイテムを養分として", "成長したようだ。", 7, false, false, false);

                if (Gvar.var_559 == 4) {
                    await Func.setMessage("亀はアイテムを養分として", "最大まで成長したようだ。", 7, false, false, false);
                }
                await Func.AutoDraw(5);
            }
            Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        if (Gvar.var_446 == 0) {
            Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            Gvar.var_1866 = 0;
            Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            await Func.setMessage("アイテムを置くところが無いぞ", "", 7, false, false, false);
            await Func.AutoDraw(3);
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        await Func.func724();
        Gvar.var_77[Gvar.var_448][Gvar.var_450] = Gvar.var_854;
        Gvar.var_78[Gvar.var_854].Var0 = Gvar.var_1846;
        Gvar.var_78[Gvar.var_854].Var1 = Gvar.var_448;
        Gvar.var_78[Gvar.var_854].Var2 = Gvar.var_450;
        Gvar.var_78[Gvar.var_854].Var3 = Gvar.var_1837;
        Gvar.var_78[Gvar.var_854].Var4 = Gvar.var_1835;
        Gvar.var_78[Gvar.var_854].Var5 = Gvar.var_1847;
        Gvar.var_78[Gvar.var_854].Var6 = Gvar.var_1848;
        Gvar.var_78[Gvar.var_854].Var7 = Gvar.var_1838;
        Gvar.var_78[Gvar.var_854].Var8 = Gvar.var_1849;
        Gvar.var_78[Gvar.var_854].Var9 = Gvar.var_71[Gvar.var_448][Gvar.var_450];
        Gvar.var_78[Gvar.var_854].Var10 = 1;
        Gvar.var_78[Gvar.var_854].Var11 = Gvar.var_1850;
        Gvar.var_78[Gvar.var_854].Var12 = Gvar.var_1851;
        Gvar.var_78[Gvar.var_854].Var13 = Gvar.var_1833;
        Gvar.var_78[Gvar.var_854].Var14 = Gvar.var_1834;
        Gvar.var_78[Gvar.var_854].Var15 = Gvar.var_1852;
        Gvar.var_78[Gvar.var_854].Var16 = Gvar.var_1853;
        Gvar.var_78[Gvar.var_854].Var17 = Gvar.var_1854;
        Gvar.var_78[Gvar.var_854].Var18 = Gvar.var_1855;
        Gvar.var_78[Gvar.var_854].Var19 = Gvar.var_1836;
        Gvar.var_78[Gvar.var_854].Var20 = Gvar.var_1856;
        Gvar.var_78[Gvar.var_854].Var21 = Gvar.var_1857;
        Gvar.var_78[Gvar.var_854].Var22 = Gvar.var_1858;
        Gvar.var_78[Gvar.var_854].Var23 = Gvar.var_1859;
        Gvar.var_78[Gvar.var_854].Var24 = Gvar.var_1860;
        Gvar.var_78[Gvar.var_854].Var25 = Gvar.var_1861;
        Gvar.var_78[Gvar.var_854].Var26 = Gvar.var_1862;
        Gvar.var_78[Gvar.var_854].Var27 = Gvar.var_1863;
        Gvar.var_78[Gvar.var_854].Var28 = Gvar.var_1864;
        Gvar.var_78[Gvar.var_854].Var29 = Gvar.var_1865;
        Gvar.belongings_item_list = Gvar.var_1846;
        Gvar.var_321 = Gvar.var_854;
        await Func.func398(); // 道具(メニュー画面/道具)へ直接表示されるアイテム表示
        Adap.DSPLAY(133); // アイテムを置いた時の効果音
        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            await Func.func430();
        }
        await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        await Func.setMessage("" + Gvar.disp_item_name + " を置いた", "", 7, false, false, false);
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func404}
