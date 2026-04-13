import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// ダンジョン「レクイエムの大迷宮」へ入った時の初期化処理
// 旧 func827
async function func0886(this: any) {
    Gvar.var_68 = 0;
    Gvar.var_535 = 0;
    await Func.func723();
    if (Gvar.var_3121 == 0 && Gvar.var_1037 == 0 && Gvar.wallet == 0 && Gvar.var_1040 == 0) {
        Gvar.var_535 = 1;
    }
    Gvar.dungeon_number = 2; // No = 2 レクイエムの大迷宮
    Gvar.current_floor = 1;
    if (Gvar.current_floor > Gvar.var_376) {
        Gvar.var_376 = Gvar.current_floor;
    }
    // No = 1 なので、ホテルの外
    if (Gvar.dungeon_number == 1 && Gvar.current_floor > Gvar.dungeon1_floor) {
        Gvar.dungeon1_floor = Gvar.current_floor;
    }
    // No = 2 なので、レクイエムの大迷宮
    if (Gvar.dungeon_number == 2 && Gvar.current_floor > Gvar.dungeon2_floor) {
        Gvar.dungeon2_floor = Gvar.current_floor;
    }
    // No = 3 なので、ディアボロの試練
    if (Gvar.dungeon_number == 3 && Gvar.current_floor > Gvar.dungeon3_floor) {
        Gvar.dungeon3_floor = Gvar.current_floor;
    }
    Gvar.var_405 = 0;
    Gvar.var_344 = 0;
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
    Gvar.var_262 = 0; // Gvar.dungeon_number = 0 確認フラグOFF
    await Music.func111(); // 効果音
    await Func.func182();
    // アイテム数が20でなければ
    if (Gvar.var_224 != 20) {
        // アイテム追加関数
        await Func.func062(); // ダンジョン開始時にアイテム欄へ「ネアポリスのピッツァ」を追加
    }
    await Func.func502();
    await Func.func504();
    await Func.func505();
    if (Gvar.var_407 == 1) {
        await Func.func0964();
    }
    if (Gvar.var_407 == 2) {
        await Func.func0992();
    }
    await Func.func076(); // 各ダンジョンの絵文字読込処理
    for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
        await Func.func339();
    }
    Adap.DSPLAY(101); // 階段を昇るor降りる時の効果音
    await Func.func006(); // 一巡後の世界のみのフラグ処理
    return;
}

export {func0886}
