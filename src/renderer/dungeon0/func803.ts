import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func803(this: any) {
        Adap.dbgprt(803);
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_X_on == 1) {
            Gvar.var_1206 = 0;
            Gvar.var_783 = 0;

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func801();
            await Func.func051(); // キー入力待ち処理
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051(); // キー入力待ち処理
            await Func.func805();
            return;
        }
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
            if (Gvar.var_225 != Gvar.var_1013) {
                Gvar.Y_axis_item_position = Gvar.Y_axis_item_position + 22;
                Gvar.var_225 = Gvar.var_225 + 1;
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func803();
                return;
            }
            if (Gvar.var_225 == Gvar.var_1013) {
                Gvar.Y_axis_item_position = 45;
                Gvar.var_225 = 1;
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // ここも間違っている?
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func803();
                return;
            }
        }
        if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
            if (Gvar.var_225 != 1) {
                Gvar.Y_axis_item_position = Gvar.Y_axis_item_position - 22;
                Gvar.var_225 = Gvar.var_225 - 1;
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func803();
                return;
            }
            if (Gvar.var_225 == 1) {
                Gvar.Y_axis_item_position = 45 + (Gvar.var_1013 - 1) * 22;
                Gvar.var_225 = Gvar.var_1013;
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func803();
                return;
            }
        }
        await Func.func803();
        return;
}

export {func803}
