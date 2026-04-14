/**
 * func686 — func686 レクイエムジョルノを倒した時のメッセージ処理
 *
 * (org原典: newDTW_dungeon2 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// レクイエムジョルノを倒した時のメッセージ処理
// 旧 func686
async function func686(this: any) {
    Adap.dbgprt(686);
    await Func.setMessage("ｼﾞｮﾙﾉ「うぐッ！！」", "", 8, true, false, true);

    await Func.setMessage("ｼﾞｮﾙﾉ「ば…ばかな…", "こんなことが…」", 8, true, false, true);

    await Func.setMessage("ｼﾞｮﾙﾉ「G･E･ﾚｸｲｴﾑの能力を使えば、", "その終わりのない状態を」", 8, true, false, true);

    await Func.setMessage("ｼﾞｮﾙﾉ「解除する事はできるだろう…。", "", 8, true, false, true);

    await Func.setMessage("ｼﾞｮﾙﾉ「…しかしボス」", "", 8, true, false, true);

    await Func.setMessage("ｼﾞｮﾙﾉ「はたしてそれで、", "勝利したと言えるかな…？」", 8, false, false, true);

    return;
}

export { func686 }
