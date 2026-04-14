/**
 * func207 — 画面サイズ設定: 描画処理 (旧API互換)
 *
 * ※ MenuController.render() に置き換え。
 *   func337.ts から var_904==1 の時に呼ばれる。
 */
import * as Menu from '../menu/MenuController'
import * as Configs from '../menu/menuConfigs'

async function func207(this: any) {
    Menu.render(Configs.screenSize);
}

export { func207 }
