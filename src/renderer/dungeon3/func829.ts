import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// ダンジョン「ディアボロの試練」へ入った時の初期化処理
async function func829(this: any) {
        Adap.dbgprt(829);
        await Func.func723();
        if (Gvar.var_3121 >= 1) {
            await Func.func831(); // 持ち込み不可ダンジョンにアイテムを所持した状態で入ろうとした際の忠告メッセージ処理
            return;
        }
        Gvar.var_68 = 0;
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
        await Func.func062(); // ダンジョン開始時にアイテム欄へ「ネアポリスのピッツァ」を追加
        await Func.func502();
        await Func.func504();
        await Func.func505();
        Gvar.wallet = 0;
        Gvar.var_350 = 100;
        Gvar.var_567 = 100;
        Gvar.var_352 = 15;
        Gvar.var_211 = 15;
        Gvar.current_level = 1;
        Gvar.var_568 = 0;
        Gvar.var_565 = 8;
        Gvar.var_566 = 8;
        if (Gvar.var_759 == 1) { // ディアボロの試練解放フラグがONの場合。岸辺露伴イベントが始まった際に1になる。
            Gvar.var_759 = 2; // その状態でダンジョンへ入ると、DIO&プッチ神父出現フラグ (Gvar.var_759 >= 2)
        }
        if (Gvar.var_407 == 1) {
            await Func.func905();
        }
        if (Gvar.var_407 == 2) {
            await Func.func933();
        }
        Gvar.var_205 = 1;
        await Func.func231(); // プレイデータを保存するセーブ機能
        await Func.func076(); // 各ダンジョンの絵文字読込処理
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            await Func.func339();
        }
        Adap.DSPLAY(101); // 階段を昇るor降りる時の効果音
        await Func.func006(); // 一巡後の世界のみのフラグ処理
        return;
}

export {func829}
