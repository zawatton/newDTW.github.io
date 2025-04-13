import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 特別な階層到達時のメッセージ処理
async function func075(this: any) {
        Adap.dbgprt(75);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_594 = 1;

        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12) {
            await Func.setMessage("注意せよ！ この階は", "「エンヤ婆」によって守られている！", 7, false, false, false);
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
            await Func.setMessage("注意せよ！ この階は", "「ﾚｸｲｴﾑ･ｼﾞｮﾙﾉ」によって守られている！", 7, false, false, false);
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
            await Func.setMessage("注意せよ！ この階は", "「ウンガロ」によって守られている！", 7, false, false, false);
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
            await Func.setMessage("注意せよ！ この階は", "「" + Gvar.var_24 + "」によって守られている！", 7, false, false, false);
        }
        if (Gvar.special_floor == 1) { // 虹村屋敷
            await Func.setMessage("注意せよ！ この階は", "「虹村形兆」によって守られている！", 7, false, false, false);
        }
        if (Gvar.special_floor == 2) { // 杜王町埠頭
            await Func.setMessage("注意せよ！ この階は", "「チリペッパー」によって守られている！", 7, false, false, false);
        }
        if (Gvar.special_floor == 3) { // 吉良屋敷
            await Func.setMessage("注意せよ！ この階は", "「吉良吉影」によって守られている！", 7, false, false, false);
        }
        if (Gvar.special_floor == 4) { // 没特殊階層「星屑の十字軍」ボスは承太郎
            await Func.setMessage("注意せよ！ この階は", "「承太郎」によって守られている！", 7, false, false, false);
        }
        if (Gvar.special_floor == 5) { // 没特殊階層「ビンの中」ボスは毒グモ
            await Func.setMessage("注意せよ！ この階は", "「毒グモ」によって守られている！", 7, false, false, false);
        }
        if (Gvar.special_floor == 6) { // 没特殊階層「ナチス実験施設」ボスはサンタナ
            await Func.setMessage("注意せよ！ この階は", "「サンタナ」によって守られている！", 7, false, false, false);
        }
        if (Gvar.special_floor == 7) { // 広大な砂漠
            await Func.setMessage("広大な砂漠だ！", "", 7, false, false, false);
        }
        if (Gvar.special_floor == 8) { // 幻覚の迷宮
            await Func.setMessage("幻覚の迷宮だ！", "", 7, false, false, false);
        }
        if (Gvar.special_floor == 9) { // 幽霊部屋
            await Func.setMessage("注意せよ！ この階は", "「エンポリオ」によって守られている！", 7, false, false, false);
        }
        Adap.DSPLAY(178);
        for (let cnt1 = 0; cnt1 < 40; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_594 = Gvar.var_594 + 1;
            Gvar.var_198 = 1; // メッセージウィンドウ開く
            Gvar.var_300 = 0;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_594 = 0;
        await Func.AutoDraw(5);
        return;
}

export {func075}
