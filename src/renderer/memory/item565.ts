import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 565 プッチ神父のdiscの効果
async function item565(this: any) {
        await Func.setMessage1("どのアイテムに使いますか？", "", 7, false, false, false);
        Gvar.var_1945 = 3;
        Gvar.var_1967 = Gvar.var_225;
        return;
}

export {item565}
