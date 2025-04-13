import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func022(this: any) {
    Adap.dbgprt(22);

    // 初期化されていない場合の対策
    if (typeof Gvar.var_128 !== 'number') {
        Gvar.var_128 = 0;
    }

    if (Gvar.var_128 >= 1) {
        Gvar.var_281 = Gvar.var_66 - 1;
        if (Gvar.var_281 < 0) {
            Gvar.var_281 = 0;
        }
        Gvar.var_282 = Gvar.var_66 + 1;
        if (Gvar.var_282 > Gvar.var_33) {
            Gvar.var_282 = Gvar.var_33;
        }
        Gvar.var_283 = Gvar.var_67 - 1;
        if (Gvar.var_283 < 0) {
            Gvar.var_283 = 0;
        }
        Gvar.var_284 = Gvar.var_67 + 1;
        if (Gvar.var_284 > Gvar.var_34) {
            Gvar.var_284 = Gvar.var_34;
        }
        Gvar.var_457 = 0;
        Gvar.var_286 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            if (Gvar.var_83[Gvar.var_286].Var0 == 36 && Gvar.var_83[Gvar.var_286].Var1 >= Gvar.var_281 && Gvar.var_83[Gvar.var_286].Var1 <= Gvar.var_282 && Gvar.var_83[Gvar.var_286].Var2 >= Gvar.var_283 && Gvar.var_83[Gvar.var_286].Var2 <= Gvar.var_284) {
                if (Gvar.var_83[Gvar.var_286].Var31 == 5 && Gvar.var_83[Gvar.var_286].Var23 == 0 && Gvar.var_83[Gvar.var_286].Var17 == 0 && Gvar.var_83[Gvar.var_286].Var12 == 0 && Gvar.var_83[Gvar.var_286].Var13 == 0) {
                    Gvar.var_457 = 1;
                    break;
                }
            }
            Gvar.var_286 = Gvar.var_286 + 1;
        }
        if (Gvar.var_457 == 1) {
            Gvar.var_83[Gvar.var_286].Var3 = 1;
            await Func.setMessage("極寒地にすむエスキモーはよお！",
                                    "凍傷にかかった時！", 7, true, false, true);

            await Func.setMessage("アザラシの肉の体内に入って",
                                    "治していたぜ！", 7, true, false, true);

            await Func.setMessage("これならどうだ――っ！！",
                                    "", 7, true, false, true);
            Adap.DSPLAY(175);
            Gvar.var_458 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_458++;
            }
            Gvar.var_458 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_128 = 0;
            await Func.setMessage("ｽﾋﾟｰﾄﾞﾜｺﾞﾝの治療によって",
                                    "ﾃﾞｨｱﾎﾞﾛは動けるようになった", 7, true, false, false);

            await Func.setMessage("しかしｽﾋﾟｰﾄﾞﾜｺﾞﾝは",
                                    "ひどく憔悴してしまったようだ…", 7, false, false, false);
            await Func.AutoDraw(10);
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
    }
    Gvar.var_128++;
    if (Gvar.var_128 == 10) {
        Gvar.var_217 = 0;
        Gvar.var_128 = 0;
        await Func.setMessage("ﾃﾞｨｱﾎﾞﾛは動けるようになった", "", 7, false, false, false);
        await Func.AutoDraw(10);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
    }
    await Func.setMessage("…凍っていて動けない。", "", 7, false, false, false);
    await Func.AutoDraw(10);
    Gvar.var_217 = 1;
    await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
    return;
}

export {func022}
