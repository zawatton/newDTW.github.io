import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 393 ボヘミアンラプソディの発動処理
async function item393(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.var_2352 = Adap.rnd(6);
        if (Gvar.var_97 >= 50) {
            Gvar.var_2352 = 10;
        }
        Adap.DSPLAY(118);

        if (Gvar.var_2352 == 0) {
            await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛは",
                                   "「ﾌｧﾝﾄﾑ･ﾌﾞﾗｯﾄﾞ」を読んだ", 7, false, false, false);
        }
        if (Gvar.var_2352 == 1) {
            await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛは",
                                   "「戦闘潮流」を読んだ", 7, false, false, false);
        }
        if (Gvar.var_2352 == 2) {
            await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛは",
                                   "「ｽﾀｰﾀﾞｽﾄ･ｸﾙｾｲﾀﾞｰｽ」を読んだ", 7, false, false, false);
        }
        if (Gvar.var_2352 == 3) {
            await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛは",
                                   "「ダイヤモンドは砕けない」を読んだ", 7, false, false, false);
        }
        if (Gvar.var_2352 == 4) {
            await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛは",
                                   "「黄金の風」を読んだ", 7, false, false, false);
        }
        if (Gvar.var_2352 == 5) {
            await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛは",
                                   "「ｽﾄｰﾝ･ｵｰｼｬﾝ」を読んだ", 7, false, false, false);
        }
        if (Gvar.var_2352 == 6) {
            await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛ「これからはおれの時代だッ！」",
                                   "", 7, false, false, false);
        }
        await Func.func047(); // メッセージ履歴追加処理
        for (let cnt2 = 0; cnt2 < 16; ++cnt2) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.var_2352 == 6) {
            await Func.AutoDraw(10);
            if (Gvar.var_2254 == 1) {
                Gvar.var_2254 = 0;
                await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
            }
            Gvar.var_217 = 1;
            await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
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
            await Func.setMessage1("しかし何も起こらなかった…",
                                   "", 7, false, true, false);
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_2355 = 0;
            if (Gvar.var_2254 == 1) {
                Gvar.var_2254 = 0;
                await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
            }
            Gvar.var_217 = 1;
            await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
            return;
        }
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
        Adap.DSPLAY(168);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1586 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1586++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1586 = 0;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        await Func.setMessage1("マンガのキャラクターが現れた！",
                               "", 7, false, true, false);
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_2355 = 0;
        }
        await Func.AutoDraw(10);
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item393}
