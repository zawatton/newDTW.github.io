/**
 * func342 — func342 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 画面上部のステータス表示(フロア, レベル, HP現在値, HP最大値, 所持金)
async function func342(this: any) {
        Adap.dbgprt(342);
        if (Gvar.var_1233 == 1) {
            return;
        }
        Adap.gmode(2, null, null, null);

        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.color(1, 1, 1);
        if (Gvar.var_350 <= 0) {
            Adap.color(255, 255, 0);
        }
        if (Gvar.current_floor >= 100) {
            Gvar.var_44 = 45;
        }
        if (Gvar.current_floor < 100) {
            Gvar.var_44 = 35;
        }
        
        Adap.pos(Gvar.var_44, Gvar.var_41 + 2);
        Adap.mes("F");
        
        Adap.pos(Gvar.var_45, Gvar.var_41 + 2);
        Adap.mes("Lv");
        
        Adap.pos(Gvar.var_47, Gvar.var_41 + 2);
        Adap.mes("HP");
        
        Adap.pos(Gvar.var_51, Gvar.var_41 + 2);
        Adap.mes("/");
        
        Adap.pos(Gvar.var_59, Gvar.var_41 + 2);
        Adap.mes("G");
        
        Adap.pos(Gvar.var_44, Gvar.var_41 + 4);
        Adap.mes("F");
        
        Adap.pos(Gvar.var_45, Gvar.var_41 + 4);
        Adap.mes("Lv");
        
        Adap.pos(Gvar.var_47, Gvar.var_41 + 4);
        Adap.mes("HP");
        
        Adap.pos(Gvar.var_51, Gvar.var_41 + 4);
        Adap.mes("/");
        
        Adap.pos(Gvar.var_59, Gvar.var_41 + 4);
        Adap.mes("G");
        
        Adap.pos(Gvar.var_44 - 1, Gvar.var_41 + 3);
        Adap.mes("F");
        
        Adap.pos(Gvar.var_45 - 1, Gvar.var_41 + 3);
        Adap.mes("Lv");
        
        Adap.pos(Gvar.var_47 - 1, Gvar.var_41 + 3);
        Adap.mes("HP");
        
        Adap.pos(Gvar.var_51 - 1, Gvar.var_41 + 3);
        Adap.mes("/");
        
        Adap.pos(Gvar.var_59 - 1, Gvar.var_41 + 3);
        Adap.mes("G");
        
        Adap.pos(Gvar.var_44 + 1, Gvar.var_41 + 3);
        Adap.mes("F");
        
        Adap.pos(Gvar.var_45 + 1, Gvar.var_41 + 3);
        Adap.mes("Lv");
        
        Adap.pos(Gvar.var_47 + 1, Gvar.var_41 + 3);
        Adap.mes("HP");

        Adap.pos(Gvar.var_51 + 1, Gvar.var_41 + 3);
        Adap.mes("/");
        
        Adap.pos(Gvar.var_59 + 1, Gvar.var_41 + 3);
        Adap.mes("G");
        
        Adap.color(95, 160, 200);

        Adap.pos(Gvar.var_44, Gvar.var_41 + 3);
        Adap.mes("F");
        
        Adap.pos(Gvar.var_45, Gvar.var_41 + 3);
        Adap.mes("Lv");
        
        Adap.pos(Gvar.var_47, Gvar.var_41 + 3);
        Adap.mes("HP");
        
        Adap.pos(Gvar.var_51, Gvar.var_41 + 3);
        Adap.mes("/");
        
        Adap.pos(Gvar.var_59, Gvar.var_41 + 3);
        Adap.mes("G");

        Adap.font(Gvar.font_type, 20, 1);
        Adap.color(1, 1, 1);
        if (Gvar.current_floor < 10) {
            Adap.pos(Gvar.var_42 - 1, Gvar.var_41);
        }
        if (Gvar.current_floor >= 10) {
            Adap.pos(Gvar.var_43 - 1, Gvar.var_41);
        }
        if (Gvar.var_262 == 0) { // Gvar.var_262 == 0 なので、Gvar.dungeon_number = 0 でなければ
            // Gvar.current_floorは数値なので、toString() を使って文字列へ変換
            Adap.mes(Gvar.current_floor.toString());
        }
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Adap.mes("1");
        }
        
        Adap.pos(Gvar.var_46 - 1, Gvar.var_41);
        Adap.mes(Gvar.current_level.toString());


        if (Gvar.var_211 < 10) {
            Adap.pos(Gvar.var_48 - 1, Gvar.var_41);
        }
        if (Gvar.var_211 >= 10) {
            Adap.pos(Gvar.var_49 - 1, Gvar.var_41);
        }
        if (Gvar.var_211 >= 100) {
            Adap.pos(Gvar.var_50 - 1, Gvar.var_41);
        }
        Adap.mes(Gvar.var_211);
        Adap.pos(Gvar.var_52 - 1, Gvar.var_41);
        Adap.mes(Gvar.var_352);

        // 
        if (Gvar.wallet < 10) {
            Adap.pos(Gvar.var_53 - 1, Gvar.var_41);
        }
        if (Gvar.wallet >= 10) {
            Adap.pos(Gvar.var_54 - 1, Gvar.var_41);
        }
        if (Gvar.wallet >= 100) {
            Adap.pos(Gvar.var_55 - 1, Gvar.var_41);
        }
        if (Gvar.wallet >= 1000) {
            Adap.pos(Gvar.var_56 - 1, Gvar.var_41);
        }
        if (Gvar.wallet >= 10000) {
            Adap.pos(Gvar.var_57 - 1, Gvar.var_41);
        }
        if (Gvar.wallet >= 100000) {
            Adap.pos(Gvar.var_58 - 1, Gvar.var_41);
        }
        // Gvar.walletは数値なので、toString() を使って文字列へ変換
        Adap.mes(Gvar.wallet.toString());
        if (Gvar.current_floor < 10) {
            Adap.pos(Gvar.var_42 + 2, Gvar.var_41);
        }
        if (Gvar.current_floor >= 10) {
            Adap.pos(Gvar.var_43 + 2, Gvar.var_41);
        }
        if (Gvar.var_262 == 0) { // Gvar.var_262 == 0 なので、Gvar.dungeon_number = 0 でなければ
            // Gvar.current_floorは数値なので、toString() を使って文字列へ変換
            Adap.mes(Gvar.current_floor.toString());
        }
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Adap.mes("1");
        }
        
        Adap.pos(Gvar.var_46 + 2, Gvar.var_41);
        Adap.mes(Gvar.current_level.toString());

        if (Gvar.var_211 < 10) {
            Adap.pos(Gvar.var_48 + 2, Gvar.var_41);
        }
        if (Gvar.var_211 >= 10) {
            Adap.pos(Gvar.var_49 + 2, Gvar.var_41);
        }
        if (Gvar.var_211 >= 100) {
            Adap.pos(Gvar.var_50 + 2, Gvar.var_41);
        }
        Adap.mes(Gvar.var_211);
        Adap.pos(Gvar.var_52 + 2, Gvar.var_41);
        Adap.mes(Gvar.var_352);
        if (Gvar.wallet < 10) {
            Adap.pos(Gvar.var_53 + 2, Gvar.var_41);
        }
        if (Gvar.wallet >= 10) {
            Adap.pos(Gvar.var_54 + 2, Gvar.var_41);
        }
        if (Gvar.wallet >= 100) {
            Adap.pos(Gvar.var_55 + 2, Gvar.var_41);
        }
        if (Gvar.wallet >= 1000) {
            Adap.pos(Gvar.var_56 + 2, Gvar.var_41);
        }
        if (Gvar.wallet >= 10000) {
            Adap.pos(Gvar.var_57 + 2, Gvar.var_41);
        }
        if (Gvar.wallet >= 100000) {
            Adap.pos(Gvar.var_58 + 2, Gvar.var_41);
        }
        // Gvar.walletは数値なので、toString() を使って文字列へ変換
        Adap.mes(Gvar.wallet.toString());
        if (Gvar.current_floor < 10) {
            Adap.pos(Gvar.var_42, Gvar.var_41 - 1);
        }
        if (Gvar.current_floor >= 10) {
            Adap.pos(Gvar.var_43, Gvar.var_41 - 1);
        }
        if (Gvar.var_262 == 0) { // Gvar.var_262 == 0 なので、Gvar.dungeon_number = 0 でなければ
            // Gvar.current_floorは数値なので、toString() を使って文字列へ変換
            Adap.mes(Gvar.current_floor.toString());
        }
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Adap.mes("1");
        }
        Adap.pos(Gvar.var_46, Gvar.var_41 - 1);
        Adap.mes(Gvar.current_level.toString());
        if (Gvar.var_211 < 10) {
            Adap.pos(Gvar.var_48, Gvar.var_41 - 1);
        }
        if (Gvar.var_211 >= 10) {
            Adap.pos(Gvar.var_49, Gvar.var_41 - 1);
        }
        if (Gvar.var_211 >= 100) {
            Adap.pos(Gvar.var_50, Gvar.var_41 - 1);
        }
        Adap.mes(Gvar.var_211);
        Adap.pos(Gvar.var_52, Gvar.var_41 - 1);
        Adap.mes(Gvar.var_352);
        if (Gvar.wallet < 10) {
            Adap.pos(Gvar.var_53, Gvar.var_41 - 1);
        }
        if (Gvar.wallet >= 10) {
            Adap.pos(Gvar.var_54, Gvar.var_41 - 1);
        }
        if (Gvar.wallet >= 100) {
            Adap.pos(Gvar.var_55, Gvar.var_41 - 1);
        }
        if (Gvar.wallet >= 1000) {
            Adap.pos(Gvar.var_56, Gvar.var_41 - 1);
        }
        if (Gvar.wallet >= 10000) {
            Adap.pos(Gvar.var_57, Gvar.var_41 - 1);
        }
        if (Gvar.wallet >= 100000) {
            Adap.pos(Gvar.var_58, Gvar.var_41 - 1);
        }
        // Gvar.walletは数値なので、toString() を使って文字列へ変換
        Adap.mes(Gvar.wallet.toString());
        if (Gvar.current_floor < 10) {
            Adap.pos(Gvar.var_42, Gvar.var_41 + 1);
        }
        if (Gvar.current_floor >= 10) {
            Adap.pos(Gvar.var_43, Gvar.var_41 + 1);
        }
        if (Gvar.var_262 == 0) { // Gvar.var_262 == 0 なので、Gvar.dungeon_number = 0 でなければ
            // Gvar.current_floorは数値なので、toString() を使って文字列へ変換
            Adap.mes(Gvar.current_floor.toString());
        }
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Adap.mes("1");
        }
        Adap.pos(Gvar.var_46, Gvar.var_41 + 1);
        Adap.mes(Gvar.current_level.toString());
        if (Gvar.var_211 < 10) {
            Adap.pos(Gvar.var_48, Gvar.var_41 + 1);
        }
        if (Gvar.var_211 >= 10) {
            Adap.pos(Gvar.var_49, Gvar.var_41 + 1);
        }
        if (Gvar.var_211 >= 100) {
            Adap.pos(Gvar.var_50, Gvar.var_41 + 1);
        }
        Adap.mes(Gvar.var_211);
        Adap.pos(Gvar.var_52, Gvar.var_41 + 1);
        Adap.mes(Gvar.var_352);
        if (Gvar.wallet < 10) {
            Adap.pos(Gvar.var_53, Gvar.var_41 + 1);
        }
        if (Gvar.wallet >= 10) {
            Adap.pos(Gvar.var_54, Gvar.var_41 + 1);
        }
        if (Gvar.wallet >= 100) {
            Adap.pos(Gvar.var_55, Gvar.var_41 + 1);
        }
        if (Gvar.wallet >= 1000) {
            Adap.pos(Gvar.var_56, Gvar.var_41 + 1);
        }
        if (Gvar.wallet >= 10000) {
            Adap.pos(Gvar.var_57, Gvar.var_41 + 1);
        }
        if (Gvar.wallet >= 100000) {
            Adap.pos(Gvar.var_58, Gvar.var_41 + 1);
        }
        // Gvar.walletは数値なので、toString() を使って文字列へ変換
        Adap.mes(Gvar.wallet.toString());
        if (Gvar.current_floor < 10) {
            Adap.pos(Gvar.var_42 + 1, Gvar.var_41 + 1);
        }
        if (Gvar.current_floor >= 10) {
            Adap.pos(Gvar.var_43 + 1, Gvar.var_41 + 1);
        }
        if (Gvar.var_262 == 0) { // Gvar.var_262 == 0 なので、Gvar.dungeon_number = 0 でなければ
            // Gvar.current_floorは数値なので、toString() を使って文字列へ変換
            Adap.mes(Gvar.current_floor.toString());
        }
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Adap.mes("1");
        }
        Adap.pos(Gvar.var_46 + 1, Gvar.var_41 + 1);
        Adap.mes(Gvar.current_level.toString());
        if (Gvar.var_211 < 10) {
            Adap.pos(Gvar.var_48 + 2, Gvar.var_41 + 1);
        }
        if (Gvar.var_211 >= 10) {
            Adap.pos(Gvar.var_49 + 2, Gvar.var_41 + 1);
        }
        if (Gvar.var_211 >= 100) {
            Adap.pos(Gvar.var_50 + 2, Gvar.var_41 + 1);
        }
        Adap.mes(Gvar.var_211);
        Adap.pos(Gvar.var_52 + 1, Gvar.var_41 + 1);
        Adap.mes(Gvar.var_352);
        if (Gvar.wallet < 10) {
            Adap.pos(Gvar.var_53 + 1, Gvar.var_41 + 1);
        }
        if (Gvar.wallet >= 10) {
            Adap.pos(Gvar.var_54 + 1, Gvar.var_41 + 1);
        }
        if (Gvar.wallet >= 100) {
            Adap.pos(Gvar.var_55 + 1, Gvar.var_41 + 1);
        }
        if (Gvar.wallet >= 1000) {
            Adap.pos(Gvar.var_56 + 1, Gvar.var_41 + 1);
        }
        if (Gvar.wallet >= 10000) {
            Adap.pos(Gvar.var_57 + 1, Gvar.var_41 + 1);
        }
        if (Gvar.wallet >= 100000) {
            Adap.pos(Gvar.var_58 + 1, Gvar.var_41 + 1);
        }
        // Gvar.walletは数値なので、toString() を使って文字列へ変換
        Adap.mes(Gvar.wallet.toString());
        if (Gvar.current_floor < 10) {
            Adap.pos(Gvar.var_42 + 1, Gvar.var_41 - 1);
        }
        if (Gvar.current_floor >= 10) {
            Adap.pos(Gvar.var_43 + 1, Gvar.var_41 - 1);
        }
        if (Gvar.var_262 == 0) { // Gvar.var_262 == 0 なので、Gvar.dungeon_number = 0 でなければ
            // Gvar.current_floorは数値なので、toString() を使って文字列へ変換
            Adap.mes(Gvar.current_floor.toString());
        }
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Adap.mes("1");
        }
        Adap.pos(Gvar.var_46 + 1, Gvar.var_41 - 1);
        Adap.mes(Gvar.current_level.toString());
        if (Gvar.var_211 < 10) {
            Adap.pos(Gvar.var_48 + 2, Gvar.var_41 - 1);
        }
        if (Gvar.var_211 >= 10) {
            Adap.pos(Gvar.var_49 + 2, Gvar.var_41 - 1);
        }
        if (Gvar.var_211 >= 100) {
            Adap.pos(Gvar.var_50 + 2, Gvar.var_41 - 1);
        }
        Adap.mes(Gvar.var_211);
        Adap.pos(Gvar.var_52 + 1, Gvar.var_41 - 1);
        Adap.mes(Gvar.var_352);
        if (Gvar.wallet < 10) {
            Adap.pos(Gvar.var_53 + 1, Gvar.var_41 - 1);
        }
        if (Gvar.wallet >= 10) {
            Adap.pos(Gvar.var_54 + 1, Gvar.var_41 - 1);
        }
        if (Gvar.wallet >= 100) {
            Adap.pos(Gvar.var_55 + 1, Gvar.var_41 - 1);
        }
        if (Gvar.wallet >= 1000) {
            Adap.pos(Gvar.var_56 + 1, Gvar.var_41 - 1);
        }
        if (Gvar.wallet >= 10000) {
            Adap.pos(Gvar.var_57 + 1, Gvar.var_41 - 1);
        }
        if (Gvar.wallet >= 100000) {
            Adap.pos(Gvar.var_58 + 1, Gvar.var_41 - 1);
        }
        // Gvar.walletは数値なので、toString() を使って文字列へ変換
        Adap.mes(Gvar.wallet.toString());
        Adap.color(255, 255, 255);
        if (Gvar.current_floor < 10) {
            Adap.pos(Gvar.var_42, Gvar.var_41);
        }
        if (Gvar.current_floor >= 10) {
            Adap.pos(Gvar.var_43, Gvar.var_41);
        }
        if (Gvar.var_262 == 0) { // Gvar.var_262 == 0 なので、Gvar.dungeon_number = 0 でなければ
            // Gvar.current_floorは数値なので、toString() を使って文字列へ変換
            Adap.mes(Gvar.current_floor.toString());
        }
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Adap.mes("1");
        }
        Adap.pos(Gvar.var_46, Gvar.var_41);
        Adap.mes(Gvar.current_level.toString());
        if (Gvar.var_211 < 10) {
            Adap.pos(Gvar.var_48, Gvar.var_41);
        }
        if (Gvar.var_211 >= 10) {
            Adap.pos(Gvar.var_49, Gvar.var_41);
        }
        if (Gvar.var_211 >= 100) {
            Adap.pos(Gvar.var_50, Gvar.var_41);
        }
        if (Gvar.var_211 > 0) {
            Gvar.var_1234 = Math.floor(Gvar.var_352 / Gvar.var_211);
        }
        if (Gvar.var_1234 < 2) {
            Adap.color(255, 255, 255);
        }
        if (Gvar.var_1234 >= 2 || Gvar.var_211 < 1) {
            Adap.color(220, 0, 0);
        }
        Adap.mes(Gvar.var_211);
        Adap.pos(Gvar.var_52, Gvar.var_41);
        if (Gvar.var_1234 < 2) {
            Adap.color(255, 255, 255);
        }
        if (Gvar.var_1234 >= 2) {
            Adap.color(220, 0, 0);
        }
        Adap.mes(Gvar.var_352);
        if (Gvar.wallet < 10) {
            Adap.pos(Gvar.var_53, Gvar.var_41);
        }
        if (Gvar.wallet >= 10) {
            Adap.pos(Gvar.var_54, Gvar.var_41);
        }
        if (Gvar.wallet >= 100) {
            Adap.pos(Gvar.var_55, Gvar.var_41);
        }
        if (Gvar.wallet >= 1000) {
            Adap.pos(Gvar.var_56, Gvar.var_41);
        }
        if (Gvar.wallet >= 10000) {
            Adap.pos(Gvar.var_57, Gvar.var_41);
        }
        if (Gvar.wallet >= 100000) {
            Adap.pos(Gvar.var_58, Gvar.var_41);
        }
        Adap.color(255, 255, 255);
        // Gvar.walletは数値なので、toString() を使って文字列へ変換
        Adap.mes(Gvar.wallet.toString());
        Adap.color(255, 255, 255);
        if (Gvar.current_floor < 10) {
            Adap.pos(Gvar.var_42 + 1, Gvar.var_41);
        }
        if (Gvar.current_floor >= 10) {
            Adap.pos(Gvar.var_43 + 1, Gvar.var_41);
        }
        if (Gvar.var_262 == 0) { // Gvar.var_262 == 0 なので、Gvar.dungeon_number = 0 でなければ
            // Gvar.current_floorは数値なので、toString() を使って文字列へ変換
            Adap.mes(Gvar.current_floor.toString());
        }
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Adap.mes("1");
        }
        Adap.pos(Gvar.var_46 + 1, Gvar.var_41);
        Adap.mes(Gvar.current_level.toString());
        if (Gvar.var_211 < 10) {
            Adap.pos(Gvar.var_48 + 1, Gvar.var_41);
        }
        if (Gvar.var_211 >= 10) {
            Adap.pos(Gvar.var_49 + 1, Gvar.var_41);
        }
        if (Gvar.var_211 >= 100) {
            Adap.pos(Gvar.var_50 + 1, Gvar.var_41);
        }
        if (Gvar.var_211 > 0) {
            Gvar.var_1234 = Math.floor(Gvar.var_352 / Gvar.var_211);
        }
        if (Gvar.var_1234 < 2) {
            Adap.color(255, 255, 255);
        }
        if (Gvar.var_1234 >= 2 || Gvar.var_211 < 1) {
            Adap.color(220, 0, 0);
        }
        Adap.mes(Gvar.var_211);
        Adap.pos(Gvar.var_52 + 1, Gvar.var_41);
        if (Gvar.var_1234 < 2) {
            Adap.color(255, 255, 255);
        }
        if (Gvar.var_1234 >= 2) {
            Adap.color(220, 0, 0);
        }
        Adap.mes(Gvar.var_352);
        if (Gvar.wallet < 10) {
            Adap.pos(Gvar.var_53 + 1, Gvar.var_41);
        }
        if (Gvar.wallet >= 10) {
            Adap.pos(Gvar.var_54 + 1, Gvar.var_41);
        }
        if (Gvar.wallet >= 100) {
            Adap.pos(Gvar.var_55 + 1, Gvar.var_41);
        }
        if (Gvar.wallet >= 1000) {
            Adap.pos(Gvar.var_56 + 1, Gvar.var_41);
        }
        if (Gvar.wallet >= 10000) {
            Adap.pos(Gvar.var_57 + 1, Gvar.var_41);
        }
        if (Gvar.wallet >= 100000) {
            Adap.pos(Gvar.var_58 + 1, Gvar.var_41);
        }
        Adap.color(255, 255, 255);
        // Gvar.walletは数値なので、toString() を使って文字列へ変換
        Adap.mes(Gvar.wallet.toString());
        return;
}

export {func342}
