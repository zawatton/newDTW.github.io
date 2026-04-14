/**
 * func159 — func159 ヴェネチアホテルでのイベントフラグ管理処理
 *
 * ヴェネチアホテルや亀、酒場の設定
 *
 * (org原典: newDTW_dungeon0 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Class from '../classes'
import * as Music from '../music/index'

// ヴェネチアホテルでのイベントフラグ管理処理
// 旧 func159
async function func159(this: any) {
        Adap.dbgprt(159);
        Gvar.var_767 = 0;
        Gvar.var_262 = 1; // Gvar.dungeon_number = 0 確認フラグON
        Gvar.current_floor = 0;
        Gvar.var_199 = 2;
        Gvar.var_68 = 1;
        Gvar.y_axis_map_image = 1;
        await Func.func293(); // ダンジョンマップ初期化処理(+ヴェネチアホテル)
        Gvar.var_560 = 1;
        Gvar.var_561 = 5; // マップX軸原点の初期値5 (安易に変更すると壁の中になるのでワープしてしまう)
        Gvar.var_562 = 5; // マップY軸原点の初期値5 (安易に変更すると壁の中になるのでワープしてしまう)
        Gvar.var_3198 = 0; // Ver0.1403にて追加。ホテルの外へ向かう際のメッセージフラグOFF
        Gvar.go_to_hotel = 0; // Ver0.1403にて追加。酒場からホテルの部屋に戻る際のメッセージフラグ
        // マップ読み込み処理
        // Ver0.1403にて修正
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
        // Ver0.1403にて追加。
        //if (Gvar.var_595 == 2){ // Gvar.dungeon_number = 0 での場所確認。2 = 酒場
        //    await Func.func293(); // ダンジョンマップ初期化処理(+ヴェネチアホテル)
            //await map_bar(); // Ver0.1403にて追加。酒場(バー)のマップ
        //}
        await Func.func248();
        // No = 0 なので、拠点(ホテル、亀、)
        Gvar.dungeon_number = 0;
        Gvar.var_532 = 0;

        Gvar.var_77 = Adap.dim(70, 70, null, null);
        Gvar.var_78 = Class.ItemInfo.dim(300);

        Gvar.var_82 = Adap.dim(70, 70, null, null);
        Gvar.var_83 = Class.CharactorInfo.dim(300);

        Gvar.var_73 = Adap.dim(70, 70, null, null);
        await Func.func160(); // ヴェネチアホテルへ追加するNPCの設定処理(亀、岸辺露伴)
        await Func.func160b(); // 酒場へ追加するNPCの設定処理(ロッコ・バロッコ所長)
        if (Gvar.var_66 == 13 && Gvar.var_67 == 9) {
            Gvar.var_65[Gvar.var_66][Gvar.var_67] = 0;
            Gvar.var_66 = 13;
            Gvar.var_67 = 8;
            Gvar.var_65[13][8] = 1;
        }
        Gvar.var_337 = 0;
        Gvar.var_768 = 1;
        Gvar.var_769 = 1;
        await Func.func536();
        Gvar.var_769 = 4;
        await Func.func536();
        if (Gvar.var_404 >= 1) {
            Gvar.var_769 = 2;
            await Func.func536();
        }
        if (Gvar.var_526 >= 1) {
            Gvar.var_769 = 3;
            await Func.func536();
        }
        if (Gvar.var_537 >= 1 || Gvar.var_19 == 1) {
            Gvar.var_769 = 5;
            await Func.func536();
        }
        Gvar.var_768 = 0;
        Gvar.var_769 = 0;
        await Func.func181();
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        Gvar.var_217 = 0;
        Gvar.var_205 = 1;
        await Func.func231(); // プレイデータを保存するセーブ機能
        await Func.func076(); // 各ダンジョンの絵文字読込処理
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            await Func.func339();
        }
        Gvar.var_68 = 1;
        Adap.onexit(1);
        if (Gvar.var_595 == 0) { // Gvar.dungeon_number = 0 での場所確認。0 = ヴェネチアホテル
            await Music.func113(); // ヴェネチアホテルのBGMを選曲
        }
        if (Gvar.var_595 == 1) { // Gvar.dungeon_number = 0 での場所確認。1 = 亀の中
            await Music.func114(); // 亀の中の選曲(BGM "20th Century Boy")
        }
        if (Gvar.var_595 == 2) { // Gvar.dungeon_number = 0 での場所確認。2 = 酒場
            await Music.func114b(); // 酒場の選曲
        }
        if (Gvar.ivents_flag == 1) {
            await Func.func151(); // 初めてヴェネチアホテルへ訪れた際のディアボロの呟き
        }
        if (Gvar.ivents_flag == 3) {
            Gvar.ivents_flag = 0; // イベントフラグ初期化
            await Func.func153(); // ホテルの外初クリア後(エンヤホテル)、ヴェネチアホテルに戻った際のイベント
        }
        if (Gvar.ivents_flag == 5) {
            Gvar.ivents_flag = 0; // イベントフラグ初期化
            await Func.func154(); // レクイエムの大迷宮初クリア後、ヴェネチアホテルに戻った際のイベント
        }
        if (Gvar.var_770 == 1) {
            Gvar.var_770 = 0;
            await Func.func156(); // 初めてダンジョンを訪れ、クリア出来ずにヴェネチアホテルに戻った際のディアボロの呟き
        }
        if (Gvar.ivents_flag == 6) {
            Gvar.ivents_flag = 0; // イベントフラグ初期化
            await Func.func155(); // ディアボロの試練開放イベント(岸辺露伴がヤギを追いかけるイベント)
        }
        await Func.func0896(); // 店のアイテムを購入せずに帰還した際、NPC マリリン・マンソンの登場処理
        Gvar.var_205 = 1;
        await Func.func231(); // プレイデータを保存するセーブ機能
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func159}
