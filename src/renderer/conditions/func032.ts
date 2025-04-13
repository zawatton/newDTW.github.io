import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func032(this: any) {
        Adap.dbgprt(32);
        await Func.func080(); // 各キー入力確認
        // Ver0.1401にて「Gvar.key_F_on == 1」を追加
        if (Gvar.key_Z_on == 1 || Gvar.key_X_on == 1 || Gvar.key_A_on == 1 || Gvar.key_S_on == 1 || Gvar.key_F_on == 1) {
            Gvar.var_218 = 0;
            await Func.func033(); // スティッキーフィンガーズの発動効果が切れた時の表示
            return;
        }
        if (Gvar.var_218 == 51) {
            await Func.setMessage("意識が…  ヤバクなって来た…", "", 7, true, false, false);
            await Func.AutoDraw(5);
            await Func.func051(); // キー入力待ち処理
        }
        if (Gvar.var_218 >= 51) {
            Gvar.var_211 = Gvar.var_211 - 1;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 283;
                return;
            }
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func080(); // 各キー入力確認
                // Ver0.1401にて「Gvar.key_F_on == 1」を追加
                if (Gvar.key_Z_on == 1 || Gvar.key_X_on == 1 || Gvar.key_A_on == 1 || Gvar.key_S_on == 1 || Gvar.key_F_on == 1) {
                    Gvar.var_218 = 0;
                    await Func.func033(); // スティッキーフィンガーズの発動効果が切れた時の表示
                    break;
                }
            }
        }
        if (Gvar.var_218 >= 51 && Gvar.shageki_disc_id == 403 && Gvar.var_211 == 2) {
            await Func.setMessage("ﾋﾟｽﾄﾙｽﾞ「早く【ジッパー】デ",
                                    "        体ヲ元ニ戻スンダ――――ッ！」", 7, true, false, false);
            await Func.AutoDraw(5);
            await Func.func051(); // キー入力待ち処理
        }
        return;
}

export {func032}
