import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 101 シルバーチャリオッツの発動処理
async function item101(this: any) {
        if (Gvar.var_420 != 0) {
            await Func.setMessage("チャリオッツは分身中だ。",
                                   "", 7, false, false, false);
            await Func.AutoDraw(5);

            Gvar.var_234 = 0;
            Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        Gvar.var_2299 = 1;
        Gvar.var_1845 = 1;
        await Func.func556();
        Gvar.var_83[Gvar.var_673].Var11 = 1;
        Gvar.var_2299 = 0;
        Gvar.var_1845 = 0;
        if (Gvar.var_2110 == 0) {
            await Func.setMessage("チャリオッツを出せる場所が無いぞ。",
                                   "", 7, false, false, false);
            await Func.AutoDraw(5);

            Gvar.var_234 = 0;
            Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        for (let cnt2 = 0; cnt2 < 7; ++cnt2) {
            Gvar.var_2299 = 1;
            Gvar.var_1845 = 1;
            await Func.func556();
            Gvar.var_83[Gvar.var_673].Var11 = 1;
            Gvar.var_2299 = 0;
            Gvar.var_1845 = 0;
        }
        Gvar.var_420 = 7;

        await Func.setMessage("ブラボー！",
                               "おお…  ブラボー！！", 7, false, false, true);

        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            Gvar.var_1259 = 1;
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1259 = 2;
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1259 = 3;
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1259 = 2;
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1259 = 1;
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
        }
        await Func.setMessage("フフフ･･･",
                               "感覚の目でよーく見てろ！", 7, false, true, true);

        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            Gvar.var_1259 = 1;
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1259 = 2;
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1259 = 3;
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1259 = 2;
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1259 = 1;
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
        }
        Gvar.var_1259 = 0;
        Gvar.var_199 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        for (let cnt2 = 0; cnt2 < Gvar.var_97 + 1; ++cnt2) {
            if (Gvar.var_83[Gvar.cnt2][0] == 146 && Gvar.var_83[Gvar.cnt2][31] == 5) {
                Gvar.var_83[Gvar.cnt3][11] = 0;
            }
        }
        Adap.DSPLAY(112); // 刀の切れる音 or 強化した時のシャキーン 効果音
        await Func.setMessage("これだ！  甲冑を外したスタンド",
                               "「シルバー・チャリオッツ」！", 7, false, true, false);

        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        await Func.AutoDraw(20);

        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}


export {item101}
