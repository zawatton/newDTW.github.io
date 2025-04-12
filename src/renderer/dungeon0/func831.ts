import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 持ち込み不可ダンジョンにアイテムを所持した状態で入ろうとした際の忠告メッセージ処理
async function func831(this: any) {
        Adap.dbgprt(831);
        await Func.setMessage1("アイテムを持っていくことはできません", "", 7, false, false, false);
        await Func.AutoDraw(10);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func831}
