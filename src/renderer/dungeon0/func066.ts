import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func066
async function func066(this: any) {
        Adap.dbgprt(66);
        // 持っているアイテムの数が0の時
        if (Gvar.var_224 == 0) {
            await Func.setMessage("足元にジッパーが付いている。",
                                   "", 7, false, false, false);
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        await Func.setMessage("持ち物全てをジッパーに捨てますか？",
                               "", 7, true, false, false);
        await Func.func051(); // キー入力待ち処理
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_547 = 1; // 亀のジッパーで捨てるフラグON
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func0898(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func066}
