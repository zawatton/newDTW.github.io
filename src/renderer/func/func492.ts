/**
 * func492 — func492 各アイテムリスト
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func492(this: any) {
        Adap.dbgprt(492);
        Gvar.item_name = "";
        Gvar.item_description1 = "";
        Gvar.effects_message = "";
        Gvar.item_ability_description = "";
        Gvar.item_message1 = "";
        Gvar.item_message2 = "";
        Gvar.var_2173 = "";
        Gvar.buying_price = 0;
        Gvar.var_1984 = 0;
        Gvar.var_812 = 0;
        Gvar.var_2174 = 0;
        Gvar.var_2039 = "";
        Gvar.var_2175 = "";
        /*
        if (Gvar.belongings_item_list == 0) {
        Gvar.item_name = "";
        Gvar.item_description1 = "";
        Gvar.effects_message = "";
        Gvar.item_ability_description = "";
        Gvar.item_message1 = "";
        Gvar.item_message2 = "";
        Gvar.var_2173 = "";
        Gvar.buying_price = 0;
        Gvar.var_1984 = 0;
        Gvar.var_812 = 0;
        Gvar.var_2174 = 0;
        Gvar.var_2039 = "";
        Gvar.var_2175 = "";
        }
        */
        if (Gvar.belongings_item_list == 1) {
            Gvar.buying_price = 0;
            Gvar.item_name = "お金";
            Gvar.item_description1 = "[お金]";
            Gvar.effects_message = "";
            Gvar.item_ability_description = "";
        }
        if (Gvar.belongings_item_list == 100) {
            Gvar.buying_price = 17000;
            Gvar.item_name = "ｽﾀｰ･ﾌﾟﾗﾁﾅのDISC";
            Gvar.item_description1 = "攻撃:8  防御:4";
            Gvar.effects_message = "[発動]射撃攻撃を防げるようになるぞ";
            Gvar.item_ability_description = "３方向に攻撃できるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 7; // 対応コミック部。7はスタープラチナ専用??
            Gvar.var_2173 = "星";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "弾丸止め";
        }
        if (Gvar.belongings_item_list == 101) {
            Gvar.buying_price = 14000;
            Gvar.item_name = "ｼﾙﾊﾞｰﾁｬﾘｵｯﾂのDISC";
            Gvar.item_description1 = "攻撃:4  防御:1";
            Gvar.effects_message = "[発動]５ターンの間、残像を出現させるぞ";
            Gvar.item_ability_description = "時々２回連続で攻撃できるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 9;
            Gvar.var_2173 = "銀";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "ブラボー！";
        }
        if (Gvar.belongings_item_list == 102) {
            Gvar.buying_price = 19000;
            Gvar.item_name = "ｷﾝｸﾞ･ｸﾘﾑｿﾞﾝのDISC";
            Gvar.item_description1 = "攻撃:9  防御:3";
            Gvar.effects_message = "[発動]５ターンの時間が消し飛ぶぞ";
            Gvar.item_ability_description = "裏切り者に大ダメージを与えるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 5;
            Gvar.var_2173 = "王";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "時よ消し飛べ！";
        }
        if (Gvar.belongings_item_list == 103) {
            Gvar.buying_price = 650;
            Gvar.item_name = "ｴｺｰｽﾞACT3のDISC";
            Gvar.item_description1 = "攻撃:2  防御:1";
            Gvar.effects_message = "[発動]目の前の敵を鈍足状態にするぞ";
            Gvar.item_ability_description = "時々相手を遅くさせるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 8;
            Gvar.var_2173 = "鈍";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "ACT 3 FREEZE ！";
        }
        if (Gvar.belongings_item_list == 104) {
            Gvar.buying_price = 700;
            Gvar.item_name = "ｻﾞ･ﾊﾝﾄﾞのDISC";
            Gvar.item_description1 = "攻撃:7  防御:1";
            Gvar.effects_message = "[発動]遠くの敵やアイテムを引き寄せるぞ";
            Gvar.item_ability_description = "壁や罠をガオンと消せるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 4;
            Gvar.var_2173 = "手";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "空間を削り取る！";
        }
        if (Gvar.belongings_item_list == 105) {
            Gvar.buying_price = 1250;
            Gvar.item_name = "ﾁﾘﾍﾟｯﾊﾟｰのDISC";
            Gvar.item_description1 = "攻撃:3  防御:2";
            Gvar.effects_message = "[発動]部屋内の敵を一定時間盲目にするぞ";
            Gvar.item_ability_description = "連続空振りすると次に会心が出るぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 4;
            Gvar.var_2173 = "電";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "電力放出！";
        }
        if (Gvar.belongings_item_list == 106) {
            Gvar.buying_price = 4600;
            Gvar.item_name = "ｸﾚｲｼﾞｰ･DのDISC";
            Gvar.item_description1 = "攻撃:7  防御:1";
            Gvar.effects_message = "[発動]このDISCと引き換えにDISCを合成するぞ";
            Gvar.item_ability_description = "会心の一撃が多く出るぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 4;
            Gvar.var_2173 = "狂";
            Gvar.var_2174 = 2;
            Gvar.var_2039 = "合成";
        }
        if (Gvar.belongings_item_list == 107) {
            Gvar.buying_price = 750;
            Gvar.item_name = "ﾃﾞｽ･13のDISC";
            Gvar.item_description1 = "攻撃:2  防御:1";
            Gvar.effects_message = "[発動]隣接した敵を眠らせるぞ";
            Gvar.item_ability_description = "寝ている敵を起こしにくいぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 3;
            Gvar.var_2173 = "夢";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "ラリホ～ッ！";
            if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                Gvar.effects_message = "[★発動]部屋内の敵を眠らせるぞ";
            }
        }
        if (Gvar.belongings_item_list == 108) {
            Gvar.buying_price = 16000;
            Gvar.item_name = "ｽﾃｨｯｷｰﾌｨﾝｶﾞｰｽﾞのDISC";
            Gvar.item_description1 = "攻撃:4  防御:3";
            Gvar.effects_message = "[発動]キーを押すまで敵をやりすごせるぞ";
            Gvar.item_ability_description = "２マス先まで攻撃できるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 5;
            Gvar.var_2173 = "指";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "去るのを待つんだ";
        }
        if (Gvar.belongings_item_list == 109) {
            Gvar.buying_price = 13200;
            Gvar.item_name = "ﾏｼﾞｼｬﾝｽﾞﾚｯﾄﾞのDISC";
            Gvar.item_description1 = "攻撃:6  防御:2";
            Gvar.effects_message = "[発動]部屋内の敵にランダムでダメージＳ";
            Gvar.item_ability_description = "体力満タンでＣＦＨが撃てるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 3;
            Gvar.var_2173 = "赤";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "ｸﾛｽﾌｧｲｱｰﾊﾘｹｰﾝ";
            if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                Gvar.effects_message = "[★発動]部屋内の敵にランダムでダメージＳ";
            }
        }
        if (Gvar.belongings_item_list == 110) { // Ver0.1401にて追加。
            Gvar.buying_price = 8200;
            Gvar.item_name = "B･D･ザ･ハウスのDISC";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]次の階を部屋の幽霊にするぞ";
            Gvar.item_ability_description = "稀に消費アイテムが2度使えるぞ"; // 「com1=なんと康一のDISCは com2=アイテムの幽霊として復活した!」
            Gvar.var_812 = 4; // 装備区分: 能力
            Gvar.var_1984 = 6; // 対応コミック部
            Gvar.var_2173 = "幽";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "去るのを待つんだ";
        }
        if (Gvar.belongings_item_list == 111) {
            Gvar.buying_price = 15600;
            Gvar.item_name = "ｻﾞ･ﾜｰﾙﾄﾞのDISC";
            Gvar.item_description1 = "攻撃:9  防御:4";
            Gvar.effects_message = "[発動]5ﾀｰﾝの間、時間が止まるぞ";
            Gvar.item_ability_description = "ジョースターの血統に大ダメージ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 3;
            Gvar.var_2173 = "世";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "時よ止まれ！";
        }
        if (Gvar.belongings_item_list == 112) {
            Gvar.buying_price = 11700;
            Gvar.item_name = "ｷﾗｰ･ｸｨｰﾝのDISC";
            Gvar.item_description1 = "攻撃:5  防御:3";
            Gvar.effects_message = "[発動]目の前にｼｱｰﾊｰﾄｱﾀｯｸを呼び出すぞ";
            Gvar.item_ability_description = "杜王町住人に大ダメージを与えるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 4;
            Gvar.var_2173 = "殺";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "シアーハートアタック！";
        }
        if (Gvar.belongings_item_list == 113) {
            Gvar.buying_price = 6100;
            Gvar.item_name = "ｸﾗｯｼｭのDISC";
            Gvar.item_description1 = "攻撃:4  防御:0";
            Gvar.effects_message = "[発動]目の前の敵を瞬間移動させるぞ";
            Gvar.item_ability_description = "水場を通して攻撃できるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 5;
            Gvar.var_2173 = "鮫";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "くらいつけ！";
        }
        if (Gvar.belongings_item_list == 114) {
            Gvar.buying_price = 9400;
            Gvar.item_name = "ﾎﾜｲﾄｽﾈｲｸのDISC";
            Gvar.item_description1 = "攻撃:3  防御:1";
            Gvar.effects_message = "[発動]目の前の敵を倒しDISCにするぞ";
            Gvar.item_ability_description = "囚人に大ダメージを与えるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 6;
            Gvar.var_2173 = "蛇";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "ＤＩＳＣ化";
        }
        if (Gvar.belongings_item_list == 115) {
            Gvar.buying_price = 5200;
            Gvar.item_name = "G･ｴｸｽﾍﾟﾘｴﾝｽのDISC";
            Gvar.item_description1 = "攻撃:4  防御:2";
            Gvar.effects_message = "[発動]攻撃を跳ね返す植物が出現するぞ";
            Gvar.item_ability_description = "ｶｴﾙを持ってるとﾀﾞﾒｰｼﾞを反射するぞ";
            Gvar.var_812 = 2;
            Gvar.var_1984 = 5;
            Gvar.var_2173 = "金";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "植物生成";
        }
        if (Gvar.belongings_item_list == 116) {
            Gvar.buying_price = 700;
            Gvar.item_name = "ﾊｰﾐｯﾄﾊﾟｰﾌﾟﾙのDISC";
            Gvar.item_description1 = "攻撃:1  防御:2";
            Gvar.effects_message = "[発動]このフロアの地図がわかるぞ";
            Gvar.item_ability_description = "波紋に弱い敵に大ﾀﾞﾒｰｼﾞを与えるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 10;
            Gvar.var_2173 = "紫";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "周辺感知";
        }
        if (Gvar.belongings_item_list == 117) {
            Gvar.buying_price = 3800;
            Gvar.item_name = "ﾀﾞｰｸﾌﾞﾙｰﾑｰﾝのDISC";
            Gvar.item_description1 = "攻撃:2  防御:2";
            Gvar.effects_message = "[発動]部屋内の敵から体力を吸い取るぞ";
            Gvar.item_ability_description = "周囲に水があるほど強いぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 3;
            Gvar.var_2173 = "青";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "フジツボ";
            if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                Gvar.effects_message = "[★発動]部屋内の敵から体力を吸い取るぞ";
            }
        }
        if (Gvar.belongings_item_list == 118) {
            Gvar.buying_price = 6300;
            Gvar.item_name = "ﾀﾞｲﾊﾞｰﾀﾞｳﾝのDISC";
            Gvar.item_description1 = "攻撃:2  防御:3";
            Gvar.effects_message = "[発動]周囲にﾀﾞｲﾊﾞｰﾀﾞｳﾝを潜ませておけるぞ";
            Gvar.item_ability_description = "近くの敵に壁を通して攻撃できるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 6;
            Gvar.var_2173 = "潜";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "潜水して待ち伏せ";
        }
        if (Gvar.belongings_item_list == 119) {
            Gvar.buying_price = 2850;
            Gvar.item_name = "ｽﾊﾟｲｽ･ｶﾞｰﾙのDISC";
            Gvar.item_description1 = "攻撃:2  防御:3";
            Gvar.effects_message = "[発動]直接攻撃を喰らうと後ろに弾むぞ";
            Gvar.item_ability_description = "ｱｲﾃﾑを壊されることがなくなるぞ";
            Gvar.var_812 = 2;
            Gvar.var_1984 = 5;
            Gvar.var_2173 = "柔";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "柔ラカクスル！";
        }
        if (Gvar.belongings_item_list == 120) {
            Gvar.buying_price = 2700;
            Gvar.item_name = "ｽﾄｰﾝ･ﾌﾘｰのDISC";
            Gvar.item_description1 = "攻撃:3  防御:4";
            Gvar.effects_message = "[発動]体力が全回復するぞ";
            Gvar.item_ability_description = "後ろの敵に連続して攻撃できるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 6;
            Gvar.var_2173 = "糸";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "縫合";
        }
        if (Gvar.belongings_item_list == 121) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "ﾊﾟｰﾌﾟﾙ･ﾍｲｽﾞのDISC";
            Gvar.item_description1 = "攻撃:7  防御:1";
            Gvar.effects_message = "[発動]ウイルスで部屋内全員にダメージＡ";
            Gvar.item_ability_description = "時々変な方向を攻撃してしまうぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 5;
            Gvar.var_2173 = "毒";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "殺人ウイルス";
            if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                Gvar.effects_message = "[★発動]ウイルスで部屋内全員にダメージＡ";
            }
        }
        if (Gvar.belongings_item_list == 122) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "ｱﾇﾋﾞｽ神のDISC";
            Gvar.item_description1 = "攻撃:6  防御:0";
            Gvar.effects_message = "[発動]同種に連続で直接攻撃する程大ﾀﾞﾒｰｼﾞ";
            Gvar.item_ability_description = "アイテムが壁をすり抜けて飛ぶぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 3;
            Gvar.var_2173 = "刀";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "憶えるぞ！";
        }
        if (Gvar.belongings_item_list == 123) {
            Gvar.buying_price = 11000;
            Gvar.item_name = "ｸﾘｰﾑのDISC";
            Gvar.item_description1 = "攻撃:8  防御:0";
            Gvar.effects_message = "[発動]前方の敵を亜空間に飲み込むぞ";
            Gvar.item_ability_description = "稀に相手を一撃で倒せるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 3;
            Gvar.var_2173 = "亜";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "亜空の瘴気";
        }
        if (Gvar.belongings_item_list == 124) {
            Gvar.buying_price = 600;
            Gvar.item_name = "ﾑｰﾃﾞｨｰﾌﾞﾙｰｽのDISC";
            Gvar.item_description1 = "攻撃:1  防御:1";
            Gvar.effects_message = "[発動]アイテムを一つ倉庫に送れるぞ";
            Gvar.item_ability_description = "新入りに大ダメージを与えるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 5;
            Gvar.var_2173 = "返";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "ギュルギュル";
        }
        if (Gvar.belongings_item_list == 125) {
            Gvar.buying_price = 2600;
            Gvar.item_name = "ﾘﾄﾙ･ﾌｨｰﾄのDISC";
            Gvar.item_description1 = "攻撃:1  防御:1";
            Gvar.effects_message = "[発動]ビンから敵を取り出せるぞ";
            Gvar.item_ability_description = "時々敵を小さくするぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 5;
            Gvar.var_2173 = "小";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "ｱﾊﾞﾚるなって";
        }
        if (Gvar.belongings_item_list == 126) {
            Gvar.buying_price = 9600;
            Gvar.item_name = "C-MOONのDISC";
            Gvar.item_description1 = "攻撃:1  防御:0";
            Gvar.effects_message = "[発動]隣接した敵を全部吹っ飛ばすぞ";
            Gvar.item_ability_description = "稀に殴った相手を瀕死にするぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 6;
            Gvar.var_2173 = "裏";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "重力の反転";
        }
        if (Gvar.belongings_item_list == 200) {
            Gvar.buying_price = 1800;
            Gvar.item_name = "ｽｰﾊﾟｰﾌﾗｲのDISC";
            Gvar.item_description1 = "攻撃:0  防御:5";
            Gvar.effects_message = "[発動]20ﾀｰﾝの間 鉄塔を出現させるぞ";
            Gvar.item_ability_description = "痛恨の一撃のダメージを返すぞ";
            Gvar.var_812 = 2;
            Gvar.var_1984 = 4;
            Gvar.var_2173 = "塔";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "鉄塔生成";
        }
        if (Gvar.belongings_item_list == 201) {
            Gvar.buying_price = 1500;
            Gvar.item_name = "ｲｴﾛｰﾃﾝﾊﾟﾗﾝｽのDISC";
            Gvar.item_description1 = "攻撃:1  防御:4";
            Gvar.effects_message = "[発動]このﾌﾛｱで熱と冷気に強くなるぞ";
            Gvar.item_ability_description = "肉片攻撃が効かなくなるぞ";
            Gvar.var_812 = 2;
            Gvar.var_1984 = 3;
            Gvar.var_2173 = "黄";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "火も氷も無駄！";
        }
        if (Gvar.belongings_item_list == 202) {
            Gvar.buying_price = 6100;
            Gvar.item_name = "ﾎﾜｲﾄｱﾙﾊﾞﾑのDISC";
            Gvar.item_description1 = "攻撃:0  防御:8";
            Gvar.effects_message = "[発動]部屋内の敵を凍らせるぞ";
            Gvar.item_ability_description = "時々敵を氷漬けにするぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 5;
            Gvar.var_2173 = "氷";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "超低温の世界";
            if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                Gvar.effects_message = "[★発動]フロア内全ての敵を凍らせるぞ";
            }
        }
        if (Gvar.belongings_item_list == 203) {
            Gvar.buying_price = 4400;
            Gvar.item_name = "ｻﾞ･ﾌｰﾙのDISC";
            Gvar.item_description1 = "攻撃:1  防御:4";
            Gvar.effects_message = "[発動]周囲に砂をかけて他の場所へ飛ぶぞ";
            Gvar.item_ability_description = "砂に変化して攻撃をかわせるぞ";
            Gvar.var_812 = 2;
            Gvar.var_1984 = 3;
            Gvar.var_2173 = "砂";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "砂のザ･フール";
        }
        if (Gvar.belongings_item_list == 204) {
            Gvar.buying_price = 5300;
            Gvar.item_name = "ｼｱｰﾊｰﾄｱﾀｯｸのDISC";
            Gvar.item_description1 = "攻撃:1  防御:8";
            Gvar.effects_message = "[発動]この場で爆発を起こすぞ";
            Gvar.item_ability_description = "最大HPが増えるぞ";
            Gvar.var_812 = 4;
            Gvar.var_1984 = 4;
            Gvar.var_2173 = "爆";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "周辺爆破";
        }
        if (Gvar.belongings_item_list == 205) {
            Gvar.buying_price = 3500;
            Gvar.item_name = "ｸﾗﾌﾄﾜｰｸのDISC";
            Gvar.item_description1 = "攻撃:1  防御:5";
            Gvar.effects_message = "[発動]隣接した敵をその場に固定するぞ";
            Gvar.item_ability_description = "射撃によるダメージを抑えるぞ";
            Gvar.var_812 = 2;
            Gvar.var_1984 = 5;
            Gvar.var_2173 = "停";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "「固定」";
            if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                Gvar.effects_message = "[★発動]部屋内の敵をその場に固定するぞ";
            }
        }
        if (Gvar.belongings_item_list == 206) {
            Gvar.buying_price = 4200;
            Gvar.item_name = "ｵｱｼｽのDISC";
            Gvar.item_description1 = "攻撃:0  防御:3";
            Gvar.effects_message = "[発動]20ﾀｰﾝの間、周囲の壁を溶かすぞ";
            Gvar.item_ability_description = "殴る時に時々敵を柔らかくするぞ";
            Gvar.var_812 = 2;
            Gvar.var_1984 = 5;
            Gvar.var_2173 = "泥";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "泥化";
        }
        if (Gvar.belongings_item_list == 207) {
            Gvar.buying_price = 2500;
            Gvar.item_name = "ｸﾞﾚｲﾄﾌﾙ･ﾃﾞｯﾄﾞのDISC";
            Gvar.item_description1 = "攻撃:2  防御:2";
            Gvar.effects_message = "[発動]部屋内の敵の攻撃力を下げるぞ";
            Gvar.item_ability_description = "若化攻撃・老化攻撃を防ぐぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 5;
            Gvar.var_2173 = "老";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "老化攻撃";
            if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                Gvar.effects_message = "[★発動]フロア内全ての敵の攻撃力を下げるぞ";
            }
        }
        if (Gvar.belongings_item_list == 210) {
            Gvar.buying_price = 1800;
            Gvar.item_name = "ﾊｲﾌﾟﾘｴｽﾃｽのDISC";
            Gvar.item_description1 = "攻撃:2  防御:3";
            Gvar.effects_message = "[発動]前方の敵の持ち物に化けるぞ";
            Gvar.item_ability_description = "攻撃されると時々剃刀に化けるぞ";
            Gvar.var_812 = 2;
            Gvar.var_1984 = 99;
            Gvar.var_2173 = "女";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "ハイプリエステス！";
        }
        if (Gvar.belongings_item_list == 211) {
            Gvar.buying_price = 1600;
            Gvar.item_name = "ﾄﾞｷﾞｰ･ｽﾀｲﾙのDISC";
            Gvar.item_description1 = "攻撃:0  防御:2";
            Gvar.effects_message = "[発動]即死ダメージをこらえるぞ";
            Gvar.item_ability_description = "全体攻撃のダメージを抑えるぞ";
            Gvar.var_812 = 2;
            Gvar.var_1984 = 99;
            Gvar.var_2173 = "伸";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "生きててよかった...";
        }
        if (Gvar.belongings_item_list == 212) {
            Gvar.buying_price = 20000;
            Gvar.item_name = "ﾄﾞｩｰﾋﾞｰ･ﾜｩ!のDISC";
            Gvar.item_description1 = "攻撃:3  防御:1";
            Gvar.effects_message = "[発動]部屋内全員にダメージＢ";
            Gvar.item_ability_description = "８方向に攻撃できるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 99;
            Gvar.var_2173 = "風";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "自動追跡";
        }
        if (Gvar.belongings_item_list == 213) {
            Gvar.buying_price = 8000;
            Gvar.item_name = "ﾋﾞﾀﾐﾝCのDISC";
            Gvar.item_description1 = "攻撃:2  防御:8";
            Gvar.effects_message = "[発動]周囲をﾋﾞﾀﾐﾝCで覆うぞ";
            Gvar.item_ability_description = "投げたアイテムが壁で曲がるぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 99;
            Gvar.var_2173 = "柔";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "指紋設置";
        }
        if (Gvar.belongings_item_list == 214) {
            Gvar.buying_price = 2500;
            Gvar.item_name = "ﾏﾘﾘﾝ･ﾏﾝｿﾝのDISC";
            Gvar.item_description1 = "攻撃:3  防御:1";
            Gvar.effects_message = "[発動]敵が必ずお金を落とすぞ";
            Gvar.item_ability_description = "アイテムの値打ちがわかるぞ";
            Gvar.var_812 = 4;
            Gvar.var_1984 = 6;
            Gvar.var_2173 = "管";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "取り立て人";
        }
        if (Gvar.belongings_item_list == 215) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "ﾎﾜｲﾄｽﾈｲｸのDISC";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]目の前の敵を倒しDISCにするぞ";
            Gvar.item_ability_description = "攻撃する代わりに敵をDISCにするぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 99;
            Gvar.var_2173 = "蛇";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "ＤＩＳＣ化";
        }
        if (Gvar.belongings_item_list == 216) {
            Gvar.buying_price = 4000;
            Gvar.item_name = "ｽﾑｰｽ･ｵﾍﾟﾚｲﾀｰｽﾞのDISC";
            Gvar.item_description1 = "攻撃:1  防御:1";
            Gvar.effects_message = "[発動]なにかの数字を偽造するぞ";
            Gvar.item_ability_description = "時々敵の攻撃方向を狂わせるぞ";
            Gvar.var_812 = 2;
            Gvar.var_1984 = 99;
            Gvar.var_2173 = "示";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "偽造";
        }
        if (Gvar.belongings_item_list == 217) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "ｵｼﾘｽ神のDISC";
            Gvar.item_description1 = "攻撃:3  防御:1";
            Gvar.effects_message = "[発動]敵を倒してコインにするぞ";
            Gvar.item_ability_description = "敵がコインを落とすようになるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 3;
            Gvar.var_2173 = "賭";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "コイン化";
        }
        if (Gvar.belongings_item_list == 218) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "ｱﾝﾀﾞｰ･ﾜｰﾙﾄﾞのDISC";
            Gvar.item_description1 = "攻撃:1  防御:1";
            Gvar.effects_message = "[発動]罠が増えるぞ";
            Gvar.item_ability_description = "罠を利用できるぞ";
            Gvar.var_812 = 4;
            Gvar.var_1984 = 6;
            Gvar.var_2173 = "罠";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "掘り起こす";
        }
        if (Gvar.belongings_item_list == 208) { // Ver0.1401にて追加。
            Gvar.buying_price = 2700;
            Gvar.item_name = "C-MOONのDISC";
            Gvar.item_description1 = "攻撃:1  防御:0";
            Gvar.effects_message = "[発動]隣接した敵を全部吹っ飛ばすぞ";
            Gvar.item_ability_description = "稀に殴った相手を瀕死にするぞ";
            Gvar.var_812 = 1; // 装備区分: 攻撃
            Gvar.var_1984 = 6; // 対応コミック部
            Gvar.var_2173 = "月";
            Gvar.var_2174 = 4; // 合成の空き容量
            Gvar.var_2039 = "重力の反転";
        }
        if (Gvar.belongings_item_list == 222) {
            Gvar.buying_price = 8000;
            Gvar.item_name = "ﾁｹｯﾄ･ｩ･ﾗｲﾄﾞのDISC";
            Gvar.item_description1 = "攻撃:1  防御:0";
            Gvar.effects_message = "[発動]7ﾀｰﾝの間攻撃が致命的になるぞ";
            Gvar.item_ability_description = "攻撃が必ず命中するぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 11;
            Gvar.var_2173 = "涙";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "涙の乗車券";
        }
        if (Gvar.belongings_item_list == 223) {
            Gvar.buying_price = 10000;
            Gvar.item_name = "D4CのDISC";
            Gvar.item_description1 = "攻撃:6  防御:3";
            Gvar.effects_message = "[発動]同じ階の隣の世界に移動するぞ";
            Gvar.item_ability_description = "SBR参加者に大ダメージを与えるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 99;
            Gvar.var_2173 = "米";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "国旗に挟まる";
        }
        if (Gvar.belongings_item_list == 224) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "S･C･ﾚｸｲｴﾑのDISC";
            Gvar.item_description1 = "攻撃:1  防御:3";
            Gvar.effects_message = "[発動]部屋中の生物の精神を入れ替えるぞ";
            Gvar.item_ability_description = "背面の敵に大ダメージを与えるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 5;
            Gvar.var_2173 = "魂";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "鎮魂歌の暴走";
        }
        if (Gvar.belongings_item_list == 250) { // Ver0.1401にて追加。
            Gvar.buying_price = 800;
            Gvar.item_name = "ｵｰ!ﾛﾝｻﾑ･ﾐｰのDISC";
            Gvar.item_description1 = "攻撃:0  防御:1";
            Gvar.effects_message = "[発動]体をﾊﾞﾗﾊﾞﾗにして4ﾏｽ以内で移動するぞ";
            Gvar.item_ability_description = "爆発に巻き込まれると移動するぞ";
            Gvar.var_812 = 3; // 装備区分: 全体
            Gvar.var_1984 = 7; // 対応コミック部
            Gvar.var_2173 = "紐";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "ロープを投げた・・・";
        }
        if (Gvar.belongings_item_list == 251) { // Ver0.1401にて追加。
            Gvar.buying_price = 1250;
            Gvar.item_name = "ｼﾋﾞﾙ･ｳｫｰのDISC";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]ｱｲﾃﾑが捨てられなくなるぞ";
            Gvar.item_ability_description = "捨てた分ﾀﾞﾒｰｼﾞを喰らうぞ";
            Gvar.var_812 = 3; // 装備区分: 全体
            Gvar.var_1984 = 7; // 対応コミック部
            Gvar.var_2173 = "鬱";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "おっかぶるッ！！";
        }
        if (Gvar.belongings_item_list == 252) { // Ver0.1401にて追加。
            Gvar.buying_price = 2500;
            Gvar.item_name = "ｸﾘｰﾑ･ｽﾀｰﾀｰのDISC";
            Gvar.item_description1 = "攻撃:3  防御:1";
            Gvar.effects_message = "[発動]自分と仲間を回復するぞ";
            Gvar.item_ability_description = "敵がﾛｰｽﾄﾋﾞｰﾌｻﾝﾄﾞｳｨｯﾁを落とすぞ";
            Gvar.var_812 = 1; // 装備区分: 攻撃
            Gvar.var_1984 = 7; // 対応コミック部
            Gvar.var_2173 = "栗";
            Gvar.var_2174 = 2;
            Gvar.var_2039 = "協力し合おう！";
        }
        if (Gvar.belongings_item_list == 253) { // Ver0.1401にて追加。
            Gvar.buying_price = 4800;
            Gvar.item_name = "ｽｹｱﾘｰ･ﾓﾝｽﾀｰｽﾞのDISC";
            Gvar.item_description1 = "攻撃:7  防御:2";
            Gvar.effects_message = "[発動]周りの敵を恐竜化させるぞ";
            Gvar.item_ability_description = "固定・眠っている敵が見えなくなるぞ";
            Gvar.var_812 = 3; // 装備区分: 全体
            Gvar.var_1984 = 7; // 対応コミック部
            Gvar.var_2173 = "竜";
            Gvar.var_2174 = 3;
            Gvar.var_2039 = "恐竜化！";
        }
        if (Gvar.belongings_item_list == 254) { // Ver0.1401にて追加。
            Gvar.buying_price = 1800;
            Gvar.item_name = "C･ｻﾞ･ﾚｲﾝﾎﾞｰのDISC";
            Gvar.item_description1 = "攻撃:2  防御:1";
            Gvar.effects_message = "[発動]雨が降れば倍速で動けるぞ";
            Gvar.item_ability_description = "雨を固定するぞ";
            Gvar.var_812 = 2; // 装備区分: 防御
            Gvar.var_1984 = 7; // 対応コミック部
            Gvar.var_2173 = "雨";
            Gvar.var_2174 = 2;
            Gvar.var_2039 = "呪われろッ！";
        }
        if (Gvar.belongings_item_list == 255) { // Ver0.1401にて追加。
            Gvar.buying_price = 3800;
            Gvar.item_name = "ｲﾝ･ｱ･ｻｲﾚﾝﾄ･ｳｪｲのDISC";
            Gvar.item_description1 = "攻撃:3  防御:4";
            Gvar.effects_message = "[発動]20ﾀｰﾝの間30以下のﾀﾞﾒｰｼﾞを防ぐぞ";
            Gvar.item_ability_description = "次の回で音の罠を仕掛けるぞ";
            Gvar.var_812 = 2; // 装備区分: 防御
            Gvar.var_1984 = 7; // 対応コミック部
            Gvar.var_2173 = "音";
            Gvar.var_2174 = 2;
            Gvar.var_2039 = "ブン！ブン！";
        }
        if (Gvar.belongings_item_list == 256) { // Ver0.1401にて追加。
            Gvar.buying_price = 9000;
            Gvar.item_name = "ﾁｮｺﾚｲﾄ･ﾃﾞｨｽｺのDISC";
            Gvar.item_description1 = "攻撃:0  防御:1";
            Gvar.effects_message = "[発動]10ﾀｰﾝの間ﾀﾞﾒｰｼﾞを受け流すぞ";
            Gvar.item_ability_description = "稀に遠距離攻撃を受け流すぞ";
            Gvar.var_812 = 2; // 装備区分: 防御
            Gvar.var_1984 = 7; // 対応コミック部
            Gvar.var_2173 = "甘";
            Gvar.var_2174 = 3;
            Gvar.var_2039 = "チョコレイト・ディスコ";
        }
        if (Gvar.belongings_item_list == 257) { // Ver0.1401にて追加。
            Gvar.buying_price = 5200;
            Gvar.item_name = "T･O･T･B ﾜﾝのDISC";
            Gvar.item_description1 = "攻撃:1  防御:4";
            Gvar.effects_message = "[発動]砂鉄で前方の敵の移動を封じるぞ";
            Gvar.item_ability_description = "鉄の弾丸などを砂鉄で防ぐぞ";
            Gvar.var_812 = 2; // 装備区分: 防御
            Gvar.var_1984 = 7; // 対応コミック部
            Gvar.var_2173 = "一";
            Gvar.var_2174 = 2;
            Gvar.var_2039 = "ヤツらに何もさせるな！";
        }
        if (Gvar.belongings_item_list == 258) { // Ver0.1401にて追加。
            Gvar.buying_price = 10000;
            Gvar.item_name = "ﾎﾞｰﾙﾌﾞﾚｲｶｰ&ｽｷｬﾝのDISC";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]ﾀﾞﾝｼﾞｮﾝやｱｲﾃﾑをｽｷｬﾝするぞ";
            Gvar.item_ability_description = "投擲すると敵が弱くなるぞ";
            Gvar.var_812 = 4; // 装備区分: 能力
            Gvar.var_1984 = 7; // 対応コミック部
            Gvar.var_2173 = "球";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "スキャン";
        }
        if (Gvar.belongings_item_list == 259) { // Ver0.1401にて追加。
            Gvar.buying_price = 800;
            Gvar.item_name = "TATOO YOU!のDISC";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]正面のｷｬﾗを5ﾀｰﾝ隠すぞ";
            Gvar.item_ability_description = "全体攻撃が隣接した味方に当たらないぞ";
            Gvar.var_812 = 4; // 装備区分: 能力
            Gvar.var_1984 = 7; // 対応コミック部
            Gvar.var_2173 = "墨";
            Gvar.var_2174 = 3;
            Gvar.var_2039 = "TATOO YOU!";
        }
        if (Gvar.belongings_item_list == 260) { // Ver0.1401にて追加。
            Gvar.buying_price = 20000;
            Gvar.item_name = "20th Century BoyのDISC";
            Gvar.item_description1 = "攻撃:0  防御:13";
            Gvar.effects_message = "[発動]20ﾀｰﾝの間動けなくなり、その間は敵からのﾀﾞﾒｰｼﾞを反射するぞ";
            Gvar.item_ability_description = "会心の一撃が出ない、稀に攻撃を受け流し無効化するぞ";
            Gvar.var_812 = 2; // 装備区分: 防御
            Gvar.var_1984 = 7; // 対応コミック部
            Gvar.var_2173 = "世";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "防御の体勢";
        }
        if (Gvar.belongings_item_list == 261) { // Ver0.1401にて追加。
            Gvar.buying_price = 11800;
            Gvar.item_name = "D4CのDISC";
            Gvar.item_description1 = "攻撃:4  防御:5";
            Gvar.effects_message = "[発動]前方の敵を別次元に送るぞ";
            Gvar.item_ability_description = "SBR参加者に大ﾀﾞﾒｰｼﾞを与えるぞ";
            Gvar.var_812 = 1; // 装備区分: 攻撃
            Gvar.var_1984 = 7; // 対応コミック部
            Gvar.var_2173 = "次";
            Gvar.var_2174 = 3;
            Gvar.var_2039 = "ドジャァアアアアン!";
        }
        if (Gvar.belongings_item_list == 262) { // Ver0.1401にて追加。
            Gvar.buying_price = 24000;
            Gvar.item_name = "ﾀｽｸact4のDISC";
            Gvar.item_description1 = "攻撃:13  防御:1";
            Gvar.effects_message = "[発動]無限の回転を撃ち完全消滅させるぞ";
            Gvar.item_ability_description = "攻撃した相手が3ﾀｰﾝ後に消滅するぞ";
            Gvar.var_812 = 1; // 装備区分: 攻撃
            Gvar.var_1984 = 7; // 対応コミック部
            Gvar.var_2173 = "牙";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "黄金の回転！";
        }
        if (Gvar.belongings_item_list == 263) { // Ver0.1401にて追加。
            Gvar.buying_price = 36000;
            Gvar.item_name = "D4CﾗﾌﾞﾄﾚｲﾝのDISC";
            Gvar.item_description1 = "攻撃:6  防御:9";
            Gvar.effects_message = "[発動]しばらく無敵になるぞ";
            Gvar.item_ability_description = "聖人の遺体所持でﾀﾞﾒｰｼﾞを抑えるるぞ";
            Gvar.var_812 = 2; // 装備区分: 防御
            Gvar.var_1984 = 7; // 対応コミック部
            Gvar.var_2173 = "愛";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "黄金の回転！";
        }
        if (Gvar.belongings_item_list == 300) {
            Gvar.buying_price = 2000;
            Gvar.item_name = "ﾊﾟｰﾙ･ｼﾞｬﾑのDISC";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]満腹度が50回復するぞ";
            Gvar.item_ability_description = "お腹が減りにくいぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 4;
            Gvar.var_2173 = "食";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "食べる";
        }
        if (Gvar.belongings_item_list == 301) {
            Gvar.buying_price = 8800;
            Gvar.item_name = "ﾊｰｳﾞｪｽﾄのDISC";
            Gvar.item_description1 = "攻撃:1  防御:2";
            Gvar.effects_message = "[発動]アイテムを最大9個集めてくるぞ";
            Gvar.item_ability_description = "アイテムのある場所を感知できるぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 4;
            Gvar.var_2173 = "拾";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "アイテム収集";
        }
        if (Gvar.belongings_item_list == 302) {
            Gvar.buying_price = 800;
            Gvar.item_name = "ﾊｲｳｪｲ･ﾄｩ･ﾍﾙのDISC";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]道連れで部屋全体にダメージＣ";
            Gvar.item_ability_description = "死にたくなってくるぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 6;
            Gvar.var_2173 = "道";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "一緒にいこうよォ～";
            if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                Gvar.effects_message = "[★発動]道連れで部屋全体にダメージＣ";
            }
        }
        if (Gvar.belongings_item_list == 303) {
            Gvar.buying_price = 7400;
            Gvar.item_name = "ﾄﾞﾗｺﾞﾝｽﾞﾄﾞﾘｰﾑのDISC";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]攻撃をかわしやすくなるぞ";
            Gvar.item_ability_description = "罠を感知できるぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 6;
            Gvar.var_2173 = "龍";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "安全な方角";
        }
        if (Gvar.belongings_item_list == 304) {
            Gvar.buying_price = 3900;
            Gvar.item_name = "ｳｪｻﾞｰﾘﾎﾟｰﾄのDISC";
            Gvar.item_description1 = "攻撃:3  防御:6";
            Gvar.effects_message = "[発動]落雷で部屋内全員にダメージＢ";
            Gvar.item_ability_description = "弾丸が届きにくくなるぞ";
            Gvar.var_812 = 2;
            Gvar.var_1984 = 6;
            Gvar.var_2173 = "天";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "落雷";
            if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                Gvar.effects_message = "[★発動]落雷で部屋内全員にダメージＢ";
            }
        }
        if (Gvar.belongings_item_list == 305) {
            Gvar.buying_price = 7900;
            Gvar.item_name = "ｼﾝﾃﾞﾚﾗのDISC";
            Gvar.item_description1 = "攻撃:1  防御:1";
            Gvar.effects_message = "[発動]次の階でｱｲﾃﾑがたくさん出るぞ";
            Gvar.item_ability_description = "敵がｱｲﾃﾑを落としやすくなるぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 4;
            Gvar.var_2173 = "幸";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "運が良くなるメイク";
        }
        if (Gvar.belongings_item_list == 306) {
            Gvar.buying_price = 2500;
            Gvar.item_name = "ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰのDISC";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]敵のいる位置がわかるようになるぞ";
            Gvar.item_ability_description = "射撃ｽﾀﾝﾄﾞの攻撃力が修正値分上昇";
            Gvar.var_812 = 4;
            Gvar.var_1984 = 6;
            Gvar.var_2173 = "衛";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "空気の流れを読む！";
        }
        if (Gvar.belongings_item_list == 307) { // Ver0.1401にて追加。
            Gvar.buying_price = 2500;
            Gvar.item_name = "ﾘﾄﾙ･ﾌｨｰﾄのDISC";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]敵のいる位置がわかるようになるぞ";
            Gvar.item_ability_description = "射撃ｽﾀﾝﾄﾞの攻撃力が修正値分上昇";
            Gvar.var_812 = 4;
            Gvar.var_1984 = 6;
            Gvar.var_2173 = "衛";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "空気の流れを読む！";
        }
        if (Gvar.belongings_item_list == 308) {
            Gvar.buying_price = 2200;
            Gvar.item_name = "ｴﾎﾞﾆｰ･ﾃﾞﾋﾞﾙのDISC";
            Gvar.item_description1 = "攻撃:2  防御:0";
            Gvar.effects_message = "[発動]目の前にエボニー人形を呼び出すぞ";
            Gvar.item_ability_description = "恨みのある敵へのﾀﾞﾒｰｼﾞが倍増\t\t";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 3;
            Gvar.var_2173 = "悪";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "恨みはらさで…";
        }
        if (Gvar.belongings_item_list == 309) { // Ver0.1401にて追加。
            Gvar.buying_price = 4000;
            Gvar.item_name = "ｿﾌﾄ･ﾏｼｰﾝのDISC";
            Gvar.item_description1 = "攻撃:3  防御:1";
            Gvar.effects_message = "[発動]人質を作り出す罠を仕掛けるぞ";
            Gvar.item_ability_description = "敵とすれ違えるぞ\t\t";
            Gvar.var_812 = 2; // スタンド効果の対象装備区分。1:攻撃、2:防御、3:全体、4:能力
            Gvar.var_1984 = 5; // 強化できるコミック部
            Gvar.var_2173 = "柔";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "ペチャンコ";
        }
        if (Gvar.belongings_item_list == 310) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "ｴﾝﾌﾟﾚｽのDISC";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]大声で敵を呼び寄せてしまうぞ";
            Gvar.item_ability_description = "時々全ての敵を目覚めさせるぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 3;
            Gvar.var_2173 = "疽";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "ここにいるわよッ！";
        }
        if (Gvar.belongings_item_list == 311) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "ﾁｰﾌﾟ･ﾄﾘｯｸのDISC";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]ブツブツ言われて精神力が弱るぞ";
            Gvar.item_ability_description = "背中を見られるとﾀﾞﾒｰｼﾞを喰らうぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 4;
            Gvar.var_2173 = "背";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "おはなし";
        }
        if (Gvar.belongings_item_list == 312) {
            Gvar.buying_price = 8200;
            Gvar.item_name = "ｴｱﾛｽﾐｽのDISC";
            Gvar.item_description1 = "攻撃:2  防御:0";
            Gvar.effects_message = "[発動]フロア中にランダムでダメージＳ";
            Gvar.item_ability_description = "敵の場所を感知できるぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 5;
            Gvar.var_2173 = "飛";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "無差別乱射";
            if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                Gvar.effects_message = "[★発動]フロア中にランダムでダメージＳ";
            }
        }
        if (Gvar.belongings_item_list == 313) {
            Gvar.buying_price = 5200;
            Gvar.item_name = "ﾊｲｳｪｲ･ｽﾀｰのDISC";
            Gvar.item_description1 = "攻撃:1  防御:1";
            Gvar.effects_message = "[発動]部屋内の敵から満腹度を吸い取るぞ";
            Gvar.item_ability_description = "時々ﾀﾞﾒｰｼﾞを吸収しHPを回復するぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 4;
            Gvar.var_2173 = "養";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "養分をくれェ～";
            if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                Gvar.effects_message = "[★発動]部屋内の敵から養分を吸い取るぞ";
            }
        }
        if (Gvar.belongings_item_list == 314) {
            Gvar.buying_price = 1900;
            Gvar.item_name = "ｽﾄﾚｲ･ｷｬｯﾄのDISC";
            Gvar.item_description1 = "攻撃:0  防御:6";
            Gvar.effects_message = "[発動]空気弾を発射して動きを止めるぞ";
            Gvar.item_ability_description = "爆風によるﾀﾞﾒｰｼﾞが少なくなるぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 4;
            Gvar.var_2173 = "猫";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "空気弾";
        }
        if (Gvar.belongings_item_list == 315) {
            Gvar.buying_price = 3500;
            Gvar.item_name = "ｴﾋﾟﾀﾌのDISC";
            Gvar.item_description1 = "攻撃:2  防御:1";
            Gvar.effects_message = "[発動]敵･罠の可視･感知。透明でも見えるぞ";
            Gvar.item_ability_description = "周囲に罠があると警告が出るぞ";
            Gvar.var_812 = 4;
            Gvar.var_1984 = 5;
            Gvar.var_2173 = "予";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "エピタフ！";
        }
        if (Gvar.belongings_item_list == 316) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "ｻﾊﾞｲﾊﾞｰのDISC";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]部屋内の敵が混乱するぞ";
            Gvar.item_ability_description = "方向転換キーで敵の体力がわかるぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 6;
            Gvar.var_2173 = "乱";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "ファイトクラブ";
            if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                Gvar.effects_message = "[★発動]フロア内全ての敵が混乱するぞ";
            }
        }
        if (Gvar.belongings_item_list == 317) {
            Gvar.buying_price = 2300;
            Gvar.item_name = "ｷｯｽのDISC";
            Gvar.item_description1 = "攻撃:4  防御:1";
            Gvar.effects_message = "[発動]ｷｯｽのｼｰﾙを地面に貼り付けるぞ";
            Gvar.item_ability_description = "殴った敵が時々分裂するぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 6;
            Gvar.var_2173 = "分";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "シール";
        }
        if (Gvar.belongings_item_list == 318) {
            Gvar.buying_price = 1800;
            Gvar.item_name = "ｼﾞｬﾝﾋﾟﾝJﾌﾗｯｼｭのDISC";
            Gvar.item_description1 = "攻撃:2  防御:3";
            Gvar.effects_message = "[発動]真空で部屋内全員にダメージＢ";
            Gvar.item_ability_description = "時々敵をふっとばして混乱させるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 6;
            Gvar.var_2173 = "空";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "真空の部屋";
            if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                Gvar.effects_message = "[★発動]真空で部屋内全員にダメージＢ";
            }
        }
        if (Gvar.belongings_item_list == 319) {
            Gvar.buying_price = 3400;
            Gvar.item_name = "ﾎﾞｰｲIIﾏﾝのDISC";
            Gvar.item_description1 = "攻撃:2  防御:2";
            Gvar.effects_message = "[発動]合成された能力を消去できるぞ";
            Gvar.item_ability_description = "殴った敵が時々封印状態になるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 4;
            Gvar.var_2173 = "吸";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "引きずり出す！";
        }
        if (Gvar.belongings_item_list == 320) {
            Gvar.buying_price = 4200;
            Gvar.item_name = "ﾒﾀﾘｶのDISC";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]10ﾀｰﾝ透明になり敵に気づかれないぞ";
            Gvar.item_ability_description = "敵や罠からの磁力が効かないぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 5;
            Gvar.var_2173 = "磁";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "透明化";
        }
        if (Gvar.belongings_item_list == 321) {
            Gvar.buying_price = 8200;
            Gvar.item_name = "B･D･ｻﾞ･ﾊｳｽのDISC";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]次の階を部屋の幽霊にするぞ";
            Gvar.item_ability_description = "稀に消費アイテムが2度使えるぞ";
            Gvar.var_812 = 4;
            Gvar.var_1984 = 6;
            Gvar.var_2173 = "幽";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "部屋の幽霊";
        }
        if (Gvar.belongings_item_list == 350) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "☆目覚め";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "寝ている敵を起こしやすいぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 351) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "★睡眠よけ";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "眠らされることが無くなるぞ";
            Gvar.var_812 = 4;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 352) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "★腹減り防止";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "満腹度の吸い取り攻撃を防ぐぞ";
            Gvar.var_812 = 4;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 353) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "☆呪われ増加";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "呪われたDISCが出やすいぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 354) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "☆＋修正減り";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "＋のついた装備DISCが出にくいぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 355) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "☆罠発動";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "罠が作動しやすいぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 356) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "☆お金減り";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "拾えるお金の金額が少なくなるぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 357) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "☆睡眠出現減";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "寝ている敵が少なくなるぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 358) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "☆敵増え速い";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "フロアに敵が出現しやすくなるぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 359) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "☆強敵出現";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "時々レベル２の敵が出現するぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 360) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "★カエル変化防止";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "ｱｲﾃﾑをｶｴﾙにされないぞ";
            Gvar.var_812 = 4;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 361) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "★抜き取り防止";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "神父にDISCを抜き取られないぞ";
            Gvar.var_812 = 4;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 362) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "★盗まれ防止";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "ﾊｰｳﾞｪｽﾄに盗まれないぞ";
            Gvar.var_812 = 4;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 363) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "☆磁力倍増";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "磁力が上がりやすいぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 364) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "☆モンハウ増";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "ﾓﾝｽﾀｰﾊｳｽが出やすいぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 365) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "★階段感知";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "階段の場所がわかるぞ";
            Gvar.var_812 = 4;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 366) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "★ヒラリ防止";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "ヒラリとかわされないぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 367) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "☆誰からも痛恨";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "誰からも痛恨の一撃を喰らうぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 368) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "★化け感知";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "敵が化けてるアイテムがわかるぞ";
            Gvar.var_812 = 4;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 369) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "★暗殺倍打";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "暗殺チームに大ダメージ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 370) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "★九柱神倍打";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]なし";
            Gvar.item_ability_description = "ｴｼﾞﾌﾟﾄ九柱神に大ダメージ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 0;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "なし";
        }
        if (Gvar.belongings_item_list == 393) {
            Gvar.buying_price = 10000;
            Gvar.item_name = "ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨのDISC";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]漫画のｷｬﾗｸﾀｰを敵として召還するぞ";
            Gvar.item_ability_description = "ｺﾐｯｸｽが出現しやすくなるぞ";
            Gvar.var_812 = 4;
            Gvar.var_1984 = 6;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "ボヘミアンラプソディ！";
        }
        if (Gvar.belongings_item_list == 394) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "ｷﾗｰﾀｲｶﾞｰｸｲｰﾝのDISC";
            Gvar.item_description1 = "攻撃:9  防御:9";
            Gvar.effects_message = "[発動]ｼｱｰﾊｰﾄｱﾀｯｸを呼び出すぞ";
            Gvar.item_ability_description = "杜王町住人に大ダメージを与えるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 4;
            Gvar.var_2173 = "";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "シアーハートアタック！";
        }
        if (Gvar.belongings_item_list == 395) {
            Gvar.buying_price = 4700;
            Gvar.item_name = "ﾊﾞｲﾂｧ･ﾀﾞｽﾄのDISC";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]部屋の敵を爆弾にし3ﾀｰﾝ後爆発させる";
            Gvar.item_ability_description = "能力DISCと引き換えに復活するぞ";
            Gvar.var_812 = 4;
            Gvar.var_1984 = 4;
            Gvar.var_2173 = "戻";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "負けて死ね";
        }
        if (Gvar.belongings_item_list == 396) {
            Gvar.buying_price = 10000;
            Gvar.item_name = "ﾒｲﾄﾞ･ｲﾝ･ﾍﾌﾞﾝのDISC";
            Gvar.item_description1 = "攻撃:0  防御:0";
            Gvar.effects_message = "[発動]一時的に速く動けるぞ";
            Gvar.item_ability_description = "装備すると速く動けるぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 6;
            Gvar.var_2173 = "速";
            Gvar.var_2174 = 1;
            Gvar.var_2039 = "天国の時";
        }
        if (Gvar.belongings_item_list == 397) {
            Gvar.buying_price = 10000;
            Gvar.item_name = "ﾍﾋﾞｰ･ｳｪｻﾞｰのDISC";
            Gvar.item_description1 = "攻撃:8  防御:8";
            Gvar.effects_message = "[発動]敵が鈍足になる虹を大量に作り出すぞ";
            Gvar.item_ability_description = "弾丸がかなり届きにくくなるぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 6;
            Gvar.var_2173 = "虹";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "ヘビーウェザー";
        }
        if (Gvar.belongings_item_list == 398) {
            Gvar.buying_price = 20000;
            Gvar.item_name = "ｽﾀﾌﾟﾗｻﾞﾜｰﾙﾄﾞのDISC";
            Gvar.item_description1 = "攻撃:10 防御:10";
            Gvar.effects_message = "[発動]5ﾀｰﾝの間、時間が止まるぞ";
            Gvar.item_ability_description = "３方向に攻撃できるぞ";
            Gvar.var_812 = 1;
            Gvar.var_1984 = 7;
            Gvar.var_2173 = "時";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "ｽﾀｰﾌﾟﾗﾁﾅ･ｻﾞ･ﾜｰﾙﾄﾞ！";
        }
        if (Gvar.belongings_item_list == 399) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "G･E･ﾚｸｲｴﾑのDISC";
            Gvar.item_description1 = "攻撃:12 防御:12";
            Gvar.effects_message = "[発動]終わりが無いのが終わりを終わりにする";
            Gvar.item_ability_description = "全ての敵に大ダメージを与えるぞ";
            Gvar.var_812 = 3;
            Gvar.var_1984 = 5;
            Gvar.var_2173 = "鎮";
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "終わりにする";
        }
        // Gvar.var_487が0より大きければレアdisc(色違い)
        if (Gvar.disc_rarity > 0 && Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
            Gvar.item_name = "☆" + Gvar.item_name;
        }
        if (Gvar.belongings_item_list == 400) {
            Gvar.buying_price = 900;
            Gvar.item_name = "ﾊｲｴﾛﾌｧﾝﾄｸﾞﾘｰﾝのDISC";
            Gvar.item_description1 = "[遠距離ｽﾀﾝﾄﾞ]  攻撃力:10";
            Gvar.effects_message = "離れた敵にダメージを与えるぞ";
            Gvar.item_ability_description = "[発動]足元に法王の結界を仕掛けるぞ";
            Gvar.var_1984 = 3;
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "法王の結界";
        }
        if (Gvar.belongings_item_list == 401) {
            Gvar.buying_price = 500;
            Gvar.item_name = "ﾌｰ･ﾌｧｲﾀｰｽﾞのDISC";
            Gvar.item_description1 = "[遠距離ｽﾀﾝﾄﾞ]  攻撃力:2";
            Gvar.effects_message = "離れた敵にダメージを与えるぞ";
            Gvar.item_ability_description = "[発動]体力を２０回復させるぞ";
            Gvar.var_1984 = 6;
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "プランクトン詰め";
        }
        if (Gvar.belongings_item_list == 402) {
            Gvar.buying_price = 800;
            Gvar.item_name = "ｴﾝﾍﾟﾗｰのDISC";
            Gvar.item_description1 = "[遠距離ｽﾀﾝﾄﾞ]  攻撃力:8";
            Gvar.effects_message = "壁に当たると方向が変わるぞ";
            Gvar.item_ability_description = "[発動]弾丸の軌道を操れるぞ";
            Gvar.var_1984 = 3;
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "弾丸を操る";
        }
        if (Gvar.belongings_item_list == 403) {
            Gvar.buying_price = 700;
            Gvar.item_name = "ｾｯｸｽﾋﾟｽﾄﾙｽﾞのDISC";
            Gvar.item_description1 = "[遠距離ｽﾀﾝﾄﾞ]  攻撃力:6";
            Gvar.effects_message = "同じ部屋の誰かに命中するぞ";
            Gvar.item_ability_description = "[発動]ﾋﾟｯﾂｧを食べると射撃回数が増えるぞ";
            Gvar.var_1984 = 5;
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "昼メシの時間";
        }
        if (Gvar.belongings_item_list == 404) {
            Gvar.buying_price = 1100;
            Gvar.item_name = "ﾎﾙｽ神のDISC";
            Gvar.item_description1 = "[遠距離ｽﾀﾝﾄﾞ]  攻撃力:0（ﾀﾞﾒｰｼﾞ無）";
            Gvar.effects_message = "敵を凍らせて動けなくするぞ";
            Gvar.item_ability_description = "[発動]足元に氷の罠を仕掛けるぞ";
            Gvar.var_1984 = 3;
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "ホルス神の罠";
        }
        if (Gvar.belongings_item_list == 405) {
            Gvar.buying_price = 450;
            Gvar.item_name = "ｴｺｰｽﾞACT2のDISC";
            Gvar.item_description1 = "[遠距離ｽﾀﾝﾄﾞ]  攻撃力:0（ﾀﾞﾒｰｼﾞ無）";
            Gvar.effects_message = "敵をドヒュウと吹き飛ばせるぞ";
            Gvar.item_ability_description = "[発動]足元にドッグォンの文字を仕掛けるぞ";
            Gvar.var_1984 = 4;
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "ドッグォンの文字";
        }
        if (Gvar.belongings_item_list == 406) {
            Gvar.buying_price = 550;
            Gvar.item_name = "ｴｺｰｽﾞACT1のDISC";
            Gvar.item_description1 = "[遠距離ｽﾀﾝﾄﾞ]  攻撃力:0（ﾀﾞﾒｰｼﾞ無）";
            Gvar.effects_message = "音を貼り付けて敵を混乱させるぞ";
            Gvar.item_ability_description = "[発動]足元に音の罠を仕掛けるぞ";
            Gvar.var_1984 = 8;
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "ビシ！バギ！ボ！";
        }
        if (Gvar.belongings_item_list == 407) {
            Gvar.buying_price = 900;
            Gvar.item_name = "ﾊｲｴﾛﾌｧﾝﾄｴﾒﾗﾙﾄﾞのDISC";
            Gvar.item_description1 = "[遠距離ｽﾀﾝﾄﾞ]  攻撃力:15";
            Gvar.effects_message = "離れた敵にダメージを与えるぞ";
            Gvar.item_ability_description = "[発動]足元に法王の結界を仕掛けるぞ";
            Gvar.var_1984 = 3;
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "法王の結界";
        }
        if (Gvar.belongings_item_list == 408) {
            Gvar.buying_price = 750;
            Gvar.item_name = "ﾏﾝ･ｲﾝ･ｻﾞ･ﾐﾗｰのDISC";
            Gvar.item_description1 = "[遠距離ｽﾀﾝﾄﾞ]  攻撃力:0（ﾀﾞﾒｰｼﾞ無）";
            Gvar.effects_message = "敵と自分の場所が入れ替わるぞ";
            Gvar.item_ability_description = "[発動]鈍足になる鏡を仕掛けるぞ";
            Gvar.var_1984 = 5;
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "半分だけ許可する！";
        }
        if (Gvar.belongings_item_list == 409) {
            Gvar.buying_price = 550;
            Gvar.item_name = "ﾗﾊﾞｰｽﾞのDISC";
            Gvar.item_description1 = "[遠距離ｽﾀﾝﾄﾞ]  攻撃力:0（ﾀﾞﾒｰｼﾞ無）";
            Gvar.effects_message = "取り付いた敵は自分と同じﾀﾞﾒｰｼﾞを喰らうぞ";
            Gvar.item_ability_description = "[発動]足元にﾗﾊﾞｰｽﾞを潜ませておけるぞ";
            Gvar.var_1984 = 3;
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "ラバーズ";
        }
        if (Gvar.belongings_item_list == 410) { // Ver0.1401にて追加。没disc(ハイウェイスター。かつて射撃discだった?)。
            Gvar.buying_price = 0;
            Gvar.item_name = "";
            Gvar.item_description1 = "";
            Gvar.effects_message = "";
            Gvar.item_ability_description = "";
            Gvar.var_1984 = 0;
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "";
        }
        if (Gvar.belongings_item_list == 411) {
            Gvar.buying_price = 1300;
            Gvar.item_name = "ﾀﾜｰ･ｵﾌﾞ･ｸﾞﾚｰのDISC";
            Gvar.item_description1 = "[遠距離ｽﾀﾝﾄﾞ]  攻撃力:5";
            Gvar.effects_message = "敵を貫通するぞ";
            Gvar.item_ability_description = "[発動]近い距離に瞬間的に移動するぞ";
            Gvar.var_1984 = 3;
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "プン";
        }
        if (Gvar.belongings_item_list == 412) {
            Gvar.buying_price = 1600;
            Gvar.item_name = "ﾍﾌﾞﾝｽﾞﾄﾞｱｰのDISC";
            Gvar.item_description1 = "[遠距離ｽﾀﾝﾄﾞ]  攻撃力:0（ﾀﾞﾒｰｼﾞ無）";
            Gvar.effects_message = "特殊攻撃を封印するぞ。重ねがけもできるぞ。";
            Gvar.item_ability_description = "[発動]目の前の敵の情報がわかるぞ";
            Gvar.var_1984 = 4;
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "ヘブンズドアー";
        }
        if (Gvar.belongings_item_list == 413) { // Ver0.1401にて追加。没disc(サーフィス?)。
            Gvar.buying_price = 0;
            Gvar.item_name = "";
            Gvar.item_description1 = "";
            Gvar.effects_message = "";
            Gvar.item_ability_description = "";
            Gvar.var_1984 = 0;
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "";
        }
        if (Gvar.belongings_item_list == 414) {
            Gvar.buying_price = 1200;
            Gvar.item_name = "ﾀｽｸact2のDISC"; // Ver0.1401にて修正。ﾀｽｸのDISC → ﾀｽｸact2のDISC
            Gvar.item_description1 = "[遠距離ｽﾀﾝﾄﾞ]  攻撃力:12";
            Gvar.effects_message = "離れた敵にダメージを与えるぞ";
            Gvar.item_ability_description = "[発動]足元に移動する穴を仕掛けるぞ";
            Gvar.var_1984 = 7; // Ver0.1401にて修正。99 → 7
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "黄金の回転へ！";
        }
        if (Gvar.belongings_item_list == 415) { // Ver0.1401にて追加。
            Gvar.buying_price = 900;
            Gvar.item_name = "ﾀｽｸact1のDISC";
            Gvar.item_description1 = "[遠距離ｽﾀﾝﾄﾞ]  攻撃力:7";
            Gvar.effects_message = "離れた敵にダメージを与えるぞ";
            Gvar.item_ability_description = "[発動]素手でのダメージが増えるぞ";
            Gvar.var_1984 = 7; // 強化できるコミック部
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "僕の指の爪が！";
        }
        if (Gvar.belongings_item_list == 416) { // Ver0.1401にて追加。
            Gvar.buying_price = 5000;
            Gvar.item_name = "ﾀｽｸact3のDISC";
            Gvar.item_description1 = "[遠距離ｽﾀﾝﾄﾞ]  攻撃力:16";
            Gvar.effects_message = "離れた敵にダメージを与えるぞ";
            Gvar.item_ability_description = "[発動]足元に移動する穴を仕掛けるぞ";
            Gvar.var_1984 = 7; // 強化できるコミック部
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "黄金の回転へ！";
        }
        if (Gvar.belongings_item_list == 417) { // Ver0.1401にて追加。
            Gvar.buying_price = 2000;
            Gvar.item_name = "ﾗｯﾄのDISC";
            Gvar.item_description1 = "[遠距離ｽﾀﾝﾄﾞ]  攻撃力:4";
            Gvar.effects_message = "離れた敵にダメージを与えるぞ";
            Gvar.item_ability_description = "[発動]";
            Gvar.var_1984 = 4; // 強化できるコミック部
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "";
        }
        if (Gvar.belongings_item_list == 418) { // Ver0.1401にて追加。
            Gvar.buying_price = 1180;
            Gvar.item_name = "ｽｶｲ･ﾊｲのDISC";
            Gvar.item_description1 = "[遠距離ｽﾀﾝﾄﾞ]  攻撃力:0(ﾀﾞﾒｰｼﾞ無)";
            Gvar.effects_message = "敵を盲目にするぞ";
            Gvar.item_ability_description = "[発動]隣接した盲目の敵にﾀﾞﾒｰｼﾞを与えるぞ";
            Gvar.var_1984 = 6; // 強化できるコミック部
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "スカイ・ハイ！";
        }
        if (Gvar.belongings_item_list == 419) { // Ver0.1401にて追加。
            Gvar.buying_price = 1180;
            Gvar.item_name = "ﾁｭｰﾌﾞﾗｰ･ﾍﾞﾙｽﾞのDISC";
            Gvar.item_description1 = "[遠距離ｽﾀﾝﾄﾞ]  攻撃力:2";
            Gvar.effects_message = "離れた敵にダメージを与えるぞ";
            Gvar.item_ability_description = "[発動]敵の臭いを記憶するぞ";
            Gvar.var_1984 = 7; // 強化できるコミック部
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "追跡する世界です";
        }
        if (Gvar.belongings_item_list == 425) {
            Gvar.buying_price = 1100;
            Gvar.item_name = "ﾉｰﾍﾞﾝﾊﾞｰ･ﾚｲﾝのDISC";
            Gvar.item_description1 = "[遠距離ｽﾀﾝﾄﾞ]  攻撃力:11";
            Gvar.effects_message = "ダメージを与えて一歩押し出すぞ";
            Gvar.item_ability_description = "[発動]周囲を水浸しにして敵にダメージＤ";
            Gvar.var_1984 = 14;
            Gvar.var_2174 = 0;
            Gvar.var_2039 = "雨";
        }
        if (Gvar.belongings_item_list == 560) {
            Gvar.buying_price = 400;
            Gvar.item_name = "仗助のDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "髪型をけなされた気分になるぞ";
            Gvar.item_ability_description = "投げると敵が混乱するぞ";
            // Gvar.item_message1 = "プッツ―――――ン！";
        }
        if (Gvar.belongings_item_list == 562) {
            Gvar.buying_price = 1500;
            Gvar.item_name = "康一のDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "康一のように急成長するぞ";
            Gvar.item_ability_description = "レベルが１上がるぞ";
            // Gvar.item_message1 = "ﾃﾞｨｱﾎﾞﾛはレベルが上がった！";
        }
        if (Gvar.belongings_item_list == 563) {
            Gvar.buying_price = 400;
            Gvar.item_name = "ﾝﾄﾞｩｰﾙのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "盲目になるが敵の位置を感知できるぞ";
            Gvar.item_ability_description = "投げると一定時間盲目にするぞ";
            // Gvar.item_message1 = "目が見えなくなってしまった！";
        }
        if (Gvar.belongings_item_list == 564) {
            Gvar.buying_price = 500;
            Gvar.item_name = "噴上裕也のDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "匂いに敏感になるぞ";
            Gvar.item_ability_description = "このフロアの罠の位置を感知するぞ";
            // Gvar.item_message1 = "この階の罠の位置がわかった！";
        }
        if (Gvar.belongings_item_list == 565) {
            Gvar.buying_price = 400;
            Gvar.item_name = "ﾌﾟｯﾁ神父のDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "装備ｽﾀﾝﾄﾞにかかった呪いが解けるぞ";
            Gvar.item_ability_description = "";
            // Gvar.item_message1 = "どのアイテムに使いますか？";
        }
        if (Gvar.belongings_item_list == 566) {
            Gvar.buying_price = 500;
            Gvar.item_name = "ｹﾝｿﾞｰのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "身のかわしが上がるぞ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "攻撃をかわしやすくなった気がする！";
        }
        if (Gvar.belongings_item_list == 567) {
            Gvar.buying_price = 400;
            Gvar.item_name = "ｱｳﾞﾄﾞｩﾙのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "アイテムを鑑定できるぞ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "どのアイテムに使いますか？";
        }
        if (Gvar.belongings_item_list == 568) {
            Gvar.buying_price = 500;
            Gvar.item_name = "ｼﾞｮﾝｶﾞﾘ･AのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "この階で射撃ダメージがアップし、";
            Gvar.item_ability_description = "投げたアイテムが必ず当たるようになるぞ";
            Gvar.item_message1 = "射撃能力がアップした！";
        }
        if (Gvar.belongings_item_list == 569) {
            Gvar.buying_price = 500;
            Gvar.item_name = "ﾎﾟﾙﾅﾚﾌのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "この階で攻撃力が上がるぞ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "この階での攻撃力があがった！";
        }
        if (Gvar.belongings_item_list == 570) {
            Gvar.buying_price = 500;
            Gvar.item_name = "ｼﾞｮﾅｻﾝのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "この階で波紋が使えるようになり、";
            Gvar.item_ability_description = "吸血鬼に与えるダメージが大きくなるぞ";
            Gvar.item_message1 = "吸血鬼に与えるダメージが大きくなった！";
            Gvar.item_message2 = "";
        }
        if (Gvar.belongings_item_list == 571) {
            Gvar.buying_price = 500;
            Gvar.item_name = "ﾎﾞｲﾝｺﾞのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "次の階の予知ができるぞ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "「あ…新しいﾍﾟｰｼﾞが…現れたぞ…」";
        }
        if (Gvar.belongings_item_list == 572) {
            Gvar.buying_price = 500;
            Gvar.item_name = "承太郎のDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "この階で命中率が上がるぞ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "この階での命中率が上がった！";
        }
        if (Gvar.belongings_item_list == 573) {
            Gvar.buying_price = 400;
            Gvar.item_name = "重ちーのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "この階のｱｲﾃﾑの場所がわかるぞ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "ｱｲﾃﾑの場所がわかった！";
        }
        if (Gvar.belongings_item_list == 574) {
            Gvar.buying_price = 500;
            Gvar.item_name = "ｴﾝﾎﾟﾘｵのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "わけがわからず混乱してしまうぞ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "「うわあああああああ！」";
        }
        if (Gvar.belongings_item_list == 575) {
            Gvar.buying_price = 500;
            Gvar.item_name = "ﾏﾆｯｼｭﾎﾞｰｲのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "すやすやと眠ってしまうぞ";
            Gvar.item_ability_description = "投げると敵が眠るぞ";
            Gvar.item_message1 = "急に眠気が襲ってきた…";
        }
        if (Gvar.belongings_item_list == 576) {
            Gvar.buying_price = 400;
            Gvar.item_name = "破裂するDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "「10ターン後に破裂する！」と命令が書かれている";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "【10ターン後に破裂する！】";
        }
        if (Gvar.belongings_item_list == 577) {
            Gvar.buying_price = 900;
            Gvar.item_name = "ﾐｷﾀｶのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "サイコロに変身できるぞ";
            Gvar.item_ability_description = "変身中は敵に気づかれないぞ";
            Gvar.item_message1 = "サイコロに変身した。";
        }
        if (Gvar.belongings_item_list == 578) {
            Gvar.buying_price = 1500;
            Gvar.item_name = "ｻﾝﾄﾞﾏﾝのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "スピードがアップするぞ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "体の動きが早くなった！";
        }
        if (Gvar.belongings_item_list == 579) {
            Gvar.buying_price = 1500;
            Gvar.item_name = "ﾍﾟｯﾄｼｮｯﾌﾟのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "別の場所へ飛んでいくぞ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "別の場所へ飛んだ！";
        }
        if (Gvar.belongings_item_list == 580) {
            Gvar.buying_price = 1500;
            Gvar.item_name = "ﾄﾞｯﾋﾟｵのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "ﾄﾞｯﾋﾟｵと交代するぞ";
            Gvar.item_ability_description = "交代中は敵に気づかれないぞ";
            Gvar.item_message1 = "「まかせたぞ… 私のドッピオ…」";
        }
        if (Gvar.belongings_item_list == 582) {
            Gvar.buying_price = 300;
            Gvar.item_name = "水が熱湯になるDISC";
            Gvar.item_description1 = "[消耗DISC]";
            Gvar.effects_message = "水が熱湯になるぞ";
            Gvar.item_ability_description = "";
            // Gvar.item_message1 = "しかし何も起こらなかった…";
        }
        if (Gvar.belongings_item_list == 583) {
            Gvar.buying_price = 900;
            Gvar.item_name = "ﾃﾞｨｱﾎﾞﾛのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "地上に逃げ帰ることができるぞ";
            Gvar.item_ability_description = "一時退くのは敗北ではないぞ！";
            // Gvar.item_message1 = "";
        }
        if (Gvar.belongings_item_list == 584) {
            Gvar.buying_price = 500;
            Gvar.item_name = "ﾇｹｻｸのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "この階で攻撃力が下がってしまうぞ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "この階での攻撃力が下がってしまった！";
        }
        if (Gvar.belongings_item_list == 585) {
            Gvar.buying_price = 500;
            Gvar.item_name = "億泰のDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "ｻﾞ･ﾊﾝﾄﾞが使いこなせるようになるぞ";
            Gvar.item_ability_description = "この階でお腹が減りやすくなってしまうぞ";
            Gvar.item_message1 = "お腹が減りやすくなってしまった！";
        }
        if (Gvar.belongings_item_list == 586) {
            Gvar.buying_price = 900;
            Gvar.item_name = "ペッシのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "レベルが下がってしまうぞ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "レベルが下がってしまった！";
        }
        if (Gvar.belongings_item_list == 587) {
            Gvar.buying_price = 500;
            Gvar.item_name = "吉良吉影のDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "ｱｲﾃﾑのどれかひとつが爆弾になるぞ";
            Gvar.item_ability_description = "爆弾ｱｲﾃﾑがある時は解除できるぞ";
            // Gvar.item_message1 = "爆弾が解除された。";
        }
        if (Gvar.belongings_item_list == 588) {
            Gvar.buying_price = 400;
            Gvar.item_name = "J･ｶﾞｲﾙのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "非道なことを叫んで敵を怒らせるぞ";
            Gvar.item_ability_description = "フロアにいる敵全ての攻撃力が上がるぞ";
            Gvar.item_message1 = "全ての敵の攻撃力が上がった！";
        }
        if (Gvar.belongings_item_list == 589) {
            Gvar.buying_price = 500;
            Gvar.item_name = "ﾌﾟﾛｼｭｰﾄ兄貴のDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "この階で発動能力の効果が上がるぞ";
            Gvar.item_ability_description = "効果が上がっている発動は★がつくぞ";
            Gvar.item_message1 = "発動能力の効果が上がった！";
        }
        if (Gvar.belongings_item_list == 590) {
            Gvar.buying_price = 400;
            Gvar.item_name = "ｷﾞｱｯﾁｮのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "無性に腹が立ってｱｲﾃﾑを壊すぞ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "どのアイテムに使いますか？";
        }
        if (Gvar.belongings_item_list == 591) { // Ver0.1401にて追加
            Gvar.buying_price = 5000;
            Gvar.item_name = "ﾎﾟｺﾛｺのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "50億人にひとりの幸運が訪れる";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "何かラッキーなようだ";
        }
        if (Gvar.belongings_item_list == 592) { // Ver0.1401にて追加
            Gvar.buying_price = 3000;
            Gvar.item_name = "ｼﾞｮﾆｨのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "無性に腹が立ってｱｲﾃﾑを壊すぞ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "どのアイテムに使いますか？";
        }
        if (Gvar.belongings_item_list == 593) { // Ver0.1401にて追加
            Gvar.buying_price = 4200;
            Gvar.item_name = "ﾘﾝｺﾞｫのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "無性に腹が立ってｱｲﾃﾑを壊すぞ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "どのアイテムに使いますか？";
        }
        if (Gvar.belongings_item_list == 594) { // Ver0.1401にて追加
            Gvar.buying_price = 400;
            Gvar.item_name = "ﾂｪﾍﾟﾘ男爵のDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "無性に腹が立ってｱｲﾃﾑを壊すぞ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "どのアイテムに使いますか？";
        }
        if (Gvar.belongings_item_list == 598) {
            Gvar.buying_price = 100;
            Gvar.item_name = "ｳｪｻﾞｰのDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "無意識に悪魔の虹を発現させるぞ";
            Gvar.item_ability_description = "ｳｪｻﾞｰに投げると記憶を取り戻すぞ";
            Gvar.item_message1 = "「悪魔の虹」が大量にあらわれた！！";
        }
        if (Gvar.belongings_item_list == 599) {
            Gvar.buying_price = 100;
            Gvar.item_name = "汐華初流乃のDISC";
            Gvar.item_description1 = "[記憶DISC]";
            Gvar.effects_message = "汐華初流乃の記憶DISCだ";
            Gvar.item_ability_description = "承太郎のところへ持っていこう";
            Gvar.item_message1 = "致命的にDISCとの相性が悪いようだ･･･";
        }
        if (Gvar.belongings_item_list == 600) {
            Gvar.buying_price = 100;
            Gvar.item_name = "ﾋﾟｯﾂｧ";
            Gvar.item_description1 = "[食べ物]";
            Gvar.effects_message = "ﾌﾞﾁｬﾗﾃｨが食べてたｸｫｰﾀｰｻｲｽﾞのﾋﾟｯﾂｧだ";
            Gvar.item_ability_description = "満腹度が50回復するぞ";
            // Gvar.item_message1 = "お腹が少し膨らんだ";
        }
        if (Gvar.belongings_item_list == 602) {
            Gvar.buying_price = 400;
            Gvar.item_name = "ﾈｱﾎﾟﾘｽのﾋﾟｯﾂｧ";
            Gvar.item_description1 = "[食べ物]";
            Gvar.effects_message = "ﾈｱﾎﾟﾘｽの美味しいﾋﾟｯﾂｧだ";
            Gvar.item_ability_description = "満腹度が100回復するぞ";
            // Gvar.item_message1 = "お腹が膨らんだ";
        }
        if (Gvar.belongings_item_list == 603) {
            Gvar.buying_price = 50;
            Gvar.item_name = "くさったﾋﾟｯﾂｧ";
            Gvar.item_description1 = "[食べ物]";
            Gvar.effects_message = "変な臭いがする";
            Gvar.item_ability_description = "まずそうだぞ";
            // Gvar.item_message1 = "グェッ！精神力が下がってしまった！";
        }
        if (Gvar.belongings_item_list == 604) {
            Gvar.buying_price = 800;
            Gvar.item_name = "ﾎﾟﾙﾎﾟのﾋﾟｯﾂｧ";
            Gvar.item_description1 = "[食べ物]";
            Gvar.effects_message = "壁のような巨大なﾋﾟｯﾂｧだ";
            Gvar.item_ability_description = "満腹度が全回復し、最大満腹度が増えるぞ";
            // Gvar.item_message1 = "お腹いっぱいで動きが重い…";
        }
        if (Gvar.belongings_item_list == 605) {
            Gvar.buying_price = 50;
            Gvar.item_name = "焦げたﾋﾟｯﾂｧ";
            Gvar.item_description1 = "[食べ物]";
            Gvar.effects_message = "焼きすぎて焦げたﾋﾟｯﾂｧだ";
            Gvar.item_ability_description = "満腹度が10回復するぞ";
            // Gvar.item_message1 = "焦げてて食べられる部分が無い…";
        }
        if (Gvar.belongings_item_list == 630) {
            Gvar.buying_price = 600;
            Gvar.item_name = "娼婦風ｽﾊﾟｹﾞｯﾃｨ";
            Gvar.item_description1 = "[ﾄﾆｵ製料理]";
            Gvar.effects_message = "満腹度が20回復するぞ";
            Gvar.item_ability_description = "虫歯がすごい勢いで飛び出るぞ";
            // Gvar.item_message1 = "虫歯が飛び出した！";
        }
        if (Gvar.belongings_item_list == 631) {
            Gvar.buying_price = 600;
            Gvar.item_name = "ﾓｯﾂｧﾚﾗﾁｰｽﾞとﾄﾏﾄのｻﾗﾀﾞ";
            Gvar.item_description1 = "[ﾄﾆｵ製料理]";
            Gvar.effects_message = "満腹度が10回復するぞ";
            Gvar.item_ability_description = "精神力が回復するぞ";
            // Gvar.item_message1 = "元通り強くなった気がする。";
        }
        if (Gvar.belongings_item_list == 632) {
            Gvar.buying_price = 600;
            Gvar.item_name = "ｷﾘﾏﾝｼﾞｬﾛの雪解け水";
            Gvar.item_description1 = "[ﾄﾆｵ製料理]";
            Gvar.effects_message = "満腹度が10回復するぞ";
            Gvar.item_ability_description = "盲目状態が治るぞ。普通見えない物も見えるぞ。";
            // Gvar.item_message1 = "目がすっきりした！";
        }
        if (Gvar.belongings_item_list == 633) {
            Gvar.buying_price = 600;
            Gvar.item_name = "子羊背肉のﾘﾝｺﾞｿｰｽかけ";
            Gvar.item_description1 = "[ﾄﾆｵ製料理]";
            Gvar.effects_message = "満腹度が20回復するぞ";
            Gvar.item_ability_description = "最大満腹度が上がるぞ";
            // Gvar.item_message1 = "最大満腹度が上がった！";
        }
        if (Gvar.belongings_item_list == 634) {
            Gvar.buying_price = 600;
            Gvar.item_name = "ﾌﾟﾘﾝ";
            Gvar.item_description1 = "[ﾄﾆｵ製料理]";
            Gvar.effects_message = "満腹度が10回復するぞ";
            Gvar.item_ability_description = "鈍足・混乱や腹ヘリ状態が治るぞ。";
            // Gvar.item_message1 = "思うように動けるようになった。";
        }
        if (Gvar.belongings_item_list == 635) {
            Gvar.buying_price = 100;
            Gvar.item_name = "焦げた料理";
            Gvar.item_description1 = "[食べ物]";
            Gvar.effects_message = "満腹度が10回復するぞ";
            Gvar.item_ability_description = "";
            // Gvar.item_message1 = "焦げてて食べられる部分が無い…";
        }
        if (Gvar.belongings_item_list == 636) {
            Gvar.buying_price = 300;
            Gvar.item_name = "ｻﾝﾄﾞｲｯﾁ";
            Gvar.item_description1 = "[食べ物]";
            Gvar.effects_message = "平穏な気持ちになって精神力が１上がるぞ";
            Gvar.item_ability_description = "お腹も満腹になるぞ";
            // Gvar.item_message1 = "精神力が１上がった！";
        }
        if (Gvar.belongings_item_list == 639) {
            Gvar.buying_price = 100;
            Gvar.item_name = "ｶｴﾙの丸焼き";
            Gvar.item_description1 = "[食べ物]";
            Gvar.effects_message = "「ﾃｲｴﾝﾁｰ」と呼ばれる料理だ。";
            Gvar.item_ability_description = "満腹度が20回復するぞ";
            // Gvar.item_message1 = "お腹が少し膨らんだ";
        }
        if (Gvar.belongings_item_list == 640) {
            Gvar.buying_price = 50;
            Gvar.item_name = "焦げた食べ物";
            Gvar.item_description1 = "[食べ物]";
            Gvar.effects_message = "焦げた食べ物だ。";
            Gvar.item_ability_description = "満腹度が10回復するぞ";
            // Gvar.item_message1 = "焦げてて食べられる部分が無い…";
        }
        if (Gvar.belongings_item_list == 641) {
            Gvar.buying_price = 10;
            Gvar.item_name = "消し炭";
            Gvar.item_description1 = "[食べ物？]";
            Gvar.effects_message = "真っ黒に焦げた何かだ。";
            Gvar.item_ability_description = "食べると最大満腹度が下がってしまうぞ。";
            // Gvar.item_message1 = "お腹が痛い…";
        }
        if (Gvar.belongings_item_list == 644) {
            Gvar.buying_price = 400;
            Gvar.item_name = "猫バーガー";
            Gvar.item_description1 = "[食べ物]";
            Gvar.effects_message = "猫バーガーだ";
            Gvar.item_ability_description = "まずそうだぞ";
            Gvar.item_message1 = "グェッ！";
        }
        if (Gvar.belongings_item_list == 645) {
            Gvar.buying_price = 400;
            Gvar.item_name = "猫ステーキ";
            Gvar.item_description1 = "[食べ物]";
            Gvar.effects_message = "猫ステーキだ";
            Gvar.item_ability_description = "まずそうだぞ";
            Gvar.item_message1 = "グェッ！";
        }
        if (Gvar.belongings_item_list == 646) {
            Gvar.buying_price = 400;
            Gvar.item_name = "猫ジュース";
            Gvar.item_description1 = "[食べ物]";
            Gvar.effects_message = "猫ジュースだ";
            Gvar.item_ability_description = "まずそうだぞ";
            Gvar.item_message1 = "グェッ！";
        }
        if (Gvar.belongings_item_list == 647) {
            Gvar.buying_price = 400;
            Gvar.item_name = "オレンジ";
            Gvar.item_description1 = "[食べ物]";
            Gvar.effects_message = "美味しそうなオレンジだ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "お腹が少し膨らんだ";
        }
        if (Gvar.belongings_item_list == 648) {
            Gvar.buying_price = 200;
            Gvar.item_name = "鎌倉カスター";
            Gvar.item_description1 = "[食べ物]";
            Gvar.effects_message = "食べかけだ。";
            Gvar.item_ability_description = "満腹度が7回復するぞ";
            Gvar.item_message1 = "お腹が少し膨らんだ";
        }
        if (Gvar.belongings_item_list == 650) {
            Gvar.buying_price = 200;
            Gvar.item_name = "ｶｴﾙ";
            Gvar.item_description1 = "[ｶｴﾙ]";
            Gvar.effects_message = "小さなｶｴﾙだ";
            Gvar.item_ability_description = "食べると体力が５０回復するぞ";
            // Gvar.item_message1 = "体力が回復した";
        }
        if (Gvar.belongings_item_list == 651) {
            Gvar.buying_price = 500;
            Gvar.item_name = "大きいｶｴﾙ";
            Gvar.item_description1 = "[ｶｴﾙ]";
            Gvar.effects_message = "大きなｶｴﾙだ";
            Gvar.item_ability_description = "食べると体力が１００回復するぞ";
            // Gvar.item_message1 = "体力が回復した";
        }
        if (Gvar.belongings_item_list == 652) {
            Gvar.buying_price = 100;
            Gvar.item_name = "ｶｴﾙの死体";
            Gvar.item_description1 = "[ｶｴﾙ]";
            Gvar.effects_message = "ｶｴﾙの死体だ";
            Gvar.item_ability_description = "食べると体力が２０回復するぞ";
            // Gvar.item_message1 = "体力が回復した";
        }
        if (Gvar.belongings_item_list == 653) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "超巨大なｶｴﾙ";
            Gvar.item_description1 = "[ｶｴﾙ]";
            Gvar.effects_message = "超巨大なｶｴﾙだ";
            Gvar.item_ability_description = "食べると体力が完全回復するぞ";
            // Gvar.item_message1 = "体力が回復した";
        }
        if (Gvar.belongings_item_list == 654) {
            Gvar.buying_price = 100;
            Gvar.item_name = "ﾔﾄﾞｸｶﾞｴﾙ";
            Gvar.item_description1 = "[ｶｴﾙ]";
            Gvar.effects_message = "ﾔﾄﾞｸｶﾞｴﾙだ";
            Gvar.item_ability_description = "投げると８０のダメージを与えるぞ";
            // Gvar.item_message1 = "８０のダメージを受けた！";
        }
        if (Gvar.belongings_item_list == 655) {
            Gvar.buying_price = 100;
            Gvar.item_name = "ｻﾞﾘｶﾞﾆ";
            Gvar.item_description1 = "[ｻﾞﾘｶﾞﾆ]";
            Gvar.effects_message = "ｻﾞﾘｶﾞﾆだ";
            Gvar.item_ability_description = "食べると体力が１０回復するぞ";
            // Gvar.item_message1 = "体力が回復した";
        }

        
        if (Gvar.belongings_item_list == 700) {
            // 動的アイテム: var_1872(敵名)を使ってアイテム名を組み立てる
            // HSP: var_268 = var_555; gosub *label_0658 で var_1872 に敵名をセット
            Gvar.buying_price = 100;
            Gvar.item_name = "" + Gvar.var_1872 + "のｺｲﾝ";
            Gvar.item_description1 = "[魂のｺｲﾝ]";
            Gvar.effects_message = "" + Gvar.var_1872 + "の魂が入ったｺｲﾝだ";
            Gvar.item_ability_description = "" + Gvar.var_1872 + "の魂を取り込む事ができるぞ";
            Gvar.item_message1 = "" + Gvar.var_1872 + "の魂を取り込んだ！";
        }
        if (Gvar.belongings_item_list == 701) {
            // 動的アイテム: var_1872(敵名)を使ってアイテム名を組み立てる
            // HSP: var_268 = var_555; gosub *label_0658 で var_1872 に敵名をセット
            Gvar.buying_price = 100;
            Gvar.item_name = "" + Gvar.var_1872 + "の罠";
            Gvar.item_description1 = "[人質の罠]";
            Gvar.effects_message = "" + Gvar.var_1872 + "がﾍﾟﾗﾍﾟﾗになった姿だ";
            Gvar.item_ability_description = "使うと" + Gvar.var_1872 + "が近づくぞ";
            Gvar.item_message1 = "" + Gvar.var_1872 + "の罠だ！";
        }
        if (Gvar.belongings_item_list == 702) {
            // 動的アイテム: var_991(罠名)を使ってアイテム名を組み立てる
            // HSP: var_990 = var_555; gosub *label_0586 で var_991 に罠名をセット
            Gvar.buying_price = 0;
            Gvar.item_name = "" + Gvar.var_991;
            Gvar.item_description1 = "[罠]";
            Gvar.effects_message = "" + Gvar.var_2176;
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "" + Gvar.var_991 + "を設置した！";
        }
        if (Gvar.belongings_item_list == 703) {
            // 動的アイテム: var_991(罠名)を使ってアイテム名を組み立てる
            // HSP: var_990 = var_555; gosub *label_0586 で var_991 に罠名をセット
            Gvar.buying_price = 100;
            Gvar.item_name = "" + Gvar.var_991 + "の記憶";
            Gvar.item_description1 = "[罠の記憶]";
            Gvar.effects_message = "掘り起こした" + Gvar.var_991 + "の記憶だ";
            Gvar.item_ability_description = "" + Gvar.var_2177;
            Gvar.item_message1 = "";
        }
        if (Gvar.belongings_item_list == 712) {
            Gvar.buying_price = 10000;
            Gvar.item_name = "やばいクスリ";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "高値で取引されているブツだ";
            Gvar.item_ability_description = "体力が全回復するが混乱するぞ";
            Gvar.item_message1 = "  あっあっあっ          うﾋﾋ";
            Gvar.item_message2 = "  ウケケ      うおっうぉっ";
        }
        if (Gvar.belongings_item_list == 713) {
            Gvar.buying_price = 100;
            Gvar.item_name = "ﾎﾟﾙﾎﾟのﾗｲﾀｰ";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "入団テストに使うﾎﾟﾙﾎﾟのﾗｲﾀｰだ";
            Gvar.item_ability_description = "信頼を試すぞ";
            Gvar.item_message1 = "『再点火』したな！";
        }
        if (Gvar.belongings_item_list == 714) {
            Gvar.buying_price = 2000;
            Gvar.item_name = "紫外線照射装置";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "部屋全体に紫外線を照射するぞ";
            Gvar.item_ability_description = "吸血鬼やゾンビを消滅させるぞ";
            Gvar.item_message1 = "エネルギーが尽きた。";
        }
        if (Gvar.belongings_item_list == 715) {
            Gvar.buying_price = 500;
            Gvar.item_name = "点滴";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "ブドウ糖とビタミン栄養剤の点滴だ";
            Gvar.item_ability_description = "満腹度が30回復するぞ";
            Gvar.item_message1 = "「栄養補給させてもらったぜ！」";
        }
        if (Gvar.belongings_item_list == 716) {
            Gvar.buying_price = 2000;
            Gvar.item_name = "恐竜の化石";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "ｽﾋﾟﾉｻｳﾙｽの化石だ。使うと危険だぞ。";
            Gvar.item_ability_description = "持っていると一巡後の世界に変化があるぞ";
            Gvar.item_message1 = "声の主は去っていったようだ…";
        }
        if (Gvar.belongings_item_list == 717) {
            Gvar.buying_price = 100;
            Gvar.item_name = "ｺﾋﾟｰ人形の破片";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "コピー人形の破片だ";
            Gvar.item_message1 = "しかし何も起こらなかった…";
        }
        if (Gvar.belongings_item_list == 718) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "聖なる弓矢";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "装備中のDISCの合成容量が1増えるぞ";
            Gvar.item_ability_description = "";
            // Gvar.item_message1 = "";
        }
        if (Gvar.belongings_item_list == 719) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "吉良の弓矢";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "装備中のDISCに新たな能力が増えるぞ";
            Gvar.item_ability_description = "";
            // Gvar.item_message1 = "";
        }
        if (Gvar.belongings_item_list == 720) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "ときのがくぼう";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "５ターン 時を止められるぞ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "時は止まった…";
        }
        if (Gvar.belongings_item_list == 721) {
            Gvar.buying_price = 100;
            Gvar.item_name = "彼女の手首";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "手首だ";
            Gvar.item_message1 = "しかし何も起こらなかった…";
        }
        if (Gvar.belongings_item_list == 722) {
            Gvar.buying_price = 100;
            Gvar.item_name = "ｼｰｻﾞｰのﾊﾞﾝﾀﾞﾅ";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "ｼｰｻﾞｰの残したﾊﾞﾝﾀﾞﾅだ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "「おめえどこだ！」";
        }
        if (Gvar.belongings_item_list == 723) {
            Gvar.buying_price = 1500;
            Gvar.item_name = "魔法のランプ";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "願いを叶えてくれるランプだ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "カリカリカリカリ・・・";
        }
        if (Gvar.belongings_item_list == 724) {
            Gvar.buying_price = 1500;
            Gvar.item_name = "石仮面";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "吸血鬼体質になる仮面だ";
            Gvar.item_ability_description = "体力が急速に回復するようになるぞ";
            Gvar.item_message1 = "「俺は人間をやめるぞォ――！」";
        }
        if (Gvar.belongings_item_list == 725) {
            Gvar.buying_price = 100;
            Gvar.item_name = "ｵﾚｯちのｺｰﾄ";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "ﾔｸ中のｺﾞﾛﾂｷが大事にしているｺｰﾄだ";
            Gvar.item_ability_description = "持っていると危険だぞ";
            Gvar.item_message1 = "特に何も起こらなかった…";
        }
        if (Gvar.belongings_item_list == 726) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "鉄球";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "このフロアで射撃ダメージを少なくするぞ";
            Gvar.item_ability_description = "投げると８０のダメージを与えるぞ";
            Gvar.item_message1 = "「鉄球の回転」";
            Gvar.item_message2 = "皮膚が硬くなった！";
        }
        if (Gvar.belongings_item_list == 727) {
            Gvar.buying_price = 1000;
            Gvar.item_name = "ｿﾞﾝﾋﾞ馬";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "体力が完全回復するぞ";
            Gvar.item_ability_description = "";
            Gvar.item_message1 = "体力が完全に回復した！";
            Gvar.item_message2 = "";
        }
        if (Gvar.belongings_item_list == 728) {
            Gvar.buying_price = 2000;
            Gvar.item_name = "赤石つき石仮面";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "究極生物体質になる仮面だ。ﾚｸｲｴﾑの大迷宮を";
            Gvar.item_ability_description = "特定条件でｸﾘｱすると出現しはじめるぞ。";
            Gvar.item_message1 = "「フン！」";
            Gvar.item_message2 = "";
        }
        if (Gvar.belongings_item_list == 729) {
            Gvar.buying_price = 2000;
            Gvar.item_name = "吉良の財布";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "こいつはプレゼントか～～？";
            Gvar.item_ability_description = "もらっておいてやるぜ……オジサン";
            // Gvar.item_message1 = "";
            // Gvar.item_message2 = "";
        }
        if (Gvar.belongings_item_list == 730) {
            Gvar.buying_price = 3000;
            Gvar.item_name = "大家のカバン";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "大金が入ってそうなカバンだ。";
            Gvar.item_ability_description = "";
            // Gvar.item_message1 = "";
            // Gvar.item_message2 = "";
        }
        if (Gvar.belongings_item_list == 731) {
            Gvar.buying_price = 500;
            Gvar.item_name = "盗まれた財布";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "玉美がカツアゲした財布だ。";
            Gvar.item_ability_description = "お金が入っているように見えるぞ。";
            // Gvar.item_message1 = "";
            // Gvar.item_message2 = "";
        }
        if (Gvar.belongings_item_list == 732) {
            Gvar.buying_price = 1500;
            Gvar.item_name = "ﾍﾞﾙﾄのﾊﾞｯｸﾙ";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "黄金比で作られたバックルだ"; // Ver0.1403にて修正。句読点の「。」を削除
            Gvar.item_ability_description = "ﾀｽｸact1をact2へ進化させるぞ"; // Ver0.1403にて修正。句読点の「。」を削除
            // Gvar.item_message1 = "";
            // Gvar.item_message2 = "";
        }        
        if (Gvar.belongings_item_list == 750) {
            Gvar.buying_price = 390;
            Gvar.item_name = "STEEL BALL RUN  7巻";
            Gvar.item_description1 = "7部のコミックスだ";
            Gvar.effects_message = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            Gvar.item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 751) {
            Gvar.buying_price = 390;
            Gvar.item_name = "STEEL BALL RUN  8巻";
            Gvar.item_description1 = "7部のコミックスだ";
            Gvar.effects_message = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            Gvar.item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 752) {
            Gvar.buying_price = 390;
            Gvar.item_name = "STEEL BALL RUN  9巻";
            Gvar.item_description1 = "7部のコミックスだ";
            Gvar.effects_message = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            Gvar.item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 753) {
            Gvar.buying_price = 390;
            Gvar.item_name = "STEEL BALL RUN  10巻";
            Gvar.item_description1 = "7部のコミックスだ";
            Gvar.effects_message = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            Gvar.item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 754) {
            Gvar.buying_price = 390;
            Gvar.item_name = "STEEL BALL RUN  11巻";
            Gvar.item_description1 = "7部のコミックスだ";
            Gvar.effects_message = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            Gvar.item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 755) {
            Gvar.buying_price = 390;
            Gvar.item_name = "STEEL BALL RUN  12巻";
            Gvar.item_description1 = "7部のコミックスだ";
            Gvar.effects_message = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            Gvar.item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 756) {
            Gvar.buying_price = 390;
            Gvar.item_name = "STEEL BALL RUN  13巻";
            Gvar.item_description1 = "7部のコミックスだ";
            Gvar.effects_message = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            Gvar.item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 757) {
            Gvar.buying_price = 390;
            Gvar.item_name = "STEEL BALL RUN  14巻";
            Gvar.item_description1 = "7部のコミックスだ";
            Gvar.effects_message = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            Gvar.item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 758) {
            Gvar.buying_price = 390;
            Gvar.item_name = "STEEL BALL RUN  15巻";
            Gvar.item_description1 = "7部のコミックスだ";
            Gvar.effects_message = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            Gvar.item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 799) {
            Gvar.buying_price = 20;
            Gvar.item_name = "装備＋９９";
            Gvar.item_description1 = "[消費ｱｲﾃﾑ]";
            Gvar.effects_message = "テスト用のアイテムだ";
            Gvar.item_ability_description = "装備品の修正値が９９になるぞ";
            Gvar.item_message1 = "装備品が強くなった！";
        }
        if (Gvar.belongings_item_list == 800) {
            Gvar.buying_price = 2400;
            Gvar.item_name = "ｴﾆｸﾞﾏの紙";
            Gvar.item_description1 = "[保管ｱｲﾃﾑ]";
            Gvar.effects_message = "何でも紙にして保管できるぞ";
            Gvar.item_ability_description = "ｱｲﾃﾑを自由に出し入れできるぞ";
            Gvar.var_1984 = 4;
        }
        if (Gvar.belongings_item_list == 801) {
            Gvar.buying_price = 400;
            Gvar.item_name = "形兆のDISCｹｰｽ";
            Gvar.item_description1 = "[保管ｱｲﾃﾑ]";
            Gvar.effects_message = "几帳面な形兆のDISCｹｰｽだ";
            Gvar.item_ability_description = "DISCが入っているぞ";
            Gvar.var_1984 = 4;
        }
        if (Gvar.belongings_item_list == 802) {
            Gvar.buying_price = 400;
            Gvar.item_name = "ﾄﾗｸﾀｰのﾀｲﾔ";
            Gvar.item_description1 = "[保管ｱｲﾃﾑ]";
            Gvar.effects_message = "F･FがDISCを保管しておいたﾀｲﾔだ";
            Gvar.item_ability_description = "DISCがたくさん入っているぞ";
            Gvar.var_1984 = 6;
        }
        if (Gvar.belongings_item_list == 803) {
            Gvar.buying_price = 400;
            Gvar.item_name = "ｻﾝｼﾞｪﾙﾏﾝの紙袋";
            Gvar.item_description1 = "[保管ｱｲﾃﾑ]";
            Gvar.effects_message = "ｻﾝｼﾞｪﾙﾏﾝの紙袋だ";
            Gvar.item_ability_description = "食料が入っているぞ";
            Gvar.var_1984 = 4;
        }
        if (Gvar.belongings_item_list == 804) {
            Gvar.buying_price = 400;
            Gvar.item_name = "露伴のカバン";
            Gvar.item_description1 = "[保管ｱｲﾃﾑ]";
            Gvar.effects_message = "露伴が資料を持ち運ぶ時のｶﾊﾞﾝだ";
            Gvar.item_ability_description = "コミックスが入っているぞ";
            Gvar.var_1984 = 4;
        }
        if (Gvar.belongings_item_list == 805) {
            Gvar.buying_price = 1600;
            Gvar.item_name = "ｸﾞｯﾁｮの死体";
            Gvar.item_description1 = "[ヤバイもの]";
            Gvar.effects_message = "グッチョの死体だ";
            Gvar.item_ability_description = "DISCを入れると歌いだすぞ";
            Gvar.var_1984 = 6;
        }
        if (Gvar.belongings_item_list == 806) {
            Gvar.buying_price = 4600;
            Gvar.item_name = "ｶﾙﾈの死体";
            Gvar.item_description1 = "[ヤバイもの]";
            Gvar.effects_message = "カルネの死体だ";
            Gvar.item_ability_description = "入れたものは喰われて消えるぞ";
            Gvar.var_1984 = 5;
        }
        if (Gvar.belongings_item_list == 807) {
            Gvar.buying_price = 4600;
            Gvar.item_name = "DIOの骨";
            Gvar.item_description1 = "[ヤバイもの]";
            Gvar.effects_message = "新しいものを生み出すDIOの骨だ";
            Gvar.item_ability_description = "装備DISCが合成されるぞ";
            Gvar.var_1984 = 6;
        }
        if (Gvar.belongings_item_list == 808) {
            Gvar.buying_price = 2400;
            Gvar.item_name = "聖人の眼球";
            Gvar.item_description1 = "[ヤバイもの]";
            Gvar.effects_message = "聖人の遺体の一部分だ";
            Gvar.item_ability_description = "持ち物が識別されるぞ";
            Gvar.var_1984 = 11;
        }
        if (Gvar.belongings_item_list == 809) {
            Gvar.buying_price = 2400;
            Gvar.item_name = "聖人の左腕";
            Gvar.item_description1 = "[ヤバイもの]";
            Gvar.effects_message = "聖人の遺体の一部分だ";
            Gvar.item_ability_description = "ｱｲﾃﾑの呪縛や爆弾化を解除するぞ";
            Gvar.var_1984 = 11;
        }
        if (Gvar.belongings_item_list == 810) {
            Gvar.buying_price = 400;
            Gvar.item_name = "ﾀﾞｰﾋﾞｰのｺｲﾝｹｰｽ";
            Gvar.item_description1 = "[保管ｱｲﾃﾑ]";
            Gvar.effects_message = "ﾀﾞｰﾋﾞｰのｺｲﾝｹｰｽだ";
            Gvar.item_ability_description = "魂のｺｲﾝを入れることができるぞ";
            Gvar.var_1984 = 3;
        }
        if (Gvar.belongings_item_list == 815) {
            Gvar.buying_price = 4600;
            Gvar.item_name = "ｴﾙﾒｪｽのｱﾚ";
            Gvar.item_description1 = "[ヤバイもの]";
            Gvar.effects_message = "ｷｯｽのｼｰﾙで入れたものが分裂するぞ";
            Gvar.item_ability_description = "装備品は数値も分裂するぞ";
            Gvar.var_1984 = 6;
        }
        if (Gvar.belongings_item_list == 816) {
            Gvar.buying_price = 2400;
            Gvar.item_name = "ﾐｷﾀｶのｶﾊﾞﾝ";
            Gvar.item_description1 = "[ヤバイもの]";
            Gvar.effects_message = "何でも出てくるﾐｷﾀｶのｶﾊﾞﾝだ";
            Gvar.item_ability_description = "ｱｲﾃﾑを入れると別のものにしてくれるぞ";
            Gvar.var_1984 = 4;
        }
        if (Gvar.belongings_item_list == 817) {
            Gvar.buying_price = 4600;
            Gvar.item_name = "乳母車";
            Gvar.item_description1 = "[ヤバイもの]";
            Gvar.effects_message = "透明な赤ちゃんが入っているようだ";
            Gvar.item_ability_description = "入れたものが見えなくなってしまうぞ";
            Gvar.var_1984 = 4;
        }
        if (Gvar.belongings_item_list == 850) {
            Gvar.buying_price = 2700;
            Gvar.item_name = "波紋のツボ";
            Gvar.item_description1 = "[ヤバイもの]";
            Gvar.effects_message = "ツボを突いて波紋が使えるようになるぞ。";
            Gvar.item_ability_description = "体力も回復し、状態異常が治るぞ。";
            Gvar.var_1984 = 0;
        }
        if (Gvar.belongings_item_list == 851) {
            Gvar.buying_price = 2500;
            Gvar.item_name = "ﾎﾙﾏｼﾞｵのﾋﾞﾝ";
            Gvar.item_description1 = "[ヤバイもの]";
            Gvar.effects_message = "敵に投げると小さくして入れられるぞ";
            Gvar.item_ability_description = "押すと目の前に混乱して出てくるぞ";
            Gvar.var_1984 = 5;
        }
        if (Gvar.belongings_item_list == 852) {
            Gvar.buying_price = 2600;
            Gvar.item_name = "ランドセル";
            Gvar.item_description1 = "[ヤバイもの]";
            Gvar.effects_message = "猫草が入っているランドセルだ";
            Gvar.item_ability_description = "押すと前方に強力な空気弾を発射するぞ";
            Gvar.var_1984 = 4;
        }
        if (Gvar.belongings_item_list == 853) {
            Gvar.buying_price = 2800;
            Gvar.item_name = "ｻｰﾌｨｽ人形";
            Gvar.item_description1 = "[ヤバイもの]";
            Gvar.effects_message = "10ﾀｰﾝの間、自分のｺﾋﾟｰが出現するぞ";
            Gvar.item_ability_description = "敵はコピー人形を優先して攻撃するぞ";
            Gvar.var_1984 = 4;
        }
        if (Gvar.belongings_item_list == 854) {
            Gvar.buying_price = 2900;
            Gvar.item_name = "聖人の脊椎";
            Gvar.item_description1 = "[ヤバイもの]";
            Gvar.effects_message = "他の場所に一瞬にして移動するぞ";
            Gvar.item_ability_description = "";
            Gvar.var_1984 = 11;
        }
        if (Gvar.belongings_item_list == 900) {
            Gvar.buying_price = 390;
            Gvar.item_name = "GP BOY";
            Gvar.item_description1 = "グランプリボーイのコミックスだ";
            Gvar.effects_message = "";
            Gvar.item_ability_description = "特に何も起こらないぞ";
            Gvar.item_message1 = "しかし何も起こらなかった";
        }
        if (Gvar.belongings_item_list == 901) {
            Gvar.buying_price = 360;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  1巻";
            Gvar.item_description1 = "1部のコミックスだ";
            Gvar.effects_message = "生命賛歌の素晴らしさを知ろう";
            Gvar.item_ability_description = "精神力の最大値が上がるぞ";
            Gvar.item_message1 = "精神力の最大値が１上がった！";
        }
        if (Gvar.belongings_item_list == 902) {
            Gvar.buying_price = 370;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  2巻";
            Gvar.item_description1 = "1部のコミックスだ";
            Gvar.effects_message = "生命賛歌の素晴らしさを知ろう";
            Gvar.item_ability_description = "精神力の最大値が上がるぞ";
            Gvar.item_message1 = "精神力の最大値が１上がった！";
        }
        if (Gvar.belongings_item_list == 903) {
            Gvar.buying_price = 360;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  3巻";
            Gvar.item_description1 = "1部のコミックスだ";
            Gvar.effects_message = "生命賛歌の素晴らしさを知ろう";
            Gvar.item_ability_description = "精神力の最大値が上がるぞ";
            Gvar.item_message1 = "精神力の最大値が１上がった！";
        }
        if (Gvar.belongings_item_list == 904) {
            Gvar.buying_price = 360;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  4巻";
            Gvar.item_description1 = "1部のコミックスだ";
            Gvar.effects_message = "生命賛歌の素晴らしさを知ろう";
            Gvar.item_ability_description = "精神力の最大値が上がるぞ";
            Gvar.item_message1 = "精神力の最大値が１上がった！";
        }
        if (Gvar.belongings_item_list == 905) {
            Gvar.buying_price = 360;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  5巻";
            Gvar.item_description1 = "1部のコミックスだ";
            Gvar.effects_message = "生命賛歌の素晴らしさを知ろう";
            Gvar.item_ability_description = "精神力の最大値が上がるぞ";
            Gvar.item_message1 = "精神力の最大値が１上がった！";
        }
        if (Gvar.belongings_item_list == 906) {
            Gvar.buying_price = 360;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  6巻";
            Gvar.item_description1 = "2部のコミックスだ";
            Gvar.effects_message = "肉体の限界を極める方法を知ろう";
            Gvar.item_ability_description = "最大ＨＰが５上がるぞ";
            Gvar.item_message1 = "最大ＨＰが５上がった！";
        }
        if (Gvar.belongings_item_list == 907) {
            Gvar.buying_price = 360;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  7巻";
            Gvar.item_description1 = "2部のコミックスだ";
            Gvar.effects_message = "肉体の限界を極める方法を知ろう";
            Gvar.item_ability_description = "最大ＨＰが５上がるぞ";
            Gvar.item_message1 = "最大ＨＰが５上がった！";
        }
        if (Gvar.belongings_item_list == 908) {
            Gvar.buying_price = 360;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  8巻";
            Gvar.item_description1 = "2部のコミックスだ";
            Gvar.effects_message = "肉体の限界を極める方法を知ろう";
            Gvar.item_ability_description = "最大ＨＰが５上がるぞ";
            Gvar.item_message1 = "最大ＨＰが５上がった！";
        }
        if (Gvar.belongings_item_list == 909) {
            Gvar.buying_price = 370;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  9巻";
            Gvar.item_description1 = "2部のコミックスだ";
            Gvar.effects_message = "肉体の限界を極める方法を知ろう";
            Gvar.item_ability_description = "最大ＨＰが５上がるぞ";
            Gvar.item_message1 = "最大ＨＰが５上がった！";
        }
        if (Gvar.belongings_item_list == 910) {
            Gvar.buying_price = 370;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  10巻";
            Gvar.item_description1 = "2部のコミックスだ";
            Gvar.effects_message = "肉体の限界を極める方法を知ろう";
            Gvar.item_ability_description = "最大ＨＰが５上がるぞ";
            Gvar.item_message1 = "最大ＨＰが５上がった！";
        }
        if (Gvar.belongings_item_list == 911) {
            Gvar.buying_price = 370;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  11巻";
            Gvar.item_description1 = "2部のコミックスだ";
            Gvar.effects_message = "肉体の限界を極める方法を知ろう";
            Gvar.item_ability_description = "最大ＨＰが５上がるぞ";
            Gvar.item_message1 = "最大ＨＰが５上がった！";
        }
        if (Gvar.belongings_item_list == 912) {
            Gvar.buying_price = 370;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  12巻";
            Gvar.item_description1 = "3部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 913) {
            Gvar.buying_price = 370;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  13巻";
            Gvar.item_description1 = "3部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 914) {
            Gvar.buying_price = 370;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  14巻";
            Gvar.item_description1 = "3部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 915) {
            Gvar.buying_price = 370;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  15巻";
            Gvar.item_description1 = "3部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 916) {
            Gvar.buying_price = 370;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  16巻";
            Gvar.item_description1 = "3部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 917) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  17巻";
            Gvar.item_description1 = "3部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 918) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  18巻";
            Gvar.item_description1 = "3部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 919) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  19巻";
            Gvar.item_description1 = "3部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 920) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  20巻";
            Gvar.item_description1 = "3部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 921) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  21巻";
            Gvar.item_description1 = "3部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 922) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  22巻";
            Gvar.item_description1 = "3部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 923) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  23巻";
            Gvar.item_description1 = "3部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 924) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  24巻";
            Gvar.item_description1 = "3部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 925) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  25巻";
            Gvar.item_description1 = "3部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 926) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  26巻";
            Gvar.item_description1 = "3部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 927) {
            Gvar.buying_price = 400;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  27巻";
            Gvar.item_description1 = "3部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 928) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  28巻";
            Gvar.item_description1 = "3部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 929) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  29巻";
            Gvar.item_description1 = "4部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 930) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  30巻";
            Gvar.item_description1 = "4部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 931) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  31巻";
            Gvar.item_description1 = "4部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 932) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  32巻";
            Gvar.item_description1 = "4部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 933) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  33巻";
            Gvar.item_description1 = "4部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 934) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  34巻";
            Gvar.item_description1 = "4部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 935) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  35巻";
            Gvar.item_description1 = "4部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 936) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  36巻";
            Gvar.item_description1 = "4部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 937) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  37巻";
            Gvar.item_description1 = "4部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 938) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  38巻";
            Gvar.item_description1 = "4部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 939) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  39巻";
            Gvar.item_description1 = "4部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 940) {
            Gvar.buying_price = 400;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  40巻";
            Gvar.item_description1 = "4部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 941) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  41巻";
            Gvar.item_description1 = "4部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 942) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  42巻";
            Gvar.item_description1 = "4部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 943) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  43巻";
            Gvar.item_description1 = "4部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 944) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  44巻";
            Gvar.item_description1 = "4部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 945) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  45巻";
            Gvar.item_description1 = "4部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 946) {
            Gvar.buying_price = 400;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  46巻";
            Gvar.item_description1 = "4部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 947) {
            Gvar.buying_price = 400;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  47巻";
            Gvar.item_description1 = "4部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 948) {
            Gvar.buying_price = 400;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  48巻";
            Gvar.item_description1 = "5部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 949) {
            Gvar.buying_price = 400;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  49巻";
            Gvar.item_description1 = "5部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 950) {
            Gvar.buying_price = 400;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  50巻";
            Gvar.item_description1 = "5部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 951) {
            Gvar.buying_price = 388;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  51巻";
            Gvar.item_description1 = "5部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 952) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  52巻";
            Gvar.item_description1 = "5部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 953) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  53巻";
            Gvar.item_description1 = "5部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 954) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  54巻";
            Gvar.item_description1 = "5部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 955) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  55巻";
            Gvar.item_description1 = "5部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 956) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  56巻";
            Gvar.item_description1 = "5部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 957) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  57巻";
            Gvar.item_description1 = "5部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 958) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  58巻";
            Gvar.item_description1 = "5部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 959) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  59巻";
            Gvar.item_description1 = "5部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 960) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  60巻";
            Gvar.item_description1 = "5部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 961) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  61巻";
            Gvar.item_description1 = "5部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 962) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  62巻";
            Gvar.item_description1 = "5部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 963) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ｼﾞｮｼﾞｮの奇妙な冒険  63巻";
            Gvar.item_description1 = "5部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 964) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ストーンオーシャン  1巻";
            Gvar.item_description1 = "6部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 965) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ストーンオーシャン  2巻";
            Gvar.item_description1 = "6部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 966) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ストーンオーシャン  3巻";
            Gvar.item_description1 = "6部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 967) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ストーンオーシャン  4巻";
            Gvar.item_description1 = "6部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 968) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ストーンオーシャン  5巻";
            Gvar.item_description1 = "6部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 969) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ストーンオーシャン  6巻";
            Gvar.item_description1 = "6部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 970) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ストーンオーシャン  7巻";
            Gvar.item_description1 = "6部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 971) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ストーンオーシャン  8巻";
            Gvar.item_description1 = "6部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 972) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ストーンオーシャン  9巻";
            Gvar.item_description1 = "6部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 973) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ストーンオーシャン  10巻";
            Gvar.item_description1 = "6部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 974) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ストーンオーシャン  11巻";
            Gvar.item_description1 = "6部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 975) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ストーンオーシャン  12巻";
            Gvar.item_description1 = "6部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 976) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ストーンオーシャン  13巻";
            Gvar.item_description1 = "6部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 977) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ストーンオーシャン  14巻";
            Gvar.item_description1 = "6部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 978) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ストーンオーシャン  15巻";
            Gvar.item_description1 = "6部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 979) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ストーンオーシャン  16巻";
            Gvar.item_description1 = "6部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 980) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ストーンオーシャン  17巻";
            Gvar.item_description1 = "6部のコミックスだ";
            Gvar.effects_message = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            Gvar.item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 981) {
            Gvar.buying_price = 390;
            Gvar.item_name = "STEEL BALL RUN  1巻";
            Gvar.item_description1 = "7部のコミックスだ";
            Gvar.effects_message = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            Gvar.item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 982) {
            Gvar.buying_price = 390;
            Gvar.item_name = "STEEL BALL RUN  2巻";
            Gvar.item_description1 = "7部のコミックスだ";
            Gvar.effects_message = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            Gvar.item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 983) {
            Gvar.buying_price = 390;
            Gvar.item_name = "STEEL BALL RUN  3巻";
            Gvar.item_description1 = "7部のコミックスだ";
            Gvar.effects_message = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            Gvar.item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 984) {
            Gvar.buying_price = 390;
            Gvar.item_name = "STEEL BALL RUN  4巻";
            Gvar.item_description1 = "7部のコミックスだ";
            Gvar.effects_message = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            Gvar.item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 985) {
            Gvar.buying_price = 390;
            Gvar.item_name = "STEEL BALL RUN  5巻";
            Gvar.item_description1 = "7部のコミックスだ";
            Gvar.effects_message = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            Gvar.item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 986) {
            Gvar.buying_price = 390;
            Gvar.item_name = "STEEL BALL RUN  6巻";
            Gvar.item_description1 = "7部のコミックスだ";
            Gvar.effects_message = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            Gvar.item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 987) {
            Gvar.buying_price = 370;
            Gvar.item_name = "バオー来訪者  1巻";
            Gvar.item_description1 = "バオー来訪者のコミックスだ";
            Gvar.effects_message = "";
            Gvar.item_ability_description = "最大ＨＰが１０上がるぞ";
            Gvar.item_message1 = "最大ＨＰが１０上がった！";
        }
        if (Gvar.belongings_item_list == 988) {
            Gvar.buying_price = 370;
            Gvar.item_name = "バオー来訪者  2巻";
            Gvar.item_description1 = "バオー来訪者のコミックスだ";
            Gvar.effects_message = "";
            Gvar.item_ability_description = "最大ＨＰが１０上がるぞ";
            Gvar.item_message1 = "最大ＨＰが１０上がった！";
        }
        if (Gvar.belongings_item_list == 989) {
            Gvar.buying_price = 370;
            Gvar.item_name = "魔少年ビーティー";
            Gvar.item_description1 = "魔少年ビーティーのコミックスだ";
            Gvar.effects_message = "";
            Gvar.item_ability_description = "精神力の最大値が５上がるぞ";
            Gvar.item_message1 = "精神力の最大値が５上がった！";
        }
        if (Gvar.belongings_item_list == 990) {
            Gvar.buying_price = 370;
            Gvar.item_name = "ゴージャス☆アイリン";
            Gvar.item_description1 = "ゴージャス☆アイリンのコミックスだ";
            Gvar.effects_message = "";
            Gvar.item_ability_description = "攻撃力・命中率・回避率がアップするぞ";
            Gvar.item_message1 = "わたし、残酷ですわよ";
        }
        if (Gvar.belongings_item_list == 991) {
            Gvar.buying_price = 1200;
            Gvar.item_name = "死刑執行中脱獄進行中";
            Gvar.item_description1 = "短編集だ";
            Gvar.effects_message = "";
            Gvar.item_ability_description = "レベルが一気に２上がるぞ";
            Gvar.item_message1 = "ディアボロはレベルが上がった！";
        }
        if (Gvar.belongings_item_list == 992) {
            Gvar.buying_price = 1800;
            Gvar.item_name = "変人偏屈列伝";
            Gvar.item_description1 = "短編集だ";
            Gvar.effects_message = "";
            Gvar.item_ability_description = "レベルが一気に２上がるぞ";
            Gvar.item_message1 = "ディアボロはレベルが上がった！";
        }
        if (Gvar.belongings_item_list == 993) {
            Gvar.buying_price = 2000;
            Gvar.item_name = "JOJO 6251";
            Gvar.item_description1 = "画集だ";
            Gvar.effects_message = "ｷｬﾗｸﾀｰの色使いを勉強しよう";
            Gvar.item_ability_description = "ｽﾀﾝﾄﾞの色を変更できるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 994) {
            Gvar.buying_price = 6800;
            Gvar.item_name = "JOJO A GOGO";
            Gvar.item_description1 = "凶器になりえる画集だ";
            Gvar.effects_message = "ｷｬﾗｸﾀｰの色使いを勉強しよう";
            Gvar.item_ability_description = "ｽﾀﾝﾄﾞの色を変更できるぞ";
            Gvar.item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (Gvar.belongings_item_list == 995) {
            Gvar.buying_price = 390;
            Gvar.item_name = "ピンクダークの少年";
            Gvar.item_description1 = "岸部露伴の単行本だ";
            Gvar.effects_message = "彼の原稿を見たものは本になってしまうぞ。";
            Gvar.item_ability_description = "目の前の相手に使うと情報がわかるぞ。";
            // Gvar.item_message1 = "";
        }
        if (Gvar.belongings_item_list == 996) {
            Gvar.buying_price = 20000;
            Gvar.item_name = "ﾋﾛﾋｺのｻｲﾝ色紙";
            Gvar.item_description1 = "超レアアイテムだぞ";
            Gvar.effects_message = "";
            Gvar.item_ability_description = "レベルが一気に１０上がるぞ";
            Gvar.item_message1 = "ディアボロはレベルが上がった！";
        }
        if (Gvar.var_869 == 1 || Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            return;
        }
        if (Gvar.var_375 == 1) {
            return;
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1) {
            return;
        }
        if (Gvar.var_1677 == 1) {
            return;
        }
        if (Gvar.var_800 == 1) {
            return;
        }
        if (Gvar.var_980 == 1) {
            return;
        }
        if (Gvar.var_2176 == 1) {
            return;
        }
        // No = 3 & 4 & 5 なので、ディアボロの試練、一巡後の世界、鉄の牢獄
        if (Gvar.dungeon_number == 3 || Gvar.dungeon_number == 4 || Gvar.dungeon_number == 5) {
            if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400 && Gvar.var_862[Gvar.belongings_item_list][0] == 0) {
                await Func.func503(); // 未識別状態のアイテムの説明を見た時のメッセージ処理
            }
        }
        // if (Gvar.var_862[Gvar.belongings_item_list][0] == 0 && Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) { // Ver0.1309にて修正。
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400 && Gvar.var_862[Gvar.belongings_item_list][0] == 0) {
            Gvar.var_2039 = "何かわからんが発動";
        }
        if (Gvar.belongings_item_list >= 560 && Gvar.belongings_item_list < 600 && Gvar.var_862[Gvar.belongings_item_list][0] == 0) {
            await Func.func503(); // 未識別状態のアイテムの説明を見た時のメッセージ処理
        }
        // No >= 2 なので、レクイエムの大迷宮、ディアボロの試練、一巡後の世界
        if (Gvar.dungeon_number >= 2) {
            if (Gvar.belongings_item_list >= 805 && Gvar.belongings_item_list < 900 && Gvar.var_862[Gvar.belongings_item_list][0] == 0) {
                await Func.func503(); // 未識別状態のアイテムの説明を見た時のメッセージ処理
            }
            if (Gvar.belongings_item_list == 800 && Gvar.var_862[Gvar.belongings_item_list][0] == 0) {
                await Func.func503(); // 未識別状態のアイテムの説明を見た時のメッセージ処理
            }
        }
        return;
}

export {func492}
