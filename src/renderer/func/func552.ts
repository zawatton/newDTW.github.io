import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func552(this: any) {
        Adap.dbgprt(552);
        Adap.DSPLAY(101); // 階段を昇るor降りる時の効果音
        await Func.func061();
        Gvar.var_373 = 5;
        await Func.AutoDraw(2);
        Gvar.var_373 = 4;
        await Func.AutoDraw(2);
        Gvar.var_373 = 3;
        await Func.AutoDraw(2);
        Gvar.var_373 = 2;
        await Func.AutoDraw(2);
        Gvar.var_373 = 1;
        await Func.AutoDraw(10);
        Gvar.var_373 = 0;
        Gvar.var_2496 = Adap.rnd(9);
        Gvar.var_2496 = Gvar.var_2496 + 1;
        if (Gvar.var_2496 == 1) {
            Gvar.special_floor = 1; // 虹村屋敷
        }
        if (Gvar.var_2496 == 2) {
            Gvar.special_floor = 2; // 杜王町埠頭
        }
        if (Gvar.var_2496 == 3) {
            Gvar.special_floor = 3; // 吉良屋敷
        }
        if (Gvar.var_2496 == 4) {
            Gvar.special_floor = 4; // 没特殊階層「星屑の十字軍」ボスは承太郎
        }
        if (Gvar.var_2496 == 5) {
            Gvar.special_floor = 5; // 没特殊階層「ビンの中」ボスは毒グモ
        }
        if (Gvar.var_2496 == 6) {
            Gvar.special_floor = 6; // 没特殊階層「ナチス実験施設」ボスはサンタナ
        }
        if (Gvar.var_2496 == 7) {
            Gvar.special_floor = 7; // 広大な砂漠
        }
        if (Gvar.var_2496 == 8) {
            Gvar.special_floor = 8; // 幻覚の迷宮
        }
        if (Gvar.var_2496 == 9) {
            Gvar.special_floor = 9;
        }
        Gvar.var_205 = 1;
        await Func.func231(); // プレイデータを保存するセーブ機能
        await Func.func076(); // 各ダンジョンの絵文字読込処理
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            await Func.func339();
        }
        await Func.func006(); // 一巡後の世界のみのフラグ処理
        return;
}

export {func552}
