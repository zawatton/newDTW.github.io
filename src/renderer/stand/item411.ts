import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 411 タワー・オブ・グレーの発動処理
async function item411(this: any) {
            await Func.AutoDraw(10);
            Gvar.var_114 = 0;
            Gvar.var_463 = 0;
            Gvar.var_464 = 0;
            Gvar.var_461 = 0;
            Gvar.var_462 = 0;
            Gvar.var_2343 = Gvar.var_66;
            Gvar.var_2344 = Gvar.var_67;
            Gvar.var_2345 = Gvar.var_66 - 5;
            if (Gvar.var_2345 < 0) {
                Gvar.var_2345 = 0;
            }
            Gvar.var_2346 = Gvar.var_66 + 5;
            if (Gvar.var_2346 > Gvar.var_33) {
                Gvar.var_2346 = Gvar.var_33;
            }
            Gvar.var_2347 = Gvar.var_67 + 5;
            if (Gvar.var_2347 > Gvar.var_34) {
                Gvar.var_2347 = Gvar.var_34;
            }
            Gvar.var_2348 = Gvar.var_67 - 5;
            if (Gvar.var_2348 < 0) {
                Gvar.var_2348 = 0;
            }
            Gvar.var_2349 = 0;
            for (let cnt2 = 0; cnt2 < 10000; ++cnt2) {
                Gvar.var_2350 = Adap.rnd(Gvar.var_33);
                Gvar.var_2351 = Adap.rnd(Gvar.var_34);
                if (Gvar.var_2350 == Gvar.var_2343 && Gvar.var_2351 == Gvar.var_2344) {
                    continue;
                }
                if (Gvar.var_2350 > Gvar.var_2345 && Gvar.var_2350 < Gvar.var_2346 && Gvar.var_2351 > Gvar.var_2348 && Gvar.var_2351 < Gvar.var_2347 && Gvar.var_82[Gvar.var_2350][Gvar.var_2351] == 0 && Gvar.var_71[Gvar.var_2350][Gvar.var_2351] != 0 && Gvar.var_71[Gvar.var_2350][Gvar.var_2351] != 13) {
                    Gvar.var_2349 = 1;
                    break;
                }
            }
            Gvar.var_199 = 2;
            if (Gvar.var_2349 == 1) {
                Gvar.var_66 = Gvar.var_2350;
                Gvar.var_67 = Gvar.var_2351;
                await Func.func016();
                if (Gvar.var_201 != 14) {
                    await Func.func017();
                }
                await Func.func018();
                if (Gvar.var_200 == Gvar.var_201 && Gvar.special_floor != 8) {
                    Gvar.var_98 = 1;
                }
                if (Gvar.var_202 == Gvar.var_201 && Gvar.special_floor != 8) {
                    Gvar.var_99 = 1;
                }
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            }
            if (Gvar.var_2349 == 0) {
                Gvar.var_66 = Gvar.var_236;
                Gvar.var_67 = Gvar.var_237;
            }
            Gvar.var_1286 = 170;
            Gvar.var_1287 = 140;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1306 = 1;
            Adap.DSPLAY(190);
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1306++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1306 = 0;
            await Func.AutoDraw(10);
            Gvar.belongings_item_list = Gvar.activated_disc_id;
            await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
            Gvar.var_217 = 1;
            await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
            return;
}

export {item411}
