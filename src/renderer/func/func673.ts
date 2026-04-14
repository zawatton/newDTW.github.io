/**
 * func673 — func673 ダンジョンから抜け出した際のイベントフラグ読込
 *
 * (org原典: newDTW_dungeon_main / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func673(this: any) {
        Adap.dbgprt(673);
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            Gvar.var_1200 = 0;
            await Func.func051(); // キー入力待ち処理
            Gvar.var_1061 = 0;
            Gvar.var_1601 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_3080 = 1;
            if (Gvar.var_375 == 0) {
                await Func.func227();
            }
            Gvar.var_3080 = 0;
            if (Gvar.var_404 == 0 && Gvar.var_1041 == 0) {
                Gvar.var_1041 = 1;
                Gvar.ivents_flag = 5; // レクイエムの大迷宮初クリア後、ヴェネチアホテルに戻った際のイベントフラグ
            }
            if (Gvar.dungeon_number == 0) {
                await Func.func182();
                await Func.func233(); // ダンジョンへ入った際の全ステータス初期化処理
                Gvar.var_755 = 0;
                Gvar.var_205 = 1;
                Gvar.var_1049 = 1;
                await Func.func231(); // プレイデータを保存するセーブ機能
                Gvar.var_1049 = 0;
                await Func.func159(); // ヴェネチアホテルでのイベントフラグ管理処理
                return;
            }
            if (Gvar.var_375 == 0) {
                Gvar.var_755 = 0;
                await Func.func173();
                return;
            }
            if (Gvar.var_375 == 1) {
                await Func.func233(); // ダンジョンへ入った際の全ステータス初期化処理
                Gvar.var_539 = 0;
                await Func.func0939();
                return;
            }
        }
        if (Gvar.var_2400 > 40) {
            Gvar.var_2400 = Gvar.var_2400 - 40;
        }
        await Func.func673();
        return;
}

export {func673}
