import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import {item401} from '../stand/index'

async function func012(this: any) {
        Adap.dbgprt(12);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_272 = 1;
        Gvar.var_273 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_254 == 1) {
            Gvar.var_199 = 4;
            Gvar.var_273 = 1;
        }
        if (Gvar.var_257 == 1) {
            Gvar.var_199 = 6;
            Gvar.var_273 = 1;
        }
        if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
            Gvar.var_199 = 8;
            Gvar.var_273 = 1;
        }
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
            Gvar.var_199 = 2;
            Gvar.var_273 = 1;
        }
        if (Gvar.var_253 == 1) {
            Gvar.var_199 = 7;
            Gvar.var_273 = 1;
        }
        if (Gvar.var_254 == 1 && Gvar.var_255 == 1) { // var_255:入力判定[↑]
            Gvar.var_199 = 7;
            Gvar.var_273 = 1;
        }
        if (Gvar.var_256 == 1) {
            Gvar.var_199 = 9;
            Gvar.var_273 = 1;
        }
        if (Gvar.var_257 == 1 && Gvar.var_255 == 1) { // var_255:入力判定[↑]
            Gvar.var_199 = 9;
            Gvar.var_273 = 1;
        }
        if (Gvar.var_258 == 1) {
            Gvar.var_199 = 1;
            Gvar.var_273 = 1;
        }
        if (Gvar.var_254 == 1 && Gvar.var_259 == 1) { // var_259:入力判定[↓]
            Gvar.var_199 = 1;
            Gvar.var_273 = 1;
        }
        if (Gvar.var_260 == 1) {
            Gvar.var_199 = 3;
            Gvar.var_273 = 1;
        }
        if (Gvar.var_257 == 1 && Gvar.var_259 == 1) { // var_259:入力判定[↓]
            Gvar.var_199 = 3;
            Gvar.var_273 = 1;
        }
        if (Gvar.var_273 == 1) {
            Gvar.var_268 = 0;
            if (Gvar.var_199 == 1 && Gvar.var_82[Gvar.var_264][Gvar.var_267] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_264][Gvar.var_267];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var29 == 0 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_199 == 2 && Gvar.var_82[Gvar.var_66][Gvar.var_267] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_66][Gvar.var_267];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var29 == 0 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_199 == 3 && Gvar.var_82[Gvar.var_265][Gvar.var_267] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_265][Gvar.var_267];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var29 == 0 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_199 == 4 && Gvar.var_82[Gvar.var_264][Gvar.var_67] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_264][Gvar.var_67];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var29 == 0 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_199 == 6 && Gvar.var_82[Gvar.var_265][Gvar.var_67] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_265][Gvar.var_67];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var29 == 0 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_199 == 7 && Gvar.var_82[Gvar.var_264][Gvar.var_266] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_264][Gvar.var_266];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var29 == 0 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_199 == 8 && Gvar.var_82[Gvar.var_66][Gvar.var_266] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_66][Gvar.var_266];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var29 == 0 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_199 == 9 && Gvar.var_82[Gvar.var_265][Gvar.var_266] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_265][Gvar.var_266];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var29 == 0 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.key_C_on == 1) { // キーC入力確認
            await Func.func051(); // キー入力待ち処理
            Gvar.var_263[0] = 0;
            Gvar.var_268 = 0;
            await Func.func011();
            return;
        }
        if (Gvar.key_X_on == 1) {
            await Func.func051(); // キー入力待ち処理
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_272 = 0;
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        if (Gvar.key_Z_on == 1) {
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_272 = 0;
            Gvar.var_243 = 1;
            await Func.func635(); // ディアボロの攻撃動作処理
            return;
        }
        if (Gvar.key_S_on == 1) { // キーS入力確認
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_272 = 0;
            Gvar.var_225 = Gvar.var_250;
            Gvar.var_251 = 1;
            await Func.func647(); // 射撃攻撃動作処理
            return;
        }
        if (Gvar.key_A_on == 1) { // キーA入力確認
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_272 = 0;
            Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            Gvar.var_195 = 1;
            Gvar.var_196 = 1; // Mフラグ:メニュー画面 Func.func054
            Gvar.var_245 = 19;
            Gvar.var_246 = 45;
            Gvar.var_247 = 1;
            Gvar.var_248 = 1;
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051(); // キー入力待ち処理
            await Func.func053(); // メニュー画面呼び出し
            return;
        }
        // Ver0.1401にて追加。入力判定：射撃disc「フー・ファイターズ」を所持している場合に発動(F)
        if (Gvar.key_F_on == 1) {
            await Func.func051(); // キー入力待ち処理
            if (Gvar.var_224 >= 1) {
                Gvar.var_225 = 0; // Ver0.1402にて追加。必ず0からスタートすることで漏れが無くなる。
                for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                    // Gvar.var_225 = Adap.rnd(Gvar.var_224); // Gvar.var_225 = 0; の方が良くない？
                    // Gvar.var_225 = Gvar.var_225 + 1;
                    //var_225 = Gvar.var_475;
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    Gvar.var_231 = 0;
                    if (Gvar.var_233[Gvar.var_225].Var0 == 401) {
                        Gvar.activated_disc_id = Gvar.var_233[Gvar.var_225].Var0
                        await item401(); // No = 401 フー・ファイターズの発動処理
                        break;
                    }
                    Gvar.var_225 = Gvar.var_225 + 1; // Ver0.1402にて追加。ループの最後に1プラスする。
                }
                await Func.setMessage("ﾌｰ･ﾌｧｲﾀｰｽﾞを持っていないぞ", "", 7, false, false, false);
                Gvar.var_234 = 0;
                Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                Gvar.var_217 = 1;
                await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
                return;
            }
            if (Gvar.var_224 == 0) {
                await Func.setMessage("ﾌｰ･ﾌｧｲﾀｰｽﾞを持っていないぞ", "", 7, false, false, false);
                Gvar.var_234 = 0;
                Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                Gvar.var_217 = 1;
                await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
                return;
            }
            return;
        }
        await Func.func012();
        return;
}

export {func012}
