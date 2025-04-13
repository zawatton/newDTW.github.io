import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func921(this: any) {
        Adap.dbgprt(921);
        Adap.DSPLAY(234);
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
        }
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1321 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1321 = Gvar.var_1321 + 1;
        }
        await Func.setMessage("「イヒヒヒヒ", "  注文しておいたよッ！」", 7, true, false, true);
        await Func.setMessage("「ピッツァ３枚で３００Ｇ」", "", 7, true, false, true);
        await Func.setMessage("「もちろんお釣りはいらないよねッ！」", "", 7, true, false, true);
        Adap.DSPLAY(139);
        Gvar.wallet = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1321 = Gvar.var_1321 + 1;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1321 = 0;
        Gvar.var_3561 = "喋背";
        Adap.tcpput(Gvar.var_3561, Gvar.var_1050);
        Adap.tcpput("\n", Gvar.var_1050);
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func921}
