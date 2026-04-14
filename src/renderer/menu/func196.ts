/**
 * func196 — ゲームスピード設定: 描画処理 (旧API互換)
 *
 * ※ 統合ハンドラ MenuController.render() に置き換え。
 *   func337.ts から var_900==1 の時に呼ばれる。
 */
import * as Menu from './MenuController'
import * as Configs from './menuConfigs'

async function func196(this: any) {
    Menu.render(Configs.gameSpeed);
}

export { func196 }
