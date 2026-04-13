import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'


// 旧 func798
async function func798(this: any) {
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_X_on == 1) {
            Gvar.var_1205 = 0;
            await Func.func0854(); // 口座へ入金、口座から出金した時の表示
        }
        if (Gvar.var_254 == 1 && Gvar.var_3179 != 6) {

            Adap.DSPLAY(100); // アイテム選択時の効果音
            Gvar.var_3179 = Gvar.var_3179 + 1;
            Gvar.var_3180 = Gvar.var_3180 - 15;
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.var_257 == 1 && Gvar.var_3179 != 1) {

            Adap.DSPLAY(100); // アイテム選択時の効果音
            Gvar.var_3179 = Gvar.var_3179 - 1;
            Gvar.var_3180 = Gvar.var_3180 + 15;
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.var_255 == 1) { // var_255:入力判定[↑]

            Adap.DSPLAY(100); // アイテム選択時の効果音
            if (Gvar.var_3179 == 1) {
                Gvar.var_3170 = Gvar.var_3170 + 1;
                if (Gvar.var_3170 == 10) {
                    Gvar.var_3170 = 0;
                }
            }
            if (Gvar.var_3179 == 2) {
                Gvar.var_3171 = Gvar.var_3171 + 1;
                if (Gvar.var_3171 == 10) {
                    Gvar.var_3171 = 0;
                }
            }
            if (Gvar.var_3179 == 3) {
                Gvar.var_3172 = Gvar.var_3172 + 1;
                if (Gvar.var_3172 == 10) {
                    Gvar.var_3172 = 0;
                }
            }
            if (Gvar.var_3179 == 4) {
                Gvar.var_3173 = Gvar.var_3173 + 1;
                if (Gvar.var_3173 == 10) {
                    Gvar.var_3173 = 0;
                }
            }
            if (Gvar.var_3179 == 5) {
                Gvar.var_3174 = Gvar.var_3174 + 1;
                if (Gvar.var_3174 == 10) {
                    Gvar.var_3174 = 0;
                }
            }
            if (Gvar.var_3179 == 6) {
                Gvar.var_3175 = Gvar.var_3175 + 1;
                if (Gvar.var_3175 == 10) {
                    Gvar.var_3175 = 0;
                }
            }
            Gvar.var_3176 = Gvar.var_3175 * 100000 + Gvar.var_3174 * 10000 + Gvar.var_3173 * 1000 + Gvar.var_3172 * 100 + Gvar.var_3171 * 10 + Gvar.var_3170;
            if (Gvar.var_1205 == 1 && Gvar.var_3176 > Gvar.wallet) {
                Gvar.var_3181 = Math.floor(Gvar.wallet / 100000);
                Gvar.var_3182 = Math.floor((Gvar.wallet - Gvar.var_3181 * 100000) / 10000);
                Gvar.var_3183 = Math.floor((Gvar.wallet - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000) / 1000);
                Gvar.var_3184 = Math.floor((Gvar.wallet - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000) / 100);
                Gvar.var_3185 = Math.floor((Gvar.wallet - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100) / 10);
                Gvar.var_598 = Gvar.wallet - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100 - Gvar.var_3185 * 10;
                Gvar.var_3170 = Gvar.var_598;
                Gvar.var_3171 = Gvar.var_3185;
                Gvar.var_3172 = Gvar.var_3184;
                Gvar.var_3173 = Gvar.var_3183;
                Gvar.var_3174 = Gvar.var_3182;
                Gvar.var_3175 = Gvar.var_3181;
                Gvar.var_3176 = Gvar.wallet;
            }
            Gvar.var_3177 = Gvar.var_1032 + Gvar.var_3176;
            if (Gvar.var_1205 == 1 && Gvar.var_3177 >= 999999) {
                Gvar.var_3178 = 999999 - Gvar.var_1032;
                Gvar.var_3181 = Math.floor(Gvar.var_3178 / 100000);
                Gvar.var_3182 = Math.floor((Gvar.var_3178 - Gvar.var_3181 * 100000) / 10000);
                Gvar.var_3183 = Math.floor((Gvar.var_3178 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000) / 1000);
                Gvar.var_3184 = Math.floor((Gvar.var_3178 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000) / 100);
                Gvar.var_3185 = Math.floor((Gvar.var_3178 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100) / 10);
                Gvar.var_598 = Gvar.var_3178 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100 - Gvar.var_3185 * 10;
                Gvar.var_3170 = Gvar.var_598;
                Gvar.var_3171 = Gvar.var_3185;
                Gvar.var_3172 = Gvar.var_3184;
                Gvar.var_3173 = Gvar.var_3183;
                Gvar.var_3174 = Gvar.var_3182;
                Gvar.var_3175 = Gvar.var_3181;
                Gvar.var_3176 = Gvar.var_3178;
            }
            if (Gvar.var_1205 == 2 && Gvar.var_3176 > Gvar.var_1032) {
                Gvar.var_3181 = Math.floor(Gvar.var_1032 / 100000);
                Gvar.var_3182 = Math.floor((Gvar.var_1032 - Gvar.var_3181 * 100000) / 10000);
                Gvar.var_3183 = Math.floor((Gvar.var_1032 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000) / 1000);
                Gvar.var_3184 = Math.floor((Gvar.var_1032 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000) / 100);
                Gvar.var_3185 = Math.floor((Gvar.var_1032 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100) / 10);
                Gvar.var_598 = Gvar.var_1032 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100 - Gvar.var_3185 * 10;
                Gvar.var_3170 = Gvar.var_598;
                Gvar.var_3171 = Gvar.var_3185;
                Gvar.var_3172 = Gvar.var_3184;
                Gvar.var_3173 = Gvar.var_3183;
                Gvar.var_3174 = Gvar.var_3182;
                Gvar.var_3175 = Gvar.var_3181;
                Gvar.var_3176 = Gvar.var_1032;
            }
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]

            Adap.DSPLAY(100); // アイテム選択時の効果音
            if (Gvar.var_3179 == 1) {
                Gvar.var_3170 = Gvar.var_3170 - 1;
                if (Gvar.var_3170 < 0) {
                    Gvar.var_3170 = 9;
                }
            }
            if (Gvar.var_3179 == 2) {
                Gvar.var_3171 = Gvar.var_3171 - 1;
                if (Gvar.var_3171 < 0) {
                    Gvar.var_3171 = 9;
                }
            }
            if (Gvar.var_3179 == 3) {
                Gvar.var_3172 = Gvar.var_3172 - 1;
                if (Gvar.var_3172 < 0) {
                    Gvar.var_3172 = 9;
                }
            }
            if (Gvar.var_3179 == 4) {
                Gvar.var_3173 = Gvar.var_3173 - 1;
                if (Gvar.var_3173 < 0) {
                    Gvar.var_3173 = 9;
                }
            }
            if (Gvar.var_3179 == 5) {
                Gvar.var_3174 = Gvar.var_3174 - 1;
                if (Gvar.var_3174 < 0) {
                    Gvar.var_3174 = 9;
                }
            }
            if (Gvar.var_3179 == 6) {
                Gvar.var_3175 = Gvar.var_3175 - 1;
                if (Gvar.var_3175 < 0) {
                    Gvar.var_3175 = 9;
                }
            }
            Gvar.var_3176 = Gvar.var_3175 * 100000 + Gvar.var_3174 * 10000 + Gvar.var_3173 * 1000 + Gvar.var_3172 * 100 + Gvar.var_3171 * 10 + Gvar.var_3170;
            if (Gvar.var_1205 == 1 && Gvar.var_3176 > Gvar.wallet) {
                Gvar.var_3181 = Math.floor(Gvar.wallet / 100000);
                Gvar.var_3182 = Math.floor((Gvar.wallet - Gvar.var_3181 * 100000) / 10000);
                Gvar.var_3183 = Math.floor((Gvar.wallet - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000) / 1000);
                Gvar.var_3184 = Math.floor((Gvar.wallet - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000) / 100);
                Gvar.var_3185 = Math.floor((Gvar.wallet - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100) / 10);
                Gvar.var_598 = Gvar.wallet - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100 - Gvar.var_3185 * 10;
                Gvar.var_3170 = Gvar.var_598;
                Gvar.var_3171 = Gvar.var_3185;
                Gvar.var_3172 = Gvar.var_3184;
                Gvar.var_3173 = Gvar.var_3183;
                Gvar.var_3174 = Gvar.var_3182;
                Gvar.var_3175 = Gvar.var_3181;
                Gvar.var_3176 = Gvar.wallet;
            }
            Gvar.var_3177 = Gvar.var_1032 + Gvar.var_3176;
            if (Gvar.var_1205 == 1 && Gvar.var_3177 >= 999999) {
                Gvar.var_3178 = 999999 - Gvar.var_1032;
                Gvar.var_3181 = Math.floor(Gvar.var_3178 / 100000);
                Gvar.var_3182 = Math.floor((Gvar.var_3178 - Gvar.var_3181 * 100000) / 10000);
                Gvar.var_3183 = Math.floor((Gvar.var_3178 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000) / 1000);
                Gvar.var_3184 = Math.floor((Gvar.var_3178 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000) / 100);
                Gvar.var_3185 = Math.floor((Gvar.var_3178 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100) / 10);
                Gvar.var_598 = Gvar.var_3178 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100 - Gvar.var_3185 * 10;
                Gvar.var_3170 = Gvar.var_598;
                Gvar.var_3171 = Gvar.var_3185;
                Gvar.var_3172 = Gvar.var_3184;
                Gvar.var_3173 = Gvar.var_3183;
                Gvar.var_3174 = Gvar.var_3182;
                Gvar.var_3175 = Gvar.var_3181;
                Gvar.var_3176 = Gvar.var_3178;
            }
            if (Gvar.var_1205 == 2 && Gvar.var_3176 > Gvar.var_1032) {
                Gvar.var_3181 = Math.floor(Gvar.var_1032 / 100000);
                Gvar.var_3182 = Math.floor((Gvar.var_1032 - Gvar.var_3181 * 100000) / 10000);
                Gvar.var_3183 = Math.floor((Gvar.var_1032 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000) / 1000);
                Gvar.var_3184 = Math.floor((Gvar.var_1032 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000) / 100);
                Gvar.var_3185 = Math.floor((Gvar.var_1032 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100) / 10);
                Gvar.var_598 = Gvar.var_1032 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100 - Gvar.var_3185 * 10;
                Gvar.var_3170 = Gvar.var_598;
                Gvar.var_3171 = Gvar.var_3185;
                Gvar.var_3172 = Gvar.var_3184;
                Gvar.var_3173 = Gvar.var_3183;
                Gvar.var_3174 = Gvar.var_3182;
                Gvar.var_3175 = Gvar.var_3181;
                Gvar.var_3176 = Gvar.var_1032;
            }
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            if (Gvar.var_1205 == 1) {
                Gvar.var_1032 = Gvar.var_1032 + Gvar.var_3176;
                Gvar.wallet = Gvar.wallet - Gvar.var_3176;
                await Func.func0854(); // 口座へ入金、口座から出金した時の表示
                return;
            }
            if (Gvar.var_1205 == 2) {
                Gvar.var_1032 = Gvar.var_1032 - Gvar.var_3176;
                Gvar.wallet = Gvar.wallet + Gvar.var_3176;
                if (Gvar.wallet > 999999) {
                    Gvar.wallet = 999999;
                }
                await Func.func0854(); // 口座へ入金、口座から出金した時の表示
                return;
            }
        }
        await Func.func798();
        return;
}

export {func798}
