import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// レクイエムジョルノを倒した時のメッセージ処理
async function func686(this: any) {
    Adap.dbgprt(686);
    await Func.setMessage1("ｼﾞｮﾙﾉ「うぐッ！！」", "", 8, true, false, true);

    await Func.setMessage1("ｼﾞｮﾙﾉ「ば…ばかな…", "こんなことが…」", 8, true, false, true);

    await Func.setMessage1("ｼﾞｮﾙﾉ「G･E･ﾚｸｲｴﾑの能力を使えば、", "その終わりのない状態を」", 8, true, false, true);

    await Func.setMessage1("ｼﾞｮﾙﾉ「解除する事はできるだろう…。", "", 8, true, false, true);

    await Func.setMessage1("ｼﾞｮﾙﾉ「…しかしボス」", "", 8, true, false, true);

    await Func.setMessage1("ｼﾞｮﾙﾉ「はたしてそれで、", "勝利したと言えるかな…？」", 8, false, false, true);

    return;
}

export { func686 }
