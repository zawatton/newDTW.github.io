let lastWaitTime: number = Date.now(); // または performance.now()

// ver0.1405 にて全面的に修正
// 「同一秒内での差分」 しか計算できず、1秒をまたぐと誤差が生じる という致命的な問題を修正
function await_(time: number): Promise<void> {
  // 前回呼び出しからの経過時間 (ms)
  const elapsed = Date.now() - lastWaitTime;
  // 待つべき残り時間
  const waitTime = Math.max(time - elapsed, 0);

  return new Promise<void>((resolve) => {
    setTimeout(() => {
      // タイマー終了時に現在時刻を更新
      lastWaitTime = Date.now();
      resolve();
    }, waitTime);
  });
}

export {await_}