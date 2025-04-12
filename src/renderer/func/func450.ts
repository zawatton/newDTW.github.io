import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func450(this: any) {
        Adap.dbgprt(450);
        if (Gvar.var_1991 == 6) {
            await Func.func451(); // ジャッジメントの問いに対して、願いの数を増やしてくれと選択した時の動作処理
            return;
        }
        Gvar.var_1207 = 0;
        await Func.setMessage1("「Ｈａｉｌ  ２  Ｕ ！」",
                                "    （君に幸あれ！）", 7, false, false, false);
        await Func.AutoDraw(6);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1582 = 0;
        Gvar.var_1586 = 1;
        Adap.DSPLAY(168);
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1586++;
        }
        Gvar.var_1586 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        if (Gvar.var_1991 == 1) {
            await Func.func452(); // ジャッジメントの問いに対して、お金持ちになりたいと選択した時の動作処理
            return;
        }
        if (Gvar.var_1991 == 2) {
            await Func.func453(); // ジャッジメントの問いに対して、満腹になりたいと選択した時の動作処理
            return;
        }
        if (Gvar.var_1991 == 3) {
            await Func.func454(); // ジャッジメントの問いに対して、体力を回復させてくれと選択した時の動作処理
            return;
        }
        if (Gvar.var_1991 == 4) {
            await Func.func455(); // ジャッジメントの問いに対して、敵の動きをとめてくれと選択した時の動作処理
            return;
        }
        if (Gvar.var_1991 == 5) {
            await Func.func456(); // ジャッジメントの問いに対して、アヴドゥルを生き返らせてくれと選択した時の動作処理
            return;
        }
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func450}
