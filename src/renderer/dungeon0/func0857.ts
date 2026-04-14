/**
 * func0857 — func857 不明
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/*
ヴェネチアホテルに設置してあるPC設定
口座、アイテム手配等
*/ 
// 旧 func802
async function func0857(this: any) {
    Gvar.var_243 = 0;
    Adap.DSPLAY(210);
    Gvar.var_783 = 1;
    await Func.AutoDraw(1);
    Gvar.var_783 = 2;
    await Func.AutoDraw(1);
    Gvar.var_783 = 3;
    await Func.AutoDraw(1);
    Gvar.var_783 = 4;
    await Func.AutoDraw(5);
    Gvar.var_783 = 5;
    await Func.AutoDraw(1);
    Gvar.var_783 = 6;
    await Func.AutoDraw(1);
    Gvar.var_783 = 7;
    await Func.AutoDraw(1);
    Gvar.var_783 = 5;
    await Func.AutoDraw(1);
    Gvar.var_783 = 8;
    await Func.AutoDraw(1);
    Gvar.var_783 = 9;
    if (Gvar.var_1014 == 0) {
        await Func.setMessage("ﾍﾟﾘｰｺﾛ「ボス…  私です。ﾍﾟﾘｰｺﾛです」", "", 7, true, false, true);
        await Func.setMessage("「私ならば、今のボスのお力に", "  なれるでしょう…", 7, true, false, true);
        await Func.setMessage("「私が手に入れられるｱｲﾃﾑの情報を", "  そのパソコンに送信します。", 7, true, false, true);
        await Func.setMessage("「少々費用はかかりますが、", "  必ず手に入れてみせます。", 7, true, false, true);
        await Func.setMessage("「ｱｲﾃﾑはダンジョンの１階に", "  届けておきましょう」", 7, true, false, true);
        Gvar.var_1014 = 1;
    }
    if (Gvar.var_991[0][1] == 0) {
        Gvar.var_1013 = 0;
    }
    if (Gvar.var_1013 != 0) {
        await Func.setMessage("ﾍﾟﾘｰｺﾛ「ボス…何を仕入れてきましょう」", "", 7, true, false, true);
    }
    if (Gvar.var_1013 == 0) {
        await Func.setMessage("ﾍﾟﾘｰｺﾛ「ボス…まだ何も手に入りません」", "", 7, true, false, true);
    }
    await Func.AutoDraw(5);
    if (Gvar.var_1013 == 0) {
        await Func.AutoDraw(10);
        await Func.func0856();
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
    }
    await Func.func051(); // キー入力待ち処理
    Gvar.var_1206 = 1;
    Gvar.var_1881 = Gvar.var_1013 * 20 + 37 + 30;
    Gvar.Y_axis_item_position = 45;
    Gvar.var_225 = 1;
    await Func.func0858();
    return;
}

export {func0857}
