/**
 * item114 — No = 114 ホワイトスネイクの発動処理
 *
 * 各スタンドの発動能力設定。
 *
 * (org原典: newDTW_item(スタンドdisc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 114 ホワイトスネイクの発動処理
async function item114(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_570 == 0) {
            Gvar.bufferid_stand_disc = 11; //Adap.buffer(11)は"img_stand0.gif"
        }
        if (Gvar.var_570 == 1) {
            Gvar.bufferid_stand_disc = 1; // Adap.buffer(1)は"img_stand1.gif"
        }
        if (Gvar.var_570 == 2) {
            Gvar.bufferid_stand_disc = 16; // Adap.buffer(16)は"img_stand2.gif"
        }
        if (Gvar.var_570 == 3) {
            Gvar.bufferid_stand_disc = 29; // Adap.buffer(29)は"img_stand3.gif"
        }
        Gvar.var_1283 = 1;

        await Func.setMessage("「一手」 遅カッタ…ナ…！",
                               "", 7, false, false, true);

        Gvar.var_2261 = Gvar.kougeki_disc_id ;
        Gvar.kougeki_disc_id  = 114;
        Gvar.var_243 = 1;
        Gvar.var_347 = Gvar.var_66;
        Gvar.var_348 = Gvar.var_67;
        if (Gvar.var_199 == 4) {
            Gvar.var_347 = Gvar.var_347 - 1;
        }
        if (Gvar.var_199 == 6) {
            Gvar.var_347 = Gvar.var_347 + 1;
        }
        if (Gvar.var_199 == 8) {
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        if (Gvar.var_199 == 2) {
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 1) {
            Gvar.var_347 = Gvar.var_347 - 1;
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 3) {
            Gvar.var_347 = Gvar.var_347 + 1;
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 7) {
            Gvar.var_347 = Gvar.var_347 - 1;
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        if (Gvar.var_199 == 9) {
            Gvar.var_347 = Gvar.var_347 + 1;
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        if (Gvar.var_82[Gvar.var_347][Gvar.var_348] != 0) {
            Gvar.var_2231 = Gvar.var_82[Gvar.var_347][Gvar.var_348];
            // No = 132 レクイエムジョルノ、No = 143 ウンガロでなければ
            // Ver0.1403にて追加。No = 171 離婚した承太郎
            if (Gvar.var_83[Gvar.var_2231].Var0 != 50 && Gvar.var_83[Gvar.var_2231].Var0 != 33 && Gvar.var_83[Gvar.var_2231].Var0 != 34 && Gvar.var_83[Gvar.var_2231].Var0 != 132 && Gvar.var_83[Gvar.var_2231].Var0 != 143 && Gvar.var_83[Gvar.var_2231].Var0 != 171) {
                Gvar.var_747 = 1;
                Gvar.var_83[Gvar.var_2231].Var12 = 99;
            }
        }
        await Func.AutoDraw(30);

        Adap.gsel(19);
        Adap.color(255, 255, 255);
        Adap.boxf(Gvar.left = 0, Gvar.top1 = 0, Gvar.right = 680, Gvar.bottom = 680);
        Adap.gsel(0);
        Gvar.var_311 = 0;
        Gvar.var_312 = 1;
        for (let cnt2 = 0; cnt2 < 51; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_311 = Gvar.var_311 + 5;
        }
        if (Gvar.var_82[Gvar.var_347][Gvar.var_348] != 0) {
            Adap.DSPLAY(123);
            Gvar.var_2231 = Gvar.var_82[Gvar.var_347][Gvar.var_348];
            // No = 132 レクイエムジョルノ、No = 143 ウンガロでなければ
            // Ver0.1403にて追加。No = 171 離婚した承太郎
            if (Gvar.var_83[Gvar.var_2231].Var0 != 50 && Gvar.var_83[Gvar.var_2231].Var0 != 33 && Gvar.var_83[Gvar.var_2231].Var0 != 34 && Gvar.var_83[Gvar.var_2231].Var0 != 132 && Gvar.var_83[Gvar.var_2231].Var0 != 143 && Gvar.var_83[Gvar.var_2231].Var0 != 171) {
                Gvar.var_402 = Gvar.var_2231;
                Gvar.var_209 = 999;
                Gvar.var_2195 = 1;
                Gvar.var_2196 = 2;
                Gvar.var_2262 = 1;
                await Func.func705();
                Gvar.var_2262 = 0;
                Gvar.var_2196 = 0;
                Gvar.var_2195 = 0;
            }
        }
        for (let cnt2 = 0; cnt2 < 51; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_311 = Gvar.var_311 - 5;
        }
        Gvar.var_312 = 0;
        Gvar.var_1283 = 0;
        Gvar.kougeki_disc_id  = Gvar.var_2261;
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item114}
