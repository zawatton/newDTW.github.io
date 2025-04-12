import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func209(this: any) {
        Adap.dbgprt(209);
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
            Gvar.Y_axis_item_position = Gvar.Y_axis_item_position + 20;
            Gvar.var_911 = Gvar.var_911 + 1;
            if (Gvar.var_911 == 9) {
                Gvar.Y_axis_item_position = 55;
                Gvar.var_911 = 1;
            }
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
            Gvar.Y_axis_item_position = Gvar.Y_axis_item_position - 20;
            Gvar.var_911 = Gvar.var_911 - 1;
            if (Gvar.var_911 == 0) {
                Gvar.Y_axis_item_position = 195;
                Gvar.var_911 = 8;
            }
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            if (Gvar.var_911 == 7) {
                await Func.func214();
                await Func.func337(); // メッセージ表示処理(自動)
            }
            if (Gvar.var_911 == 8) {
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                Gvar.var_691[1] = Gvar.var_655;
                Gvar.var_691[2] = Gvar.var_656;
                Gvar.var_691[3] = Gvar.var_657;
                Gvar.var_691[4] = Gvar.var_658;
                Gvar.var_691[5] = Gvar.var_659;
                Gvar.var_691[6] = Gvar.var_660;
                await Adap.bsave("00.dat", Gvar.data = Gvar.var_691, null, 1000);
                await Func.func051(); // キー入力待ち処理
                Gvar.var_902 = 0;
                await Func.func193(); // メニュー画面 "システム" 設定処理
                return;
            }
        }
        if (Gvar.var_911 >= 1 && Gvar.var_911 <= 6) {
            Gvar.var_447 = 48; // キー0
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                Gvar.conf_keyon = Adap.getkey(Gvar.var_447); // キー0 入力確認
                if (Gvar.conf_keyon == 1) {
                    Gvar.var_912 = Gvar.var_447;
                    await Func.func213();
                    await Func.func051(); // キー入力待ち処理
                    await Func.func212();
                    await Func.func337(); // メッセージ表示処理(自動)
                    break;
                }
                Gvar.var_447++;
            }
            Gvar.var_447 = 65; // キーA
            for (let cnt2 = 0; cnt2 < 26; ++cnt2) {
                Gvar.conf_keyon = Adap.getkey(Gvar.var_447); // キーA 入力確認
                if (Gvar.conf_keyon == 1) {
                    Gvar.var_912 = Gvar.var_447;
                    await Func.func213();
                    await Func.func051(); // キー入力待ち処理
                    await Func.func212();
                    await Func.func337(); // メッセージ表示処理(自動)
                    break;
                }
                Gvar.var_447++;
            }
            Gvar.conf_keyon = Adap.getkey(16); // キーShift 入力確認
            if (Gvar.conf_keyon == 1) {
                Gvar.var_912 = 16;
                await Func.func213();
                await Func.func051(); // キー入力待ち処理
                await Func.func212();
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func209();
                return;
            }
            Gvar.conf_keyon = Adap.getkey(13); // キーEnter 入力確認
            if (Gvar.conf_keyon == 1) {
                Gvar.var_912 = 13;
                await Func.func213();
                await Func.func051(); // キー入力待ち処理
                await Func.func212();
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func209();
                return;
            }
            Gvar.conf_keyon = Adap.getkey(17); // キーCtrl 入力確認
            if (Gvar.conf_keyon == 1) {
                Gvar.var_912 = 17;
                await Func.func213();
                await Func.func051(); // キー入力待ち処理
                await Func.func212();
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func209();
                return;
            }
        }
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func209();
        return;
}

export {func209}
