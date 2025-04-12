import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func464(this: any) {
        Adap.dbgprt(464);
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_X_on == 1) {
            Gvar.var_221 = 1;
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051(); // キー入力待ち処理
            await Func.func462(); // アイテムidごとに区分分け関数
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_2043 != 3) { // var_259:入力判定[↓]
            Gvar.var_246 = Gvar.var_246 + 17;
            if (Gvar.var_2032 == 0) {
                Gvar.var_2043 = Gvar.var_2043 + 1;
            }
            if (Gvar.var_2032 != 0) {
                Gvar.var_2043 = 3;
            }
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func464();
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_2043 == 3) { // var_259:入力判定[↓]
            Gvar.var_246 = 44;
            Gvar.var_2043 = 1;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func464();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_2043 != 1) { // var_255:入力判定[↑]
            Gvar.var_246 = Gvar.var_246 - 17;
            if (Gvar.var_2032 == 0) {
                Gvar.var_2043 = Gvar.var_2043 - 1;
            }
            if (Gvar.var_2032 != 0) {
                Gvar.var_2043 = 1;
            }
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func464();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_2043 == 1) { // var_255:入力判定[↑]
            if (Gvar.var_2032 == 0) {
                Gvar.var_2043 = 3;
                Gvar.var_246 = 78;
            }
            if (Gvar.var_2032 != 0) {
                Gvar.var_2043 = 3;
                Gvar.var_246 = 61;
            }
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func464();
            return;
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            if (Gvar.var_231 == 1) {
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                Gvar.var_231 = 0;
                // 所持アイテム数が20個以上になる場合
                if (Gvar.var_224 >= 20) {
                    await Func.func477(); // アイテムを "拾う" を選択した時に所持アイテムが20個以上になる際の処理
                    return;
                }
                await Func.func400(); // アイテムを拾う際の動作処理
                Gvar.var_225 = Gvar.var_224;
            }
            Gvar.var_221 = 0;
            Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            if (Gvar.var_2032 == 0) {
                if (Gvar.var_2043 == 1) {
                    Gvar.disc_class = 1;
                }
                if (Gvar.var_2043 == 2) {
                    Gvar.disc_class = 2;
                }
                if (Gvar.var_2043 == 3) {
                    Gvar.disc_class = 3;
                }
            }
            if (Gvar.var_2032 == 1) {
                if (Gvar.var_2043 == 1) {
                    Gvar.disc_class = 2;
                }
                if (Gvar.var_2043 == 3) {
                    Gvar.disc_class = 3;
                }
            }
            if (Gvar.var_2032 == 2) {
                if (Gvar.var_2043 == 1) {
                    Gvar.disc_class = 1;
                }
                if (Gvar.var_2043 == 3) {
                    Gvar.disc_class = 3;
                }
            }
            if (Gvar.var_2032 == 3) {
                if (Gvar.var_2043 == 1) {
                    Gvar.disc_class = 1;
                }
                if (Gvar.var_2043 == 3) {
                    Gvar.disc_class = 2;
                }
            }
            await Func.func420(); // 各アイテムを使った際、item_listのIDに応じて効果を割り振り
            return;
        }
        await Func.func464();
        return;
}

export {func464}
