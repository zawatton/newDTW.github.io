/**
 * func070 — func070 アイテムの表示用アイコン座標指定
 *
 * (org原典: newDTW_func0)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// アイテムの表示用アイコン座標指定
async function func070(this: any) {
        Adap.dbgprt(70);
        Gvar.buffer_id = 11; // Adap.buffer(11)は、"img_stand0.gif"
        // 
        if (Gvar.item_icon_id == 100) { // No = 100 スタープラチナ
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 200;
        }
        if (Gvar.item_icon_id == 101) { // No = 101 シルバーチャリオッツ
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 160;
        }
        if (Gvar.item_icon_id == 102) { // No = 102 キング・クリムゾン
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 120;
        }
        if (Gvar.item_icon_id == 103) { // No = 103 エコーズAct3
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 80;
        }
        if (Gvar.item_icon_id == 104) { // No = 104 ザ・ハンド
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 240;
        }
        if (Gvar.item_icon_id == 105) { // No = 105 チリペッパー
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 360;
        }
        if (Gvar.item_icon_id == 106) { // No = 106 クレイジー・D
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 320;
        }
        if (Gvar.item_icon_id == 107) { // No = 103 デス・13
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 280;
        }
        //if (Gvar.item_icon_id == 108 || Gvar.item_icon_id == 110) { // Ver0.1401にて修正。Gvar.item_icon_id == 110を削除
        if (Gvar.item_icon_id == 108) { // No = 108 スティッキーフィンガーズ
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 440;
        }
        if (Gvar.item_icon_id == 109) { // No = 109 マジシャンズレッド
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 480;
        }
        if (Gvar.item_icon_id == 110) { // Ver0.1401にて追加。No = 110 B･D･ザ･ハウス
            Gvar.buffer_x_axis = 1080;
            Gvar.buffer_y_axis = 240;
        }
        if (Gvar.item_icon_id == 111) { // No = 111 ザ・ワールド
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 520;
        }
        if (Gvar.item_icon_id == 112) { // No = 112 キラー・クイーン
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 560;
        }
        if (Gvar.item_icon_id == 113) { // No = 113 クラッシュ
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 600;
        }
        if (Gvar.item_icon_id == 114) { // No = 114 ホワイトスネイク
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 640;
        }
        if (Gvar.item_icon_id == 115) { // No = 115 G・エクスペリエンス
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 680;
        }
        if (Gvar.item_icon_id == 116) { // No = 116 ハーミットパープル
            Gvar.buffer_x_axis = 560;
            Gvar.buffer_y_axis = 720;
        }
        if (Gvar.item_icon_id == 117) { // No = 117 ダークブルームーン
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 880;
        }
        if (Gvar.item_icon_id == 118) { // No = 118 ダイバーダウン
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 920;
        }
        if (Gvar.item_icon_id == 119) { // No = 119 スパイスガール
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 1000;
        }
        if (Gvar.item_icon_id == 120) { // No = 120 ストーン・フリー
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 1040;
        }
        if (Gvar.item_icon_id == 121) { // No = 121 パープル・ヘイズ
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 1080;
        }
        if (Gvar.item_icon_id == 122) { // No = 122 アヌビス神
            Gvar.buffer_x_axis = 1040;
            Gvar.buffer_y_axis = 120;
        }
        if (Gvar.item_icon_id == 123) { // No = 123 クリーム
            Gvar.buffer_x_axis = 40;
            Gvar.buffer_y_axis = 1280;
        }
        if (Gvar.item_icon_id == 124) { // No = 124 ムーディーブルース
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 1320;
        }
        if (Gvar.item_icon_id == 200) { // No = 200 スーパーフライ
            Gvar.buffer_x_axis = 1040;
            Gvar.buffer_y_axis = 80;
        }
        if (Gvar.item_icon_id == 201) { // No = 201 イエローテンパラス
            Gvar.buffer_x_axis = 1000;
            Gvar.buffer_y_axis = 1360;
        }
        if (Gvar.item_icon_id == 202) { // No = 202 ホワイトアルバム
            Gvar.buffer_x_axis = 1240;
            Gvar.buffer_y_axis = 120;
        }
        if (Gvar.item_icon_id == 203) { // No = 203 ザ・フール
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 1440;
        }
        if (Gvar.item_icon_id == 204) { // No = 204 シアハートアタック
            Gvar.buffer_x_axis = 480;
            Gvar.buffer_y_axis = 2000;
        }
        if (Gvar.item_icon_id == 205) { // No = 205 クラフトワーク
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 1200;
        }
        if (Gvar.item_icon_id == 206) { // No = 206 オアシス
            Gvar.buffer_x_axis = 1160;
            Gvar.buffer_y_axis = 120;
        }
        if (Gvar.item_icon_id == 207) { // No = 207 グレイトフル・デッド
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 1240;
        }
        if (Gvar.item_icon_id == 208) { // Ver0.1401にて追加。C-MOON
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 2280;
        }
        if (Gvar.item_icon_id == 250) { // Ver0.1401にて追加。オー!ロンサム・ミー
            Gvar.buffer_x_axis = 1160;
            Gvar.buffer_y_axis = 280;
        }
        if (Gvar.item_icon_id == 251) { // Ver0.1401にて追加。シビル・ウォー
            Gvar.buffer_x_axis = 1080;
            Gvar.buffer_y_axis = 280;
        }
        if (Gvar.item_icon_id == 252) { // Ver0.1401にて追加。クリーム・スターター
            Gvar.buffer_x_axis = 1000;
            Gvar.buffer_y_axis = 2360;
        }
        if (Gvar.item_icon_id == 253) { // Ver0.1401にて追加。スケアリー・モンスターズ
            Gvar.buffer_x_axis = 1120;
            Gvar.buffer_y_axis = 280;
        }
        if (Gvar.item_icon_id == 254) { // Ver0.1401にて追加。C・ザ・レインボー
            Gvar.buffer_x_axis = 1040;
            Gvar.buffer_y_axis = 280;
        }
        if (Gvar.item_icon_id == 255) { // Ver0.1401にて追加。イン・ア・サイレント・ウェイ
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 2440;
        }
        if (Gvar.item_icon_id == 256) { // Ver0.1401にて追加。チョコレイト・ディスコ
            Gvar.buffer_x_axis = 1200;
            Gvar.buffer_y_axis = 280;
        }
        if (Gvar.item_icon_id == 257) { // Ver0.1401にて追加。T・O・T・B ワン
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 2280;
        }
        if (Gvar.item_icon_id == 258) { // Ver0.1401にて追加。ボールブレイカー&スキャン
            Gvar.buffer_x_axis = 1240;
            Gvar.buffer_y_axis = 280;
        }
        if (Gvar.item_icon_id == 259) { // Ver0.1401にて追加。TATOO YOU!
            Gvar.buffer_x_axis = 1200;
            Gvar.buffer_y_axis = 320;
        }
        if (Gvar.item_icon_id == 260) { // Ver0.1401にて追加。20th Century Boy
            Gvar.buffer_x_axis = 1040;
            Gvar.buffer_y_axis = 320;
        }
        if (Gvar.item_icon_id == 261) { // Ver0.1401にて追加。DDDC
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 2400;
        }
        if (Gvar.item_icon_id == 262) { // Ver0.1401にて追加。タスクact4
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 2280;
        }
        if (Gvar.item_icon_id == 263) { // Ver0.1401にて追加。D4Cラブトレイン
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 2280;
        }
        if (Gvar.item_icon_id == 300) { // No = 300 パールジャム
            Gvar.buffer_x_axis = 1040;
            Gvar.buffer_y_axis = 160;
        }
        if (Gvar.item_icon_id == 301) { // No = 301 ハーヴェスト
            Gvar.buffer_x_axis = 0;
            Gvar.buffer_y_axis = 1920;
        }
        if (Gvar.item_icon_id == 302) { // No = 302 ハイウェイ・トゥ・ヘル
            Gvar.buffer_x_axis = 1120;
            Gvar.buffer_y_axis = 160;
        }
        if (Gvar.item_icon_id == 303) { // No = 303 ドラゴンズドリーム
            Gvar.buffer_x_axis = 1160;
            Gvar.buffer_y_axis = 160;
        }
        if (Gvar.item_icon_id == 304) { // No = 304 ウェザーリポート
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 1400;
        }
        if (Gvar.item_icon_id == 305) { // No = 305 シンデレラ
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 2160;
        }
        if (Gvar.item_icon_id == 306) { // No = 306 マンハッタントランスファー
            Gvar.buffer_x_axis = 1040;
            Gvar.buffer_y_axis = 200;
        }
        if (Gvar.item_icon_id == 307) { // No = 307 不明
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 1520;
        }
        if (Gvar.item_icon_id == 308) { // No = 308 エボニー・デビル
            Gvar.buffer_x_axis = 0;
            Gvar.buffer_y_axis = 1880;
        }
        if (Gvar.item_icon_id == 309) { // No = 309 ソフト・マシーン
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 2040;
        }
        if (Gvar.item_icon_id == 310) { // No = 310 エンプレス
            Gvar.buffer_x_axis = 1200;
            Gvar.buffer_y_axis = 200;
        }
        if (Gvar.item_icon_id == 311) { // No = 311 チープ・トリック
            Gvar.buffer_x_axis = 1120;
            Gvar.buffer_y_axis = 80;
        }
        if (Gvar.item_icon_id == 312) { // No = 312 エアロスミス
            Gvar.buffer_x_axis = 480;
            Gvar.buffer_y_axis = 1960;
        }
        if (Gvar.item_icon_id == 313) { // No = 313 ハイウェイスター
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 1560;
        }
        if (Gvar.item_icon_id == 314) { // No = 314 ストレイキャット
            Gvar.buffer_x_axis = 1120;
            Gvar.buffer_y_axis = 120;
        }
        if (Gvar.item_icon_id == 315) { // No = 315 エピタフ
            Gvar.buffer_x_axis = 1160;
            Gvar.buffer_y_axis = 240;
        }
        if (Gvar.item_icon_id == 316) { // No = 316 サバイバー
            Gvar.buffer_x_axis = 1080;
            Gvar.buffer_y_axis = 160;
        }
        if (Gvar.item_icon_id == 317) { // No = 317 キッス
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 1640;
        }
        if (Gvar.item_icon_id == 318) { // No = 318 ジャンピングJフラッシュ
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 1680;
        }
        if (Gvar.item_icon_id == 319) { // No = 319 ボーイⅡマン
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 1720;
        }
        if (Gvar.item_icon_id == 320) { // No = 320 メタリカ
            Gvar.buffer_x_axis = 1080;
            Gvar.buffer_y_axis = 200;
        }
        if (Gvar.item_icon_id == 321) { // No = 321 没ディスク
            Gvar.buffer_x_axis = 1160;
            Gvar.buffer_y_axis = 200;
        }
        if (Gvar.item_icon_id == 393) { // No = 393 ボヘミアンラプソディ
            Gvar.buffer_x_axis = 1200;
            Gvar.buffer_y_axis = 120;
        }
        if (Gvar.item_icon_id == 394) { // No = 394 キラータイガークイーン
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 760;
        }
        if (Gvar.item_icon_id == 395) { // No = 395 バイツァ・ダスト
            Gvar.buffer_x_axis = 1120;
            Gvar.buffer_y_axis = 240;
        }
        if (Gvar.item_icon_id == 396) { // No = 396 メイド・イン・ヘブン
            Gvar.buffer_x_axis = 1080;
            Gvar.buffer_y_axis = 120;
        }
        if (Gvar.item_icon_id == 397) { // No = 397 ヘビー・ウェザー
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 1840;
        }
        if (Gvar.item_icon_id == 398) { // No = 398 スタプラザワールド
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 1600;
        }
        if (Gvar.item_icon_id == 399) { // No = 399 G・E・レクイエム
            Gvar.buffer_x_axis = 80;
            Gvar.buffer_y_axis = 1480;
        }
        // ここからbufferが違う
        if (Gvar.item_icon_id == 400) { // No = 400 ハイエロファントグリーン
            Gvar.buffer_x_axis = 40;
            Gvar.buffer_y_axis = 400;
            Gvar.buffer_id = 34;
        }
        if (Gvar.item_icon_id == 401) { // No = 401 フー・ファイターズ
            Gvar.buffer_x_axis = 640;
            Gvar.buffer_y_axis = 200;
            Gvar.buffer_id = 34;
        }
        if (Gvar.item_icon_id == 402) { // No = 402 エンペラー
            Gvar.buffer_x_axis = 640;
            Gvar.buffer_y_axis = 0;
            Gvar.buffer_id = 34;
        }
        if (Gvar.item_icon_id == 403) { // No = 403 セックスピストルズ
            Gvar.buffer_x_axis = 480;
            Gvar.buffer_y_axis = 560;
            Gvar.buffer_id = 34;
        }
        if (Gvar.item_icon_id == 404) { // No = 404 ホルス神
            Gvar.buffer_x_axis = 160;
            Gvar.buffer_y_axis = 520;
            Gvar.buffer_id = 34;
        }
        if (Gvar.item_icon_id == 405) { // No = 405 エコーズACT2
            Gvar.buffer_x_axis = 480;
            Gvar.buffer_y_axis = 1040;
            Gvar.buffer_id = 21;
        }
        if (Gvar.item_icon_id == 406) { // No = 406 エコーズACT1
            Gvar.buffer_x_axis = 480;
            Gvar.buffer_y_axis = 1080;
            Gvar.buffer_id = 21;
        }
        if (Gvar.item_icon_id == 407) { // No = 407 ハイエロファントエメラルド
            Gvar.buffer_x_axis = 40;
            Gvar.buffer_y_axis = 400;
            Gvar.buffer_id = 34;
        }
        if (Gvar.item_icon_id == 408) { // No = 408 マン・イン・ザ・ミラー
            Gvar.buffer_x_axis = 1000;
            Gvar.buffer_y_axis = 440;
            Gvar.buffer_id = 3;
        }
        if (Gvar.item_icon_id == 409) { // No = 409 ラバーズ
            Gvar.buffer_x_axis = 480;
            Gvar.buffer_y_axis = 520;
            Gvar.buffer_id = 6;
        }
        if (Gvar.item_icon_id == 410) { // No = 410 没ディスク
            Gvar.buffer_x_axis = 320;
            Gvar.buffer_y_axis = 1080;
            Gvar.buffer_id = 34;
        }
        if (Gvar.item_icon_id == 411) { // No = 411 タワー・オブ・グレー
            Gvar.buffer_x_axis = 320;
            Gvar.buffer_y_axis = 1120;
            Gvar.buffer_id = 34;
        }
        if (Gvar.item_icon_id == 412) { // No = 412 ヘブンズ・ドアー
            Gvar.buffer_x_axis = 720;
            Gvar.buffer_y_axis = 520;
            Gvar.buffer_id = 3;
        }
        if (Gvar.item_icon_id == 413) { // No = 413 没ディスク
            Gvar.buffer_x_axis = 960;
            Gvar.buffer_y_axis = 1960;
            Gvar.buffer_id = 15;
        }
        if (Gvar.item_icon_id == 414) { // No = 414 タスクact2
            Gvar.buffer_x_axis = 1480;
            Gvar.buffer_y_axis = 1240;
            Gvar.buffer_id = 34;
        }
        if (Gvar.item_icon_id == 415) { // Ver0.1401にて追加。No = 415 タスクact1
            Gvar.buffer_x_axis = 1480;
            Gvar.buffer_y_axis = 1200;
            Gvar.buffer_id = 34;
        }
        if (Gvar.item_icon_id == 416) { // Ver0.1401にて追加。No = 416 タスクact3
            Gvar.buffer_x_axis = 1480;
            Gvar.buffer_y_axis = 1280;
            Gvar.buffer_id = 34;
        }
        return;
}

export {func070}
