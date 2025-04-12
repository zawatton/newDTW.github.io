import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 415 タスクact1の発動処理。Ver0.1401にて追加。
async function item415(this: any) {
        await Func.setMessage1("『牙』だ",
                               "これからは『牙』と呼ぶ！", 7, false, true, true);
        Gvar.var_1572 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        // Adap.DSPLAY(233);
        Adap.DSPLAY(225);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1572++;
        }
        Gvar.var_1572 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF

        Gvar.taskact1_on = 1; // Ver0.1401にて追加。タスクact1を発動したかどうかの確認フラグ

        await Func.setMessage1("素手での攻撃力が上がった！",
                               "", 7, false, false, false);
        await Func.AutoDraw(5);
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

export {item415}
