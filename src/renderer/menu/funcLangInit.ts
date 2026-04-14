/**
 * funcLangInit — 言語設定: 初期化処理
 *
 * ※ MenuController + menuConfigs.language に統合済み。
 *   func193.ts からの呼び出し互換性のための薄いラッパー。
 */
import * as Menu from './MenuController'
import * as Configs from './menuConfigs'

async function funcLangInit(this: any) {
    await Menu.run(Configs.language);
}

export { funcLangInit }
