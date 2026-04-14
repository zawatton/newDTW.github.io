/**
 * func195 — ゲームスピード設定: 入力処理 (旧API互換)
 *
 * ※ 統合ハンドラ MenuController.run() に置き換え。
 *   func193.ts からは func194 経由で MenuController.run() が呼ばれる。
 *   このファイルは旧コードからの直接呼び出し互換用 (現在は未使用想定)。
 */
import * as Menu from './MenuController'
import * as Configs from './menuConfigs'

async function func195(this: any) {
    await Menu.run(Configs.gameSpeed);
}

export { func195 }
