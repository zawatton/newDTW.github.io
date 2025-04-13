import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// Ver0.1403にて追加。No = 591 ポコロコのdiscの効果
async function item591(this: any) {
        await Func.AutoDraw(12);
        Gvar.var_1264 = 0;
        Gvar.var_1073 = Adap.rnd(4);
        if (Gvar.var_1073 == 0) {
            await Func.setMessage("驚きだよォォ",
                                  "YEEEEHAAHHHッ！", 7, false, false, true);
        }
        if (Gvar.var_1073 == 1) {
            await Func.setMessage("驚きだよォォ",
                                   "YEEEEHAAHHHッ！", 7, false, false, true);
        }
        if (Gvar.var_1073 == 2) {
            await Func.setMessage("驚きだよォォ",
                                   "YEEEEHAAHHHッ！", 7, false, false, true);
        }
        if (Gvar.var_1073 == 3) {
            await Func.setMessage("驚きだよォォ",
                                   "YEEEEHAAHHHッ！", 7, false, false, true);
        }
        await Func.AutoDraw(12);
        // 非常にラッキーなのをアピールしたいので、レベルアップした時の効果音を何回も鳴らしたい
        Adap.DSPLAY(142); // レベルアップした時の効果音
        Gvar.var_1024 = 1; // 次の階の出現アイテム数＋6個するフラグON
        Gvar.var_111 = 1; // Gvar.var_111 命中率を上げるフラグON
        Gvar.var_157 = 1; // Gvar.var_157 倍速移動フラグON
        Gvar.var_105 = 1; // Gvar.var_105 攻撃を躱わしやすくなるフラグON  
        Gvar.var_104 = 1; // Gvar.var_104 攻撃力が上がるフラグON
        if (Gvar.var_109 == 1) {
            Gvar.var_104 = 0; // Gvar.var_104 攻撃力が上がるフラグOFF
            Gvar.var_109 = 0;
        }
        Gvar.var_172 = 1; // Gvar.var_172 発動効果が向上するフラグON
        Gvar.var_121 = 1; // Gvar.var_121 罠が見えるようになるフラグON
        return;
}

export {item591}
