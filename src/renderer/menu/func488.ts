/**
 * func488 — アイテム名変更 確定 (容器系: 800-899) + 識別ノート保存
 *
 * 入力中の名前バッファ (var_2133[1..20] または var_2144) を文字列化し、
 * 識別済みアイテム ID 用ノート (0Xe.dat) と容器名/通常アイテム名ノート (0Xn.dat) に保存する。
 *
 * 共通動作:
 *   - 容器型 (800-899) は var_862[id][1] + 130 の行に容器名を書き込む
 *   - その他 (<800) は var_862[id][1] 行に書き込む
 *   - var_862[id][2] = 1 で「名前を付けた」フラグ立て
 *   - 入力済みなら 100行 (識別済みアイテム名カタログ) 末尾を 1行ずつ後ろにシフトして
 *     先頭に新識別名を挿入 (var_2142 で 19/可変回数)
 *
 * リファクタ履歴:
 *   - 3連 if での "0Xn.dat" / "0Xe.dat" 決定 → noteFile() helper
 *   - var_2153 構築 + 800-899 vs <800 重複コード整理
 *   - "不明" → 機能特定済み
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/** var_726 (1/2/3) + 種別 (n=名前/e=エフェクト) → ".dat" ファイル名 */
function noteFile(kind: 'n' | 'e'): string {
    return `0${Gvar.var_726}${kind}.dat`;
}

/** 入力バッファ → var_2122 (var_2142==0: 文字配列連結 / ==1: 既存 var_2144 流用) */
function buildInputName(): void {
    let s = "";
    if (Gvar.var_2142 == 0) {
        let i = 1;
        for (let n = 0; n < 20; n++) {
            s += Gvar.var_2133[i];
            i++;
        }
    } else if (Gvar.var_2142 == 1) {
        s = Gvar.var_2144;
    }
    Gvar.var_2153 = s;
    Gvar.var_2122 = s;
}

/** 識別名カタログ (100 行) を 1 個分シフトして空きを作る */
function shiftIdentifiedCatalog(): void {
    let from: number, to: number, count: number;
    if (Gvar.var_2142 == 0) {
        from = 118; to = 119; count = 19;
    } else {
        from = Gvar.var_2143 - 1;
        to   = Gvar.var_2143;
        count = Gvar.var_2143 - 100;
    }
    for (let i = 0; i < count; i++) {
        const v = Adap.noteget(from);
        Adap.noteadd(v, to, 1);
        from--;
        to--;
    }
}

async function func488(this: any): Promise<void> {
    Adap.dbgprt(488);

    buildInputName();

    // ---- 容器名 (800-899) は var_862[id][1] + 130、その他は var_862[id][1] ----
    Gvar.var_735 = noteFile('n');
    if (Gvar.var_2121 >= 800 && Gvar.var_2121 < 900) {
        Gvar.var_2154 = Gvar.var_862[Gvar.var_2121][1] + 130;
    } else if (Gvar.var_2121 < 800) {
        Gvar.var_2154 = Gvar.var_862[Gvar.var_2121][1];
    }
    Gvar.var_1066[Gvar.var_2154] = Gvar.var_2122;
    Gvar.var_2155 = "" + Gvar.var_2122;
    Adap.notesel(Gvar.var_2156);
    Adap.noteadd(Gvar.var_2155, Gvar.var_2154, 1);
    await Adap.notesave(Gvar.var_735);

    Gvar.var_862[Gvar.var_2121][2] = 1; // 名前付けたフラグ

    // ---- 識別名カタログ (0Xe.dat) を更新 ----
    Gvar.var_735 = noteFile('e');
    await Adap.exist(Gvar.var_735);
    if (Gvar.strsize == (-1)) {
        await Func.func230();
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_753, null, null);
    }
    Adap.notesel(Gvar.var_754);
    await Adap.noteload(Gvar.var_735);

    if (Gvar.var_2122 != "") {
        shiftIdentifiedCatalog();
        Adap.noteadd(Gvar.var_2122, 100, 1);
    }
    await Adap.notesave(Gvar.var_735);

    Gvar.var_2142 = 0;
    Gvar.open_item_menue = 1; // 道具画面表示フラグ on
    Gvar.var_1203 = 0;
    await Func.func463();
}

export { func488 }
