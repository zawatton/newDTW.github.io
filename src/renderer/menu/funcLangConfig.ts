/**
 * funcLangConfig — 言語設定: 入力処理 (旧API互換)
 *
 * ※ MenuController.run() に置き換え。
 */
import * as Menu from './MenuController'
import * as Configs from './menuConfigs'

async function funcLangConfig(this: any) {
    await Menu.run(Configs.language);
}

export { funcLangConfig }
