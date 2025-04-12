import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Class from '../classes'

// ダンジョンへ入った際の全ステータス初期化処理
async function func233(this: any) {
        Adap.dbgprt(233);

        Gvar.var_79 = Adap.dim(70, 70, null, null);

        Gvar.var_72 = Adap.dim(70, 70, null, null);

        Gvar.var_84 = Adap.dim(70, 70, null, null);
        Gvar.var_983 = Adap.sdim(3000);
        Gvar.var_704 = Adap.dim(300);

        Gvar.var_73 = Adap.dim(70, 70, null, null);

        Gvar.var_77 = Adap.dim(70, 70, null, null);
        Gvar.var_78 = Class.ItemInfo.dim(300);

        Gvar.var_80 = Adap.dim(70, 70, null, null);

        Gvar.var_81 = Adap.dim(300, 7, null, null);

        Gvar.var_82 = Adap.dim(70, 70, null, null);
        Gvar.var_83 = Class.CharactorInfo.dim(300);
        Gvar.var_992 = Adap.dim(30);
        Gvar.var_95 = 0;
        Gvar.var_994 = 0;
        Gvar.var_1052 = 0;
        Gvar.var_96 = 0;
        Gvar.var_112 = 0;
        Gvar.var_586 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_585 = 0;
        Gvar.var_195 = 0;
        Gvar.var_196 = 0;
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        Gvar.time_paused = 0; // 時止め(時消し飛ばし)状態フラグOFF
        Gvar.var_164 = 0;
        Gvar.var_159 = 0;
        Gvar.current_floor = 0;
        Gvar.current_level = 1;
        Gvar.var_352 = 15;
        Gvar.var_211 = 15;
        Gvar.var_568 = 0;
        Gvar.var_567 = 100;
        Gvar.var_350 = 100;
        Gvar.var_565 = 8;
        Gvar.var_566 = 8;
        Gvar.var_580 = 0;
        Gvar.var_581 = 0;
        Gvar.var_894 = 0;
        Gvar.var_895 = 0;
        Gvar.var_212 = 0;
        Gvar.var_134 = 0;
        Gvar.var_135 = 0;
        Gvar.var_136 = 0;
        Gvar.var_219 = 0;
        Gvar.var_1053 = 0;
        Gvar.var_126 = 0;
        Gvar.var_133 = 0;
        Gvar.var_397 = 0;
        Gvar.var_127 = 0; // 瞼が落ちるや目を切り裂かれるなどで視界が見えななくなった時のフラグOFF
        Gvar.var_104 = 0; // Gvar.var_104 攻撃力が上がるフラグOFF
        Gvar.var_109 = 0;
        Gvar.var_110 = 0;
        Gvar.var_111 = 0; // 命中率を上げるフラグOFF
        Gvar.var_105 = 0; // Gvar.var_105 攻撃を躱わしやすくなるフラグOFF
        Gvar.var_129 = 0;
        Gvar.var_218 = 0;
        Gvar.var_374 = 0;
        Gvar.var_128 = 0;
        Gvar.var_389 = 0;
        Gvar.kougeki_disc_id  = 0;
        Gvar.bougyo_disc_id = 0;
        Gvar.nouryoku_disc_id = 0;
        Gvar.shageki_disc_id = 0;
        Gvar.var_250 = 0;
        Gvar.var_896 = 0;
        Gvar.var_897 = 0;
        Gvar.var_898 = 0;
        Gvar.var_999 = 0;
        Gvar.var_112 = 0;
        // No = 0 なので、拠点(ホテル、亀、)
        Gvar.dungeon_number = 0;
        Gvar.var_386 = 0;
        Gvar.var_387 = 0;
        Gvar.var_116 = 0;
        Gvar.var_114 = 0;
        Gvar.var_157 = 0; // Gvar.var_157 倍速移動フラグOFF
        Gvar.var_118 = 0;
        Gvar.var_119 = 0;
        Gvar.var_131 = 0;
        Gvar.var_586 = 0;
        Gvar.var_140 = 0;
        Gvar.var_141 = 0;
        Gvar.var_121 = 0; // Gvar.var_121 罠が見えるようになるフラグOFF
        Gvar.var_132 = 0; // 記憶DISC「ンドゥール」の効果発動フラグOFF
        Gvar.var_120 = 0;
        Gvar.var_122 = 0;
        Gvar.var_123 = 0;
        Gvar.var_124 = 0;
        Gvar.var_125 = 0;
        Gvar.var_138 = 0;
        Gvar.var_139 = 0;
        Gvar.var_70 = 0;
        Gvar.var_142 = 0;
        Gvar.var_143 = 0;
        Gvar.var_144 = 0;
        Gvar.var_145 = 0;
        Gvar.var_1054 = 0;
        Gvar.var_146 = 0;
        Gvar.var_147 = 0;
        Gvar.var_148 = 0;
        Gvar.var_149 = 0;
        Gvar.var_150 = 0;
        Gvar.sympathy_id = 0;
        Gvar.time_paused_count = 0;
        Gvar.var_152 = 0;
        Gvar.var_154 = 0;
        Gvar.var_155 = 0;
        Gvar.var_174 = 0;
        Gvar.var_159 = 0;
        Gvar.var_113 = 0;
        Gvar.var_160 = 0;
        Gvar.var_161 = 0;
        Gvar.var_162 = 0;
        Gvar.var_130 = 0;
        Gvar.var_157 = 0; // Gvar.var_157 倍速移動フラグOFF
        Gvar.var_158 = 0;
        Gvar.var_1031 = 0;
        Gvar.var_166 = 0;
        Gvar.var_167 = 0;
        Gvar.var_153 = 0;
        Gvar.special_floor = 0;
        Gvar.var_420 = 0;
        Gvar.var_168 = 0;
        Gvar.var_169 = 0;
        Gvar.var_108 = 0;
        Gvar.var_170 = 0; // Gvar.var_170 罠が見えるようになるフラグOFF(あくまでMAP上に見えるだけ。噴上裕也のDISC限定)
        Gvar.var_103 = 0;
        Gvar.var_1030 = 0;
        Gvar.var_1055 = 0;
        Gvar.var_595 = 0; // Gvar.dungeon_number = 0 での場所確認。0 = ヴェネチアホテル
        Gvar.var_217 = 0;
        Gvar.var_171 = 0;
        Gvar.var_1034 = 0;
        Gvar.var_172 = 0; // Gvar.var_172 発動効果が向上するフラグOFF
        Gvar.var_137 = 0;
        Gvar.var_1035 = 0;
        Gvar.var_173 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1037 = 0;
        Gvar.var_535 = 0;
        Gvar.var_338 = 0;
        Gvar.var_175 = 0;
        Gvar.var_177 = 0;
        Gvar.var_1033 = 0;
        Gvar.var_178 = 0;
        Gvar.var_179 = 0;
        Gvar.var_180 = 0;
        Gvar.var_181 = 0;
        Gvar.var_182 = 0;
        Gvar.var_1022 = 3;
        Gvar.var_176 = 0;
        Gvar.var_183 = 0;
        Gvar.var_184 = 0;
        Gvar.var_185 = 0;
        Gvar.var_186 = 0;
        Gvar.var_187 = 0;
        Gvar.var_188 = 0;
        Gvar.var_189 = 0;
        Gvar.var_190 = 0;
        Gvar.var_1042 = 0;
        Gvar.var_191 = 0;
        Gvar.var_192 = 0;
        Gvar.var_193 = 0;
        Gvar.var_1045 = 0;
        Gvar.var_536 = 0;
        Gvar.var_203 = 0; // No = 0:エンヤホテル
        Gvar.var_194 = 0;
        Gvar.var_98 = 0;
        Gvar.var_200 = 0;
        Gvar.var_99 = 0;
        Gvar.var_202 = 0;

        Gvar.taskact1_on = 0; // Ver0.1401にて追加。タスクact1を発動したかどうかの確認フラグ

        Gvar.var_862 = Adap.dim(1000, 4, null, null);
        if (Gvar.var_532 == 0) {
            Gvar.var_233 = Class.ItemInfo.dim(100);
            Gvar.var_224 = 0;
            Gvar.wallet = 0;
        }
        if (Gvar.var_532 == 1) {
            Gvar.var_1056 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                if (Gvar.var_233[Gvar.var_1056].Var0 != 0) {
                    Gvar.var_233[Gvar.var_1056].Var14 = 1;
                    Gvar.var_1057 = Gvar.var_233[Gvar.var_1056].Var0;
                    Gvar.var_862[Gvar.var_1057][0] = 1;
                }
                if (Gvar.var_233[Gvar.var_1056].Var0 >= 800 && Gvar.var_233[Gvar.var_1056].Var0 < 900) {
                    Gvar.var_484 = 1;
                    Gvar.var_485 = Gvar.var_233[Gvar.var_1056].Var6;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] != 0) {
                            Gvar.var_486[Gvar.var_485][Gvar.var_484][14] = 1;
                            Gvar.var_1057 = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
                            Gvar.var_862[Gvar.var_1057][0] = 1;
                        }
                        Gvar.var_484 = Gvar.var_484 + 1;
                    }
                }
                Gvar.var_1056 = Gvar.var_1056 + 1;
            }
        }
        Gvar.var_532 = 0;
        Gvar.var_476 = Adap.dim(40);
        Gvar.var_477 = Adap.dim(40);
        Gvar.var_479 = Adap.dim(40);
        Gvar.var_478 = Adap.dim(40);
        Gvar.equip_disc = Adap.dim(400);

        Gvar.var_1058 = Adap.dim(30, 30);
        Gvar.var_1046 = 0;
        Gvar.var_1059 = 1;
        await Func.func494();
        Gvar.var_1059 = 0;

        Gvar.var_65 = Adap.dim(70, 70, null, null);
        Gvar.var_66 = 15;
        Gvar.var_67 = 8;
        Gvar.var_65[Gvar.var_66][Gvar.var_67] = 1;
        Gvar.var_501 = 0;
        await Func.func502();
        return;
}

export {func233}
