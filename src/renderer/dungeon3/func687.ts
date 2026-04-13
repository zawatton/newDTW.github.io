import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ウンガロを倒した時のメッセージ処理
// 旧 func687
async function func687(this: any) {
    Adap.dbgprt(687);
    await Func.setMessage("ｳﾝｶﾞﾛ「ウッガァ―――ッ！！」", "", 8, true, false, true);

    Gvar.var_3092 = 1;
    for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
        if (Gvar.var_83[Gvar.var_3092].Var0 != 143 && Gvar.var_83[Gvar.var_3092].Var31 != 5) {
            Gvar.var_83[Gvar.var_3092].Var0 = 0;
            Gvar.var_3093 = Gvar.var_83[Gvar.var_3092].Var1;
            Gvar.var_3094 = Gvar.var_83[Gvar.var_3092].Var2;
            Gvar.var_82[Gvar.var_3093][Gvar.var_3094] = 0;
            for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                Gvar.var_83[Gvar.var_3092][cnt3] = 0;
            }
        }
        Gvar.var_3092 = Gvar.var_3092 + 1;
    }
    Gvar.var_114 = 0;
    Gvar.var_463 = 0;
    Gvar.var_464 = 0;
    Gvar.var_461 = 0;
    Gvar.var_462 = 0;
    Adap.gsel(19);
    Adap.color(255, 255, 255);
    Adap.boxf(0, 0, 680, 680);
    Adap.gsel(0);
    Adap.DSPLAY(192);
    Gvar.var_311 = 255;
    await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
    Gvar.var_312 = 1;
    for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
        await Func.func337();
        Gvar.var_311 = Gvar.var_311 - 5;
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
    }
    Gvar.var_312 = 0;
    await Func.setMessage("ｳﾝｶﾞﾛ「オ…オレのスタンド",
                            "【ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨｰ】…」", 8, true, false, true);

    await Func.setMessage("ｳﾝｶﾞﾛ「この能力で、ダンジョン内を",
                            "ジョジョのキャラクターで」", 8, true, false, true);

    await Func.setMessage("ｳﾝｶﾞﾛ「埋め尽くしてやろうと",
                            "思っていたのによォ～～」", 8, true, false, true);

    await Func.setMessage("ｳﾝｶﾞﾛ「もうこの世界には…",
                            "希望も何もねえッ…」", 8, true, false, true);

    return;
}

export { func687 }
