import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func206(this: any) {
        Adap.dbgprt(206);
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051(); // キー入力待ち処理
            if (Gvar.var_910 == 0) {
                Gvar.var_10 = 0;
                Adap.width(340, 340); // Ver0.1401にて修正。Adap.width(340, 340); → Adap.width(340, 340); 
            }
            if (Gvar.var_910 == 1) {
                Gvar.var_10 = 1;
                Adap.width(340, 340);
            }

            await Adap.bsave("00.dat", Gvar.data = Gvar.var_10, null, 20);

            await Adap.bsave("00.dat", Gvar.data = Gvar.var_11, null, 80);
            Gvar.var_904 = 0;
            await Func.func193(); // メニュー画面 "システム" 設定処理
            return;
        }
        if (Gvar.key_X_on == 1) {
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051(); // キー入力待ち処理
            Gvar.var_904 = 0;
            await Func.func193(); // メニュー画面 "システム" 設定処理
            return;
        }
        if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
            Adap.DSPLAY(100); // アイテム選択時の効果音
            if (Gvar.var_910 == 0) {
                Gvar.var_910 = 1;
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func206();
                return;
            }
            if (Gvar.var_910 == 1) {
                Gvar.var_910 = 0;
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func206();
                return;
            }
        }
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
            Adap.DSPLAY(100); // アイテム選択時の効果音
            if (Gvar.var_910 == 1) {
                Gvar.var_910 = 0;
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func206();
                return;
            }
            if (Gvar.var_910 == 0) {
                Gvar.var_910 = 1;
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func206();
                return;
            }
        }
        await Func.func206();
        return;
}

export {func206}
