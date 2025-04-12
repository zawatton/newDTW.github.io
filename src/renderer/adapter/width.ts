import * as Adap from '../adapter/index'

// Ver 0.1405にて実装。ウィンドウサイズを指定する
// @ts-ignore
function width(width, height) {
    let newWidth: number = width;
    let newHeight: number = height;

    Adap.chgdisp(1, newWidth, newHeight);
    Adap.bgscr(37, newWidth, newHeight, 1, 0, 0);
    Adap.title("");
    //Adap.cls(4); // 黒く薄いフィルターがかかる

    // ウィンドウの現在の位置を取得
    const currentX = window.screenX;
    const currentY = window.screenY;

    // ウィンドウのサイズを変更し、位置を保持する
    window.resizeTo(newWidth + window.outerWidth - window.innerWidth, newHeight + window.outerHeight - window.innerHeight);
    window.moveTo(currentX, currentY);
}

export {width}