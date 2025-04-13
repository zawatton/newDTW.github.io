import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ダンジョン内のSPW財団の男に話しかけた時のメッセージ処理
async function func755(this: any) {
        Adap.dbgprt(755);
        Gvar.var_243 = 0;

        await Func.setMessage("SPW財団の男「ひとつ情報があります」",
                               "", 7, true, false, true);

        await Func.setMessage("「SPW財団の調査によると、次の階では",
                                "", 7, true, false, true);

        Gvar.var_3142 = Adap.sdim(50, 20, null); 
        Gvar.var_3143 = Gvar.current_floor;
        Gvar.current_floor = Gvar.current_floor + 1;
        await Func.func627(); // 各ダンジョンごとの出現敵設定
        Gvar.var_3144 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            if (Gvar.var_977[Gvar.var_3144] == 0) {
                break;
            }
            Gvar.enemy_list = Gvar.var_977[Gvar.var_3144];
            await Func.func626();
            Gvar.var_3142[Gvar.var_3144] = Gvar.enemy_name;
            Gvar.var_3144 = Gvar.var_3144 + 1;
        }
        Gvar.current_floor = Gvar.var_3143;
        Gvar.var_3145 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_3144; ++cnt1) {
            await Func.setMessage("" + Gvar.var_3142[Gvar.var_3145],
                                    "", 7, true, false, true);
            Gvar.var_3145 = Gvar.var_3145 + 1;
        }
        await Func.setMessage("が出現するようです。",
                                "お気をつけて」", 7, true, false, true);

        await Func.AutoDraw(5);
        await Func.func051(); // キー入力待ち処理
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func755}
