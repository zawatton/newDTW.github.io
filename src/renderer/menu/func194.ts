/**
 * func194 — ゲームスピード設定: 初期化処理
 *
 * ※ 旧実装は init/input/display を3ファイルに分けていたが、
 *   現在は MenuController + menuConfigs.gameSpeed に統合済み。
 *   このファイルは func193.ts からの呼び出し互換性のための薄いラッパー。
 */
import * as Menu from './MenuController'
import * as Configs from './menuConfigs'

async function func194(this: any) {
    await Menu.run(Configs.gameSpeed);
}

export { func194 }
