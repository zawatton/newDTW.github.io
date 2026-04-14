/**
 * func205 — 画面サイズ設定: 初期化処理
 *
 * ※ MenuController + menuConfigs.screenSize に統合済み。
 *   このファイルは func193.ts からの呼び出し互換性のための薄いラッパー。
 */
import * as Menu from '../menu/MenuController'
import * as Configs from '../menu/menuConfigs'

async function func205(this: any) {
    await Menu.run(Configs.screenSize);
}

export { func205 }
