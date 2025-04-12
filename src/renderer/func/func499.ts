import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func499(this: any) {
        Adap.dbgprt(499);
        Gvar.var_114 = 0;
        Gvar.var_463 = 0;
        Gvar.var_464 = 0;
        Gvar.var_461 = 0;
        Gvar.var_462 = 0;
        if (Gvar.var_216 == 1) {
            Gvar.var_374 = 1;
            Gvar.var_774 = 160;
            Gvar.var_1576 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_774 = Gvar.var_774 - 20;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1576 = 0;
            await Func.AutoDraw(10);
            Gvar.var_374 = 0;
            Gvar.var_216 = 0;
        }
        Gvar.var_2235 = Gvar.var_66;
        Gvar.var_2236 = Gvar.var_67;
        Gvar.var_2237 = 0;
        Gvar.var_65[Gvar.var_66][Gvar.var_67] = 0;
        for (let cnt1 = 0; cnt1 < 500; ++cnt1) {
            Gvar.var_491 = Adap.rnd(Gvar.var_33);
            Gvar.var_492 = Adap.rnd(Gvar.var_34);
            if (Gvar.var_71[Gvar.var_491][Gvar.var_492] != 0 && Gvar.var_71[Gvar.var_491][Gvar.var_492] <= 12 && Gvar.var_82[Gvar.var_491][Gvar.var_492] == 0 && Gvar.var_71[Gvar.var_491][Gvar.var_492] != Gvar.var_201) {
                Gvar.var_2237 = 1;
                break;
            }
        }
        if (Gvar.var_2237 == 0) {
            for (let cnt2 = 0; cnt2 < 500; ++cnt2) {
                Gvar.var_491 = Adap.rnd(Gvar.var_33);
                Gvar.var_492 = Adap.rnd(Gvar.var_34);
                if (Gvar.var_491 == Gvar.var_2235 && Gvar.var_492 == Gvar.var_2236) {
                    continue;
                }
                if (Gvar.var_71[Gvar.var_491][Gvar.var_492] != 0 && Gvar.var_71[Gvar.var_491][Gvar.var_492] <= 12 && Gvar.var_82[Gvar.var_491][Gvar.var_492] == 0) {
                    Gvar.var_2237 = 1;
                    break;
                }
            }
        }
        if (Gvar.var_2237 == 0) {
            for (let cnt2 = 0; cnt2 < 10000; ++cnt2) {
                Gvar.var_491 = Adap.rnd(Gvar.var_33);
                Gvar.var_492 = Adap.rnd(Gvar.var_34);
                if (Gvar.var_491 == Gvar.var_2235 && Gvar.var_492 == Gvar.var_2236) {
                    continue;
                }
                if (Gvar.var_71[Gvar.var_491][Gvar.var_492] != 0 && Gvar.var_71[Gvar.var_491][Gvar.var_492] != 13 && Gvar.var_82[Gvar.var_491][Gvar.var_492] == 0) {
                    Gvar.var_2237 = 1;
                    break;
                }
            }
        }
        if (Gvar.var_2112 == 0) {
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                Gvar.var_374 = 1;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_374 = 0;
                await Func.func337(); // メッセージ表示処理(自動)
            }
        }
        if (Gvar.var_2237 == 0) {
            Gvar.var_66 = Gvar.var_236;
            Gvar.var_67 = Gvar.var_237;
        }
        if (Gvar.var_2237 == 1) {
            Gvar.var_66 = Gvar.var_491;
            Gvar.var_67 = Gvar.var_492;
        }
        Gvar.var_289 = Gvar.var_66 - 1;
        Gvar.var_290 = Gvar.var_66 + 1;
        Gvar.var_291 = Gvar.var_67 + 1;
        Gvar.var_292 = Gvar.var_67 - 1;
        Gvar.var_201 = 13;
        if (Gvar.var_71[Gvar.var_289][Gvar.var_67] != 13 && Gvar.var_71[Gvar.var_289][Gvar.var_67] != 0 && Gvar.var_71[Gvar.var_289][Gvar.var_67] != 14) {
            Gvar.var_201 = Gvar.var_71[Gvar.var_289][Gvar.var_67];
        }
        if (Gvar.var_71[Gvar.var_290][Gvar.var_67] != 13 && Gvar.var_71[Gvar.var_290][Gvar.var_67] != 0 && Gvar.var_71[Gvar.var_290][Gvar.var_67] != 14) {
            Gvar.var_201 = Gvar.var_71[Gvar.var_290][Gvar.var_67];
        }
        if (Gvar.var_71[Gvar.var_66][Gvar.var_291] != 13 && Gvar.var_71[Gvar.var_66][Gvar.var_291] != 0 && Gvar.var_71[Gvar.var_66][Gvar.var_291] != 14) {
            Gvar.var_201 = Gvar.var_71[Gvar.var_66][Gvar.var_291];
        }
        if (Gvar.var_71[Gvar.var_66][Gvar.var_292] != 13 && Gvar.var_71[Gvar.var_66][Gvar.var_292] != 0 && Gvar.var_71[Gvar.var_66][Gvar.var_292] != 14) {
            Gvar.var_201 = Gvar.var_71[Gvar.var_66][Gvar.var_292];
        }
        await Func.func016();
        await Func.func017();
        await Func.func018();
        if (Gvar.var_200 == Gvar.var_201 && Gvar.special_floor != 8) {
            Gvar.var_98 = 1;
        }
        if (Gvar.var_202 == Gvar.var_201 && Gvar.special_floor != 8) {
            Gvar.var_99 = 1;
        }
        if (Gvar.var_2112 == 0) {
            Gvar.var_374 = 1;
            Gvar.var_774 = 0;
            Gvar.var_1578 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_774 = Gvar.var_774 + 20;
            }
            Adap.DSPLAY(217);
            Gvar.var_1578 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_374 = 0;
            Gvar.var_199 = 2;
            await Func.AutoDraw(10);
        }
        Gvar.var_2238 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            Gvar.var_83[Gvar.var_2238].Var9 = 0;
            Gvar.var_83[Gvar.var_2238].Var18 = 0;
            Gvar.var_2238 = Gvar.var_2238 + 1;
        }
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        if (Gvar.var_2112 == 1) {
            await Func.AutoDraw(10);
        }
        Gvar.var_2112 = 0;
        if (Gvar.var_96 >= 1 && Gvar.var_201 == Gvar.var_204) {
            Gvar.var_240 = 0;
            await Func.func074(); // モンスターハウス時のメッセージ処理
        }
        if (Gvar.var_72[Gvar.var_236][Gvar.var_237] >= 1 && Gvar.var_72[Gvar.var_66][Gvar.var_67] == 0 && Gvar.var_85 == 0) {
            await Func.func722(); // アイテムを所持した状態で店から出た際の動作処理(泥棒状態認定)
        }
        if (Gvar.var_72[Gvar.var_236][Gvar.var_237] == 0 && Gvar.var_72[Gvar.var_66][Gvar.var_67] >= 1 && Gvar.var_85 == 0 && Gvar.var_210 == 0) {
            if (Gvar.var_66 != Gvar.var_236 || Gvar.var_67 != Gvar.var_237) {
                Gvar.var_240 = 0;
                await Func.func706(); // トニオさんの店 レストラン・トラサルディーへ入店した時のメッセージ表示
            }
        }
        Gvar.var_383 = 1;
        return;
}

export {func499}
