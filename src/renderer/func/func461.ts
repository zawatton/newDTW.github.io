import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Stand from '../stand/index'

async function func461(this: any) {
        Adap.dbgprt(461);
        // もし持っている道具が0( Gvar.var_224 = 0 )である かつ道具画面(メニュー画面/道具)が閉じている状態
        if (Gvar.var_220 == 0 && Gvar.var_224 == 0 && Gvar.item_page_number != 3) {
            await Func.func459(); // 道具画面(所持数0)の表示(メニュー画面/道具)
            return;
        }
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認

        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態

            // No != 3 なので、アイテム個数 Gvar.var_225 が0でなければ
            if (Gvar.var_259 == 1 && Gvar.item_page_number != 3) { // var_259:入力判定[↓]
                // No = 1 なので、アイテム個数 Gvar.var_225 が10以下であれば
                if (Gvar.item_page_number == 1) { // 道具欄1ページ目
                    // 所持アイテム数var_224が10以下で、アイテム位置配列var_225と一緒でなければ
                    if (Gvar.var_224 <= 10 && Gvar.var_225 != Gvar.var_224) {

                        Gvar.Y_axis_item_position = Gvar.Y_axis_item_position + 22;
                        Gvar.var_225 = Gvar.var_225 + 1;
                        
                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        // await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                    // 所持アイテム数var_224が11以上で、アイテム位置配列var_225が10でなければ
                    if (Gvar.var_224 >= 11 && Gvar.var_225 != 10) {
                        
                        Gvar.Y_axis_item_position = Gvar.Y_axis_item_position + 22;
                        Gvar.var_225 = Gvar.var_225 + 1;

                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        // await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }

                    if (Gvar.var_225 == Gvar.var_224 || Gvar.var_225 == 10) {

                        Gvar.Y_axis_item_position = 45;
                        Gvar.var_225 = 1;

                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        // await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func337(); // メッセージ表示処理(自動)
                        
                        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                }
                // No = 2 なので、アイテム個数 Gvar.var_225 が10より多ければ
                if (Gvar.item_page_number == 2) { // 道具欄2ページ目
                    // 所持アイテム数var_224がアイテム位置配列var_225と一緒でなく、アイテム位置配列var_225が20でなければ
                    if (Gvar.var_225 != Gvar.var_224 && Gvar.var_225 != 20) {
                        
                        Gvar.Y_axis_item_position = Gvar.Y_axis_item_position + 22;
                        Gvar.var_225 = Gvar.var_225 + 1;
                        
                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        // await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }

                    if (Gvar.var_225 == Gvar.var_224 || Gvar.var_225 == 20) {

                        Gvar.Y_axis_item_position = 45;
                        Gvar.var_225 = 11;

                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        // await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                }
            }

            // Gvar.var_255 入力判定：[↑] がON かつ、No != 3 なので、アイテム個数 Gvar.var_225 が0でなければ
            if (Gvar.var_255 == 1 && Gvar.item_page_number != 3) {
                // アイテム位置配列var_225が1でない、かつ 11でないとき
                if (Gvar.var_225 != 1 && Gvar.var_225 != 11) {

                    Gvar.Y_axis_item_position = Gvar.Y_axis_item_position - 22;
                    Gvar.var_225 = Gvar.var_225 - 1;

                    Adap.DSPLAY(100); // アイテム選択時の効果音
                    // await Func.func337(); // メッセージ表示処理(自動)
                    await Func.func337(); // メッセージ表示処理(自動)
                    await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
                // アイテム位置配列var_225が1 かつ 11 のとき
                if (Gvar.var_225 == 1 || Gvar.var_225 == 11) {

                    // No = 1 なので、アイテム個数 Gvar.var_225 が10以下であれば
                    if (Gvar.item_page_number == 1) { // 道具欄1ページ目
                        // 所持アイテム数var_224が10以下の時は
                        if (Gvar.var_224 <= 10) {

                            Gvar.Y_axis_item_position = (Gvar.var_224 - 1) * 22 + 45;
                            Gvar.var_225 = Gvar.var_224;

                            Adap.DSPLAY(100); // アイテム選択時の効果音
                            // await Func.func337(); // メッセージ表示処理(自動)
                            await Func.func337(); // メッセージ表示処理(自動)
                            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                            return;
                        }
                        // 所持アイテム数var_224が11以上の時は
                        if (Gvar.var_224 >= 11) {
                            
                            Gvar.Y_axis_item_position = 9 * 22 + 45;
                            Gvar.var_225 = 10;

                            Adap.DSPLAY(100); // アイテム選択時の効果音
                            // await Func.func337(); // メッセージ表示処理(自動)
                            await Func.func337(); // メッセージ表示処理(自動)
                            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                            return;
                        }
                    }
                    // No = 2 なので、アイテム個数 Gvar.var_225 が10より多ければ
                    if (Gvar.item_page_number == 2) {

                        Gvar.Y_axis_item_position = (Gvar.var_224 - 11) * 22 + 45;
                        Gvar.var_225 = Gvar.var_224;

                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        // await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                }
            }

            if (Gvar.var_254 == 1) {
                // No = 1 なので、アイテム個数 Gvar.var_225 が10以下であれば
                if (Gvar.item_page_number == 1) {
                    if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_1240 == 0 && Gvar.var_1999 == 0 && Gvar.var_2000 == 0 && Gvar.var_2001 == 0 && Gvar.var_1950 == 0 && Gvar.var_2002 == 0 && Gvar.var_2005 == 0 && Gvar.var_2003 == 0 && Gvar.var_2004 == 0 && Gvar.var_2006 == 0 && Gvar.var_2007 == 0) {
                        
                        Gvar.item_page_number = 3; // No = 3 なので、アイテム個数 Gvar.var_225 が0
                        Gvar.Y_axis_item_position = 45;
                        Gvar.var_225 = 0;

                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        await Func.func478();
                        // await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                    // 
                    if (Gvar.var_224 > 10) {

                        Gvar.var_225 = 11;
                        Gvar.item_page_number = 2; // No = 2 なので、アイテム個数 Gvar.var_225 が10より多い
                        Gvar.Y_axis_item_position = 45;
                        
                        Adap.DSPLAY(100); // アイテム選択時の効果音 
                        // await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                }
                // No = 2 なので、アイテム個数 Gvar.var_225 が10より多ければ
                if (Gvar.item_page_number == 2) {

                    Gvar.var_225 = 1;
                    Gvar.item_page_number = 1;
                    Gvar.Y_axis_item_position = 45;
                    
                    Adap.DSPLAY(100); // アイテム選択時の効果音
                    // await Func.func337(); // メッセージ表示処理(自動)
                    await Func.func337(); // メッセージ表示処理(自動)
                    await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
                // No = 3 なので、アイテム個数 Gvar.var_225 が0であれば
                if (Gvar.item_page_number == 3 && Gvar.var_224 != 0) {
                    if (Gvar.var_224 <= 10) {

                        Gvar.var_225 = 1;
                        Gvar.item_page_number = 1; // No = 1 なので、アイテム個数 Gvar.var_225 が10以下
                        Gvar.Y_axis_item_position = 45;
                        Gvar.var_231 = 0;

                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        // await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                    // 所持アイテムが10個より多い時
                    if (Gvar.var_224 > 10) {

                        Gvar.var_225 = 11;
                        Gvar.item_page_number = 2; // No = 2 なので、アイテム個数 Gvar.var_225 が10より多い
                        Gvar.Y_axis_item_position = 45;
                        Gvar.var_231 = 0;

                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        // await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                }
            }
            if (Gvar.var_257 == 1) {
                // No = 1 なので、アイテム個数 Gvar.var_225 が10以下であれば
                if (Gvar.item_page_number == 1 && Gvar.var_224 > 10) {

                    Gvar.var_225 = 11;
                    Gvar.item_page_number = 2; // No = 2 なので、アイテム個数 Gvar.var_225 が10より多い
                    Gvar.Y_axis_item_position = 45;
                    
                    Adap.DSPLAY(100); // アイテム選択時の効果音
                    // await Func.func337(); // メッセージ表示処理(自動)
                    await Func.func337(); // メッセージ表示処理(自動)
                    await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
                if (Gvar.var_1240 == 0 && Gvar.var_1999 == 0 && Gvar.var_2000 == 0 && Gvar.var_2001 == 0 && Gvar.var_1950 == 0 && Gvar.var_2002 == 0 && Gvar.var_2003 == 0 && Gvar.var_2004 == 0 && Gvar.var_2005 == 0 && Gvar.var_2006 == 0 && Gvar.var_2007 == 0) {
                    // No = 1 なので、アイテム個数 Gvar.var_225 が10以下であれば
                    if (Gvar.item_page_number == 1 && Gvar.var_224 <= 10 && Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
                        
                        Gvar.item_page_number = 3; // No = 3 なので、アイテム個数 Gvar.var_225 が0
                        Gvar.Y_axis_item_position = 45;
                        Gvar.var_225 = 0;

                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        await Func.func478();
                        // await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                    // No = 2 なので、アイテム個数 Gvar.var_225 が10より多ければ
                    if (Gvar.item_page_number == 2 && Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
                        
                        Gvar.item_page_number = 3; // No = 3 なので、アイテム個数 Gvar.var_225 が0
                        Gvar.Y_axis_item_position = 45;
                        Gvar.var_225 = 0;

                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        await Func.func478();
                        // await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                }
                // No = 2 なので、アイテム個数 Gvar.var_225 が10より多ければ
                if (Gvar.item_page_number == 2) {
                    if (Gvar.var_1240 != 0 || Gvar.var_1999 != 0 || Gvar.var_2000 != 0 || Gvar.var_2001 != 0 || Gvar.var_1950 != 0 || Gvar.var_2002 != 0 || Gvar.var_2003 != 0 || Gvar.var_2004 != 0 || Gvar.var_2005 != 0 || Gvar.var_2006 != 0 || Gvar.var_2007 != 0) {
                        
                        Gvar.var_225 = 1;
                        Gvar.item_page_number = 1; // No = 1 なので、アイテム個数 Gvar.var_225 が10以下
                        Gvar.Y_axis_item_position = 45;
                        
                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        // await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func337(); // メッセージ表示処理(自動)
                        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                }
                // No = 2 なので、アイテム個数 Gvar.var_225 が10より多ければ
                if (Gvar.item_page_number == 2 && Gvar.var_77[Gvar.var_66][Gvar.var_67] == 0) {
                    
                    Gvar.var_225 = 1;
                    Gvar.item_page_number = 1; // No = 1 なので、アイテム個数 Gvar.var_225 が10以下
                    Gvar.Y_axis_item_position = 45;
                    
                    Adap.DSPLAY(100); // アイテム選択時の効果音
                    // await Func.func337(); // メッセージ表示処理(自動)
                    await Func.func337(); // メッセージ表示処理(自動)
                    
                    await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
                // No = 2 なので、アイテム個数 Gvar.var_225 が10より多ければ
                if (Gvar.item_page_number == 2 && Gvar.var_2005 == 1) {
                    
                    Gvar.var_225 = 1;
                    Gvar.item_page_number = 1; // No = 1 なので、アイテム個数 Gvar.var_225 が10以下
                    Gvar.Y_axis_item_position = 45;
                    
                    Adap.DSPLAY(100);
                    // await Func.func337(); // メッセージ表示処理(自動)
                    await Func.func337(); // メッセージ表示処理(自動)
                    
                    await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
                // No = 3 なので、アイテム個数 Gvar.var_225 が0であれば
                if (Gvar.item_page_number == 3 && Gvar.var_224 != 0) {
                    
                    Gvar.var_225 = 1;
                    Gvar.item_page_number = 1; // No = 1 なので、アイテム個数 Gvar.var_225 が10以下
                    Gvar.Y_axis_item_position = 45;
                    Gvar.var_231 = 0;

                    Adap.DSPLAY(100);
                    // await Func.func337(); // メッセージ表示処理(自動)
                    await Func.func337(); // メッセージ表示処理(自動)
                    await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
            }
            // Gvar.key_Shift_on (Shiftキー)がONの時
            if (Gvar.key_Shift_on == 1 && Gvar.var_1866 == 0 && Gvar.var_234 == 0 && Gvar.var_220 == 0 && Gvar.var_231 == 0 && Gvar.var_1945 == 0 && Gvar.var_224 > 1 && Gvar.var_1240 == 0 && Gvar.var_1999 == 0 && Gvar.var_2000 == 0 && Gvar.var_2001 == 0 && Gvar.var_1950 == 0 && Gvar.var_2002 == 0 && Gvar.var_2003 == 0 && Gvar.var_2004 == 0 && Gvar.var_2005 == 0 && Gvar.var_2006 == 0 && Gvar.var_2007 == 0 && Gvar.item_page_number != 3) {
                Adap.DSPLAY(208); //アイテムを整理する時の効果音
                
                await Func.func467(); // Shiftキーを押してアイテムを整理する時の関数
                
                return;
            }
        }
        // 道具画面(メニュー画面/道具)が開いている状態
        if (Gvar.var_220 == 1 && Gvar.var_233[Gvar.var_1876].Var8 != 0 && Gvar.var_233[Gvar.var_1876].Var0 < 805) {
            if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
                if (Gvar.var_225 != Gvar.var_233[Gvar.var_1876].Var8 && Gvar.var_225 != Gvar.var_1884) {
                    
                    Gvar.Y_axis_item_position = Gvar.Y_axis_item_position + 22;  
                    Gvar.var_225 = Gvar.var_225 + 1;                  
                    
                    //Gvar.Y_axis_item_position = Gvar.var_233[Gvar.var_1876].Var8 + 22;  
                    //var_225 = Gvar.var_233[Gvar.var_1876].Var8 + 1;
                    Adap.DSPLAY(100);
                    // await Func.func337(); // メッセージ表示処理(自動)
                    await Func.func337(); // メッセージ表示処理(自動)
                    await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
                if (Gvar.var_225 == Gvar.var_233[Gvar.var_1876].Var8 || Gvar.var_225 == Gvar.var_1884) {
                    
                    Gvar.Y_axis_item_position = 45;
                    Gvar.var_225 = 1;

                    Adap.DSPLAY(100);
                    // await Func.func337(); // メッセージ表示処理(自動)
                    await Func.func337(); // メッセージ表示処理(自動)
                    await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
            }
            if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
                if (Gvar.var_225 != 1) {
                    
                    Gvar.Y_axis_item_position = Gvar.Y_axis_item_position - 22;
                    Gvar.var_225 = Gvar.var_225 - 1;

                    Adap.DSPLAY(100);
                    // await Func.func337(); // メッセージ表示処理(自動)
                    await Func.func337(); // メッセージ表示処理(自動)
                    await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
                if (Gvar.var_225 == 1) {
                    
                    Gvar.Y_axis_item_position = (Gvar.var_233[Gvar.var_1876].Var8 - 1) * 22 + 45;
                    Gvar.var_225 = Gvar.var_233[Gvar.var_1876].Var8;

                    Adap.DSPLAY(100);
                    // await Func.func337(); // メッセージ表示処理(自動)
                    await Func.func337(); // メッセージ表示処理(自動)
                    await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
            }
        }
        // アイテムを選択した時の表示項目の割り振り？？
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            // No != 3 なので、アイテム個数 Gvar.var_225 が0でなければ
            if (Gvar.var_1866 == 1 && Gvar.item_page_number != 3) {
                Adap.DSPLAY(  212);
                await Func.func469(); // ヤバいものへの "入れる" 選択
                return;
            }
            // No != 3 なので、アイテム個数 Gvar.var_225 が0であれば
            if (Gvar.var_1866 == 1 && Gvar.item_page_number == 3) {
                Adap.DSPLAY(  212);
                Gvar.var_2040 = 1;
                await Func.func469(); // ヤバいものへの "入れる" 選択
                return;
            }

            if (Gvar.var_220 == 1 && Gvar.var_233[Gvar.var_1876].Var8 != 0 && Gvar.var_233[Gvar.var_1876].Var0 < 805) {
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                Gvar.var_221 = 1;
                Gvar.var_229 = 44;
                Gvar.var_222 = 1;
                await Func.func462(); // アイテムidごとに区分分け関数
                return;
            }
            if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                if (Gvar.var_1240 == 1) { // クレイジーD発動フラグ。道具画面処理を読み込む度にフラグが上がり、次へ進んでいく
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func522(); //disc同士の合成関数(クレイジーDの発動能力)1 何故か関数が二つある
                    return;
                }
                if (Gvar.var_1240 == 2) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func523(); //disc同士の合成関数(クレイジーDの発動能力)2  何故か関数が二つある
                    return;
                }
                if (Gvar.var_2000 == 1) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func771(); // ムーディーブルース以外でアイテムを送る手段(サウェッジガーデン？アバッキオ？)
                    return;
                }
                if (Gvar.var_2001 == 1) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func775(); // ムーディーブルース以外でアイテムを送る手段(サウェッジガーデン？アバッキオ？)
                    return;
                }
                if (Gvar.var_1950 >= 1) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func444(); // discに対してコミックを読んだ時の強化処理
                    return;
                }
                if (Gvar.var_1945 == 1) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func439(); // アヴドゥルのdisc効果
                    return;
                }
                if (Gvar.var_1945 == 2) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func441(); // ギアッチョのdisc効果
                    return;
                }
                if (Gvar.var_1945 == 3) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func442(); // プッチ神父のdisc効果
                    return;
                }
                if (Gvar.var_2005 == 1) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func480(); // 道具画面(メニュー画面/道具)からの足元交換
                    return;
                }
                if (Gvar.var_2004 == 1) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Stand.func524(); // セックスピストルズの発動能力
                    return;
                }
                if (Gvar.var_2006 == 1) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func525(); // ボーイⅡマンの発動能力
                    return;
                }
                if (Gvar.var_2007 == 1) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Stand.func533(); // ムーディーブルースの発動によってアイテムを倉庫に送る動作処理
                    return;
                }
                // No != 3 なので、アイテム個数 Gvar.var_225 が0でなければ
                if (Gvar.item_page_number != 3) {
                    Gvar.var_221 = 1;
                    Gvar.var_229 = 44;
                    Gvar.var_222 = 1;
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func462(); // アイテムidごとに区分分け関数
                    return;
                }
                // No = 3 なので、アイテム個数 Gvar.var_225 が0であれば
                if (Gvar.item_page_number == 3) {
                    Gvar.var_221 = 1;
                    Gvar.var_229 = 44;
                    Gvar.var_222 = 10;
                    Gvar.var_231 = 1;
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func462(); // アイテムidごとに区分分け関数
                    return;
                }
            }
        }
        if (Gvar.key_X_on == 1) { // キャンセルボタンXが押されたら
            if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                Gvar.var_221 = 0;
                
                Gvar.var_225 = Gvar.var_1882;
                Gvar.Y_axis_item_position = Gvar.var_1883;
                
                Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                Gvar.var_1965 = 0;
                Gvar.var_231 = 0;
                Gvar.var_1880 = 0;
                Gvar.item_page_number = Gvar.var_1885;
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051(); // キー入力待ち処理
                await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                return;
            }
            if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                if (Gvar.var_1866 == 0) {
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    Gvar.var_1240 = 0;
                    Gvar.var_1999 = 0;
                    Gvar.var_2000 = 0;
                    Gvar.var_2001 = 0;
                    Gvar.var_1950 = 0;
                    Gvar.var_217 = 0;
                    Gvar.var_2002 = 0;
                    Gvar.var_2003 = 0;
                    Gvar.var_2004 = 0;
                    Gvar.var_2005 = 0;
                    Gvar.var_1945 = 0;
                    Gvar.var_1252 = 0;
                    Gvar.var_2006 = 0;
                    Gvar.var_2007 = 0;
                    Gvar.var_1208 = 0;
                    Gvar.var_234 = 0;
                    Gvar.var_231 = 0;
                    Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                    Gvar.var_1667 = 0;
                    Gvar.var_2008 = 0;
                    Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                    Gvar.var_1965 = 0;
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_1866 == 1) {
                    Gvar.var_1866 = 0;
                    Gvar.var_221 = 1;
                    Gvar.var_229 = 44;
                    Gvar.var_225 = Gvar.var_1877;
                    Gvar.item_page_number = Gvar.var_1878;
                    Gvar.Y_axis_item_position = Gvar.var_1879;
                    Gvar.var_234 = 0;
                    Gvar.var_222 = 1;
                    if (Gvar.var_231 == 1) {
                        Gvar.var_222 = 10;
                    }
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func051(); // キー入力待ち処理
                    await Func.func462(); // アイテムidごとに区分分け関数
                    return;
                }
            }
        }
        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
}

export {func461}
