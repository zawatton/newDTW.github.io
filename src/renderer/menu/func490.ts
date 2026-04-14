/**
 * func490 — ノート (var_754) から 1行取得し var_1924 に格納
 *
 * notesel + noteget で var_754 ノートバッファの var_1923 行目を読み、
 * var_1924 (文字列) として保存する。アイテム名・効果説明テキストの読出に使う。
 *
 * 入力 (Gvar):
 *   var_754   : 対象ノートバッファ (notesel で選択)
 *   var_1923  : 取得する行番号
 *
 * 出力:
 *   var_2162  : noteget の生取得値
 *   var_1924  : 文字列化したコピー
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

async function func490(this: any): Promise<void> {
    Adap.dbgprt(490);
    Adap.notesel(Gvar.var_754);
    Gvar.var_2162 = Adap.noteget(Gvar.var_1923);
    Gvar.var_1924 = "" + Gvar.var_2162 + "";
}

export { func490 }
