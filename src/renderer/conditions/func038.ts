import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func038(this: any) {
        Adap.dbgprt(38);
        await Func.AutoDraw(9);
        await Func.setMessage("ﾖｰﾖｰﾏｯ「もっとおおおおおお",
                                "  私を叱ってええええええ」", 7, true, false, true);
        await Func.AutoDraw(4);
        await Func.setMessage("ﾖｰﾖｰﾏｯのあまりの臭さで",
                                "正気に戻った。", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func038}
