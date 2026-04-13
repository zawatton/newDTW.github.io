import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func809
async function func0864(this: any) {
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
    Gvar.var_783 = 12;
    await Func.AutoDraw(1);
    Gvar.var_783 = 13;
    if (Gvar.var_1039 == 0) {
        await Func.setMessage("ﾎﾟﾙﾎﾟ「ブフゥ～～～～…」", "", 7, true, false, true);
        await Func.setMessage("「ボス…ダンジョンの一人旅は危険です」", "", 7, true, false, true);
        await Func.setMessage("「ダンジョン内で仲間と出会えれば", "  冒険がグッと楽になるでしょう…」", 7, true, false, true);
        await Func.setMessage("「ブフゥ～～～…」", "", 7, true, false, true);
        await Func.setMessage("「しかし問題は、", "  毎回必ず出会えるわけではないところ」", 7, true, false, true);
        await Func.setMessage("「私ならば、有能な人材を", "  あらかじめ１階に呼ぶことが可能です」", 7, true, false, true);
        await Func.setMessage("「そのための費用として", "  2000Gかかってしまいますが…」", 7, true, false, true);
        await Func.setMessage("「ブフゥ～～～…」", "", 7, true, false, true);
        Gvar.var_1039 = 1;
    }
    if (Gvar.var_1040 == 1) {    
        await Func.setMessage("ﾎﾟﾙﾎﾟ「ﾚｸｲｴﾑの大迷宮１階に", "      ヒマなやつを呼んであります」", 7, true, false, true);
        await Func.func0867();
        return;
    }
    await Func.setMessage("ﾎﾟﾙﾎﾟ「ボス…  2000Gで", "      仲間を１階に呼んでおきますか？」", 7, true, false, true);
    await Func.func051(); // キー入力待ち処理
    Gvar.var_245 = 19;
    Gvar.var_246 = 45;
    Gvar.var_546 = 1;
    Gvar.var_3193 = 1;
    Gvar.var_548 = 1; // 選択肢処理フラグON
    await Func.func0898(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
    return;
}

export {func0864}
