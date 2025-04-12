import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// NPC ロッコ・バロッコ所長に話しかけた時のメッセージ処理
async function func835(this: any) {
    Adap.dbgprt(835);
    Gvar.var_243 = 0;
    if (Gvar.var_524 >= 1) { // 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
        await Func.setMessage1("ﾛｯｺ･ﾊﾞﾛｯｺ所長",
                                "「『鉄獄』に挑戦してみますか？」", 7, false, false, true);
    }
    if (Gvar.var_524 == 0) { // 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
        await Func.setMessage1("「私はｸﾞﾘｰﾝ･ﾄﾞﾙﾌｨﾝ･ｽﾄﾘｰﾄ刑務所の",
                                "  所長、ﾛｯｺ･ﾊﾞﾛｯｺです。", 7, true, false, true);

        await Func.setMessage1("私の隣にいるこの彼女はぁー",
                                "ｱｼｽﾀﾝﾄの『ｼｬｰﾛｯﾄ』です。", 7, true, false, true);

        await Func.setMessage1("つい先日の話ですが…", "", 7, true, false, true);

        await Func.setMessage1("ｸﾞﾘｰﾝ･ﾄﾞﾙﾌｨﾝ･ｽﾄﾘｰﾄ刑務所から",
                                "囚人が何人も脱獄してしまうという", 7, true, false, true);

        await Func.setMessage1("困った事件がおきてしまいました。", "", 7, true, false, true);

        await Func.setMessage1("誰であろーと逃げられないように",
                                "対策はとってあったのですが", 7, true, false, true);

        await Func.setMessage1("どうやら不十分だったようです", "", 7, true, false, true);

        await Func.setMessage1("そこで私は、絶対に誰にも脱獄されない",
                                "牢獄を作る事にしたのです。", 7, true, false, true);

        await Func.setMessage1("『石作り』では生温いようでしたので", "", 7, true, false, true);

        await Func.setMessage1("名づけて、『鉄獄』！", "", 7, true, false, true);

        await Func.setMessage1("そこであなたにお願いですが、",
                                "この牢獄がどれほど強固か", 7, true, false, true);

        await Func.setMessage1("ぜひ試していただきたいのです。", "", 7, true, false, true);

        await Func.setMessage1("【ここでYes/No選択】", "", 7, true, false, true);

        await Func.setMessage1("それではｼｬｰﾛｯﾄ、新しく入る",
                                "みなさんに『心構え』を", 7, true, false, true);

        await Func.setMessage1("説明してください。", "", 7, true, false, true);

        await Func.setMessage1("【ここでダンジョンの説明】", "", 7, true, false, true);

        await Func.setMessage1("それでは…  『鉄獄』に",
                            "挑戦してみますか？", 7, true, false, true);

        // 最後、フラグ更新
        Gvar.var_524 = 1;
    }
    await Func.func051(); // キー入力待ち処理
    Adap.DSPLAY(212); // メニュー画面を開くなどの効果音
    Gvar.var_245 = 19;
    Gvar.var_246 = 45;
    Gvar.var_546 = 1;
    Gvar.var_3203 = 1;
    Gvar.var_548 = 1; // 選択肢処理フラグON
    await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
    return;
}

export { func835 }
