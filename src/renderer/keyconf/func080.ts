/**
 * func080 — func080 各キー入力確認
 *
 * (org原典: newDTW_func0)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'
import { ipcRenderer } from 'electron';
const myResizeBtn = document.getElementById('resizeBtn');
import { updateBufferResolution } from '../util/updateBufferResolution';

// キーボード入力設定処理
// 旧 func080
async function func080(this: any, is_Key_reset = true) {
    Adap.dbgprt(80);
    Gvar.conf_keyon = 0;
    Gvar.var_254 = 0; // var_254:入力判定[←]
    Gvar.var_257 = 0; // var_257:入力判定[→]
    Gvar.var_255 = 0; // var_255:入力判定[↑]
    Gvar.var_259 = 0; // var_259:入力判定[↓]
    Gvar.var_253 = 0;
    Gvar.var_256 = 0;
    Gvar.var_258 = 0;
    Gvar.var_260 = 0;
    Gvar.key_X_on = 0;
    Gvar.key_A_on = 0; // キーA入力初期化
    Gvar.key_Z_on = 0; // キーZ入力初期化
    Gvar.key_C_on = 0;
    Gvar.key_Shift_on = 0; // キーShift入力初期化
    Gvar.key_S_on = 0; // キーS入力初期化
    Gvar.key_F_on = 0; // Ver0.1401にて追加。キーF入力初期化
    Gvar.var_619 = 0;
    Gvar.var_620 = 0;
    Gvar.var_621 = 0;
    Gvar.var_261 = 0;
    if (Gvar.var_407 >= 1) {
        if (await Adap.ginfo(2) == 30) {
            if (Gvar.var_622 == 0) {
                Func.imeset(1);
            }
            Gvar.var_622 = 30;
            Adap.onkey(1);
        }
        if (await Adap.ginfo(2) == 0) {
            if (Gvar.var_622 == 30) {
                Func.imeset(0);
            }
            Gvar.var_622 = 0;
        }
        if (await Adap.ginfo(2) != 30) {
            Adap.onkey(0);
            Gvar.var_623 = Adap.getkey(48); // キー0入力確認
            if (Gvar.var_623 == 1) {
                Gvar.var_624 = 0;
                Gvar.var_625 = 0;
                await Func.func0993();
                await Func.func0988();
            }
            Gvar.var_623 = Adap.getkey(49); // キー1入力確認
            if (Gvar.var_623 == 1 && Gvar.var_624 != 1) {
                Gvar.var_624 = 1;
                Gvar.var_625 = 1;
                await Func.func0993();
                await Func.func0988();
            }
            Gvar.var_623 = Adap.getkey(50); // キー2入力確認
            if (Gvar.var_623 == 1 && Gvar.var_624 != 2) {
                Gvar.var_624 = 2;
                Gvar.var_625 = 1;
                await Func.func0993();
                await Func.func0988();
            }
            Gvar.var_623 = Adap.getkey(51);
            if (Gvar.var_623 == 1 && Gvar.var_624 != 3) {
                Gvar.var_624 = 3;
                Gvar.var_625 = 1;
                await Func.func0993();
                await Func.func0988();
            }
            Gvar.var_623 = Adap.getkey(52); // キー3入力確認
            if (Gvar.var_623 == 1 && Gvar.var_624 != 4) {
                Gvar.var_624 = 4;
                Gvar.var_625 = 1;
                await Func.func0993();
                await Func.func0988();
            }
            Gvar.var_623 = Adap.getkey(53); // キー4入力確認
            if (Gvar.var_623 == 1 && Gvar.var_624 != 5) {
                Gvar.var_624 = 5;
                Gvar.var_625 = 1;
                await Func.func0993();
                await Func.func0988();
            }
            Gvar.var_623 = Adap.getkey(54); // キー5入力確認
            if (Gvar.var_623 == 1 && Gvar.var_624 != 6) {
                Gvar.var_624 = 6;
                Gvar.var_625 = 1;
                await Func.func0993();
                await Func.func0988();
            }
            Gvar.var_623 = Adap.getkey(55); // キー6入力確認
            if (Gvar.var_623 == 1 && Gvar.var_624 != 7) {
                Gvar.var_624 = 7;
                Gvar.var_625 = 1;
                await Func.func0993();
                await Func.func0988();
            }
            Gvar.var_623 = Adap.getkey(56); // キー7入力確認
            if (Gvar.var_623 == 1 && Gvar.var_624 != 8) {
                Gvar.var_624 = 8;
                Gvar.var_625 = 1;
                await Func.func0993();
                await Func.func0988();
            }
        }
    }
    if (await Adap.ginfo(2) == (-1)) {
        return;
    }
    if (await Adap.ginfo(2) != 0 && await Adap.ginfo(2) != 37) {
        return;
    }

    // F1キーを押した際の動作  画面サイズ変更
    // var
    if (Gvar.var_626 == 0) {
        Gvar.conf_keyon = Adap.getkey(112); // キーF1入力確認(画面サイズ変更)
        if (Gvar.conf_keyon == 1 && Gvar.var_10 == 1) {
            Gvar.var_10 = 0;
            Adap.width(340, 340);
            if (Gvar.var_627 == 0) {

                await Adap.bsave("00.dat", Gvar.data = Gvar.var_10, null, 20);
            }
            for (let cnt3 = 0; true; ++cnt3) {
                if (Gvar.var_628 == 0 && Gvar.var_629 == 0) {
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                if (Gvar.var_628 == 1 || Gvar.var_629 == 1) {
                    await Adap.wait(2);
                }
                Gvar.conf_keyon = Adap.getkey(112); // キーF1入力確認(画面サイズ変更)
                if (Gvar.conf_keyon == 0) {
                    break;
                }
            }
            return;
        }
        if (Gvar.conf_keyon == 1 && Gvar.var_10 == 0) {
            Gvar.var_10 = 1;
            Adap.width(680, 680);
            if (Gvar.var_627 == 0) {

                await Adap.bsave("00.dat", Gvar.data = Gvar.var_10, null, 20);
            }
            for (let cnt3 = 0; true; ++cnt3) {
                if (Gvar.var_628 == 0 && Gvar.var_629 == 0) {
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                if (Gvar.var_628 == 1 || Gvar.var_629 == 1) {
                    await Adap.wait(2);
                }
                Gvar.conf_keyon = Adap.getkey(112); // キーF1入力確認(画面サイズ変更)
                if (Gvar.conf_keyon == 0) {
                    break;
                }
            }
            return;
        }
        // F2キーを押した際の動作
        Gvar.conf_keyon = Adap.getkey(113); // キーF2入力確認(BGM音量下げ)
        if (Gvar.conf_keyon == 1) {
            await Music.func088(); // 音量を小さくする（ボリュームコントロールのWAVE変更）
        }

        // F3キーを押した際の動作
        Gvar.conf_keyon = Adap.getkey(114); // キーF3入力確認(BGM音量上げ)
        if (Gvar.conf_keyon == 1) {
            await Music.func087(); // 音量を大きくする（ボリュームコントロールのWAVE変更）
        }

        // F4キーを押した際の動作
        Gvar.conf_keyon = Adap.getkey(115); // キーF4入力確認
        if (Gvar.conf_keyon == 1) {
            await Music.func085(); // 効果音を小さくする
        }

        // F5キーを押した際の動作
        Gvar.conf_keyon = Adap.getkey(116); // キーF5入力確認
        if (Gvar.conf_keyon == 1) {
            await Music.func086(); // 効果音を大きくする
        }

        // F6キーを押した際の動作  装備品の情報を「disc.txt」に出力する
        Gvar.conf_keyon = Adap.getkey(117); // キーF6入力確認
        if (Gvar.conf_keyon == 1 && Gvar.var_628 == 0 && Gvar.var_627 == 0 && Gvar.var_629 == 0) {
            await Func.func227(); // F6キーを押しての現在ステータスをテキストファイルへ出力
            Gvar.var_630 = 1;
            for (let cnt3 = 0; true; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.conf_keyon = Adap.getkey(117); // キーF6入力確認
                if (Gvar.conf_keyon == 0) {
                    break;
                }
            }
            return;
        }
        // F7キーを押した際の動作  BGMのオン・オフ（オンにした場合DISC使用時や階段を降りてから再開）
        Gvar.conf_keyon = Adap.getkey(118); // キーF7入力確認
        if (Gvar.conf_keyon == 1 && Gvar.var_631 == 1000) {
            Adap.DMSTOP(); // BGM停止関数
            Gvar.var_631 = 0;
            Gvar.var_632 = 1;
            Gvar.var_633 = 0;
            Gvar.var_634 = 0;
            Gvar.var_635 = 0;
            Gvar.var_636 = 0;
            for (let cnt3 = 0; true; ++cnt3) {
                if (Gvar.var_628 == 0 && Gvar.var_629 == 0) {
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                if (Gvar.var_628 == 1 || Gvar.var_629 == 1) {
                    await Adap.wait(2);
                }
                Gvar.conf_keyon = Adap.getkey(118); // キーF2入力確認
                if (Gvar.conf_keyon == 0) {
                    break;
                }
            }
            return;
        }
        if (Gvar.conf_keyon == 1 && Gvar.var_631 == 0) {
            Gvar.var_631 = 1000;
            Gvar.var_633 = 1;
            Gvar.var_632 = 0;
            Gvar.var_634 = 0;
            Gvar.var_635 = 0;
            Gvar.var_636 = 0;
            for (let cnt3 = 0; true; ++cnt3) {
                if (Gvar.var_628 == 0 && Gvar.var_629 == 0) {
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                if (Gvar.var_628 == 1 || Gvar.var_629 == 1) {
                    await Adap.wait(2);
                }
                Gvar.conf_keyon = Adap.getkey(118); // キーF7入力確認
                if (Gvar.conf_keyon == 0) {
                    break;
                }
            }
            return;
        }

        // F12キーを押した際の動作  フルスクリーン切り替え
        /*Gvar.conf_keyon = Adap.getkey(123); // キーF12入力確認
        
        if (Gvar.var_407 == 0 && Gvar.conf_keyon == 1 && Gvar.var_637 == 0) {
    
            Adap.chgdisp(1, 640, 480);
            Gvar.var_638 = Adap.ginfo(20);
            Gvar.var_639 = Adap.ginfo(21);
            Adap.bgscr(37, Gvar.var_638, Gvar.var_639, 1, 0, 0);
            Adap.title("");
            Adap.cls(4); // 黒く薄いフィルターがかかる
            if (Gvar.var_10 == 1) {
                Gvar.var_640 = 1;
                Gvar.var_10 = 0;
            }
            Gvar.var_637 = 1;
            Gvar.var_641 = Math.floor((Gvar.var_638 - 340) / 2);
            Gvar.var_642 = Math.floor((Gvar.var_639 - 340) / 2);
            Adap.bgscr(0, 340, 340, 2, Gvar.var_641, Gvar.var_642, 340, 340);
            Adap.gsel(0, 2);
            for (let cnt3 = 0; true; ++cnt3) {
                Gvar.conf_keyon = Adap.getkey(123); // キーF12入力確認
                if (Gvar.conf_keyon == 0) {
                    break;
                }
                if (Gvar.var_628 == 0 && Gvar.var_629 == 0) {
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                if (Gvar.var_628 == 1 || Gvar.var_629 == 1) {
                    await Adap.wait(2);
                }
            }
            return;
        }

        if (Gvar.var_407 == 0 && Gvar.conf_keyon == 1 && Gvar.var_637 == 1) {
            Gvar.var_637 = 2;
            Gvar.var_10 = 1;
            Gvar.var_638 = Adap.ginfo(20);
            Gvar.var_639 = Adap.ginfo(21);
            Gvar.var_643 = Gvar.var_639;
            Gvar.var_644 = Gvar.var_639;
            Adap.bgscr(37, Gvar.var_638, Gvar.var_639, 1, 0, 0);
            Adap.title("");
            Adap.cls(4); // 黒く薄いフィルターがかかる
            Gvar.var_641 = Math.floor((Gvar.var_638 - Gvar.var_643) / 2);
            Gvar.var_642 = Math.floor((Gvar.var_639 - Gvar.var_644) / 2);
            Adap.bgscr(0, Gvar.var_643, Gvar.var_644, 2, Gvar.var_641, Gvar.var_642);
            Adap.gsel(0, 2);
            for (let cnt3 = 0; true; ++cnt3) {
                Gvar.conf_keyon = Adap.getkey(123); // キーF12入力確認
                if (Gvar.conf_keyon == 0) {
                    break;
                }
                if (Gvar.var_628 == 0 && Gvar.var_629 == 0) {
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                if (Gvar.var_628 == 1 || Gvar.var_629 == 1) {
                    await Adap.wait(2);
                }
            }
            return;
        }
        if (Gvar.var_407 == 0 && Gvar.conf_keyon == 1 && Gvar.var_637 == 2) {
            Gvar.var_637 = 4;
            Gvar.var_10 = 1;
            Gvar.var_638 = Adap.ginfo(20);
            Gvar.var_639 = Adap.ginfo(21);
            Gvar.var_643 = Gvar.var_638;
            Gvar.var_644 = Gvar.var_639;
            Gvar.var_645 = Gvar.var_643;
            Gvar.var_646 = Gvar.var_644;
            Gvar.var_641 = Math.floor((Gvar.var_638 - Gvar.var_643) / 2);
            Gvar.var_642 = Math.floor((Gvar.var_639 - Gvar.var_644) / 2);
            Adap.bgscr(37, Gvar.var_638, Gvar.var_639, 1, 0, 0);
            Adap.title("");
            Adap.cls(4); // 黒く薄いフィルターがかかる
            Gvar.var_641 = Math.floor((Gvar.var_638 - Gvar.var_643) / 2);
            Gvar.var_642 = Math.floor((Gvar.var_639 - Gvar.var_644) / 2);
            Adap.bgscr(0, Gvar.var_643, Gvar.var_644, 2, Gvar.var_641, Gvar.var_642);
            Adap.gsel(0, 2);
            for (let cnt3 = 0; true; ++cnt3) {
                Gvar.conf_keyon = Adap.getkey(123); // キーF12入力確認
                if (Gvar.conf_keyon == 0) {
                    break;
                }
                if (Gvar.var_628 == 0 && Gvar.var_629 == 0) {
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                if (Gvar.var_628 == 1 || Gvar.var_629 == 1) {
                    await Adap.wait(2);
                }
            }
            return;
        }
        if (Gvar.var_407 == 0 && Gvar.conf_keyon == 1 && Gvar.var_637 == 4) {
            Gvar.var_637 = 0;
            Adap.gsel(37, -1);
            Adap.screen_(0, 340, 340, 2);
        
            Adap.SetWindowLongA(Gvar.hwnd, -8, Gvar.var_15);
            if (Gvar.var_640 == 0) {
                Gvar.var_10 = 0;
                Adap.width(340, 340);
            }
            if (Gvar.var_640 == 1) {
                Gvar.var_640 = 0;
                Gvar.var_10 = 1;
                Adap.width(340, 340);
            }
    
            Adap.gsel(0, 1);
            Adap.chgdisp();
            for (let cnt3 = 0; true; ++cnt3) {
                Gvar.conf_keyon = Adap.getkey(123); // キーF12入力確認
                if (Gvar.conf_keyon == 0) {
                    break;
                }
                if (Gvar.var_628 == 0 && Gvar.var_629 == 0) {
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                if (Gvar.var_628 == 1 || Gvar.var_629 == 1) {
                    await Adap.wait(2);
                }
            }
            return;
        }*/

            Gvar.conf_keyon = Adap.getkey(123); // キーF12入力確認

            if (Gvar.var_407 == 0 && Gvar.conf_keyon == 1) {        
                let newWidth, newHeight;
    
                // F12キーの拡大処理部分
                if (Gvar.var_637 == 0) {
                    newWidth = 340;
                    newHeight = 340;
                    Adap.width(newWidth, newWidth);
                    Gvar.currentScale = 1; // 元に戻す
                    Gvar.var_637 = 1;
                    Gvar.var_10 = 0;
                } 
                else if (Gvar.var_637 == 1) {
                    newWidth = 680;
                    newHeight = 680;
                    Adap.width(newWidth, newWidth);
                    Gvar.currentScale = 2; // 倍率設定
                    //Gvar.var_637 = 2;
                    Gvar.var_637 = 0;
                    Gvar.var_10 = 1;
                } 
                //else if (Gvar.var_637 == 2) {
                //    newWidth = 1020;
                //    newHeight = 1020;
                //   Adap.width(newWidth, newWidth);
                //    Gvar.var_637 = 0;
                //}
    
                // 更新処理（ここで倍率を保存）
                // Gvar.currentScale = newWidth / 340;  // 例えば340→680なら currentScale = 2
                
                Adap.chgdisp(1, newWidth, newHeight);
                Adap.bgscr(37, newWidth, newHeight, 1, 0, 0);
                Adap.title("");
                // Adap.cls(4); // 黒く薄いフィルターがかかる

                // F12キーの処理が完了した後に、オフスクリーンバッファ（ID 10）の内部解像度を更新
                //updateBufferResolution(Gvar.canvases[10], 340, 200);
    
                // ウィンドウの現在の位置を取得
                //const currentX = window.screenX;
                //const currentY = window.screenY;
    
                // ウィンドウのサイズを変更し、位置を保持する
                //window.resizeTo(newWidth + window.outerWidth - window.innerWidth, newHeight + window.outerHeight - window.innerHeight);
                //window.moveTo(currentX, currentY);
    
                // F12キーを押し続けている間の処理を維持
                for (let cnt3 = 0; true; ++cnt3) {
                    Gvar.conf_keyon = Adap.getkey(123); // キーF12入力確認
                    if (Gvar.conf_keyon == 0) {
                        break;
                    }
                    if (Gvar.var_628 == 0 && Gvar.var_629 == 0) {
                        await Func.func337(); // メッセージ表示処理(自動)
                    }
                    if (Gvar.var_628 == 1 || Gvar.var_629 == 1) {
                        await Adap.wait(2);
                    }
                }
                return;
            }
    }

    Gvar.var_254 = Adap.getkey(Gvar.var_647); // 入力判定：[←]
    Gvar.var_257 = Adap.getkey(Gvar.var_648); // 入力判定：[→]
    Gvar.var_255 = Adap.getkey(Gvar.var_649); // 入力判定：[↑]
    Gvar.var_259 = Adap.getkey(Gvar.var_650); // 入力判定：[↓]
    if (is_Key_reset) {
        Adap.ResetKey(Gvar.var_647);
        Adap.ResetKey(Gvar.var_648);
        Adap.ResetKey(Gvar.var_649);
        Adap.ResetKey(Gvar.var_650);
    }
    Gvar.var_253 = Adap.getkey(Gvar.var_651); // 入力判定：? (Home)
    Gvar.var_256 = Adap.getkey(Gvar.var_652); // 入力判定：? (PageUp)
    Gvar.var_258 = Adap.getkey(Gvar.var_653); // 入力判定：? (End)
    Gvar.var_260 = Adap.getkey(Gvar.var_654); // 入力判定：? (PageDown)
    Gvar.key_Z_on = Adap.getkey(Gvar.var_655); // 入力判定：攻撃ボタン(Z)
    Gvar.key_X_on = Adap.getkey(Gvar.var_656); // 入力判定：ダッシュ・コマンドキャンセル(X)
    Gvar.key_A_on = Adap.getkey(Gvar.var_657); // 入力判定：コマンドウィンドウ表示(A)
    Gvar.key_S_on = Adap.getkey(Gvar.var_658); // 入力判定：射撃(S)
    Gvar.key_Shift_on = Adap.getkey(Gvar.var_659); // 入力判定：押しながらで斜めのみ移動(Shift)
    Gvar.key_C_on = Adap.getkey(Gvar.var_660); // 入力判定：その場で向き変更(C)

    Gvar.key_F_on = Adap.getkey(70); // Ver0.1401にて追加。入力判定：射撃disc「フー・ファイターズ」を所持している場合に発動(F)

    Gvar.var_261 = Adap.getkey(32); // 入力判定：縮小マップのみ表示 (Space)
    Gvar.var_661 = 15 + Gvar.var_662;
    
    Adap.ck_joystick(Gvar.var_663, Gvar.var_661);
    // var_255:入力判定[↑]
    if (Gvar.stat != 1 && Gvar.var_254 == 0 && Gvar.var_257 == 0 && Gvar.var_255 == 0 && Gvar.var_259 == 0 && Gvar.var_253 == 0 && Gvar.var_256 == 0 && Gvar.var_258 == 0 && Gvar.var_260 == 0 && Gvar.key_Z_on == 0 && Gvar.key_X_on == 0 && Gvar.key_A_on == 0 && Gvar.key_S_on == 0 && Gvar.key_Shift_on == 0 && Gvar.key_C_on == 0 && Gvar.var_619 == 0 && Gvar.var_620 == 0 && Gvar.var_621 == 0 && Gvar.var_261 == 0) {
        if (Gvar.var_663 == 1) {
            Gvar.var_254 = 1;
        }
        if (Gvar.var_663 == 4) {
            Gvar.var_257 = 1;
        }
        if (Gvar.var_663 == 2) {
            Gvar.var_255 = 1; // var_255:入力判定[↑]
        }
        if (Gvar.var_663 == 8) {
            Gvar.var_259 = 1; // var_259:入力判定[↓]
        }
        if (Gvar.var_663 == 3) {
            Gvar.var_253 = 1;
        }
        if (Gvar.var_663 == 6) {
            Gvar.var_256 = 1;
        }
        if (Gvar.var_663 == 9) {
            Gvar.var_258 = 1;
        }
        if (Gvar.var_663 == 12) {
            Gvar.var_260 = 1;
        }
        if (Gvar.var_663 == Gvar.var_664[1]) {
            Gvar.key_Z_on = 1;
        }
        if (Gvar.var_663 == Gvar.var_664[2]) {
            Gvar.key_X_on = 1;
        }
        if (Gvar.var_663 == Gvar.var_664[3]) {
            Gvar.key_A_on = 1; // キーA入力確認
        }
        if (Gvar.var_663 == Gvar.var_664[4]) {
            Gvar.key_C_on = 1; // キーC入力確認
        }
        if (Gvar.var_663 == Gvar.var_664[5]) {
            Gvar.key_Shift_on = 1; // キーShift入力確認
        }
        if (Gvar.var_663 == Gvar.var_664[6]) {
            Gvar.key_S_on = 1; // キーS入力確認
        }
        if (Gvar.var_663 == Gvar.var_664[1] + Gvar.var_664[2]) {
            Gvar.key_Z_on = 1;
            Gvar.key_X_on = 1;
        }
        if (Gvar.var_663 == Gvar.var_664[7]) {
            Gvar.var_261 = 1;
        }
        if (Gvar.var_663 == Gvar.var_664[8]) {
            Gvar.var_619 = 1;
        }
        if (Gvar.var_663 == Gvar.var_664[9]) {
            Gvar.var_620 = 1;
        }
        if (Gvar.var_663 == Gvar.var_664[10]) {
            Gvar.var_621 = 1;
        }
        if (Gvar.var_663 == Gvar.var_664[2] + 1) {
            Gvar.var_254 = 1;
            Gvar.key_X_on = 1;
        }
        if (Gvar.var_663 == Gvar.var_664[2] + 4) {
            Gvar.var_257 = 1;
            Gvar.key_X_on = 1;
        }
        if (Gvar.var_663 == Gvar.var_664[2] + 2) {
            Gvar.var_255 = 1; // var_255:入力判定[↑]
            Gvar.key_X_on = 1;
        }
        if (Gvar.var_663 == Gvar.var_664[2] + 8) {
            Gvar.var_259 = 1; // var_259:入力判定[↓]
            Gvar.key_X_on = 1;
        }
        if (Gvar.var_663 == Gvar.var_664[2] + 3) {
            Gvar.var_253 = 1;
            Gvar.key_X_on = 1;
        }
        if (Gvar.var_663 == Gvar.var_664[2] + 6) {
            Gvar.var_256 = 1;
            Gvar.key_X_on = 1;
        }
        if (Gvar.var_663 == Gvar.var_664[2] + 9) {
            Gvar.var_258 = 1;
            Gvar.key_X_on = 1;
        }
        if (Gvar.var_663 == Gvar.var_664[2] + 12) {
            Gvar.var_260 = 1;
            Gvar.key_X_on = 1;
        }
        if (Gvar.var_663 == Gvar.var_664[5] + 3) {
            Gvar.var_253 = 1;
            Gvar.key_Shift_on = 1; // キーShift入力確認
        }
        if (Gvar.var_663 == Gvar.var_664[5] + 6) {
            Gvar.var_256 = 1;
            Gvar.key_Shift_on = 1; // キーShift入力確認
        }
        if (Gvar.var_663 == Gvar.var_664[5] + 9) {
            Gvar.var_258 = 1;
            Gvar.key_Shift_on = 1; // キーShift入力確認
        }
        if (Gvar.var_663 == Gvar.var_664[5] + 12) {
            Gvar.var_260 = 1;
            Gvar.key_Shift_on = 1; // キーShift入力確認
        }
        if (Gvar.var_663 == Gvar.var_664[5] + 3 + Gvar.var_664[2]) {
            Gvar.var_253 = 1;
            Gvar.key_Shift_on = 1; // キーShift入力確認
            Gvar.key_X_on = 1;
        }
        if (Gvar.var_663 == Gvar.var_664[5] + 6 + Gvar.var_664[2]) {
            Gvar.var_256 = 1;
            Gvar.key_Shift_on = 1; // キーShift入力確認
            Gvar.key_X_on = 1;
        }
        if (Gvar.var_663 == Gvar.var_664[5] + 9 + Gvar.var_664[2]) {
            Gvar.var_258 = 1;
            Gvar.key_Shift_on = 1; // キーShift入力確認
            Gvar.key_X_on = 1;
        }
        if (Gvar.var_663 == Gvar.var_664[5] + 12 + Gvar.var_664[2]) {
            Gvar.var_260 = 1;
            Gvar.key_Shift_on = 1; // キーShift入力確認
            Gvar.key_X_on = 1;
        }
    }
    Gvar.var_663 = 0;
    return;
}

export {func080}
