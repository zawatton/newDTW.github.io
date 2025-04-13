import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Stand from '../stand/index'

async function func511(this: any) {
        Adap.dbgprt(511);
        Gvar.var_2257 = 0;
        if (Gvar.var_220 == 0 && Gvar.var_234 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            Gvar.activated_disc_id = Gvar.var_233[Gvar.var_225].Var0;
            if (Gvar.var_862[Gvar.activated_disc_id][0] == 1 && Gvar.var_233[Gvar.var_225].Var12 == 1 && Gvar.var_233[Gvar.var_225].Var14 == 1) {
                Gvar.var_2257 = 1;
            }
        }
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.var_2256 = Gvar.var_1876;
            Gvar.activated_disc_id = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
            if (Gvar.var_862[Gvar.activated_disc_id][0] == 1 && Gvar.var_486[Gvar.var_682][Gvar.var_225][12] == 1 && Gvar.var_486[Gvar.var_682][Gvar.var_225][14] == 1) {
                Gvar.var_2257 = 1;
            }
        }
        if (Gvar.var_234 == 1) {
            Gvar.activated_disc_id = Gvar.var_78[Gvar.var_321].Var0;
            if (Gvar.var_862[Gvar.activated_disc_id][0] == 1 && Gvar.var_78[Gvar.var_321].Var12 == 1 && Gvar.var_78[Gvar.var_321].Var14 == 1) {
                Gvar.var_2257 = 1;
            }
        }
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            await Func.func509(); // discの発動をしようとして、発動できない場所の時の動作処理
            return;
        }
        if (Gvar.var_2257 == 1) {
            await Func.func510(); // 発動しようとした際、discが呪われていた時の動作処理
            return;
        }
        if (Gvar.var_862[Gvar.activated_disc_id][0] == 0 && Gvar.activated_disc_id >= 100 && Gvar.activated_disc_id < 400) {
            
            Gvar.belongings_item_list = Gvar.activated_disc_id;
            
            await Func.func492(); // アイテムリスト呼び出し
            
            Gvar.unidentified_disc_name = Gvar.item_name;

            Gvar.var_862[Gvar.activated_disc_id][0] = 1;

            await Func.func492(); // アイテムリスト呼び出し
            Gvar.identified_disc_name = Gvar.item_name;
            await Func.setMessage("なんと" + Gvar.unidentified_disc_name + "は",
                                    "" + Gvar.identified_disc_name + "だった！", 7, false, false, false);
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
        }
        // No = 100 スタープラチナの発動処理
        if (Gvar.activated_disc_id == 100) {
            await Stand.item100();
            return;
        }
        // No = 101 シルバーチャリオッツの発動処理
        if (Gvar.activated_disc_id == 101) {
            await Stand.item101();
            return;
        }
        // No = 102 キングクリムゾンの発動処理
        if (Gvar.activated_disc_id == 102) {
            await Stand.item102();
            return;
        }
        // No = 103 エコーズAct3の発動処理
        if (Gvar.activated_disc_id == 103) {
            await Stand.item103();
            return;
        }
        // No = 104 ザ・ハンドの発動処理
        if (Gvar.activated_disc_id == 104) {
            await Stand.item104();
            return;
        }
        // No = 105 チリペッパーの発動処理
        if (Gvar.activated_disc_id == 105) {
            await Stand.item105();
            return;
        }
        // No = 106 クレイジーDの発動処理
        if (Gvar.activated_disc_id == 106) {
            await Stand.item106();
            return;
        }
        // No = 107 デス13の発動能力
        if (Gvar.activated_disc_id == 107) {
            await Stand.item107();
            return;
        }
        // No = 108 スティッキー・フィンガーズの発動処理
        if (Gvar.activated_disc_id == 108) {
            await Stand.item108();
            return;
        }
        // No = 109 マジシャンズレッドの発動処理
        if (Gvar.activated_disc_id == 109) {
            await Stand.item109();
            return;
        }
        // No = 111 ザ・ワールドの発動能力
        if (Gvar.activated_disc_id == 111) {
            await Stand.item111();
            return;
        }
        // No = 112 キラークイーンの発動処理
        if (Gvar.activated_disc_id == 112) {
            await Stand.item112();
            return;
        }
        // No = 113 クラッシュの発動処理
        if (Gvar.activated_disc_id == 113) {
            await Stand.item113();
            return;
        }
        // No = 114 ホワイトスネイクの発動処理
        if (Gvar.activated_disc_id == 114) {
            await Stand.item114();
            return;
        }
        // No = 115 Gエクスペリエンスの発動処理
        if (Gvar.activated_disc_id == 115) {
            await Stand.item115();
            return;
        }
        // No = 116 ハーミットパープルの発動能力
        if (Gvar.activated_disc_id == 116) {
            await Stand.item116();
            return;
        }
        // No = 117 ダークブルームーンの発動処理
        if (Gvar.activated_disc_id == 117) {
            await Stand.item117();
            return;
        }
        // No = 118 ダイバーダウンの発動処理
        if (Gvar.activated_disc_id == 118) {
            await Stand.item118();
            return;
        }
        // No = 119 スパイス・ガールの発動処理
        if (Gvar.activated_disc_id == 119) {
            await Stand.item119();
            return;
        }
        // No = 120 ストーンフリーの発動処理
        if (Gvar.activated_disc_id == 120) {
            await Stand.item120();
            return;
        }
        // No = 121 パープルヘイズの発動処理
        if (Gvar.activated_disc_id == 121) {
            await Stand.item121();
            return;
        }
        // No = 122 アヌビス神の発動処理 
        if (Gvar.activated_disc_id == 122) {
            await Stand.item122();
            return;
        }
        // No = 123 クリームの発動処理
        if (Gvar.activated_disc_id == 123) {
            await Stand.item123();
            return;
        }
        // No = 124 ムーディー・ブルースの発動処理
        if (Gvar.activated_disc_id == 124) {
            await Stand.item124();
            return;
        }
        // No = 200 スーパーフライの発動処理
        if (Gvar.activated_disc_id == 200) {
            await Stand.item200();
            return;
        }
        // No = 201 イエローテンパランスの発動処理
        if (Gvar.activated_disc_id == 201) {
            await Stand.item201();
            return;
        }
        // No = 202 ホワイトアルバムの発動処理
        if (Gvar.activated_disc_id == 202) {
            await Stand.item202();
            return;
        }
        // No = 203 ザ・フールの発動処理
        if (Gvar.activated_disc_id == 203) {
            await Stand.item203();
            return;
        }
        // No = 204 シアハートアタックの発動処理
        if (Gvar.activated_disc_id == 204) {
            await Stand.item204();
            return;
        }
        // No = 205 クラフトワークの発動処理
        if (Gvar.activated_disc_id == 205) {
            await Stand.item205();
            return;
        }
        // No = 206 オアシスの発動処理
        if (Gvar.activated_disc_id == 206) {
            await Stand.item206();
            return;
        }
        // No = 207 グレイトフル・デッドの発動処理 
        if (Gvar.activated_disc_id == 207) {
            await Stand.item207();
            return;
        }
        // No = 300 パール・ジャムの発動処理
        if (Gvar.activated_disc_id == 300) {
            await Stand.item300();
            return;
        }
        // No = 301 ハーヴェストの発動処理
        if (Gvar.activated_disc_id == 301) {
            await Stand.item301();
            return;
        }
        // No = 302 ハイウェイ・トゥ・ヘルの発動処理
        if (Gvar.activated_disc_id == 302) {
            await Stand.item302();
            return;
        }
        // No = 303 ドラゴンズ・ドリームの発動処理
        if (Gvar.activated_disc_id == 303) {
            await Stand.item303();
            return;
        }
        // No = 304 ウェザーリポートの発動処理
        if (Gvar.activated_disc_id == 304) {
            await Stand.item304();
            return;
        }
        // No = 305 シンデレラの発動処理
        if (Gvar.activated_disc_id == 305) {
            await Stand.item305();
            return;
        }
        // No = 306 マンハッタン・トランスファーの発動処理
        if (Gvar.activated_disc_id == 306) {
            await Stand.item306();
            return;
        }
        // No = 307 不明disc の発動処理 
        if (Gvar.activated_disc_id == 307) {
            await Stand.item307();
            return;
        }
        // No = 308 エボニーデビルの発動処理
        if (Gvar.activated_disc_id == 308) {
            await Stand.item308();
            return;
        }
        // No = 309 ソフト・マシーンの発動処理
        if (Gvar.activated_disc_id == 309) {
            await Stand.item309();
            return;
        }
        // No = 310 エンプレスの発動処理
        if (Gvar.activated_disc_id == 310) {
            await Stand.item310();
            return;
        }
        // No = 311 チープトリックの発動処理
        if (Gvar.activated_disc_id == 311) {
            await Stand.item311();
            return;
        }
        // No = 312 エアロスミスの発動処理
        if (Gvar.activated_disc_id == 312) {
            await Stand.item312();
            return;
        }
        // No = 313 ハイウェイスターの発動処理
        if (Gvar.activated_disc_id == 313) {
            await Stand.item313();
            return;
        }
        // No = 314 ストレイキャットの発動処理
        if (Gvar.activated_disc_id == 314) {
            await Stand.item314();
            return;
        }
        // No = 315 エピタフの発動処理
        if (Gvar.activated_disc_id == 315) {
            await Stand.item315();
            return;
        }
        // No = 316 サバイバーの発動処理
        if (Gvar.activated_disc_id == 316) {
            await Stand.item316();
            return;
        }
        // No = 317 キッスの発動処理
        if (Gvar.activated_disc_id == 317) {
            await Stand.item317();
            return;
        }
        // No = 318 ジャンピングJフラッシュの発動処理
        if (Gvar.activated_disc_id == 318) {
            await Stand.item318();
            return;
        }
        // No = 319 ボーイⅡマンの発動処理
        if (Gvar.activated_disc_id == 319) {
            await Stand.item319();
            return;
        }
        // No = 320 メタリカの発動処理
        if (Gvar.activated_disc_id == 320) {
            await Stand.item320();
            return;
        }
        // No = 393 ボヘミアンラプソディの発動処理
        if (Gvar.activated_disc_id == 393) {
            await Stand.item393();
            return;
        }
        // No = 394 キラータイガークイーンの発動処理
        if (Gvar.activated_disc_id == 394) {
            await Stand.item112();
            return;
        }
        // No = 395 バイツァ・ダストの発動処理
        if (Gvar.activated_disc_id == 395) {
            await Stand.item395();
            return;
        }
        // No = 396 メイド・イン・ヘブンの発動処理
        if (Gvar.activated_disc_id == 396) {
            await Stand.item396();
            return;
        }
        // No = 397 ヘビー・ウェザーの発動処理
        if (Gvar.activated_disc_id == 397) {
            await Stand.item397();
            return;
        }
        // No = 398 スタプラ・ザワールドの発動能力
        if (Gvar.activated_disc_id == 398) {
            await Stand.item398();
            return;
        }
        // No = 399 Gエクスペリエンスレクイエムの発動処理
        if (Gvar.activated_disc_id == 399) {
            await Stand.item399();
            return;
        }
        // No = 400 ハイエロファントグリーンの発動処理
        if (Gvar.activated_disc_id == 400) {
            await Stand.item400();
            return;
        }
        // No = 401 フー・ファイターズの発動処理
        if (Gvar.activated_disc_id == 401) {
            await Stand.item401();
            return;
        }
        // No = 402 エンペラーの発動処理
        if (Gvar.activated_disc_id == 402) {
            await Stand.item402();
            return;
        }
        // No = 403 セックス・ピストルズの発動処理
        if (Gvar.activated_disc_id == 403) {
            await Stand.item403();
            return;
        }
        // No = 404 ホルス神の発動処理
        if (Gvar.activated_disc_id == 404) {
            await Stand.item404();
            return;
        }
        // No = 405 エコーズAct2の発動処理
        if (Gvar.activated_disc_id == 405) {
            await Stand.item405();
            return;
        }
        // No = 406 エコーズAct1の発動処理
        if (Gvar.activated_disc_id == 406) {
            await Stand.item406();
            return;
        }
        // No = 407 ハイエロファントエメラルドの発動処理
        if (Gvar.activated_disc_id == 407) {
            await Stand.item407();
            return;
        }
        // No = 408 マン・イン・ザ・ミラーの発動処理
        if (Gvar.activated_disc_id == 408) {
            await Stand.item408();
            return;
        }
        // No = 409 ラバーズの発動処理
        if (Gvar.activated_disc_id == 409) {
            await Stand.item409();
            return;
        }
        // No = 410 不明disc(没ハイウェイスター。かつては射撃discだった?)の発動処理
        if (Gvar.activated_disc_id == 410) {
            await Stand.item410();
            return;
        }
        // No = 411 タワーオブグレーの発動処理
        if (Gvar.activated_disc_id == 411) {
            await Stand.item411();
            return;
        }
        // No = 412 ヘブンズ・ドアーの発動処理
        if (Gvar.activated_disc_id == 412) {
            await Stand.item412();
            return;
        }
        // No = 413 不明disc(没discサーフィス?) の発動処理
        if (Gvar.activated_disc_id == 413) {
            await Stand.item413();
            return;
        }
        // No = 414 タスクact2の発動処理
        if (Gvar.activated_disc_id == 414) {
            await Stand.item414();
            return;
        }
        // No = 415 タスクact1の発動処理。Ver0.1401にて追加。
        if (Gvar.activated_disc_id == 415) {
            await Stand.item415();
            return;
        }
        await Func.setMessage("しかし何も起こらなかった",
                                "", 7, false, false, false);
        Gvar.var_234 = 0;
        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func511}
