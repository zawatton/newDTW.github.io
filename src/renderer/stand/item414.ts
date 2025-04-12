import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 414 タスクact2の発動処理
async function item414(this: any) {
        if (Gvar.var_73[Gvar.var_66][Gvar.var_67] != 0 || Gvar.var_80[Gvar.var_66][Gvar.var_67] != 0 || Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
            await Func.setMessage1("ここには撃てない。",
                                   "", 7, false, false, false);
            await Func.AutoDraw(5);
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1496 = 1;
        for (let cnt3 = 0; cnt3 < 25; ++cnt3) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1496++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1496 = 0;
        Gvar.var_1971 = Gvar.var_199;
        Gvar.var_199 = 2;
        Gvar.var_1197 = 1;
        Gvar.var_1220 = 1;
        Adap.DSPLAY(109);
        Gvar.var_337 = Gvar.var_337 + 1;
        Gvar.var_2330 = Gvar.var_337;
        Gvar.var_80[Gvar.var_66][Gvar.var_67] = Gvar.var_2330;
        Gvar.var_81[Gvar.var_2330][0] = 79;
        Gvar.var_81[Gvar.var_2330][1] = Gvar.var_66;
        Gvar.var_81[Gvar.var_2330][2] = Gvar.var_67;
        Gvar.var_81[Gvar.var_2330][4] = 1;
        Gvar.var_81[Gvar.var_2330][5] = Gvar.var_201;

        await Func.setMessage1("地面に穴を開けた。",
                               "", 7, false, false, false);
        await Func.AutoDraw(5);
        await Func.AutoDraw(5);
        Gvar.var_199 = Gvar.var_1971;
        Gvar.var_1220 = 0;
        Gvar.var_1197 = 0;
        Gvar.belongings_item_list = Gvar.activated_disc_id;
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item414}
