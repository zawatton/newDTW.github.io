// updateBufferResolution.ts (共通モジュール例)  
function updateBufferResolution(
  canvas: HTMLCanvasElement,
  designWidth: number,
  designHeight: number,
  forcedScale?: number
): void {
  const context = canvas.getContext("2d");
  if (!context) return;

  // forcedScale が指定されていればそれを使う。指定がなければ通常は clientWidth を使って倍率計算する
  const scaleFactor = forcedScale !== undefined ? forcedScale : (canvas.clientWidth ? (canvas.clientWidth / designWidth) : 1);
  
  // 内部解像度は設計サイズ×scaleFactor
  canvas.width = designWidth * scaleFactor;
  canvas.height = designHeight * scaleFactor;
  // CSS 表示サイズは設計サイズそのまま
  canvas.style.width = designWidth + "px";
  canvas.style.height = designHeight + "px";
  
  // 描画時の変換行列を scaleFactor で設定
  context.setTransform(scaleFactor, 0, 0, scaleFactor, 0, 0);
}


export {updateBufferResolution}
