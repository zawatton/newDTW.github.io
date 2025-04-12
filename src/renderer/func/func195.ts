import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func195(this: any) {
        Adap.dbgprt(195);
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051();
            await Adap.bsave("00.dat", Gvar.data = Gvar.animationDelay, null, 0);
            Gvar.var_900 = 0;
            await Func.func193();
            return;
        }
        if (Gvar.key_X_on == 1) {
            await Func.func051();
            Gvar.var_900 = 0;
            await Func.func193();
            return;
        }
        if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
            if (Gvar.var_906 == 0) {
                Gvar.var_906 = 0;
                Gvar.animationDelay = 30;
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
            }
            if (Gvar.var_906 == 1) {
                Gvar.var_906 = 0;
                Gvar.animationDelay = 30;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
            }
            if (Gvar.var_906 == 2) {
                Gvar.var_906 = 1;
                Gvar.animationDelay = 40;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
            }
            if (Gvar.var_906 == 3) {
                Gvar.var_906 = 2;
                Gvar.animationDelay = 50;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
            }
            if (Gvar.var_906 == 4) {
                Gvar.var_906 = 3;
                Gvar.animationDelay = 60;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
            if (Gvar.var_906 == 4) {
                Gvar.var_906 = 4;
                Gvar.animationDelay = 70;
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
            }
            if (Gvar.var_906 == 3) {
                Gvar.var_906 = 4;
                Gvar.animationDelay = 70;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
            }
            if (Gvar.var_906 == 2) {
                Gvar.var_906 = 3;
                Gvar.animationDelay = 60;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
            }
            if (Gvar.var_906 == 1) {
                Gvar.var_906 = 2;
                Gvar.animationDelay = 50;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
            }
            if (Gvar.var_906 == 0) {
                Gvar.var_906 = 1;
                Gvar.animationDelay = 40;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        await Func.func195();
        return;
}

export {func195}
