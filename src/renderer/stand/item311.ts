/**
 * item311 — No = 311 チープトリックの発動処理
 *
 * 各スタンドの発動能力設定。
 *
 * (org原典: newDTW_item(スタンドdisc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 311 チープトリックの発動処理
async function item311(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_407 == 1 && Gvar.var_536 == 1 && Gvar.dungeon_number == Adap.int(Gvar.var_1068[12]) && Gvar.wallet >= 300) {
            await Func.func0980();
            return;
        }
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1321 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1321 = Gvar.var_1321 + 1;
        }
        await Func.setMessage("「おんぶして」  「ねっ！」",
                               "        「おんぶして…」", 7, false, false, true);
        await Func.AutoDraw(10);

        await Func.setMessage("「あなたが今のぼくの本体なんです！」",
                               "  「わかる？」  「ね？」", 7, false, true, true);
        await Func.AutoDraw(10);

        await Func.setMessage("「ぼくの能力は人に囁くだけ」",
                               "    「ね？」「誰か助け呼ぶの？」", 7, false, true, true);
        await Func.AutoDraw(10);

        await Func.setMessage("「イヒヒ！」  「ねっ！」",
                               "      「イヒヒヒヒ」", 7, false, true, true);
        await Func.AutoDraw(10);

        await Func.setMessage("「ポコチンまで干からびさせて",
                               "    死ぬのはおまえだッ！」", 7, false, true, true);
        await Func.AutoDraw(10);

        await Func.setMessage("「どこへ行こうとも…",
                               "    疲れるだけだよ」」", 7, false, true, true);
        await Func.AutoDraw(10);

        await Func.setMessage("「疲労とダメージで",
                               "    ぶっ倒れるのが先か」", 7, false, true, true);
        await Func.AutoDraw(10);

        await Func.setMessage("「精神がまいっちまって",
                               "    自滅するのが先か…」", 7, false, true, true);
        await Func.AutoDraw(10);

        Adap.DSPLAY(164);
        await Func.setMessage("最大精神力が１下がってしまった！",
                               "", 7, false, true, false);
        await Func.AutoDraw(10);

        Gvar.var_566 = Gvar.var_566 - 1;
        if (Gvar.var_566 <= 0) {
            Gvar.var_566 = 0;
        }
        Gvar.var_565 = Gvar.var_565 - 1;
        if (Gvar.var_565 < 0) {
            Gvar.var_565 = 0;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1321 = 0;
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item311}
