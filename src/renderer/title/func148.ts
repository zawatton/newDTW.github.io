/**
 * func148 — func148 ボス日記選択画面(タイトル画面/ログイン画面/ボス日記選択画面)の表示
 *
 * (org原典: newDTW_login / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import { t, tf } from '../i18n'

// ボス日記選択画面(タイトル画面/ログイン画面/ボス日記選択画面)の表示
async function func148(this: any) {
        Adap.dbgprt(148);
        Adap.color(0, 0, 0);

        Adap.gmode(4, null, null, 150);
        Gvar.var_739 = 50;
        Gvar.var_740 = 70;
        Gvar.var_741 = Gvar.var_740;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            Adap.pos(50, Gvar.var_740);
            Adap.gcopy(12, 0, 0, 251, 60);
            Adap.color(255, 255, 255);
            Adap.line(Gvar.var_739 + 2, Gvar.var_740 + 1, Gvar.var_739 + 247, Gvar.var_740 + 1);
            Adap.line(Gvar.var_739 + 2, Gvar.var_740 + 59, Gvar.var_739 + 247, Gvar.var_740 + 59);
            Adap.line(Gvar.var_739 + 1, Gvar.var_740 + 2, Gvar.var_739 + 1, Gvar.var_740 + 57);
            Adap.line(Gvar.var_739 + 249, Gvar.var_740 + 2, Gvar.var_739 + 249, Gvar.var_740 + 57);
            Adap.pset(Gvar.var_739 + 2, Gvar.var_740 + 2);
            Adap.pset(Gvar.var_739 + 248, Gvar.var_740 + 2);
            Adap.pset(Gvar.var_739 + 2, Gvar.var_740 + 58);
            Adap.pset(Gvar.var_739 + 248, Gvar.var_740 + 58);
            Gvar.var_740 = Gvar.var_740 + 70;
        }

        Adap.font(Gvar.font_type, 16, 1);
        Adap.color(255, 255, 255);

        // ボス日記1のデータが0でなければ
        if (Gvar.var_703 != 0) {
            Adap.pos(80, Gvar.var_741 + 15);
            Adap.mes(tf("１：{0}", Gvar.var_705));
            Adap.pos(150, Gvar.var_741 + 35);
            if (Gvar.var_706 > 0) {
                Adap.mes(tf("{0}{1}", Gvar.var_706, t("階")));
            }
            Adap.pos(200, Gvar.var_741 + 35);
            Adap.mes(tf("{0}{1}", Gvar.var_707, t("回死亡")));

            // エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグがONなら
            if (Gvar.var_708 >= 1) {
                Adap.pos(80, Gvar.var_741 + 35);
                Adap.gmode(2, null, null, null);
                // Adap.buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
                // 絵:エンブレム(ダンジョン(ホテルの外？)クリア時)
                Adap.gcopy(8, 100, 82, 17, 17);
            }
            // エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)解放フラグ
            if (Gvar.var_709 >= 1) {
                Adap.pos(102, Gvar.var_741 + 35);
                Adap.gmode(2, null, null, null);
                // Adap.buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
                // 絵:エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)
                Adap.gcopy(8, 120, 82, 17, 17);
            }
            if (Gvar.var_710 >= 1) {
                Adap.pos(124, Gvar.var_741 + 35);
                Adap.gmode(2, null, null, null);
                // Adap.buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
                // 絵:エンブレム(ダンジョン(ディアボロの試練？)クリア時)                      
                Adap.gcopy(8, 140, 82, 17, 17);
            }
        }
        if (Gvar.var_703 == 0) {
            Adap.pos(80, Gvar.var_741 + 15);
            Adap.mes(tf("１： {0}", t("ボス日記を作る")));
        }
        if (Gvar.var_711 != 0) {
            Adap.pos(80, Gvar.var_741 + 85);
            Adap.mes(tf("２：{0}", Gvar.var_712));
            Adap.pos(150, Gvar.var_741 + 105);
            if (Gvar.var_713 > 0) {
                Adap.mes(tf("{0}{1}", Gvar.var_713, t("階")));
            }
            Adap.pos(200, Gvar.var_741 + 105);
            Adap.mes(tf("{0}{1}", Gvar.var_714, t("回死亡")));

            // エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグ
            if (Gvar.var_715 >= 1) {
                Adap.pos(80, Gvar.var_741 + 105);
                Adap.gmode(2, null, null, null);   
                // Adap.buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
                // 絵:エンブレム(ダンジョン(ホテルの外？)クリア時)
                Adap.gcopy(8, 100, 82, 17, 17);
            }
            // エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)解放フラグ
            if (Gvar.var_716 >= 1) {
                Adap.pos(102, Gvar.var_741 + 105);
                Adap.gmode(2, null, null, null);
                // Adap.buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
                // 絵:エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)                
                Adap.gcopy(8, 120, 82, 17, 17);
            }
            if (Gvar.var_717 >= 1) {
                Adap.pos(124, Gvar.var_741 + 105);
                Adap.gmode(2, null, null, null);
                // Adap.buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
                // 絵:エンブレム(ダンジョン(ディアボロの試練？)クリア時)                      
                Adap.gcopy(8, 140, 82, 17, 17);
            }
        }
        if (Gvar.var_711 == 0) {
            Adap.pos(80, Gvar.var_741 + 85);
            Adap.mes(tf("２： {0}", t("ボス日記を作る")));
        }


        if (Gvar.var_718 != 0) {
            Adap.pos(80, Gvar.var_741 + 155);
            Adap.mes(tf("３：{0}", Gvar.var_719));
            Adap.pos(150, Gvar.var_741 + 175);
            if (Gvar.var_720 > 0) {
                Adap.mes(tf("{0}{1}", Gvar.var_720, t("階")));
            }
            Adap.pos(200, Gvar.var_741 + 175);
            Adap.mes(tf("{0}{1}", Gvar.var_721, t("回死亡")));

            // エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグ
            if (Gvar.var_722 >= 1) {
                Adap.pos(80, Gvar.var_741 + 175);
                Adap.gmode(2, null, null, null);
                // Adap.buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
                // 絵:エンブレム(ダンジョン(ホテルの外？)クリア時)                
                Adap.gcopy(8, 100, 82, 17, 17);
            }
            // エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)解放フラグ
            if (Gvar.var_723 >= 1) {
                Adap.pos(102, Gvar.var_741 + 175);
                Adap.gmode(2, null, null, null);
                // Adap.buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
                // 絵:エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)                
                Adap.gcopy(8, 120, 82, 17, 17);
            }
            if (Gvar.var_724 >= 1) {
                Adap.pos(124, Gvar.var_741 + 175);
                Adap.gmode(2, null, null, null);
                // Adap.buffer(8)は"img1.gif"。X座標100、Y座標82から切り取り長さ X方向17、Y方向17
                // 絵:エンブレム(ダンジョン(ディアボロの試練？)クリア時)                      
                Adap.gcopy(8, 140, 82, 17, 17);
            }
        }
        if (Gvar.var_718 == 0) {
            Adap.pos(80, Gvar.var_741 + 155);
            Adap.mes(tf("３： {0}", t("ボス日記を作る")));
        }
        if (Gvar.var_726 == 1) {
            Adap.pos(53, Gvar.var_741 + 12);
        }
        if (Gvar.var_726 == 2) {
            Adap.pos(53, Gvar.var_741 + 70 + 12);
        }
        if (Gvar.var_726 == 3) {
            Adap.pos(53, Gvar.var_741 + 140 + 12);
        }
        Adap.gmode(2, null, null, null);
        // Adap.buffer(8)は"img1.gif"。X座標70、Y座標50から切り取り長さ X方向25、Y方向20
        // 絵:矢尻(ログイン画面での選択カーソル)            
        Adap.gcopy(8, 70, 50, 25, 20);
        return;
}

export {func148}
