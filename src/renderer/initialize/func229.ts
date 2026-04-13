import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Class from '../classes'

// セーブファイルからデータ読み出し関数
// 旧 func229
async function func229(this: any) {
        Adap.dbgprt(229);
        Gvar.var_77 = Adap.dim(70, 70, null, null);
        Gvar.var_79 = Adap.dim(70, 70, null, null);
        Gvar.var_82 = Adap.dim(70, 70, null, null);
        Gvar.var_72 = Adap.dim(70, 70, null, null);
        Gvar.var_80 = Adap.dim(70, 70, null, null);
        Gvar.var_983 = Adap.sdim(3000);
        Gvar.var_792 = Adap.dim(5, 25, 70, null);
        Gvar.var_704 = Adap.dim(300);
        Gvar.var_977 = Adap.dim(20);
        Gvar.current_floor = 1;
        Gvar.var_376 = 1;
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
        Gvar.wallet = 0;
        Gvar.var_212 = 0;
        Gvar.var_134 = 0;
        Gvar.var_135 = 0;
        Gvar.var_136 = 0;
        Gvar.var_137 = 0;
        Gvar.var_219 = 0;
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
        Gvar.var_839 = 0;
        Gvar.var_586 = 0;
        Gvar.var_140 = 0;
        Gvar.var_123 = 0;
        Gvar.var_124 = 0;
        Gvar.var_125 = 0;
        Gvar.var_138 = 0;
        Gvar.var_420 = 0;
        Gvar.var_169 = 0;
        Gvar.var_170 = 0; // Gvar.var_170 罠が見えるようになるフラグOFF(あくまでMAP上に見えるだけ。噴上裕也のDISC限定)
        Gvar.var_172 = 0; // Gvar.var_172 発動効果が向上するフラグOFF
        
        Gvar.taskact1_on = 0; // Ver0.1401にて追加。タスクact1を発動したかどうかの確認フラグ

        Gvar.var_233 = Class.ItemInfo.dim(100);
        Gvar.var_476 = Adap.dim(40);
        Gvar.var_477 = Adap.dim(40);
        Gvar.var_479 = Adap.dim(40);
        Gvar.var_478 = Adap.dim(40);
        Gvar.equip_disc = Adap.dim(400);
        Gvar.var_984 = 0;
        Gvar.var_862 = Adap.dim(1000, 4, null, null);
        Gvar.var_501 = 0;
        await Func.func505();
        if (Gvar.var_726 == 1) {
            Gvar.var_735 = "01.dat";
        }
        if (Gvar.var_726 == 2) {
            Gvar.var_735 = "02.dat";
        }
        if (Gvar.var_726 == 3) {
            Gvar.var_735 = "03.dat";
        }
        Gvar.var_985 = 0;
        Gvar.var_704 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 1200;
        {
            Gvar.var_233 = [];
            // Gvar.var_735 = "01.dat", Gvar.var_985 = 
            const data = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
            data.forEach(function (d: any) {
                Gvar.var_233.push(Class.ItemInfo.Load(d));
            });
        }
        Gvar.var_985 = Gvar.var_985 + 12000;
        Gvar.var_476 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 160;
        Gvar.var_477 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);

        Gvar.var_985 = Gvar.var_985 + 160;
        Gvar.var_479 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        
        Gvar.var_985 = Gvar.var_985 + 160;
        Gvar.var_478 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 160;
        Gvar.var_862 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 16000;
        Gvar.var_71 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        Gvar.var_72 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        Gvar.var_65 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        Gvar.var_73 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        Gvar.var_74 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        Gvar.var_75 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 80;
        Gvar.var_76 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 6000;
        Gvar.var_79 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        Gvar.var_80 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        Gvar.var_84 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        Gvar.var_77 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        {
            Gvar.var_78 = [];
            const data = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
            data.forEach(function (d: any) {
                Gvar.var_78.push(Class.ItemInfo.Load(d));
            });
        }
        Gvar.var_985 = Gvar.var_985 + 36000;
        Gvar.var_81 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 8400;
        Gvar.var_82 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        {
            Gvar.var_83 = [];
            const data = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
            data.forEach(function (d: any) {
                Gvar.var_83.push(Class.CharactorInfo.Load(d));
            });
        }
        Gvar.var_985 = Gvar.var_985 + 48000;
        Gvar.var_493 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 80;
        Gvar.var_983 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 12000;
        Gvar.var_792 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 35000;
        Gvar.var_863 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        Gvar.var_853 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 6000;
        Gvar.var_986 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 400;
        Gvar.var_486 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 201600;
        Gvar.equip_disc = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 1600;
        Gvar.var_987 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 120;
        Gvar.var_988 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 480;
        Gvar.var_835 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 4000;
        Gvar.var_87 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        Gvar.var_989 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 1600;
        Gvar.var_990 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 400;
        Gvar.var_991 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 7560;
        Gvar.var_992 = await Adap.bload(Gvar.var_735, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 120;
        Gvar.current_floor = Gvar.var_704[1];
        Gvar.var_376 = Gvar.var_704[2];
        Gvar.current_level = Gvar.var_704[3];
        Gvar.var_352 = Gvar.var_704[4];
        Gvar.var_211 = Gvar.var_704[5];
        Gvar.var_568 = Gvar.var_704[6];
        Gvar.var_567 = Gvar.var_704[7];
        Gvar.var_350 = Gvar.var_704[8];
        Gvar.var_565 = Gvar.var_704[9];
        Gvar.var_566 = Gvar.var_704[10];
        Gvar.var_580 = Gvar.var_704[11];
        Gvar.var_581 = Gvar.var_704[12];
        Gvar.wallet = Gvar.var_704[13];
        Gvar.var_212 = Gvar.var_704[14];
        Gvar.var_134 = Gvar.var_704[15];
        Gvar.var_135 = Gvar.var_704[16];
        Gvar.var_136 = Gvar.var_704[17];
        Gvar.var_219 = Gvar.var_704[18];
        Gvar.var_535 = Gvar.var_704[19];
        Gvar.var_126 = Gvar.var_704[20];
        Gvar.var_133 = Gvar.var_704[21];
        Gvar.var_397 = Gvar.var_704[22];
        Gvar.var_127 = Gvar.var_704[23];
        Gvar.var_104 = Gvar.var_704[24];
        Gvar.var_109 = Gvar.var_704[25];
        Gvar.var_110 = Gvar.var_704[26];
        Gvar.var_111 = Gvar.var_704[27];
        Gvar.var_105 = Gvar.var_704[28];
        Gvar.var_559 = Gvar.var_704[29];
        Gvar.var_129 = Gvar.var_704[30];
        Gvar.var_218 = Gvar.var_704[31];
        Gvar.var_374 = Gvar.var_704[32];
        Gvar.var_128 = Gvar.var_704[33];
        Gvar.var_993 = Gvar.var_704[34];
        Gvar.kougeki_disc_id  = Gvar.var_704[35];
        Gvar.bougyo_disc_id = Gvar.var_704[36];
        Gvar.nouryoku_disc_id = Gvar.var_704[37];
        Gvar.shageki_disc_id = Gvar.var_704[38];
        Gvar.var_250 = Gvar.var_704[39];
        Gvar.var_224 = Gvar.var_704[40];
        Gvar.var_66 = Gvar.var_704[41];
        Gvar.var_67 = Gvar.var_704[42];
        Gvar.var_201 = Gvar.var_704[43];
        Gvar.var_199 = Gvar.var_704[44];
        Gvar.var_336 = Gvar.var_704[45];
        Gvar.var_97 = Gvar.var_704[46];
        Gvar.var_337 = Gvar.var_704[47];
        Gvar.y_axis_map_image = Gvar.var_704[48];
        Gvar.var_96 = Gvar.var_704[49];
        Gvar.var_95 = Gvar.var_704[50];
        Gvar.var_994 = Gvar.var_704[51];
        Gvar.var_995 = Gvar.var_704[52];
        Gvar.var_996 = Gvar.var_704[53];
        Gvar.var_85 = Gvar.var_704[54];
        Gvar.var_997 = Gvar.var_704[55];
        Gvar.var_338 = Gvar.var_704[56];
        Gvar.var_106 = Gvar.var_704[57];
        Gvar.var_262 = Gvar.var_704[58];
        Gvar.var_839 = Gvar.var_704[59];
        Gvar.var_998 = Gvar.var_704[60];
        Gvar.dungeon_number = Gvar.var_704[61]; // ダンジョン場所配列 // エンヤホテル、レクイエムの大迷宮
        Gvar.var_98 = Gvar.var_704[62];
        Gvar.var_896 = Gvar.var_704[63];
        Gvar.var_897 = Gvar.var_704[64];
        Gvar.var_898 = Gvar.var_704[65];
        Gvar.var_999 = Gvar.var_704[66];
        Gvar.var_1000 = Gvar.var_704[67];
        Gvar.var_1001 = Gvar.var_704[68];
        Gvar.var_894 = Gvar.var_704[69];
        Gvar.var_895 = Gvar.var_704[70];
        Gvar.var_356 = Gvar.var_704[71];
        Gvar.var_1002 = Gvar.var_704[72];
        Gvar.var_1003 = Gvar.var_704[73];
        Gvar.var_420 = Gvar.var_704[74];
        Gvar.var_204 = Gvar.var_704[75];
        Gvar.var_1004 = Gvar.var_704[76];
        Gvar.var_1005 = Gvar.var_704[77];
        Gvar.var_1006 = Gvar.var_704[78];
        Gvar.var_1007 = Gvar.var_704[79];
        Gvar.var_1008 = Gvar.var_704[80];
        Gvar.payment_amount = Gvar.var_704[81];
        Gvar.var_1009 = Gvar.var_704[82];
        Gvar.count_buying_price = Gvar.var_704[83];
        Gvar.var_1010 = Gvar.var_704[84];
        Gvar.var_1011 = Gvar.var_704[85];
        Gvar.var_1012 = Gvar.var_704[86];
        Gvar.var_864 = Gvar.var_704[87];
        Gvar.var_404 = Gvar.var_704[88];
        Gvar.var_112 = Gvar.var_704[89];
        Gvar.var_200 = Gvar.var_704[90];
        Gvar.var_113 = Gvar.var_704[91];
        Gvar.var_102 = Gvar.var_704[92];
        Gvar.var_526 = Gvar.var_704[93];
        Gvar.var_537 = Gvar.var_704[94];
        Gvar.var_386 = Gvar.var_704[95];
        Gvar.var_103 = Gvar.var_704[96];
        Gvar.var_100 = Gvar.var_704[97];
        Gvar.var_101 = Gvar.var_704[98];
        Gvar.var_114 = Gvar.var_704[99];
        Gvar.var_116 = Gvar.var_704[100];
        Gvar.var_115 = Gvar.var_704[101];
        Gvar.var_461 = Gvar.var_704[102];
        Gvar.var_462 = Gvar.var_704[103];
        Gvar.var_157 = Gvar.var_704[104];
        Gvar.var_158 = Gvar.var_704[105];
        Gvar.var_177 = Gvar.var_704[106];
        Gvar.var_117 = Gvar.var_704[107];
        Gvar.var_998 = Gvar.var_704[108];
        Gvar.var_1013 = Gvar.var_704[109];
        Gvar.var_118 = Gvar.var_704[110];
        Gvar.var_119 = Gvar.var_704[111];
        Gvar.var_131 = Gvar.var_704[112];
        Gvar.var_169 = Gvar.var_704[113];
        Gvar.var_140 = Gvar.var_704[114];
        Gvar.var_1014 = Gvar.var_704[115];
        Gvar.var_121 = Gvar.var_704[116];
        Gvar.var_595 = Gvar.var_704[117];
        Gvar.var_172 = Gvar.var_704[118];
        Gvar.var_1015 = Gvar.var_704[119];
        Gvar.var_159 = Gvar.var_704[120];
        Gvar.time_paused = Gvar.var_704[121];
        Gvar.var_164 = Gvar.var_704[122];
        Gvar.var_132 = Gvar.var_704[123];
        Gvar.var_120 = Gvar.var_704[124];
        Gvar.var_1016 = Gvar.var_704[125];
        Gvar.var_1017 = Gvar.var_704[126];
        Gvar.var_1018 = Gvar.var_704[127];
        Gvar.var_1019 = Gvar.var_704[128];
        Gvar.var_1020 = Gvar.var_704[129];
        Gvar.var_1021 = Gvar.var_704[130];
        Gvar.var_122 = Gvar.var_704[131];
        Gvar.var_463 = Gvar.var_704[132];
        Gvar.var_464 = Gvar.var_704[133];
        Gvar.var_141 = Gvar.var_704[134];
        Gvar.var_123 = Gvar.var_704[135];
        Gvar.var_124 = Gvar.var_704[136];
        Gvar.var_396 = Gvar.var_704[137];
        Gvar.var_550 = Gvar.var_704[138];
        Gvar.var_125 = Gvar.var_704[139];
        Gvar.var_138 = Gvar.var_704[140];
        Gvar.var_1022 = Gvar.var_704[141];
        Gvar.var_175 = Gvar.var_704[142];
        Gvar.var_139 = Gvar.var_704[143];
        Gvar.var_168 = Gvar.var_704[144];
        Gvar.var_322 = Gvar.var_704[145];
        Gvar.var_70 = Gvar.var_704[146];
        Gvar.var_1023 = Gvar.var_704[147];
        Gvar.var_1024 = Gvar.var_704[148];
        Gvar.var_142 = Gvar.var_704[149];
        Gvar.var_143 = Gvar.var_704[150];
        Gvar.var_144 = Gvar.var_704[151];
        Gvar.var_1025 = Gvar.var_704[152];
        Gvar.var_1026 = Gvar.var_704[153];
        Gvar.var_1027 = Gvar.var_704[154];
        Gvar.var_1028 = Gvar.var_704[155];
        Gvar.var_1029 = Gvar.var_704[156];
        Gvar.var_145 = Gvar.var_704[157];
        Gvar.var_1030 = Gvar.var_704[158];
        Gvar.var_146 = Gvar.var_704[159];
        Gvar.var_147 = Gvar.var_704[160];
        Gvar.var_148 = Gvar.var_704[161];
        Gvar.var_149 = Gvar.var_704[162];
        Gvar.dungeon1_floor = Gvar.var_704[163];
        Gvar.dungeon2_floor = Gvar.var_704[164];
        Gvar.dungeon3_floor = Gvar.var_704[165];
        Gvar.var_387 = Gvar.var_704[166];
        Gvar.var_150 = Gvar.var_704[167];
        Gvar.sympathy_id = Gvar.var_704[168];
        Gvar.time_paused_count = Gvar.var_704[169];
        Gvar.var_152 = Gvar.var_704[170];
        Gvar.var_154 = Gvar.var_704[171];
        Gvar.var_155 = Gvar.var_704[172];
        Gvar.var_174 = Gvar.var_704[173];
        Gvar.var_160 = Gvar.var_704[174];
        Gvar.var_161 = Gvar.var_704[175];
        Gvar.var_162 = Gvar.var_704[176];
        Gvar.var_130 = Gvar.var_704[177];
        Gvar.var_170 = Gvar.var_704[178];
        Gvar.dungeon4_floor = Gvar.var_704[179];
        Gvar.var_1031 = Gvar.var_704[180];
        Gvar.var_165 = Gvar.var_704[181];
        Gvar.var_166 = Gvar.var_704[182];
        Gvar.var_167 = Gvar.var_704[183];
        Gvar.var_153 = Gvar.var_704[184];
        Gvar.var_1032 = Gvar.var_704[185];
        Gvar.receive_bgm_id = Gvar.var_704[186];
        Gvar.special_floor = Gvar.var_704[187];
        Gvar.var_1033 = Gvar.var_704[188];
        Gvar.var_681 = Gvar.var_704[189];
        Gvar.var_684 = Gvar.var_704[190];
        Gvar.var_178 = Gvar.var_704[191];
        Gvar.var_1034 = Gvar.var_704[192];
        Gvar.var_367 = Gvar.var_704[193];
        Gvar.var_833 = Gvar.var_704[194];
        Gvar.var_137 = Gvar.var_704[195];
        Gvar.var_1035 = Gvar.var_704[196];
        Gvar.var_173 = Gvar.var_704[197];
        Gvar.var_1036 = Gvar.var_704[198];
        Gvar.var_1037 = Gvar.var_704[199];
        Gvar.var_1038 = Gvar.var_704[200];
        Gvar.var_1039 = Gvar.var_704[201];
        Gvar.var_1040 = Gvar.var_704[202];
        Gvar.ivents_flag = Gvar.var_704[203];
        Gvar.var_830 = Gvar.var_704[204];
        Gvar.var_179 = Gvar.var_704[205];
        Gvar.var_180 = Gvar.var_704[206];
        Gvar.var_181 = Gvar.var_704[207];
        Gvar.var_182 = Gvar.var_704[208];
        Gvar.var_176 = Gvar.var_704[209];
        Gvar.var_183 = Gvar.var_704[210];
        Gvar.var_184 = Gvar.var_704[211];
        Gvar.var_185 = Gvar.var_704[212];
        Gvar.var_186 = Gvar.var_704[213];
        Gvar.var_187 = Gvar.var_704[214];
        Gvar.var_188 = Gvar.var_704[215];
        Gvar.var_189 = Gvar.var_704[216];
        Gvar.var_190 = Gvar.var_704[217];
        Gvar.var_523 = Gvar.var_704[218];
        Gvar.var_755 = Gvar.var_704[219];
        Gvar.var_1041 = Gvar.var_704[220];
        Gvar.var_759 = Gvar.var_704[221];
        Gvar.var_1042 = Gvar.var_704[222];
        Gvar.var_1043 = Gvar.var_704[223];
        Gvar.var_1044 = Gvar.var_704[224];
        Gvar.var_191 = Gvar.var_704[225];
        Gvar.var_192 = Gvar.var_704[226];
        Gvar.var_193 = Gvar.var_704[227];
        Gvar.var_1045 = Gvar.var_704[228];
        Gvar.var_536 = Gvar.var_704[229];
        Gvar.var_1046 = Gvar.var_704[230];
        Gvar.var_831 = Gvar.var_704[231];
        Gvar.var_203 = Gvar.var_704[232];
        Gvar.var_194 = Gvar.var_704[233];
        Gvar.dungeon5_floor = Gvar.var_704[234];
        Gvar.var_524 = Gvar.var_704[235];
        Gvar.var_538 = Gvar.var_704[236];
        Gvar.var_99 = Gvar.var_704[237];
        Gvar.var_202 = Gvar.var_704[238];
        Gvar.var_1047 = Gvar.var_704[239];
        Gvar.var_1048 = Gvar.var_704[240];
        if (Gvar.var_726 == 1) {
            Gvar.var_752 = "01e.dat";
        }
        if (Gvar.var_726 == 2) {
            Gvar.var_752 = "02e.dat";
        }
        if (Gvar.var_726 == 3) {
            Gvar.var_752 = "03e.dat";
        }
        await Adap.exist(Gvar.var_752);

        if (Gvar.strsize == (-1)) {
            await Func.func230();
            await Adap.bsave(Gvar.var_752, Gvar.data = Gvar.var_753, null, null);
        }
        Adap.notesel(Gvar.var_754);
        await Adap.noteload(Gvar.var_752);
        // await Func.setMessage("", "", 7, false, false, false); // ← いらない？
        Gvar.var_765 = 0;
        Gvar.var_374 = 0;
        Gvar.var_755 = 0;
        return;
}

export {func229}
