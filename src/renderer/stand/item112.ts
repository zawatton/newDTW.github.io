import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 112 キラークイーン(No = 394 キラータイガークイーン)の発動処理
// No = 394 キラータイガークイーンの発動処理はNo = 112 キラークイーンと全く同じ
async function item112(this: any) {
        if (Gvar.var_199 == 2) {
            Gvar.var_2102 = Gvar.var_66;
            Gvar.var_2103 = Gvar.var_67 + 1;
        }
        if (Gvar.var_199 == 8) {
            Gvar.var_2102 = Gvar.var_66;
            Gvar.var_2103 = Gvar.var_67 - 1;
        }
        if (Gvar.var_199 == 4) {
            Gvar.var_2102 = Gvar.var_66 - 1;
            Gvar.var_2103 = Gvar.var_67;
        }
        if (Gvar.var_199 == 6) {
            Gvar.var_2102 = Gvar.var_66 + 1;
            Gvar.var_2103 = Gvar.var_67;
        }
        if (Gvar.var_199 == 1) {
            Gvar.var_2102 = Gvar.var_66 - 1;
            Gvar.var_2103 = Gvar.var_67 + 1;
        }
        if (Gvar.var_199 == 3) {
            Gvar.var_2102 = Gvar.var_66 + 1;
            Gvar.var_2103 = Gvar.var_67 + 1;
        }
        if (Gvar.var_199 == 7) {
            Gvar.var_2102 = Gvar.var_66 - 1;
            Gvar.var_2103 = Gvar.var_67 - 1;
        }
        if (Gvar.var_199 == 9) {
            Gvar.var_2102 = Gvar.var_66 + 1;
            Gvar.var_2103 = Gvar.var_67 - 1;
        }
        if (Gvar.var_71[Gvar.var_2102][Gvar.var_2103] == 0 || Gvar.var_71[Gvar.var_2102][Gvar.var_2103] == 13 || Gvar.var_82[Gvar.var_2102][Gvar.var_2103] != 0) {
            Gvar.var_2108 = 0;
        }
        if (Gvar.var_71[Gvar.var_2102][Gvar.var_2103] != 0 && Gvar.var_71[Gvar.var_2102][Gvar.var_2103] != 13 && Gvar.var_82[Gvar.var_2102][Gvar.var_2103] == 0) {
            Gvar.var_2108 = 1;
        }
        if (Gvar.var_2108 == 0) {
            await Func.setMessage("そこには出せないぞ。",
                                   "", 7, false, false, false);
            await Func.AutoDraw(5);
            Gvar.var_234 = 0;
            Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        Gvar.var_2310 = 1;
        Gvar.var_1845 = 4;
        await Func.func556();
        Gvar.var_2310 = 0;
        Gvar.var_1845 = 0;
        Gvar.var_1584 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
        Gvar.var_1585 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1583 = 1;
        Adap.DSPLAY(168);
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_198 = 1; // メッセージウィンドウ開く
            Gvar.var_300 = 0;
            Gvar.var_1583++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1583 = 0;
        Gvar.belongings_item_list = Gvar.activated_disc_id;
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数

        await Func.setMessage("「シアー・ハート・アタック」！！",
                                "狙った標的は必ず仕留める…", 7, false, false, true);
        await Func.AutoDraw(5);

        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item112}
