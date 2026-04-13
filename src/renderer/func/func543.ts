import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// DISC使用時のイベント処理 (label_0543)
async function func543(this: any) {
        Adap.dbgprt(543);
        Gvar.var_2493 = 0;
        if (Gvar.var_245 == 0 && Gvar.var_259 == 0) {
            Gvar.var_2494 = Gvar.var_258[Gvar.var_250][0];
            if (Gvar.var_621[Gvar.var_2494][0] == 1 && Gvar.var_258[Gvar.var_250][12] == 1 && Gvar.var_258[Gvar.var_250][14] == 1) {
                Gvar.var_2493 = 1;
            }
        }
        if (Gvar.var_245 == 1) {
            Gvar.var_2492 = Gvar.var_2099;
            Gvar.var_2494 = Gvar.var_554[Gvar.var_764][Gvar.var_250][0];
            if (Gvar.var_621[Gvar.var_2494][0] == 1 && Gvar.var_554[Gvar.var_764][Gvar.var_250][12] == 1 && Gvar.var_554[Gvar.var_764][Gvar.var_250][14] == 1) {
                Gvar.var_2493 = 1;
            }
        }
        if (Gvar.var_259 == 1) {
            Gvar.var_2494 = Gvar.var_89[Gvar.var_352][0];
            if (Gvar.var_621[Gvar.var_2494][0] == 1 && Gvar.var_89[Gvar.var_352][12] == 1 && Gvar.var_89[Gvar.var_352][14] == 1) {
                Gvar.var_2493 = 1;
            }
        }
        if (Gvar.var_300 == 1) {
            await Func.func541(); // goto *label_0541
            return;
        }
        if (Gvar.var_2493 == 1) {
            await Func.func542(); // goto *label_0542
            return;
        }
        // 未識別DISCの場合
        if (Gvar.var_621[Gvar.var_2494][0] == 0 && Gvar.var_2494 >= 100 && Gvar.var_2494 < 400) {
            Gvar.var_257 = Gvar.var_2494;
            await Func.func524();
            Gvar.var_2495 = Gvar.var_557;
            Gvar.var_621[Gvar.var_2494][0] = 1;
            await Func.func524();
            Gvar.var_2496 = Gvar.var_557;
            await Func.setMessage("なんと" + Gvar.var_2495 + "は", "" + Gvar.var_2496 + "だった！", 10, false, false, false);
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
            }
        }
        // === DISC No.100: 射撃攻撃防御 ===
        if (Gvar.var_2494 == 100) {
            await Func.func538();
            Gvar.var_172 = 1;
            await Func.setMessage("射撃攻撃を防げるようになった！", "", 10, false, false, false);
            Adap.DSPLAY(182);
            Gvar.var_1444 = 8;
            Gvar.var_310 = 1;
            Gvar.var_1442 = 1;
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
                Gvar.var_1442++;
            }
            Gvar.var_310 = 0;
            Gvar.var_1442 = 0;
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.103: ACT3 FREEZE ===
        if (Gvar.var_2494 == 103) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            Gvar.var_476 = 1;
            await Func.setMessage("ACT ３ FREEZE　！！", "", 10, false, false, false);
            Gvar.var_477 = Gvar.var_389;
            Gvar.var_389 = 103;
            Gvar.var_271 = 1;
            Gvar.var_378 = Gvar.var_74;
            Gvar.var_379 = Gvar.var_75;
            if (Gvar.var_224 == 4) { Gvar.var_378 = Gvar.var_378 - 1; }
            if (Gvar.var_224 == 6) { Gvar.var_378 = Gvar.var_378 + 1; }
            if (Gvar.var_224 == 8) { Gvar.var_379 = Gvar.var_379 - 1; }
            if (Gvar.var_224 == 2) { Gvar.var_379 = Gvar.var_379 + 1; }
            if (Gvar.var_224 == 1) { Gvar.var_378 = Gvar.var_378 - 1; Gvar.var_379 = Gvar.var_379 + 1; }
            if (Gvar.var_224 == 3) { Gvar.var_378 = Gvar.var_378 + 1; Gvar.var_379 = Gvar.var_379 + 1; }
            if (Gvar.var_224 == 7) { Gvar.var_378 = Gvar.var_378 - 1; Gvar.var_379 = Gvar.var_379 - 1; }
            if (Gvar.var_224 == 9) { Gvar.var_378 = Gvar.var_378 + 1; Gvar.var_379 = Gvar.var_379 - 1; }
            Adap.DSPLAY(122);
            for (let cnt = 0; cnt < 2; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0) {
                Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
                if (Gvar.var_83[Gvar.var_1638].Var0 != 50) {
                    if (Gvar.var_83[Gvar.var_1638].Var12 == 99) {
                        Gvar.var_83[Gvar.var_1638].Var12 = 0;
                    }
                    Gvar.var_83[Gvar.var_1638].Var13 = 0;
                    if (Gvar.var_83[Gvar.var_1638].Var15 == 0) {
                        Gvar.var_83[Gvar.var_1638].Var14 = 1;
                        Adap.DSPLAY(162);
                    }
                    if (Gvar.var_83[Gvar.var_1638].Var15 != 0) {
                        Gvar.var_83[Gvar.var_1638].Var14 = 0;
                        Gvar.var_83[Gvar.var_1638].Var15 = 0;
                    }
                    Gvar.var_846 = 1;
                }
            }
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Gvar.var_476 = 0;
            Gvar.var_389 = Gvar.var_477;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.114: 「一手」遅カッタ…ナ…！ ===
        if (Gvar.var_2494 == 114) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            Gvar.var_476 = 1;
            await Func.func099();
            await Func.setMessage("「一手」 遅カッタ…ナ…！", "", 10, false, false, false);
            // 正面の敵に対する処理 (省略: 複雑な戦闘ロジック)
            Gvar.var_476 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.215: スデニ……出来テイタナ… ===
        if (Gvar.var_2494 == 215) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            Gvar.var_476 = 1;
            await Func.func099();
            await Func.setMessage("スデニ……出来テイタナ…", "", 10, false, false, false);
            // 正面の敵に対する攻撃処理 (省略)
            Gvar.var_476 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.217: 言ってやるゥゥゥゥ / お前は敗北を認めた！ ===
        if (Gvar.var_2494 == 217) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            // 正面の敵チェックと処理
            Gvar.var_378 = Gvar.var_74;
            Gvar.var_379 = Gvar.var_75;
            if (Gvar.var_224 == 4) { Gvar.var_378 = Gvar.var_378 - 1; }
            if (Gvar.var_224 == 6) { Gvar.var_378 = Gvar.var_378 + 1; }
            if (Gvar.var_224 == 8) { Gvar.var_379 = Gvar.var_379 - 1; }
            if (Gvar.var_224 == 2) { Gvar.var_379 = Gvar.var_379 + 1; }
            if (Gvar.var_224 == 1) { Gvar.var_378 = Gvar.var_378 - 1; Gvar.var_379 = Gvar.var_379 + 1; }
            if (Gvar.var_224 == 3) { Gvar.var_378 = Gvar.var_378 + 1; Gvar.var_379 = Gvar.var_379 + 1; }
            if (Gvar.var_224 == 7) { Gvar.var_378 = Gvar.var_378 - 1; Gvar.var_379 = Gvar.var_379 - 1; }
            if (Gvar.var_224 == 9) { Gvar.var_378 = Gvar.var_378 + 1; Gvar.var_379 = Gvar.var_379 - 1; }
            Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
            Gvar.var_268 = Gvar.var_83[Gvar.var_1638].Var0;
            await Func.func658();
            if (Gvar.var_2497 != 0 || Gvar.var_268 == 50) {
                await Func.func099();
                await Func.setMessage("言ってやるゥゥゥゥ", "おれは最強のバクチ打ちだァァァァァァ", 10, false, false, false);
                await Func.func337();
                Gvar.var_242 = 1;
                await Func.func019();
                return;
            }
            Gvar.var_476 = 1;
            await Func.func099();
            await Func.setMessage("お前は敗北を認めた！", "", 10, false, false, false);
            // 敵消滅処理 (省略: 複雑な座標計算とアイテムドロップ処理)
            Gvar.var_476 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.218: 地面の記憶を呼び出した！ ===
        if (Gvar.var_2494 == 218) {
            await Func.func538();
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            await Func.func099();
            await Func.setMessage("地面の記憶を呼び出した！", "", 10, false, false, false);
            // 罠大量出現処理
            Gvar.var_869 = 1;
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func568();
            }
            Gvar.var_869 = 0;
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "罠がたくさん現れたようだ…";
            await Func.func050();
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func358();
            // ウェザーの記憶DISC掘り起こし処理
            if (Gvar.dungeon_number == 9 && Gvar.var_79 >= Gvar.var_66) {
                await Func.func099();
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "どこかで『ｳｪｻﾞｰの記憶DISC』が";
                Gvar.var_287 = "掘り起こされたようだ…";
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                await Func.func050();
                await Func.func053();
                // アイテム配置処理 (省略)
                await Func.func348();
            }
            await Func.func348();
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.207: グレイトフル・デッド ===
        if (Gvar.var_2494 == 207) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            await Func.setMessage("「グレイトフル・デッド！！」", "", 10, false, false, false);
            // 敵老化処理 (省略: 周囲の敵の攻撃力低下処理)
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            if (Gvar.var_193 == 0) {
                Gvar.var_286 = "近くにいる敵は急激に老化して";
                Gvar.var_287 = "攻撃力が下がった！";
            }
            if (Gvar.var_193 >= 1) {
                Gvar.var_286 = "この階にいる全ての敵は";
                Gvar.var_287 = "急激に老化して攻撃力が下がった！";
            }
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.122: エニグマ ===
        if (Gvar.var_2494 == 122) {
            await Func.func538();
            Gvar.var_160 = 1;
            await Func.func099();
            await Func.setMessage("「どの程度の ふみ込みまで", "　耐えられるか 憶えるゼ！」", 10, false, false, false);
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Adap.DSPLAY(140);
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.113: クラッシュ ===
        if (Gvar.var_2494 == 113) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            Gvar.var_476 = 1;
            await Func.setMessage("「クラッシュ！くらいつけッ！」", "", 10, false, false, false);
            // 正面の敵への攻撃処理 (省略)
            Gvar.var_476 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.105: 限界なく明るくなる ===
        if (Gvar.var_2494 == 105) {
            await Func.func538();
            Gvar.var_342 = 255;
            await Func.setMessage("限界なく明るくなるッ！！", "", 10, false, false, false);
            Adap.DSPLAY(161);
            Gvar.var_343 = 1;
            for (let cnt = 0; cnt < 51; ++cnt) {
                await Func.func337();
                Gvar.var_342 = Gvar.var_342 - 5;
            }
            Gvar.var_343 = 0;
            Gvar.var_114 = 1;
            Gvar.var_138 = 1;
            // 周囲の敵とアイテムの可視化処理 (省略)
            Gvar.var_131 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.116: ハーミットパープル(念写) ===
        if (Gvar.var_2494 == 116) {
            await Func.func538();
            // 念写アニメーション処理 (省略)
            Gvar.var_2509 = 0;
            Gvar.var_2510 = 0;
            // 敵チェック処理 (省略)
            if (Gvar.var_2509 == 0 && Gvar.var_2510 == 0) {
                Adap.DSPLAY(184);
                await Func.setMessage("この階の地図を念写した！", "", 10, false, false, false);
                Gvar.var_113 = 1;
            }
            if (Gvar.var_2510 >= 1) {
                await Func.func099();
                await Func.setMessage("「きさま、見ているなッ！！」", "", 10, false, false, false);
                await Func.func358();
                Gvar.var_201 = Gvar.var_2510;
                Gvar.var_223 = 0;
            }
            if (Gvar.var_2509 >= 1) {
                Adap.DSPLAY(184);
                await Func.setMessage("この階のｱｸｱ･ﾈｯｸﾚｽを念写した！", "", 10, false, false, false);
                await Func.func358();
                Gvar.var_200 = Gvar.var_2509;
                Gvar.var_223 = 0;
            }
            await Func.func348();
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.107: デス13(ラリホー) ===
        if (Gvar.var_2494 == 107) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            Adap.DSPLAY(131);
            await Func.setMessage("「ラリホ～～～～～っ！」", "", 10, false, false, false);
            // 周囲の敵を眠らせる処理 (省略)
            Gvar.var_131 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.115: ゴールドエクスペリエンス(生命付与) ===
        if (Gvar.var_2494 == 115) {
            await Func.func538();
            await Func.func099();
            await Func.setMessage("生まれろ…　新しい生命…", "", 10, false, false, false);
            // 敵生成処理 (省略)
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.109: クロスファイヤーハリケーンスペシャル ===
        if (Gvar.var_2494 == 109) {
            await Func.func538();
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            await Func.setMessage("クロスファイヤーハリケーンスペシャル！", "", 10, false, false, false);
            // 炎による広範囲攻撃処理 (省略)
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.301: アイテム回収 ===
        if (Gvar.var_2494 == 301) {
            await Func.func538();
            await Func.setMessage("アイテムを取って来いッ！", "", 10, false, false, false);
            // アイテム回収処理 (省略)
            Gvar.var_2520 = 0;
            // ... (アイテム移動処理)
            if (Gvar.var_2520 == 0) {
                await Func.setMessage("１個も拾ってこなかったど！", "", 10, false, false, false);
            }
            if (Gvar.var_2520 >= 1) {
                await Func.setMessage("" + Gvar.var_2520 + "個　拾ってきた。", "", 10, false, false, false);
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.106: パールジャム(合成) ===
        if (Gvar.var_2494 == 106) {
            await Func.setMessage("ベースとなるアイテムを選んでください", "", 10, false, false, false);
            // アイテム選択処理 (省略: メニュー画面遷移)
            return;
        }
        // === DISC No.300: パールジャム(食べる) ===
        if (Gvar.var_2494 == 300) {
            await Func.func538();
            await Func.setMessage("パールジャムを食べた。", "", 10, false, false, false);
            // 満腹度回復処理
            Gvar.var_381 = Gvar.var_381 + 50;
            if (Gvar.var_381 > Gvar.var_649) {
                Gvar.var_381 = Gvar.var_649;
            }
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "お腹が少し膨らんだ";
            Gvar.var_287 = "";
            if (Gvar.var_381 == Gvar.var_649) {
                Gvar.var_286 = "お腹がいっぱいになった。";
                Gvar.var_287 = "";
            }
            await Func.func050();
            await Func.func053();
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.108: マンインザミラー ===
        if (Gvar.var_2494 == 108) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            await Func.setMessage("こいつ自身に見せつけるしかねえッ！", "", 10, false, false, false);
            // 鏡の世界処理
            // ... (後半)
            await Func.setMessage("「覚悟」ってのはこういうことだぜ…", "", 10, false, false, false);
            // ジッパー処理
            // 床にジッパーをくっつけた！
            // このフロアにジッパーはつけられない
            // ここにジッパーはつけられない
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.104: ザ・ハンド(空間削り) ===
        if (Gvar.var_2494 == 104) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            Gvar.var_476 = 1;
            await Func.setMessage("空間をけずりとる！ ", "……するとお～～～～っ！", 10, false, false, false);
            // 空間削り処理 (省略: 複雑な座標計算)
            Gvar.var_476 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.101: シルバーチャリオッツ(分身) ===
        if (Gvar.var_2494 == 101) {
            if (Gvar.var_488 != 0) {
                await Func.setMessage("チャリオッツは分身中だ。", "", 10, false, false, false);
                for (let cnt = 0; cnt < 5; ++cnt) {
                    await Func.func337();
                }
                Gvar.var_259 = 0;
                Gvar.var_245 = 0;
                return;
            }
            // 分身出現判定
            // チャリオッツを出せる場所が無いぞ。
            await Func.func538();
            await Func.func099();
            await Func.setMessage("ブラボー！", "おお…　ブラボー！！", 10, false, false, false);
            // 甲冑脱ぎアニメーション
            await Func.func099();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "フフフ･･･";
            Gvar.var_287 = "感覚の目でよーく見てろ！";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            // 甲冑外しアニメーション (省略)
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "これだ！　甲冑を外したスタンド";
            Gvar.var_287 = "「シルバー・チャリオッツ」！";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            await Func.func348();
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.319: 能力消去DISC選択 ===
        if (Gvar.var_2494 == 319) {
            await Func.setMessage("能力を消すDISCを選んでください", "", 10, false, false, false);
            // メニュー選択処理 (省略)
            return;
        }
        // === DISC No.111/398: ザ・ワールド / スタープラチナ・ザ・ワールド ===
        if (Gvar.var_2494 == 111 || Gvar.var_2494 == 398) {
            await Func.func538();
            Gvar.var_184 = 1;
            Gvar.var_185 = 1;
            Gvar.var_170 = 0;
            if (Gvar.var_2494 == 111) {
                await Func.setMessage("「ザ・ワールド」！！", "時よ止まれ！", 10, false, false, false);
            }
            if (Gvar.var_2494 == 398) {
                await Func.setMessage("「スタープラチナ・ザ・ワールド」！！", "時は止まる・・・", 10, false, false, false);
            }
            Gvar.var_131 = 0;
            Adap.DSPLAY(185);
            Gvar.var_310 = 1;
            Gvar.var_1648 = 1;
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
                Gvar.var_1648++;
            }
            Gvar.var_310 = 0;
            Gvar.var_1648 = 0;
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            return;
        }
        // === DISC No.201: イエローテンパランス ===
        if (Gvar.var_2494 == 201) {
            await Func.func538();
            await Func.setMessage("このオレのスタンド「黄の節制」に", "弱点はない！", 10, false, false, false);
            // 防御力アップ処理 (省略)
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "このフロアで熱と冷気に強くなった！";
            Gvar.var_287 = "";
            await Func.func050();
            await Func.func053();
            await Func.func358();
            Gvar.var_194 = 1;
            for (let cnt = 0; cnt < 15; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.310: 敵召集 ===
        if (Gvar.var_2494 == 310) {
            await Func.func538();
            // 敵召集処理 (省略)
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "敵が集まってしまった！";
            Gvar.var_287 = "";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 15; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.403: 食べるDISC選択 ===
        if (Gvar.var_2494 == 403) {
            await Func.setMessage("どれを食べますか？", "", 10, false, false, false);
            // メニュー選択処理 (省略)
            return;
        }
        // === DISC No.120: ストーンフリー ===
        if (Gvar.var_2494 == 120) {
            await Func.func538();
            await Func.setMessage("『ストーンフリーーッ！』", "", 10, false, false, false);
            // 糸による体力回復処理 (省略)
            Gvar.var_236 = Gvar.var_383;
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "傷口を縫って体力が回復した。";
            Gvar.var_287 = "";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.126: C-MOON(重力変化) ===
        if (Gvar.var_2494 == 126) {
            await Func.func538();
            await Func.setMessage("ディアボロを中心に重力が変わる！", "", 10, false, false, false);
            await Func.func358();
            // 重力変化処理 (省略)
            if (Gvar.var_2543 == 1) {
                Gvar.var_283 = "重力はわたしの肉体に対し";
                Gvar.var_284 = "逆転して落ちるッ！";
            }
            if (Gvar.var_2543 == 0) {
                Gvar.var_283 = "しかし何も起こらなかった…";
            }
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.200: スーパーフライ(鉄塔) ===
        if (Gvar.var_2494 == 200) {
            if (Gvar.var_84[Gvar.var_74][Gvar.var_75] != 0) {
                await Func.setMessage("ここには鉄塔を建てられない。", "", 10, false, false, false);
                for (let cnt = 0; cnt < 5; ++cnt) {
                    await Func.func337();
                }
                return;
            }
            await Func.func538();
            await Func.setMessage("「スーパーフライ！」", "", 10, false, false, false);
            await Func.func358();
            Gvar.var_164 = Gvar.var_74;
            Gvar.var_165 = Gvar.var_75;
            Gvar.var_163 = 1;
            Adap.DSPLAY(188);
            Gvar.var_131 = 0;
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "鉄塔を建てた！";
            Gvar.var_287 = "";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.205: ペットショップ(氷固定) ===
        if (Gvar.var_2494 == 205) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            // 敵固定処理 (省略)
            if (Gvar.var_2543 == 1) {
                Gvar.var_283 = "その場所に固定するッ！";
                Adap.DSPLAY(126);
            }
            if (Gvar.var_2543 == 0) {
                Gvar.var_283 = "しかし何も起こらなかった…";
            }
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.206: オアシス(ドロドロ) ===
        if (Gvar.var_2494 == 206) {
            await Func.func538();
            await Func.setMessage("周囲がドロドロになってきた…", "", 10, false, false, false);
            await Func.func358();
            Gvar.var_180 = 1;
            // 周囲の壁を溶かす処理 (省略)
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.304: ウェザーリポート(雨) ===
        if (Gvar.var_2494 == 304) {
            await Func.func538();
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            Gvar.var_199 = 1;
            await Func.setMessage("雨が降ってきた。", "", 10, false, false, false);
            // 雷攻撃処理 (省略)
            await Func.setMessage("", "　――――　雨があがった　――――", 10, false, false, false);
            // 雨後の処理
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "地面が洗い流され、";
            Gvar.var_287 = "罠が見えるようになった。";
            Gvar.var_138 = 1;
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            await Func.func348();
            // フー・ファイターズ威力アップ
            // "フー・ファイターズの威力がアップした！"
            // カエル成長
            // "地面のカエルが成長したようだ。"
            // パワーアップ敵
            // "パワーアップした敵がいるようだ…"
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.102: キング・クリムゾン ===
        if (Gvar.var_2494 == 102) {
            await Func.func538();
            await Func.setMessage("「キング・クリムゾン」！！", "我以外の時間は消し飛ぶ！", 10, false, false, false);
            await Func.func358();
            // 時飛ばし処理 (省略)
            Gvar.var_131 = 0;
            Adap.DSPLAY(185);
            Gvar.var_310 = 1;
            Gvar.var_1648 = 1;
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
                Gvar.var_1648++;
            }
            Gvar.var_310 = 0;
            Gvar.var_1648 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.121: パープルヘイズ(ウイルス) ===
        if (Gvar.var_2494 == 121) {
            await Func.func538();
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            // ウイルス攻撃処理 (省略)
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.318: エネルギー吸収 ===
        if (Gvar.var_2494 == 318) {
            await Func.func538();
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            // エネルギー吸収処理 (省略)
            // "合計 " + var_2557 + " のエネルギーを吸収した。"
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.117: 養分吸収 ===
        if (Gvar.var_2494 == 117) {
            await Func.func538();
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            // 養分吸収処理 (省略)
            // "合計 " + var_2557 + " の養分を吸収した。"
            // "満腹度が完全回復した。"
            // "満腹度が回復した。"
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.313: 養分吸収2 ===
        if (Gvar.var_2494 == 313) {
            await Func.func538();
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            // "合計 " + var_2557 + " の養分を吸収した。"
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.308: 人形設置 ===
        if (Gvar.var_2494 == 308) {
            // "そこには人形を出せないぞ。"
            await Func.setMessage("うけけけけけけけけけけッ！！", "", 10, false, false, false);
            // 人形設置処理 (省略)
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.203: ザ・フール(砂嵐) ===
        if (Gvar.var_2494 == 203) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            await Func.func099();
            await Func.setMessage("「アッフォオオ―――――ン！」", "", 10, false, false, false);
            // 砂嵐攻撃処理 (省略)
            // "周りの敵は目に砂が入って"
            // "盲目になってしまった！"
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.112/394: シアーハートアタック召喚 ===
        if (Gvar.var_2494 == 112 || Gvar.var_2494 == 394) {
            // 出せない場合
            // "そこには出せないぞ。"
            await Func.func538();
            await Func.func099();
            await Func.setMessage("「シアー・ハート・アタック」！！", "狙った標的は必ず仕留める…", 10, false, false, false);
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.204: シアーハートアタック爆発 ===
        if (Gvar.var_2494 == 204) {
            await Func.func538();
            await Func.setMessage("カチリ", "", 10, false, false, false);
            for (let cnt = 0; cnt < 15; ++cnt) {
                await Func.func337();
            }
            await Func.setMessage("ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！", "", 10, false, false, false);
            // 爆発処理 (省略: 周囲への壁破壊とダメージ)
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.312: 電気攻撃(伝達力) ===
        if (Gvar.var_2494 == 312) {
            await Func.func538();
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            // "地面が濡れて伝達力が上がっている！"
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.316: ファイトクラブ ===
        if (Gvar.var_2494 == 316) {
            await Func.func538();
            // 電気攻撃処理 (省略)
            Gvar.var_131 = 0;
            await Func.setMessage("ファイトクラブだっ！！", "", 10, false, false, false);
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.223: D4C(ドジャアア～～ン) ===
        if (Gvar.var_2494 == 223) {
            await Func.func099();
            await Func.setMessage("ドジャアア～～ン", "", 10, false, false, false);
            // 次元移動処理 (省略: 階段への移動)
            return;
        }
        // === DISC No.224: ホワイトアルバム(白い凍結) ===
        if (Gvar.var_2494 == 224) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            // 凍結攻撃処理 (省略)
            Gvar.var_476 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.202: ホワイトアルバム(全凍結) ===
        if (Gvar.var_2494 == 202) {
            await Func.func538();
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            await Func.setMessage("低温世界で動ける物質はなにもなくなる", "全てを止められる！", 10, false, false, false);
            // 全敵凍結処理 (省略)
            Gvar.var_131 = 0;
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.395: キラークイーン第3の爆弾 BITE THE DUST ===
        if (Gvar.var_2494 == 395) {
            await Func.func538();
            await Func.func099();
            await Func.setMessage("キラークィーン【第３の爆弾】", "「BITE THE DUST」（負けて死ね）！！", 10, false, false, false);
            // BITE THE DUST処理 (省略)
            // "すでに「瞳」の中に入っている！"
            // "しかし何もおこらなかった…"
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.302: チープトリック(道連れ) ===
        if (Gvar.var_2494 == 302) {
            await Func.func538();
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            await Func.func099();
            await Func.setMessage("オレって情けねえよなあ～～～。", "死にたくなった･･･", 10, false, false, false);
            // 自傷＋道連れダメージ処理 (省略)
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.216: ボーイ・II・マン(ナンバー変更) ===
        if (Gvar.var_2494 == 216) {
            await Func.func538();
            // ナンバー変更処理 (省略)
            await Func.setMessage("念のため" + Gvar.var_2574 + "も", "別のナンバーに替えておくか", 10, false, false, false);
            Adap.DSPLAY(182);
            Gvar.var_1444 = 8;
            Gvar.var_310 = 1;
            Gvar.var_1761 = 1;
            Gvar.var_1766 = 1;
            for (let cnt = 0; cnt < 40; ++cnt) {
                await Func.func337();
                Gvar.var_1761++;
            }
            Gvar.var_1766 = 0;
            Gvar.var_310 = 0;
            Gvar.var_1761 = 0;
            // ステータス変更適用処理 (省略)
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.222: 運命固定 ===
        if (Gvar.var_2494 == 222) {
            await Func.func538();
            await Func.setMessage("7ﾀｰﾝの間運命の流れを固定する！", "", 10, false, false, false);
            Adap.DSPLAY(183);
            Gvar.var_1444 = 8;
            Gvar.var_310 = 1;
            Gvar.var_1442 = 1;
            Gvar.var_128 = 1;
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
                Gvar.var_1442++;
            }
            Gvar.var_310 = 0;
            Gvar.var_1442 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.303: 回避力アップ ===
        if (Gvar.var_2494 == 303) {
            await Func.func538();
            await Func.setMessage("攻撃をかわしやすくなった！", "", 10, false, false, false);
            Adap.DSPLAY(182);
            Gvar.var_1444 = 8;
            Gvar.var_310 = 1;
            Gvar.var_1442 = 1;
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
                Gvar.var_1442++;
            }
            Gvar.var_310 = 0;
            Gvar.var_1442 = 0;
            Gvar.var_119 = 1;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.413: 人形設置2 ===
        if (Gvar.var_2494 == 413) {
            // "人形を置く場所が無いぞ。"
            // 人形設置処理 (省略)
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.320: メタリカ(透明化) ===
        if (Gvar.var_2494 == 320) {
            await Func.func538();
            Gvar.var_148 = 1;
            await Func.setMessage("砂鉄を吸い寄せて透明になった。", "", 10, false, false, false);
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.321: 幽霊部屋 ===
        if (Gvar.var_2494 == 321) {
            await Func.func538();
            // 条件チェック
            // "何も起こらなかったようだ・・・"
            // "次の階で部屋の幽霊に入れるぞ！"
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            await Func.func358();
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.305: シンデレラ(幸運メイク) ===
        if (Gvar.var_2494 == 305) {
            await Func.func538();
            Gvar.var_1126 = 1;
            await Func.setMessage("幸運な顔のメイクをしてみた。", "", 10, false, false, false);
            await Func.func358();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "次のフロアでアイテムがたくさん";
            Gvar.var_287 = "出現する気がする…！";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.396: メイドインヘブン(高速移動) ===
        if (Gvar.var_2494 == 396) {
            await Func.func538();
            Adap.DSPLAY(154);
            await Func.setMessage("自分だけ速く動けるようになった！", "", 10, false, false, false);
            if (Gvar.var_150 == 0) {
                Gvar.var_178 = 1;
                Gvar.var_179 = 0;
            }
            if (Gvar.var_150 != 0) {
                Gvar.var_150 = 0;
            }
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.119: スパイスガール(ゴム弾力) ===
        if (Gvar.var_2494 == 119) {
            await Func.func538();
            Adap.DSPLAY(152);
            await Func.setMessage("体にゴムのような弾力がついた！", "", 10, false, false, false);
            Gvar.var_167 = 1;
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.123: クリーム(空間移動) ===
        if (Gvar.var_2494 == 123) {
            await Func.func538();
            // クリームによる直線移動処理 (省略)
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.124: ボーイズマンマン(送る) ===
        if (Gvar.var_2494 == 124) {
            // "誰に送りますか？"
            // "どれを送りますか？"
            // "どれを相手に送りますか？"
            // "どれを倉庫に送りますか？"
            // メニュー選択処理 (省略)
            return;
        }
        // === DISC No.311: チープトリック(おんぶ) ===
        if (Gvar.var_2494 == 311) {
            await Func.func538();
            Gvar.var_310 = 1;
            Gvar.var_1469 = 1;
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
                Gvar.var_1469 = Gvar.var_1469 + 1;
            }
            await Func.func099();
            await Func.setMessage("「おんぶして」　「ねっ！」", "　　　　「おんぶして…」", 10, false, false, false);
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            // 連続台詞処理
            await Func.func099();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「あなたが今のぼくの本体なんです！」";
            Gvar.var_287 = "　「わかる？」　「ね？」";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 10; ++cnt) { await Func.func337(); }
            await Func.func099();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「ぼくの能力は人に囁くだけ」";
            Gvar.var_287 = "　　「ね？」「誰か助け呼ぶの？」";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 10; ++cnt) { await Func.func337(); }
            await Func.func099();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「イヒヒ！」　「ねっ！」";
            Gvar.var_287 = "　　　「イヒヒヒヒ」";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 10; ++cnt) { await Func.func337(); }
            await Func.func099();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「ポコチンまで干からびさせて";
            Gvar.var_287 = "　　死ぬのはおまえだッ！」";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 10; ++cnt) { await Func.func337(); }
            await Func.func099();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「どこへ行こうとも…";
            Gvar.var_287 = "　　疲れるだけだよ」」";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 10; ++cnt) { await Func.func337(); }
            await Func.func099();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「疲労とダメージで";
            Gvar.var_287 = "　　ぶっ倒れるのが先か」";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 10; ++cnt) { await Func.func337(); }
            await Func.func099();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「精神がまいっちまって";
            Gvar.var_287 = "　　自滅するのが先か…」";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 10; ++cnt) { await Func.func337(); }
            // 精神力低下処理
            Adap.DSPLAY(164);
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "最大精神力が１下がってしまった！";
            Gvar.var_287 = "";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 10; ++cnt) { await Func.func337(); }
            Gvar.var_648 = Gvar.var_648 - 1;
            if (Gvar.var_648 <= 0) { Gvar.var_648 = 0; }
            Gvar.var_647 = Gvar.var_647 - 1;
            if (Gvar.var_647 < 0) { Gvar.var_647 = 0; }
            Gvar.var_310 = 0;
            Gvar.var_1469 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.397: 悪魔の虹(罠大量出現) ===
        if (Gvar.var_2494 == 397) {
            await Func.func538();
            // 罠大量配置処理 (省略)
            await Func.setMessage("「悪魔の虹」が大量にあらわれた！！", "", 10, false, false, false);
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.314: ストレイキャット ===
        if (Gvar.var_2494 == 314) {
            await Func.func538();
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
                for (let cnt = 0; cnt < 10; ++cnt) {
                    await Func.func337();
                }
            }
            Adap.DSPLAY(159);
            await Func.setMessage("「うにゃあ」", "", 10, false, false, false);
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            return;
        }
        // === DISC No.405/406/408/409/410/404/400/317/414/309: 罠設置系 ===
        if (Gvar.var_2494 == 405 || Gvar.var_2494 == 406 || Gvar.var_2494 == 408 || Gvar.var_2494 == 409 || Gvar.var_2494 == 410 || Gvar.var_2494 == 404 || Gvar.var_2494 == 400 || Gvar.var_2494 == 317 || Gvar.var_2494 == 414 || Gvar.var_2494 == 309) {
            if (Gvar.var_84[Gvar.var_74][Gvar.var_75] != 0 || Gvar.var_91[Gvar.var_74][Gvar.var_75] != 0 || Gvar.var_88[Gvar.var_74][Gvar.var_75] != 0) {
                if (Gvar.var_2494 == 409 || Gvar.var_2494 == 406 || Gvar.var_2494 == 410 || Gvar.var_2494 == 309) {
                    await Func.setMessage("ここには潜ませられない。", "", 10, false, false, false);
                }
                if (Gvar.var_2494 == 404 || Gvar.var_2494 == 400 || Gvar.var_2494 == 405 || Gvar.var_2494 == 408) {
                    await Func.setMessage("ここには仕掛けられない。", "", 10, false, false, false);
                }
                if (Gvar.var_2494 == 317) {
                    await Func.setMessage("ここには貼れない。", "", 10, false, false, false);
                }
                if (Gvar.var_2494 == 414) {
                    await Func.setMessage("ここには撃てない。", "", 10, false, false, false);
                }
                for (let cnt = 0; cnt < 5; ++cnt) {
                    await Func.func337();
                }
                return;
            }
            // 罠設置処理 (省略)
            if (Gvar.var_2494 == 309) { await Func.setMessage("地面にｿﾌﾄ･ﾏｼｰﾝを潜ませた。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 406) { await Func.setMessage("地面に文字を貼り付けた。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 408) { await Func.setMessage("足元に鏡を仕掛けた。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 405) { await Func.setMessage("地面に文字を貼り付けた。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 409) { await Func.setMessage("こっそりラバーズを潜ませた。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 404) { await Func.setMessage("足元に氷の罠を仕掛けた。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 410) { await Func.setMessage("ﾊｲｳｪｲ･ｽﾀｰを潜ませた。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 400 || Gvar.var_2494 == 407) { await Func.setMessage("法王の結界を仕掛けた。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 317) { await Func.setMessage("シールを貼った。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 414) { await Func.setMessage("地面に穴を開けた。", "", 10, false, false, false); }
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            Gvar.var_257 = Gvar.var_2494;
            await Func.func538();
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.118/407: ダイバーダウン/法王の結界(周囲設置) ===
        if (Gvar.var_2494 == 118 || Gvar.var_2494 == 407) {
            // 周囲罠設置処理 (省略)
            // 設置不可の場合
            // "この辺りには潜ませられない。"
            // "この辺りには仕掛けられない。"
            // 設置成功の場合
            if (Gvar.var_2494 == 118) { await Func.setMessage("地面にダイバーダウンを潜ませた。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 407) { await Func.setMessage("法王の結界を仕掛けた。", "", 10, false, false, false); }
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            Gvar.var_257 = Gvar.var_2494;
            await Func.func538();
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.401: フー・ファイターズ(体力回復) ===
        if (Gvar.var_2494 == 401) {
            Gvar.var_236 = Gvar.var_236 + 20;
            if (Gvar.var_137 == 1 || Gvar.var_199 == 1) {
                Gvar.var_236 = Gvar.var_236 + 20;
            }
            Gvar.var_2603 = 0;
            if (Gvar.var_236 >= Gvar.var_383) {
                Gvar.var_236 = Gvar.var_383;
                Gvar.var_2603 = 1;
            }
            await Func.setMessage("傷口にプランクトンを詰めた。", "", 10, false, false, false);
            if (Gvar.var_137 == 1 || Gvar.var_199 == 1) {
                Gvar.var_284 = "いつもより多く回復した。";
            }
            if (Gvar.var_2603 == 1) {
                Gvar.var_284 = "体力が完全に回復した。";
            }
            // 消費処理 (省略)
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.402: エンペラー ===
        if (Gvar.var_2494 == 402) {
            await Func.setMessage("「エンペラー」！！", "", 10, false, false, false);
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Gvar.var_257 = Gvar.var_2494;
            await Func.func538();
            return;
        }
        // === DISC No.411: テレポート ===
        if (Gvar.var_2494 == 411) {
            // テレポート処理 (省略)
            Gvar.var_257 = Gvar.var_2494;
            await Func.func538();
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.412: ヘブンズドアー ===
        if (Gvar.var_2494 == 412) {
            await Func.func099();
            await Func.setMessage("「ヘブンズドアーッ」！！", "", 10, false, false, false);
            // 正面の敵への書き込み処理 (省略)
            // "見えてなくて効かなかった…"
            Gvar.var_257 = Gvar.var_2494;
            await Func.func538();
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.425: 重い雨 ===
        if (Gvar.var_2494 == 425) {
            await Func.func538();
            await Func.setMessage("雨が降ってきた。", "", 10, false, false, false);
            // 重い雨による攻撃処理 (省略)
            await Func.setMessage("", "　――――　雨があがった　――――", 10, false, false, false);
            // 雨後処理
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "周囲が水浸しになり";
            Gvar.var_287 = "辺りに水たまりができた";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            await Func.func348();
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.306: ウェザーリポート(気流) ===
        if (Gvar.var_2494 == 306) {
            await Func.func538();
            await Func.setMessage("「気流……」", "", 10, false, false, false);
            // 気流読み処理 (省略)
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「このフロアの空気の流れを読む…！」";
            Gvar.var_287 = "";
            await Func.func050();
            await Func.func053();
            await Func.func358();
            Adap.DSPLAY(184);
            Gvar.var_136 = 1;
            Gvar.var_112 = 1;
            await Func.func348();
            // フェードアウト処理 (省略)
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "敵の行動がわかるようになった！";
            Gvar.var_287 = "";
            await Func.func050();
            await Func.func053();
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.315: エピタフ(未来予知) ===
        if (Gvar.var_2494 == 315) {
            await Func.func538();
            await Func.setMessage("「エピタフ！」", "", 10, false, false, false);
            Gvar.var_136 = 1;
            Gvar.var_138 = 1;
            Gvar.var_112 = 1;
            Adap.DSPLAY(184);
            await Func.func348();
            // 予知処理 (省略)
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「迫り来る危険を感知できる…！」";
            Gvar.var_287 = "";
            await Func.func050();
            await Func.func053();
            await Func.func358();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "見えないものが見えるようになった！";
            Gvar.var_287 = "";
            await Func.func050();
            await Func.func053();
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.393: ジョジョ読み(敵召喚) ===
        if (Gvar.var_2494 == 393) {
            await Func.func538();
            Gvar.var_2616 = Adap.rnd(6);
            if (Gvar.var_107 >= 50) {
                Gvar.var_2616 = 10;
            }
            Adap.DSPLAY(118);
            if (Gvar.var_2616 == 0) {
                await Func.setMessage("ﾃﾞｨｱﾎﾞﾛは", "「ﾌｧﾝﾄﾑ･ﾌﾞﾗｯﾄﾞ」を読んだ", 10, false, false, false);
            }
            if (Gvar.var_2616 == 1) {
                await Func.setMessage("ﾃﾞｨｱﾎﾞﾛは", "「戦闘潮流」を読んだ", 10, false, false, false);
            }
            if (Gvar.var_2616 == 2) {
                await Func.setMessage("ﾃﾞｨｱﾎﾞﾛは", "「ｽﾀｰﾀﾞｽﾄ･ｸﾙｾｲﾀﾞｰｽ」を読んだ", 10, false, false, false);
            }
            if (Gvar.var_2616 == 3) {
                await Func.setMessage("ﾃﾞｨｱﾎﾞﾛは", "「ダイヤモンドは砕けない」を読んだ", 10, false, false, false);
            }
            if (Gvar.var_2616 == 4) {
                await Func.setMessage("ﾃﾞｨｱﾎﾞﾛは", "「黄金の風」を読んだ", 10, false, false, false);
            }
            if (Gvar.var_2616 == 5) {
                await Func.setMessage("ﾃﾞｨｱﾎﾞﾛは", "「ｽﾄｰﾝ･ｵｰｼｬﾝ」を読んだ", 10, false, false, false);
            }
            if (Gvar.var_2616 == 6) {
                await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「これからはおれの時代だッ！」", "", 10, false, false, false);
                for (let cnt = 0; cnt < 10; ++cnt) {
                    await Func.func337();
                }
                if (Gvar.var_2444 == 1) {
                    Gvar.var_2444 = 0;
                    await Func.func540();
                }
                Gvar.var_242 = 1;
                await Func.func019();
                return;
            }
            // 敵召喚処理 (省略)
            // "しかし何も起こらなかった…"
            // "マンガのキャラクターが現れた！"
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.399: ゴールドエクスペリエンスレクイエム ===
        if (Gvar.var_2494 == 399) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            Gvar.var_224 = 2;
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            await Func.setMessage("「ｺﾞｰﾙﾄﾞ･ｴｸｽﾍﾟﾘｴﾝｽ･ﾚｸｲｴﾑ」！！", "", 10, false, false, false);
            // レクイエム攻撃処理 (省略)
            await Func.setMessage("死に続ける能力が解除された！", "", 10, false, false, false);
            await Func.func358();
            // 演出処理 (省略)
            return;
        }
        // === デフォルト: 何も起こらなかった ===
        await Func.setMessage("しかし何も起こらなかった", "", 10, false, false, false);
        Gvar.var_259 = 0;
        Gvar.var_245 = 0;
        Gvar.var_242 = 1;
        await Func.func019();
        return;
}

export {func543}
