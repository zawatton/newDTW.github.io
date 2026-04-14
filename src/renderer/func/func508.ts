/**
 * func508 — func508 スタンドパワーが力尽きて消滅した時の表示2
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
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
