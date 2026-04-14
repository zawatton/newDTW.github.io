/**
 * item204 — No = 204 シアハートアタックの発動処理
 *
 * 各スタンドの発動能力設定。
 *
 * (org原典: newDTW_item(スタンドdisc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 204 シアハートアタックの発動処理
async function item204(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        await Func.AutoDraw(5);
        Adap.DSPLAY(165);
        await Func.setMessage("カチリ",
                               "", 8, false, false, false);
        await Func.AutoDraw(15);

        Gvar.var_1389 = Gvar.var_66;
        Gvar.var_1390 = Gvar.var_67;

        await Func.setMessage("ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！",
                               "", 8, false, false, false);

        Gvar.var_1993 = Gvar.var_1389 - 1;
        if (Gvar.var_1993 < 0) {
            Gvar.var_1993 = 0;
        }
        Gvar.var_1994 = Gvar.var_1389 + 1;
        Gvar.var_1995 = Gvar.var_1390 + 1;
        Gvar.var_1996 = Gvar.var_1390 - 1;
        if (Gvar.var_1996 < 0) {
            Gvar.var_1996 = 0;
        }
        if (Gvar.var_71[Gvar.var_1993][Gvar.var_1390] == 0) {
            Gvar.var_347 = Gvar.var_1993;
            Gvar.var_348 = Gvar.var_1390;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1994][Gvar.var_1390] == 0) {
            Gvar.var_347 = Gvar.var_1994;
            Gvar.var_348 = Gvar.var_1390;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1389][Gvar.var_1995] == 0) {
            Gvar.var_347 = Gvar.var_1389;
            Gvar.var_348 = Gvar.var_1995;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1389][Gvar.var_1996] == 0) {
            Gvar.var_347 = Gvar.var_1389;
            Gvar.var_348 = Gvar.var_1996;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1993][Gvar.var_1995] == 0) {
            Gvar.var_347 = Gvar.var_1993;
            Gvar.var_348 = Gvar.var_1995;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1994][Gvar.var_1995] == 0) {
            Gvar.var_347 = Gvar.var_1994;
            Gvar.var_348 = Gvar.var_1995;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1993][Gvar.var_1996] == 0) {
            Gvar.var_347 = Gvar.var_1993;
            Gvar.var_348 = Gvar.var_1996;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1994][Gvar.var_1996] == 0) {
            Gvar.var_347 = Gvar.var_1994;
            Gvar.var_348 = Gvar.var_1996;
            await Func.func622();
        }
        if (Gvar.var_77[Gvar.var_1389][Gvar.var_1390] > 0) {
            Gvar.var_77[Gvar.var_1389][Gvar.var_1390] = 0;
        }
        if (Gvar.var_77[Gvar.var_1993][Gvar.var_1390] > 0) {
            Gvar.var_77[Gvar.var_1993][Gvar.var_1390] = 0;
        }
        if (Gvar.var_77[Gvar.var_1994][Gvar.var_1390] > 0) {
            Gvar.var_77[Gvar.var_1994][Gvar.var_1390] = 0;
        }
        if (Gvar.var_77[Gvar.var_1389][Gvar.var_1995] > 0) {
            Gvar.var_77[Gvar.var_1389][Gvar.var_1995] = 0;
        }
        if (Gvar.var_77[Gvar.var_1389][Gvar.var_1996] > 0) {
            Gvar.var_77[Gvar.var_1389][Gvar.var_1996] = 0;
        }
        if (Gvar.var_77[Gvar.var_1993][Gvar.var_1995] > 0) {
            Gvar.var_77[Gvar.var_1993][Gvar.var_1995] = 0;
        }
        if (Gvar.var_77[Gvar.var_1994][Gvar.var_1995] > 0) {
            Gvar.var_77[Gvar.var_1994][Gvar.var_1995] = 0;
        }
        if (Gvar.var_77[Gvar.var_1993][Gvar.var_1996] > 0) {
            Gvar.var_77[Gvar.var_1993][Gvar.var_1996] = 0;
        }
        if (Gvar.var_77[Gvar.var_1994][Gvar.var_1996] > 0) {
            Gvar.var_77[Gvar.var_1994][Gvar.var_1996] = 0;
        }
        Gvar.var_199 = 2;
        Gvar.var_389 = 2;
        Gvar.var_1263 = 1;
        Adap.DSPLAY(180);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1388 = 1;
        for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
            Gvar.var_585 = 3;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_585 = 0;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1388++;
        }
        for (let cnt2 = 0; cnt2 < 24; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            if (cnt2 == 25) {
                Gvar.var_1263 = 0;
            }
            Gvar.var_1388++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1388 = 0;
        Gvar.var_1263 = 0;
        Gvar.var_403 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！";
        Gvar.var_2194 = 1;
        Gvar.var_2195 = 1;
        Gvar.var_2196 = 2;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1389 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1389 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1390) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1390) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                await Func.func700();
            }
            Gvar.var_209 = 0;
            Gvar.var_2194 = Gvar.var_2194 + 1;
        }
        Gvar.var_2196 = 0;
        Gvar.var_2195 = 0;
        if (Gvar.var_211 == 1) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 209;
            await Func.AutoDraw(9);
        }
        if (Gvar.var_211 > 1) {
            Gvar.var_2198 = Math.floor(Gvar.var_211 / 2);
            if (Gvar.equip_disc[314] == 1) {
                Gvar.var_2198 = Math.floor(Gvar.var_2198 / 2);
            }
            Gvar.var_211 = Gvar.var_211 - Gvar.var_2198;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 1;
            }
            Gvar.var_208 = Gvar.var_2198 + Gvar.var_208;
        }
        Gvar.var_389 = 0;
        Gvar.var_2199 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            if (Gvar.var_83[Gvar.var_2199].Var0 == 17 && Gvar.var_83[Gvar.var_2199].Var29 == 1) {
                await Func.func699();
                Gvar.var_2199 = 1;
                cnt2 = -1;
                continue;
            }
            Gvar.var_2199++;
        }
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item204}
