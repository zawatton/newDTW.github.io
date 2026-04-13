import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// ダンジョン「一巡後の世界」へ入った時の初期化処理
// 旧 func834
async function func0893(this: any) {
    Gvar.var_68 = 0;
    await Func.func723();
    // No = 4 なので、一巡後の世界
    Gvar.dungeon_number = 4;
    Gvar.current_floor = 1;
    if (Gvar.current_floor > Gvar.var_376) {
        Gvar.var_376 = Gvar.current_floor;
    }
    // No = 4 なので、一巡後の世界
    if (Gvar.dungeon_number == 4 && Gvar.current_floor > Gvar.dungeon4_floor) {
        Gvar.dungeon4_floor = Gvar.current_floor;
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
    // アイテム数20でなければ
    if (Gvar.var_224 != 20) {
        // アイテム数追加関数
        await Func.func062(); // ダンジョン開始時にアイテム欄へ「ネアポリスのピッツァ」を追加
    }
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

export {func0893}
