import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 116 ハーミットパープルの発動能力
async function item116(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.var_1940 = Gvar.var_199;
        Gvar.var_199 = 2;
        Gvar.var_1258 = 3;
        Adap.DSPLAY(127);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1480 = 1;
        for (let cnt2 = 0; cnt2 < 14; ++cnt2) {
            Gvar.var_1480++;
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1480 = 0;
        Gvar.var_1258 = 0;
        Gvar.var_175 = 0;
        Gvar.var_176 = 0;
        Gvar.var_2268 = 0;
        Gvar.var_2269 = 0;
        Gvar.var_2270 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            // Gvar.enemy_list = 113 DIO
            if (Gvar.var_83[Gvar.var_2270].Var0 == 113) {
                Gvar.var_2271 = Adap.rnd(20);
                if (Gvar.var_2271 >= 10) {
                    Gvar.var_2269 = Gvar.var_2270;
                    break;
                }
            }
            // Gvar.enemy_list = 115 アクア・ネックレス
            if (Gvar.var_83[Gvar.var_2270].Var0 == 115) {
                Gvar.var_2271 = Adap.rnd(20);
                if (Gvar.var_2271 >= 10) {
                    Gvar.var_2268 = Gvar.var_2270;
                    break;
                }
            }
            Gvar.var_2270++;
        }
        if (Gvar.var_2268 == 0 && Gvar.var_2269 == 0) {
            Adap.DSPLAY(184);
            await Func.setMessage("この階の地図を念写した！",
                                   "", 7, false, false, false);
            Gvar.var_102 = 1;
        }
        if (Gvar.var_2269 >= 1) {
            await Func.setMessage("「きさま、見ているなッ！！」",
                                   "", 7, true, false, true);
            Gvar.var_176 = Gvar.var_2269;
            Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        }
        if (Gvar.var_2268 >= 1) {
            Adap.DSPLAY(184);
            await Func.setMessage("この階のｱｸｱ･ﾈｯｸﾚｽを念写した！",
                                   "", 7, true, false, false);
            Gvar.var_175 = Gvar.var_2268;
            Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        }
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        await Func.AutoDraw(10);
        Gvar.var_199 = Gvar.var_1940;
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item116}
