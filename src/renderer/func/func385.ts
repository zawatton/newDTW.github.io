import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func385(this: any) {
        Adap.dbgprt(385);
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            Gvar.var_78[Gvar.var_866]["Var" + cnt1] = 0;
        }
        if (Gvar.var_1735 == 1) {
            // No = 1 なので、ホテルの外
            if (Gvar.dungeon_number == 1) {
                Gvar.var_1772 = Adap.rnd(100); // 確率調整:100の中からランダムで数字を一つ
                if (Gvar.var_1772 >= 0 && Gvar.var_1772 < 45) { // 出現確率: 15/100*100 = 15%
                    Gvar.var_78[Gvar.var_866].Var0 = 116; // No = 116 ハーミットパープル
                    Gvar.var_78[Gvar.var_866].Var16 = 10; 
                    Gvar.var_78[Gvar.var_866].Var5 = 4; // 合成空き容量: 4
                }
                if (Gvar.var_1772 >= 15 && Gvar.var_1772 < 30) { // 出現確率: 15/100*100 = 15%
                    Gvar.var_78[Gvar.var_866].Var0 = 103; // No = 103 エコーズACT3
                    Gvar.var_78[Gvar.var_866].Var16 = 20;
                    Gvar.var_78[Gvar.var_866].Var5 = 5; // 合成空き容量: 5
                }
                if (Gvar.var_1772 >= 30 && Gvar.var_1772 < 45) { // 出現確率: 15/100*100 = 15%
                    Gvar.var_78[Gvar.var_866].Var0 = 107; // No = 107 デス・13
                    Gvar.var_78[Gvar.var_866].Var16 = 10;
                    Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (Gvar.var_1772 >= 45 && Gvar.var_1772 < 60) { // 出現確率: 15/100*100 = 15%
                    Gvar.var_78[Gvar.var_866].Var0 = 300; // No = 300 パール・ジャム
                    Gvar.var_78[Gvar.var_866].Var16 = 5;
                    Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (Gvar.var_1772 >= 60 && Gvar.var_1772 < 65) { // 出現確率: 5/100*100 = 5%
                    Gvar.var_78[Gvar.var_866].Var0 = 306; // No = 306 マンハッタントランスファー
                    Gvar.var_78[Gvar.var_866].Var16 = 5;
                    Gvar.var_78[Gvar.var_866].Var5 = 4; // 合成空き容量: 4
                }
                if (Gvar.var_1772 >= 65 && Gvar.var_1772 < 70) { // 出現確率: 5/100*100 = 5%
                    Gvar.var_78[Gvar.var_866].Var0 = 201; // No = 201 イエローテンパラス
                    Gvar.var_78[Gvar.var_866].Var16 = 10;
                    Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (Gvar.var_1772 >= 70 && Gvar.var_1772 < 75) { // 出現確率: 5/100*100 = 5%
                    Gvar.var_78[Gvar.var_866].Var0 = 105; // No = 105 チリペッパー
                    Gvar.var_78[Gvar.var_866].Var16 = 10;
                    Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (Gvar.var_1772 >= 75 && Gvar.var_1772 < 77) { // 出現確率: 2/100*100 = 2%
                    Gvar.var_78[Gvar.var_866].Var0 = 207; // No = 207 グレイトフル・デッド
                    Gvar.var_78[Gvar.var_866].Var16 = 10;
                    Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (Gvar.var_1772 >= 77 && Gvar.var_1772 < 79) { // 出現確率: 2/100*100 = 2%
                    Gvar.var_78[Gvar.var_866].Var0 = 201; // No = 201 イエローテンパラス
                    Gvar.var_78[Gvar.var_866].Var16 = 10;
                    Gvar.var_78[Gvar.var_866].Var5 = 3;
                }
                if (Gvar.var_1772 >= 79 && Gvar.var_1772 < 81) { // 出現確率: 2/100*100 = 2%
                    Gvar.var_78[Gvar.var_866].Var0 = 105; // No = 105 チリペッパー
                    Gvar.var_78[Gvar.var_866].Var16 = 10;
                    Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (Gvar.var_1772 >= 81 && Gvar.var_1772 < 83) { // 出現確率: 2/100*100 = 2%
                    Gvar.var_78[Gvar.var_866].Var0 = 104; // No = 104 ザ・ハンド
                    Gvar.var_78[Gvar.var_866].Var16 = 10;
                    Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (Gvar.var_1772 >= 83 && Gvar.var_1772 < 85) { // 出現確率: 2/100*100 = 2%
                    Gvar.var_78[Gvar.var_866].Var0 = 117; // No = 117 ダーク・ブルームーン
                    Gvar.var_78[Gvar.var_866].Var16 = 10;
                    Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (Gvar.var_1772 >= 85 && Gvar.var_1772 < 87) { // 出現確率: 2/100*100 = 2%
                    Gvar.var_78[Gvar.var_866].Var0 = 119; // No = 119 スパイス・ガール
                    Gvar.var_78[Gvar.var_866].Var16 = 10;
                    Gvar.var_78[Gvar.var_866].Var5 = 3;
                }
                if (Gvar.var_1772 >= 87 && Gvar.var_1772 < 89) { // 出現確率: 2/100*100 = 2%
                    Gvar.var_78[Gvar.var_866].Var0 = 203; // No = 203 ザ・フール
                    Gvar.var_78[Gvar.var_866].Var16 = 10;
                    Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (Gvar.var_1772 >= 89 && Gvar.var_1772 < 91) { // 出現確率: 2/100*100 = 2%
                    Gvar.var_78[Gvar.var_866].Var0 = 113; // No = 113 クラッシュ
                    Gvar.var_78[Gvar.var_866].Var16 = 10;
                    Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (Gvar.var_1772 >= 91 && Gvar.var_1772 < 93) { // 出現確率: 2/100*100 = 2%
                    Gvar.var_78[Gvar.var_866].Var0 = 306; // No = 306 マンハッタントランスファー
                    Gvar.var_78[Gvar.var_866].Var16 = 5;
                    Gvar.var_78[Gvar.var_866].Var5 = 4; // 合成空き容量: 4
                }
                if (Gvar.var_1772 >= 93 && Gvar.var_1772 < 95) { // 出現確率: 2/100*100 = 2%
                    Gvar.var_78[Gvar.var_866].Var0 = 316; // No = 316 サバイバー
                    Gvar.var_78[Gvar.var_866].Var16 = 5;
                    Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (Gvar.var_1772 == 95) { // 出現確率: 1/100*100 = 1%
                    Gvar.var_78[Gvar.var_866].Var0 = 121; // No = 121 パープルヘイズ
                    Gvar.var_78[Gvar.var_866].Var16 = 10;
                    Gvar.var_78[Gvar.var_866].Var5 = 4; // 合成空き容量: 4
                }
                if (Gvar.var_1772 == 96) { // 出現確率: 1/100*100 = 1%
                    Gvar.var_78[Gvar.var_866].Var0 = 320; // No = 320 メタリカ
                    Gvar.var_78[Gvar.var_866].Var16 = 5;
                    Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (Gvar.var_1772 == 97) { // 出現確率: 1/100*100 = 1%
                    Gvar.var_78[Gvar.var_866].Var0 = 205; // No = 205 クラフトワーク
                    Gvar.var_78[Gvar.var_866].Var16 = 10;
                    Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (Gvar.var_1772 == 98) { // 出現確率: 1/100*100 = 1%
                    Gvar.var_78[Gvar.var_866].Var0 = 317; // No = 317 キッス
                    Gvar.var_78[Gvar.var_866].Var16 = 10;
                    Gvar.var_78[Gvar.var_866].Var5 = 4;
                }
                if (Gvar.var_1772 == 99) { // 出現確率: 1/100*100 = 1%
                    Gvar.var_78[Gvar.var_866].Var0 = 115; // No = 115 G・エクスペリエンス
                    Gvar.var_78[Gvar.var_866].Var16 = 10;
                    Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                }
            }
            // No = 1 なので、ホテルの外以外
            if (Gvar.dungeon_number != 1) {
                Gvar.var_1773 = Adap.rnd(100); // 確率調整:100の中からランダムで数字を一つ
                if (Gvar.var_1773 >= 0 && Gvar.var_1773 < 50) {
                    Gvar.var_1772 = Adap.rnd(100);
                    if (Gvar.var_1772 >= 0 && Gvar.var_1772 < 20) {
                        Gvar.var_78[Gvar.var_866].Var0 = 116; // No = 116 ハーミットパープル
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 4; // 合成空き容量: 4
                    }
                    if (Gvar.var_1772 >= 20 && Gvar.var_1772 < 40) {
                        Gvar.var_78[Gvar.var_866].Var0 = 124; // No = 124 ムーディー・ブルース
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 4; // 合成空き容量: 4
                    }
                    if (Gvar.var_1772 >= 40 && Gvar.var_1772 < 60) {
                        Gvar.var_78[Gvar.var_866].Var0 = 103; // No = 103 エコーズACT3
                        Gvar.var_78[Gvar.var_866].Var16 = 20;
                        Gvar.var_78[Gvar.var_866].Var5 = 5; // 合成空き容量: 5
                    }
                    if (Gvar.var_1772 >= 60 && Gvar.var_1772 < 80) {
                        Gvar.var_78[Gvar.var_866].Var0 = 107; // No = 107 デス・13
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 80 && Gvar.var_1772 < 85) {
                        Gvar.var_78[Gvar.var_866].Var0 = 207;
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 85 && Gvar.var_1772 < 90) {
                        Gvar.var_78[Gvar.var_866].Var0 = 201; // No = 201 イエローテンパラス
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 90 && Gvar.var_1772 < 95) {
                        Gvar.var_78[Gvar.var_866].Var0 = 105; // No = 105 チリペッパー
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 95 && Gvar.var_1772 < 100) {
                        Gvar.var_78[Gvar.var_866].Var0 = 104; // No = 104 ザ・ハンド
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                }
                if (Gvar.var_1773 >= 50 && Gvar.var_1773 < 68) {
                    Gvar.var_1772 = Adap.rnd(100);
                    if (Gvar.var_1772 >= 0 && Gvar.var_1772 < 15) {
                        Gvar.var_78[Gvar.var_866].Var0 = 106; // No = 106 クレイジー・D
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 15 && Gvar.var_1772 < 20) {
                        Gvar.var_78[Gvar.var_866].Var0 = 114; // No = 114 ホワイトスネイク
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 4; // 合成空き容量: 4
                    }
                    if (Gvar.var_1772 >= 20 && Gvar.var_1772 < 31) {
                        Gvar.var_78[Gvar.var_866].Var0 = 113; // No = 113 クラッシュ
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 31 && Gvar.var_1772 < 42) {
                        Gvar.var_78[Gvar.var_866].Var0 = 122; // No = 122 アヌビス神
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 5; // 合成空き容量: 5
                    }
                    if (Gvar.var_1772 >= 42 && Gvar.var_1772 < 53) {
                        Gvar.var_78[Gvar.var_866].Var0 = 117; // No = 117 ダークブルームーン
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 53 && Gvar.var_1772 < 64) {
                        Gvar.var_78[Gvar.var_866].Var0 = 121; // No = 121 パープルヘイズ
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 4; // 合成空き容量: 4
                    }
                    if (Gvar.var_1772 >= 64 && Gvar.var_1772 < 75) {
                        Gvar.var_78[Gvar.var_866].Var0 = 318; // No = 318 ジャンピンJフラッシュ
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 75 && Gvar.var_1772 < 80) {
                        Gvar.var_78[Gvar.var_866].Var0 = 118; // No = 118 ダイバーダウン
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 2; // 合成空き容量: 2
                    }
                    if (Gvar.var_1772 >= 80 && Gvar.var_1772 < 85) {
                        Gvar.var_78[Gvar.var_866].Var0 = 317; // No = 317 キッス
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 4; // 合成空き容量: 4
                    }
                    if (Gvar.var_1772 >= 85 && Gvar.var_1772 < 90) {
                        Gvar.var_78[Gvar.var_866].Var0 = 319; // No = 319 ボーイⅡマン
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 90 && Gvar.var_1772 < 95) {
                        Gvar.var_78[Gvar.var_866].Var0 = 115; // No = 115 G・エクスペリエンス
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 95 && Gvar.var_1772 < 100) {
                        Gvar.var_78[Gvar.var_866].Var0 = 313; // No = 313 ハイウェイ・スター
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 1; // 合成空き容量: 1
                    }
                }
                if (Gvar.var_1773 >= 68 && Gvar.var_1773 < 80) {
                    Gvar.var_1772 = Adap.rnd(100);
                    if (Gvar.var_1772 >= 0 && Gvar.var_1772 < 20) {
                        Gvar.var_78[Gvar.var_866].Var0 = 119; // No = 119 スパイスガール
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 20 && Gvar.var_1772 < 40) {
                        Gvar.var_78[Gvar.var_866].Var0 = 203; // No = 203 ザ・フール
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 40 && Gvar.var_1772 < 60) {
                        Gvar.var_78[Gvar.var_866].Var0 = 200; // No = 200 スーパーフライ
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 60 && Gvar.var_1772 < 75) {
                        Gvar.var_78[Gvar.var_866].Var0 = 205; // No = 205 クラフトワーク
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 75 && Gvar.var_1772 < 80) {
                        Gvar.var_78[Gvar.var_866].Var0 = 206; // No = 206 オアシス
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 80 && Gvar.var_1772 < 85) {
                        Gvar.var_78[Gvar.var_866].Var0 = 304; // No = 304 ウェザー・リポート
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 85 && Gvar.var_1772 < 90) {
                        Gvar.var_78[Gvar.var_866].Var0 = 120; // No = 120 ストーン・フリー
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 2; // 合成空き容量: 2
                    }
                    if (Gvar.var_1772 >= 90 && Gvar.var_1772 < 95) {
                        Gvar.var_78[Gvar.var_866].Var0 = 202; // No = 202 ホワイトアルバム
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 2; // 合成空き容量: 2
                    }
                    if (Gvar.var_1772 >= 95 && Gvar.var_1772 < 100) {
                        Gvar.var_78[Gvar.var_866].Var0 = 204; // No = 204 シアハートアタック
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 2; // 合成空き容量: 2
                    }
                }
                if (Gvar.var_1773 >= 80 && Gvar.var_1773 < 98) {
                    Gvar.var_1772 = Adap.rnd(100);
                    if (Gvar.var_1772 >= 0 && Gvar.var_1772 < 20) {
                        Gvar.var_78[Gvar.var_866].Var0 = 306; // No = 306 マンハッタントランスファー
                        Gvar.var_78[Gvar.var_866].Var16 = 5;
                        Gvar.var_78[Gvar.var_866].Var5 = 4; // 合成空き容量: 4
                    }
                    if (Gvar.var_1772 >= 20 && Gvar.var_1772 < 40) {
                        Gvar.var_78[Gvar.var_866].Var0 = 300; // No = 300 パール・ジャム
                        Gvar.var_78[Gvar.var_866].Var16 = 5;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 40 && Gvar.var_1772 < 50) {
                        Gvar.var_78[Gvar.var_866].Var0 = 311; // No = 311 チープトリック
                        Gvar.var_78[Gvar.var_866].Var16 = 5;
                        Gvar.var_78[Gvar.var_866].Var5 = 5; // 合成空き容量: 5
                    }
                    if (Gvar.var_1772 >= 50 && Gvar.var_1772 < 60) {
                        Gvar.var_78[Gvar.var_866].Var0 = 310; // No = 310 エンプレス
                        Gvar.var_78[Gvar.var_866].Var16 = 5;
                        Gvar.var_78[Gvar.var_866].Var5 = 5; // 合成空き容量: 5
                    }
                    if (Gvar.var_1772 >= 60 && Gvar.var_1772 < 70) {
                        Gvar.var_78[Gvar.var_866].Var0 = 302; // No = 302 ハイウェイ・トゥ・ヘル
                        Gvar.var_78[Gvar.var_866].Var16 = 5;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 70 && Gvar.var_1772 < 80) {
                        Gvar.var_78[Gvar.var_866].Var0 = 320; // No = 320 メタリカ
                        Gvar.var_78[Gvar.var_866].Var16 = 5;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 80 && Gvar.var_1772 < 89) {
                        Gvar.var_78[Gvar.var_866].Var0 = 316; // No = 316 サバイバー
                        Gvar.var_78[Gvar.var_866].Var16 = 5;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 89 && Gvar.var_1772 < 91) {
                        Gvar.var_78[Gvar.var_866].Var0 = 314; // No = 314 ストレイ・キャット
                        Gvar.var_78[Gvar.var_866].Var16 = 5;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 >= 91 && Gvar.var_1772 < 93) {
                        Gvar.var_78[Gvar.var_866].Var0 = 308; // No = 308 エボニー・デビル
                        Gvar.var_78[Gvar.var_866].Var16 = 5;
                        Gvar.var_78[Gvar.var_866].Var5 = 2; // 合成空き容量: 2
                    }
                    if (Gvar.var_1772 >= 93 && Gvar.var_1772 < 95) {
                        Gvar.var_78[Gvar.var_866].Var0 = 395; // No = 395 バイツァ・ダストのDISC
                        Gvar.var_78[Gvar.var_866].Var16 = 5;
                        Gvar.var_78[Gvar.var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (Gvar.var_1772 == 95) {
                        Gvar.var_78[Gvar.var_866].Var0 = 315; // No = 315 エピタフ
                        Gvar.var_78[Gvar.var_866].Var16 = 5;
                        Gvar.var_78[Gvar.var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (Gvar.var_1772 == 96) {
                        Gvar.var_78[Gvar.var_866].Var0 = 303; // No = 303 ドラゴンズドリーム
                        Gvar.var_78[Gvar.var_866].Var16 = 5;
                        Gvar.var_78[Gvar.var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (Gvar.var_1772 == 97) {
                        Gvar.var_78[Gvar.var_866].Var0 = 305; // No = 305 シンデレラ
                        Gvar.var_78[Gvar.var_866].Var16 = 5;
                        Gvar.var_78[Gvar.var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (Gvar.var_1772 == 98) {
                        Gvar.var_78[Gvar.var_866].Var0 = 301; // No = 301 ハーヴェスト
                        Gvar.var_78[Gvar.var_866].Var16 = 5;
                        Gvar.var_78[Gvar.var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (Gvar.var_1772 == 99) {
                        Gvar.var_78[Gvar.var_866].Var0 = 312; // No = 312 エアロスミス
                        Gvar.var_78[Gvar.var_866].Var16 = 5;
                        Gvar.var_78[Gvar.var_866].Var5 = 1; // 合成空き容量: 1
                    }
                }
                if (Gvar.var_1773 >= 98 && Gvar.var_1773 < 100) {
                    Gvar.var_1772 = Adap.rnd(8);
                    if (Gvar.var_1772 == 0) {
                        Gvar.var_78[Gvar.var_866].Var0 = 123; // No = 123 クリーム
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (Gvar.var_1772 == 1) {
                        Gvar.var_78[Gvar.var_866].Var0 = 109; // No = 109 マジシャンズレッド
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (Gvar.var_1772 == 2) {
                        Gvar.var_78[Gvar.var_866].Var0 = 112; // No = 112 キラー・クィーン
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (Gvar.var_1772 == 3) {
                        Gvar.var_78[Gvar.var_866].Var0 = 101; // No = 101 シルバーチャリオッツ
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (Gvar.var_1772 == 4) {
                        Gvar.var_78[Gvar.var_866].Var0 = 108; // No = 108 スティッキーフィンガーズ
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (Gvar.var_1772 == 5) {
                        Gvar.var_78[Gvar.var_866].Var0 = 100; // No = 100 スタープラチナ
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (Gvar.var_1772 == 6) {
                        Gvar.var_78[Gvar.var_866].Var0 = 111; // No = 111 ザ・ワールド
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (Gvar.var_1772 == 7) {
                        Gvar.var_78[Gvar.var_866].Var0 = 102; // No = 102 キング・クリムゾン
                        Gvar.var_78[Gvar.var_866].Var16 = 10;
                        Gvar.var_78[Gvar.var_866].Var5 = 1; // 合成空き容量: 1
                    }
                }
            }
            await Func.func387();
            if (Gvar.var_1746 == 1) { // 倒された後にNo = 399 G・E・レクイエムを落とすフラグがONの場合
                Gvar.var_78[Gvar.var_866].Var0 = 399; // No = 399 G・E・レクイエム
                Gvar.var_78[Gvar.var_866].Var16 = 10;
                Gvar.var_78[Gvar.var_866].Var5 = 1; // 合成空き容量: 1
                Gvar.var_78[Gvar.var_866].Var4 = 3;
                Gvar.var_78[Gvar.var_866].Var14 = 1;
                Gvar.var_78[Gvar.var_866].Var12 = 0;
                Gvar.var_862[399][0] = 1;
                Gvar.var_1746 = 0; // 倒された後にNo = 399 G・E・レクイエムを落とすフラグOFF
            }
            if (Gvar.var_1750 == 1) { // 倒された後にNo = 393 ボヘミアンラプソディを落とすフラグがONの場合
                Gvar.var_78[Gvar.var_866].Var0 = 393; // No = 393 ボヘミアンラプソディ
                Gvar.var_78[Gvar.var_866].Var16 = 10;
                Gvar.var_78[Gvar.var_866].Var5 = 1; // 合成空き容量: 1
                Gvar.var_78[Gvar.var_866].Var4 = 3;
                Gvar.var_78[Gvar.var_866].Var14 = 1;
                Gvar.var_78[Gvar.var_866].Var12 = 0;
                Gvar.var_862[393][0] = 1;
                Gvar.var_1750 = 0; // 倒された後にNo = 393 ボヘミアンラプソディを落とすフラグOFF
            }
            // No = 1 & 2 & 99 & 4 なので、ホテルの外、レクイエムの大迷宮、？、一巡後の世界        
            if (Gvar.dungeon_number == 1 || Gvar.dungeon_number == 2 || Gvar.dungeon_number == 99 || Gvar.dungeon_number == 4) {
                Gvar.var_1771 = Gvar.var_78[Gvar.var_866].Var0;
                Gvar.var_862[Gvar.var_1771][0] = 1;
            }
            Gvar.var_78[Gvar.var_866].Var18 = 0;
            if (Gvar.var_78[Gvar.var_866].Var0 >= 100 && Gvar.var_78[Gvar.var_866].Var0 < 400) {
                Gvar.var_78[Gvar.var_866].Var19 = 1;
            }
            Gvar.var_78[Gvar.var_866].Var20 = Gvar.var_78[Gvar.var_866].Var0;
            // No = 3 なので、ディアボロの試練
            if (Gvar.dungeon_number == 3) {
                await Func.func388();
            }
        }
        // 射撃discの出現確率
        if (Gvar.var_1735 == 3 && Gvar.dungeon_number != 5) { // Ver0.1402にて修正。射撃discはダンジョン「鉄獄」以外で出現するように。
            Gvar.var_1774 = Adap.rnd(5);
            if (Gvar.var_1774 <= 2) {
                Gvar.var_1773 = Adap.rnd(100);
                if (Gvar.var_1773 >= 0 && Gvar.var_1773 < 70) {
                    Gvar.var_78[Gvar.var_866].Var0 = 401; // No = 401 フー・ファイターズの射撃DISC
                }
                if (Gvar.var_1773 >= 70 && Gvar.var_1773 < 85) {
                    Gvar.var_78[Gvar.var_866].Var0 = 400; // No = 400 ハイエロファントグリーンの射撃DISC
                }
                if (Gvar.var_1773 >= 85 && Gvar.var_1773 < 90) {
                    Gvar.var_78[Gvar.var_866].Var0 = 411; // No = 411 タワー・オブ・グレーの射撃DISC
                }
                if (Gvar.var_1773 >= 90 && Gvar.var_1773 < 95) {
                    Gvar.var_78[Gvar.var_866].Var0 = 403; // No = 403 セックス・ピストルズの射撃DISC
                }
                if (Gvar.var_1773 >= 95 && Gvar.var_1773 < 100) {
                    Gvar.var_78[Gvar.var_866].Var0 = 402; // No = 402 エンペラーの射撃DISC
                }
            }
            if (Gvar.var_1774 >= 3) {
                Gvar.var_1773 = Adap.rnd(100);
                if (Gvar.var_1773 >= 0 && Gvar.var_1773 < 25) {
                    Gvar.var_78[Gvar.var_866].Var0 = 409; // No = 409 ラバーズの射撃DISC
                }
                if (Gvar.var_1773 >= 25 && Gvar.var_1773 < 50) {
                    Gvar.var_78[Gvar.var_866].Var0 = 405; // No = 405 エコーズAct2の射撃DISC
                }
                if (Gvar.var_1773 >= 50 && Gvar.var_1773 < 70) {
                    Gvar.var_78[Gvar.var_866].Var0 = 408; // No = 408 マン・イン・ザ・ミラーの射撃DISC
                }
                if (Gvar.var_1773 >= 70 && Gvar.var_1773 < 80) {
                    Gvar.var_78[Gvar.var_866].Var0 = 406; // No = 406 エコーズAct1の射撃DISC
                }
                if (Gvar.var_1773 >= 80 && Gvar.var_1773 < 90) {
                    Gvar.var_78[Gvar.var_866].Var0 = 404; // No = 404 ホルス神の射撃DISC
                }
                if (Gvar.var_1773 >= 90 && Gvar.var_1773 < 100) {
                    Gvar.var_78[Gvar.var_866].Var0 = 412; // No = 412 ヘブンズドアーの射撃DISC
                }
            }
            Gvar.var_1772 = Adap.rnd(3);
            Gvar.var_78[Gvar.var_866].Var3 = Gvar.var_1772 + 3;
            if (Gvar.var_78[Gvar.var_866].Var0 == 400) { // No = 400 ハイエロファントグリーンの射撃DISC
                Gvar.var_1775 = Adap.rnd(100); // 100分の1の確率でハイエロファントエメラルドにする
                if (Gvar.var_1775 == 1) {
                    Gvar.var_78[Gvar.var_866].Var0 = 407; // No = 407 ハイエロファントエメラルドの射撃DISC
                }
            }
            Gvar.var_1771 = Gvar.var_78[Gvar.var_866].Var0;
            Gvar.var_862[Gvar.var_1771][0] = 1;
        }
        if (Gvar.var_1735 == 3 && Gvar.dungeon_number == 5) { // Ver0.1402にて追加。射撃discをカエルへ。
            Gvar.var_1774 = Adap.rnd(100);
            if (Gvar.var_1773 >= 0 && Gvar.var_1773 < 64) {
                Gvar.var_78[Gvar.var_866].Var0 = 650; // No = 650 カエル
            }
            if (Gvar.var_1773 >= 64 && Gvar.var_1773 < 100) {
                Gvar.var_78[Gvar.var_866].Var0 = 651; // No = 651 大きいカエル
            }
        }
        // 消費アイテムの出現確率
        if (Gvar.var_1735 == 5) {
            Gvar.var_1773 = Adap.rnd(25);
            // No = 1 なので、ホテルの外
            if (Gvar.dungeon_number == 1) {
                Gvar.var_1773 = Adap.rnd(16);
            }
            // No >= 3 なので、ディアボロの試練、一巡後の世界
            if (Gvar.dungeon_number >= 3) {
                Gvar.var_1773 = Adap.rnd(30);
            }
            if (Gvar.var_1773 == 0) {
                Gvar.var_78[Gvar.var_866].Var0 = 575; // No = 575 マニッシュボーイのDISC
            }
            if (Gvar.var_1773 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 563; // No = 563 ンドゥールのDISC
            }
            if (Gvar.var_1773 == 2) {
                Gvar.var_78[Gvar.var_866].Var0 = 566; // No = 566 ケンゾーのDISC
            }
            if (Gvar.var_1773 == 3) {
                Gvar.var_78[Gvar.var_866].Var0 = 574; // No = 574 エンポリオのDISC
            }
            if (Gvar.var_1773 == 4) {
                Gvar.var_78[Gvar.var_866].Var0 = 569; // No = 569 ポルナレフのDISC
            }
            if (Gvar.var_1773 == 5) {
                Gvar.var_78[Gvar.var_866].Var0 = 572; // No = 572 承太郎のDISC
            }
            if (Gvar.var_1773 == 6) {
                Gvar.var_78[Gvar.var_866].Var0 = 573; // No = 573 重ちーのDISC
            }
            if (Gvar.var_1773 == 7) {
                Gvar.var_78[Gvar.var_866].Var0 = 570; // No = 570 ジョナサンのDISC
            }
            if (Gvar.var_1773 == 8) {
                Gvar.var_78[Gvar.var_866].Var0 = 577; // No = 577 ミキタカのDISC
            }
            if (Gvar.var_1773 == 9) {
                Gvar.var_78[Gvar.var_866].Var0 = 578; // No = 578 サンドマンのDISC
            }
            if (Gvar.var_1773 == 10) {
                Gvar.var_78[Gvar.var_866].Var0 = 579; // No = 579 ペットショップのDISC
            }
            if (Gvar.var_1773 == 11) {
                Gvar.var_78[Gvar.var_866].Var0 = 568; // No = 568 ジョンガリ・AのDISC
            }
            if (Gvar.var_1773 == 12) {
                Gvar.var_78[Gvar.var_866].Var0 = 564; // No = 564 噴上裕也のDISC
            }
            if (Gvar.var_1773 == 13) {
                Gvar.var_78[Gvar.var_866].Var0 = 565; // No = 565 プッチ神父のDISC
            }
            if (Gvar.var_1773 == 14) {
                Gvar.var_78[Gvar.var_866].Var0 = 580; // No = 580 ドッピオのDISC
            }
            if (Gvar.var_1773 == 15) {
                Gvar.var_78[Gvar.var_866].Var0 = 589; // No = 589 プロシュートの兄貴のDISC
            }
            if (Gvar.var_1773 == 16) {
                Gvar.var_78[Gvar.var_866].Var0 = 567; // No = 567 アヴドゥルのDISC
            }
            if (Gvar.var_1773 == 17) {
                Gvar.var_78[Gvar.var_866].Var0 = 567; // No = 567 アヴドゥルのDISC
            }
            if (Gvar.var_1773 == 18) {
                Gvar.var_78[Gvar.var_866].Var0 = 567; // No = 567 アヴドゥルのDISC
            }
            if (Gvar.var_1773 == 19) {
                Gvar.var_78[Gvar.var_866].Var0 = 567; // No = 567 アヴドゥルのDISC
            }
            if (Gvar.var_1773 == 20) {
                Gvar.var_78[Gvar.var_866].Var0 = 585; // No = 585 億泰のDISC
            }
            if (Gvar.var_1773 == 21) {
                Gvar.var_78[Gvar.var_866].Var0 = 582; // No = 582 水が熱湯になるDISC
            }
            if (Gvar.var_1773 == 22) {
                Gvar.var_78[Gvar.var_866].Var0 = 584; // No = 584 ヌケサクのDISC
            }
            if (Gvar.var_1773 == 23) {
                Gvar.var_78[Gvar.var_866].Var0 = 587; // No = 587 吉良吉影のDISC
            }
            if (Gvar.var_1773 == 24) {
                Gvar.var_1776 = Adap.rnd(3);
                if (Gvar.var_1776 == 0) {
                    Gvar.var_78[Gvar.var_866].Var0 = 562; // No = 562 康一のDISC
                }
                if (Gvar.var_1776 == 1) {
                    Gvar.var_78[Gvar.var_866].Var0 = 586; // No = 586 ペッシのDISC
                }
                if (Gvar.var_1776 == 2) {
                    Gvar.var_78[Gvar.var_866].Var0 = 583; // No = 583 ディアボロのDISC
                }
            }
            if (Gvar.var_1773 == 25) {
                Gvar.var_78[Gvar.var_866].Var0 = 588; // No = 588 J・ガイルのDISC
            }
            if (Gvar.var_1773 == 26) {
                Gvar.var_78[Gvar.var_866].Var0 = 571; // No = 571 ボインゴのDISC
            }
            if (Gvar.var_1773 == 27) {
                Gvar.var_78[Gvar.var_866].Var0 = 560; // No = 560 仗助のDISC
            }
            if (Gvar.var_1773 == 28) {
                Gvar.var_78[Gvar.var_866].Var0 = 590; // No = 590 ギアッチョのDISC
            }
            if (Gvar.var_1773 == 29) {
                Gvar.var_78[Gvar.var_866].Var0 = 576; // No = 576 破裂するDISC
            }
            if (Gvar.var_1749 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 571; // No = 571 ボインゴのDISC
            }
            if (Gvar.var_1748 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 583; // No = 583 ディアボロのDISC
            }
            if (Gvar.dungeon_number <= 1 || Gvar.dungeon_number == 99 || Gvar.dungeon_number == 4) {
                Gvar.var_1771 = Gvar.var_78[Gvar.var_866].Var0;
                Gvar.var_862[Gvar.var_1771][0] = 1;
            }
            if (Gvar.var_78[Gvar.var_866].Var0 == 583) { // No = 583 ディアボロのDISC
                Gvar.var_1771 = Gvar.var_78[Gvar.var_866].Var0;
                Gvar.var_862[Gvar.var_1771][0] = 1;
            }
        }
        // 
        if (Gvar.var_1735 == 4) {
            Gvar.var_1773 = Adap.rnd(100);
            if (Gvar.var_1773 == 0) {
                Gvar.var_78[Gvar.var_866].Var0 = 647; // No = 647 オレンジ
            }
            if (Gvar.var_1773 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 655; // No = 655 ザリガニ
            }
            if (Gvar.var_1773 == 2) {
                Gvar.var_78[Gvar.var_866].Var0 = 654; // No = 654 ヤドクガエル
            }
            if (Gvar.var_1773 == 3) {
                Gvar.var_78[Gvar.var_866].Var0 = 653; // No = 653 超巨大なカエル
            }
            if (Gvar.var_1773 >= 4 && Gvar.var_1773 < 64) {
                Gvar.var_78[Gvar.var_866].Var0 = 650; // No = 650 カエル
            }
            if (Gvar.var_1773 >= 64 && Gvar.var_1773 < 100) {
                Gvar.var_78[Gvar.var_866].Var0 = 651; // No = 651 大きいカエル
            }
            // No = 1 なので、ホテルの外
            if (Gvar.dungeon_number == 1 && Gvar.var_1773 < 3) {
                Gvar.var_78[Gvar.var_866].Var0 = 650; // No = 650 カエル
                Gvar.var_78[Gvar.var_866].Var15 = 0;
            }
            if (Gvar.var_1747 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 647; // No = 647 オレンジ
            }
            if (Gvar.var_78[Gvar.var_866].Var0 == 647) { // No = 647 オレンジ
                Gvar.var_78[Gvar.var_866].Var15 = 2;
            }
            Gvar.var_1771 = Gvar.var_78[Gvar.var_866].Var0;
            Gvar.var_862[Gvar.var_1771][0] = 1;
        }
        // 
        if (Gvar.var_1735 == 6) {
            Gvar.var_1777 = Adap.rnd(10);
            if (Gvar.var_1777 < 7) {
                Gvar.var_1773 = Adap.rnd(100);
                if (Gvar.var_1773 >= 0 && Gvar.var_1773 < 50) {
                    Gvar.var_78[Gvar.var_866].Var0 = 600; // No = 600 ピッツァ
                }
                if (Gvar.var_1778 == 1) {
                    if (Gvar.var_1773 >= 0 && Gvar.var_1773 < 5) {
                        Gvar.var_78[Gvar.var_866].Var0 = 721; // No = 721 彼女の手首
                    }
                    if (Gvar.var_1773 >= 5 && Gvar.var_1773 < 30) {
                        Gvar.var_78[Gvar.var_866].Var0 = 636; // No = 636 オレンジ
                    }
                }
                if (Gvar.var_1773 >= 50 && Gvar.var_1773 < 80) {
                    Gvar.var_78[Gvar.var_866].Var0 = 602; // No = 602 ネアポリスのピッツァ
                }
                if (Gvar.var_1773 >= 80 && Gvar.var_1773 < 95) {
                    Gvar.var_78[Gvar.var_866].Var0 = 603; // No = 603 くさったピッツァ
                }
                if (Gvar.var_1773 >= 95 && Gvar.var_1773 < 100) {
                    Gvar.var_78[Gvar.var_866].Var0 = 604; // No = 604 ポルポのピッツァ
                }
                if (Gvar.var_1734 == 1 && Gvar.var_78[Gvar.var_866].Var0 == 603) { // No = 603 くさったピッツァ
                    Gvar.var_78[Gvar.var_866].Var0 = 600; // No = 600 ピッツァ
                }
            }
            if (Gvar.var_1777 >= 7) {
                Gvar.var_1773 = Adap.rnd(5);
                if (Gvar.var_1773 == 0) {
                    Gvar.var_78[Gvar.var_866].Var0 = 630; // No = 630 娼婦風スパゲッティ
                }
                if (Gvar.var_1773 == 1) {
                    Gvar.var_78[Gvar.var_866].Var0 = 631; // No = 631 モッツァレラチーズとトマトのサラダ
                }
                if (Gvar.var_1773 == 2) {
                    Gvar.var_78[Gvar.var_866].Var0 = 632; // No = 632 キリマンジャロの雪解け水
                }
                if (Gvar.var_1773 == 3) {
                    Gvar.var_78[Gvar.var_866].Var0 = 633; // No = 633 子羊背肉のリンゴソースかけ
                }
                if (Gvar.var_1773 == 4) {
                    Gvar.var_78[Gvar.var_866].Var0 = 634; // No = 634 プリン
                }
            }
            Gvar.var_1771 = Gvar.var_78[Gvar.var_866].Var0;
            Gvar.var_862[Gvar.var_1771][0] = 1;
        }
        // コミックの出現率
        if (Gvar.var_1735 == 9) {
            Gvar.var_1773 = Adap.rnd(100);
            if (Gvar.var_1773 >= 0 && Gvar.var_1773 <= 6) {
                Gvar.var_1779 = Adap.rnd(5);
                Gvar.var_1779 = Gvar.var_1779 + 901;
                Gvar.var_78[Gvar.var_866].Var0 = Gvar.var_1779;
            }
            if (Gvar.var_1773 >= 7 && Gvar.var_1773 <= 13) {
                Gvar.var_1779 = Adap.rnd(6);
                Gvar.var_1779 = Gvar.var_1779 + 906;
                Gvar.var_78[Gvar.var_866].Var0 = Gvar.var_1779;
            }
            if (Gvar.var_1773 >= 13 && Gvar.var_1773 <= 30) {
                Gvar.var_1779 = Adap.rnd(17);
                Gvar.var_1779 = Gvar.var_1779 + 912;
                Gvar.var_78[Gvar.var_866].Var0 = Gvar.var_1779;
            }
            if (Gvar.var_1773 >= 31 && Gvar.var_1773 <= 48) {
                Gvar.var_1779 = Adap.rnd(19);
                Gvar.var_1779 = Gvar.var_1779 + 929;
                Gvar.var_78[Gvar.var_866].Var0 = Gvar.var_1779;
            }
            if (Gvar.var_1773 >= 49 && Gvar.var_1773 <= 66) {
                Gvar.var_1779 = Adap.rnd(16);
                Gvar.var_1779 = Gvar.var_1779 + 948;
                Gvar.var_78[Gvar.var_866].Var0 = Gvar.var_1779;
            }
            if (Gvar.var_1773 >= 67 && Gvar.var_1773 <= 82) {
                Gvar.var_1779 = Adap.rnd(17);
                Gvar.var_1779 = Gvar.var_1779 + 964;
                Gvar.var_78[Gvar.var_866].Var0 = Gvar.var_1779;
            }
            if (Gvar.var_1773 >= 83 && Gvar.var_1773 <= 89) {
                Gvar.var_1779 = Adap.rnd(15);
                if (Gvar.var_1779 == 0) {
                    Gvar.var_78[Gvar.var_866].Var0 = 981;
                }
                if (Gvar.var_1779 == 1) {
                    Gvar.var_78[Gvar.var_866].Var0 = 982;
                }
                if (Gvar.var_1779 == 2) {
                    Gvar.var_78[Gvar.var_866].Var0 = 983;
                }
                if (Gvar.var_1779 == 3) {
                    Gvar.var_78[Gvar.var_866].Var0 = 984;
                }
                if (Gvar.var_1779 == 4) {
                    Gvar.var_78[Gvar.var_866].Var0 = 985;
                }
                if (Gvar.var_1779 == 5) {
                    Gvar.var_78[Gvar.var_866].Var0 = 986;
                }
                if (Gvar.var_1779 == 6) {
                    Gvar.var_78[Gvar.var_866].Var0 = 750;
                }
                if (Gvar.var_1779 == 7) {
                    Gvar.var_78[Gvar.var_866].Var0 = 751;
                }
                if (Gvar.var_1779 == 8) {
                    Gvar.var_78[Gvar.var_866].Var0 = 752;
                }
                if (Gvar.var_1779 == 9) {
                    Gvar.var_78[Gvar.var_866].Var0 = 753;
                }
                if (Gvar.var_1779 == 10) {
                    Gvar.var_78[Gvar.var_866].Var0 = 754;
                }
                if (Gvar.var_1779 == 11) {
                    Gvar.var_78[Gvar.var_866].Var0 = 755;
                }
                if (Gvar.var_1779 == 12) {
                    Gvar.var_78[Gvar.var_866].Var0 = 756;
                }
                if (Gvar.var_1779 == 13) {
                    Gvar.var_78[Gvar.var_866].Var0 = 757;
                }
                if (Gvar.var_1779 == 14) {
                    Gvar.var_78[Gvar.var_866].Var0 = 758;
                }
            }
            // その他消費アイテムの出現率
            if (Gvar.var_1773 >= 90 && Gvar.var_1773 <= 100) {
                // Ver0.1401にて修正。ベルトのバックルを追加したので 6 → 7へ変更。
                // Ver0.1403にて修正。ポコロコのDISCを追加したので7 → 8へ変更。ポコロコのDISCは効果が強すぎるのでこちらへ。
                Gvar.var_1073 = Adap.rnd(8);
                if (Gvar.var_1073 == 0) {
                    Gvar.var_78[Gvar.var_866].Var0 = 727; // No = 727 ゾンビ馬
                }
                if (Gvar.var_1073 == 1) {
                    Gvar.var_78[Gvar.var_866].Var0 = 726; // No = 726 鉄球
                }
                if (Gvar.var_1073 == 2) {
                    Gvar.var_78[Gvar.var_866].Var0 = 724; // No = 724 石仮面
                }
                if (Gvar.var_1073 == 3) {
                    Gvar.var_78[Gvar.var_866].Var0 = 723; // No = 723 魔法のランプ
                }
                if (Gvar.var_1073 == 4) {
                    Gvar.var_78[Gvar.var_866].Var0 = 714; // No = 714 紫外線照射装置
                }
                if (Gvar.var_1073 == 5) {
                    Gvar.var_1780 = Adap.rnd(100);
                    if (Gvar.var_1780 == 0) {
                        Gvar.var_78[Gvar.var_866].Var0 = 987; // No = 987 バオー来訪者 1巻
                    }
                    if (Gvar.var_1780 == 1) {
                        Gvar.var_78[Gvar.var_866].Var0 = 988; // No = 988 バオー来訪者 2巻
                    }
                    if (Gvar.var_1780 == 2) {
                        Gvar.var_78[Gvar.var_866].Var0 = 989; // No = 989 魔少年ビーティー
                    }
                    if (Gvar.var_1780 == 3) {
                        Gvar.var_78[Gvar.var_866].Var0 = 990; // No = 990 ゴージャス☆アイリン
                    }
                    if (Gvar.var_1780 == 4) {
                        Gvar.var_78[Gvar.var_866].Var0 = 991; // No = 991 死刑執行中脱獄進行中
                    }
                    if (Gvar.var_1780 == 5) {
                        Gvar.var_78[Gvar.var_866].Var0 = 992; // No = 992 変人偏屈列伝
                    }
                    if (Gvar.var_1780 == 6) {
                        Gvar.var_78[Gvar.var_866].Var0 = 993; // No = 993 JOJO 6251
                    }
                    if (Gvar.var_1780 == 7) {
                        Gvar.var_78[Gvar.var_866].Var0 = 994; // No = 994 JOJO A GOGO
                    }
                    if (Gvar.var_1780 >= 8) {
                        Gvar.var_78[Gvar.var_866].Var0 = 718; // No = 718 聖なる弓矢
                    }
                }
                if (Gvar.var_1073 == 6) {
                    Gvar.var_78[Gvar.var_866].Var0 = 732; // Ver0.1401にて追加。No = 732 ベルトのバックル
                }
                if (Gvar.var_1073 == 7) {
                    Gvar.var_78[Gvar.var_866].Var0 = 591; // Ver0.1403にて追加。No = 591 ポコロコのDISC
                }
            }
            if (Gvar.var_78[Gvar.var_866].Var0 == 724 && Gvar.var_11 == 1) {
                Gvar.var_1073 = Adap.rnd(2);
                if (Gvar.var_1073 == 0) {
                    Gvar.var_78[Gvar.var_866].Var0 = 728; // No = 728 赤石つき石仮面
                }
            }
            // No = 1 なので、ホテルの外
            if (Gvar.dungeon_number == 1 && Gvar.var_1773 >= 90) {
                Gvar.var_78[Gvar.var_866].Var0 = 650; // No = 650 カエル
            }
            if (Gvar.var_1753 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 713; // No = 713 ポルポのライター
            }
            if (Gvar.var_1737 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 718; // No = 718 聖なる弓矢
            }
            if (Gvar.var_1752 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 725; // No = 725 オレッちのコート
            }
            if (Gvar.var_1742 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 720; // No = 720 ときのがくぼう
            }
            if (Gvar.var_1743 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 900; // No = 900 GB BOY
            }
            if (Gvar.var_1751 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 996; // No = 996 ヒロヒコのサイン色紙
            }
            if (Gvar.var_1754 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 712; // No = 712 やばいクスリ
            }
            if (Gvar.var_1755 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 715; // No = 715 点滴
            }
            if (Gvar.var_1756 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 600; // No = 600 ピッツァ
            }
            if (Gvar.var_1757 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 716; // No = 716 恐竜の化石
            }
            if (Gvar.var_1758 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 729;  // No = 729 吉良の財布
                Gvar.var_78[Gvar.var_866].Var15 = 2;
            }
            if (Gvar.var_1762 >= 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 700; // No = 700 不明
                Gvar.var_78[Gvar.var_866].Var13 = Gvar.var_1762;
            }
            if (Gvar.var_1761 >= 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 701; // No = 701 不明
                Gvar.var_78[Gvar.var_866].Var13 = Gvar.var_1761;
            }
            if (Gvar.var_1778 == 1 && Gvar.var_1773 >= 90) {
                Gvar.var_1773 = Adap.rnd(10);
                if (Gvar.var_1773 == 0 || Gvar.var_1773 == 1) {
                    Gvar.var_1779 = Adap.rnd(17);
                    Gvar.var_1779 = Gvar.var_1779 + 912;
                    Gvar.var_78[Gvar.var_866].Var0 = Gvar.var_1779;
                }
                if (Gvar.var_1773 == 2 || Gvar.var_1773 == 3) {
                    Gvar.var_1779 = Adap.rnd(19);
                    Gvar.var_1779 = Gvar.var_1779 + 929;
                    Gvar.var_78[Gvar.var_866].Var0 = Gvar.var_1779;
                }
                if (Gvar.var_1773 == 4 || Gvar.var_1773 == 5) {
                    Gvar.var_1779 = Adap.rnd(16);
                    Gvar.var_1779 = Gvar.var_1779 + 948;
                    Gvar.var_78[Gvar.var_866].Var0 = Gvar.var_1779;
                }
                if (Gvar.var_1773 == 6 || Gvar.var_1773 == 7) {
                    Gvar.var_1779 = Adap.rnd(17);
                    Gvar.var_1779 = Gvar.var_1779 + 964;
                    Gvar.var_78[Gvar.var_866].Var0 = Gvar.var_1779;
                }
                if (Gvar.var_1773 == 8 || Gvar.var_1773 == 9) {
                    Gvar.var_78[Gvar.var_866].Var0 = 995;
                }
            }
            if (Gvar.dungeon_number == 99) {
                Gvar.var_78[Gvar.var_866].Var0 = 641; // No = 641 消し炭
            }
            if (Gvar.var_454 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 717; // No = 717 コピー人形の破片
            }
            if (Gvar.var_1760 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 644; // No = 644 猫バーガー
            }
            if (Gvar.var_1760 == 2) {
                Gvar.var_78[Gvar.var_866].Var0 = 645; // No = 645 猫ステーキ
            }
            if (Gvar.var_1760 == 3) {
                Gvar.var_78[Gvar.var_866].Var0 = 646; // No = 646 猫ジュース
            }
            // No = 5 なので、鉄獄(鉄の牢獄)
            // Ver0.1402にてコメントアウト。
            /*
            if (Gvar.dungeon_number == 5) {
                if (Gvar.var_78[Gvar.var_866].Var0 >= 900 && Gvar.var_78[Gvar.var_866].Var0 < 1000) {
                    await Func.func386(); // 床に落ちているアイテムを「消し炭」にする
                }
                if (Gvar.var_78[Gvar.var_866].Var0 >= 750 && Gvar.var_78[Gvar.var_866].Var0 < 800) {
                    await Func.func386(); // 床に落ちているアイテムを「消し炭」にする
                }
            }*/
            Gvar.var_1771 = Gvar.var_78[Gvar.var_866].Var0;
            Gvar.var_862[Gvar.var_1771][0] = 1;
        }
        if (Gvar.var_1735 == 10) {
            await Func.func395();
            Gvar.var_1773 = Adap.rnd(100);
            Gvar.var_1781 = Adap.rnd(4);
            if (Gvar.var_1773 == 0) {
                Gvar.var_78[Gvar.var_866].Var0 = 803; // No = 803 サンジェルマンの紙袋
            }
            if (Gvar.var_1773 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 804; // No = 804 露伴のカバン
            }
            if (Gvar.var_1773 == 2) {
                Gvar.var_78[Gvar.var_866].Var0 = 802; // No = 802 トラクターのタイヤ
            }
            if (Gvar.var_1773 == 3) {
                Gvar.var_78[Gvar.var_866].Var0 = 801; // No = 801 形兆のDISCケース
            }
            if (Gvar.var_1773 == 4 || Gvar.var_1773 == 5) {
                Gvar.var_78[Gvar.var_866].Var0 = 815; // No = 815 エルメェスのあれ
            }
            if (Gvar.var_1773 >= 6 && Gvar.var_1773 < 10) {
                Gvar.var_78[Gvar.var_866].Var0 = 800; // No = 800 エニグマの紙
            }
            if (Gvar.var_1773 >= 10 && Gvar.var_1773 < 15) {
                Gvar.var_78[Gvar.var_866].Var0 = 817; // No = 817 乳母車
            }
            if (Gvar.var_1773 >= 15 && Gvar.var_1773 < 20) {
                Gvar.var_78[Gvar.var_866].Var0 = 805; // No = 805 グッチョの死体
            }
            if (Gvar.var_1773 >= 20 && Gvar.var_1773 < 25) {
                Gvar.var_78[Gvar.var_866].Var0 = 806; // No = 806 カルネの死体
            }
            if (Gvar.var_1773 >= 25 && Gvar.var_1773 < 30) {
                Gvar.var_78[Gvar.var_866].Var0 = 852; // No = 852 ランドセル
            }
            if (Gvar.var_1773 >= 30 && Gvar.var_1773 < 36) {
                Gvar.var_78[Gvar.var_866].Var0 = 809; // No = 809 聖人の左腕
            }
            if (Gvar.var_1773 >= 36 && Gvar.var_1773 < 42) {
                Gvar.var_78[Gvar.var_866].Var0 = 853; // No = 853 サーフィス人形
            }
            if (Gvar.var_1773 >= 42 && Gvar.var_1773 < 48) {
                Gvar.var_78[Gvar.var_866].Var0 = 851; // No = 851 ホルマジオのビン
            }
            if (Gvar.var_1773 >= 48 && Gvar.var_1773 < 55) {
                Gvar.var_78[Gvar.var_866].Var0 = 850; // No = 850 波紋のツボ
            }
            if (Gvar.var_1773 >= 55 && Gvar.var_1773 < 62) {
                Gvar.var_78[Gvar.var_866].Var0 = 854; // No = 854 聖人の脊髄
            }
            if (Gvar.var_1773 >= 62 && Gvar.var_1773 < 69) {
                Gvar.var_78[Gvar.var_866].Var0 = 807; // No = 807 DIOの骨
            }
            if (Gvar.var_1773 >= 69 && Gvar.var_1773 < 77) {
                Gvar.var_78[Gvar.var_866].Var0 = 816; // No = 816 ミキタカのカバン
            }
            if (Gvar.var_1773 >= 77 && Gvar.var_1773 < 85) {
                Gvar.var_78[Gvar.var_866].Var0 = 808; // No = 808 聖人の眼球
            }
            if (Gvar.var_1773 >= 85 && Gvar.var_1773 < 100) {
                Gvar.var_78[Gvar.var_866].Var0 = 800; // No = 800 エニグマの紙
            }
            // No = 1 なので、ホテルの外
            if (Gvar.dungeon_number == 1) {
                if (Gvar.var_78[Gvar.var_866].Var0 == 807) { // No = 807 DIOの骨
                    Gvar.var_78[Gvar.var_866].Var0 = 800; // No = 800 エニグマの紙
                }
            }
            // No = 5 なので、鉄獄(鉄の牢獄)
            // Ver0.1402にてコメントアウト。
            /*
            if (Gvar.dungeon_number == 5) {
                if (Gvar.var_78[Gvar.var_866].Var0 == 807) {
                    await Func.func386(); // 床に落ちているアイテムを「消し炭」にする
                }
            }
            // No = 5 なので、鉄獄(鉄の牢獄)
            if (Gvar.dungeon_number == 5) {
                if (Gvar.var_78[Gvar.var_866].Var0 == 804) {
                    await Func.func386(); // 床に落ちているアイテムを「消し炭」にする
                }
            }*/
            if (Gvar.dungeon_number != 4) { // 一巡後の世界以外では No = 815 エルメェスのあれ を  No = 800 エニグマの紙へ置き換える
                if (Gvar.var_78[Gvar.var_866].Var0 == 815) { // No = 815 エルメェスのあれ
                    Gvar.var_78[Gvar.var_866].Var0 = 800; // No = 800 エニグマの紙
                }
            }
            if (Gvar.var_1734 == 1 && Gvar.var_1773 < 7) {
                Gvar.var_78[Gvar.var_866].Var0 = 800; // No = 800 エニグマの紙
            }
            if (Gvar.var_1738 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 803; // No = 803 サンジェルマンの紙袋
            }
            if (Gvar.var_1739 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 801; // No = 801 形兆のDISCケース
            }
            if (Gvar.var_1744 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 807; // No = 807 DIOの骨
            }
            if (Gvar.var_1745 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = 816; // No = 816 ミキタカのカバン
            }
            Gvar.var_78[Gvar.var_866].Var6 = Gvar.var_858;
            Gvar.var_78[Gvar.var_866].Var7 = Gvar.var_1781 + 3;
            if (Gvar.var_78[Gvar.var_866].Var0 == 802) { // No = 802 トラクターのタイヤ
                Gvar.var_78[Gvar.var_866].Var7 = 10;
            }
            Gvar.var_78[Gvar.var_866].Var8 = 0;
            Gvar.var_486[Gvar.var_858][1][0] = 0;
            Gvar.var_486[Gvar.var_858][2][0] = 0;
            Gvar.var_486[Gvar.var_858][3][0] = 0;
            Gvar.var_486[Gvar.var_858][4][0] = 0;
            Gvar.var_486[Gvar.var_858][5][0] = 0;
            Gvar.var_486[Gvar.var_858][6][0] = 0;
            Gvar.var_486[Gvar.var_858][7][0] = 0;
            Gvar.var_486[Gvar.var_858][8][0] = 0;
            Gvar.var_486[Gvar.var_858][9][0] = 0;
            Gvar.var_486[Gvar.var_858][10][0] = 0;
            if (Gvar.var_78[Gvar.var_866].Var0 == 851) { // No = 851 ホルマジオのビン
                Gvar.var_78[Gvar.var_866].Var7 = Gvar.var_78[Gvar.var_866].Var7 - 1;
                Gvar.var_78[Gvar.var_866].Var8 = 1;
                Gvar.var_893 = Adap.rnd(2);
                if (Gvar.var_893 == 0) {
                    Gvar.var_486[Gvar.var_858][1][15] = 37;
                }
                if (Gvar.var_893 == 1) {
                    Gvar.var_486[Gvar.var_858][1][15] = 48;
                }
            }
            if (Gvar.var_78[Gvar.var_866].Var0 == 800) { // No = 800 エニグマの紙
                Gvar.var_1782 = Adap.rnd(100);
                if (Gvar.var_1782 == 0) {
                    Gvar.var_486[Gvar.var_858][1][0] = 648;
                    if (Gvar.var_1734 == 1) {
                        Gvar.var_486[Gvar.var_858][1][11] = 1;
                    }
                    Gvar.var_78[Gvar.var_866].Var7 = Gvar.var_78[Gvar.var_866].Var7 - 1;
                    Gvar.var_78[Gvar.var_866].Var8 = 1;
                }
            }
            // No = 801 形兆のDISCケース or No = 802 トラクターのタイヤ or No = 803 サンジェルマンの紙袋 or No = 804 露伴のカバン
            if (Gvar.var_78[Gvar.var_866].Var0 == 801 || Gvar.var_78[Gvar.var_866].Var0 == 802 || Gvar.var_78[Gvar.var_866].Var0 == 803 || Gvar.var_78[Gvar.var_866].Var0 == 804) {
                Gvar.var_1771 = Gvar.var_78[Gvar.var_866].Var0;
                Gvar.var_862[Gvar.var_1771][0] = 1;
            }
            // No = 1 & 99 & 4 なので、ホテルの外、?、一巡後の世界
            if (Gvar.dungeon_number == 1 || Gvar.dungeon_number == 99 || Gvar.dungeon_number == 4) {
                Gvar.var_1771 = Gvar.var_78[Gvar.var_866].Var0;
                Gvar.var_862[Gvar.var_1771][0] = 1;
            }
        }
        if (Gvar.var_1735 == 0) {
            Gvar.var_78[Gvar.var_866].Var0 = 1;
            await Func.func436();
            Gvar.var_78[Gvar.var_866].Var13 = Gvar.var_1783;
        }
        return;
}

export {func385}
