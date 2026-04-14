/**
 * func216 — func216 不明
 *
 * (org原典: newDTW_func2)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func216(this: any) {
        Adap.dbgprt(216);
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
            Gvar.Y_axis_item_position = Gvar.Y_axis_item_position + 20;
            Gvar.var_925 = Gvar.var_925 + 1;
            if (Gvar.var_925 == 10) {
                Gvar.Y_axis_item_position = 140;
                Gvar.var_925 = 1;
            }
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
            Gvar.Y_axis_item_position = Gvar.Y_axis_item_position - 20;
            Gvar.var_925 = Gvar.var_925 - 1;
            if (Gvar.var_925 == 0) {
                Gvar.Y_axis_item_position = 300;
                Gvar.var_925 = 9;
            }
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.var_925 >= 1 && Gvar.var_925 <= 7) {
            Adap.ck_joystick(Gvar.var_929, Gvar.var_662);
            if (Gvar.var_929 == 8192) {
                if (Gvar.var_925 == 1) {
                    Gvar.var_926 = Gvar.var_692;
                    Gvar.var_692 = 8192;
                    Gvar.var_927 = 8192;
                }
                if (Gvar.var_925 == 2) {
                    Gvar.var_926 = Gvar.var_693;
                    Gvar.var_693 = 8192;
                    Gvar.var_927 = 8192;
                }
                if (Gvar.var_925 == 3) {
                    Gvar.var_926 = Gvar.var_694;
                    Gvar.var_694 = 8192;
                    Gvar.var_927 = 8192;
                }
                if (Gvar.var_925 == 4) {
                    Gvar.var_926 = Gvar.var_695;
                    Gvar.var_695 = 8192;
                    Gvar.var_927 = 8192;
                }
                if (Gvar.var_925 == 5) {
                    Gvar.var_926 = Gvar.var_696;
                    Gvar.var_696 = 8192;
                    Gvar.var_927 = 8192;
                }
                if (Gvar.var_925 == 6) {
                    Gvar.var_926 = Gvar.var_697;
                    Gvar.var_697 = 8192;
                    Gvar.var_927 = 8192;
                }
                if (Gvar.var_925 == 7) {
                    Gvar.var_926 = Gvar.var_698;
                    Gvar.var_698 = 8192;
                    Gvar.var_927 = 8192;
                }
                await Func.func217();
                await Func.func218();
                await Func.AutoDraw(2);
                await Func.func216();
                return;
            }
            if (Gvar.var_929 == 2048) {
                if (Gvar.var_925 == 1) {
                    Gvar.var_926 = Gvar.var_692;
                    Gvar.var_692 = 2048;
                    Gvar.var_927 = 2048;
                }
                if (Gvar.var_925 == 2) {
                    Gvar.var_926 = Gvar.var_693;
                    Gvar.var_693 = 2048;
                    Gvar.var_927 = 2048;
                }
                if (Gvar.var_925 == 3) {
                    Gvar.var_926 = Gvar.var_694;
                    Gvar.var_694 = 2048;
                    Gvar.var_927 = 2048;
                }
                if (Gvar.var_925 == 4) {
                    Gvar.var_926 = Gvar.var_695;
                    Gvar.var_695 = 2048;
                    Gvar.var_927 = 2048;
                }
                if (Gvar.var_925 == 5) {
                    Gvar.var_926 = Gvar.var_696;
                    Gvar.var_696 = 2048;
                    Gvar.var_927 = 2048;
                }
                if (Gvar.var_925 == 6) {
                    Gvar.var_926 = Gvar.var_697;
                    Gvar.var_697 = 2048;
                    Gvar.var_927 = 2048;
                }
                if (Gvar.var_925 == 7) {
                    Gvar.var_926 = Gvar.var_698;
                    Gvar.var_698 = 2048;
                    Gvar.var_927 = 2048;
                }
                await Func.func217();
                await Func.func218();
                await Func.AutoDraw(2);
                await Func.func216();
                return;
            }
            if (Gvar.var_929 == 4096) {
                if (Gvar.var_925 == 1) {
                    Gvar.var_926 = Gvar.var_692;
                    Gvar.var_692 = 4096;
                    Gvar.var_927 = 4096;
                }
                if (Gvar.var_925 == 2) {
                    Gvar.var_926 = Gvar.var_693;
                    Gvar.var_693 = 4096;
                    Gvar.var_927 = 4096;
                }
                if (Gvar.var_925 == 3) {
                    Gvar.var_926 = Gvar.var_694;
                    Gvar.var_694 = 4096;
                    Gvar.var_927 = 4096;
                }
                if (Gvar.var_925 == 4) {
                    Gvar.var_926 = Gvar.var_695;
                    Gvar.var_695 = 4096;
                    Gvar.var_927 = 4096;
                }
                if (Gvar.var_925 == 5) {
                    Gvar.var_926 = Gvar.var_696;
                    Gvar.var_696 = 4096;
                    Gvar.var_927 = 4096;
                }
                if (Gvar.var_925 == 6) {
                    Gvar.var_926 = Gvar.var_697;
                    Gvar.var_697 = 4096;
                    Gvar.var_927 = 4096;
                }
                if (Gvar.var_925 == 7) {
                    Gvar.var_926 = Gvar.var_698;
                    Gvar.var_698 = 4096;
                    Gvar.var_927 = 4096;
                }
                await Func.func217();
                await Func.func218();
                await Func.AutoDraw(2);
                await Func.func216();
                return;
            }
            if (Gvar.var_929 == 32768) {
                if (Gvar.var_925 == 1) {
                    Gvar.var_926 = Gvar.var_692;
                    Gvar.var_692 = 32768;
                    Gvar.var_927 = 32768;
                }
                if (Gvar.var_925 == 2) {
                    Gvar.var_926 = Gvar.var_693;
                    Gvar.var_693 = 32768;
                    Gvar.var_927 = 32768;
                }
                if (Gvar.var_925 == 3) {
                    Gvar.var_926 = Gvar.var_694;
                    Gvar.var_694 = 32768;
                    Gvar.var_927 = 32768;
                }
                if (Gvar.var_925 == 4) {
                    Gvar.var_926 = Gvar.var_695;
                    Gvar.var_695 = 32768;
                    Gvar.var_927 = 32768;
                }
                if (Gvar.var_925 == 5) {
                    Gvar.var_926 = Gvar.var_696;
                    Gvar.var_696 = 32768;
                    Gvar.var_927 = 32768;
                }
                if (Gvar.var_925 == 6) {
                    Gvar.var_926 = Gvar.var_697;
                    Gvar.var_697 = 32768;
                    Gvar.var_927 = 32768;
                }
                if (Gvar.var_925 == 7) {
                    Gvar.var_926 = Gvar.var_698;
                    Gvar.var_698 = 32768;
                    Gvar.var_927 = 32768;
                }
                await Func.func217();
                await Func.func218();
                await Func.AutoDraw(2);
                await Func.func216();
                return;
            }
            if (Gvar.var_929 == 65536) {
                if (Gvar.var_925 == 1) {
                    Gvar.var_926 = Gvar.var_692;
                    Gvar.var_692 = 65536;
                    Gvar.var_927 = 65536;
                }
                if (Gvar.var_925 == 2) {
                    Gvar.var_926 = Gvar.var_693;
                    Gvar.var_693 = 65536;
                    Gvar.var_927 = 65536;
                }
                if (Gvar.var_925 == 3) {
                    Gvar.var_926 = Gvar.var_694;
                    Gvar.var_694 = 65536;
                    Gvar.var_927 = 65536;
                }
                if (Gvar.var_925 == 4) {
                    Gvar.var_926 = Gvar.var_695;
                    Gvar.var_695 = 65536;
                    Gvar.var_927 = 65536;
                }
                if (Gvar.var_925 == 5) {
                    Gvar.var_926 = Gvar.var_696;
                    Gvar.var_696 = 65536;
                    Gvar.var_927 = 65536;
                }
                if (Gvar.var_925 == 6) {
                    Gvar.var_926 = Gvar.var_697;
                    Gvar.var_697 = 65536;
                    Gvar.var_927 = 65536;
                }
                if (Gvar.var_925 == 7) {
                    Gvar.var_926 = Gvar.var_698;
                    Gvar.var_698 = 65536;
                    Gvar.var_927 = 65536;
                }
                await Func.func217();
                await Func.func218();
                await Func.AutoDraw(2);
                await Func.func216();
                return;
            }
            if (Gvar.var_929 == 16384) {
                if (Gvar.var_925 == 1) {
                    Gvar.var_926 = Gvar.var_692;
                    Gvar.var_692 = 16384;
                    Gvar.var_927 = 16384;
                }
                if (Gvar.var_925 == 2) {
                    Gvar.var_926 = Gvar.var_693;
                    Gvar.var_693 = 16384;
                    Gvar.var_927 = 16384;
                }
                if (Gvar.var_925 == 3) {
                    Gvar.var_926 = Gvar.var_694;
                    Gvar.var_694 = 16384;
                    Gvar.var_927 = 16384;
                }
                if (Gvar.var_925 == 4) {
                    Gvar.var_926 = Gvar.var_695;
                    Gvar.var_695 = 16384;
                    Gvar.var_927 = 16384;
                }
                if (Gvar.var_925 == 5) {
                    Gvar.var_926 = Gvar.var_696;
                    Gvar.var_696 = 16384;
                    Gvar.var_927 = 16384;
                }
                if (Gvar.var_925 == 6) {
                    Gvar.var_926 = Gvar.var_697;
                    Gvar.var_697 = 16384;
                    Gvar.var_927 = 16384;
                }
                if (Gvar.var_925 == 7) {
                    Gvar.var_926 = Gvar.var_698;
                    Gvar.var_698 = 16384;
                    Gvar.var_927 = 16384;
                }
                await Func.func217();
                await Func.func218();
                await Func.AutoDraw(2);
                await Func.func216();
                return;
            }
            if (Gvar.var_929 == 262144) {
                if (Gvar.var_925 == 1) {
                    Gvar.var_926 = Gvar.var_692;
                    Gvar.var_692 = 262144;
                    Gvar.var_927 = 262144;
                }
                if (Gvar.var_925 == 2) {
                    Gvar.var_926 = Gvar.var_693;
                    Gvar.var_693 = 262144;
                    Gvar.var_927 = 262144;
                }
                if (Gvar.var_925 == 3) {
                    Gvar.var_926 = Gvar.var_694;
                    Gvar.var_694 = 262144;
                    Gvar.var_927 = 262144;
                }
                if (Gvar.var_925 == 4) {
                    Gvar.var_926 = Gvar.var_695;
                    Gvar.var_695 = 262144;
                    Gvar.var_927 = 262144;
                }
                if (Gvar.var_925 == 5) {
                    Gvar.var_926 = Gvar.var_696;
                    Gvar.var_696 = 262144;
                    Gvar.var_927 = 262144;
                }
                if (Gvar.var_925 == 6) {
                    Gvar.var_926 = Gvar.var_697;
                    Gvar.var_697 = 262144;
                    Gvar.var_927 = 262144;
                }
                if (Gvar.var_925 == 7) {
                    Gvar.var_926 = Gvar.var_698;
                    Gvar.var_698 = 262144;
                    Gvar.var_927 = 262144;
                }
                await Func.func217();
                await Func.func218();
                await Func.AutoDraw(2);
                await Func.func216();
                return;
            }
            if (Gvar.var_929 == 524288) {
                if (Gvar.var_925 == 1) {
                    Gvar.var_926 = Gvar.var_692;
                    Gvar.var_692 = 524288;
                    Gvar.var_927 = 524288;
                }
                if (Gvar.var_925 == 2) {
                    Gvar.var_926 = Gvar.var_693;
                    Gvar.var_693 = 524288;
                    Gvar.var_927 = 524288;
                }
                if (Gvar.var_925 == 3) {
                    Gvar.var_926 = Gvar.var_694;
                    Gvar.var_694 = 524288;
                    Gvar.var_927 = 524288;
                }
                if (Gvar.var_925 == 4) {
                    Gvar.var_926 = Gvar.var_695;
                    Gvar.var_695 = 524288;
                    Gvar.var_927 = 524288;
                }
                if (Gvar.var_925 == 5) {
                    Gvar.var_926 = Gvar.var_696;
                    Gvar.var_696 = 524288;
                    Gvar.var_927 = 524288;
                }
                if (Gvar.var_925 == 6) {
                    Gvar.var_926 = Gvar.var_697;
                    Gvar.var_697 = 524288;
                    Gvar.var_927 = 524288;
                }
                if (Gvar.var_925 == 7) {
                    Gvar.var_926 = Gvar.var_698;
                    Gvar.var_698 = 524288;
                    Gvar.var_927 = 524288;
                }
                await Func.func217();
                await Func.func218();
                await Func.AutoDraw(2);
                await Func.func216();
                return;
            }
            if (Gvar.var_929 == 1048576) {
                if (Gvar.var_925 == 1) {
                    Gvar.var_926 = Gvar.var_692;
                    Gvar.var_692 = 1048576;
                    Gvar.var_927 = 1048576;
                }
                if (Gvar.var_925 == 2) {
                    Gvar.var_926 = Gvar.var_693;
                    Gvar.var_693 = 1048576;
                    Gvar.var_927 = 1048576;
                }
                if (Gvar.var_925 == 3) {
                    Gvar.var_926 = Gvar.var_694;
                    Gvar.var_694 = 1048576;
                    Gvar.var_927 = 1048576;
                }
                if (Gvar.var_925 == 4) {
                    Gvar.var_926 = Gvar.var_695;
                    Gvar.var_695 = 1048576;
                    Gvar.var_927 = 1048576;
                }
                if (Gvar.var_925 == 5) {
                    Gvar.var_926 = Gvar.var_696;
                    Gvar.var_696 = 1048576;
                    Gvar.var_927 = 1048576;
                }
                if (Gvar.var_925 == 6) {
                    Gvar.var_926 = Gvar.var_697;
                    Gvar.var_697 = 1048576;
                    Gvar.var_927 = 1048576;
                }
                if (Gvar.var_925 == 7) {
                    Gvar.var_926 = Gvar.var_698;
                    Gvar.var_698 = 1048576;
                    Gvar.var_927 = 1048576;
                }
                await Func.func217();
                await Func.func218();
                await Func.AutoDraw(2);
                await Func.func216();
                return;
            }
            if (Gvar.var_929 == 131072) {
                if (Gvar.var_925 == 1) {
                    Gvar.var_926 = Gvar.var_692;
                    Gvar.var_692 = 131072;
                    Gvar.var_927 = 131072;
                }
                if (Gvar.var_925 == 2) {
                    Gvar.var_926 = Gvar.var_693;
                    Gvar.var_693 = 131072;
                    Gvar.var_927 = 131072;
                }
                if (Gvar.var_925 == 3) {
                    Gvar.var_926 = Gvar.var_694;
                    Gvar.var_694 = 131072;
                    Gvar.var_927 = 131072;
                }
                if (Gvar.var_925 == 4) {
                    Gvar.var_926 = Gvar.var_695;
                    Gvar.var_695 = 131072;
                    Gvar.var_927 = 131072;
                }
                if (Gvar.var_925 == 5) {
                    Gvar.var_926 = Gvar.var_696;
                    Gvar.var_696 = 131072;
                    Gvar.var_927 = 131072;
                }
                if (Gvar.var_925 == 6) {
                    Gvar.var_926 = Gvar.var_697;
                    Gvar.var_697 = 131072;
                    Gvar.var_927 = 131072;
                }
                if (Gvar.var_925 == 7) {
                    Gvar.var_926 = Gvar.var_698;
                    Gvar.var_698 = 131072;
                    Gvar.var_927 = 131072;
                }
                await Func.func217();
                await Func.func218();
                await Func.AutoDraw(2);
                await Func.func216();
                return;
            }
        }
        if (Gvar.var_925 == 8) {
            if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                Gvar.var_692 = 8192;
                Gvar.var_693 = 2048;
                Gvar.var_694 = 4096;
                Gvar.var_695 = 16384;
                Gvar.var_696 = 65536;
                Gvar.var_697 = 32768;
                Gvar.var_698 = 131072;
                Gvar.var_699 = 262144;
                Gvar.var_700 = 524288;
                Gvar.var_701 = 1048576;
                await Func.func217();
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func216();
                return;
            }
        }
        if (Gvar.var_925 == 9) {
            if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                Gvar.var_664[1] = Gvar.var_692;
                Gvar.var_664[2] = Gvar.var_693;
                Gvar.var_664[3] = Gvar.var_694;
                Gvar.var_664[4] = Gvar.var_695;
                Gvar.var_664[5] = Gvar.var_696;
                Gvar.var_664[6] = Gvar.var_697;
                Gvar.var_664[7] = Gvar.var_698;
                Gvar.var_664[8] = Gvar.var_699;
                Gvar.var_664[9] = Gvar.var_700;
                Gvar.var_664[10] = Gvar.var_701;
                await Adap.bsave("00.dat", Gvar.data = Gvar.var_664, null, 1500);
                Gvar.var_903 = 0;
                await Func.func051(); // キー入力待ち処理
                await Func.func193(); // メニュー画面 "システム" 設定処理
                return;
            }
        }
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func216();
        return;
}

export {func216}
