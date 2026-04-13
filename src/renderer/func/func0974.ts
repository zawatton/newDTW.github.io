import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'
import * as Music from '../music/index'

// 旧 func915
async function func0974(this: any) {
    await Func.setMessage("ディアボロはここよーッ！", "ここにいるわよォ～～～ッ！", 7, false, false, true);
    Gvar.var_3864 = "女帝";
    Adap.tcpput(Gvar.var_3864, Gvar.var_1050);
    Adap.tcpput("\n", Gvar.var_1050);
    await Func.func340(); // キー入力による選択処理
    if (Gvar.var_2254 == 1) {
        Gvar.var_2254 = 0;
        await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
    }
    Gvar.var_217 = 1;
    await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
    return;
}

export {func0974}
