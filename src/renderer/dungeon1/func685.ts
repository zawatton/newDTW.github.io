/**
 * func685 — func685 エンヤ婆を倒した時のメッセージ処理
 *
 * ダンジョン「ホテルの外」の各種設定
 *
 * (org原典: newDTW_dungeon1 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// エンヤ婆を倒した時のメッセージ処理
// 旧 func685
async function func685(this: any) {
    Adap.dbgprt(685);
    await Func.setMessage("ｴﾝﾔ婆「うぽわあ―――ッ！！」", "", 8, true, false, true);

    if (Gvar.var_123 == 0) {
        Gvar.y_axis_map_image = 10;
    }
    if (Gvar.var_123 != 0) {
        Gvar.var_396 = 10;
    }
    Gvar.var_103 = 1;
    Gvar.var_386 = 0;
    Gvar.var_3092 = 1;
    for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
        Gvar.var_83[Gvar.var_3092].Var6 = 0;
        Gvar.var_83[Gvar.var_3092].Var9 = 0;
        Gvar.var_83[Gvar.var_3092].Var11 = 0;
        Gvar.var_83[Gvar.var_3092].Var12 = 0;
        Gvar.var_83[Gvar.var_3092].Var13 = 0;
        Gvar.var_83[Gvar.var_3092].Var14 = 0;
        Gvar.var_83[Gvar.var_3092].Var15 = 0;
        Gvar.var_83[Gvar.var_3092].Var16 = 0;
        Gvar.var_83[Gvar.var_3092].Var17 = 0;
        Gvar.var_83[Gvar.var_3092].Var18 = 0;
        Gvar.var_83[Gvar.var_3092].Var19 = 0;
        if (Gvar.var_83[Gvar.var_3092].Var0 == 8 ||
            Gvar.var_83[Gvar.var_3092].Var0 == 24 ||
            Gvar.var_83[Gvar.var_3092].Var0 == 25) {
            Gvar.var_83[Gvar.var_3092].Var0 = 23;
        }
        Gvar.var_3092 = Gvar.var_3092 + 1;
    }
    Adap.gsel(19);
    Adap.color(255, 255, 255);
    Adap.boxf(0, 0, 680, 680);
    Adap.gsel(0);
    Gvar.var_311 = 255;
    Adap.DSPLAY(192);
    Gvar.var_312 = 1;
    for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
        await Func.func337(); // 自動メッセージ表示処理
        Gvar.var_311 = Gvar.var_311 - 5;
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
    }
    Gvar.var_312 = 0;
    if (Gvar.var_404 >= 1) {
        return;
    }
    await Func.setMessage("ｴﾝﾔ婆「う…  うそじゃ",
                            "このわしが  こんなこと……」", 8, true, false, true);

    await Func.setMessage("ｴﾝﾔ婆「しかし…おまえが求める物など", 
                            "こんなところにはないッ！」", 8, true, false, true);

    await Func.setMessage("ｴﾝﾔ婆「せいぜい他の場所を",
                            "探すんじゃなああああああ！」", 8, false, false, true);
    return;
}

export { func685 }
