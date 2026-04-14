/**
 * item413 — No = 413 不明disc(没discサーフィス?) の発動処理
 *
 * 各スタンドの発動能力設定。
 *
 * (org原典: newDTW_item(スタンドdisc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 413 不明disc(没discサーフィス?) の発動処理
async function item413(this: any) {
        Gvar.var_2109 = 1;
        Gvar.var_1845 = 1;
        await Func.func556();
        Gvar.var_2109 = 0;
        Gvar.var_1845 = 0;
        if (Gvar.var_2110 == 0) {
            await Func.setMessage("人形を置く場所が無いぞ。",
                                   "", 7, false, false, false);
            await Func.AutoDraw(5);
            Gvar.var_234 = 0;
            Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.var_439 = Gvar.var_673;
        Gvar.var_83[Gvar.var_439].Var11 = 1;
        Gvar.var_83[Gvar.var_439].Var5 = 2;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_444 = 1;
        for (let cnt2 = 0; cnt2 < 25; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_444 = Gvar.var_444 + 1;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_444 = 0;
        Gvar.var_83[Gvar.var_439].Var11 = 0;
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item413}
