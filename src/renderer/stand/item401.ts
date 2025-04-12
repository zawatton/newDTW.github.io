import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 401 フー・ファイターズの発動処理
async function item401(this: any) {
        Gvar.var_2341 = 0;
        Gvar.var_211 = Gvar.var_211 + 20;
        if (Gvar.var_120 == 1 || Gvar.var_174 == 1) {
            Gvar.var_211 = Gvar.var_211 + 20;
        }
        if (Gvar.var_211 >= Gvar.var_352) {
            Gvar.var_211 = Gvar.var_352;
            Gvar.var_2341 = 1;
        }

        if (Gvar.var_120 == 1 || Gvar.var_174 == 1) {
            await Func.setMessage1("傷口にプランクトンを詰めた。",
                                   "いつもより多く回復した。", 7, false, false, false);
        }
        if (Gvar.var_2341 == 1) {
            await Func.setMessage1("傷口にプランクトンを詰めた。",
                                   "体力が完全に回復した。", 7, false, false, false);
        }
        Adap.DSPLAY(143);
        Gvar.var_1299 = 5;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        Gvar.belongings_item_list = Gvar.activated_disc_id;
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        // Ver0.1401にて追加。
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item401}
