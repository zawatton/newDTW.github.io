import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 文字列描画処理（デフォルトバッファ＝バッファID0へ直接描画）
// 黒いボックスは表示しない
async function func049(this: any) {
    Adap.dbgprt(49);

    // もし、元々オフスクリーンバッファに切り替えていたなら削除
    // Adap.gsel(10); // ← 削除

    // ボックス描画は削除 or コメントアウト
    // Adap.color(0, 0, 0);
    // Adap.boxf(0, 240, 340, 100);

    // テキストの位置を画面下部（Y=240）あたりに表示
    const boxY = 240;     // 340×340が設計座標の場合、下部にあたる
    Adap.font(Gvar.font_type, (Gvar.font_size = 16), (Gvar.font_style = 1));
    // テキスト描画開始位置（X=30, Y=boxY+20 など）
    Adap.pos(30, boxY);

    // 表示したいメッセージ（例: Gvar.comments_row1, Gvar.comments_row2 など）
    Adap.color1(Gvar.var_25_x, Gvar.var_26_x, Gvar.var_27_x); // 文字色
    Adap.mes("");
    Adap.color1(Gvar.var_25_x, Gvar.var_26_x, Gvar.var_27_x);     
    Adap.mes(Gvar.comments_row1);
    Adap.mes(Gvar.comments_row2);

    Adap.mes(Gvar.var_295);
    Adap.color1(Gvar.var_25_x, Gvar.var_26_x, Gvar.var_27_x);
    Adap.mes(Gvar.comments_row1a);
    Adap.mes(Gvar.comments_row2a);
    Adap.mes(Gvar.var_298);

    // メインバッファに戻す処理は不要（すでにデフォルトバッファ上なので）
    return;
}

export { func049 };
