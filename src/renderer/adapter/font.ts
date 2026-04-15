import { Gvar } from '../variable'
import { getLanguage } from '../i18n'

// @ts-expect-error TS(7006): Parameter 'font_type' implicitly has an 'any' type... Remove this comment to see the full error message
function font(font_type, font_size, font_style = null) {
    font_style = font_style || 0;
    const font_style_list = ["", "bold", "italic"];
    // 英語は文字幅が広いためフォントサイズを85%に縮小
    let adjustedSize = font_size;
    if (getLanguage() !== 'ja') {
        adjustedSize = Math.round(font_size * 0.85);
    }
    // Tauri (Edge WebView2) では「メイリオ」単独指定だと小書きカナ(ィ等)の
    // グリフが欠ける環境がある。Meiryo / Yu Gothic / MS Gothic を順にフォール
    // バックさせて、どの環境でも安定した日本語表示を得る。
    const family = `'${font_type}', Meiryo, 'Yu Gothic', 'MS Gothic', sans-serif`;
    Gvar.context.font = font_style_list[font_style] + " " + adjustedSize + "px " + family;
    Gvar.line_size = adjustedSize;
}

export {font}