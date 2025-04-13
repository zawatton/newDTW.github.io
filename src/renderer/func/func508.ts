import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func508(this: any) {
        Adap.dbgprt(508);
        await Func.AutoDraw(10);
        await Func.setMessage("" + Gvar.var_2255 + "は",
                                "ｽﾀﾝﾄﾞﾊﾟﾜｰが尽きて消滅した", 7, false, false, false);
        await Func.AutoDraw(10);
        return;
}

export {func508}
