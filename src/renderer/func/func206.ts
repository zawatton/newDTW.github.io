/**
 * func206 — 画面サイズ設定: 入力処理 (旧API互換)
 *
 * ※ MenuController.run() に置き換え。
 */
import * as Menu from '../menu/MenuController'
import * as Configs from '../menu/menuConfigs'

async function func206(this: any) {
    await Menu.run(Configs.screenSize);
}

export { func206 }
