import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// プレイデータを保存するセーブ機能
// 旧 func231
async function func231(this: any) {
        Adap.dbgprt(231);
        Gvar.var_8 = await Adap.ginfo(4);
        Gvar.var_9 = await Adap.ginfo(5);
        await Adap.bsave("00.dat", Gvar.data = Gvar.var_8, null, 40);
        await Adap.bsave("00.dat", Gvar.data = Gvar.var_9, null, 60);
        if (Gvar.dungeon_number == 99) {
            Adap.end();
        }
        if (Gvar.var_262 == 1 && Gvar.var_1049 == 0) {
            await Func.func182();
        }
        if (Gvar.var_212 == 1) {
            Gvar.var_262 = 1; // Gvar.dungeon_number = 0 確認フラグON
            await Func.func233(); // ダンジョンへ入った際の全ステータス初期化処理
        }
        if (Gvar.var_767 == 1) {
            Gvar.var_262 = 1; // Gvar.dungeon_number = 0 確認フラグON
            await Func.func233(); // ダンジョンへ入った際の全ステータス初期化処理
        }
        await Func.func232();
        if (Gvar.var_726 == 1) {
            Gvar.var_735 = "01.dat";
        }
        if (Gvar.var_726 == 2) {
            Gvar.var_735 = "02.dat";
        }
        if (Gvar.var_726 == 3) {
            Gvar.var_735 = "03.dat";
        }
        Gvar.var_704[1] = Gvar.current_floor;
        Gvar.var_704[2] = Gvar.var_376;
        Gvar.var_704[3] = Gvar.current_level;
        Gvar.var_704[4] = Gvar.var_352;
        Gvar.var_704[5] = Gvar.var_211;
        Gvar.var_704[6] = Gvar.var_568;
        Gvar.var_704[7] = Gvar.var_567;
        Gvar.var_704[8] = Gvar.var_350;
        Gvar.var_704[9] = Gvar.var_565;
        Gvar.var_704[10] = Gvar.var_566;
        Gvar.var_704[11] = Gvar.var_580;
        Gvar.var_704[12] = Gvar.var_581;
        Gvar.var_704[13] = Gvar.wallet;
        Gvar.var_704[14] = Gvar.var_212;
        Gvar.var_704[15] = Gvar.var_134;
        Gvar.var_704[16] = Gvar.var_135;
        Gvar.var_704[17] = Gvar.var_136;
        Gvar.var_704[18] = Gvar.var_219;
        Gvar.var_704[19] = Gvar.var_535;
        Gvar.var_704[20] = Gvar.var_126;
        Gvar.var_704[21] = Gvar.var_133;
        Gvar.var_704[22] = Gvar.var_397;
        Gvar.var_704[23] = Gvar.var_127;
        Gvar.var_704[24] = Gvar.var_104;
        Gvar.var_704[25] = Gvar.var_109;
        Gvar.var_704[26] = Gvar.var_110;
        Gvar.var_704[27] = Gvar.var_111;
        Gvar.var_704[28] = Gvar.var_105;
        Gvar.var_704[29] = Gvar.var_559;
        Gvar.var_704[30] = Gvar.var_129;
        Gvar.var_704[31] = Gvar.var_218;
        Gvar.var_704[32] = Gvar.var_374;
        Gvar.var_704[33] = Gvar.var_128;
        Gvar.var_704[34] = Gvar.var_993;
        Gvar.var_704[35] = Gvar.kougeki_disc_id ;
        Gvar.var_704[36] = Gvar.bougyo_disc_id;
        Gvar.var_704[37] = Gvar.nouryoku_disc_id;
        Gvar.var_704[38] = Gvar.shageki_disc_id;
        Gvar.var_704[39] = Gvar.var_250;
        Gvar.var_704[40] = Gvar.var_224;
        Gvar.var_704[41] = Gvar.var_66;
        Gvar.var_704[42] = Gvar.var_67;
        Gvar.var_704[43] = Gvar.var_201;
        Gvar.var_704[44] = Gvar.var_199;
        Gvar.var_704[45] = Gvar.var_336;
        Gvar.var_704[46] = Gvar.var_97;
        Gvar.var_704[47] = Gvar.var_337;
        Gvar.var_704[48] = Gvar.y_axis_map_image;
        Gvar.var_704[49] = Gvar.var_96;
        Gvar.var_704[50] = Gvar.var_95;
        Gvar.var_704[51] = Gvar.var_994;
        Gvar.var_704[52] = Gvar.var_995;
        Gvar.var_704[53] = Gvar.var_996;
        Gvar.var_704[54] = Gvar.var_85;
        Gvar.var_704[55] = Gvar.var_997;
        Gvar.var_704[56] = Gvar.var_338;
        Gvar.var_704[57] = Gvar.var_106;
        Gvar.var_704[58] = Gvar.var_262;
        Gvar.var_704[59] = Gvar.var_839;
        Gvar.var_704[60] = Gvar.var_998;
        Gvar.var_704[61] = Gvar.dungeon_number;
        Gvar.var_704[62] = Gvar.var_98;
        Gvar.var_704[63] = Gvar.var_896;
        Gvar.var_704[64] = Gvar.var_897;
        Gvar.var_704[65] = Gvar.var_898;
        Gvar.var_704[66] = Gvar.var_999;
        Gvar.var_704[67] = Gvar.var_1000;
        Gvar.var_704[68] = Gvar.var_1001;
        Gvar.var_704[69] = Gvar.var_894;
        Gvar.var_704[70] = Gvar.var_895;
        Gvar.var_704[71] = Gvar.var_356;
        Gvar.var_704[72] = Gvar.var_1002;
        Gvar.var_704[73] = Gvar.var_1003;
        Gvar.var_704[74] = Gvar.var_420;
        Gvar.var_704[75] = Gvar.var_204;
        Gvar.var_704[76] = Gvar.var_1004;
        Gvar.var_704[77] = Gvar.var_1005;
        Gvar.var_704[78] = Gvar.var_1006;
        Gvar.var_704[79] = Gvar.var_1007;
        Gvar.var_704[80] = Gvar.var_1008;
        Gvar.var_704[81] = Gvar.payment_amount;
        Gvar.var_704[82] = Gvar.var_1009;
        Gvar.var_704[83] = Gvar.count_buying_price;
        Gvar.var_704[84] = Gvar.var_1010;
        Gvar.var_704[85] = Gvar.var_1011;
        Gvar.var_704[86] = Gvar.var_1012;
        Gvar.var_704[87] = Gvar.var_864;
        Gvar.var_704[88] = Gvar.var_404;
        Gvar.var_704[89] = Gvar.var_112;
        Gvar.var_704[90] = Gvar.var_200;
        Gvar.var_704[91] = Gvar.var_113;
        Gvar.var_704[92] = Gvar.var_102;
        Gvar.var_704[93] = Gvar.var_526;
        Gvar.var_704[94] = Gvar.var_537;
        Gvar.var_704[95] = Gvar.var_386;
        Gvar.var_704[96] = Gvar.var_103;
        Gvar.var_704[97] = Gvar.var_100;
        Gvar.var_704[98] = Gvar.var_101;
        Gvar.var_704[99] = Gvar.var_114;
        Gvar.var_704[100] = Gvar.var_116;
        Gvar.var_704[101] = Gvar.var_115;
        Gvar.var_704[102] = Gvar.var_461;
        Gvar.var_704[103] = Gvar.var_462;
        Gvar.var_704[104] = Gvar.var_157;
        Gvar.var_704[105] = Gvar.var_158;
        Gvar.var_704[106] = Gvar.var_177;
        Gvar.var_704[107] = Gvar.var_117;
        Gvar.var_704[108] = Gvar.var_998;
        Gvar.var_704[109] = Gvar.var_1013;
        Gvar.var_704[110] = Gvar.var_118;
        Gvar.var_704[111] = Gvar.var_119;
        Gvar.var_704[112] = Gvar.var_131;
        Gvar.var_704[113] = Gvar.var_169;
        Gvar.var_704[114] = Gvar.var_140;
        Gvar.var_704[115] = Gvar.var_1014;
        Gvar.var_704[116] = Gvar.var_121;
        Gvar.var_704[117] = Gvar.var_595;
        Gvar.var_704[118] = Gvar.var_172;
        Gvar.var_704[119] = Gvar.var_1015;
        Gvar.var_704[120] = Gvar.var_159;
        Gvar.var_704[121] = Gvar.time_paused; // 時止め(時消し飛ばし)状態フラグ
        Gvar.var_704[122] = Gvar.var_164;
        Gvar.var_704[123] = Gvar.var_132;
        Gvar.var_704[124] = Gvar.var_120;
        Gvar.var_704[125] = Gvar.var_1016;
        Gvar.var_704[126] = Gvar.var_1017;
        Gvar.var_704[127] = Gvar.var_1018;
        Gvar.var_704[128] = Gvar.var_1019;
        Gvar.var_704[129] = Gvar.var_1020;
        Gvar.var_704[130] = Gvar.var_1021;
        Gvar.var_704[131] = Gvar.var_122;
        Gvar.var_704[132] = Gvar.var_463;
        Gvar.var_704[133] = Gvar.var_464;
        Gvar.var_704[134] = Gvar.var_141;
        Gvar.var_704[135] = Gvar.var_123;
        Gvar.var_704[136] = Gvar.var_124;
        Gvar.var_704[137] = Gvar.var_396;
        Gvar.var_704[138] = Gvar.var_550;
        Gvar.var_704[139] = Gvar.var_125;
        Gvar.var_704[140] = Gvar.var_138;
        Gvar.var_704[141] = Gvar.var_1022;
        Gvar.var_704[142] = Gvar.var_175;
        Gvar.var_704[143] = Gvar.var_139;
        Gvar.var_704[144] = Gvar.var_168;
        Gvar.var_704[145] = Gvar.var_322;
        Gvar.var_704[146] = Gvar.var_70;
        Gvar.var_704[147] = Gvar.var_1023;
        Gvar.var_704[148] = Gvar.var_1024;
        Gvar.var_704[149] = Gvar.var_142;
        Gvar.var_704[150] = Gvar.var_143;
        Gvar.var_704[151] = Gvar.var_144;
        Gvar.var_704[152] = Gvar.var_1025;
        Gvar.var_704[153] = Gvar.var_1026;
        Gvar.var_704[154] = Gvar.var_1027;
        Gvar.var_704[155] = Gvar.var_1028;
        Gvar.var_704[156] = Gvar.var_1029;
        Gvar.var_704[157] = Gvar.var_145;
        Gvar.var_704[158] = Gvar.var_1030;
        Gvar.var_704[159] = Gvar.var_146;
        Gvar.var_704[160] = Gvar.var_147;
        Gvar.var_704[161] = Gvar.var_148;
        Gvar.var_704[162] = Gvar.var_149;
        Gvar.var_704[163] = Gvar.dungeon1_floor;
        Gvar.var_704[164] = Gvar.dungeon2_floor;
        Gvar.var_704[165] = Gvar.dungeon3_floor;
        Gvar.var_704[166] = Gvar.var_387;
        Gvar.var_704[167] = Gvar.var_150;
        Gvar.var_704[168] = Gvar.sympathy_id;
        Gvar.var_704[169] = Gvar.time_paused_count; // 敵時止め経過ターン
        Gvar.var_704[170] = Gvar.var_152;
        Gvar.var_704[171] = Gvar.var_154;
        Gvar.var_704[172] = Gvar.var_155;
        Gvar.var_704[173] = Gvar.var_174;
        Gvar.var_704[174] = Gvar.var_160;
        Gvar.var_704[175] = Gvar.var_161;
        Gvar.var_704[176] = Gvar.var_162;
        Gvar.var_704[177] = Gvar.var_130;
        Gvar.var_704[178] = Gvar.var_170;
        Gvar.var_704[179] = Gvar.dungeon4_floor;
        Gvar.var_704[180] = Gvar.var_1031;
        Gvar.var_704[181] = Gvar.var_165;
        Gvar.var_704[182] = Gvar.var_166;
        Gvar.var_704[183] = Gvar.var_167;
        Gvar.var_704[184] = Gvar.var_153;
        Gvar.var_704[185] = Gvar.var_1032;
        Gvar.var_704[186] = Gvar.receive_bgm_id;
        Gvar.var_704[187] = Gvar.special_floor;
        Gvar.var_704[188] = Gvar.var_1033;
        Gvar.var_704[189] = Gvar.var_681;
        Gvar.var_704[190] = Gvar.var_684;
        Gvar.var_704[191] = Gvar.var_178;
        Gvar.var_704[192] = Gvar.var_1034;
        Gvar.var_704[193] = Gvar.var_367;
        Gvar.var_704[194] = Gvar.var_833;
        Gvar.var_704[195] = Gvar.var_137;
        Gvar.var_704[196] = Gvar.var_1035;
        Gvar.var_704[197] = Gvar.var_173;
        Gvar.var_704[198] = Gvar.var_1036;
        Gvar.var_704[199] = Gvar.var_1037;
        Gvar.var_704[200] = Gvar.var_1038;
        Gvar.var_704[201] = Gvar.var_1039;
        Gvar.var_704[202] = Gvar.var_1040;
        Gvar.var_704[203] = Gvar.ivents_flag;
        Gvar.var_704[204] = Gvar.var_830;
        Gvar.var_704[205] = Gvar.var_179;
        Gvar.var_704[206] = Gvar.var_180;
        Gvar.var_704[207] = Gvar.var_181;
        Gvar.var_704[208] = Gvar.var_182;
        Gvar.var_704[209] = Gvar.var_176;
        Gvar.var_704[210] = Gvar.var_183;
        Gvar.var_704[211] = Gvar.var_184;
        Gvar.var_704[212] = Gvar.var_185;
        Gvar.var_704[213] = Gvar.var_186;
        Gvar.var_704[214] = Gvar.var_187;
        Gvar.var_704[215] = Gvar.var_188;
        Gvar.var_704[216] = Gvar.var_189;
        Gvar.var_704[217] = Gvar.var_190;
        Gvar.var_704[218] = Gvar.var_523;
        Gvar.var_704[219] = Gvar.var_755;
        Gvar.var_704[220] = Gvar.var_1041;
        Gvar.var_704[221] = Gvar.var_759;
        Gvar.var_704[222] = Gvar.var_1042;
        Gvar.var_704[223] = Gvar.var_1043;
        Gvar.var_704[224] = Gvar.var_1044;
        Gvar.var_704[225] = Gvar.var_191;
        Gvar.var_704[226] = Gvar.var_192;
        Gvar.var_704[227] = Gvar.var_193;
        Gvar.var_704[228] = Gvar.var_1045;
        Gvar.var_704[229] = Gvar.var_536;
        Gvar.var_704[230] = Gvar.var_1046;
        Gvar.var_704[231] = Gvar.var_831;
        Gvar.var_704[232] = Gvar.var_203;
        Gvar.var_704[233] = Gvar.var_194;
        Gvar.var_704[234] = Gvar.dungeon5_floor;
        Gvar.var_704[235] = Gvar.var_524;
        Gvar.var_704[236] = Gvar.var_538;
        Gvar.var_704[237] = Gvar.var_99;
        Gvar.var_704[238] = Gvar.var_202;
        Gvar.var_704[239] = Gvar.var_1047;
        Gvar.var_704[240] = Gvar.var_1048;
        Gvar.var_704[241] = 0;
        Gvar.var_704[242] = 0;
        Gvar.var_704[243] = 0;
        Gvar.var_704[244] = 0;
        Gvar.var_704[245] = 0;
        Gvar.var_704[246] = 0;
        Gvar.var_704[247] = 0;
        Gvar.var_704[248] = 0;
        Gvar.var_704[249] = 0;
        Gvar.var_704[250] = 0;
        Gvar.var_704[251] = 0;
        Gvar.var_704[252] = 0;
        Gvar.var_704[253] = 0;
        Gvar.var_704[254] = 0;
        Gvar.var_704[255] = 0;
        Gvar.var_704[256] = 0;
        Gvar.var_704[257] = 0;
        Gvar.var_704[258] = 0;
        Gvar.var_704[259] = 0;
        Gvar.var_704[260] = 0;
        Gvar.var_704[261] = 0;
        Gvar.var_704[262] = 0;
        Gvar.var_704[263] = 0;
        Gvar.var_704[264] = 0;
        Gvar.var_704[265] = 0;
        Gvar.var_704[266] = 0;
        Gvar.var_704[267] = 0;
        Gvar.var_704[268] = 0;
        Gvar.var_704[269] = 0;
        Gvar.var_985 = 0;
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_704, null, Gvar.var_985);

        Gvar.var_985 = Gvar.var_985 + 1200;
        // await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_233, null, Gvar.var_985);
        // Ver0.1308で追加。アイテムを保存する為に必要
        const save_233 = Array();
        Gvar.var_233.forEach(async function (save: any) {
            save_233.push(save.Save());
        });

        await Adap.bsave(Gvar.var_735, save_233, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 12000;
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_476, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 160;
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_477, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 160;
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_479, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 160;
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_478, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 160;
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_862, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 16000;
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_71, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_72, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_65, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_73, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_74, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_75, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 80;
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_76, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 6000;
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_79, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_80, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_84, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_77, null, Gvar.var_985);

        Gvar.var_985 = Gvar.var_985 + 19600;
        // await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_78, null, Gvar.var_985);
        // Ver0.1308で追加。アイテムを保存する為に必要
        const save_78 = Array();
        Gvar.var_78.forEach(async function (save: any) {
            save_78.push(save.Save());
        });
        await Adap.bsave(Gvar.var_735, save_78, null, Gvar.var_985);

        Gvar.var_985 = Gvar.var_985 + 36000;
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_81, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 8400;
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_82, null, Gvar.var_985);

        Gvar.var_985 = Gvar.var_985 + 19600;
        const save_83 = Array();
        Gvar.var_83.forEach(async function (save: any) {
            save_83.push(save.Save());
        });
        await Adap.bsave(Gvar.var_735, save_83, null, Gvar.var_985);

        Gvar.var_985 = Gvar.var_985 + 48000;
        await Adap.bsave(Gvar.var_735, Gvar.var_493, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 80;
        await Adap.bsave(Gvar.var_735, Gvar.var_983, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 12000;
        await Adap.bsave(Gvar.var_735, Gvar.var_792, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 35000;
        await Adap.bsave(Gvar.var_735, Gvar.var_863, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        await Adap.bsave(Gvar.var_735, Gvar.var_853, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 6000;
        await Adap.bsave(Gvar.var_735, Gvar.var_986, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 400;
        await Adap.bsave(Gvar.var_735, Gvar.var_486, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 201600;
        await Adap.bsave(Gvar.var_735, Gvar.equip_disc, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 1600;
        await Adap.bsave(Gvar.var_735, Gvar.var_987, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 120;
        await Adap.bsave(Gvar.var_735, Gvar.var_988, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 480;
        await Adap.bsave(Gvar.var_735, Gvar.var_835, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 4000;
        await Adap.bsave(Gvar.var_735, Gvar.var_87, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 19600;
        await Adap.bsave(Gvar.var_735, Gvar.var_989, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 1600;
        await Adap.bsave(Gvar.var_735, Gvar.var_990, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 400;
        await Adap.bsave(Gvar.var_735, Gvar.var_991, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 7560;
        await Adap.bsave(Gvar.var_735, Gvar.var_992, null, Gvar.var_985);
        Gvar.var_985 = Gvar.var_985 + 120;
        if (Gvar.var_205 == 1) {
            Gvar.var_205 = 0;
            return;
        }
        if (Gvar.var_407 >= 1) {
            Adap.netclose(Gvar.var_1050);
        }
        if (Gvar.var_637 >= 1) {
            Adap.chgdisp();
        }
        Adap.end();
}

export {func231}
