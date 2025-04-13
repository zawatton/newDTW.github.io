import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 100 スタープラチナの発動能力
async function item100(this: any) {
    await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
    Gvar.var_155 = 1;
    await Func.setMessage("射撃攻撃を防げるようになった！", "", 7, false, false, false);
    Adap.DSPLAY(182);
    Gvar.var_1299 = 8;
    Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
    Gvar.var_1297 = 1;
    for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_1297++;
    }
    Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
    Gvar.var_1297 = 0;
    await Func.AutoDraw(10);
    if (Gvar.var_2254 == 1) {
        Gvar.var_2254 = 0;
        await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
    }
    Gvar.var_217 = 1;
    await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
    return;
}

export {item100}
