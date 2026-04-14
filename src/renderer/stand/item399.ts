/**
 * item399 — No = 399 Gエクスペリエンスレクイエムの発動処理
 *
 * 各スタンドの発動能力設定。
 *
 * (org原典: newDTW_item(スタンドdisc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Stand from '../stand/index'
import * as Music from '../music/index'

// No = 399 Gエクスペリエンスレクイエムの発動処理
async function item399(this: any) {
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
        Gvar.var_199 = 2;
        await Func.AutoDraw(10);
        await Func.setMessage("「ｺﾞｰﾙﾄﾞ･ｴｸｽﾍﾟﾘｴﾝｽ･ﾚｸｲｴﾑ」！！",  "", 7, false, false, false);
        await Music.func108(); // BGM用mp3ファイル再生停止
        Gvar.var_1599 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            if (Gvar.var_1599 == 3) {
                Gvar.var_389 = 2;
                Gvar.var_747 = 1;
                Gvar.var_211 = 0;
                Adap.DSPLAY(105);
            }
            Gvar.var_1599++;
        }
        Gvar.var_1599 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
            await Func.AutoDraw(10);
        }
        await Func.setMessage("死に続ける能力が解除された！",  "", 7, true, false, false);
        Gvar.var_389 = 0;
        Gvar.var_103 = 1;
        Gvar.var_311 = 255;
        Gvar.var_374 = 1;
        Gvar.var_1601 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_501 = 1;
        Adap.gsel(19);
        Adap.color(255, 255, 255);
        Adap.boxf(Gvar.left = 0, Gvar.top1 = 0, Gvar.right = 680, Gvar.bottom = 680);
        Adap.gsel(0);
        Gvar.var_312 = 1;
        for (let cnt2 = 0; cnt2 < 51; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_311 = Gvar.var_311 - 5;
            Gvar.var_1601 = Gvar.var_1601 + 2;
        }
        Gvar.var_312 = 0;
        await Music.func122(); // ゴールドエクスペリエンスレクイエムの発動で帰還する際のBGM
        for (let cnt2 = 0; cnt2 < 100; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1601 = Gvar.var_1601 + 2;
        }
        await Stand.func532();
        return;
}

export {item399}
