import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func811(this: any) {
        Adap.dbgprt(811);
        Gvar.wallet = 0;
        Gvar.var_1032 = Gvar.var_1032 - Gvar.var_3190;
        Gvar.var_1040 = 1;
        Adap.DSPLAY(207);
        await Func.setMessage1("「わかりました…。手の空いている者を",
                                "  ﾚｸｲｴﾑの大迷宮１階に呼んでおきます」", 7, true, false, true);
        await Func.func812();
        return;
}

export {func811}
