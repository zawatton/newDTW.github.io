import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// プッチ神父のdisc効果
// 旧 func442
async function func442(this: any) {
        Adap.dbgprt(442);
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        if (Gvar.var_225 == Gvar.var_1967 && Gvar.var_1965 == 0) {
            await Func.setMessage("それは今使っているDISCです。", "", 7, true, false, false);
            await Func.AutoDraw(4);
            await Func.func051(); // キー入力待ち処理
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        Gvar.var_1945 = 0;
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.disc_rarity = Gvar.var_233[Gvar.var_225].Var13;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_1969 = Gvar.item_name;
        Gvar.var_1966 = Gvar.var_225;
        await Func.func437();
        if (Gvar.var_862[565][0] == 0 && Gvar.var_375 == 0) {
            Gvar.var_862[565][0] = 1;
            await Func.func492(); // アイテムリスト呼び出し
            await Func.setMessage("なんと" + Gvar.var_1938 + "は", "ﾌﾟｯﾁ神父のDISCだった！", 7, true, false, false);
        }
        Gvar.var_225 = Gvar.var_1966;
        if (Gvar.var_233[Gvar.var_225].Var12 != 1) {
            Gvar.var_1073 = Adap.rnd(6);
            if (Gvar.var_1073 == 0) {
                await Func.setMessage("「呪われるべきは このわたしだッ！」",
                                        "", 7, true, false, true);
            }
            if (Gvar.var_1073 == 1) {
                await Func.setMessage("    ドミネ・クオ・ヴァディス",
                                        "「どこへ行かれるのですか？」", 7, true, false, true);
            }
            if (Gvar.var_1073 == 2) {
                await Func.setMessage("「君の質問に付き合わなきゃあ",
                                        "  いけないのか？」", 7, true, false, true);
            }
            if (Gvar.var_1073 == 3) {
                await Func.setMessage("「ヒマつぶしなら他でやれ」",
                                        "", 7, true, false, true);
            }
            if (Gvar.var_1073 == 4) {
                await Func.setMessage("「落ちつくんだ…",
                                        "  素数を数えて落ちつくんだ…」", 7, true, false, true);
            }
            if (Gvar.var_1073 == 5) {
                await Func.setMessage("「聖なるものを犬にやるな」",
                                        "", 7, true, false, true);
            }
            await Func.setMessage("何も起こらなかった…",
                                    "", 7, false, false, false);
        }
        if (Gvar.var_233[Gvar.var_225].Var12 == 1) {
            await Func.setMessage("「神の御命においてしりぞけるッ！」",
                                    "", 7, true, false, true);
            Adap.DSPLAY(192);
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1355 = 1;
            await Func.AutoDraw(8);
            for (let cnt2 = 0; cnt2 < 13; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1355++;
                Gvar.var_198 = 1; // メッセージウィンドウ開く
                Gvar.var_300 = 0;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1355 = 0;
            await Func.setMessage("" + Gvar.var_1969 + "に",
                                    "かけられていた呪いが解けた。", 7, false, false, false);
            Gvar.var_233[Gvar.var_225].Var12 = 0;
            await Func.func426();
            await Func.func427();
            await Func.func428();
            if (Gvar.var_225 == Gvar.var_553) {
                Gvar.var_896 = 0;
            }
            if (Gvar.var_225 == Gvar.var_554) {
                Gvar.var_897 = 0;
            }
            if (Gvar.var_225 == Gvar.var_555) {
                Gvar.var_898 = 0;
            }
            if (Gvar.var_225 == 0) {
                Gvar.var_1979 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                Gvar.var_78[Gvar.var_1979].Var12 = 0;
            }
        }
        await Func.AutoDraw(6);
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func442}
