import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 124 ムーディー・ブルースの発動処理
async function item124(this: any) {
        if (Gvar.var_407 == 2) {
            Gvar.var_2320 = 0;
            Gvar.var_2321 = Adap.sdim(100, 10);
            for (let cnt3 = 0; cnt3 < 8; ++cnt3) {
                Gvar.var_2321[Gvar.cnt3] = "" + Gvar.var_1070[Gvar.cnt3];
                if (Gvar.var_1069[Gvar.cnt3][4] == 0) {
                    Gvar.var_2321[Gvar.cnt4] = "(no entry)";
                }
                if (Gvar.var_1069[Gvar.cnt3][4] != 0) {
                    Gvar.var_2320++;
                }
            }
            await Func.setMessage("誰に送りますか？",
                                   "", 7, true, false, false);
            await Func.AutoDraw(4);

            await Func.func051(); // キー入力待ち処理
            Gvar.var_2322 = 0;
            Gvar.var_1210 = 1;
            Gvar.var_2323 = 0;
            Gvar.var_2324 = 8;
            Gvar.var_2325 = Gvar.var_2324 - 1;
            Gvar.var_2326 = Gvar.var_2324 * 20 + 37 + 30;
            Gvar.Y_axis_item_position = 45;
            for (let cnt3 = 0; true; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func080(); // 各キー入力確認
                if (Gvar.key_X_on == 1) {
        
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    Gvar.var_2322 = 1;
                    break;
                }
                if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
                    if (Gvar.var_2321[Gvar.var_2323] != "(no entry)") {
                        if (Gvar.var_2321[Gvar.var_2323] != Gvar.var_40) {
                
                            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                            break;
                        }
                    }
                }
                if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
                    if (Gvar.var_2323 != 7) {
                        Gvar.Y_axis_item_position = Gvar.Y_axis_item_position + 22;
                        Gvar.var_2323 = Gvar.var_2323 + 1;
    
                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        // await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func337(); // メッセージ表示処理(自動)
                        continue;
                    }
                    if (Gvar.var_2323 == 7) {
                        Gvar.Y_axis_item_position = 45;
                        Gvar.var_2323 = 0;
    
                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        // await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func337(); // メッセージ表示処理(自動)
                        continue;
                    }
                }
                if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
                    if (Gvar.var_2323 != 0) {
                        Gvar.Y_axis_item_position = Gvar.Y_axis_item_position - 22;
                        Gvar.var_2323 = Gvar.var_2323 - 1;
    
                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        // await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func337(); // メッセージ表示処理(自動)
                        continue;
                    }
                    if (Gvar.var_2323 == 0) {
                        Gvar.Y_axis_item_position = 45 + 7 * 22;
                        Gvar.var_2323 = 7;
    
                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        // await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func337(); // メッセージ表示処理(自動)
                        continue;
                    }
                }
            }
            Gvar.var_1210 = 0;
            if (Gvar.var_2322 == 0) {
                await Func.setMessage("どれを送りますか？",
                                       "", 7, true, false, false);
                await Func.AutoDraw(4);
                Gvar.var_2300 = Gvar.var_225;
                Gvar.var_2301 = 0;
                if (Gvar.var_220 != 0) {
                    Gvar.var_2301 = 1;
                }
                if (Gvar.var_234 != 0) {
                    Gvar.var_2301 = 2;
                }
                Gvar.var_2007 = 1;
                Gvar.item_page_number = 1;
                Gvar.Y_axis_item_position = 45;
                Gvar.var_225 = 1;
                Gvar.var_223 = Gvar.var_224 + 10;
                Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                await Func.func051(); // キー入力待ち処理
                Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                return;
            }
        }
        if (Gvar.var_407 == 1 && Gvar.var_536 == 1 && Gvar.dungeon_number == Adap.int(Gvar.var_1068[12])) {
            await Func.setMessage("どれを相手に送りますか？",
                                   "", 7, true, false, false);
            await Func.AutoDraw(4);
            Gvar.var_2300 = Gvar.var_225;
            Gvar.var_2301 = 0;
            if (Gvar.var_220 != 0) {
                Gvar.var_2301 = 1;
            }
            if (Gvar.var_234 != 0) {
                Gvar.var_2301 = 2;
            }
            Gvar.var_2007 = 1;
            Gvar.item_page_number = 1;
            Gvar.Y_axis_item_position = 45;
            Gvar.var_225 = 1;
            Gvar.var_223 = Gvar.var_224 + 10;
            Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            await Func.func051(); // キー入力待ち処理
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        await Func.setMessage("どれを倉庫に送りますか？",
                               "", 7, true, false, false);
        await Func.AutoDraw(4);
        Gvar.var_2008 = 1;
        Gvar.var_2300 = Gvar.var_225;
        Gvar.var_2301 = 0;
        if (Gvar.var_220 != 0) {
            Gvar.var_2301 = 1;
        }
        if (Gvar.var_234 != 0) {
            Gvar.var_2301 = 2;
        }
        Gvar.var_2007 = 1;
        Gvar.item_page_number = 1;
        Gvar.Y_axis_item_position = 45;
        Gvar.var_225 = 1;
        Gvar.var_223 = Gvar.var_224 + 10;
        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        await Func.func051(); // キー入力待ち処理
        Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
}

export {item124}
