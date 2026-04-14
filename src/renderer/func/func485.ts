/**
 * func485 — func485 未識別アイテムの名前入力機能？
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func485(this: any) {
        Adap.dbgprt(485);
        Adap.color(0, 0, 0);

        Adap.gmode(4, null, null, 100);
        Adap.pos(5, 35);
        Adap.gcopy(12, 0, 0, 332, 62);
        Adap.pos(5, 99);
        Adap.gcopy(12, 0, 0, 332, 235);
        Adap.color(255, 255, 255);
        Adap.line(9, 101, 330, 101);
        Adap.line(9, 331, 166, 331);
        Adap.line(190, 331, 330, 331);
        Adap.line(8, 102, 8, 329);
        Adap.line(332, 102, 332, 329);
        Adap.pset(9, 102);
        Adap.pset(331, 102);
        Adap.pset(9, 330);
        Adap.pset(331, 330);
        Adap.line(9, 37, 330, 37);
        Adap.line(9, 94, 330, 94);
        Adap.line(8, 38, 8, 92);
        Adap.line(332, 38, 332, 92);
        Adap.pset(9, 38);
        Adap.pset(331, 38);
        Adap.pset(9, 93);
        Adap.pset(331, 93);
        if (Gvar.var_2123 == 1) {
            Adap.color(255, 255, 255);
    
            Adap.font("メイリオ", 16, 1);
            Adap.notesel(Gvar.var_754);
            Gvar.var_2145 = 0;
            Gvar.var_2146 = 120;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                if (Gvar.var_2141 == 1) {
                    Gvar.var_2143 = Gvar.var_2145 + 100;
                }
                if (Gvar.var_2141 == 2) {
                    Gvar.var_2143 = Gvar.var_2145 + 110;
                }
                Gvar.var_2144 = Adap.noteget(Gvar.var_2143);
                Adap.pos(30, Gvar.var_2146);
                Adap.mes("" + Gvar.var_2144);
                Gvar.var_2145++;
                Gvar.var_2146 = Gvar.var_2146 + 20;
            }
    
            Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
            Adap.pos(13, Gvar.var_2140 * 20 + 120);
            Adap.mes(">");
            Adap.pos(14, Gvar.var_2140 * 20 + 120);
            Adap.mes(">");
            Adap.pos(15, Gvar.var_2140 * 20 + 120);
            Adap.mes(">");
            Gvar.var_2147 = 175;
            Gvar.var_2148 = 323;
            if (Gvar.var_2141 == 1) {
                Adap.pos(Gvar.var_2147, Gvar.var_2148);
                Adap.mes(">");
                Adap.pos(Gvar.var_2147 + 1, Gvar.var_2148);
                Adap.mes(">");
                Adap.pos(Gvar.var_2147 + 2, Gvar.var_2148);
                Adap.mes(">");
            }
            if (Gvar.var_2141 == 2) {
                Adap.pos(Gvar.var_2147, Gvar.var_2148);
                Adap.mes("<");
                Adap.pos(Gvar.var_2147 + 1, Gvar.var_2148);
                Adap.mes("<");
                Adap.pos(Gvar.var_2147 + 2, Gvar.var_2148);
                Adap.mes("<");
            }
        }
        if (Gvar.var_2123 == 0) {
            Adap.color(255, 255, 255);
            Adap.line(165, 331, 191, 331);
            Adap.color(255, 0, 0);
    
            Adap.font("メイリオ", 16, 1);
            Gvar.var_2149 = Math.floor(Gvar.var_2131 / 10);
            Gvar.var_2150 = Gvar.var_2149 * 10;
            Gvar.var_2149 = Gvar.var_2131 - Gvar.var_2150;
            if (Gvar.var_2131 >= 0 && Gvar.var_2131 <= 9) {
                Gvar.var_2129 = Gvar.var_2126;
            }
            if (Gvar.var_2131 >= 10 && Gvar.var_2131 <= 19) {
                Gvar.var_2129 = Gvar.var_2127 * 2 + Gvar.var_2126;
            }
            if (Gvar.var_2131 >= 20 && Gvar.var_2131 <= 29) {
                Gvar.var_2129 = Gvar.var_2127 * 3 + Gvar.var_2126;
            }
            if (Gvar.var_2131 >= 30 && Gvar.var_2131 <= 39) {
                Gvar.var_2129 = Gvar.var_2127 * 4 + Gvar.var_2126;
            }
            if (Gvar.var_2131 >= 40 && Gvar.var_2131 <= 49) {
                Gvar.var_2129 = Gvar.var_2127 * 5 + Gvar.var_2126;
            }
            if (Gvar.var_2131 >= 50 && Gvar.var_2131 <= 59) {
                Gvar.var_2129 = Gvar.var_2127 * 6 + Gvar.var_2126;
            }
            if (Gvar.var_2131 >= 60 && Gvar.var_2131 <= 69) {
                Gvar.var_2129 = Gvar.var_2127 * 7 + Gvar.var_2126;
            }
            if (Gvar.var_2131 >= 70 && Gvar.var_2131 <= 79) {
                Gvar.var_2129 = Gvar.var_2127 * 8 + Gvar.var_2126;
            }
            if (Gvar.var_2131 >= 80 && Gvar.var_2131 <= 89) {
                Gvar.var_2129 = Gvar.var_2127 * 9 + Gvar.var_2126;
            }
            if (Gvar.var_2131 <= 9) {
                if (Gvar.var_2149 == 0) {
                    Gvar.var_2128 = 15;
                }
                if (Gvar.var_2149 == 1) {
                    Gvar.var_2128 = Gvar.var_2130 * 3 + 22;
                }
                if (Gvar.var_2149 == 2) {
                    Gvar.var_2128 = Gvar.var_2130 * 6 - 3;
                }
                if (Gvar.var_2149 == 3) {
                    Gvar.var_2128 = Gvar.var_2130 * 8 + 11;
                }
                if (Gvar.var_2149 == 4) {
                    Gvar.var_2128 = Gvar.var_2130 * 10 + 11;
                }
            }
            if (Gvar.var_2131 >= 10) {
                if (Gvar.var_2149 == 0) {
                    Gvar.var_2128 = 16;
                }
                if (Gvar.var_2149 == 1) {
                    Gvar.var_2128 = Gvar.var_2130 + 16;
                }
                if (Gvar.var_2149 == 2) {
                    Gvar.var_2128 = Gvar.var_2130 * 2 + 16;
                }
                if (Gvar.var_2149 == 3) {
                    Gvar.var_2128 = Gvar.var_2130 * 3 + 16;
                }
                if (Gvar.var_2149 == 4) {
                    Gvar.var_2128 = Gvar.var_2130 * 4 + 16;
                }
                if (Gvar.var_2149 == 5) {
                    Gvar.var_2128 = Gvar.var_2130 * 7 + 6;
                }
                if (Gvar.var_2149 == 6) {
                    Gvar.var_2128 = Gvar.var_2130 * 8 + 6;
                }
                if (Gvar.var_2149 == 7) {
                    Gvar.var_2128 = Gvar.var_2130 * 9 + 6;
                }
                if (Gvar.var_2149 == 8) {
                    Gvar.var_2128 = Gvar.var_2130 * 10 + 6;
                }
                if (Gvar.var_2149 == 9) {
                    Gvar.var_2128 = Gvar.var_2130 * 11 + 6;
                }
            }
            Adap.pos(Gvar.var_2128, Gvar.var_2129);
            if (Gvar.var_2131 >= 10) {
                Adap.mes("[  ]");
            }
            if (Gvar.var_2131 == 0) {
                Adap.mes("[        ]");
            }
            if (Gvar.var_2131 == 1) {
                Adap.mes("[    ]");
            }
            if (Gvar.var_2131 == 2) {
                Adap.mes("[      ]");
            }
            if (Gvar.var_2131 == 3) {
                Adap.mes("[    ]");
            }
            if (Gvar.var_2131 == 4) {
                Adap.mes("[    ]");
            }
            Adap.color(255, 255, 255);
    
            Adap.font("メイリオ", 16, 1);
            if (Gvar.var_2132 == 0) {
                Adap.pos(Gvar.var_2125, Gvar.var_2126);
                Adap.mes("全角カナ  消す  やめる  履歴  決定");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 1 + Gvar.var_2126);
                Adap.mes("");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 2 + Gvar.var_2126);
                Adap.mes("あ い う え お      は ひ ふ へ ほ");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 3 + Gvar.var_2126);
                Adap.mes("か き く け こ      ま み む め も");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 4 + Gvar.var_2126);
                Adap.mes("さ し す せ そ      や    ゆ    よ");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 5 + Gvar.var_2126);
                Adap.mes("た ち つ て と      ら り る れ ろ");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 6 + Gvar.var_2126);
                Adap.mes("な に ぬ ね の      わ を ん ﾞ  ﾟ ");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 7 + Gvar.var_2126);
                Adap.mes("ぁ ぃ ぅ ぇ ぉ      ゃ ゅ ょ っ ー");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 8 + Gvar.var_2126);
                Adap.mes("１ ２ ３ ４ ５      ６ ７ ８ ９ ０");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 9 + Gvar.var_2126);
                Adap.mes("＋ － ？ ！ ／      （ ） ・ ～   ");
            }
            if (Gvar.var_2132 == 1) {
                Adap.pos(Gvar.var_2125, Gvar.var_2126);
                Adap.mes("半角カナ  消す  やめる  履歴  決定");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 1 + Gvar.var_2126);
                Adap.mes("");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 2 + Gvar.var_2126);
                Adap.mes("ア イ ウ エ オ      ハ ヒ フ ヘ ホ");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 3 + Gvar.var_2126);
                Adap.mes("カ キ ク ケ コ      マ ミ ム メ モ");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 4 + Gvar.var_2126);
                Adap.mes("サ シ ス セ ソ      ヤ    ユ    ヨ");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 5 + Gvar.var_2126);
                Adap.mes("タ チ ツ テ ト      ラ リ ル レ ロ");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 6 + Gvar.var_2126);
                Adap.mes("ナ ニ ヌ ネ ノ      ワ ヲ ン ﾞ  ﾟ ");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 7 + Gvar.var_2126);
                Adap.mes("ァ ィ ゥ ェ ォ      ャ ュ ョ ッ ―");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 8 + Gvar.var_2126);
                Adap.mes("１ ２ ３ ４ ５      ６ ７ ８ ９ ０");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 9 + Gvar.var_2126);
                Adap.mes("＋ － ？ ！ ／      （ ） ・ ～   ");
            }
            if (Gvar.var_2132 == 2) {
                Adap.pos(Gvar.var_2125, Gvar.var_2126);
                Adap.mes("全角かな  消す  やめる  履歴  決定");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 1 + Gvar.var_2126);
                Adap.mes("");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 2 + Gvar.var_2126);
                Adap.mes("ｱ  ｲ  ｳ  ｴ  ｵ       ﾊ  ﾋ  ﾌ  ﾍ  ﾎ");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 3 + Gvar.var_2126);
                Adap.mes("ｶ  ｷ  ｸ  ｹ  ｺ       ﾏ  ﾐ  ﾑ  ﾒ  ﾓ");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 4 + Gvar.var_2126);
                Adap.mes("ｻ  ｼ  ｽ  ｾ  ｿ       ﾔ     ﾕ     ﾖ");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 5 + Gvar.var_2126);
                Adap.mes("ﾀ  ﾁ  ﾂ  ﾃ  ﾄ       ﾗ  ﾘ  ﾙ  ﾚ  ﾛ");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 6 + Gvar.var_2126);
                Adap.mes("ﾅ  ﾆ  ﾇ  ﾈ  ﾉ       ﾜ  ｦ  ﾝ ﾞ  ﾟ ");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 7 + Gvar.var_2126);
                Adap.mes("ｧ  ｨ  ｩ  ｪ  ｫ       ｬ  ｭ  ｮ  ｯ  ｰ");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 8 + Gvar.var_2126);
                Adap.mes("1  2  3  4  5       6  7  8  9  0");
                Adap.pos(Gvar.var_2125, Gvar.var_2127 * 9 + Gvar.var_2126);
                Adap.mes("+  -  ?  !  /       (  )  ･  ~   ");
            }
        }

        Adap.font("メイリオ", 18, 1);
        Gvar.var_2151 = 0;
        Gvar.var_2152 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            Adap.color(0, 255, 0);
            Adap.pos(60 + Gvar.var_2151, 60);
            Adap.mes(Gvar.var_2133[Gvar.var_2152]);
            Adap.color(255, 255, 255);
            Adap.pos(60 + cnt1 * 10, 75);
            Adap.mes("-");
            if (Gvar.var_2152 <= Gvar.var_2136) {
                Adap.color(100, 100, 100);
                Adap.pos(60 + cnt1 * 10, 75); // 0.1405 カウンターがリンクしていなかったので修正 cnt2 → cnt1
                Adap.mes("-");
            }
            if (Gvar.var_2134[Gvar.var_2152] == 1) {
                Gvar.var_2151 = Gvar.var_2151 + 10;
            }
            if (Gvar.var_2134[Gvar.var_2152] == 2) {
                Gvar.var_2151 = Gvar.var_2151 + 20;
            }
            Gvar.var_2152++;
        }
        return;
}

export {func485}
