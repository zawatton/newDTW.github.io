/**
 * funcLangDisplay — 言語設定: 描画処理 (旧API互換)
 *
 * ※ MenuController.render() に置き換え。
 *   func337.ts から lang_menu_open==1 の時に呼ばれる。
 */
import * as Menu from './MenuController'
import * as Configs from './menuConfigs'

async function funcLangDisplay(this: any) {
    Menu.render(Configs.language);
}

export { funcLangDisplay }
