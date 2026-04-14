/**
 * item301 — No = 301 ハーヴェストの発動処理
 *
 * 各スタンドの発動能力設定。
 *
 * (org原典: newDTW_item(スタンドdisc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 301 ハーヴェストの発動処理
async function item301(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        await Func.setMessage("アイテムを取って来いッ！",
                               "", 7, false, false, false);
        Gvar.var_1483 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1483++;
        }
        Gvar.var_1483 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_2275 = Gvar.var_66 - 1;
        if (Gvar.var_2275 < 0) {
            Gvar.var_2275 = 0;
        }
        Gvar.var_2276 = Gvar.var_66 + 1;
        if (Gvar.var_2276 > Gvar.var_33) {
            Gvar.var_2276 = Gvar.var_33;
        }
        Gvar.var_2277 = Gvar.var_67 - 1;
        if (Gvar.var_2277 < 0) {
            Gvar.var_2277 = 0;
        }
        Gvar.var_2278 = Gvar.var_67 + 1;
        if (Gvar.var_2278 > Gvar.var_34) {
            Gvar.var_2278 = Gvar.var_34;
        }
        Gvar.var_347 = Gvar.var_66;
        Gvar.var_348 = Gvar.var_67;
        Gvar.var_2279 = 0;
        Gvar.var_2280 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_336; ++cnt2) {
            Gvar.var_2281 = 0;
            if (Gvar.var_78[Gvar.var_2280].Var0 != 0 && Gvar.var_78[Gvar.var_2280].Var11 == 0) {
                Gvar.var_2282 = Gvar.var_78[Gvar.var_2280].Var1;
                Gvar.var_2283 = Gvar.var_78[Gvar.var_2280].Var2;
                if (Gvar.var_2281 == 0 && Gvar.var_77[Gvar.var_347][Gvar.var_348] == 0 && Gvar.var_80[Gvar.var_347][Gvar.var_348] == 0 && Gvar.var_71[Gvar.var_347][Gvar.var_348] != 0 && Gvar.var_71[Gvar.var_347][Gvar.var_348] != 13 && Gvar.var_73[Gvar.var_347][Gvar.var_348] == 0) {
                    Gvar.var_2284 = Gvar.var_347;
                    Gvar.var_2285 = Gvar.var_348;
                    Gvar.var_2281 = 1;
                }
                if (Gvar.var_2281 == 0 && Gvar.var_77[Gvar.var_2275][Gvar.var_348] == 0 && Gvar.var_80[Gvar.var_2275][Gvar.var_348] == 0 && Gvar.var_71[Gvar.var_2275][Gvar.var_348] != 0 && Gvar.var_71[Gvar.var_2275][Gvar.var_348] != 13 && Gvar.var_73[Gvar.var_2275][Gvar.var_348] == 0) {
                    Gvar.var_2284 = Gvar.var_2275;
                    Gvar.var_2285 = Gvar.var_348;
                    Gvar.var_2281 = 1;
                }
                if (Gvar.var_2281 == 0 && Gvar.var_77[Gvar.var_2276][Gvar.var_348] == 0 && Gvar.var_80[Gvar.var_2276][Gvar.var_348] == 0 && Gvar.var_71[Gvar.var_2276][Gvar.var_348] != 0 && Gvar.var_71[Gvar.var_2276][Gvar.var_348] != 13 && Gvar.var_73[Gvar.var_2276][Gvar.var_348] == 0) {
                    Gvar.var_2284 = Gvar.var_2276;
                    Gvar.var_2285 = Gvar.var_348;
                    Gvar.var_2281 = 1;
                }
                if (Gvar.var_2281 == 0 && Gvar.var_77[Gvar.var_347][Gvar.var_2278] == 0 && Gvar.var_80[Gvar.var_347][Gvar.var_2278] == 0 && Gvar.var_71[Gvar.var_347][Gvar.var_2278] != 0 && Gvar.var_71[Gvar.var_347][Gvar.var_2278] != 13 && Gvar.var_73[Gvar.var_347][Gvar.var_2278] == 0) {
                    Gvar.var_2284 = Gvar.var_347;
                    Gvar.var_2285 = Gvar.var_2278;
                    Gvar.var_2281 = 1;
                }
                if (Gvar.var_2281 == 0 && Gvar.var_77[Gvar.var_347][Gvar.var_2277] == 0 && Gvar.var_80[Gvar.var_347][Gvar.var_2277] == 0 && Gvar.var_71[Gvar.var_347][Gvar.var_2277] != 0 && Gvar.var_71[Gvar.var_347][Gvar.var_2277] != 13 && Gvar.var_73[Gvar.var_347][Gvar.var_2277] == 0) {
                    Gvar.var_2284 = Gvar.var_347;
                    Gvar.var_2285 = Gvar.var_2277;
                    Gvar.var_2281 = 1;
                }
                if (Gvar.var_2281 == 0 && Gvar.var_77[Gvar.var_2275][Gvar.var_2278] == 0 && Gvar.var_80[Gvar.var_2275][Gvar.var_2278] == 0 && Gvar.var_71[Gvar.var_2275][Gvar.var_2278] != 0 && Gvar.var_71[Gvar.var_2275][Gvar.var_2278] != 13 && Gvar.var_73[Gvar.var_2275][Gvar.var_2278] == 0) {
                    Gvar.var_2284 = Gvar.var_2275;
                    Gvar.var_2285 = Gvar.var_2278;
                    Gvar.var_2281 = 1;
                }
                if (Gvar.var_2281 == 0 && Gvar.var_77[Gvar.var_2276][Gvar.var_2278] == 0 && Gvar.var_80[Gvar.var_2276][Gvar.var_2278] == 0 && Gvar.var_71[Gvar.var_2276][Gvar.var_2278] != 0 && Gvar.var_71[Gvar.var_2276][Gvar.var_2278] != 13 && Gvar.var_73[Gvar.var_2276][Gvar.var_2278] == 0) {
                    Gvar.var_2284 = Gvar.var_2276;
                    Gvar.var_2285 = Gvar.var_2278;
                    Gvar.var_2281 = 1;
                }
                if (Gvar.var_2281 == 0 && Gvar.var_77[Gvar.var_2275][Gvar.var_2277] == 0 && Gvar.var_80[Gvar.var_2275][Gvar.var_2277] == 0 && Gvar.var_71[Gvar.var_2275][Gvar.var_2277] != 0 && Gvar.var_71[Gvar.var_2275][Gvar.var_2277] != 13 && Gvar.var_73[Gvar.var_2275][Gvar.var_2277] == 0) {
                    Gvar.var_2284 = Gvar.var_2275;
                    Gvar.var_2285 = Gvar.var_2277;
                    Gvar.var_2281 = 1;
                }
                if (Gvar.var_2281 == 0 && Gvar.var_77[Gvar.var_2276][Gvar.var_2277] == 0 && Gvar.var_80[Gvar.var_2276][Gvar.var_2277] == 0 && Gvar.var_71[Gvar.var_2276][Gvar.var_2277] != 0 && Gvar.var_71[Gvar.var_2276][Gvar.var_2277] != 13 && Gvar.var_73[Gvar.var_2276][Gvar.var_2277] == 0) {
                    Gvar.var_2284 = Gvar.var_2276;
                    Gvar.var_2285 = Gvar.var_2277;
                    Gvar.var_2281 = 1;
                }
                if (Gvar.var_2281 == 1) {
                    Gvar.var_77[Gvar.var_2284][Gvar.var_2285] = Gvar.var_77[Gvar.var_2282][Gvar.var_2283];
                    Gvar.var_78[Gvar.var_2280].Var1 = Gvar.var_2284;
                    Gvar.var_78[Gvar.var_2280].Var2 = Gvar.var_2285;
                    Gvar.var_78[Gvar.var_2280].Var9 = Gvar.var_71[Gvar.var_2284][Gvar.var_2285];
                    Gvar.var_78[Gvar.var_2280].Var10 = 1;
                    Gvar.var_77[Gvar.var_2282][Gvar.var_2283] = 0;
                    Gvar.var_2279++;
                }
                if (Gvar.var_2281 == 0) {
                    break;
                }
            }
            Gvar.var_2280 = Gvar.var_2280 + 1;
        }
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理

        if (Gvar.var_2279 == 0) {
            await Func.setMessage("１個も拾ってこなかったど！",
                                   "", 7, false, false, false);
        }
        if (Gvar.var_2279 >= 1) {
            await Func.setMessage("" + Gvar.var_2279 + "個  拾ってきた。",
                                   "", 7, false, false, false);
        }
        if (Gvar.var_2279 >= 1) {
            Gvar.var_1489 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            await Func.AutoDraw(15);
            Gvar.var_1489 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        }
        if (Gvar.var_2279 == 0) {
            await Func.AutoDraw(15);
        }
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item301}
