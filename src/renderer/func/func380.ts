import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 状態異常確認呼び出し
async function func380(this: any) {
        Adap.dbgprt(380);

        Gvar.var_1706 = Adap.sdim(1000, 70, 3);
        Gvar.var_1677 = 1;
        Gvar.var_1707 = 1;
        Gvar.var_1708 = 100;
        for (let cnt1 = 0; cnt1 < 300; ++cnt1) {
            if (Gvar.equip_disc[Gvar.var_1708] == 1) {
                Gvar.belongings_item_list = Gvar.var_1708;
                await Func.func492(); // アイテムリスト呼び出し
                // No = 204:ｼｱｰﾊｰﾄｱﾀｯｸのDISC
                if (Gvar.var_1708 == 204) {
                    Gvar.item_ability_description = "最大HPが" + Gvar.var_1047 + "上がっているぞ";
                }
                Gvar.var_1706[Gvar.var_1707][1] = "" + Gvar.item_ability_description;
                if (Gvar.var_812 == 1) {
                    Gvar.var_1706[Gvar.var_1707][2] = "1";
                }
                if (Gvar.var_812 == 2) {
                    Gvar.var_1706[Gvar.var_1707][2] = "2";
                }
                if (Gvar.var_812 == 3) {
                    Gvar.var_1706[Gvar.var_1707][2] = "3";
                }
                if (Gvar.var_812 == 4) {
                    Gvar.var_1706[Gvar.var_1707][2] = "4";
                }
                Gvar.var_1707++;
            }
            Gvar.var_1708++;
        }
        Gvar.var_1677 = 0;
        if (Gvar.var_127 != 0 || Gvar.var_132 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "5";
            Gvar.var_1706[Gvar.var_1707][1] = "目が見えないぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_126 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "5";
            Gvar.var_1706[Gvar.var_1707][1] = "混乱しているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_133 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "5";
            Gvar.var_1706[Gvar.var_1707][1] = "鈍足になっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_134 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "5";
            Gvar.var_1706[Gvar.var_1707][1] = "波紋の毒で自然回復しないぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_135 != 0 || Gvar.var_136 != 0 || Gvar.var_137 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "5";
            Gvar.var_1706[Gvar.var_1707][1] = "肉片が貼りついているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_140 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "5";
            Gvar.var_1706[Gvar.var_1707][1] = "体に磁力を帯びているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_130 != 0 || Gvar.var_129 != 0) {
            if (Gvar.var_193 == 0) {
                Gvar.var_1706[Gvar.var_1707][2] = "5";
                Gvar.var_1706[Gvar.var_1707][1] = "お腹が減りやすくなっているぞ";
                Gvar.var_1707++;
            }
        }
        if (Gvar.var_130 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "5";
            Gvar.var_1706[Gvar.var_1707][1] = "波紋使いからダメージを多く喰らうぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_109 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "5";
            Gvar.var_1706[Gvar.var_1707][1] = "攻撃力が下がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_171 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "5";
            Gvar.var_1706[Gvar.var_1707][1] = "射撃やｱｲﾃﾑを投げようとすると…";
            Gvar.var_1707++;
        }
        if (Gvar.var_175 != 0 || Gvar.var_176 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "5";
            Gvar.var_1706[Gvar.var_1707][1] = "変な物を念写してﾐﾆﾏｯﾌﾟが見えないぞ";
            Gvar.var_1707++;
        }
        if (Gvar.equip_disc[396] == 1) {
            Gvar.var_1706[Gvar.var_1707][2] = "5";
            Gvar.var_1706[Gvar.var_1707][1] = "アイテムが朽ちるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.equip_disc[396] == 1) {
            Gvar.var_1706[Gvar.var_1707][2] = "5";
            Gvar.var_1706[Gvar.var_1707][1] = "時間の経過が早いぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_193 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "お腹が減らないぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_157 != 0) { // Gvar.var_157 倍速移動フラグOFFでなければ
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "体の動きが速いぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_132 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "敵の位置がわかるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_104 != 0) { // Gvar.var_104 攻撃力が上がるフラグがOFFでなければ
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "攻撃力が上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_105 != 0) { // Gvar.var_105 攻撃を躱わしやすくなるフラグがOFFでなければ
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "攻撃をかわしやすいぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_111 != 0) { // Gvar.var_111 命中率を上げるフラグがOFFでなければ
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "命中率が上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_119 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "見えないものが見えているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_1709 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "ピンチの時に時間が戻るぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_120 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "目が冴えているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_121 != 0) { // Gvar.var_121 罠が見えるようになるフラグがOFFでなければ
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "罠が見えているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_123 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "時間が消し飛んでいるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_125 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "波紋を帯びた攻撃をするぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_125 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "水の上を歩けるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_130 != 0 || Gvar.var_182 == 1) {
            if (Gvar.var_134 == 0) {
                Gvar.var_1706[Gvar.var_1707][2] = "0";
                Gvar.var_1706[Gvar.var_1707][1] = "回復力がアップしているぞ";
                Gvar.var_1707++;
            }
        }
        if (Gvar.var_131 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "透明になっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_111 != 0 || Gvar.var_138 != 0) { // Gvar.var_111 命中率を上げるフラグがOFFでなければ
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "投げたアイテムが必ず当たるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_168 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "射撃ダメージが少なくなっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_168 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "爪の回転がアップするぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_142 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "攻撃を喰らうとお金を奪うぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_143 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "同じ敵に攻撃するほど強いぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_145 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "敵が罠に触れるとﾀﾞﾒｰｼﾞをうけるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_149 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "狙撃衛星で弾丸を送るぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_150 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "攻撃を喰らうと後ろに弾むぞ";
            Gvar.var_1707++;
        }
        if (Gvar.time_paused_count != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "時間が止まっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_155 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "弾丸を必ず止めるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_159 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "壁の中を移動できるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_113 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "防御力が上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_161 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "自分の「状態」がよくわかるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_162 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "会心の一撃が出やすいぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_160 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "経験値が多く得られるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_172 != 0) { // Gvar.var_172 発動効果が向上するフラグがOFFでなければ
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "発動の効果が上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_173 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "冷やされるのと燃やされるのに強いぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_138 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "射撃ﾀﾞﾒｰｼﾞが上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_182 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "与えるダメージが２倍になっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_182 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "喰らうダメージが半分になっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.var_174 != 0 || Gvar.var_120 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "ﾌｰﾌｧｲﾀｰｽﾞのﾀﾞﾒｰｼﾞが上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.equip_disc[308] == 1 && Gvar.var_831 != 0) {
            Gvar.enemy_list = Gvar.var_831;
            await Func.func626();
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "" + Gvar.enemy_name + "に恨みがあるぞ";
            Gvar.var_1707++;
        }
        // Ver0.1401にて追加。タスクact1を発動したかどうかの確認フラグがONの時
        if (Gvar.taskact1_on != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "0";
            Gvar.var_1706[Gvar.var_1707][1] = "素手でのダメージが増えるぞ";
            Gvar.var_1707++;
        }        
        if (Gvar.equip_disc[117] == 1) {
            Gvar.var_1710 = 0;
            Gvar.var_1711 = Gvar.var_66;
            Gvar.var_1712 = Gvar.var_67;
            Gvar.var_1713 = Gvar.var_66 - 1;
            Gvar.var_1714 = Gvar.var_66 + 1;
            Gvar.var_1715 = Gvar.var_67 + 1;
            Gvar.var_1716 = Gvar.var_67 - 1;
            if (Gvar.var_1713 < 0) {
                Gvar.var_1713 = 0;
            }
            if (Gvar.var_1716 < 0) {
                Gvar.var_1716 = 0;
            }
            if (Gvar.var_1714 > Gvar.var_33) {
                Gvar.var_1714 = Gvar.var_33;
            }
            if (Gvar.var_1715 > Gvar.var_34) {
                Gvar.var_1715 = Gvar.var_34;
            }
            if (Gvar.var_71[Gvar.var_1711][Gvar.var_1712] == 13) {
                Gvar.var_1710 = Gvar.var_1710 + 1;
            }
            if (Gvar.var_71[Gvar.var_1713][Gvar.var_1712] == 13) {
                Gvar.var_1710 = Gvar.var_1710 + 1;
            }
            if (Gvar.var_71[Gvar.var_1714][Gvar.var_1712] == 13) {
                Gvar.var_1710 = Gvar.var_1710 + 1;
            }
            if (Gvar.var_71[Gvar.var_1711][Gvar.var_1715] == 13) {
                Gvar.var_1710 = Gvar.var_1710 + 1;
            }
            if (Gvar.var_71[Gvar.var_1711][Gvar.var_1716] == 13) {
                Gvar.var_1710 = Gvar.var_1710 + 1;
            }
            if (Gvar.var_71[Gvar.var_1713][Gvar.var_1715] == 13) {
                Gvar.var_1710 = Gvar.var_1710 + 1;
            }
            if (Gvar.var_71[Gvar.var_1714][Gvar.var_1715] == 13) {
                Gvar.var_1710 = Gvar.var_1710 + 1;
            }
            if (Gvar.var_71[Gvar.var_1713][Gvar.var_1716] == 13) {
                Gvar.var_1710 = Gvar.var_1710 + 1;
            }
            if (Gvar.var_71[Gvar.var_1714][Gvar.var_1716] == 13) {
                Gvar.var_1710 = Gvar.var_1710 + 1;
            }
            Gvar.var_1717 = Math.floor((Gvar.var_565 + 1) / 2);
            Gvar.var_1718 = Gvar.var_1717 * Gvar.var_1710;
            if (Gvar.var_1710 != 0) {
                Gvar.var_1706[Gvar.var_1707][2] = "0";
                Gvar.var_1706[Gvar.var_1707][1] = "水の近くでダメージ＋" + Gvar.var_1718;
                Gvar.var_1707++;
            }
        }
        if (Gvar.sympathy_id == 1) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 101) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で射撃攻撃力が上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 102) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 103) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 104) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で最大HPが" + Gvar.var_1048 + "上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 105) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で防御力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 106) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で時々敵を感知するぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 107) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 108) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で攻撃力が３上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 109) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で射撃攻撃力が上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 110) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 111) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 112) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で攻撃力が３上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 113) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で防御力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 114) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で時々敵を感知するぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 115) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 116) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で攻撃力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 117) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 118) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 119) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で落ちてるお金の金額が増えるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 120) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で腐った物でもおいしく食べるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 121) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で時々敵を感知するぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 122) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 123) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で落ちてるお金の金額が増えるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 124) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で腐った物でもおいしく食べるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 125) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 126) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 127) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 128) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が２上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 129) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 130) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 131) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 132) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 133) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 134) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が２上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 135) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で攻撃力が３上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 135) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "二刀流で連続攻撃ができるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 136) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で射撃命中率が上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 137) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 138) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が２上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 139) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で罠にかからないぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 140) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が２上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 141) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が３上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 142) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が２上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 143) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が２上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 144) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で防御力が２上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 145) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で最大HPが" + Gvar.var_1048 + "上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 146) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で最大HPが" + Gvar.var_1048 + "上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 147) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が２上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 148) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が２上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 149) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 150) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 151) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 152) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 153) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 154) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で攻撃力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 155) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で攻撃力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 156) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で攻撃力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 157) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が２上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 158) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 159) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で最大HPが" + Gvar.var_1048 + "上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 160) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で攻撃力が２上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 161) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で最大HPが" + Gvar.var_1048 + "上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 162) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で最大HPが" + Gvar.var_1048 + "上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 163) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で攻撃力が２上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 164) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で攻撃力が３上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 165) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で攻撃力が３上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 166) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で透明なものが見えるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 167) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.sympathy_id == 168) {
            Gvar.var_1706[Gvar.var_1707][2] = "6";
            Gvar.var_1706[Gvar.var_1707][1] = "共鳴で精神力が１上がっているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.kougeki_disc_id  == 104) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "会心の一撃かミスしか出ないぞ";
            Gvar.var_1707++;
        }
        if (Gvar.kougeki_disc_id  == 106) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "ﾌﾟｯﾂﾝ状態だと強いぞ";
            Gvar.var_1707++;
        }
        if (Gvar.equip_disc[105] == 1 && Gvar.var_1030 >= 2) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "反省しているぞ";
            Gvar.var_1707++;
        }
        if (Gvar.nouryoku_disc_id == 100 || Gvar.nouryoku_disc_id == 111 || Gvar.nouryoku_disc_id == 398) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "時間停止攻撃を防ぐぞ";
            Gvar.var_1707++;
        }
        if (Gvar.nouryoku_disc_id == 100 || Gvar.nouryoku_disc_id == 111 || Gvar.nouryoku_disc_id == 398) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "DIOが近くにいても階段を降りられるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.nouryoku_disc_id == 202 || Gvar.shageki_disc_id == 404) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "老化攻撃を防ぐぞ";
            Gvar.var_1707++;
        }
        if (Gvar.nouryoku_disc_id == 202 || Gvar.shageki_disc_id == 404 || Gvar.nouryoku_disc_id == 109) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "冷凍攻撃を防ぐぞ";
            Gvar.var_1707++;
        }
        if (Gvar.nouryoku_disc_id == 120) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "裏返り攻撃を防ぐぞ";
            Gvar.var_1707++;
        }
        if (Gvar.nouryoku_disc_id == 116) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "波紋を流されないぞ";
            Gvar.var_1707++;
        }
        if (Gvar.nouryoku_disc_id == 202 || Gvar.nouryoku_disc_id == 117) {
            if (Gvar.var_125 == 0) {
                Gvar.var_1706[Gvar.var_1707][2] = "7";
                Gvar.var_1706[Gvar.var_1707][1] = "水の上を歩けるぞ";
                Gvar.var_1707++;
            }
        }
        if (Gvar.nouryoku_disc_id == 112 || Gvar.nouryoku_disc_id == 204 || Gvar.nouryoku_disc_id == 394 || Gvar.nouryoku_disc_id == 395) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "親父の写真に閉じ込められないぞ";
            Gvar.var_1707++;
        }
        if (Gvar.nouryoku_disc_id == 112 || Gvar.nouryoku_disc_id == 204 || Gvar.nouryoku_disc_id == 394 || Gvar.nouryoku_disc_id == 395) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "爆弾を見分けられるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.nouryoku_disc_id == 112 || Gvar.nouryoku_disc_id == 394) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "爆弾ｱｲﾃﾑを投げると爆発するぞ";
            Gvar.var_1707++;
        }
        if (Gvar.nouryoku_disc_id == 109) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "火炎による特殊攻撃を防ぐぞ";
            Gvar.var_1707++;
        }
        if (Gvar.nouryoku_disc_id == 100 || Gvar.nouryoku_disc_id == 398) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "ﾛｰﾄﾞﾛｰﾗｰの罠のﾀﾞﾒｰｼﾞを半減するぞ";
            Gvar.var_1707++;
        }
        if (Gvar.nouryoku_disc_id == 113) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "ﾄｰｷﾝｸﾞﾍｯﾄﾞの罠を防ぐぞ";
            Gvar.var_1707++;
        }
        if (Gvar.nouryoku_disc_id == 115) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "歯をクラゲに変えられるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.nouryoku_disc_id == 202) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "アイテムのカエル化を防ぐぞ";
            Gvar.var_1707++;
        }
        if (Gvar.nouryoku_disc_id == 206 || Gvar.nouryoku_disc_id == 108 || Gvar.var_130 != 0) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "ｸﾞﾘｰﾝﾃﾞｨがいても低いところに降りられるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.shageki_disc_id == 400 || Gvar.shageki_disc_id == 407) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "夢の世界に引き込まれるのを防ぐぞ";
            Gvar.var_1707++;
        }
        if (Gvar.shageki_disc_id == 401) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "ﾎﾜｲﾄｽﾈｲｸの罠でF･Fが優先的に外されるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.shageki_disc_id == 402) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "鏡を踏んでもﾊﾝｸﾞﾄﾞﾏﾝに刺されないぞ";
            Gvar.var_1707++;
        }
        if (Gvar.shageki_disc_id == 403) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "ﾛｰﾘﾝｸﾞｽﾄｰﾝの罠のﾀﾞﾒｰｼﾞを半減するぞ";
            Gvar.var_1707++;
        }
        if (Gvar.shageki_disc_id == 405) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "装備中のDISCに由花子の呪いがかからないぞ";
            Gvar.var_1707++;
        }
        if (Gvar.shageki_disc_id == 406) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "カツアゲに負けない自信がつくぞ";
            Gvar.var_1707++;
        }
        if (Gvar.shageki_disc_id == 408) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "殺人ｳｲﾙｽのﾀﾞﾒｰｼﾞを半減するぞ";
            Gvar.var_1707++;
        }
        if (Gvar.shageki_disc_id == 409) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "敵のﾗﾊﾞｰｽﾞがｳｼﾞｭｳｼﾞｭ増えないぞ";
            Gvar.var_1707++;
        }
        if (Gvar.shageki_disc_id == 411) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "落とし穴に落ちないぞ";
            Gvar.var_1707++;
        }
        if (Gvar.shageki_disc_id == 412) {
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "ﾍﾌﾞﾝｽﾞﾄﾞｱｰの罠を書き換えるぞ";
            Gvar.var_1707++;
        }
        if (Gvar.shageki_disc_id == 415) { // Ver0.1401にて修正。414 → 415 タスクact1へ変更。
            Gvar.var_1706[Gvar.var_1707][2] = "7";
            Gvar.var_1706[Gvar.var_1707][1] = "ﾜｲｱｰﾄﾞの罠で自分が釣られるぞ";
            Gvar.var_1707++;
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5) {
            Gvar.var_1719 = 0;
            Gvar.var_1720 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                if (Gvar.var_992[Gvar.var_1720] != 0) {
                    Gvar.var_1719++;
                }
                Gvar.var_1720++;
            }
            Gvar.var_1706[Gvar.var_1707][2] = "8";
            if (Gvar.var_1719 >= 1) {
                Gvar.var_1706[Gvar.var_1707][1] = "残りの特別な敵  " + Gvar.var_1719 + " 体";
            }
            if (Gvar.var_1719 == 0) {
                Gvar.var_1706[Gvar.var_1707][1] = "特別な敵を全て倒しているぞ";
            }
            Gvar.var_1707++;
        }
        Gvar.var_1721 = 1;
        await Func.func381();
}

export {func380}
