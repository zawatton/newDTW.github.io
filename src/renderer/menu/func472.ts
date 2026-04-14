/**
 * func472 — ｸﾞｯﾁｮの死体に「ピザ・モッツァレラ」(食材600-605) を入れた時の演出
 *
 * func469 内、yabaimono_id==805 (ｸﾞｯﾁｮ) かつ var_2085==631 (ﾋﾟｯﾂｧ&ﾄﾏﾄﾁｰｽﾞ
 * のｻﾗﾀﾞ) で、直前スロットに 600-605 (食材系) があった時にだけ呼ばれる。
 *
 * 「ピザ・モッツァレラ♪」の口上を 6 連メッセージで表示するだけのフレーバー演出。
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/** 単発フレーバーセリフ (空 line2 + autoclose=true) */
async function lyric(line: string): Promise<void> {
    await Func.setMessage(line, "", 7, true, false, true);
}

async function func472(this: any): Promise<void> {
    Adap.dbgprt(472);
    await lyric("オホン");
    await lyric("ン");
    await lyric("「ピザ・モッツァレラ♪」");
    await lyric("「ピザ・モッツァレラ♪」");
    await Func.setMessage("「レラレラレラレラ♪」", "「レラレラレラレラ♪」", 7, true, false, true);
    await lyric("「ピザ・モッツァレラ♪」");
}

export { func472 }
