import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 27 敵ゲブ神の特殊能力
async function enemy027(this: any) {
        if (Gvar.var_128 != 0 || Gvar.var_219 != 0) {
            return;
        }
        Gvar.var_2893 = Adap.rnd(4);
        if (Gvar.dungeon_number == 99 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
            Gvar.var_2893 = 2;
        }
        if (Gvar.var_2893 == 1 && Gvar.var_127 == 0) {
            Adap.DSPLAY(140);
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            Gvar.var_389 = 2;
            Gvar.var_199 = 2;
            await Func.setMessage("目を切り裂かれた！",
                                   "", 8, false, false, false);
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1499 = 1;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1499++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1499 = 0;
            Gvar.var_83[Gvar.var_673].Var7 = 0;
            await Func.AutoDraw(10);
            Gvar.var_389 = 0;
            Gvar.var_127 = 1;  // 瞼が落ちるや目を切り裂かれるなどで視界が見えななくなった時のフラグON
            Gvar.var_167 = 0;
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            Gvar.var_2197 = 1;
            return;
        }
        if (Gvar.var_2893 == 0 || Gvar.var_114 >= 1 || Gvar.var_128 != 0 || Gvar.var_219 != 0) {
            return;
        }
        Adap.DSPLAY(136);
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        Gvar.var_463 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_464 = Gvar.var_83[Gvar.var_673].Var2;
        Gvar.var_114 = Gvar.var_673;
        await Func.setMessage("ｹﾞﾌﾞ神に足をつかまれた！",
                               "", 8, false, false, false);
        await Func.AutoDraw(10);

        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_461 = Gvar.var_66;
        Gvar.var_462 = Gvar.var_67;
        await Func.func619();
        Gvar.var_2197 = 1;
        return;
}

export {enemy027}
