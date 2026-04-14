/**
 * item104 — No = 104 ザ・ハンドの発動処理
 *
 * 各スタンドの発動能力設定。
 *
 * (org原典: newDTW_item(スタンドdisc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 104 ザ・ハンドの発動処理
async function item104(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_570 == 0) {
            Gvar.bufferid_stand_disc = 11; //Adap.buffer(11)は"img_stand0.gif"
        }
        if (Gvar.var_570 == 1) {
            Gvar.bufferid_stand_disc = 1; // Adap.buffer(1)は"img_stand1.gif"
        }
        if (Gvar.var_570 == 2) {
            Gvar.bufferid_stand_disc = 16; // Adap.buffer(16)は"img_stand2.gif"
        }
        if (Gvar.var_570 == 3) {
            Gvar.bufferid_stand_disc = 29; // Adap.buffer(29)は"img_stand3.gif"
        }
        Gvar.var_1283 = 1;
        Gvar.var_2261 = Gvar.kougeki_disc_id ;
        Gvar.kougeki_disc_id  = 104;
        Gvar.var_243 = 1;
        Gvar.var_1194 = 1;

        Adap.DSPLAY(121);

        await Func.AutoDraw(15);

        await Func.setMessage("空間をけずりとる！ ",
                               "……するとお～～～～っ！", 7, true, false, false);
        
        await Func.AutoDraw(5);

        Gvar.var_455 = Gvar.var_66;
        Gvar.var_456 = Gvar.var_67;
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
        Gvar.var_2289 = Gvar.var_455;
        Gvar.var_2290 = Gvar.var_456;
        Gvar.var_2291 = Gvar.var_66;
        Gvar.var_2292 = Gvar.var_67;
        Gvar.var_455 = Gvar.var_66;
        Gvar.var_456 = Gvar.var_67;
        for (let cnt2 = 0; cnt2 < 40; ++cnt2) {
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
            if (Gvar.var_455 < 5 || Gvar.var_455 > Gvar.var_33 || Gvar.var_456 < 5 || Gvar.var_456 > Gvar.var_34) {
                Gvar.var_455 = Gvar.var_1894;
                Gvar.var_456 = Gvar.var_1895;
            }
            if (Gvar.var_71[Gvar.var_455][Gvar.var_456] == 0) {
                break;
            }
            if (Gvar.var_82[Gvar.var_455][Gvar.var_456] > 0 || Gvar.var_77[Gvar.var_455][Gvar.var_456] > 0) {
                if (Gvar.var_82[Gvar.var_455][Gvar.var_456] > 0) {
                    Gvar.var_2293 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
                    Gvar.var_82[Gvar.var_455][Gvar.var_456] = 0;
                    if (Gvar.var_71[Gvar.var_2289][Gvar.var_2290] == 13) {
                        Gvar.var_2294 = Gvar.var_2289 - 1;
                        if (Gvar.var_2294 < 0) {
                            Gvar.var_2294 = 0;
                        }
                        Gvar.var_2295 = Gvar.var_2289 + 1;
                        if (Gvar.var_2295 > Gvar.var_33) {
                            Gvar.var_2295 = Gvar.var_33;
                        }
                        Gvar.var_2296 = Gvar.var_2290 + 1;
                        if (Gvar.var_2296 > Gvar.var_34) {
                            Gvar.var_2296 = Gvar.var_34;
                        }
                        Gvar.var_2297 = Gvar.var_2290 - 1;
                        if (Gvar.var_2297 < 0) {
                            Gvar.var_2297 = 0;
                        }
                        Gvar.var_2298 = 0;
                        if (Gvar.var_2298 == 0 && Gvar.var_71[Gvar.var_2294][Gvar.var_2296] != 0 && Gvar.var_71[Gvar.var_2294][Gvar.var_2296] != 13 && Gvar.var_82[Gvar.var_2294][Gvar.var_2296] == 0 && Gvar.var_65[Gvar.var_2294][Gvar.var_2296] == 0) {
                            Gvar.var_2289 = Gvar.var_2294;
                            Gvar.var_2290 = Gvar.var_2296;
                            Gvar.var_2298 = 1;
                        }
                        if (Gvar.var_2298 == 0 && Gvar.var_71[Gvar.var_2295][Gvar.var_2296] != 0 && Gvar.var_71[Gvar.var_2295][Gvar.var_2296] != 13 && Gvar.var_82[Gvar.var_2295][Gvar.var_2296] == 0 && Gvar.var_65[Gvar.var_2295][Gvar.var_2296] == 0) {
                            Gvar.var_2289 = Gvar.var_2295;
                            Gvar.var_2290 = Gvar.var_2296;
                            Gvar.var_2298 = 1;
                        }
                        if (Gvar.var_2298 == 0 && Gvar.var_71[Gvar.var_2294][Gvar.var_2297] != 0 && Gvar.var_71[Gvar.var_2294][Gvar.var_2297] != 13 && Gvar.var_82[Gvar.var_2294][Gvar.var_2297] == 0 && Gvar.var_65[Gvar.var_2294][Gvar.var_2297] == 0) {
                            Gvar.var_2289 = Gvar.var_2294;
                            Gvar.var_2290 = Gvar.var_2297;
                            Gvar.var_2298 = 1;
                        }
                        if (Gvar.var_2298 == 0 && Gvar.var_71[Gvar.var_2295][Gvar.var_2297] != 0 && Gvar.var_71[Gvar.var_2295][Gvar.var_2297] != 13 && Gvar.var_82[Gvar.var_2295][Gvar.var_2297] == 0 && Gvar.var_65[Gvar.var_2295][Gvar.var_2297] == 0) {
                            Gvar.var_2289 = Gvar.var_2295;
                            Gvar.var_2290 = Gvar.var_2297;
                            Gvar.var_2298 = 1;
                        }
                        if (Gvar.var_2298 == 0 && Gvar.var_71[Gvar.var_2294][Gvar.var_1895] != 0 && Gvar.var_71[Gvar.var_2294][Gvar.var_1895] != 13 && Gvar.var_82[Gvar.var_2294][Gvar.var_1895] == 0 && Gvar.var_65[Gvar.var_2294][Gvar.var_1895] == 0) {
                            Gvar.var_2289 = Gvar.var_2294;
                            Gvar.var_2298 = 1;
                        }
                        if (Gvar.var_2298 == 0 && Gvar.var_71[Gvar.var_2295][Gvar.var_1895] != 0 && Gvar.var_71[Gvar.var_2295][Gvar.var_1895] != 13 && Gvar.var_82[Gvar.var_2295][Gvar.var_1895] == 0 && Gvar.var_65[Gvar.var_2295][Gvar.var_1895] == 0) {
                            Gvar.var_2289 = Gvar.var_2295;
                            Gvar.var_2298 = 1;
                        }
                        if (Gvar.var_2298 == 0 && Gvar.var_71[Gvar.var_1894][Gvar.var_2296] != 0 && Gvar.var_71[Gvar.var_1894][Gvar.var_2296] != 13 && Gvar.var_82[Gvar.var_1894][Gvar.var_2296] == 0 && Gvar.var_65[Gvar.var_1894][Gvar.var_2296] == 0) {
                            Gvar.var_2290 = Gvar.var_2296;
                            Gvar.var_2298 = 1;
                        }
                        if (Gvar.var_2298 == 0 && Gvar.var_71[Gvar.var_1894][Gvar.var_2297] != 0 && Gvar.var_71[Gvar.var_1894][Gvar.var_2297] != 13 && Gvar.var_82[Gvar.var_1894][Gvar.var_2297] == 0 && Gvar.var_65[Gvar.var_1894][Gvar.var_2297] == 0) {
                            Gvar.var_2290 = Gvar.var_2297;
                            Gvar.var_2298 = 1;
                        }
                    }
                    Gvar.var_83[Gvar.var_2293].Var1 = Gvar.var_2289;
                    Gvar.var_83[Gvar.var_2293].Var2 = Gvar.var_2290;
                    Gvar.var_82[Gvar.var_2289][Gvar.var_2290] = Gvar.var_2293;
                }
                if (Gvar.var_77[Gvar.var_455][Gvar.var_456] > 0) {
                    if (Gvar.var_73[Gvar.var_2291][Gvar.var_2292] >= 1 || Gvar.var_77[Gvar.var_2291][Gvar.var_2292] != 0) {
                        if (Gvar.var_199 == 4) {
                            Gvar.var_2291 = Gvar.var_2291 - 1;
                        }
                        if (Gvar.var_199 == 6) {
                            Gvar.var_2291 = Gvar.var_2291 + 1;
                        }
                        if (Gvar.var_199 == 8) {
                            Gvar.var_2292 = Gvar.var_2292 - 1;
                        }
                        if (Gvar.var_199 == 2) {
                            Gvar.var_2292 = Gvar.var_2292 + 1;
                        }
                        if (Gvar.var_199 == 1) {
                            Gvar.var_2291 = Gvar.var_2291 - 1;
                            Gvar.var_2292 = Gvar.var_456 + 1;
                        }
                        if (Gvar.var_199 == 3) {
                            Gvar.var_2291 = Gvar.var_2291 + 1;
                            Gvar.var_2292 = Gvar.var_456 + 1;
                        }
                        if (Gvar.var_199 == 7) {
                            Gvar.var_2291 = Gvar.var_2291 - 1;
                            Gvar.var_2292 = Gvar.var_456 - 1;
                        }
                        if (Gvar.var_199 == 9) {
                            Gvar.var_2291 = Gvar.var_2291 + 1;
                            Gvar.var_2292 = Gvar.var_456 - 1;
                        }
                    }
                    Gvar.var_2293 = Gvar.var_77[Gvar.var_455][Gvar.var_456];
                    Gvar.var_77[Gvar.var_455][Gvar.var_456] = 0;
                    Gvar.var_78[Gvar.var_2293].Var1 = Gvar.var_2291;
                    Gvar.var_78[Gvar.var_2293].Var2 = Gvar.var_2292;
                    Gvar.var_77[Gvar.var_2291][Gvar.var_2292] = Gvar.var_2293;
                }
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                await Func.AutoDraw(20);
                break;
            }
        }
        Gvar.var_1283 = 0;
        Gvar.kougeki_disc_id  = Gvar.var_2261;
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        // 時止め(時消し飛ばし)状態でない場合
        if (Gvar.var_72[Gvar.var_66][Gvar.var_67] == 0 && Gvar.var_85 == 0 && Gvar.time_paused == 0) {
            await Func.func722(); // アイテムを所持した状態で店から出た際の動作処理(泥棒状態認定)
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item104}
