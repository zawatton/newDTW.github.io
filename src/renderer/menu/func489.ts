/**
 * func489 — アイテム名変更 確定 (足元アイテム経路) + 識別ノート保存
 *
 * func488 の足元アイテム版。var_233[var_2042].Var6 (= var_78 スロット ID) を経由して
 * var_990[id] に「名前付けた」フラグを立てる。識別名カタログの更新ロジックは func488 と共通。
 *
 * 流れ:
 *   1. 入力バッファから名前文字列を構築 (var_2133 連結 or var_2144 流用)
 *   2. var_990[var_2161] = 1 で命名フラグ立て
 *   3. 0Xe.dat (識別名カタログ) を読み込み、ID行へ書込み + 100行付近を 1個ずつシフト
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

async function func489(this: any): Promise<void> {
    Adap.dbgprt(489);

    buildInputName();

    Gvar.var_2161 = Gvar.var_233[Gvar.var_2042].Var6;
    Gvar.var_990[Gvar.var_2161] = 1;

    Gvar.var_735 = noteFile('e');
    await Adap.exist(Gvar.var_735);
    if (Gvar.strsize == (-1)) {
        await Func.func230();
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_753, null, null);
    }
    Adap.notesel(Gvar.var_754);
    await Adap.noteload(Gvar.var_735);

    Adap.noteadd(Gvar.var_2122, Gvar.var_2161, 1);

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

export { func489 }
