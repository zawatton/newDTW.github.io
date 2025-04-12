import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 各ダンジョン読み込み処理
// 処理が多すぎるので分割したい
async function func008(this: any) {
        Adap.dbgprt(8);
        if (Gvar.var_86 != 0) {
            await Func.func249();
        }

        Gvar.var_87 = Adap.dim(70, 70, Gvar.length3 = null, null);
        Gvar.var_88 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_32; ++cnt1) {
            Gvar.var_89 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_31; ++cnt2) {
                Gvar.var_87[Gvar.var_89][Gvar.var_88] = Adap.rnd(10);
                Gvar.var_89++;
            }
            Gvar.var_88++;
        }
        Gvar.var_90 = Adap.rnd(40);
        if (Gvar.var_90 == 6) {
            Gvar.var_90 = 1;
        }
        if (Gvar.current_floor <= 2) {
            Gvar.var_90 = 0;
        }

        if (Gvar.dungeon_number == 1) {
            if (Gvar.current_floor <= 2) { // 水の都
                Gvar.y_axis_map_image = 15;
            }
            if (Gvar.current_floor >= 3 && Gvar.current_floor <= 5) { // 郊外の森林
                Gvar.y_axis_map_image = 19;
            }
            if (Gvar.current_floor >= 6 && Gvar.current_floor <= 8) { // 紅海の浜辺
                Gvar.y_axis_map_image = 11;
            }
            if (Gvar.current_floor >= 9 && Gvar.current_floor <= 11) { // 山岳地帯
                Gvar.y_axis_map_image = 4;
            }
            if (Gvar.current_floor == 12) { // エンヤホテル
                Gvar.y_axis_map_image = 7;
                Gvar.var_90 = 0;
            }
        }

        if (Gvar.dungeon_number == 2) {
            if (Gvar.current_floor >= 1 && Gvar.current_floor <= 4) { // 下水道。Ver0.1310にて修正 (Gvar.current_floor <= 5 → Gvar.current_floor <= 4)
                Gvar.y_axis_map_image = 3;
            }
            if (Gvar.current_floor >= 5 && Gvar.current_floor <= 8) { // 青色迷宮
                Gvar.y_axis_map_image = 6;
            }
            if (Gvar.current_floor >= 9 && Gvar.current_floor <= 11) { // 茶色迷宮
                Gvar.y_axis_map_image = 2;
            }
            if (Gvar.current_floor >= 12 && Gvar.current_floor <= 14) { // 
                Gvar.y_axis_map_image = 5;
            }
            if (Gvar.current_floor >= 15 && Gvar.current_floor <= 19) {
                Gvar.y_axis_map_image = 4;
            }
            if (Gvar.current_floor >= 20 && Gvar.current_floor <= 22) {
                Gvar.y_axis_map_image = 24;
            }
            if (Gvar.current_floor >= 23 && Gvar.current_floor <= 25) {
                Gvar.y_axis_map_image = 20;
            }
            if (Gvar.current_floor >= 26) {
                Gvar.y_axis_map_image = 12;
            }
        }

        if (Gvar.dungeon_number == 3 || Gvar.dungeon_number == 4) {
            Gvar.var_93 = Adap.rnd(16);
            if (Gvar.var_93 == 0) {
                Gvar.y_axis_map_image = 2;
            }
            if (Gvar.var_93 == 1) {
                Gvar.y_axis_map_image = 3;
            }
            if (Gvar.var_93 == 2) {
                Gvar.y_axis_map_image = 6;
            }
            if (Gvar.var_93 == 3) {
                Gvar.y_axis_map_image = 5;
            }
            if (Gvar.var_93 == 4) {
                Gvar.y_axis_map_image = 4;
            }
            if (Gvar.var_93 == 5) {
                Gvar.y_axis_map_image = 8;
                Gvar.var_90 = 0;
            }
            if (Gvar.var_93 == 6) {
                Gvar.y_axis_map_image = 18;
            }
            if (Gvar.var_93 == 7) {
                Gvar.y_axis_map_image = 13;
            }
            if (Gvar.var_93 == 8) {
                Gvar.y_axis_map_image = 14;
            }
            if (Gvar.var_93 == 9) {
                Gvar.y_axis_map_image = 12;
            }
            if (Gvar.var_93 == 10) {
                Gvar.y_axis_map_image = 21;
            }
            if (Gvar.var_93 == 11) {
                Gvar.y_axis_map_image = 20;
            }
            if (Gvar.var_93 == 12) {
                Gvar.y_axis_map_image = 11;
            }
            if (Gvar.var_93 == 13) {
                Gvar.y_axis_map_image = 13;
            }
            if (Gvar.var_93 == 14) {
                Gvar.y_axis_map_image = 24;
            }
            if (Gvar.var_93 == 15) {
                Gvar.y_axis_map_image = 9;
            }
            // No = 3 なので、ディアボロの試練
            if (Gvar.dungeon_number == 3 && Gvar.current_floor >= 90) { // ディアボロの試練では 90~98Fまではマップ固定
                Gvar.y_axis_map_image = 22;
            }
            // No = 3 なので、ディアボロの試練
            if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) { // 自由人の狂想曲
                Gvar.y_axis_map_image = 2;
            }
        }

        if (Gvar.dungeon_number == 5) {
            Gvar.var_93 = Adap.rnd(14);
            if (Gvar.var_93 == 0) {
                Gvar.y_axis_map_image = 26; // Ver0.1402 2 → 26へ変更
            }
            if (Gvar.var_93 == 1) {
                Gvar.y_axis_map_image = 26; // Ver0.1402 3 → 26へ変更
            }
            if (Gvar.var_93 == 2) {
                Gvar.y_axis_map_image = 26; // Ver0.1402 6 → 26へ変更
            }
            if (Gvar.var_93 == 3) {
                Gvar.y_axis_map_image = 26; // Ver0.1402 5 → 26へ変更
            }
            if (Gvar.var_93 == 4) {
                Gvar.y_axis_map_image = 26; // Ver0.1402 4 → 26へ変更
            }
            if (Gvar.var_93 == 5) {
                Gvar.y_axis_map_image = 26; // Ver0.1402 8 → 26へ変更
                Gvar.var_90 = 0;
            }
            if (Gvar.var_93 == 6) {
                Gvar.y_axis_map_image = 26; // Ver0.1402 18 → 26へ変更
            }
            if (Gvar.var_93 == 7) {
                Gvar.y_axis_map_image = 26; // Ver0.1402 13 → 26へ変更
            }
            if (Gvar.var_93 == 8) {
                Gvar.y_axis_map_image = 26; // Ver0.1402 14 → 26へ変更
            }
            if (Gvar.var_93 == 9) {
                Gvar.y_axis_map_image = 26; // Ver0.1402 12 → 26へ変更
            }
            if (Gvar.var_93 == 10) {
                Gvar.y_axis_map_image = 26; // Ver0.1402 21 → 26へ変更
            }
            if (Gvar.var_93 == 11) {
                Gvar.y_axis_map_image = 26; // Ver0.1402 20 → 26へ変更
            }
            if (Gvar.var_93 == 12) {
                Gvar.y_axis_map_image = 26; // Ver0.1402 24 → 26へ変更
            }
            if (Gvar.var_93 == 13) {
                Gvar.y_axis_map_image = 26; // Ver0.1402 9 → 26へ変更
            }
            //Gvar.y_axis_map_image = 26; // Ver0.1402 22 → 26へ変更
            // Ver0.1403にて追加。No = 5 なので、鉄獄
            if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) { // ケープカナベラル
                Gvar.y_axis_map_image = 26;
            }
        }

        if (Gvar.special_floor == 1) { // 虹村屋敷
            Gvar.y_axis_map_image = 8;
            Gvar.var_90 = 0;
        }
        if (Gvar.special_floor == 2) { // 杜王町埠頭
            Gvar.y_axis_map_image = 25;
            Gvar.var_90 = 0;
        }
        if (Gvar.special_floor == 3) { // 吉良屋敷
            Gvar.y_axis_map_image = 14;
            Gvar.var_90 = 0;
        }
        if (Gvar.special_floor == 5) { // 没特殊階層「ビンの中」ボスは毒グモ
            Gvar.y_axis_map_image = 1;
            Gvar.var_90 = 0;
        }
        if (Gvar.special_floor == 6) { // 没特殊階層「ナチス実験施設」ボスはサンタナ
            Gvar.y_axis_map_image = 3;
            Gvar.var_90 = 0;
        }
        if (Gvar.special_floor == 7) { // 広大な砂漠
            Gvar.y_axis_map_image = 16;
            Gvar.var_90 = 0;
        }
        if (Gvar.special_floor == 8) { // 幻覚の迷宮
            Gvar.y_axis_map_image = 1;
            Gvar.var_90 = 0;
        }
        if (Gvar.special_floor == 9) { // 幽霊部屋
            Gvar.y_axis_map_image = 7;
            Gvar.var_90 = 0;
        }
        if (Gvar.var_86 == 0) {
            Gvar.var_90 = 0;
        }
        if (Gvar.var_90 == 1 && Gvar.var_95 != 0) {
            Gvar.var_90 = 0;
            await Func.func254();
        }
        // No = 1 なので、ホテルの外       
        if (Gvar.dungeon_number == 1 && Gvar.current_floor <= 2) {
            Gvar.var_90 = 99;
            await Func.func255();
            Gvar.var_90 = 0;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor == 28 && Gvar.var_86 != 0) {
            Gvar.var_90 = 99;
            await Func.func255();
            Gvar.var_90 = 0;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor == 29 && Gvar.var_86 != 0) {
            Gvar.var_90 = 99;
            await Func.func255();
            Gvar.var_90 = 0;
        }
        if (Gvar.var_90 >= 2 && Gvar.var_90 <= 6) {
            await Func.func255();
            Gvar.var_90 = 0;
        }
        await Func.func720();
        await Func.func045();
        await Func.func383(); // アイテムの出現数を増やす動作処理
        await Func.func393();
        await Func.func391();
        await Func.func535();
        await Func.func537();
        if (Gvar.var_96 >= 1) {
            await Func.func392();
        }
        await Func.func046();
        Gvar.var_97 = 0;
        await Func.func562();
        await Func.func560();
        await Func.func563(); // ダンジョン主指定処理
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5) {
            await Func.func564(); // オーラ敵生成処理
        }
        await Func.func555();
        if (Gvar.var_96 >= 1) {
            await Func.func561();
        }
        // ステータスフラグの初期化
        Gvar.var_98 = 0;
        Gvar.var_99 = 0;
        Gvar.var_100 = 0;
        Gvar.var_101 = 0;
        Gvar.var_102 = 0;
        Gvar.var_103 = 0;
        Gvar.var_104 = 0; // Gvar.var_104 攻撃力が上がるフラグOFF
        Gvar.var_105 = 0; // Gvar.var_105 攻撃を躱わしやすくなるフラグOFF
        Gvar.var_106 = 0;
        Gvar.count_buying_price = 0;
        Gvar.var_108 = 0;
        Gvar.var_109 = 0;
        Gvar.var_110 = 0;
        Gvar.var_111 = 0; // 命中率を上げるフラグOFF
        Gvar.var_112 = 0;
        Gvar.var_113 = 0;
        Gvar.var_114 = 0;
        Gvar.var_115 = 0;
        Gvar.var_116 = 0;
        Gvar.var_117 = 0;
        Gvar.var_118 = 0;
        Gvar.var_119 = 0;
        Gvar.var_120 = 0;
        Gvar.var_121 = 0; // Gvar.var_121 罠が見えるようになるフラグOFF
        Gvar.var_122 = 0;
        Gvar.var_123 = 0;
        Gvar.var_124 = 0;
        Gvar.var_125 = 0;
        Gvar.var_126 = 0;
        Gvar.var_127 = 0; // 瞼が落ちるや目を切り裂かれるなどで視界が見えななくなった時のフラグOFF
        Gvar.var_128 = 0;
        Gvar.var_129 = 0;
        Gvar.var_130 = 0;
        Gvar.var_131 = 0;
        Gvar.var_132 = 0; // 記憶DISC「ンドゥール」の効果発動フラグOFF
        Gvar.var_133 = 0;
        Gvar.var_134 = 0;
        Gvar.var_135 = 0;
        Gvar.var_136 = 0;
        Gvar.var_137 = 0;
        Gvar.var_138 = 0;
        Gvar.var_139 = 0;
        Gvar.var_140 = 0;
        Gvar.var_141 = 0;
        Gvar.var_142 = 0;
        Gvar.var_143 = 0;
        Gvar.var_144 = 0;
        Gvar.var_145 = 0;
        Gvar.var_146 = 0;
        Gvar.var_147 = 0;
        Gvar.var_148 = 0;
        Gvar.var_149 = 0;
        Gvar.var_150 = 0;
        Gvar.time_paused_count = 0; // 敵時止め経過ターン初期化
        Gvar.var_152 = 0;
        Gvar.var_153 = 0;
        Gvar.var_154 = 0;
        Gvar.var_155 = 0;
        if (Gvar.equip_disc[396] == 0) {
            Gvar.var_157 = 0;
            Gvar.var_158 = 0;
        }
        Gvar.var_159 = 0;
        Gvar.var_160 = 0;
        Gvar.var_161 = 0;
        Gvar.var_162 = 0;
        Gvar.time_paused = 0; // 時止め(時消し飛ばし)状態フラグOFF
        Gvar.var_164 = 0;
        Gvar.var_165 = 0; // 敵増えるフラグOFF
        Gvar.var_166 = 0;
        Gvar.var_167 = 0;
        Gvar.var_168 = 0;
        Gvar.var_169 = 0;
        Gvar.var_170 = 0; // Gvar.var_170 罠が見えるようになるフラグOFF(あくまでMAP上に見えるだけ。噴上裕也のDISC限定)
        Gvar.var_171 = 0;
        Gvar.var_172 = 0; // Gvar.var_172 発動効果が向上するフラグOFF
        Gvar.var_173 = 0;
        Gvar.var_174 = 0;
        Gvar.var_175 = 0;
        Gvar.var_176 = 0;
        Gvar.var_177 = 0;
        Gvar.var_178 = 0;
        Gvar.var_179 = 0;
        Gvar.var_180 = 0;
        Gvar.var_181 = 0;
        Gvar.var_182 = 0;
        Gvar.var_183 = 0;
        Gvar.var_184 = 0;
        Gvar.var_185 = 0;
        Gvar.var_186 = 0;
        Gvar.var_187 = 0;
        Gvar.var_188 = 0;
        Gvar.var_189 = 0;
        Gvar.var_190 = 0;
        Gvar.var_191 = 0;
        Gvar.var_192 = 0;
        Gvar.var_193 = 0;
        Gvar.var_194 = 0;
        Gvar.var_195 = 0;
        Gvar.var_196 = 0; // Mフラグ:メニュー画面 Func.func054

        Gvar.taskact1_on = 0; // Ver0.1401にて追加。タスクact1を発動したかどうかの確認フラグ
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる

        Gvar.var_65[Gvar.var_66][Gvar.var_67] = 1;
        Gvar.var_199 = 2;
        if (Gvar.y_axis_map_image == 15 || Gvar.y_axis_map_image == 19 || Gvar.y_axis_map_image == 11 || Gvar.y_axis_map_image == 23 || Gvar.y_axis_map_image == 25) {
            Gvar.var_103 = 1;
        }
        // No = 5 // 没特殊階層「ビンの中」ボスは毒グモ, No = 7 広大な砂漠, No = 9 // 幽霊部屋
        if (Gvar.special_floor == 5 || Gvar.special_floor == 7 || Gvar.special_floor == 9) {
            Gvar.var_103 = 1;
        }
        if (Gvar.var_200 == Gvar.var_201 && Gvar.var_201 != 14) {
            Gvar.var_98 = 1;
        }
        if (Gvar.var_202 == Gvar.var_201 && Gvar.var_201 != 14) {
            Gvar.var_99 = 1;
        }
        Gvar.var_68 = 1;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 0) { // No = 0:エンヤホテル
            await Music.func118();
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 1) { // No = 1:虹村屋敷
            await Music.func119(); // 虹村屋敷のBGM
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 2) { // No = 2:吉良屋敷
            await Music.func120(); // 吉良屋敷のBGM
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 3) { // No = 3:杜王町埠頭
            await Music.func121();
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
            await Music.func117(); // 黄金の風BGM再生
        }
        if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
            await Music.func116(); // ボヘミアンラプソディBGM再生
        }
        if (Gvar.var_96 >= 1 && Gvar.var_201 == Gvar.var_204) {
            await Func.func074(); // モンスターハウス時のメッセージ処理
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 0) { // No = 0:エンヤホテル
            await Func.func075(); // 特別な階層到達時のメッセージ処理
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
            await Func.func075(); // 特別な階層到達時のメッセージ処理
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
            await Func.func075(); // 特別な階層到達時のメッセージ処理
        }
        // Ver0.1403にて追加。No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
            await Func.func075(); // 特別な階層到達時のメッセージ処理
        }
        if (Gvar.special_floor >= 1) {
            await Func.func075(); // 特別な階層到達時のメッセージ処理
        }
        Gvar.var_205 = 1;
        await Func.func231(); // プレイデータを保存するセーブ機能
        Gvar.var_206 = 0;
        if (Gvar.ivents_flag == 2) {
            Gvar.ivents_flag = 0; // イベントフラグ初期化
            await Func.func152(); // 初めてダンジョンを訪れた際のディアボロの呟き
        }
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func008}
