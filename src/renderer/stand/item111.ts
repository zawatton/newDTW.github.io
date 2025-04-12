import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 111 ザ・ワールドの発動能力
async function item111(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.time_paused = 1; // 時止め(時消し飛ばし)状態フラグON
        Gvar.var_164 = 1;
        Gvar.var_153 = 0;
        await Func.setMessage1("「ザ・ワールド」！！", "時よ止まれ！", 7, false, false, false);
        Gvar.var_114 = 0;
        Gvar.var_463 = 0;
        Gvar.var_464 = 0;
        Gvar.var_461 = 0;
        Gvar.var_462 = 0;
        Adap.DSPLAY(185);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1491 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1491++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1491 = 0;
        await Func.AutoDraw(5);
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {item111}
