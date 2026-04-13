import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'
import * as Stand from '../stand/index'

async function func672(this: any) {
        Adap.dbgprt(672);
        if (Gvar.equip_disc[395] == 1 && Gvar.var_1061 == 0) {
            await Stand.func675();
            return;
        }
        await Music.func110();
        if (Gvar.var_375 == 0) {
            Gvar.var_998 = Gvar.var_998 + 1;
        }
        if (Gvar.var_407 == 2) {
            Gvar.var_3079++;
            await Func.func0988();
        }
        await Func.AutoDraw(10);
        if (Gvar.var_1061 == 0) {
            Gvar.var_374 = 1;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_374 = 0;
            Gvar.var_389 = 1;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_374 = 1;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_374 = 0;
            Gvar.var_389 = 1;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_374 = 1;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_374 = 0;
            Gvar.var_389 = 1;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_374 = 1;
        }
        if (Gvar.var_1061 == 0) {
            await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ  再起不能", "", 9, false, false, false);
        }
        if (Gvar.var_1061 == 3) {
            if (Gvar.var_144 == 0) {
                await Func.setMessage("ﾃﾞｨｱﾎﾞﾛは考えるのをやめた。", "", 7, false, false, false);
            }
            if (Gvar.var_144 != 0) {
                await Func.setMessage("さびしいよォォォォ……ボス", "電話ください………", 7, false, false, false);
            }
        }
        await Func.AutoDraw(40);
        Gvar.var_1200 = 1;
        Gvar.var_2400 = 345;
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_386 == 1) {
            if (Gvar.var_201 == 4 || Gvar.var_201 == 5 || Gvar.var_201 == 6) {
                Gvar.var_356 = 200;
            }
        }
        if (Gvar.time_paused_count >= 1) {
            if (Gvar.var_356 == 113) {
                Gvar.var_356 = 259;
            }
            if (Gvar.var_356 == 114) {
                Gvar.var_356 = 284;
            }
        }
        if (Gvar.var_1061 == 3 && Gvar.var_144 != 0) {
            Gvar.var_356 = 279;
        }
        await Func.func673();
}

export {func672}
