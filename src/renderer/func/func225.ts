import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func225(this: any) {
        Adap.dbgprt(225);
        await Adap.wait(5);
        Adap.redraw(0);
        Adap.color(0, 0, 0);
        Adap.boxf();
        Adap.font("メイリオ", 14);
        Adap.color(255, 255, 255);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Adap.pos(10, 10);
        if (Gvar.var_956 == 1) {
            Adap.mes("ホテルの外");
        }
        if (Gvar.var_956 == 2) {
            Adap.mes("レクイエムの大迷宮");
        }
        if (Gvar.var_956 == 3) {
            Adap.mes("ディアボロの試練");
        }
        if (Gvar.var_956 == 4) {
            Adap.mes("一巡後の世界");
        }
        if (Gvar.var_956 == 5) {
            Adap.mes("" + Gvar.var_21);
        }
        Gvar.var_959 = 0;
        Gvar.var_960 = 0;
        Gvar.var_961 = 0;
        Gvar.var_962 = Gvar.var_955;
        Gvar.var_963 = 30;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Adap.font("メイリオ", 14);
            Adap.color(255, 255, 255);
            Adap.pos(10, Gvar.var_963);
            Adap.mes("" + Gvar.var_962 + " 階");
            Gvar.var_964 = 60;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                Gvar.var_961 = Gvar.var_959 + Gvar.var_960;
                if (Gvar.var_958[Gvar.var_961] < 50) {
                    Gvar.var_965 = 6; // Adap.buffer(6)は"img_enemy1a.gif"
                    Gvar.var_966 = Gvar.var_958[Gvar.var_961];
                }
                if (Gvar.var_958[Gvar.var_961] >= 50 && Gvar.var_958[Gvar.var_961] < 100) {
                    Gvar.var_965 = 21; // Adap.buffer(21)は"img_enemy2a.gif"
                    Gvar.var_966 = Gvar.var_958[Gvar.var_961] - 50;
                }
                if (Gvar.var_958[Gvar.var_961] >= 100 && Gvar.var_958[Gvar.var_961] < 150) {
                    Gvar.var_965 = 27; // Adap.buffer(27)は"img_enemy3a.gif"
                    Gvar.var_966 = Gvar.var_958[Gvar.var_961] - 100;
                }
                if (Gvar.var_958[Gvar.var_961] >= 150 && Gvar.var_958[Gvar.var_961] < 200) {
                    Gvar.var_965 = 13; // Adap.buffer(13)は"img_enemy4a.gif"
                    Gvar.var_966 = Gvar.var_958[Gvar.var_961] - 150;
                }
                Adap.pos(Gvar.var_964, Gvar.var_963);
                if (Gvar.var_958[Gvar.var_961] != 0) {
                    Adap.color(0, 100, 0);
                    Adap.boxf(Gvar.var_964, Gvar.var_963, Gvar.var_964 + 55, Gvar.var_963 + 54);
                    Adap.gcopy(Gvar.var_965, 40, Gvar.var_966 * 40, 40, 40);
                    Gvar.enemy_list = Gvar.var_958[Gvar.var_961];
                    await Func.func626(); // 敵リスト
                    Adap.font("メイリオ", 12);
                    if (Gvar.var_957 <= 1) {
                        Adap.pos(Gvar.var_964, Gvar.var_963 + 42);
                        Adap.color(255, 255, 255);
                        Adap.mes("" + Gvar.enemy_hp);
                        Adap.pos(Gvar.var_964 + 20, Gvar.var_963 + 42);
                        Adap.color(255, 255, 0);
                        Adap.mes("" + Gvar.enemy_power);
                        Adap.pos(Gvar.var_964 + 40, Gvar.var_963 + 42);
                        Adap.color(255, 180, 90);
                        Adap.mes("" + Gvar.enemy_defence);
                    }
                    if (Gvar.var_957 >= 2) {
                        Gvar.var_969 = Math.floor(Gvar.enemy_hp * (Gvar.var_957 + 10) / 10);
                        Gvar.var_970 = Math.floor(Gvar.enemy_power * (Gvar.var_957 * 2 + 10) / 10);
                        Gvar.var_971 = Gvar.enemy_defence;
                        if (Gvar.var_972 == 4 || Gvar.var_972 == 5) {
                            Gvar.var_971 = Math.floor(Gvar.enemy_defence * (Gvar.var_957 * 2 + 10) / 10);
                        }
                        Adap.pos(Gvar.var_964, Gvar.var_963);
                        Adap.color(255, 0, 0);
                        Adap.mes("LV:" + Gvar.var_957);
                        Adap.pos(Gvar.var_964, Gvar.var_963 + 42);
                        Adap.color(255, 255, 255);
                        Adap.mes("" + Gvar.var_969);
                        Adap.pos(Gvar.var_964 + 20, Gvar.var_963 + 42);
                        Adap.color(255, 255, 0);
                        Adap.mes("" + Gvar.var_970);
                        Adap.pos(Gvar.var_964 + 40, Gvar.var_963 + 42);
                        Adap.color(255, 180, 90);
                        Adap.mes("" + Gvar.var_971);
                    }
                }
                Gvar.var_964 = Gvar.var_964 + 60;
                Gvar.var_959++;
            }
            Gvar.var_963 = Gvar.var_963 + 60;
            Gvar.var_959 = 0;
            Gvar.var_960 = Gvar.var_960 + 10;
            Gvar.var_962++;
        }
        Adap.redraw(1);
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_X_on == 1) {
            await Func.func140(); // 不明(タイトル画面処理？)
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_955 != 90) { // var_259:入力判定[↓]
            Gvar.var_955 = Gvar.var_955 + 1;
            await Func.func226();
            await Adap.wait(5);
            await Func.func225();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_955 != 1) { // var_255:入力判定[↑]
            Gvar.var_955 = Gvar.var_955 - 1;
            await Func.func226();
            await Adap.wait(5);
            await Func.func225();
            return;
        }
        if (Gvar.var_257 == 1 && Gvar.var_956 != 5) {
            Gvar.var_956 = Gvar.var_956 + 1;
            await Func.func226();
            await Adap.wait(15);
            await Func.func225();
            return;
        }
        if (Gvar.var_254 == 1 && Gvar.var_956 != 1) {
            Gvar.var_956 = Gvar.var_956 - 1;
            await Func.func226();
            await Adap.wait(15);
            await Func.func225();
            return;
        }
        if (Gvar.key_S_on == 1 && Gvar.var_957 < 99) {
            Gvar.var_957 = Gvar.var_957 + 1;
            await Func.func226();
            await Adap.wait(15);
            await Func.func225();
            return;
        }
        if (Gvar.key_A_on == 1 && Gvar.var_957 >= 2) {
            Gvar.var_957 = Gvar.var_957 - 1;
            await Func.func226();
            await Adap.wait(15);
            await Func.func225();
            return;
        }
        await Func.func225();
        return;
}

export {func225}
