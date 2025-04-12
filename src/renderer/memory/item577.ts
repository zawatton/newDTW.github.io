import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 577 ミキタカのdiscの効果
async function item577(this: any) {
        await Func.AutoDraw(12);
        Gvar.var_1264 = 0;
        Gvar.var_470 = 1;
        await Func.AutoDraw(4);
        Adap.DSPLAY(123);
        Gvar.var_470 = 2;
        await Func.AutoDraw(2);
        Gvar.var_470 = 3;
        await Func.AutoDraw(2);
        Gvar.var_470 = 4;
        await Func.AutoDraw(2);
        Gvar.var_470 = 5;
        await Func.AutoDraw(2);
        Gvar.var_470 = 6;
        await Func.AutoDraw(2);
        Gvar.var_470 = 7;
        await Func.AutoDraw(2);
        Gvar.var_470 = 8;
        await Func.AutoDraw(2);
        Gvar.var_470 = 9;
        await Func.AutoDraw(5);
        Adap.DSPLAY(102);
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            Gvar.var_470 = 10;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_470 = 11;
            await Func.func337(); // メッセージ表示処理(自動)
        }
        Gvar.var_470 = 12;
        await Func.AutoDraw(1);
        Gvar.var_470 = 13;
        await Func.AutoDraw(1);
        Gvar.var_470 = 14;
        await Func.AutoDraw(1);
        Gvar.var_470 = 15;
        await Func.AutoDraw(1);
        Gvar.var_470 = 16;
        await Func.AutoDraw(1);
        Gvar.var_470 = 17;
        await Func.AutoDraw(1);
        Gvar.var_470 = 18;
        await Func.AutoDraw(1);
        Gvar.var_470 = 19;
        await Func.AutoDraw(1);
        Adap.DSPLAY(232);
        Gvar.var_470 = 20;
        await Func.AutoDraw(1);
        Gvar.var_470 = 0;
        Gvar.var_218 = 1;
        return;
}

export {item577}
