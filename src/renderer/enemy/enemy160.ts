/**
 * enemy160 — No = 160 ウェストウッド看守の特殊能力
 *
 * (org原典: newDTW_enemy / SOMEDAY)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 160 ウェストウッド看守の特殊能力
async function enemy160(this: any) {
        if (Gvar.var_128 != 0 || Gvar.var_219 != 0) {
            return;
        }
        if (Gvar.var_114 == 0) {
            Gvar.var_2893 = Adap.rnd(9);
            if (Gvar.dungeon_number == 99 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2893 = 6;
            }
            if (Gvar.var_2893 <= 5) {
                return;
            }
            Adap.DSPLAY(136);
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            Gvar.var_463 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_464 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_114 = Gvar.var_673;
            await Func.setMessage("ｳｴｽﾄｳｯﾄﾞ看守「完全に【ロック】したぜ」", "", 8, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_673].Var7 = 0;
            Gvar.var_461 = Gvar.var_66;
            Gvar.var_462 = Gvar.var_67;
            await Func.func619();
            Gvar.var_2197 = 1;
            return;
        }
        if (Gvar.var_114 != 0 && Gvar.var_114 == Gvar.var_673) {
            Gvar.var_601 = Adap.rnd(5);
            await Func.AutoDraw(12);
            if (Gvar.var_601 == 0) {
                await Func.setMessage("「スカッとキレまくって  はらしてやる！！」", "", 8, true, false, true);
            }
            if (Gvar.var_601 == 1) {
                await Func.setMessage("「カスのくせによォォ～～", "  ええ！  ナメやがって  てめえ」", 8, true, false, true);
            }
            if (Gvar.var_601 == 2) {
                await Func.setMessage("「オレは最強だ！はらしてやる！」", "", 8, true, false, true);
            }
            if (Gvar.var_601 == 3) {
                await Func.setMessage("「お前はもう戦闘不能なんだあああ」", "", 8, true, false, true);
            }
            if (Gvar.var_601 == 4) {
                await Func.setMessage("「とどめが来たぞォ―――ッ！」", "", 8, true, false, true);
            }
            Gvar.var_601 = Adap.rnd(20);
            if (Gvar.var_601 == 0) {
                await Func.setMessage("「ｱｰｽ･ｳｨﾝﾄﾞ･ｱﾝﾄﾞ･ﾌｧｲﾔｰ」！！", "", 8, true, false, false);
            }
            if (Gvar.var_601 >= 1) {
                await Func.setMessage("「プラネット・ウェイブス」！！", "", 8, true, false, false);
            }
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1440 = 1;
            Gvar.var_1442 = Adap.rnd(2);
            if (Gvar.var_1442 == 0) {
                Gvar.var_1427 = 0;
                Gvar.var_1428 = 0;
            }
            if (Gvar.var_1442 == 1) {
                Gvar.var_1427 = 320 - 40;
                Gvar.var_1428 = 0;
            }
            Adap.DSPLAY(201);
            for (let cnt3 = 0; cnt3 < 7; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_1442 == 0) {
                    Gvar.var_1427 = Gvar.var_1427 + 20;
                    Gvar.var_1428 = Gvar.var_1428 + 20;
                }
                if (Gvar.var_1442 == 1) {
                    Gvar.var_1427 = Gvar.var_1427 - 20;
                    Gvar.var_1428 = Gvar.var_1428 + 20;
                }
                Gvar.var_1440 = Gvar.var_1440 + 1;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1440 = 0;
            await Func.func584(); // 射撃攻撃を受けた時の回避動作処理(弾丸を止める、燃え尽きる等)
            if (Gvar.var_2803 == 1) {
                Gvar.var_2197 = 1;
                return;
            }
            Gvar.var_389 = 2;
            Gvar.var_209 = 50;
            Adap.DSPLAY(115);
            if (Gvar.var_83[Gvar.var_673].Var39 >= 2) {
                Gvar.var_209 = (Gvar.var_83[Gvar.var_673].Var39 - 1) * 2 + Gvar.var_209;
            }
            if (Gvar.var_128 >= 1) {
                Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
            }
            if (Gvar.var_128 >= 1) {
                await Func.func023();
            }
            if (Gvar.equip_disc[205] == 1) {
                Gvar.var_209 = Math.floor(Gvar.var_209 * 2 / 3);
            }
            // アイテム「鉄球」を使用して射撃攻撃ダメージがアップしている場合
            if (Gvar.var_168 == 1) {
                Gvar.var_209 = Math.floor(Gvar.var_209 * 2 / 3);
            }
            Gvar.var_747 = 1;
            Gvar.var_389 = 2;
            Gvar.var_211 = Gvar.var_211 - Gvar.var_209;
            Gvar.var_208 = Gvar.var_208 + Gvar.var_209;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 257;
            }
            await Func.setMessage("隕石が直撃した！", "" + Gvar.var_209 + "のダメージを喰らった！", 8, false, false, false);
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                Gvar.var_585 = 3;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_585 = 0;
                await Func.func337(); // メッセージ表示処理(自動)
            }
            await Func.AutoDraw(5);
            Gvar.var_389 = 0;
            Gvar.var_2197 = 1;
            return;
        }
        return;
}

export {enemy160}
