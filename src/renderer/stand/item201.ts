/**
 * item201 — No = 201 イエローテンパランスの発動処理
 *
 * 各スタンドの発動能力設定。
 *
 * (org原典: newDTW_item(スタンドdisc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 201 イエローテンパランスの発動処理
async function item201(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        await Func.setMessage("このオレのスタンド「黄の節制」に",
                               "弱点はない！", 7, false, false, false);
        Adap.DSPLAY(123);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1310 = 1;
        Gvar.var_374 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1310++;
            if (Gvar.var_1310 == 7) {
                Gvar.var_1310 = 1;
            }
            Gvar.var_300 = 0;
        }
        Gvar.var_374 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1310 = 0;
        if (Gvar.var_114 != 0) {
            if (Gvar.var_83[Gvar.var_114].Var0 == 78) {
                Gvar.var_114 = 0;
            }
        }
        await Func.setMessage("このフロアで熱と冷気に強くなった！",
                               "", 7, true, true, false);
        Gvar.var_173 = 1;
        await Func.AutoDraw(15);
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item201}
