import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 108 スティッキー・フィンガーズの発動処理
async function item108(this: any) {
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
        await Func.setMessage1("こいつ自身に見せつけるしかねえッ！",
                               "", 7, false, false, false);
        Gvar.var_199 = 2;
        Gvar.var_1600 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            if (Gvar.var_1600 == 3) {
                Gvar.var_389 = 2;

                Adap.DSPLAY(105);
                Gvar.var_747 = 1;
            }
            Gvar.var_1600++;
        }
        Gvar.var_1600 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_389 = 0;
        Gvar.var_471 = 2;
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        await Func.AutoDraw(10);

        await Func.func051(); // キー入力待ち処理
        Adap.DSPLAY(148);
        Gvar.var_747 = 1;
        Gvar.var_1212 = 1;
        Gvar.var_108 = 1;

        Gvar.var_471 = 3;
        await Func.AutoDraw(1);

        Gvar.var_471 = 4;
        await Func.AutoDraw(1);

        Gvar.var_471 = 5;
        await Func.AutoDraw(1);

        Gvar.var_471 = 6;
        await Func.AutoDraw(1);

        Gvar.var_471 = 7;
        await Func.AutoDraw(1);

        Gvar.var_471 = 8;
        await Func.AutoDraw(1);

        Gvar.var_471 = 0;
        Gvar.var_1212 = 0;
        Gvar.var_108 = 0;
        Gvar.var_218 = 30;
        await Func.AutoDraw(10);

        await Func.setMessage1("「覚悟」ってのはこういうことだぜ…",
                               "", 7, false, false, false);

        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item108}
