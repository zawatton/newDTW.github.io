import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
async function func839(this: any) {
        Adap.dbgprt(839);
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_259 == 1 && Gvar.var_546 == 1) { // var_259:入力判定[↓]
            Gvar.var_246 = Gvar.var_246 + 19;
            Gvar.var_546 = 0;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.var_255 == 1 && Gvar.var_546 == 0) { // var_255:入力判定[↑]
            Gvar.var_246 = Gvar.var_246 - 19;
            Gvar.var_546 = 1;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            if (Gvar.var_546 == 1) {// 二つある選択肢の上側を選んだ時のフロー
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                if (Gvar.var_3208 == 1) {
                    Gvar.var_3208 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func762();
                    return;
                }
                if (Gvar.var_3209 == 1) {
                    Gvar.var_3209 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func763();
                    return;
                }
                if (Gvar.var_3150 == 1) {
                    Gvar.var_3150 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func770();
                    return;
                }
                if (Gvar.var_3150 == 2) {
                    Gvar.var_3150 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func772();
                    return;
                }
                if (Gvar.var_3151 == 1) {
                    Gvar.var_3151 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func774();
                    return;
                }
                if (Gvar.var_3151 == 2) {
                    Gvar.var_3151 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func776();
                    return;
                }
                if (Gvar.var_3152 == 1) {
                    Gvar.var_3152 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func777();
                    return;
                }
                if (Gvar.var_3163 == 1) {
                    Gvar.var_3163 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func788();
                    return;
                }
                if (Gvar.var_3163 == 2) {
                    Gvar.var_3163 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func791(); // アバッキオ茶のダメージセリフ
                    return;
                }
                if (Gvar.var_3163 == 3) {
                    Gvar.var_3163 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func791(); // アバッキオ茶のダメージセリフ
                    return;
                }
                if (Gvar.var_3126 == 1) {
                    Gvar.var_3126 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func731();
                    return;
                }
                if (Gvar.var_3132 == 1) {
                    Gvar.var_3132 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func744();
                    return;
                }
                if (Gvar.var_3134 == 1) {
                    Gvar.var_3134 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func747();
                    return;
                }
                if (Gvar.var_3127 == 1) {
                    Gvar.var_3127 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func739(); // イギーを仲間にした時のメッセージ処理
                    return;
                }
                if (Gvar.var_3136 == 1) {
                    Gvar.var_3136 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func749();
                    return;
                }
                if (Gvar.var_547 == 1) { // 亀のジッパーで捨てるフラグONのとき
                    Gvar.var_547 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func067(); // 亀のジッパーでアイテムを捨てる動作処理
                    return;
                }
                if (Gvar.var_2494 == 1) {
                    Gvar.var_2494 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func549();
                    return;
                }
                if (Gvar.var_2495 == 1) {
                    Gvar.var_3210 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func552();
                    return;
                }
                // Ver0.1403にて修正。var_759 == 0を追加することで、酒場出現する前のみとした。
                if (Gvar.var_3198 == 1 && Gvar.var_759 == 0) {
                    Gvar.var_3198 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func825();// ダンジョン「ホテルの外」へ入った時の初期化処理
                    return;
                }
                // Ver0.1403にて追加。var_759 >= 1を追加することで、酒場出現する後の処理を追加。
                if (Gvar.var_3198 == 1 && Gvar.var_759 >= 1) {
                    Gvar.var_3198 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func161a();// Ver0.1403にて追加。酒場に入った時の表示
                    return;
                }
                // Ver0.1403にて追加。var_759 >= 1を追加することで、酒場出現する後の処理を追加。
                if (Gvar.go_to_hotel == 1 && Gvar.var_759 >= 1) {
                    Gvar.go_to_hotel = 0; // Ver0.1403にて追加。酒場からホテルの部屋に戻る際のメッセージフラグON
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func161b();// Ver0.1403にて追加。ホテルの部屋に戻った時の表示
                    return;
                }
                if (Gvar.var_3199 == 1) {
                    Gvar.var_3199 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func827(); // ダンジョン「レクイエムの大迷宮」へ入った時の初期化処理
                    return;
                }
                if (Gvar.var_3200 == 1) {
                    Gvar.var_3200 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func829(); // ダンジョン「ディアボロの試練」へ入った時の初期化処理
                    return;
                }
                if (Gvar.var_3201 == 1) {
                    Gvar.var_3201 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func834(); // ダンジョン「一巡後の世界」へ入った時の初期化処理
                    return;
                }
                if (Gvar.var_3203 == 1) {
                    Gvar.var_3203 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func836(); // ダンジョン「鉄獄(鉄の牢獄)」へ入った時の初期化処理
                    return;
                }
                if (Gvar.var_3192 == 1) {
                    Gvar.var_3192 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func806();
                    return;
                }
                if (Gvar.var_3191 == 1) {
                    Gvar.var_3191 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_1032 = Gvar.var_1032 - Gvar.var_3190;
                    Gvar.wallet = 0;
                    await Func.func807();
                    return;
                }
                if (Gvar.var_3147 == 1) {
                    Gvar.var_3147 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func795();
                    return;
                }
                if (Gvar.var_3193 == 1) {
                    Gvar.var_3193 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func810();
                    return;
                }
                if (Gvar.var_3193 == 2) {
                    Gvar.var_3193 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func811();
                    return;
                }
                if (Gvar.var_3195 == 1) {
                    Gvar.var_3195 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func814();
                    return;
                }
                if (Gvar.var_3195 == 2) {
                    Gvar.var_3195 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func815();
                    return;
                }
                if (Gvar.var_3131 == 1) {
                    Gvar.var_3131 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func742();
                    return;
                }
                if (Gvar.var_3137 == 1) {
                    Gvar.var_3137 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func754(); // ペッシに話しかけて釣りするを選んだ際の動作処理
                    return;
                }
                if (Gvar.var_3156 == 1) {
                    Gvar.var_3156 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func779();
                    return;
                }
                if (Gvar.var_3157 == 1) {
                    Gvar.var_3157 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func782();
                    return;
                }
                if (Gvar.var_563 == 1) {
                    Gvar.var_563 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func830();
                    return;
                }
            }
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            if (Gvar.var_546 == 0) {// 二つある選択肢の下側を選んだ時のフロー
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                if (Gvar.var_3208 == 1) {
                    Gvar.var_3208 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    await Func.func051(); // キー入力待ち処理
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_3209 == 1) {
                    Gvar.var_3209 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func764();
                    return;
                }
                if (Gvar.var_3150 >= 1) {
                    Gvar.var_3150 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    await Func.func051(); // キー入力待ち処理
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_3151 >= 1) {
                    Gvar.var_3151 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    await Func.func051(); // キー入力待ち処理
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_3152 == 1) {
                    Gvar.var_3152 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    await Func.func051(); // キー入力待ち処理
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_3163 == 1) {
                    Gvar.var_3163 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func789(); // アバッキオセリフ
                    return;
                }
                if (Gvar.var_3163 == 2) {
                    Gvar.var_3163 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func790(); // アバッキオセリフ
                    return;
                }
                if (Gvar.var_3163 == 3) {
                    Gvar.var_3163 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    await Func.func051(); // キー入力待ち処理
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_3126 == 1) {
                    Gvar.var_3126 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func732();
                    return;
                }
                if (Gvar.var_3132 == 1) {
                    Gvar.var_3132 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func745();
                    return;
                }
                if (Gvar.var_3134 == 1) {
                    Gvar.var_3134 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_3127 == 1) {
                    Gvar.var_3127 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func740();
                    return;
                }
                if (Gvar.var_3136 == 1) {
                    Gvar.var_3136 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func751(); // ペッシに話しかけて仲間にするのを拒んだ際の動作処理
                    return;
                }
                if (Gvar.var_547 == 1) {
                    Gvar.var_547 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_2494 == 1) {
                    Gvar.var_2494 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_2495 == 1) {
                    Gvar.var_2495 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                // Ver0.1403にて修正。var_759 == 0を追加することで、酒場出現する前のみとした。
                if (Gvar.var_3198 == 1 && Gvar.var_759 == 0) {
                    Gvar.var_3198 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                // Ver0.1403にて追加。var_759 >= 1を追加することで、酒場出現する後の処理を追加。
                if (Gvar.var_3198 == 1 && Gvar.var_759 >= 1) {
                    Gvar.var_3198 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func825();// ダンジョン「ホテルの外」へ入った時の初期化処理
                    return;
                }
                // Ver0.1403にて追加。var_759 >= 1を追加することで、酒場出現する後の処理を追加。
                if (Gvar.go_to_hotel == 1 && Gvar.var_759 >= 1) {
                    Gvar.go_to_hotel = 0; // Ver0.1403にて追加。酒場からホテルの部屋に戻る際のメッセージフラグON
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func825();// ダンジョン「ホテルの外」へ入った時の初期化処理
                    return;
                }
                if (Gvar.var_3199 == 1) {
                    Gvar.var_3199 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_3200 == 1) {
                    Gvar.var_3200 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_3201 == 1) {
                    Gvar.var_3201 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_3203 == 1) {
                    Gvar.var_3203 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_3192 == 1) {
                    Gvar.var_3192 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    Gvar.var_1206 = 1;
                    await Func.func051(); // キー入力待ち処理
                    await Func.func803();
                    return;
                }
                if (Gvar.var_3191 == 1) {
                    Gvar.var_3191 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    Gvar.var_1206 = 1;
                    await Func.func051(); // キー入力待ち処理
                    await Func.func803();
                    return;
                }
                if (Gvar.var_3147 == 1) {
                    Gvar.var_3147 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_3193 == 1) {
                    Gvar.var_3193 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func812();
                    return;
                }
                if (Gvar.var_3193 == 2) {
                    Gvar.var_3193 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func812();
                    return;
                }
                if (Gvar.var_3195 == 1) {
                    Gvar.var_3195 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func817();
                    return;
                }
                if (Gvar.var_3195 == 2) {
                    Gvar.var_3195 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func817();
                    return;
                }
                if (Gvar.var_3131 == 1) {
                    Gvar.var_3131 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_3137 == 1) {
                    Gvar.var_3137 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_3156 == 1) {
                    Gvar.var_3156 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func780();
                    return;
                }
                if (Gvar.var_3157 == 1) {
                    Gvar.var_3157 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_563 == 1) {
                    Gvar.var_563 = 0;
                    Gvar.var_548 = 0; // 選択肢処理フラグOFF
                    await Func.func051(); // キー入力待ち処理
                    await Func.func066(); // 亀の倉庫のジッパー関連機能
                    return;
                }
            }
        }
        if (Gvar.key_X_on == 1) {
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            if (Gvar.var_3208 == 1) {
                Gvar.var_3208 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.func051(); // キー入力待ち処理
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_3209 == 1) {
                Gvar.var_3209 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                await Func.func764();
                return;
            }
            if (Gvar.var_3150 >= 1) {
                Gvar.var_3150 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.func051(); // キー入力待ち処理
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_3151 >= 1) {
                Gvar.var_3151 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.func051(); // キー入力待ち処理
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_3152 == 1) {
                Gvar.var_3152 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.func051(); // キー入力待ち処理
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_3163 == 1) {
                Gvar.var_3163 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                await Func.func789(); // アバッキオセリフ
                return;
            }
            if (Gvar.var_3163 == 2) {
                Gvar.var_3163 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                await Func.func790(); // アバッキオセリフ
                return;
            }
            if (Gvar.var_3163 == 3) {
                Gvar.var_3163 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.func051(); // キー入力待ち処理
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_3126 == 1) {
                Gvar.var_3126 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                await Func.func732();
                return;
            }
            if (Gvar.var_3132 == 1) {
                Gvar.var_3132 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                await Func.func745();
                return;
            }
            if (Gvar.var_3127 == 1) {
                Gvar.var_3127 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                await Func.func740();
                return;
            }
            if (Gvar.var_3134 == 1) {
                Gvar.var_3134 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_3136 == 1) {
                Gvar.var_3136 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                await Func.func751(); // ペッシに話しかけて仲間にするのを拒んだ際の動作処理
                return;
            }
            if (Gvar.var_547 == 1) {
                Gvar.var_547 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_2494 == 1) {
                Gvar.var_2494 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_2495 == 1) {
                Gvar.var_2495 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_3198 == 1) {
                Gvar.var_3198 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            // Ver0.1403にて追加。
            if (Gvar.go_to_hotel == 1) {
                Gvar.go_to_hotel = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_3199 == 1) {
                Gvar.var_3199 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_3200 == 1) {
                Gvar.var_3200 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_3201 == 1) {
                Gvar.var_3201 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_3203 == 1) {
                Gvar.var_3203 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_3192 == 1) {
                Gvar.var_3192 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                Gvar.var_1206 = 1;
                await Func.func051(); // キー入力待ち処理
                await Func.func803();
                return;
            }
            if (Gvar.var_3191 == 1) {
                Gvar.var_3191 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                Gvar.var_1206 = 1;
                await Func.func051(); // キー入力待ち処理
                await Func.func803();
                return;
            }
            if (Gvar.var_3147 == 1) {
                Gvar.var_3147 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_3193 == 1) {
                Gvar.var_3193 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func812();
                return;
            }
            if (Gvar.var_3193 == 2) {
                Gvar.var_3193 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func812();
                return;
            }
            if (Gvar.var_3195 == 1) {
                Gvar.var_3195 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func817();
                return;
            }
            if (Gvar.var_3195 == 2) {
                Gvar.var_3195 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func817();
                return;
            }
            if (Gvar.var_3131 == 1) {
                Gvar.var_3131 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_3137 == 1) {
                Gvar.var_3137 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_3156 == 1) {
                Gvar.var_3156 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func780();
                return;
            }
            if (Gvar.var_3157 == 1) {
                Gvar.var_3157 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_563 == 1) {
                Gvar.var_563 = 0;
                Gvar.var_548 = 0; // 選択肢処理フラグOFF
                await Func.func051(); // キー入力待ち処理
                await Func.func066(); // 亀の倉庫のジッパー関連機能
                return;
            }
        }
        if (Gvar.var_198 == 1) {
            Gvar.var_198 = 1; // メッセージウィンドウ開く
            Gvar.var_300 = 1;
        }
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func839}
