/**
 * func487 — func487 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func487(this: any) {
        Adap.dbgprt(487);
        Gvar.var_2138 = 0;
        Gvar.var_2135 = Gvar.var_2135 - 1;
        if (Gvar.var_2132 == 0 && Gvar.var_2131 == 58) {
            if (Gvar.var_2133[Gvar.var_2135] == "は") {
                Gvar.var_2133[Gvar.var_2135] = "ば";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ひ") {
                Gvar.var_2133[Gvar.var_2135] = "び";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ふ") {
                Gvar.var_2133[Gvar.var_2135] = "ぶ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "へ") {
                Gvar.var_2133[Gvar.var_2135] = "べ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ほ") {
                Gvar.var_2133[Gvar.var_2135] = "ぼ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ぱ") {
                Gvar.var_2133[Gvar.var_2135] = "ば";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ぴ") {
                Gvar.var_2133[Gvar.var_2135] = "び";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ぷ") {
                Gvar.var_2133[Gvar.var_2135] = "ぶ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ぺ") {
                Gvar.var_2133[Gvar.var_2135] = "べ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ぽ") {
                Gvar.var_2133[Gvar.var_2135] = "ぼ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "か") {
                Gvar.var_2133[Gvar.var_2135] = "が";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "き") {
                Gvar.var_2133[Gvar.var_2135] = "ぎ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "く") {
                Gvar.var_2133[Gvar.var_2135] = "ぐ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "け") {
                Gvar.var_2133[Gvar.var_2135] = "げ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "こ") {
                Gvar.var_2133[Gvar.var_2135] = "ご";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "さ") {
                Gvar.var_2133[Gvar.var_2135] = "ざ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "し") {
                Gvar.var_2133[Gvar.var_2135] = "じ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "す") {
                Gvar.var_2133[Gvar.var_2135] = "ず";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "せ") {
                Gvar.var_2133[Gvar.var_2135] = "ぜ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "そ") {
                Gvar.var_2133[Gvar.var_2135] = "ぞ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "た") {
                Gvar.var_2133[Gvar.var_2135] = "だ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ち") {
                Gvar.var_2133[Gvar.var_2135] = "ぢ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "つ") {
                Gvar.var_2133[Gvar.var_2135] = "づ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "て") {
                Gvar.var_2133[Gvar.var_2135] = "で";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "と") {
                Gvar.var_2133[Gvar.var_2135] = "ど";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2138 == 0) {
                if (Gvar.var_2133[Gvar.var_2135] == "ば") {
                    Gvar.var_2133[Gvar.var_2135] = "は";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "び") {
                    Gvar.var_2133[Gvar.var_2135] = "ひ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ぶ") {
                    Gvar.var_2133[Gvar.var_2135] = "ふ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "べ") {
                    Gvar.var_2133[Gvar.var_2135] = "へ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ぼ") {
                    Gvar.var_2133[Gvar.var_2135] = "ほ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "が") {
                    Gvar.var_2133[Gvar.var_2135] = "か";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ぎ") {
                    Gvar.var_2133[Gvar.var_2135] = "き";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ぐ") {
                    Gvar.var_2133[Gvar.var_2135] = "く";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "げ") {
                    Gvar.var_2133[Gvar.var_2135] = "け";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ご") {
                    Gvar.var_2133[Gvar.var_2135] = "こ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ざ") {
                    Gvar.var_2133[Gvar.var_2135] = "さ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "じ") {
                    Gvar.var_2133[Gvar.var_2135] = "し";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ず") {
                    Gvar.var_2133[Gvar.var_2135] = "す";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ぜ") {
                    Gvar.var_2133[Gvar.var_2135] = "せ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ぞ") {
                    Gvar.var_2133[Gvar.var_2135] = "そ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "だ") {
                    Gvar.var_2133[Gvar.var_2135] = "た";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ぢ") {
                    Gvar.var_2133[Gvar.var_2135] = "ち";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "づ") {
                    Gvar.var_2133[Gvar.var_2135] = "つ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "で") {
                    Gvar.var_2133[Gvar.var_2135] = "て";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ど") {
                    Gvar.var_2133[Gvar.var_2135] = "と";
                    Gvar.var_2138 = 1;
                }
            }
        }
        if (Gvar.var_2132 == 1 && Gvar.var_2131 == 58) {
            if (Gvar.var_2133[Gvar.var_2135] == "ウ") {
                Gvar.var_2133[Gvar.var_2135] = "ヴ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ハ") {
                Gvar.var_2133[Gvar.var_2135] = "バ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ヒ") {
                Gvar.var_2133[Gvar.var_2135] = "ビ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "フ") {
                Gvar.var_2133[Gvar.var_2135] = "ブ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ヘ") {
                Gvar.var_2133[Gvar.var_2135] = "ベ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ホ") {
                Gvar.var_2133[Gvar.var_2135] = "ボ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "パ") {
                Gvar.var_2133[Gvar.var_2135] = "バ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ピ") {
                Gvar.var_2133[Gvar.var_2135] = "ビ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "プ") {
                Gvar.var_2133[Gvar.var_2135] = "ブ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ペ") {
                Gvar.var_2133[Gvar.var_2135] = "ベ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ポ") {
                Gvar.var_2133[Gvar.var_2135] = "ボ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "カ") {
                Gvar.var_2133[Gvar.var_2135] = "ガ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "キ") {
                Gvar.var_2133[Gvar.var_2135] = "ギ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ク") {
                Gvar.var_2133[Gvar.var_2135] = "グ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ケ") {
                Gvar.var_2133[Gvar.var_2135] = "ゲ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "コ") {
                Gvar.var_2133[Gvar.var_2135] = "ゴ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "サ") {
                Gvar.var_2133[Gvar.var_2135] = "ザ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "シ") {
                Gvar.var_2133[Gvar.var_2135] = "ジ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ス") {
                Gvar.var_2133[Gvar.var_2135] = "ズ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "セ") {
                Gvar.var_2133[Gvar.var_2135] = "ゼ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ソ") {
                Gvar.var_2133[Gvar.var_2135] = "ゾ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "タ") {
                Gvar.var_2133[Gvar.var_2135] = "ダ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "チ") {
                Gvar.var_2133[Gvar.var_2135] = "ヂ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ツ") {
                Gvar.var_2133[Gvar.var_2135] = "ヅ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "テ") {
                Gvar.var_2133[Gvar.var_2135] = "デ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ト") {
                Gvar.var_2133[Gvar.var_2135] = "ド";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2138 == 0) {
                if (Gvar.var_2133[Gvar.var_2135] == "ヴ") {
                    Gvar.var_2133[Gvar.var_2135] = "ウ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "バ") {
                    Gvar.var_2133[Gvar.var_2135] = "ハ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ビ") {
                    Gvar.var_2133[Gvar.var_2135] = "ヒ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ブ") {
                    Gvar.var_2133[Gvar.var_2135] = "フ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ベ") {
                    Gvar.var_2133[Gvar.var_2135] = "ヘ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ボ") {
                    Gvar.var_2133[Gvar.var_2135] = "ホ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ガ") {
                    Gvar.var_2133[Gvar.var_2135] = "カ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ギ") {
                    Gvar.var_2133[Gvar.var_2135] = "キ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "グ") {
                    Gvar.var_2133[Gvar.var_2135] = "ク";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ゲ") {
                    Gvar.var_2133[Gvar.var_2135] = "ケ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ゴ") {
                    Gvar.var_2133[Gvar.var_2135] = "コ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ザ") {
                    Gvar.var_2133[Gvar.var_2135] = "サ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ジ") {
                    Gvar.var_2133[Gvar.var_2135] = "シ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ズ") {
                    Gvar.var_2133[Gvar.var_2135] = "ス";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ゼ") {
                    Gvar.var_2133[Gvar.var_2135] = "セ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ゾ") {
                    Gvar.var_2133[Gvar.var_2135] = "ソ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ダ") {
                    Gvar.var_2133[Gvar.var_2135] = "タ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ヂ") {
                    Gvar.var_2133[Gvar.var_2135] = "チ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ヅ") {
                    Gvar.var_2133[Gvar.var_2135] = "ツ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "デ") {
                    Gvar.var_2133[Gvar.var_2135] = "テ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ド") {
                    Gvar.var_2133[Gvar.var_2135] = "ト";
                    Gvar.var_2138 = 1;
                }
            }
        }
        if (Gvar.var_2132 == 0 && Gvar.var_2131 == 59) {
            if (Gvar.var_2133[Gvar.var_2135] == "は") {
                Gvar.var_2133[Gvar.var_2135] = "ぱ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ひ") {
                Gvar.var_2133[Gvar.var_2135] = "ぴ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ふ") {
                Gvar.var_2133[Gvar.var_2135] = "ぷ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "へ") {
                Gvar.var_2133[Gvar.var_2135] = "ぺ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ほ") {
                Gvar.var_2133[Gvar.var_2135] = "ぽ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ば") {
                Gvar.var_2133[Gvar.var_2135] = "ぱ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "び") {
                Gvar.var_2133[Gvar.var_2135] = "ぴ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ぶ") {
                Gvar.var_2133[Gvar.var_2135] = "ぷ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "べ") {
                Gvar.var_2133[Gvar.var_2135] = "ぺ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ぼ") {
                Gvar.var_2133[Gvar.var_2135] = "ぽ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2138 == 0) {
                if (Gvar.var_2133[Gvar.var_2135] == "ぱ") {
                    Gvar.var_2133[Gvar.var_2135] = "は";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ぴ") {
                    Gvar.var_2133[Gvar.var_2135] = "ひ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ぷ") {
                    Gvar.var_2133[Gvar.var_2135] = "ふ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ぺ") {
                    Gvar.var_2133[Gvar.var_2135] = "へ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ぽ") {
                    Gvar.var_2133[Gvar.var_2135] = "ほ";
                    Gvar.var_2138 = 1;
                }
            }
        }
        if (Gvar.var_2132 == 1 && Gvar.var_2131 == 59) {
            if (Gvar.var_2133[Gvar.var_2135] == "ハ") {
                Gvar.var_2133[Gvar.var_2135] = "パ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ヒ") {
                Gvar.var_2133[Gvar.var_2135] = "ピ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "フ") {
                Gvar.var_2133[Gvar.var_2135] = "プ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ヘ") {
                Gvar.var_2133[Gvar.var_2135] = "ペ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ホ") {
                Gvar.var_2133[Gvar.var_2135] = "ポ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "バ") {
                Gvar.var_2133[Gvar.var_2135] = "パ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ビ") {
                Gvar.var_2133[Gvar.var_2135] = "ピ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ブ") {
                Gvar.var_2133[Gvar.var_2135] = "プ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ベ") {
                Gvar.var_2133[Gvar.var_2135] = "ペ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2133[Gvar.var_2135] == "ボ") {
                Gvar.var_2133[Gvar.var_2135] = "ポ";
                Gvar.var_2138 = 1;
            }
            if (Gvar.var_2138 == 0) {
                if (Gvar.var_2133[Gvar.var_2135] == "パ") {
                    Gvar.var_2133[Gvar.var_2135] = "ハ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ピ") {
                    Gvar.var_2133[Gvar.var_2135] = "ヒ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "プ") {
                    Gvar.var_2133[Gvar.var_2135] = "フ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ペ") {
                    Gvar.var_2133[Gvar.var_2135] = "ヘ";
                    Gvar.var_2138 = 1;
                }
                if (Gvar.var_2133[Gvar.var_2135] == "ポ") {
                    Gvar.var_2133[Gvar.var_2135] = "ホ";
                    Gvar.var_2138 = 1;
                }
            }
        }
        Gvar.var_2135 = Gvar.var_2135 + 1;
        return;
}

export {func487}
