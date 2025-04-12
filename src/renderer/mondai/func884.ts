import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'


async function func884(this: any) {
        Adap.dbgprt(884);
        Gvar.var_3497 = Gvar.var_3487 * 10 - 10;
        Gvar.var_3498 = Gvar.var_3491 - Gvar.var_3497;
        if (Gvar.var_3498 >= 10) {
            Gvar.var_3498 = 10;
        }
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_3491 > 0) {
            if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
                if (Gvar.var_3489 >= 1 && Gvar.var_3486 == 0) {
                    Gvar.var_3482 = Gvar.var_3483;
                    Gvar.var_3488 = 1;
                    Gvar.var_3486 = Gvar.var_3497 + Gvar.var_3488;
                    Adap.DSPLAY(100); // アイテム選択時の効果音
                    await Func.func885();
                    await Adap.wait(10);
                    await Func.func884();
                    return;
                }
                if (Gvar.var_3488 < 10 && Gvar.var_3488 < Gvar.var_3498) {
                    Gvar.var_3482 = Gvar.var_3482 + 20;
                    Gvar.var_3488++;
                    Gvar.var_3486 = Gvar.var_3497 + Gvar.var_3488;
                    Adap.DSPLAY(100); // アイテム選択時の効果音
                    await Func.func885();
                    await Adap.wait(10);
                    await Func.func884();
                    return;
                }
                if (Gvar.var_3488 == 10 || Gvar.var_3488 >= Gvar.var_3498) {
                    Gvar.var_3482 = Gvar.var_3483;
                    Gvar.var_3488 = 1;
                    Gvar.var_3486 = Gvar.var_3497 + Gvar.var_3488;

                    Adap.DSPLAY(100); // アイテム選択時の効果音
                    await Func.func885();
                    await Adap.wait(10);
                    await Func.func884();
                    return;
                }
            }
            if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
                if (Gvar.var_3489 >= 1 && Gvar.var_3488 == 1) {
                    Gvar.var_3486 = 0;

                    Adap.DSPLAY(100); // アイテム選択時の効果音
                    await Func.func885();
                    await Adap.wait(10);
                    await Func.func884();
                    return;
                }
                if (Gvar.var_3488 > 1) {
                    Gvar.var_3482 = Gvar.var_3482 - 20;
                    Gvar.var_3488--;
                    Gvar.var_3486 = Gvar.var_3497 + Gvar.var_3488;

                    Adap.DSPLAY(100); // アイテム選択時の効果音
                    await Func.func885();
                    await Adap.wait(10);
                    await Func.func884();
                    return;
                }
                if (Gvar.var_3488 <= 1) {
                    Gvar.var_3482 = Gvar.var_3483 + 20 * Gvar.var_3498 - 20;
                    Gvar.var_3488 = Gvar.var_3498;
                    Gvar.var_3486 = Gvar.var_3497 + Gvar.var_3488;

                    Adap.DSPLAY(100); // アイテム選択時の効果音
                    await Func.func885();
                    await Adap.wait(10);
                    await Func.func884();
                    return;
                }
            }
            if (Gvar.var_257 == 1 && Gvar.var_3486 != 0) {
                if (Gvar.var_3487 < Gvar.var_3492) {
                    Gvar.var_3487++;
                    Gvar.var_3482 = Gvar.var_3483;
                    Gvar.var_3488 = 1;
                    Gvar.var_3497 = Gvar.var_3487 * 10 - 10;
                    Gvar.var_3486 = Gvar.var_3497 + Gvar.var_3488;

                    Adap.DSPLAY(100); // アイテム選択時の効果音
                    await Func.func885();
                    await Adap.wait(10);
                    await Func.func884();
                    return;
                }
                if (Gvar.var_3487 >= Gvar.var_3492) {
                    Gvar.var_3487 = 1;
                    Gvar.var_3482 = Gvar.var_3483;
                    Gvar.var_3488 = 1;
                    Gvar.var_3497 = Gvar.var_3487 * 10 - 10;
                    Gvar.var_3486 = Gvar.var_3497 + Gvar.var_3488;

                    Adap.DSPLAY(100); // アイテム選択時の効果音
                    await Func.func885();
                    await Adap.wait(10);
                    await Func.func884();
                    return;
                }
            }
            if (Gvar.var_254 == 1 && Gvar.var_3486 != 0) {
                if (Gvar.var_3487 > 1) {
                    Gvar.var_3487--;
                    Gvar.var_3482 = Gvar.var_3483;
                    Gvar.var_3488 = 1;
                    Gvar.var_3497 = Gvar.var_3487 * 10 - 10;
                    Gvar.var_3486 = Gvar.var_3497 + Gvar.var_3488;

                    Adap.DSPLAY(100); // アイテム選択時の効果音
                    await Func.func885();
                    await Adap.wait(10);
                    await Func.func884();
                    return;
                }
                if (Gvar.var_3487 <= 1) {
                    Gvar.var_3487 = Gvar.var_3492;
                    Gvar.var_3482 = Gvar.var_3483;
                    Gvar.var_3488 = 1;
                    Gvar.var_3497 = Gvar.var_3487 * 10 - 10;
                    Gvar.var_3486 = Gvar.var_3497 + Gvar.var_3488;

                    Adap.DSPLAY(100); // アイテム選択時の効果音
                    await Func.func885();
                    await Adap.wait(10);
                    await Func.func884();
                    return;
                }
            }
        }
        if (Gvar.key_Z_on == 1) {

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            if (Gvar.var_3486 == 0) {
                await Func.func178(); // 処理確認タイマー(3m秒)
                await Func.func233(); // ダンジョンへ入った際の全ステータス初期化処理
                Adap.onexit(0);
                await Func.func841();
                return;
            }
            if (Gvar.var_3491 > 0) {
                Gvar.var_3499 = Gvar.var_3486 - 1;
                Gvar.var_1643 = Adap.noteget(Gvar.var_3499);
                Gvar.var_3336 = Gvar.var_1643;
                Gvar.var_3475 = 1;
                Gvar.var_375 = 1;
                await Func.func876();
                return;
            }
        }
        if (Gvar.key_X_on == 1) {
            Gvar.var_627 = 0;
            await Func.func178(); // 処理確認タイマー(3m秒)

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            Adap.chdir(Gvar.var_30);
            await Func.func142(); // タイトル画面キー操作処理
            return;
        }
        await Func.func885();
        await Adap.wait(5);
        await Func.func884();
        return;
}

export {func884}
