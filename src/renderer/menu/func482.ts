/**
 * func482 — アイテム名変更 UI 起動 (func483 初期化 → func484 入力ループへ)
 *
 * 道具画面でアイテムの「名前を付ける」選択時に呼ばれるエントリポイント。
 * 元名前 (item_name) を取得し var_2122 に保存してから func484 (入力ループ) を起動する。
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func482(this: any): Promise<void> {
    Adap.dbgprt(482);
    await Func.func483(); // UI 状態 + 入力バッファ初期化
    Gvar.var_2121 = Gvar.belongings_item_list;
    await Func.func492(); // item_name 解決
    Gvar.var_2122 = "" + Gvar.item_name;
    Gvar.var_2123 = 0;
    await Func.func484(); // 名前入力ループ
}

export { func482 }
