import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 123 クリームの発動処理
async function item123(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.var_340 = 123;
        Gvar.var_1264 = 0;
        Gvar.var_1218 = 1;
        Gvar.var_1219 = 0;
        await Func.AutoDraw(25);

        Gvar.var_455 = Gvar.var_66;
        Gvar.var_456 = Gvar.var_67;
        Gvar.var_1220 = 1;
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        Gvar.var_1222 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_1222 = 0;
        if (Gvar.var_199 == 4) {
            Gvar.var_1416 = 40;
        }
        if (Gvar.var_199 == 6) {
            Gvar.var_1416 = 120;
        }
        if (Gvar.var_199 == 8) {
            Gvar.var_1416 = 80;
        }
        if (Gvar.var_199 == 2) {
            Gvar.var_1416 = 0;
        }
        if (Gvar.var_199 == 1) {
            Gvar.var_1416 = 160;
        }
        if (Gvar.var_199 == 3) {
            Gvar.var_1416 = 240;
        }
        if (Gvar.var_199 == 7) {
            Gvar.var_1416 = 200;
        }
        if (Gvar.var_199 == 9) {
            Gvar.var_1416 = 280;
        }
        Gvar.var_2315 = 10;
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_1218 = 3;
        Gvar.var_1195 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            Gvar.var_1894 = Gvar.var_455;
            Gvar.var_1895 = Gvar.var_456;
            if (Gvar.var_199 == 4) {
                Gvar.var_455 = Gvar.var_455 - 1;
            }
            if (Gvar.var_199 == 6) {
                Gvar.var_455 = Gvar.var_455 + 1;
            }
            if (Gvar.var_199 == 8) {
                Gvar.var_456 = Gvar.var_456 - 1;
            }
            if (Gvar.var_199 == 2) {
                Gvar.var_456 = Gvar.var_456 + 1;
            }
            if (Gvar.var_199 == 1) {
                Gvar.var_455 = Gvar.var_455 - 1;
                Gvar.var_456 = Gvar.var_456 + 1;
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_455 = Gvar.var_455 + 1;
                Gvar.var_456 = Gvar.var_456 + 1;
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_455 = Gvar.var_455 - 1;
                Gvar.var_456 = Gvar.var_456 - 1;
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_455 = Gvar.var_455 + 1;
                Gvar.var_456 = Gvar.var_456 - 1;
            }
            // 幽霊部屋
            if (Gvar.special_floor == 9 && Gvar.var_71[Gvar.var_455][Gvar.var_456] == 0) {
                break;
            }
            if (Gvar.var_455 < 5 || Gvar.var_455 > Gvar.var_33 || Gvar.var_456 < 5 || Gvar.var_456 > Gvar.var_34) {
                Gvar.var_455 = Gvar.var_1894;
                Gvar.var_456 = Gvar.var_1895;
            }
            Gvar.var_66 = Gvar.var_455;
            Gvar.var_67 = Gvar.var_456;
            Gvar.var_236 = Gvar.var_1894;
            Gvar.var_237 = Gvar.var_1895;
            await Func.func016();
            if (Gvar.var_72[Gvar.var_236][Gvar.var_237] >= 1 && Gvar.var_72[Gvar.var_66][Gvar.var_67] == 0 && Gvar.var_85 == 0) {
                await Func.func722(); // アイテムを所持した状態で店から出た際の動作処理(泥棒状態認定)
            }
            if (Gvar.var_71[Gvar.var_455][Gvar.var_456] == 0) {
                Gvar.var_71[Gvar.var_455][Gvar.var_456] = 14;
            }
            if (Gvar.var_77[Gvar.var_455][Gvar.var_456] > 0) {
                Gvar.var_77[Gvar.var_455][Gvar.var_456] = 0;
            }
            if (Gvar.special_floor != 9) {
                if (Gvar.var_199 == 1 || Gvar.var_199 == 3 || Gvar.var_199 == 7 || Gvar.var_199 == 9) {
                    Gvar.var_2316 = Gvar.var_455 - 1;
                    if (Gvar.var_2316 < 5) {
                        Gvar.var_2316 = 5;
                    }
                    Gvar.var_2317 = Gvar.var_455 + 1;
                    if (Gvar.var_2317 > Gvar.var_33) {
                        Gvar.var_2317 = Gvar.var_33;
                    }
                    Gvar.var_2318 = Gvar.var_456 + 1;
                    if (Gvar.var_2318 > Gvar.var_34) {
                        Gvar.var_2318 = Gvar.var_34;
                    }
                    Gvar.var_2319 = Gvar.var_456 - 1;
                    if (Gvar.var_2319 < 5) {
                        Gvar.var_2319 = 5;
                    }
                    if (Gvar.var_71[Gvar.var_2316][Gvar.var_456] == 0) {
                        Gvar.var_71[Gvar.var_2316][Gvar.var_456] = 14;
                    }
                    if (Gvar.var_71[Gvar.var_2317][Gvar.var_456] == 0) {
                        Gvar.var_71[Gvar.var_2317][Gvar.var_456] = 14;
                    }
                    if (Gvar.var_71[Gvar.var_455][Gvar.var_2318] == 0) {
                        Gvar.var_71[Gvar.var_455][Gvar.var_2318] = 14;
                    }
                    if (Gvar.var_71[Gvar.var_455][Gvar.var_2319] == 0) {
                        Gvar.var_71[Gvar.var_455][Gvar.var_2319] = 14;
                    }
                }
            }
            if (Gvar.var_82[Gvar.var_455][Gvar.var_456] > 0) {
                await Func.func660();
            }
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        Gvar.var_1195 = 0;
        Gvar.var_1218 = 2;
        Gvar.var_1219 = 0;
        await Func.func016();
        await Func.AutoDraw(16);
        Gvar.var_1218 = 0;
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item123}
