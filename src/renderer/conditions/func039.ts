import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func039(this: any) {
        Adap.dbgprt(39);
        await Func.AutoDraw(9);
        await Func.setMessage1("錠前のショックで",
                                "正気に戻った。", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func039}
