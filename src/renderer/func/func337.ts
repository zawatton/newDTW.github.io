import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// メッセージ処理関係呼び出し
async function func337(this: any) {
        Adap.dbgprt(337);
        await Adap.await_(Gvar.animationDelay);
        Adap.redraw(2);
        if (Gvar.time_paused == 1 || Gvar.time_paused_count >= 1) { // 時止め(時消し飛ばし)状態の場合
            Adap.gsel(24);
        }
        await Func.func324X(); // マップ背景画像の描写処理

        await Func.func326();
        if (Gvar.var_772 == 1) {
            await Func.func353();
        }
        await Func.func330(); // ディアボロの周りの暗視エフェクト処理
        await Func.func328();
        if (Gvar.var_243 >= 1) {
            await Func.func352();
        }
        if (Gvar.var_1189 >= 1) {
            await Func.func355();
        }
        // エフェクト "キラキラ" 表示フラグがON
        if (Gvar.var_271 == 1) {
            await Func.func354(); // エフェクト "キラキラ" 表示処理
        }
        if (Gvar.var_1190 >= 1) {
            await Func.func413();
        }
        if (Gvar.var_1191 == 1) {
            await Func.func412(); // アイテムを投げて床に落ちた時のアイテム表示処理
        }
        if (Gvar.var_1192 >= 1) {
            await Func.func583(); // 敵の射撃攻撃モーション処理(ドット絵座標設定等)
        }
        if (Gvar.var_1193 >= 1) {
            await Func.func348();
        }
        if (Gvar.var_1194 == 1) {
            await Func.func347();
        }
        if (Gvar.var_1195 == 1) {
            await Func.func648();
        }
        if (Gvar.var_1196 == 1) {
            await Func.func671();
        }
        if (Gvar.var_1197 > 0) {
            await Func.func350();
        }
        if (Gvar.var_1198 > 0) {
            await Func.func582();
        }
        // Gvar.var_127 = 1 瞼が落ちていたり目が見えない状態 & 記憶DISC「ンドゥール」の効果発動フラグON
        if (Gvar.var_127 == 1 || Gvar.var_132 >= 1) {
            await Func.func329(); // 画面全体に黒いブラインドをかける処理
        }
        await Func.func325(); // 画面上にマップを表示する機能
        await Func.func342(); // 画面上部のステータス表示(フロア, レベル, HP現在値, HP最大値, 所持金)
        await Func.func343();
        if (Gvar.time_paused == 1) { // 時止め(時消し飛ばし)状態の場合
            Adap.gsel(25);
            Adap.pos(0, 0);
            Adap.gcopy(24, 0, 0, 340, 340);
            Adap.gsel(0);
            Adap.pos(0, 0);
            Adap.gmode(0, null, null, null);
            Adap.gcopy(25, 0, 0, 340, 340);
            if (Gvar.var_490 == 0 && Gvar.var_502 != 6) {
                await Func.func345(); // ディアボロ本体の描画処理
            }
            if (Gvar.var_243 >= 1) {
                await Func.func352();
            }
        }
        if (Gvar.time_paused_count >= 1) {
            Adap.gsel(25);
            Adap.pos(0, 0);
            Adap.gcopy(24, 0, 0, 340, 340);
            Adap.gsel(0);
            Adap.pos(0, 0);
            Adap.gmode(0, null, null, null);
            Adap.gcopy(25, 0, 0, 340, 340);
            if (Gvar.var_127 == 0 && Gvar.var_132 == 0) {
                if (Gvar.var_154 >= 1) {
                    await Func.func345(); // ディアボロ本体の描画処理
                    if (Gvar.var_243 >= 1) {
                        await Func.func352();
                    }
                }
                Gvar.var_1199 = 1;
                await Func.func565();
                Gvar.var_1199 = 0;
            }
        }
        if (Gvar.var_755 >= 1) {
            await Func.func334();
        }
        if (Gvar.var_1200 == 1) {
            await Func.func674();
        }
        if (Gvar.var_198 == 1) {
            await Func.func048(); // メッセージ表示処理
        }
        if (Gvar.var_634 >= 10 || Gvar.var_635 >= 1 || Gvar.var_636 >= 1 || Gvar.var_633 >= 1 || Gvar.var_632 >= 1 || Gvar.var_1201 >= 1) {
            await Music.func102(); // 各ボリューム調整キーを押した時の表示
        }
        if (Gvar.open_item_menue == 1) { // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func460(); // 道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具)
        }
        if (Gvar.var_1202 == 1) {
            await Func.func714(); // 店での購入時のメッセージ表示
        }
        if (Gvar.var_1203 == 1) {
            await Func.func485();
        }
        if (Gvar.var_195 == 1) {
            await Func.func068(); // メニュー画面各コンディション表示
            await Func.func069(); // 現在装備しているdisc表示欄の設定？
        }
        if (Gvar.var_196 == 1) { // Mフラグ:メニュー画面 Func.func054
            await Func.func054(); // メニュー画面を開いた時の表示(道具、足元、状態、設定)
        }
        if (Gvar.var_405 == 1) {
            await Func.func063(); // ダンジョン内の階段機能
        }
        if (Gvar.var_548 == 1) { // 選択肢処理フラグONであれば
            await Func.func0899(); // 選択肢処理(はい、いいえ & 買う、やめる等)
        }
        if (Gvar.var_1204 == 1) {
            await Func.func0878();
        }
        if (Gvar.var_1205 >= 1) {
            await Func.func0855();
        }
        if (Gvar.var_1206 == 1) {
            await Func.func0859();
        }
        if (Gvar.var_499 == 1) { // Mフラグ:設定画面 Func.func056
            await Func.func056(); // メニュー画面の"設定"の表示 (マップON、履歴、資料、システム、終了)
        }
        if (Gvar.var_1207 == 1) {
            await Func.func449(); // 魔法のランプでジャッジメントを召喚した時のメッセージ
        }
        // メッセージ自動送りキャンセルフラグが ON の場合
        if (Gvar.var_765 == 1) {
            if (Gvar.var_766 == 0 || Gvar.var_766 == 1 || Gvar.var_766 == 2) {
                await Func.func341();
            }
        }
        if (Gvar.var_508 == 1) { // Mフラグ:資料(設定画面) Func.func058
            await Func.func058(); // メニュー画面の設定からいける"資料"の表示
        }
        if (Gvar.var_502 == 1) {
            await Func.func363();
        }
        if (Gvar.var_502 == 3) {
            await Func.func373();
        }
        if (Gvar.var_502 == 5) {
            await Func.func377();
        }
        if (Gvar.var_502 == 6) {
            await Func.func379();
        }
        if (Gvar.var_511 >= 1) {
            await Func.func360();
        }
        if (Gvar.var_1208 == 1) {
            await Func.func528();
        }
        if (Gvar.var_498 == 1) {
            await Func.func382();
        }
        if (Gvar.var_1209 == 1) {
            await Func.func367(); // アイテムの名前や説明表示
        }
        //if (Gvar.var_68 == 1) {
        //    await Func.func077(); // 各ダンジョンの背景描写処理ではなさそう
        //}
        if (Gvar.var_373 >= 1) {
            await Func.func078(); // ディアボロの試練クリア時の「完」メッセージ
        }
        if (Gvar.var_509 == 1) {
            await Func.func197();
        }
        if (Gvar.var_900 == 1) {
            await Func.func196(); // ゲームスピード設定項目
        }
        if (Gvar.var_901 == 1) {
            await Func.func204(); // メッセージ色設定変更表示
        }
        if (Gvar.var_904 == 1) {
            await Func.func207();
        }
        if (Gvar.var_905 == 1) {
            await Func.func200();
        }
        if (Gvar.var_902 == 1) {
            await Func.func210();
        }
        if (Gvar.var_903 == 1) {
            await Func.func219();
        }
        if (Gvar.var_630 >= 1) {
            await Func.func228();
        }
        if (Gvar.var_1210 == 1) {
            await Func.func0994();
        }
        if (Gvar.var_10 >= 1) {
            await Func.func338();
        }
        Adap.redraw(1);
        if (Gvar.var_243 > 0) {
            Gvar.var_243 = Gvar.var_243 + 1;
            if (Gvar.var_243 == 12) {
                Gvar.var_243 = 0;
            }
        }
        if (Gvar.var_1211 > 0) {
            Gvar.var_1211 = Gvar.var_1211 + 1;
            if (Gvar.var_1211 >= 15) {
                Gvar.var_1211 = 0;
            }
        }
        if (Gvar.var_742 > 0) {
            Gvar.var_742 = Gvar.var_742 + 1;
            if (Gvar.var_742 >= 15) {
                Gvar.var_742 = 0;
            }
        }
        if (Gvar.var_747 > 0) {
            Gvar.var_747 = Gvar.var_747 + 1;
            if (Gvar.var_747 == 15) {
                Gvar.var_747 = 0;
                Gvar.var_1212 = 0;
            }
        }
        if (Gvar.var_1197 > 0) {
            Gvar.var_1197 = Gvar.var_1197 + 1;
            if (Gvar.var_1197 == 10) {
                Gvar.var_1197 = 0;
            }
        }
        if (Gvar.var_1198 > 0) {
            Gvar.var_1198 = Gvar.var_1198 + 1;
            if (Gvar.var_1198 == 10) {
                Gvar.var_1198 = 0;
            }
        }
        if (Gvar.var_1189 > 0) {
            Gvar.var_1189++;
            if (Gvar.var_1189 == 10) {
                Gvar.var_1189 = 0;
                Gvar.var_1213 = 0;
            }
        }
        if (Gvar.var_68 == 1) {
            Gvar.var_599 = Gvar.var_599 + 1;
            if (Gvar.var_599 == 20) {
                Gvar.var_599 = 0;
                Gvar.var_68 = 0;
            }
        }
        Gvar.var_784 = Gvar.var_784 + 1;
        if (Gvar.var_784 == 6) {
            Gvar.var_784 = 0;
        }
        if (Gvar.time_paused == 0 && Gvar.time_paused_count == 0) {
            Gvar.var_1153 = Gvar.var_1153 + 1;
            if (Gvar.var_1153 == 12) {
                Gvar.var_1153 = 0;
            }
        }
        // 時止め(時消し飛ばし)状態でない場合
        if (Gvar.time_paused == 0 && Gvar.time_paused_count == 0) {
            Gvar.var_1164 = Gvar.var_1164 + 1;
            if (Gvar.var_1164 == 6) {
                Gvar.var_1164 = 0;
            }
        }
        if (Gvar.var_1214 >= 1) {
            Gvar.var_1215 = Gvar.var_1215 + 1;
            if (Gvar.var_1215 == 6) {
                Gvar.var_1215 = 0;
            }
        }
        if (Gvar.var_108 == 1) {
            Gvar.var_1216 = Gvar.var_1216 + 1;
        }
        if (Gvar.var_1196 == 1) {
            Gvar.var_1217 = Gvar.var_1217 + 1;
            if (Gvar.var_1217 == 10) {
                Gvar.var_1217 = 0;
                Gvar.var_1196 = 0;
            }
        }
        if (Gvar.var_1190 >= 1) {
            Gvar.var_1190++;
            if (Gvar.var_1190 >= 10) {
                Gvar.var_1190 = 0;
            }
        }
        if (Gvar.var_1218 >= 1) {
            Gvar.var_1219 = Gvar.var_1219 + 1;
            if (Gvar.var_1219 == 26) {
                Gvar.var_1219 = 0;
            }
        }
        if (Gvar.var_1220 == 1) {
            Gvar.var_1221 = Gvar.var_1221 + 1;
            if (Gvar.var_1221 >= 8) {
                Gvar.var_1222 = 1;
            }
            if (Gvar.var_1221 == 10) {
                Gvar.var_1221 = 0;
                Gvar.var_1220 = 0;
                Gvar.var_1222 = 0;
                if (Gvar.var_1223 == 1) {
                    Gvar.var_1223 = 0;
                }
            }
        }
        if (Gvar.var_1224 >= 1) {
            Gvar.var_1225 = Gvar.var_1225 + 1;
            if (Gvar.var_1224 != 10 && Gvar.var_1225 >= 10) {
                Gvar.var_1225 = 0;
            }
        }
        if (Gvar.var_634 >= 1) {
            Gvar.var_634++;
            Gvar.var_632 = 0;
            Gvar.var_633 = 0;
            if (Gvar.var_634 == 100) {
                Gvar.var_634 = 0;
            }
        }
        if (Gvar.var_632 >= 1) {
            Gvar.var_632++;
            if (Gvar.var_632 >= 30) {
                Gvar.var_632 = 0;
            }
        }
        if (Gvar.var_633 >= 1) {
            Gvar.var_633++;
            if (Gvar.var_633 >= 30) {
                Gvar.var_633 = 0;
            }
        }
        if (Gvar.var_635 >= 1) {
            Gvar.var_635++;
            if (Gvar.var_635 == 30) {
                Gvar.var_635 = 0;
            }
        }
        if (Gvar.var_636 >= 1) {
            Gvar.var_636++;
            if (Gvar.var_636 == 30) {
                Gvar.var_636 = 0;
            }
        }
        if (Gvar.var_630 >= 1) {
            Gvar.var_630++;
            if (Gvar.var_630 == 30) {
                Gvar.var_630 = 0;
            }
        }
        if (Gvar.time_paused_count == 0) {
            Gvar.var_1226 = Gvar.var_1226 + 1;
            if (Gvar.var_1226 == 12) {
                Gvar.var_1226 = 0;
            }
        }
        if (Gvar.time_paused == 0) { // 時止め(時消し飛ばし)状態でない場合
            Gvar.var_1227 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
                if (Gvar.var_83[Gvar.var_1227].Var0 != 0) {
                    if (Gvar.time_paused_count != 0 && Gvar.var_152 == Gvar.var_1227) {
                        Gvar.var_83[Gvar.var_1227].Var32 = Gvar.var_83[Gvar.var_1227].Var32 + 1;
                        if (Gvar.var_83[Gvar.var_1227].Var32 >= 12) {
                            Gvar.var_83[Gvar.var_1227].Var32 = 0;
                        }
                    }
                    if (Gvar.time_paused_count == 0) {
                        Gvar.var_83[Gvar.var_1227].Var32 = Gvar.var_83[Gvar.var_1227].Var32 + 1;
                        if (Gvar.var_83[Gvar.var_1227].Var32 >= 12) {
                            Gvar.var_83[Gvar.var_1227].Var32 = 0;
                        }
                    }
                }
                Gvar.var_1227 = Gvar.var_1227 + 1;
            }
        }
        // メッセージ自動送りキャンセルフラグが OFF の場合
        if (Gvar.var_765 == 0) {
            Gvar.var_300 = Gvar.var_300 + 1;
            if (Gvar.var_300 > 40) {
                Gvar.var_300 = 0;
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
            }
        }
        Gvar.var_1228 = Gvar.var_1228 + 1;
        if (Gvar.var_1228 == 2) {
            Gvar.var_1228 = 0;
            if (Gvar.var_1229 > 0) {
                Gvar.var_1229 = Gvar.var_1229 + 1;
                if (Gvar.var_1229 > 5) {
                    Gvar.var_1229 = 0;
                }
            }
        }
        if (Gvar.var_407 >= 1) {
            Gvar.var_1230 = await Adap.ginfo(3);
            if (Gvar.var_407 == 1) {
                await Func.func0958();
            }
            if (Gvar.var_407 == 2) {
                await Func.func0985();
            }
            Adap.gsel(Gvar.var_1230);
        }
        return;
}

export {func337}
