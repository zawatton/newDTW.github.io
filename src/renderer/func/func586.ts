/**
 * func586 — func586 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func586(this: any) {
        Adap.dbgprt(586);
        Gvar.var_991 = "";
        Gvar.var_2404 = "";
        if (Gvar.var_990 == 1) {
            Gvar.var_991 = "ｾﾄ神の罠";
            Gvar.var_2404 = "精神力が下がってしまうぞ";
            Gvar.var_2405 = "敵が踏むと攻撃力が下がるぞ";
        }
        if (Gvar.var_990 == 2) {
            Gvar.var_991 = "ｼﾞｪｲﾙﾊｳｽﾛｯｸの罠";
            Gvar.var_2404 = "地形やアイテムの場所を忘れるぞ";
            Gvar.var_2405 = "敵が踏むとﾃﾞｨｱﾎﾞﾛの顔を忘れるぞ";
        }
        if (Gvar.var_990 == 3) {
            Gvar.var_991 = "ﾀﾞｲﾊﾞｰﾀﾞｳﾝの罠";
            Gvar.var_2404 = "殴られてダメージを喰らうぞ";
            Gvar.var_2405 = "敵が踏むと殴られてﾀﾞﾒｰｼﾞを喰らうぞ";
        }
        if (Gvar.var_990 == 4) {
            Gvar.var_991 = "ｱﾝﾀﾞｰﾜｰﾙﾄﾞの罠";
            Gvar.var_2404 = "この階に罠をたくさん掘り出すぞ";
            Gvar.var_2405 = "敵が踏んでも同じ効果だぞ";
        }
        if (Gvar.var_990 == 5) {
            Gvar.var_991 = "猫袋";
            Gvar.var_2404 = "玉美が現れるぞ";
            Gvar.var_2405 = "敵が踏むと味方の玉美が現れるぞ";
        }
        if (Gvar.var_990 == 6) {
            Gvar.var_991 = "ﾀﾞｰﾋﾞｰ弟の落とし穴";
            Gvar.var_2404 = "下の階に落ちてしまうぞ";
            Gvar.var_2405 = "敵が踏むとどこかへ引きずり込まれるぞ";
        }
        if (Gvar.var_990 == 7) {
            Gvar.var_991 = "ﾛｰﾘﾝｸﾞｽﾄｰﾝｽﾞの罠";
            Gvar.var_2404 = "HPが半分になってしまうぞ";
            Gvar.var_2405 = "敵が踏むとHPが半分になるぞ";
        }
        if (Gvar.var_990 == 8) {
            Gvar.var_991 = "ﾎﾜｲﾄｱﾙﾊﾞﾑの罠";
            Gvar.var_2404 = "体が凍って動けなくなるぞ";
            Gvar.var_2405 = "敵が踏むと凍って動かなくなるぞ";
        }
        if (Gvar.var_990 == 9) {
            Gvar.var_991 = "ボヨヨンの罠";
            Gvar.var_2404 = "ボヨヨンとどこかに飛ばされるぞ";
            Gvar.var_2405 = "敵が踏むとどこかへ飛ばされるぞ";
        }
        if (Gvar.var_990 == 10) {
            Gvar.var_991 = "ｸﾗﾌﾄﾜｰｸの罠";
            Gvar.var_2404 = "その場所にしばらく固定されるぞ";
            Gvar.var_2405 = "敵が踏むと攻撃するまで固定されるぞ";
        }
        if (Gvar.var_990 == 11) {
            Gvar.var_991 = "ﾜﾑｳの影";
            Gvar.var_2404 = "ﾜﾑｳに蹴られてｱｲﾃﾑが壊れるぞ";
            Gvar.var_2405 = "敵が踏むとﾜﾑｳに蹴られるぞ";
        }
        if (Gvar.var_990 == 12) {
            Gvar.var_991 = "DIOの罠";
            Gvar.var_2404 = "ロードローラーで押しつぶされるぞ";
            Gvar.var_2405 = "敵が踏むとﾛｰﾄﾞﾛｰﾗｰで押しつぶされるぞ";
        }
        if (Gvar.var_990 == 13) {
            Gvar.var_991 = "ｽｶｲ･ﾊｲの罠";
            Gvar.var_2404 = "まぶたがストーンと落ちてくるぞ";
            Gvar.var_2405 = "敵が踏むと盲目になるぞ";
        }
        if (Gvar.var_990 == 14) {
            Gvar.var_991 = "ドジュウの罠";
            Gvar.var_2404 = "ピッツァがドジュウと焦げてしまうぞ";
            Gvar.var_2405 = "敵が踏むと消し炭になるぞ";
        }
        if (Gvar.var_990 == 15) {
            Gvar.var_991 = "ﾍﾌﾞﾝｽﾞ･ﾄﾞｱｰの罠";
            Gvar.var_2404 = "いろいろなことが起こるぞ";
            Gvar.var_2405 = "敵が踏むと能力を封じるぞ";
        }
        if (Gvar.var_990 == 16) {
            Gvar.var_991 = "ﾄｰｷﾝｸﾞ･ﾍｯﾄﾞの罠";
            Gvar.var_2404 = "体が思うように動かなくなるぞ";
            Gvar.var_2405 = "敵が踏むと混乱するぞ";
        }
        if (Gvar.var_990 == 17) {
            Gvar.var_991 = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰの地雷";
            Gvar.var_2404 = "足をやられて動きが遅くなるぞ";
            Gvar.var_2405 = "敵が踏むと動きが遅くなるぞ";
        }
        if (Gvar.var_990 == 18) {
            Gvar.var_991 = "ﾊﾞｽﾃﾄ女神の罠";
            Gvar.var_2404 = "踏むごとに磁力が強くなるぞ";
            Gvar.var_2405 = "何かが飛んでくるぞ ﾚﾍﾞﾙに応じて強さが変わるぞ";
        }
        if (Gvar.var_990 == 19) {
            Gvar.var_991 = "ラクガキの罠";
            Gvar.var_2404 = "クリームが出現するぞ";
            Gvar.var_2405 = "敵が踏んでも同じ効果だぞ";
        }
        if (Gvar.var_990 == 20) {
            Gvar.var_991 = "ドヒュウの罠";
            Gvar.var_2404 = "ドヒュウと後ろにすっ飛ぶぞ";
            Gvar.var_2405 = "敵が踏むとﾄﾞﾋｭｳと後ろにすっ飛ばすぞ";
        }
        if (Gvar.var_990 == 21) {
            Gvar.var_991 = "ｴﾝﾌﾟﾚｽの罠";
            Gvar.var_2404 = "大声で叫んでフロアの敵を起こすぞ";
            Gvar.var_2405 = "敵が踏むとその敵の位置がわかるぞ";
        }
        if (Gvar.var_990 == 22) {
            Gvar.var_991 = "ﾊｲｳｪｲ･ｽﾀｰの罠";
            Gvar.var_2404 = "養分を取られてお腹が減るぞ";
            Gvar.var_2405 = "敵が踏むとその敵の養分を吸い取るぞ";
        }
        if (Gvar.var_990 == 23) {
            Gvar.var_991 = "ﾜｲｱｰﾄﾞの罠";
            Gvar.var_2404 = "釣られて荷物をバラ撒くぞ";
            Gvar.var_2405 = "敵が踏むとその敵の荷物をバラまくぞ";
        }
        if (Gvar.var_990 == 24) {
            Gvar.var_991 = "ﾘﾝﾌﾟ･ﾋﾞｽﾞｷｯﾄの罠";
            Gvar.var_2404 = "透明な何者かを呼び出すぞ";
            Gvar.var_2405 = "敵が踏んでも同じ効果だぞ";
        }
        if (Gvar.var_990 == 25) {
            Gvar.var_991 = "ネズミ捕りの罠";
            Gvar.var_2404 = "毒針でｽﾀﾝﾄﾞが弱まることがあるぞ";
            Gvar.var_2405 = "敵が踏むと体が溶けて防御ができなくなるぞ";
        }
        if (Gvar.var_990 == 26) {
            Gvar.var_991 = "ﾎﾜｲﾄｽﾈｲｸの罠";
            Gvar.var_2404 = "装備が剥がれてしまうぞ";
            Gvar.var_2405 = "敵が踏むと何かのﾃﾞｨｽｸを抜き取るぞ";
        }
        if (Gvar.var_990 == 27) {
            Gvar.var_991 = "ﾏﾘﾘﾝﾏﾝｿﾝの罠";
            Gvar.var_2404 = "お金を奪われてしまうぞ";
            Gvar.var_2405 = "敵が踏んでも同じ効果だぞ";
        }
        if (Gvar.var_990 == 28) {
            Gvar.var_991 = "ｵｴｺﾓﾊﾞの罠";
            Gvar.var_2404 = "アイテムを爆弾にされてしまうぞ";
            Gvar.var_2405 = "敵が踏むとその敵にﾋﾟﾝをつけるぞ";
        }
        if (Gvar.var_990 == 29) {
            Gvar.var_991 = "ﾁｰﾌﾟﾄﾘｯｸの罠";
            Gvar.var_2404 = "猫を呼ぶぞ";
            Gvar.var_2405 = "敵が踏んでも同じ効果だぞ";
        }
        if (Gvar.var_990 == 30) {
            Gvar.var_991 = "血の槍の罠";
            Gvar.var_2404 = "血の槍だ";
            Gvar.var_2405 = "敵が踏んでも同じ効果だぞ";
        }
        if (Gvar.var_990 == 31) {
            Gvar.var_991 = "ｴｺｰｽﾞACT2の罠";
            Gvar.var_2404 = "ボヨヨンその２";
            Gvar.var_2405 = "敵が踏んでも同じ効果だぞ";
        }
        if (Gvar.var_990 == 32) {
            Gvar.var_991 = "プロペラの罠";
            Gvar.var_2404 = "ストレングスの罠だ";
            Gvar.var_2405 = "敵が踏んでも同じ効果だぞ";
        }
        if (Gvar.var_990 == 33) {
            Gvar.var_991 = "パイプの罠";
            Gvar.var_2404 = "ストレングスの罠だ";
            Gvar.var_2405 = "敵が踏んでも同じ効果だぞ";
        }
        if (Gvar.var_990 == 34) {
            Gvar.var_991 = "クレーンの罠";
            Gvar.var_2404 = "ストレングスの罠だ";
            Gvar.var_2405 = "敵が踏んでも同じ効果だぞ";
        }
        if (Gvar.var_990 == 35) {
            Gvar.var_991 = "";
            Gvar.var_2404 = "";
            Gvar.var_2405 = "";
        }
        if (Gvar.var_990 == 36) {
            Gvar.var_991 = "ｽﾋﾟｰﾄﾞ･ｷﾝｸﾞの罠";
            Gvar.var_2404 = "頭に熱を集中し気絶するぞ";
            Gvar.var_2405 = "敵が踏むと頭に熱を集中させ気絶させるぞ";
        }
        if (Gvar.var_990 == 37) {
            Gvar.var_991 = "水たまり";
            Gvar.var_2404 = "水たまりだ";
            Gvar.var_2405 = "水たまりだ";
        }
        if (Gvar.var_990 == 77) {
            Gvar.var_268 = Gvar.var_2709;
            await Func.func658();
            Gvar.var_991 = "人質の" + Gvar.var_1872;
            Gvar.var_2404 = "人質だ";
        }
        if (Gvar.var_990 == 78) {
            Gvar.var_991 = "ｿﾌﾄ･ﾏｼｰﾝの罠";
            Gvar.var_2404 = "ｿﾌﾄﾏｼｰﾝの罠だ";
        }
        if (Gvar.var_990 == 79) {
            Gvar.var_991 = "ﾀｽｸの穴";
            Gvar.var_2404 = "ﾀｽｸの穴だ";
        }
        if (Gvar.var_990 == 80) {
            Gvar.var_991 = "砂DIOの罠";
            Gvar.var_2404 = "砂DIOだ";
        }
        if (Gvar.var_990 == 81) {
            Gvar.var_991 = "ｷｯｽのｼｰﾙ";
            Gvar.var_2404 = "シールだ";
        }
        if (Gvar.var_990 == 82) {
            Gvar.var_991 = "穴";
            Gvar.var_2404 = "穴だ";
        }
        if (Gvar.var_990 == 83) {
            Gvar.var_991 = "ｼｬﾎﾞﾝﾗﾝﾁｬｰ";
            Gvar.var_2404 = "波紋を帯びたｼｬﾎﾞﾝだ";
        }
        if (Gvar.var_990 == 84) {
            Gvar.var_991 = "上り階段の記憶";
            Gvar.var_2404 = "地上に帰れるぞ";
        }
        if (Gvar.var_990 == 85) {
            Gvar.var_991 = "幽霊部屋の入口";
            Gvar.var_2404 = "幽霊部屋に入れるぞ";
        }
        if (Gvar.var_990 == 86) {
            Gvar.var_991 = "悪魔の虹";
            Gvar.var_2404 = "カタツムリになるぞ";
        }
        if (Gvar.var_990 == 87) {
            Gvar.var_991 = "ｴｺｰｽﾞの音";
            Gvar.var_2404 = "音を貼り付けて混乱させるぞ";
        }
        if (Gvar.var_990 == 88) {
            Gvar.var_991 = "ﾏﾝ･ｲﾝ･ｻﾞ･ﾐﾗｰの鏡";
            Gvar.var_2404 = "引きずり込んで自分と位置を替えるぞ";
        }
        if (Gvar.var_990 == 89) {
            Gvar.var_991 = "ﾊｲｳｪｲ･ｽﾀｰの罠";
            Gvar.var_2404 = "養分を吸い取るぞ";
        }
        if (Gvar.var_990 == 90) {
            Gvar.var_991 = "ドッグォンの罠";
            Gvar.var_2404 = "ドッグォンと吹き飛ばすぞ";
        }
        if (Gvar.var_990 == 91) {
            Gvar.var_991 = "ラバーズの罠";
            Gvar.var_2404 = "ラバーズが現れるぞ";
        }
        if (Gvar.var_990 == 92) {
            Gvar.var_991 = "法王の結界の罠";
            Gvar.var_2404 = "ｴﾒﾗﾙﾄﾞｽﾌﾟﾗｯｼｭを発射するぞ";
        }
        if (Gvar.var_990 == 93) {
            Gvar.var_991 = "ﾎﾙｽ神の罠";
            Gvar.var_2404 = "体が凍って動けなくなるぞ";
        }
        if (Gvar.var_990 == 94) {
            Gvar.var_991 = "ﾀﾞｲﾊﾞｰﾀﾞｳﾝの罠";
            Gvar.var_2404 = "殴られてダメージを喰らうぞ";
        }
        if (Gvar.var_990 == 95) {
            Gvar.var_991 = "ﾀﾞｲｱｰさんの罠";
            Gvar.var_2404 = "波紋でだんだん体が溶かされるぞ";
            Gvar.var_2405 = "敵が踏むと波紋の薔薇で失明するぞ";
        }
        if (Gvar.var_990 == 96) {
            Gvar.var_991 = "ダミー";
        }
        if (Gvar.var_990 == 97) {
            Gvar.var_991 = "ヒント";
        }
        if (Gvar.var_990 == 98) {
            Gvar.var_991 = "ｶﾞﾗｽの破片";
            Gvar.var_2405 = "ﾊﾝｸﾞﾄﾞﾏﾝから攻撃されるぞ";
            Gvar.var_2405 = "敵が踏むとﾊﾝｸﾞﾄﾞﾏﾝがﾀﾞﾒｰｼﾞを与えるぞ";
        }
        if (Gvar.var_990 == 99) {
            Gvar.var_991 = "ｼﾞｯﾊﾟｰ";
        }
        if (Gvar.var_990 == 100) {
            Gvar.var_991 = "ﾔﾄﾞｸｶﾞｴﾙ";
        }
        Gvar.var_1192 = 0;
        if (Gvar.var_83[Gvar.var_673].Var0 == 47 || Gvar.var_83[Gvar.var_673].Var0 == 67) {
            return;
        }
        Gvar.var_2819 = Gvar.var_673;
        Gvar.var_402 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
        Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
        await Func.func626(); // 敵リスト
        Gvar.var_971 = Gvar.enemy_defence;
        Gvar.enemy_list = Gvar.var_83[Gvar.var_2819].Var0;
        await Func.func626(); // 敵リスト
        Gvar.var_2820 = Gvar.enemy_power;
        if (Gvar.var_83[Gvar.var_402].Var0 == 53) {
            Gvar.var_971 = Gvar.enemy_defence;
        }
        if (Gvar.var_83[Gvar.var_2819].Var39 >= 2) {
            Gvar.var_2820 = Math.floor(Gvar.var_2820 * (Gvar.var_83[Gvar.var_2819].Var39 * 2 + 10) / 10);
        }
        if (Gvar.var_83[Gvar.var_402].Var39 >= 2) {
            if (Gvar.var_83[Gvar.var_402].Var31 == 4 || Gvar.var_83[Gvar.var_402].Var31 == 5) {
                Gvar.var_971 = Math.floor(Gvar.var_971 * (Gvar.var_83[Gvar.var_402].Var39 * 2 + 10) / 10);
            }
        }
        if (Gvar.var_83[Gvar.var_2819].Var25 >= 1 && Gvar.var_83[Gvar.var_2819].Var25 <= 50) {
            Gvar.var_2820 = Gvar.var_2820 + Gvar.var_83[Gvar.var_2819].Var25;
        }
        if (Gvar.var_83[Gvar.var_2819].Var25 >= 51 && Gvar.var_83[Gvar.var_2819].Var25 < 99) {
            Gvar.var_2820 = Gvar.enemy_power - (Gvar.var_83[Gvar.var_2819].Var25 - 50);
            if (Gvar.var_2820 <= 1) {
                Gvar.var_2820 = 1;
            }
        }
        Gvar.var_949 = Math.floor(Gvar.var_2820 * (Gvar.var_2820 + Gvar.var_2820) / 16) + Gvar.var_2820;
        for (let cnt1 = 0; cnt1 < Gvar.var_971; ++cnt1) {
            Gvar.var_949 = Math.floor(Gvar.var_949 * 15 / 16);
        }
        Gvar.var_2817 = Adap.rnd(33);
        Gvar.var_2817 = Gvar.var_2817 + 111;
        Gvar.var_209 = Math.floor(Gvar.var_949 * Gvar.var_2817 / 128) + 1;
        if (Gvar.var_83[Gvar.var_673].Var0 == 141) {
            Gvar.var_2821 = 1;
        }
        Gvar.var_402 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
        Gvar.var_403 = "";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_2196 = 1;
        await Func.func705();
        Gvar.var_2821 = 0;
        Gvar.var_2196 = 0;
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        return;
}

export {func586}
