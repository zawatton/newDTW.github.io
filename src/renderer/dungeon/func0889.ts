/**
 * func0889 — func889 アイテムの購入金額の値
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// ダンジョンへ侵入した時に必ず一番はじめに読み込まれる処理
// 旧 func830
async function func0889(this: any) {
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
    await Func.func233(); // ダンジョンへ入った際の全ステータス初期化処理
    Gvar.var_350 = 100;
    Gvar.var_567 = 100;
    Gvar.var_352 = 15;
    Gvar.var_211 = 15;
    Gvar.current_level = 1;
    Gvar.var_568 = 0;
    Gvar.var_565 = 8;
    Gvar.var_566 = 8;
    Gvar.var_68 = 0;
    // No = 3 なので、ディアボロの試練
    Gvar.dungeon_number = 3;
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
    // アイテム数20でなければ
    if (Gvar.var_224 != 20) {
        // アイテム数追加関数
        await Func.func062(); // ダンジョン開始時にアイテム欄へ「ネアポリスのピッツァ」を追加
    }
    await Func.func502();
    await Func.func504();
    await Func.func505();
    await Func.func076(); // 各ダンジョンの絵文字読込処理
    for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
        await Func.func339();
    }
    Adap.DSPLAY(101); // 階段を昇るor降りる時の効果音
    await Func.func006(); // 一巡後の世界のみのフラグ処理
    return;
}

export {func0889}
