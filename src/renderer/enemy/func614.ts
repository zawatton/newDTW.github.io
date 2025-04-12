import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func614(this: any) {
        Adap.dbgprt(614);
        if (Gvar.var_83[Gvar.var_673].Var12 >= 1 || Gvar.var_83[Gvar.var_673].Var13 == 1 || Gvar.var_83[Gvar.var_673].Var17 == 1 || Gvar.var_83[Gvar.var_673].Var23 == 1) {
            Gvar.var_83[Gvar.var_673].Var18 = 0;
            return;
        }
        Gvar.var_152 = Gvar.var_673;
        if (Gvar.var_83[Gvar.var_673].Var0 == 113) { // No = 113 DIO
            Gvar.time_paused_count = 5; // 時止めターン: 5
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 114) { // No = 114 最高にハイなDIO
            Gvar.time_paused_count = 7; // 時止めターン: 7
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 128) { // No = 128 承太郎(4部)
            Gvar.time_paused_count = 4; // 時止めターン: 4
        }
        // Ver0.1403にて追加。
        if (Gvar.var_83[Gvar.var_673].Var0 == 171) { // No = 171 離婚した承太郎
            Gvar.time_paused_count = 5; // 時止めターン: 5
        }
        Gvar.var_83[Gvar.var_673].Var18 = 0;
        // Ver0.1403にて追加。No = 171 離婚した承太郎
        if (Gvar.var_83[Gvar.var_673].Var0 == 128 || Gvar.var_83[Gvar.var_673].Var0 == 171) {
            await Func.setMessage1("「スタープラチナ・ザ・ワールド」！！", "", 8, false, false, false);
        }
        else {
            await Func.setMessage1("「ザ・ワールド」！！", "時よ止まれ！", 8, false, false, false);
        }
        Adap.DSPLAY(185);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1491 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1491++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1491 = 0;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 128) {
            await Func.setMessage1("ひさしぶりに……", "時をとめられたぜ", 8, false, false, false);
        }
        // Ver0.1403にて追加。No = 171 離婚した承太郎。
        if (Gvar.var_83[Gvar.var_673].Var0 == 171) {
            await Func.setMessage1("時は最大で5秒ほど", "止まっている", 8, false, false, false);
        }
        else {
            await Func.setMessage1("フフフフフ…", "これが「世界」だ…", 8, false, false, false);
        }
        Gvar.var_240 = 0;
        Gvar.var_83[Gvar.var_673].Var6 = 1;
        Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
        Gvar.var_2197 = 1;
        await Func.AutoDraw(10);
        Gvar.var_2392 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            Gvar.var_83[Gvar.var_2392].Var6 = 0;
            Gvar.var_83[Gvar.var_2392].Var9 = 0;
            Gvar.var_83[Gvar.var_2392].Var18 = 0;
            Gvar.var_2392 = Gvar.var_2392 + 1;
        }
        if (Gvar.nouryoku_disc_id == 100 || Gvar.nouryoku_disc_id == 111 || Gvar.nouryoku_disc_id == 398) {
            await Func.AutoDraw(10);
            Gvar.var_114 = 0;
            Gvar.var_463 = 0;
            Gvar.var_464 = 0;
            Gvar.var_461 = 0;
            Gvar.var_462 = 0;
            Gvar.time_paused_count = 0;
            Gvar.var_152 = 0;
            Gvar.time_paused = 1; // 時止め(時消し飛ばし)状態フラグON
            Gvar.var_164 = 1;
            Adap.DSPLAY(185);
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1493 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1493++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1493 = 0;
            await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛ「おれが時を止めた…」", "", 12, true, false, false);
            await Func.AutoDraw(2);
            await Func.setMessage1("どんな気分だ？", "動けねえのに背後に立たれる気分はよ？", 12, true, false, false);
            await Func.AutoDraw(2);
            Gvar.var_153 = 1;
            return;
        }
        return;
}

export {func614}
