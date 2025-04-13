import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// NPC DIOとの会話メッセージ
async function func833(this: any) {
    Adap.dbgprt(833);
    Gvar.var_243 = 0;
    if (Gvar.var_523 == 0) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
        Gvar.var_3202 = 0;
        Gvar.var_480 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_224; ++cnt2) {
            if (Gvar.var_233[Gvar.var_480].Var0 == 396) {
                Gvar.var_3202 = 1;
            }
            if (Gvar.var_233[Gvar.var_480].Var0 >= 800 && Gvar.var_233[Gvar.var_480].Var0 < 900) {
                Gvar.var_484 = 1;
                Gvar.var_485 = Gvar.var_233[Gvar.var_480].Var6;
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] == 396) {
                        Gvar.var_3202 = 1;
                    }
                    Gvar.var_484 = Gvar.var_484 + 1;
                }
            }
            Gvar.var_480 = Gvar.var_480 + 1;
        }
        if (Gvar.var_3202 == 1) {

            await Func.setMessage("DIO「それは【ﾒｲﾄﾞ･ｲﾝ･ﾍﾌﾞﾝのDISC】！", "手に入れたのか…」", 7, false, false, true);

            Gvar.var_523 = 1;

            await Func.setMessage("DIO「ﾌﾟｯﾁよ、これで", "天国への扉は開かれたぞ！」", 7, true, false, true);
            await Func.setMessage("", "【一巡後の世界】に行けるようになった！", 7, true, false, true);
            await Func.setMessage("DIO「この先へは", "親友ﾌﾟｯﾁが導いてくれるだろう」", 7, true, false, true);
            await Func.setMessage("DIO「そうそう…", "ひとつ忠告しておこう」", 7, true, false, true);
        }
    }
    if (Gvar.var_523 == 0) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転

        await Func.setMessage("DIO「我々は【天国に行く方法】を", "      探している…」", 7, true, false, true);

        await Func.func051();
        Gvar.var_198 = 0;
        await Func.func009();
        return;
    }
    if (Gvar.var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転

        await Func.setMessage("DIO「【一巡後の世界】は", "無限に続く終わりのないダンジョンだ」", 7, true, false, true);
        await Func.setMessage("DIO「死ぬつもりで挑戦した方が良い」", "", 7, true, false, true);

        await Func.func051();
        Gvar.var_198 = 0;
        await Func.func009();
        return;
    }
    await Func.func834(); // ダンジョン「一巡後の世界」へ入った時の初期化処理
}

export { func833 }
