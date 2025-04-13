import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 足元確認呼び出し
async function func064(this: any) {
        Adap.dbgprt(64);
        Gvar.var_544 = 0;
        // No = 0 なので、拠点(ホテル、亀、)
        if (Gvar.dungeon_number == 0 && Gvar.var_66 == 15 && Gvar.var_67 == 21) {
            await Func.func065();
            return;
        }
        // No = 0 なので、拠点(ホテル、亀、)
        if (Gvar.dungeon_number == 0 && Gvar.var_404 >= 1 && Gvar.var_66 == 17 && Gvar.var_67 == 9) {
            await Func.func826(); // レクイエムの大迷宮の入り口へ入ろうとした際のメッセージ処理
            return;
        }
        if (Gvar.var_77[Gvar.var_66][Gvar.var_67] > 0) {
            Gvar.item_page_number = 3;
            Gvar.Y_axis_item_position = 45;
            Gvar.var_225 = 0;
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func478();
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        if (Gvar.var_80[Gvar.var_66][Gvar.var_67] > 0) {
            Gvar.var_544 = 1;
            Gvar.var_343 = 1;
            Gvar.var_545 = 1;
            await Func.func541(); // 罠を踏んだ時の処理
            Gvar.var_545 = 0;
            if (Gvar.var_382 == 1) {
                Gvar.var_382 = 0;
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            Gvar.var_217 = 1;
            await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
            return;
        }
        if (Gvar.var_73[Gvar.var_66][Gvar.var_67] >= 1) {
            Gvar.var_544 = 1;
            Gvar.var_405 = 1;
            Gvar.var_245 = 19;
            Gvar.var_246 = 45;
            Gvar.var_406 = 1;
            await Func.func060(); // ダンジョンの階段を先に進んだ時の動作処理
            return;
        }
        if (Gvar.var_544 == 0) {
            await Func.setMessage("特に何も無いようだ", "", 7, false, false, false)
        }
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func064}
