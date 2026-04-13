import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func810
async function func0865(this: any) {
    if (Gvar.wallet >= 2000) {
        Adap.DSPLAY(207);
        Gvar.wallet = Gvar.wallet - 2000;
        Gvar.var_1040 = 1;
        await Func.setMessage("「わかりました…。手の空いている者を", "  ﾚｸｲｴﾑの大迷宮１階に呼んでおきます」", 7, true, false, true);
        await Func.func0867();
        return;
    }
    if (Gvar.wallet < 2000) {
        await Func.setMessage("「おっと…", "  お金が足りないようですな」", 7, true, false, true);
        Gvar.var_3190 = 2000 - Gvar.wallet;
        if (Gvar.var_3190 <= Gvar.var_1032) {
            await Func.setMessage("「口座のお金を足しますか？」", "", 7, false, false, true);
            Gvar.var_245 = 19;
            Gvar.var_246 = 45;
            Gvar.var_546 = 1;
            Gvar.var_3193 = 2;
            Gvar.var_548 = 1; // 選択肢処理フラグON
            await Func.func0898(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
            return;
        }
        await Func.func0867();
        return;
    }
    await Func.func0866();
}

export {func0865}
