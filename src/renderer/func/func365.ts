/**
 * func365 — func365 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func365(this: any) {
        Adap.dbgprt(365);
        Gvar.var_83[299].Var0 = Gvar.var_1616[Gvar.var_1607];
        Gvar.enemy_list = Gvar.var_1616[Gvar.var_1607];
        await Func.func626();
        Gvar.var_83[299].Var15 = 0;
        // 倍速移動敵の選択
        if (Gvar.enemy_list == 20 || Gvar.enemy_list == 39 || Gvar.enemy_list == 60 || Gvar.enemy_list == 64 || Gvar.enemy_list == 101 || Gvar.enemy_list == 102 || Gvar.enemy_list == 103 || Gvar.enemy_list == 104 || Gvar.enemy_list == 117 || Gvar.enemy_list == 111 || Gvar.enemy_list == 96 || Gvar.enemy_list == 68 || Gvar.enemy_list == 151 || Gvar.enemy_list == 168) {
            Gvar.var_83[299].Var15 = 1;
        }
        Gvar.var_1643 = Gvar.enemy_name;
        Gvar.var_1645 = Gvar.enemy_power;
        Gvar.var_1646 = Gvar.enemy_defence;
        Gvar.var_1647 = Gvar.enemy_exp_point;
        Gvar.var_1644 = Gvar.enemy_hp;
        Gvar.var_1648 = "";
        if (Gvar.var_1654 == 20) {
            Gvar.var_1648 = "普通";
        }
        if (Gvar.var_1654 == 999) {
            Gvar.var_1648 = "かなり低い";
        }
        if (Gvar.var_1654 == 10) {
            Gvar.var_1648 = "高い";
        }
        if (Gvar.var_1654 > 1 && Gvar.var_1654 < 10) {
            Gvar.var_1648 = "かなり高い";
        }
        if (Gvar.var_1654 == 1) {
            Gvar.var_1648 = "必ず落とす";
        }
        if (Gvar.var_972 == 0) {
            Gvar.var_1649 = "無し";
        }
        if (Gvar.var_972 == 1) {
            Gvar.var_1649 = "人間";
        }
        if (Gvar.var_972 == 2) {
            Gvar.var_1649 = "吸血鬼";
        }
        if (Gvar.var_972 == 3) {
            Gvar.var_1649 = "スタンド";
        }
        if (Gvar.var_972 == 4) {
            Gvar.var_1649 = "味方";
        }
        if (Gvar.var_972 == 5) {
            Gvar.var_1649 = "味方";
        }
        if (Gvar.var_972 == 6) {
            Gvar.var_1649 = "動物・杜王町住人";
        }
        if (Gvar.var_972 == 7) {
            Gvar.var_1649 = "人間・杜王町住人";
        }
        if (Gvar.var_972 == 8) {
            Gvar.var_1649 = "スタンド・杜王町住人";
        }
        if (Gvar.var_972 == 9) {
            Gvar.var_1649 = "人間・裏切り者";
        }
        if (Gvar.var_972 == 10) {
            Gvar.var_1649 = "スタンド・裏切り者";
        }
        if (Gvar.enemy_list == 131 || Gvar.enemy_list == 132) { // No = 131 ジョルノ、No = 132 レクイエムジョルノ
            Gvar.var_1649 = Gvar.var_1649 + "・新入り";
        }
        // No = 132 レクイエムジョルノ
        // Ver0.1403にて追加。No = 171 離婚した承太郎
        if (Gvar.enemy_list == 147 || Gvar.enemy_list == 134 || Gvar.enemy_list == 119 || Gvar.enemy_list == 35 || Gvar.enemy_list == 135 || Gvar.enemy_list == 120 || Gvar.enemy_list == 128 || Gvar.enemy_list == 140 || Gvar.enemy_list == 68 || Gvar.enemy_list == 131 || Gvar.enemy_list == 132 || Gvar.enemy_list == 171) {
            Gvar.var_1649 = Gvar.var_1649 + "・ｼﾞｮｰｽﾀｰ";
        }
        if (Gvar.enemy_list == 141 || Gvar.enemy_list == 134 || Gvar.enemy_list == 99 || Gvar.enemy_list == 72 || Gvar.enemy_list == 80 || Gvar.enemy_list == 148 || Gvar.enemy_list == 153 || Gvar.enemy_list == 154 || Gvar.enemy_list == 156 || Gvar.enemy_list == 157 || Gvar.enemy_list == 159 || Gvar.enemy_list == 93 || Gvar.enemy_list == 96 || Gvar.enemy_list == 98) {
            Gvar.var_1649 = Gvar.var_1649 + "・囚人";
        }
        if (Gvar.enemy_list == 15) {
            Gvar.var_1649 = "鳥公";
        }
        if (Gvar.enemy_list == 89) {
            Gvar.var_1649 = "猿";
        }
        if (Gvar.enemy_list == 37) {
            Gvar.var_1649 = "猫";
        }
        if (Gvar.enemy_list == 90) {
            Gvar.var_1649 = "岩";
        }
        if (Gvar.enemy_list == 31) {
            Gvar.var_1649 = "幽霊・杜王町住人";
        }
        if (Gvar.enemy_list == 6 || Gvar.enemy_list == 22) {
            Gvar.var_1649 = "人形";
        }
        if (Gvar.enemy_list == 8 || Gvar.enemy_list == 24 || Gvar.enemy_list == 25 || Gvar.enemy_list == 23) {
            Gvar.var_1649 = "死体";
        }
        if (Gvar.enemy_list == 62 || Gvar.enemy_list == 63 || Gvar.enemy_list == 85 || Gvar.enemy_list == 64 || Gvar.enemy_list == 106 || Gvar.enemy_list == 107) {
            Gvar.var_1649 = Gvar.var_1649 + "・暗殺ﾁｰﾑ";
        }
        if (Gvar.enemy_list == 27 || Gvar.enemy_list == 97 || Gvar.enemy_list == 58 || Gvar.enemy_list == 14 || Gvar.enemy_list == 15 || Gvar.enemy_list == 38 || Gvar.enemy_list == 155 || Gvar.enemy_list == 129) {
            Gvar.var_1649 = Gvar.var_1649 + "・九柱神";
        }
        Gvar.var_1650 = Gvar.enemy_description;
        Gvar.var_1651 = Gvar.var_1656;
        Gvar.var_1652 = Gvar.var_1657;
        Gvar.var_1653 = Gvar.var_1658;
        return;
}

export {func365}
