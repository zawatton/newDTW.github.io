import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func871
async function func0930(this: any) {
    Gvar.var_3636 = Gvar.var_66;
    Gvar.var_3637 = Gvar.var_67;
    if (Gvar.var_3572 == 0) {
        Adap.dialog(Gvar.data0 = "btq", Gvar.data1 = 17, "魔少年の問題ファイル");
        if (Gvar.stat == 0) {
            await Func.func0910();
            return;
        }
        Gvar.var_3635 = Gvar.refstr;
        if (Adap.instr(Gvar.var_3635, 0, ".btq") == (-1)) {
            Gvar.var_3635 = "" + Gvar.var_3635 + ".btq";
        }
        Gvar.var_3572 = 1;
    }
    await Func.func0932();
    Adap.chdir(Gvar.var_30);
    Adap.objsel(0);
    Adap.clrobj();
    await Func.func233(); // ダンジョンへ入った際の全ステータス初期化処理
    if (Gvar.var_10 == 0) {
        Adap.width(340, 340);
    }
    if (Gvar.var_10 == 1) {
        Adap.width(680, 680);
    }
    Gvar.var_3761 = 1;
    await Func.func0935();
    return;
}

export {func0930}
