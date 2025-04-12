import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// スタンドパワーが力尽きて消滅した時の表示
async function func507(this: any) {
        Adap.dbgprt(507);
        await Func.AutoDraw(10);
        await Func.setMessage1("" + Gvar.var_2255 + "は", "ｽﾀﾝﾄﾞﾊﾟﾜｰが尽きて消滅した", 7, false, false, false);
        await Func.AutoDraw(10);
        return;
}

export {func507}
