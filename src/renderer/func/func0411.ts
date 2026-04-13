import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 能力説明画面 (label_0411)
// 旧 func411 (投げ処理) とは別関数
async function func0411(this: any) {
    Gvar.var_1917 = [];
    Gvar.var_1896 = 1;
    Gvar.var_1918 = 1;
    Gvar.var_1919 = 100;
    for (let cnt0 = 0; cnt0 < 300; ++cnt0) {
        if (Gvar.var_177[Gvar.var_1919] == 1) {
            Gvar.belongings_item_list = Gvar.var_1919;
            await Func.func492();
            if (Gvar.var_1919 == 204) {
                Gvar.item_ability_description = "最大HPが" + Gvar.var_1147 + "上がっているぞ";
            }
            Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
            Gvar.var_1917[Gvar.var_1918][1] = "" + Gvar.item_ability_description;
            if (Gvar.var_812 == 1) {
                Gvar.var_1917[Gvar.var_1918][2] = "1";
            }
            if (Gvar.var_812 == 2) {
                Gvar.var_1917[Gvar.var_1918][2] = "2";
            }
            if (Gvar.var_812 == 3) {
                Gvar.var_1917[Gvar.var_1918][2] = "3";
            }
            if (Gvar.var_812 == 4) {
                Gvar.var_1917[Gvar.var_1918][2] = "4";
            }
            Gvar.var_1918++;
        }
        Gvar.var_1919++;
    }
    Gvar.var_1896 = 0;
    if (Gvar.var_176 != 0) {
        Gvar.enemy_list = Gvar.var_176;
        await Func.func626();
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "" + Gvar.enemy_name + "だぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_176 == 64 || Gvar.var_176 == 15 || Gvar.var_176 == 12 || Gvar.var_176 == 160 || Gvar.var_176 == 4 || Gvar.var_176 == 125 || Gvar.var_176 == 148 || Gvar.var_176 == 137 || Gvar.var_176 == 32 || Gvar.var_176 == 72 || Gvar.var_176 == 109 || Gvar.var_176 == 150 || Gvar.var_176 == 145 || Gvar.var_176 == 65) {
        Gvar.enemy_list = Gvar.var_176;
        await Func.func626();
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "特技をあと" + Gvar.var_120 + "回使えるぞ";
        if (Gvar.var_120 == 0) {
            Gvar.var_1917[Gvar.var_1918][2] = "5";
            Gvar.var_1917[Gvar.var_1918][1] = "もう特技を使えないぞ";
        }
        Gvar.var_1918++;
    }
    if (Gvar.var_176 == 138) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "5";
        Gvar.var_1917[Gvar.var_1918][1] = "殴られると凍らせることがあるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_176 == 76 || Gvar.var_176 == 77) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "5";
        Gvar.var_1917[Gvar.var_1918][1] = "ﾋﾟﾝﾁで成長する事があるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_176 == 92 || Gvar.var_176 == 91) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "5";
        Gvar.var_1917[Gvar.var_1918][1] = "ﾋﾟﾝﾁで成長するぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_176 == 30 && Gvar.var_120 > 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "5";
        Gvar.var_1917[Gvar.var_1918][1] = "ﾄﾄ神の予言を読んでいるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_176 == 79 && Gvar.var_120 == 1) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "5";
        Gvar.var_1917[Gvar.var_1918][1] = "ﾋﾟﾝﾁで成長するぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_144 != 0 || Gvar.var_149 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "5";
        Gvar.var_1917[Gvar.var_1918][1] = "目が見えないぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_143 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "5";
        Gvar.var_1917[Gvar.var_1918][1] = "混乱しているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_150 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "5";
        Gvar.var_1917[Gvar.var_1918][1] = "鈍足になっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_151 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "5";
        Gvar.var_1917[Gvar.var_1918][1] = "波紋の毒で自然回復しないぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_152 != 0 || Gvar.var_153 != 0 || Gvar.var_154 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "5";
        Gvar.var_1917[Gvar.var_1918][1] = "肉片が貼りついているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_157 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "5";
        Gvar.var_1917[Gvar.var_1918][1] = "体に磁力を帯びているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_147 != 0 || Gvar.var_146 != 0) {
        if (Gvar.var_218 == 0) {
            Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
            Gvar.var_1917[Gvar.var_1918][2] = "5";
            Gvar.var_1917[Gvar.var_1918][1] = "お腹が減りやすくなっているぞ";
            Gvar.var_1918++;
        }
    }
    if (Gvar.var_147 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "5";
        Gvar.var_1917[Gvar.var_1918][1] = "波紋使いからダメージを多く喰らうぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_125 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "5";
        Gvar.var_1917[Gvar.var_1918][1] = "攻撃力が下がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_192 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "5";
        Gvar.var_1917[Gvar.var_1918][1] = "射撃やｱｲﾃﾑを投げようとすると…";
        Gvar.var_1918++;
    }
    if (Gvar.var_200 != 0 || Gvar.var_201 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "5";
        Gvar.var_1917[Gvar.var_1918][1] = "変な物を念写してﾐﾆﾏｯﾌﾟが見えないぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_177[396] == 1) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "5";
        Gvar.var_1917[Gvar.var_1918][1] = "アイテムが朽ちるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_177[396] == 1) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "5";
        Gvar.var_1917[Gvar.var_1918][1] = "時間の経過が早いぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_218 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "お腹が減らないぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_178 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "体の動きが速いぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_149 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "敵の位置がわかるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_115 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "攻撃力が上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_119 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "攻撃をかわしやすいぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_127 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "命中率が上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_136 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "見えないものが見えているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_1920 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "ピンチの時に時間が戻るぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_137 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "目が冴えているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_138 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "罠が見えているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_140 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "時間が消し飛んでいるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_198 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "浮いているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_142 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "波紋を帯びた攻撃をするぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_142 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "水の上を歩けるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_147 != 0 || Gvar.var_207 == 1) {
        if (Gvar.var_151 == 0) {
            Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
            Gvar.var_1917[Gvar.var_1918][2] = "0";
            Gvar.var_1917[Gvar.var_1918][1] = "回復力がアップしているぞ";
            Gvar.var_1918++;
        }
    }
    if (Gvar.var_148 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "透明になっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_127 != 0 || Gvar.var_155 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "投げたアイテムが必ず当たるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_189 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "射撃ダメージが少なくなっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_189 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "爪の回転がアップするぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_159 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "攻撃を喰らうとお金を奪うぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_160 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "同じ敵に攻撃するほど強いぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_162 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "敵が罠にかかるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_166 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "狙撃衛星で弾丸を送るぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_167 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "攻撃を喰らうと後ろに弾むぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_168 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "時間が止まっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_172 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "弾丸を必ず止めるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_180 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "壁の中を移動できるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_195 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "体が壁をすり抜けるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_130 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "防御力が上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_182 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "自分の「状態」がよくわかるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_183 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "会心の一撃が出やすいぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_181 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "経験値が多く得られるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_193 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "発動の効果が上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_194 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "冷やされるのと燃やされるのに強いぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_155 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "射撃ﾀﾞﾒｰｼﾞが上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_207 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "与えるダメージが２倍になっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_207 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "喰らうダメージが半分になっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_199 != 0 || Gvar.var_137 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "ﾌｰﾌｧｲﾀｰｽﾞのﾀﾞﾒｰｼﾞが上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_177[308] == 1 && Gvar.var_935 != 0) {
        Gvar.enemy_list = Gvar.var_935;
        await Func.func626();
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "0";
        Gvar.var_1917[Gvar.var_1918][1] = "" + Gvar.enemy_name + "に恨みがあるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_177[117] == 1) {
        Gvar.var_1921 = 0;
        Gvar.var_1922 = Gvar.var_74;
        Gvar.var_1923 = Gvar.var_75;
        Gvar.var_1924 = Gvar.var_74 - 1;
        Gvar.var_1925 = Gvar.var_74 + 1;
        Gvar.var_1926 = Gvar.var_75 + 1;
        Gvar.var_1927 = Gvar.var_75 - 1;
        if (Gvar.var_1924 < 0) {
            Gvar.var_1924 = 0;
        }
        if (Gvar.var_1927 < 0) {
            Gvar.var_1927 = 0;
        }
        if (Gvar.var_1925 > Gvar.var_32) {
            Gvar.var_1925 = Gvar.var_32;
        }
        if (Gvar.var_1926 > Gvar.var_33) {
            Gvar.var_1926 = Gvar.var_33;
        }
        if (Gvar.var_82[Gvar.var_1922][Gvar.var_1923] == 13) {
            Gvar.var_1921 = Gvar.var_1921 + 1;
        }
        if (Gvar.var_91[Gvar.var_1922][Gvar.var_1923] != 0) {
            Gvar.var_1928 = Gvar.var_91[Gvar.var_1922][Gvar.var_1923];
            if (Gvar.var_92[Gvar.var_1928][0] == 37) {
                Gvar.var_1921 = Gvar.var_1921 + 1;
            }
        }
        if (Gvar.var_82[Gvar.var_1924][Gvar.var_1923] == 13) {
            Gvar.var_1921 = Gvar.var_1921 + 1;
        }
        if (Gvar.var_91[Gvar.var_1924][Gvar.var_1923] != 0) {
            Gvar.var_1928 = Gvar.var_91[Gvar.var_1924][Gvar.var_1923];
            if (Gvar.var_92[Gvar.var_1928][0] == 37) {
                Gvar.var_1921 = Gvar.var_1921 + 1;
            }
        }
        if (Gvar.var_82[Gvar.var_1925][Gvar.var_1923] == 13) {
            Gvar.var_1921 = Gvar.var_1921 + 1;
        }
        if (Gvar.var_91[Gvar.var_1925][Gvar.var_1923] != 0) {
            Gvar.var_1928 = Gvar.var_91[Gvar.var_1925][Gvar.var_1923];
            if (Gvar.var_92[Gvar.var_1928][0] == 37) {
                Gvar.var_1921 = Gvar.var_1921 + 1;
            }
        }
        if (Gvar.var_82[Gvar.var_1922][Gvar.var_1926] == 13) {
            Gvar.var_1921 = Gvar.var_1921 + 1;
        }
        if (Gvar.var_91[Gvar.var_1922][Gvar.var_1926] != 0) {
            Gvar.var_1928 = Gvar.var_91[Gvar.var_1922][Gvar.var_1926];
            if (Gvar.var_92[Gvar.var_1928][0] == 37) {
                Gvar.var_1921 = Gvar.var_1921 + 1;
            }
        }
        if (Gvar.var_82[Gvar.var_1922][Gvar.var_1927] == 13) {
            Gvar.var_1921 = Gvar.var_1921 + 1;
        }
        if (Gvar.var_91[Gvar.var_1922][Gvar.var_1927] != 0) {
            Gvar.var_1928 = Gvar.var_91[Gvar.var_1922][Gvar.var_1927];
            if (Gvar.var_92[Gvar.var_1928][0] == 37) {
                Gvar.var_1921 = Gvar.var_1921 + 1;
            }
        }
        if (Gvar.var_82[Gvar.var_1924][Gvar.var_1926] == 13) {
            Gvar.var_1921 = Gvar.var_1921 + 1;
        }
        if (Gvar.var_91[Gvar.var_1924][Gvar.var_1926] != 0) {
            Gvar.var_1928 = Gvar.var_91[Gvar.var_1924][Gvar.var_1926];
            if (Gvar.var_92[Gvar.var_1928][0] == 37) {
                Gvar.var_1921 = Gvar.var_1921 + 1;
            }
        }
        if (Gvar.var_82[Gvar.var_1925][Gvar.var_1926] == 13) {
            Gvar.var_1921 = Gvar.var_1921 + 1;
        }
        if (Gvar.var_91[Gvar.var_1925][Gvar.var_1926] != 0) {
            Gvar.var_1928 = Gvar.var_91[Gvar.var_1925][Gvar.var_1926];
            if (Gvar.var_92[Gvar.var_1928][0] == 37) {
                Gvar.var_1921 = Gvar.var_1921 + 1;
            }
        }
        if (Gvar.var_82[Gvar.var_1924][Gvar.var_1927] == 13) {
            Gvar.var_1921 = Gvar.var_1921 + 1;
        }
        if (Gvar.var_91[Gvar.var_1924][Gvar.var_1927] != 0) {
            Gvar.var_1928 = Gvar.var_91[Gvar.var_1924][Gvar.var_1927];
            if (Gvar.var_92[Gvar.var_1928][0] == 37) {
                Gvar.var_1921 = Gvar.var_1921 + 1;
            }
        }
        if (Gvar.var_82[Gvar.var_1925][Gvar.var_1927] == 13) {
            Gvar.var_1921 = Gvar.var_1921 + 1;
        }
        if (Gvar.var_91[Gvar.var_1925][Gvar.var_1927] != 0) {
            Gvar.var_1928 = Gvar.var_91[Gvar.var_1925][Gvar.var_1927];
            if (Gvar.var_92[Gvar.var_1928][0] == 37) {
                Gvar.var_1921 = Gvar.var_1921 + 1;
            }
        }
        Gvar.var_1929 = (Gvar.var_647 + 1) / 2;
        Gvar.var_1930 = Gvar.var_1929 * Gvar.var_1921;
        if (Gvar.var_1921 != 0) {
            Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
            Gvar.var_1917[Gvar.var_1918][2] = "0";
            Gvar.var_1917[Gvar.var_1918][1] = "水の近くでダメージ＋" + Gvar.var_1930;
            Gvar.var_1918++;
        }
    }
    if (Gvar.var_309 == 1 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が１上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 101 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で射撃攻撃力が上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 102 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 103 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が３上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 104 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で最大HPが" + Gvar.var_1148 + "上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 105 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で防御力が１上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 106 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で時々敵を感知するぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 107 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が１上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 108 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で攻撃力が３上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 109 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で射撃攻撃力が上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 110 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 111 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が３上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 112 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で攻撃力が３上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 113 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で防御力が１上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 114 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で時々敵を感知するぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 115 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が１上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 116 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で攻撃力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 117 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 118 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 119 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で落ちてるお金の金額が増えるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 120 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で腐った物でもおいしく食べるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 121 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で時々敵を感知するぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 122 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 123 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で落ちてるお金の金額が増えるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 124 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で腐った物でもおいしく食べるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 125 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 126 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 127 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 127 && Gvar.var_389 == 121 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴でﾊﾟｰﾌﾟﾙﾍｲｽﾞを制御できるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 128 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が３上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 129 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 130 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 131 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 131 && Gvar.var_389 == 121 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴でﾊﾟｰﾌﾟﾙﾍｲｽﾞを制御できるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 132 && Gvar.var_176 == 0 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 133 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 133 && Gvar.var_389 == 121 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴でﾊﾟｰﾌﾟﾙﾍｲｽﾞを制御できるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 134 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 134 && Gvar.var_389 == 121 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴でﾊﾟｰﾌﾟﾙﾍｲｽﾞを制御できるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 135 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で攻撃力が３上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 135 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "二刀流で連続攻撃ができるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 136 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で射撃命中率が上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 137 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 138 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が３上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 139 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で時々直線射撃を予知するぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 139 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で周囲３マス以内の敵を感知するぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 139 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で罠にかからないぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 140 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が３上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 141 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が３上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 142 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 143 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 144 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で防御力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 145 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で最大HPが" + Gvar.var_1148 + "上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 146 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で最大HPが" + Gvar.var_1148 + "上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 147 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 148 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 149 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 150 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 151 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 152 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 153 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が１上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 154 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で攻撃力が１上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 155 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で攻撃力が１上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 156 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で攻撃力が１上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 157 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 158 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "極稀にアレが出現するようになるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 159 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で最大HPが" + Gvar.var_1148 + "上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 160 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で攻撃力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 161 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で最大HPが" + Gvar.var_1148 + "上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 162 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で最大HPが" + Gvar.var_1148 + "上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 163 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で攻撃力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 164 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で攻撃力が３上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 165 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で攻撃力が３上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 166 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で透明なものが見えるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 167 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が１上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 168 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が１上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 169 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で落ちてるお金の金額が増えるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 170 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "ｼﾞｪｲﾙﾊｳｽﾛｯｸの罠にかからないぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 171 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で敵が深い眠りにつくぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 172 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "ｴﾝﾌﾟﾚｽが勝手に食べ物を食べるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 173 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 174 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 175 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 176 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 177 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で敵が鈍足になりやすいぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 178 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が１上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 179 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 180 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 181 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 182 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で精神力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 183 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で攻撃力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_309 == 184 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "6";
        Gvar.var_1917[Gvar.var_1918][1] = "共鳴で攻撃力が２上がっているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_389 == 104 && Gvar.var_176 == 0 || Gvar.var_176 == 47 || Gvar.var_176 == 67) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "会心の一撃かミスしか出ないぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_389 == 106 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "ﾌﾟｯﾂﾝ状態だと強いぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_240 == 106 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "玉美とすれ違っても罪悪感を感じないぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_177[105] == 1 && Gvar.var_1132 >= 2 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "反省しているぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_240 == 100 || Gvar.var_240 == 111 || Gvar.var_240 == 398 && Gvar.var_176 == 0 || Gvar.var_176 == 120 || Gvar.var_176 == 128) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "時間停止攻撃を防ぐぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_240 == 100 || Gvar.var_240 == 111 || Gvar.var_240 == 398 && Gvar.var_176 == 0 || Gvar.var_176 == 128 || Gvar.var_176 == 120 || Gvar.var_176 == 113 || Gvar.var_176 == 114) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "DIOが近くにいても階段を降りられるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_240 == 202 || Gvar.var_470 == 404 && Gvar.var_176 == 0 || Gvar.var_176 == 15 || Gvar.var_176 == 64) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "老化攻撃を防ぐぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_240 == 202 || Gvar.var_470 == 404 || Gvar.var_240 == 109 && Gvar.var_176 == 0 || Gvar.var_176 == 78 || Gvar.var_176 == 87 || Gvar.var_176 == 15 || Gvar.var_176 == 64) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "冷凍攻撃を防ぐぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_240 == 120 || Gvar.var_389 == 126 && Gvar.var_176 == 0 || Gvar.var_176 == 134 || Gvar.var_176 == 127) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "裏返り攻撃を防ぐぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_240 == 116 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "波紋を流されないぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_240 == 202 || Gvar.var_240 == 117 && Gvar.var_176 == 0 || Gvar.var_176 == 64) {
        if (Gvar.var_142 == 0) {
            Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
            Gvar.var_1917[Gvar.var_1918][2] = "7";
            Gvar.var_1917[Gvar.var_1918][1] = "水の上を歩けるぞ";
            Gvar.var_1918++;
        }
    }
    if (Gvar.var_240 == 112 || Gvar.var_240 == 204 || Gvar.var_240 == 394 || Gvar.var_240 == 395 && Gvar.var_176 == 0 || (Gvar.var_176 == 144 || Gvar.var_176 == 31 || Gvar.var_176 == 137)) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "親父の写真に閉じ込められないぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_240 == 112 || Gvar.var_240 == 204 || Gvar.var_240 == 394 || Gvar.var_240 == 395 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "爆弾を見分けられるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_240 == 112 || Gvar.var_240 == 394 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "爆弾ｱｲﾃﾑを投げると爆発するぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_240 == 109 && Gvar.var_176 == 0 || Gvar.var_176 == 78 || Gvar.var_176 == 87) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "火炎による特殊攻撃を防ぐぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_240 == 100 || Gvar.var_240 == 398 && Gvar.var_176 == 0 || Gvar.var_176 == 120 || Gvar.var_176 == 128) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "ﾛｰﾄﾞﾛｰﾗｰの罠のﾀﾞﾒｰｼﾞを半減するぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_240 == 113 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "ﾄｰｷﾝｸﾞﾍｯﾄﾞの罠を防ぐぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_240 == 115 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "歯をクラゲに変えられるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_240 == 202 && Gvar.var_176 == 0 || Gvar.var_176 == 64) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "アイテムのカエル化を防ぐぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_240 == 206 || Gvar.var_240 == 108 && Gvar.var_176 == 0 || Gvar.var_147 != 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "ｸﾞﾘｰﾝﾃﾞｨがいても低いところに降りられるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_470 == 400 || Gvar.var_470 == 407 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "夢の世界に引き込まれるのを防ぐぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_470 == 401 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "ﾎﾜｲﾄｽﾈｲｸの罠でF･Fが優先的に外されるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_470 == 402 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "鏡を踏んでもﾊﾝｸﾞﾄﾞﾏﾝに刺されないぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_470 == 403 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "ﾛｰﾘﾝｸﾞｽﾄｰﾝの罠のﾀﾞﾒｰｼﾞを半減するぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_470 == 405 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "装備中のDISCに由花子の呪いがかからないぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_470 == 406 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "カツアゲに負けない自信がつくぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_470 == 408 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "殺人ｳｲﾙｽのﾀﾞﾒｰｼﾞを半減するぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_470 == 409 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "敵のﾗﾊﾞｰｽﾞがｳｼﾞｭｳｼﾞｭ増えないぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_470 == 411 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "落とし穴に落ちないぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_470 == 412 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "ﾍﾌﾞﾝｽﾞﾄﾞｱｰの罠を書き換えるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_470 == 414 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "ﾜｲｱｰﾄﾞの罠で自分が釣られるぞ";
        Gvar.var_1918++;
    }
    if (Gvar.var_470 == 425 && Gvar.var_176 == 0) {
        Gvar.var_1917[Gvar.var_1918] = Gvar.var_1917[Gvar.var_1918] || [];
        Gvar.var_1917[Gvar.var_1918][2] = "7";
        Gvar.var_1917[Gvar.var_1918][1] = "敵の盗んだｱｲﾃﾑが足元に落ちるぞ";
        Gvar.var_1918++;
    }
    Gvar.var_1931 = 1;
}

export {func0411}
