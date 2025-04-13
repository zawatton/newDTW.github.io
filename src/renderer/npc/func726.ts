import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func726(this: any) {
        Adap.dbgprt(726);
        Gvar.var_243 = 0;
        Gvar.var_3125 = Adap.rnd(7);
        if (Gvar.var_3125 == 0) {
            await Func.setMessage("ぶばはははははあ",
                                   "", 7, false, false, true);
        }
        if (Gvar.var_3125 == 1) {
            await Func.setMessage("バギィイ――ッ",
                                   "", 7, false, false, true);
        }
        if (Gvar.var_3125 == 2) {
            await Func.setMessage("ぶきィィィーッ",
                                   "", 7, false, false, true);
        }
        if (Gvar.var_3125 == 3) {
            await Func.setMessage("ノシェーーーッ",
                                   "", 7, false, false, true);
        }
        if (Gvar.var_3125 == 4) {
            await Func.setMessage("アギ    アギ",
                                   "    アギッ  アギッ  アギィィ―――ッ", 7, false, false, true);
        }
        if (Gvar.var_3125 == 5) {
            await Func.setMessage("ウケッウケッウケッ",
                                   "", 7, false, false, true);
        }
        if (Gvar.var_3125 == 6) {
            await Func.setMessage("ガルルルルーッ",
                                   "", 7, false, false, true);
        }
        await Func.AutoDraw(5);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func726}
