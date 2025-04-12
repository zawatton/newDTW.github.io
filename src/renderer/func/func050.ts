import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// メッセージをアニメーション風送り表示(連続描画)
// ver0.1405 にて待機時間追加 & 記述をシンプル化
async function func050(this: any) {
        Adap.dbgprt(50);
        for (let i = 0; i < 6; i++) {
                Gvar.animationStep = i;
                await Func.func337();   
        }
        return;
}

export {func050}
