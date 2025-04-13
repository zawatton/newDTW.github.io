import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ダンジョンに長居し過ぎた際の神砂嵐
async function func072(this: any) {
        Adap.dbgprt(72);
        await Func.setMessage("神砂嵐だ！！", "", 7, false, false, false);
        if (Gvar.var_112 == 1000) {
            await Func.AutoDraw(10);
            await Func.setMessage("真空状態の圧倒的破壊空間は", 
                                    "まさに歯車的砂嵐の小宇宙！", 7, false, false, false);
        }
        Gvar.var_582 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            Gvar.var_83[Gvar.var_582].Var8 = 1;
            Gvar.var_83[Gvar.var_582].Var12 = 0;
            Gvar.var_582 = Gvar.var_582 + 1;
        }
        await Func.func073();
        if (Gvar.var_112 == 700 || Gvar.var_112 == 1000) {
            Gvar.var_389 = 2;
            if (Gvar.var_144 != 0) {
                Gvar.var_389 = 0;
            }
        }
        if (Gvar.var_112 == 850 && Gvar.var_144 == 0) {
            Gvar.var_583 = 1;
        }
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_584 = 1;
        if (Gvar.var_112 == 700) {
            Adap.DSPLAY(144);
        }
        if (Gvar.var_112 == 850) {
            Adap.DSPLAY(145);
        }
        if (Gvar.var_112 == 1000) {
            Adap.DSPLAY(146);
        }
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            Gvar.var_585 = 1;
            if (Gvar.var_112 == 1000) {
                Gvar.var_199 = 2;
            }
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_585 = 0;
            if (Gvar.var_112 == 1000) {
                Gvar.var_199 = 4;
            }
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_585 = 1;
            if (Gvar.var_112 == 1000) {
                Gvar.var_199 = 8;
            }
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_585 = 0;
            if (Gvar.var_112 == 1000) {
                Gvar.var_199 = 6;
            }
            await Func.func337(); // メッセージ表示処理(自動)
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_584 = 0;
        Gvar.var_389 = 0;
        if (Gvar.var_112 == 1000) {
            Gvar.var_389 = 2;
            Gvar.var_199 = 2;
            if (Gvar.var_144 != 0) {
                Gvar.var_389 = 0;
            }
        }
        Gvar.var_583 = 0;
        Gvar.var_582 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            Gvar.var_83[Gvar.var_582].Var8 = 0;
            Gvar.var_582 = Gvar.var_582 + 1;
        }
        if (Gvar.var_112 == 700 || Gvar.var_112 == 850) {
            if (Gvar.var_112 == 700) {
                await Func.setMessage("…風は収まったようだ", "", 7, false, false, false);
            }
            if (Gvar.var_112 == 850) {
                await Func.setMessage("…さっきより強いぞ", "", 7, false, false, false);
            }
            await Func.AutoDraw(10);
        }
        if (Gvar.var_112 == 1000) {
            await Func.AutoDraw(20);
            Gvar.var_586 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_586 = Gvar.var_586 + 1;
                if (cnt2 == 4 || cnt2 == 6 || cnt2 == 8) {
                    Gvar.var_585 = 3;
                }
                if (cnt2 == 5 || cnt2 == 7 || cnt2 == 9) {
                    Gvar.var_585 = 0;
                }
                if (Gvar.var_586 == 4) {
                    Adap.DSPLAY(138);
                }
            }
            Gvar.var_585 = 0;
            Gvar.var_389 = 0;
            Gvar.var_211 = 0;
            Gvar.var_356 = 210;
            await Func.AutoDraw(10);
        }
        if (Gvar.var_112 >= 710) {
            Gvar.var_101 = 1;
            Gvar.var_102 = 1;
            Gvar.var_103 = 1;
        }
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        return;
}

export {func072}
