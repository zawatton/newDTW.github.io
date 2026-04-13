import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// ゲーム初期化処理
// 旧 func004
async function func004(this: any) {
        Adap.dbgprt(4);
        Adap.HMMINIT(3);
        if (Gvar.stat == 0) {
            Adap.end();
        }
        Gvar.var_8 = 0;
        Gvar.var_9 = 0;

        // 00.datファイルの存在確認
        await Adap.exist("00.dat");

        if (Gvar.strsize >= 1) {
            Gvar.var_10 = await Adap.bload("00.dat", null, 20);
            Gvar.var_8 = await Adap.bload("00.dat", null, 40);
            Gvar.var_9 = await Adap.bload("00.dat", null, 60);
            Gvar.var_11 = await Adap.bload("00.dat", null, 80);
        }
        if (Gvar.var_11 != 1) {
            Gvar.var_11 = 0;
        }
        Gvar.var_12 = 0; // 通信サーバーフラグ？？

        Gvar.version_number = "0.14"; 
        Gvar.game_title = "newDTW (ver0.1405)";

        Adap.buffer(17);
        await Adap.picload("img3.gif"); // ロード中の進行バーに関するドット
        Adap.buffer(26, 340, 340);
        Adap.screen_(2, 1, 1, 2, -100, -100);

        Adap.title(Gvar.game_title);
        Adap.oncmd_gosub(Func.func0956, 161);
    
        Adap.GetWindowLongA(Gvar.hwnd, -16);
    
        Adap.SetWindowLongA(Gvar.hwnd, -16, Gvar.stat || (-2147483648));
    
        Adap.SetWindowPos(Gvar.hwnd, 0, 0, 0, 0, 0, 38);

        Gvar.var_15 = Gvar.hwnd;
        Gvar.var_16 = Gvar.var_8 + 150;
        Gvar.var_17 = Gvar.var_9 + 150;
        if (Gvar.var_16 >= await Adap.ginfo(20)) {
            Gvar.var_8 = 0;
        }
        if (Gvar.var_17 >= await Adap.ginfo(21)) {
            Gvar.var_9 = 0;
        }
        if (Gvar.var_8 < 0) {
            Gvar.var_8 = 0;
        }
        if (Gvar.var_9 < 0) {
            Gvar.var_9 = 0;
        }
        Adap.screen_(0, 340, 340, 2, Gvar.var_8, Gvar.var_9);
        Adap.title(Gvar.game_title);
        Adap.oncmd_gosub(Func.func0956, 161);
    
        Adap.SetWindowLongA(Gvar.hwnd, -8, Gvar.var_15);

        Adap.gsel(2, 1);

        Adap.gsel(0, 1);
        if (Gvar.var_10 == 0) {
            Adap.width(340, 340);
            Gvar.var_637 = 1;
        }
        if (Gvar.var_10 == 1) {
            Adap.width(680, 680);
            Gvar.var_637 = 0;
        }
        Adap.color(0, 0, 0);
        Adap.boxf();
        await Adap.wait(50);
        Gvar.var_18 = 0;
        for (let cnt1 = 0; cnt1 < 25; ++cnt1) {
            await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理
            Gvar.var_18 = Gvar.var_18 + 10;
        }
        Gvar.var_18 = 255;
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理
        Gvar.font_type = "メイリオ" // Ver0.1405 にて追加。将来フォントを選択出来るように。 "メイリオ" 廃止
        Gvar.var_19 = 0;
        Gvar.var_20 = 50; // 鉄の牢獄の最終階層
        Gvar.var_21 = "鉄獄"; // Ver0.1402にて修正。鉄の牢獄→鉄獄。Ver0.1310で修正。鉄の牢獄。
        Gvar.var_22 = "ケープ・カナベラル"; // Ver0.1403にて修正。鉄獄(鉄の牢獄)の最終決戦フロア名
        Gvar.var_23 = 1;
        Gvar.var_24 = "承太郎"; // Ver0.1403にて修正。鉄獄(鉄の牢獄)のダンジョン主
        Adap.randomize();
        await Adap.wait(1);
        await Func.func242();
        Gvar.var_25[1] = 255;
        Gvar.var_26[1] = 255;
        Gvar.var_27[1] = 255;
        Gvar.var_25[2] = 255;
        Gvar.var_26[2] = 255; // Ver0.1310にて値修正。 150 → 255
        Gvar.var_27[2] = 255;
        Gvar.var_25[3] = 255;
        Gvar.var_26[3] = 255; // Ver0.1310にて値修正。 0 → 255
        Gvar.var_27[3] = 255; // Ver0.1310にて値修正。 0 → 255
        Gvar.var_25[4] = 255; // Ver0.1310にて値修正。 130 → 255
        Gvar.var_26[4] = 255;
        Gvar.var_27[4] = 255; // Ver0.1310にて値修正。 130 → 255
        Gvar.var_25[5] = 255; // Ver0.1310にて値修正。 100 → 255
        Gvar.var_26[5] = 255; // Ver0.1310にて値修正。 160 → 255
        Gvar.var_27[5] = 255; // Ver0.1310にて値修正。 190 → 255
        Gvar.var_25[6] = 255;
        Gvar.var_26[6] = 255;
        Gvar.var_27[6] = 255; // Ver0.1310にて値修正。 0 → 255
        // Ver0.1310にて追加。追加したことで白色へ初期化できる。
        Gvar.var_25[7] = 255;
        Gvar.var_26[7] = 255;
        Gvar.var_27[7] = 255;
        Gvar.var_25[8] = 255;
        Gvar.var_26[8] = 255;
        Gvar.var_27[8] = 255;
        Gvar.var_25[9] = 255;
        Gvar.var_26[9] = 255;
        Gvar.var_27[9] = 255;
        Gvar.var_25[10] = 255;
        Gvar.var_26[10] = 255;
        Gvar.var_27[10] = 255;
        Gvar.var_25[11] = 255;
        Gvar.var_26[11] = 255;
        Gvar.var_27[11] = 255;
        Gvar.var_25[12] = 255;
        Gvar.var_26[12] = 255;
        Gvar.var_27[12] = 255;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_28 = Adap.dim(10, 10, Gvar.length3 = null, null);
        Gvar.var_29 = Adap.dim(300, 10, Gvar.length3 = null, null);
        await Func.func241();
        Gvar.var_30 = Adap.dirinfo(0);
        Gvar.var_31 = 56;
        Gvar.var_32 = 38;
        Gvar.var_33 = Gvar.var_31;
        Gvar.var_34 = Gvar.var_32 - 1;
        Gvar.var_35 = 40; // bufferX座標指定用 固定値
        Gvar.var_36 = 40; // bufferY座標指定用 固定値
        Gvar.var_37 = 6;
        Gvar.var_38 = 6;
        Gvar.var_39 = "";
        Gvar.var_40 = "name";
        // 画面上部へ表示するステータスの表示位置(Y軸)
        Gvar.var_41 = 3;
        // フロア階層現在値の表示位置(X軸)
        Gvar.var_42 = 20;
        Gvar.var_43 = 10;
        // フロア階層「F」表示位置(X軸)
        Gvar.var_44 = 35;
        // レベルの「Lv」表示位置(X軸)
        Gvar.var_45 = 65;
        // レベル現在値の表示位置(X軸)
        Gvar.var_46 = 90;
        // HPの「HP」表示位置(X軸)
        Gvar.var_47 = 130;
        // HP現在値の表示位置(X軸)
        Gvar.var_48 = 172;
        Gvar.var_49 = 162;
        Gvar.var_50 = 152;
        // HP現在値と最大値の仕切り「/」の表示位置(X軸)
        Gvar.var_51 = 195;
        // HP最大値の表示位置(X軸)
        Gvar.var_52 = 208;
        // 所持金の表示位置(X軸)
        Gvar.var_53 = 296;
        Gvar.var_54 = 285;
        Gvar.var_55 = 274;
        Gvar.var_56 = 262;
        Gvar.var_57 = 250;
        Gvar.var_58 = 238;
        // 所持金の単位「G」表示位置(X軸)
        Gvar.var_59 = 320;

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(3, null, null, null);
        await Adap.picload("img_mychara.gif"); // 主にディアボロの動作関係ドット絵

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(4, 340, 300, null);

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(5, null, null, null);
        await Adap.picload("img_map.gif");

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(6, null, null, null);
        await Adap.picload("img_enemy1a.gif");

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(7, 340, 300, null);

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(8, null, null, null);
        await Adap.picload("img1.gif");

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(9);
        await Adap.picload("img_item.gif");
        Adap.buffer(10, 340, 200, null);

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(11);
        await Adap.picload("img_stand0.gif");

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(12, 340, 340, null);
        Adap.color(0, 0, 200);
        Adap.boxf(0, 0, 340, 340);
        
        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(13);
        await Adap.picload("img_enemy4a.gif");
        
        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(14);
        await Adap.picload("img_wana.gif");

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(15);
        await Adap.picload("img_enemy1b.gif");

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(18);
        await Adap.picload("img4.gif");
        
        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(1);
        await Adap.picload("img_stand1.gif");

        Adap.buffer(19, 340, 340, null);
        
        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(20);
        await Adap.picload("img_enemy4b.gif");

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(21);
        await Adap.picload("img_enemy2a.gif");

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(22);
        await Adap.picload("img_enemy2b.gif");

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(23);
        await Adap.picload("img_comic.gif");

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(24, 340, 340, 0);

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(25, 340, 340, 1);
        Func.makepal();

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(27);
        await Adap.picload("img_enemy3a.gif");

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(28);
        await Adap.picload("img_enemy3b.gif");

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(29);
        await Adap.picload("img_stand3.gif");

        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(16);
        await Adap.picload("img_stand2.gif");
        
        Adap.buffer(34);
        await Adap.picload("img_syageki.gif");
        
        Adap.buffer(35);
        await Adap.picload("img_effect.gif");
        
        Gvar.var_60++; // "ロード中の進行バーを+1"
        await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理

        Adap.buffer(36, 340, 340, null);
        
        Adap.buffer(37, 340, 340, 1); // 新たにバッファ37を作成

        Adap.buffer(32, 200, 200);
        await Func.func183(); // デバックウィンドウ呼び出し？
        await Music.preloadAllSoundEffects();
        // await Music.func081(); // 効果音を呼び出す関数(効果音リスト1)
        // await Music.func082(); // 効果音を呼び出す関数(効果音リスト2)
        await Music.func083(); // 効果音上限設定処理 (最大値:137)
        Adap.DSGETMASTERVOLUME();
        Gvar.bgm_volume = Gvar.stat;
        Adap.gsel(0);
        Gvar.var_18 = 255;
        for (let cnt1 = 0; cnt1 < 25; ++cnt1) {
            await Func.func138(); // 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理
            Gvar.var_18 = Gvar.var_18 - 10;
        }
        Adap.color(0, 0, 0);
        Adap.boxf();
        await Adap.wait(25); // 動作確認タイマ 50ms
        Adap.onexit(Func.func231); // プレイデータを保存するセーブ機能
        Adap.gsel(0);
        await Func.func139(); // データ読込み処理(00.datファル、01 ~ 03.datセーブデータ解析処理)
        return;
}

export {func004}
