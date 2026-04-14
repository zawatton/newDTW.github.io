/**
 * func074 — func074 モンスターハウス時のメッセージ処理
 *
 * (org原典: newDTW_dungeon_main / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// モンスターハウス時のメッセージ処理
// 旧 func074
async function func074(this: any) {
    Adap.dbgprt(74);
    Gvar.var_101 = 1;
    await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
    Gvar.var_390 = 1;
    for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
        Gvar.var_83[Gvar.var_390].Var12 = 0;
        if (Gvar.var_96 == 8 && Gvar.var_83[Gvar.var_390].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_390].Var31 != 5) {
            Gvar.var_83[Gvar.var_390].Var17 = 1;
        }
        Gvar.var_390 = Gvar.var_390 + 1;
    }
    Adap.DSPLAY(150);
    
    if (Gvar.var_96 == 1) {
        await Func.setMessage("モンスターハウスだ！", "", 7, false, false, false);
        await Music.func132(); // 効果音
    }
    if (Gvar.var_96 == 2) {
        await Func.setMessage("ﾊﾞｯﾄﾞ･ｶﾝﾊﾟﾆｰ･ﾊｳｽ だ！", "", 7, false, false, false);
        await Music.func130(); // 効果音
    }
    if (Gvar.var_96 == 3) {
        await Func.setMessage("ﾊｲｳｪｲｽﾀｰ･ﾙｰﾑ だ！", "", 7, false, false, false);
        await Music.func131(); // 効果音
    }
    if (Gvar.var_96 == 4) {
        await Func.setMessage("吸血鬼ハウスだ！", "", 7, false, false, false);
        await Music.func132(); // 効果音
    }
    if (Gvar.var_96 == 5) {
        await Func.setMessage("スタンドハウスだ！", "", 7, false, false, false);
        await Music.func132(); // 効果音
    }
    if (Gvar.var_96 == 6) {
        await Func.setMessage("杜王町ハウスだ！", "", 7, false, false, false);
        await Music.func129(); // 効果音
    }
    if (Gvar.var_96 == 7) {
        await Func.setMessage("水族館だ！", "", 7, false, false, false);
        await Music.func133(); // 効果音
    }
    if (Gvar.var_96 == 8) {
        await Func.setMessage("ファイトクラブだッ！", "", 7, false, false, false);
        await Music.func134(); // 効果音
    }
    if (Gvar.var_96 == 9) {
        await Func.setMessage("西戸ハウスだ！", "", 7, false, false, false);
        await Music.func132(); // 効果音
    }
    await Func.AutoDraw(25);
    Gvar.var_96 = 0;
    return;
}

export { func074 }

