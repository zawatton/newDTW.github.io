import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func595(this: any) {
        Adap.dbgprt(595);
        Gvar.var_2841 = 0;
        Gvar.var_2352 = Adap.rnd(8);
        Gvar.var_2842 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_97 + 1; ++cnt1) {
            if (Gvar.var_83[cnt1][0] != 0 && Gvar.var_83[cnt1][31] != 4 && Gvar.var_83[cnt1][31] != 5 && Gvar.var_83[cnt1][0] != 143 && Gvar.var_83[cnt1][0] != 166) {
                Gvar.var_2842 = Gvar.var_2842 + 1;
            }
        }
        if (Gvar.var_2842 >= 40) {
            Gvar.var_2352 = 7;
        }
        if (Gvar.var_97 > 150) {
            Gvar.var_2352 = 7;
        }
        Adap.DSPLAY(118);
        if (Gvar.var_2352 == 0) {
            await Func.setMessage1("ウンガロは", "「ﾌｧﾝﾄﾑ･ﾌﾞﾗｯﾄﾞ」を読んだ", 8, false, false, false);
        }
        if (Gvar.var_2352 == 1) {
            await Func.setMessage1("ウンガロは", "「戦闘潮流」を読んだ", 8, false, false, false);
        }
        if (Gvar.var_2352 == 2) {
            await Func.setMessage1("ウンガロは", "「ｽﾀｰﾀﾞｽﾄ･ｸﾙｾｲﾀﾞｰｽ」を読んだ", 8, false, false, false);
        }
        if (Gvar.var_2352 == 3) {
            await Func.setMessage1("ウンガロは", "「ダイヤモンドは砕けない」を読んだ", 8, false, false, false);
        }
        if (Gvar.var_2352 == 4) {
            await Func.setMessage1("ウンガロは", "「黄金の風」を読んだ", 8, false, false, false);
        }
        if (Gvar.var_2352 == 5) {
            await Func.setMessage1("ウンガロは", "「ｽﾄｰﾝ･ｵｰｼｬﾝ」を読んだ", 8, false, false, false);
        }
        if (Gvar.var_2352 == 6) {
            await Func.setMessage1("ウンガロは", "「７匹のヤギ」を読んだ", 8, false, false, false);
        }
        if (Gvar.var_2352 == 7) {
            await Func.setMessage1("ウンガロ「これからはおれの時代だッ！」", "", 8, false, false, true);
        }
        Gvar.var_83[Gvar.var_673].Var21 = 1;
        Gvar.var_411 = 1;
        Gvar.var_411 = 1;
        // await Func.func337(); // メッセージ表示処理(自動)
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_411 = 2;
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_411 = 1;
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_411 = 2;
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_411 = 3;
        // await Func.func337(); // メッセージ表示処理(自動)
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_411 = 2;
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_411 = 1;
        // await Func.func337(); // メッセージ表示処理(自動)
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_411 = 1;
        Gvar.var_83[Gvar.var_673].Var21 = 0;
        if (Gvar.var_2352 == 7) {
            Gvar.var_2197 = 1;
            return;
        }
        Gvar.var_1584 = 0;
        Gvar.var_1585 = 0;
        Gvar.var_1587 = 0;
        Gvar.var_1588 = 0;
        Gvar.var_1589 = 0;
        Gvar.var_1590 = 0;
        await Func.func625();
        Gvar.var_1845 = 1;
        Gvar.var_2353 = Gvar.var_673;
        await Func.func556();
        Gvar.var_2354 = 0;
        Gvar.var_1584 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
        Gvar.var_1585 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
        Gvar.var_673 = Gvar.var_2353;
        Gvar.var_1845 = 0;
        if (Gvar.var_2110 == 0) {
            await Func.func625();
            Gvar.var_2519 = 1;
            Gvar.var_1845 = 5;
            Gvar.var_2353 = Gvar.var_673;
            await Func.func556();
            Gvar.var_2354 = 0;
            Gvar.var_1587 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1588 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_673 = Gvar.var_2353;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 != 0) {
                Gvar.var_2841++;
            }
            await Func.func625();
            Gvar.var_2519 = 1;
            Gvar.var_1845 = 5;
            Gvar.var_2353 = Gvar.var_673;
            await Func.func556();
            Gvar.var_2354 = 0;
            Gvar.var_1589 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1590 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_673 = Gvar.var_2353;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 != 0) {
                Gvar.var_2841++;
            }
            if (Gvar.var_2841 == 0) {
                await Func.setMessage1("しかし何も起こらなかった…", "", 8, false, false, false);
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    Gvar.var_300 = 0;
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                Gvar.var_2197 = 1;
                Gvar.var_2355 = 0;
                return;
            }
        }
        if (Gvar.var_2841 == 0) {
            await Func.func625();
            Gvar.var_1845 = 1;
            Gvar.var_2353 = Gvar.var_673;
            await Func.func556();
            Gvar.var_2354 = 0;
            Gvar.var_1587 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1588 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_673 = Gvar.var_2353;
            Gvar.var_1845 = 0;
            await Func.func625();
            Gvar.var_1845 = 1;
            Gvar.var_2353 = Gvar.var_673;
            await Func.func556();
            Gvar.var_2354 = 0;
            Gvar.var_1589 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1590 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_673 = Gvar.var_2353;
            Gvar.var_1845 = 0;
        }
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1586 = 1;
        Adap.DSPLAY(168);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1586++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1586 = 0;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        if (Gvar.var_2841 == 0) {
            if (Gvar.var_2352 != 6) {
                await Func.setMessage1("マンガのキャラクターが現れた！", "", 8, false, false, false);
            }
            if (Gvar.var_2352 == 6) {
                await Func.setMessage1("メェ～～", "", 8, false, false, false);
            }
        }
        if (Gvar.var_2841 != 0) {
            if (Gvar.var_2352 != 6) {
                await Func.setMessage1("部屋内にマンガのキャラクターが増えた！", "", 8, false, false, false);
            }
            if (Gvar.var_2352 == 6) {
                await Func.setMessage1("部屋内にヤギが増えた！", "", 8, false, false, false);
            }
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_2355 = 0;
        }
        Gvar.var_2197 = 1;
        return;
}

export {func595}
