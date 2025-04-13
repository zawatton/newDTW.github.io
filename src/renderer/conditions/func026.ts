import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func026(this: any) {
        Adap.dbgprt(26);
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_253 == 1) {
            Gvar.var_199 = 7;
        }
        if (Gvar.var_254 == 1 && Gvar.var_255 == 1) { // var_255:入力判定[↑]
            Gvar.var_199 = 7;
        }
        if (Gvar.var_256 == 1) {
            Gvar.var_199 = 9;
        }
        if (Gvar.var_257 == 1 && Gvar.var_255 == 1) { // var_255:入力判定[↑]
            Gvar.var_199 = 9;
        }
        if (Gvar.var_258 == 1) {
            Gvar.var_199 = 1;
        }
        if (Gvar.var_254 == 1 && Gvar.var_259 == 1) { // var_259:入力判定[↓]
            Gvar.var_199 = 1;
        }
        if (Gvar.var_260 == 1) {
            Gvar.var_199 = 3;
        }
        if (Gvar.var_257 == 1 && Gvar.var_259 == 1) { // var_259:入力判定[↓]
            Gvar.var_199 = 3;
        }
        if (Gvar.var_254 == 1) {
            Gvar.var_199 = 4;
        }
        if (Gvar.var_257 == 1) {
            Gvar.var_199 = 6;
        }
        if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
            Gvar.var_199 = 8;
        }
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
            Gvar.var_199 = 2;
        }
        if (Gvar.var_116 == 0 && Gvar.var_114 == 0) {
            Gvar.var_461 = 0;
            Gvar.var_462 = 0;
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        if (Gvar.var_66 != Gvar.var_461 || Gvar.var_67 != Gvar.var_462) {
            Gvar.var_115 = 0;
            Gvar.var_116 = 0;
            Gvar.var_114 = 0;
            Gvar.var_461 = 0;
            Gvar.var_462 = 0;
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        if (Gvar.var_83[Gvar.var_114].Var0 == 0 && Gvar.var_116 == 0) {
            Gvar.var_114 = 0;
            Gvar.var_461 = 0;
            Gvar.var_462 = 0;
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        if (Gvar.var_83[Gvar.var_114].Var0 != 0 && Gvar.var_116 == 0) {
            if (Gvar.var_83[Gvar.var_114].Var1 != Gvar.var_463 || Gvar.var_83[Gvar.var_114].Var2 != Gvar.var_464) {
                Gvar.var_114 = 0;
                Gvar.var_461 = 0;
                Gvar.var_462 = 0;
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
        }
        Gvar.var_465 = Gvar.var_66 - 1;
        if (Gvar.var_465 < 0) {
            Gvar.var_465 = 0;
        }
        Gvar.var_466 = Gvar.var_66 + 1;
        Gvar.var_467 = Gvar.var_67 + 1;
        Gvar.var_468 = Gvar.var_67 - 1;
        if (Gvar.var_468 < 0) {
            Gvar.var_468 = 0;
        }
        if (Gvar.var_199 == 4) {
            if (Gvar.var_71[Gvar.var_465][Gvar.var_67] == 0 || Gvar.var_82[Gvar.var_465][Gvar.var_67] == 13 || Gvar.var_82[Gvar.var_465][Gvar.var_67] >= 1) {
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
        }
        if (Gvar.var_199 == 6) {
            if (Gvar.var_71[Gvar.var_466][Gvar.var_67] == 0 || Gvar.var_82[Gvar.var_466][Gvar.var_67] == 13 || Gvar.var_82[Gvar.var_466][Gvar.var_67] >= 1) {
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
        }
        if (Gvar.var_199 == 2) {
            if (Gvar.var_71[Gvar.var_66][Gvar.var_467] == 0 || Gvar.var_82[Gvar.var_66][Gvar.var_467] == 13 || Gvar.var_82[Gvar.var_66][Gvar.var_467] >= 1) {
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
        }
        if (Gvar.var_199 == 8) {
            if (Gvar.var_71[Gvar.var_66][Gvar.var_468] == 0 || Gvar.var_82[Gvar.var_66][Gvar.var_468] == 13 || Gvar.var_82[Gvar.var_66][Gvar.var_468] >= 1) {
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
        }
        if (Gvar.var_199 == 1) {
            if (Gvar.var_71[Gvar.var_465][Gvar.var_467] == 0 || Gvar.var_82[Gvar.var_465][Gvar.var_467] == 13 || Gvar.var_82[Gvar.var_465][Gvar.var_467] >= 1) {
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
        }
        if (Gvar.var_199 == 3) {
            if (Gvar.var_71[Gvar.var_466][Gvar.var_467] == 0 || Gvar.var_82[Gvar.var_466][Gvar.var_467] == 13 || Gvar.var_82[Gvar.var_466][Gvar.var_467] >= 1) {
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
        }
        if (Gvar.var_199 == 7) {
            if (Gvar.var_71[Gvar.var_465][Gvar.var_468] == 0 || Gvar.var_82[Gvar.var_465][Gvar.var_468] == 13 || Gvar.var_82[Gvar.var_465][Gvar.var_468] >= 1) {
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
        }
        if (Gvar.var_199 == 9) {
            if (Gvar.var_71[Gvar.var_466][Gvar.var_468] == 0 || Gvar.var_82[Gvar.var_466][Gvar.var_468] == 13 || Gvar.var_82[Gvar.var_466][Gvar.var_468] >= 1) {
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
        }
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_469 = 1;
        if (Gvar.var_114 == 0) {
            await Func.setMessage("固定されて動けない！", "", 7, false, false, false);
        }
        if (Gvar.var_114 >= 1) {
            await Func.setMessage("つかまれていて動けない！", "", 7, false, false, false);
        }
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_469 = Gvar.var_469 + 1;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_469 = 0;
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func026}
