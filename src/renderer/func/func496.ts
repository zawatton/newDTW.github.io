/**
 * func496 — func496 装備discの共鳴組み合わせ関数
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func496(this: any) {
        Adap.dbgprt(496);
        Gvar.var_1173 = Gvar.sympathy_id;
        if (Gvar.var_1173 == 1 || Gvar.var_1173 == 102 || Gvar.var_1173 == 103 || Gvar.var_1173 == 107 || Gvar.var_1173 == 110 || Gvar.var_1173 == 111 || Gvar.var_1173 == 115 || Gvar.var_1173 == 117 || Gvar.var_1173 == 118 || Gvar.var_1173 == 122 || Gvar.var_1173 == 125 || Gvar.var_1173 == 126 || Gvar.var_1173 == 127 || Gvar.var_1173 == 129 || Gvar.var_1173 == 130 || Gvar.var_1173 == 131 || Gvar.var_1173 == 132 || Gvar.var_1173 == 133 || Gvar.var_1173 == 137 || Gvar.var_1173 == 149 || Gvar.var_1173 == 150 || Gvar.var_1173 == 151 || Gvar.var_1173 == 152 || Gvar.var_1173 == 153 || Gvar.var_1173 == 158 || Gvar.var_1173 == 167 || Gvar.var_1173 == 168) {
            Gvar.var_566 = Gvar.var_566 - 1;
            Gvar.var_565 = Gvar.var_565 - 1;
            if (Gvar.var_565 >= Gvar.var_566) {
                Gvar.var_565 = Gvar.var_566;
            }
            if (Gvar.var_565 <= 0) {
                Gvar.var_565 = 0;
            }
        }
        if (Gvar.var_1173 == 128 || Gvar.var_1173 == 134 || Gvar.var_1173 == 138 || Gvar.var_1173 == 140 || Gvar.var_1173 == 142 || Gvar.var_1173 == 143 || Gvar.var_1173 == 147 || Gvar.var_1173 == 148 || Gvar.var_1173 == 157 || Gvar.var_1173 == 169) {
            Gvar.var_566 = Gvar.var_566 - 2;
            Gvar.var_565 = Gvar.var_565 - 2;
            if (Gvar.var_565 >= Gvar.var_566) {
                Gvar.var_565 = Gvar.var_566;
            }
            if (Gvar.var_565 <= 0) {
                Gvar.var_565 = 0;
            }
        }
        if (Gvar.var_1173 == 141) {
            Gvar.var_566 = Gvar.var_566 - 3;
            Gvar.var_565 = Gvar.var_565 - 3;
            if (Gvar.var_565 >= Gvar.var_566) {
                Gvar.var_565 = Gvar.var_566;
            }
            if (Gvar.var_565 <= 0) {
                Gvar.var_565 = 0;
            }
        }
        if (Gvar.var_1173 == 116 || Gvar.var_1173 == 154 || Gvar.var_1173 == 155 || Gvar.var_1173 == 156) {
            Gvar.var_580 = Gvar.var_580 - 1;
        }
        if (Gvar.var_1173 == 160 || Gvar.var_1173 == 163) {
            Gvar.var_580 = Gvar.var_580 - 2;
        }
        if (Gvar.var_1173 == 108 || Gvar.var_1173 == 112 || Gvar.var_1173 == 135 || Gvar.var_1173 == 164 || Gvar.var_1173 == 165) {
            Gvar.var_580 = Gvar.var_580 - 3;
        }
        if (Gvar.var_1173 == 105 || Gvar.var_1173 == 113) {
            Gvar.var_581 = Gvar.var_581 - 1;
        }
        if (Gvar.var_1173 == 144) {
            Gvar.var_581 = Gvar.var_581 - 2;
        }
        if (Gvar.var_1173 == 161 || Gvar.var_1173 == 162) {
            Gvar.var_352 = Gvar.var_352 - Gvar.var_1048;
        }
        if (Gvar.var_1173 == 159 || Gvar.var_1173 == 146 || Gvar.var_1173 == 145) {
            Gvar.var_352 = Gvar.var_352 - Gvar.var_1048;
        }
        if (Gvar.var_1173 == 104) {
            Gvar.var_352 = Gvar.var_352 - Gvar.var_1048;
        }
        Gvar.sympathy_id = 0;
        Gvar.sympathy_base_disc_id = Gvar.kougeki_disc_id ;
        Gvar.sympathy_with_disc_id = Gvar.bougyo_disc_id;
        Gvar.var_1173 = Gvar.nouryoku_disc_id;
        if (Gvar.sympathy_base_disc_id != 0 && Gvar.sympathy_base_disc_id == Gvar.sympathy_with_disc_id) {
            Gvar.sympathy_id = 1;
        }
        if (Gvar.sympathy_base_disc_id == 100 && Gvar.sympathy_with_disc_id == 106) {
            Gvar.sympathy_id = 101;
        }
        if (Gvar.sympathy_with_disc_id == 100 && Gvar.sympathy_base_disc_id == 106) {
            Gvar.sympathy_id = 101;
        }
        if (Gvar.sympathy_base_disc_id == 100 && Gvar.sympathy_with_disc_id == 116) {
            Gvar.sympathy_id = 102;
        }
        if (Gvar.sympathy_with_disc_id == 100 && Gvar.sympathy_base_disc_id == 116) {
            Gvar.sympathy_id = 102;
        }
        if (Gvar.sympathy_base_disc_id == 100 && Gvar.sympathy_with_disc_id == 120) {
            Gvar.sympathy_id = 103;
        }
        if (Gvar.sympathy_with_disc_id == 100 && Gvar.sympathy_base_disc_id == 120) {
            Gvar.sympathy_id = 103;
        }
        if (Gvar.sympathy_base_disc_id == 100 && Gvar.sympathy_with_disc_id == 111) {
            Gvar.sympathy_id = 104;
        }
        if (Gvar.sympathy_with_disc_id == 100 && Gvar.sympathy_base_disc_id == 111) {
            Gvar.sympathy_id = 104;
        }
        if (Gvar.sympathy_base_disc_id == 100 && Gvar.sympathy_with_disc_id == 103) {
            Gvar.sympathy_id = 105;
        }
        if (Gvar.sympathy_with_disc_id == 100 && Gvar.sympathy_base_disc_id == 103) {
            Gvar.sympathy_id = 105;
        }
        if (Gvar.sympathy_base_disc_id == 100 && Gvar.sympathy_with_disc_id == 203) {
            Gvar.sympathy_id = 106;
        }
        if (Gvar.sympathy_with_disc_id == 100 && Gvar.sympathy_base_disc_id == 203) {
            Gvar.sympathy_id = 106;
        }
        if (Gvar.sympathy_base_disc_id == 100 && Gvar.sympathy_with_disc_id == 317) {
            Gvar.sympathy_id = 107;
        }
        if (Gvar.sympathy_with_disc_id == 100 && Gvar.sympathy_base_disc_id == 317) {
            Gvar.sympathy_id = 107;
        }
        if (Gvar.sympathy_base_disc_id == 100 && Gvar.sympathy_with_disc_id == 398) {
            Gvar.sympathy_id = 108;
        }
        if (Gvar.sympathy_with_disc_id == 100 && Gvar.sympathy_base_disc_id == 398) {
            Gvar.sympathy_id = 108;
        }
        if (Gvar.sympathy_base_disc_id == 398 && Gvar.sympathy_with_disc_id == 106) {
            Gvar.sympathy_id = 109;
        }
        if (Gvar.sympathy_with_disc_id == 398 && Gvar.sympathy_base_disc_id == 106) {
            Gvar.sympathy_id = 109;
        }
        if (Gvar.sympathy_base_disc_id == 398 && Gvar.sympathy_with_disc_id == 116) {
            Gvar.sympathy_id = 110;
        }
        if (Gvar.sympathy_with_disc_id == 398 && Gvar.sympathy_base_disc_id == 116) {
            Gvar.sympathy_id = 110;
        }
        if (Gvar.sympathy_base_disc_id == 398 && Gvar.sympathy_with_disc_id == 120) {
            Gvar.sympathy_id = 111;
        }
        if (Gvar.sympathy_with_disc_id == 398 && Gvar.sympathy_base_disc_id == 120) {
            Gvar.sympathy_id = 111;
        }
        if (Gvar.sympathy_base_disc_id == 398 && Gvar.sympathy_with_disc_id == 111) {
            Gvar.sympathy_id = 112;
        }
        if (Gvar.sympathy_with_disc_id == 398 && Gvar.sympathy_base_disc_id == 111) {
            Gvar.sympathy_id = 112;
        }
        if (Gvar.sympathy_base_disc_id == 398 && Gvar.sympathy_with_disc_id == 103) {
            Gvar.sympathy_id = 113;
        }
        if (Gvar.sympathy_with_disc_id == 398 && Gvar.sympathy_base_disc_id == 103) {
            Gvar.sympathy_id = 113;
        }
        if (Gvar.sympathy_base_disc_id == 398 && Gvar.sympathy_with_disc_id == 203) {
            Gvar.sympathy_id = 114;
        }
        if (Gvar.sympathy_with_disc_id == 398 && Gvar.sympathy_base_disc_id == 203) {
            Gvar.sympathy_id = 114;
        }
        if (Gvar.sympathy_base_disc_id == 398 && Gvar.sympathy_with_disc_id == 317) {
            Gvar.sympathy_id = 115;
        }
        if (Gvar.sympathy_with_disc_id == 398 && Gvar.sympathy_base_disc_id == 317) {
            Gvar.sympathy_id = 115;
        }
        if (Gvar.sympathy_base_disc_id == 106 && Gvar.sympathy_with_disc_id == 104) {
            Gvar.sympathy_id = 116;
        }
        if (Gvar.sympathy_with_disc_id == 106 && Gvar.sympathy_base_disc_id == 104) {
            Gvar.sympathy_id = 116;
        }
        if (Gvar.sympathy_base_disc_id == 106 && Gvar.sympathy_with_disc_id == 103) {
            Gvar.sympathy_id = 117;
        }
        if (Gvar.sympathy_with_disc_id == 106 && Gvar.sympathy_base_disc_id == 103) {
            Gvar.sympathy_id = 117;
        }
        if (Gvar.sympathy_base_disc_id == 106 && Gvar.sympathy_with_disc_id == 116) {
            Gvar.sympathy_id = 118;
        }
        if (Gvar.sympathy_with_disc_id == 106 && Gvar.sympathy_base_disc_id == 116) {
            Gvar.sympathy_id = 118;
        }
        if (Gvar.sympathy_base_disc_id == 106 && Gvar.sympathy_with_disc_id == 301) {
            Gvar.sympathy_id = 119;
        }
        if (Gvar.sympathy_with_disc_id == 106 && Gvar.sympathy_base_disc_id == 301) {
            Gvar.sympathy_id = 119;
        }
        if (Gvar.sympathy_base_disc_id == 106 && Gvar.sympathy_with_disc_id == 300) {
            Gvar.sympathy_id = 120;
        }
        if (Gvar.sympathy_with_disc_id == 106 && Gvar.sympathy_base_disc_id == 300) {
            Gvar.sympathy_id = 120;
        }
        if (Gvar.sympathy_base_disc_id == 106 && Gvar.sympathy_with_disc_id == 313) {
            Gvar.sympathy_id = 121;
        }
        if (Gvar.sympathy_with_disc_id == 106 && Gvar.sympathy_base_disc_id == 313) {
            Gvar.sympathy_id = 121;
        }
        if (Gvar.sympathy_base_disc_id == 104 && Gvar.sympathy_with_disc_id == 103) {
            Gvar.sympathy_id = 122;
        }
        if (Gvar.sympathy_with_disc_id == 104 && Gvar.sympathy_base_disc_id == 103) {
            Gvar.sympathy_id = 122;
        }
        if (Gvar.sympathy_base_disc_id == 104 && Gvar.sympathy_with_disc_id == 301) {
            Gvar.sympathy_id = 123;
        }
        if (Gvar.sympathy_with_disc_id == 104 && Gvar.sympathy_base_disc_id == 301) {
            Gvar.sympathy_id = 123;
        }
        if (Gvar.sympathy_base_disc_id == 104 && Gvar.sympathy_with_disc_id == 300) {
            Gvar.sympathy_id = 124;
        }
        if (Gvar.sympathy_with_disc_id == 104 && Gvar.sympathy_base_disc_id == 300) {
            Gvar.sympathy_id = 124;
        }
        if (Gvar.sympathy_base_disc_id == 115 && Gvar.sympathy_with_disc_id == 312) {
            Gvar.sympathy_id = 125;
        }
        if (Gvar.sympathy_with_disc_id == 115 && Gvar.sympathy_base_disc_id == 312) {
            Gvar.sympathy_id = 125;
        }
        if (Gvar.sympathy_base_disc_id == 115 && Gvar.sympathy_with_disc_id == 124) {
            Gvar.sympathy_id = 126;
        }
        if (Gvar.sympathy_with_disc_id == 115 && Gvar.sympathy_base_disc_id == 124) {
            Gvar.sympathy_id = 126;
        }
        if (Gvar.sympathy_base_disc_id == 115 && Gvar.sympathy_with_disc_id == 121) {
            Gvar.sympathy_id = 127;
        }
        if (Gvar.sympathy_with_disc_id == 115 && Gvar.sympathy_base_disc_id == 121) {
            Gvar.sympathy_id = 127;
        }
        if (Gvar.sympathy_base_disc_id == 115 && Gvar.sympathy_with_disc_id == 108) {
            Gvar.sympathy_id = 128;
        }
        if (Gvar.sympathy_with_disc_id == 115 && Gvar.sympathy_base_disc_id == 108) {
            Gvar.sympathy_id = 128;
        }
        if (Gvar.sympathy_base_disc_id == 108 && Gvar.sympathy_with_disc_id == 312) {
            Gvar.sympathy_id = 129;
        }
        if (Gvar.sympathy_with_disc_id == 108 && Gvar.sympathy_base_disc_id == 312) {
            Gvar.sympathy_id = 129;
        }
        if (Gvar.sympathy_base_disc_id == 108 && Gvar.sympathy_with_disc_id == 124) {
            Gvar.sympathy_id = 130;
        }
        if (Gvar.sympathy_with_disc_id == 108 && Gvar.sympathy_base_disc_id == 124) {
            Gvar.sympathy_id = 130;
        }
        if (Gvar.sympathy_base_disc_id == 108 && Gvar.sympathy_with_disc_id == 121) {
            Gvar.sympathy_id = 131;
        }
        if (Gvar.sympathy_with_disc_id == 108 && Gvar.sympathy_base_disc_id == 121) {
            Gvar.sympathy_id = 131;
        }
        if (Gvar.sympathy_base_disc_id == 124 && Gvar.sympathy_with_disc_id == 312) {
            Gvar.sympathy_id = 132;
        }
        if (Gvar.sympathy_with_disc_id == 124 && Gvar.sympathy_base_disc_id == 312) {
            Gvar.sympathy_id = 132;
        }
        if (Gvar.sympathy_base_disc_id == 124 && Gvar.sympathy_with_disc_id == 121) {
            Gvar.sympathy_id = 133;
        }
        if (Gvar.sympathy_with_disc_id == 124 && Gvar.sympathy_base_disc_id == 121) {
            Gvar.sympathy_id = 133;
        }
        if (Gvar.sympathy_base_disc_id == 312 && Gvar.sympathy_with_disc_id == 121) {
            Gvar.sympathy_id = 134;
        }
        if (Gvar.sympathy_with_disc_id == 312 && Gvar.sympathy_base_disc_id == 121) {
            Gvar.sympathy_id = 134;
        }
        if (Gvar.sympathy_base_disc_id == 101 && Gvar.sympathy_with_disc_id == 122) {
            Gvar.sympathy_id = 135;
        }
        if (Gvar.sympathy_with_disc_id == 101 && Gvar.sympathy_base_disc_id == 122) {
            Gvar.sympathy_id = 135;
        }
        if (Gvar.sympathy_base_disc_id == 101 && Gvar.sympathy_with_disc_id == 109) {
            Gvar.sympathy_id = 136;
        }
        if (Gvar.sympathy_with_disc_id == 101 && Gvar.sympathy_base_disc_id == 109) {
            Gvar.sympathy_id = 136;
        }
        if (Gvar.sympathy_base_disc_id == 109 && Gvar.sympathy_with_disc_id == 116) {
            Gvar.sympathy_id = 137;
        }
        if (Gvar.sympathy_with_disc_id == 109 && Gvar.sympathy_base_disc_id == 116) {
            Gvar.sympathy_id = 137;
        }
        if (Gvar.sympathy_base_disc_id == 102 && Gvar.sympathy_with_disc_id == 119) {
            Gvar.sympathy_id = 138;
        }
        if (Gvar.sympathy_with_disc_id == 102 && Gvar.sympathy_base_disc_id == 119) {
            Gvar.sympathy_id = 138;
        }
        if (Gvar.sympathy_base_disc_id == 102 && Gvar.sympathy_with_disc_id == 315) {
            Gvar.sympathy_id = 139;
        }
        if (Gvar.sympathy_with_disc_id == 102 && Gvar.sympathy_base_disc_id == 315) {
            Gvar.sympathy_id = 139;
        }
        if (Gvar.sympathy_base_disc_id == 111 && Gvar.sympathy_with_disc_id == 115) {
            Gvar.sympathy_id = 140;
        }
        if (Gvar.sympathy_with_disc_id == 111 && Gvar.sympathy_base_disc_id == 115) {
            Gvar.sympathy_id = 140;
        }
        if (Gvar.sympathy_base_disc_id == 111 && Gvar.sympathy_with_disc_id == 114) {
            Gvar.sympathy_id = 141;
        }
        if (Gvar.sympathy_with_disc_id == 111 && Gvar.sympathy_base_disc_id == 114) {
            Gvar.sympathy_id = 141;
        }
        if (Gvar.sympathy_base_disc_id == 111 && Gvar.sympathy_with_disc_id == 123) {
            Gvar.sympathy_id = 142;
        }
        if (Gvar.sympathy_with_disc_id == 111 && Gvar.sympathy_base_disc_id == 123) {
            Gvar.sympathy_id = 142;
        }
        if (Gvar.sympathy_base_disc_id == 112 && Gvar.sympathy_with_disc_id == 314) {
            Gvar.sympathy_id = 143;
        }
        if (Gvar.sympathy_with_disc_id == 112 && Gvar.sympathy_base_disc_id == 314) {
            Gvar.sympathy_id = 143;
        }
        if (Gvar.sympathy_base_disc_id == 112 && Gvar.sympathy_with_disc_id == 204) {
            Gvar.sympathy_id = 144;
        }
        if (Gvar.sympathy_with_disc_id == 112 && Gvar.sympathy_base_disc_id == 204) {
            Gvar.sympathy_id = 144;
        }
        if (Gvar.sympathy_base_disc_id == 112 && Gvar.sympathy_with_disc_id == 395) {
            Gvar.sympathy_id = 145;
        }
        if (Gvar.sympathy_with_disc_id == 112 && Gvar.sympathy_base_disc_id == 395) {
            Gvar.sympathy_id = 145;
        }
        if (Gvar.sympathy_base_disc_id == 204 && Gvar.sympathy_with_disc_id == 395) {
            Gvar.sympathy_id = 146;
        }
        if (Gvar.sympathy_with_disc_id == 204 && Gvar.sympathy_base_disc_id == 395) {
            Gvar.sympathy_id = 146;
        }
        if (Gvar.sympathy_base_disc_id == 114 && Gvar.sympathy_with_disc_id == 304) {
            Gvar.sympathy_id = 147;
        }
        if (Gvar.sympathy_with_disc_id == 114 && Gvar.sympathy_base_disc_id == 304) {
            Gvar.sympathy_id = 147;
        }
        if (Gvar.sympathy_base_disc_id == 114 && Gvar.sympathy_with_disc_id == 397) {
            Gvar.sympathy_id = 148;
        }
        if (Gvar.sympathy_with_disc_id == 114 && Gvar.sympathy_base_disc_id == 397) {
            Gvar.sympathy_id = 148;
        }
        if (Gvar.sympathy_base_disc_id == 120 && Gvar.sympathy_with_disc_id == 118) {
            Gvar.sympathy_id = 149;
        }
        if (Gvar.sympathy_with_disc_id == 120 && Gvar.sympathy_base_disc_id == 118) {
            Gvar.sympathy_id = 149;
        }
        if (Gvar.sympathy_base_disc_id == 120 && Gvar.sympathy_with_disc_id == 304) {
            Gvar.sympathy_id = 150;
        }
        if (Gvar.sympathy_with_disc_id == 120 && Gvar.sympathy_base_disc_id == 304) {
            Gvar.sympathy_id = 150;
        }
        if (Gvar.sympathy_base_disc_id == 120 && Gvar.sympathy_with_disc_id == 317) {
            Gvar.sympathy_id = 151;
        }
        if (Gvar.sympathy_with_disc_id == 120 && Gvar.sympathy_base_disc_id == 317) {
            Gvar.sympathy_id = 151;
        }
        if (Gvar.sympathy_base_disc_id == 304 && Gvar.sympathy_with_disc_id == 118) {
            Gvar.sympathy_id = 152;
        }
        if (Gvar.sympathy_with_disc_id == 304 && Gvar.sympathy_base_disc_id == 118) {
            Gvar.sympathy_id = 152;
        }
        if (Gvar.sympathy_base_disc_id == 397 && Gvar.sympathy_with_disc_id == 118) {
            Gvar.sympathy_id = 153;
        }
        if (Gvar.sympathy_with_disc_id == 397 && Gvar.sympathy_base_disc_id == 118) {
            Gvar.sympathy_id = 153;
        }
        if (Gvar.sympathy_base_disc_id == 202 && Gvar.sympathy_with_disc_id == 320) {
            Gvar.sympathy_id = 154;
        }
        if (Gvar.sympathy_with_disc_id == 202 && Gvar.sympathy_base_disc_id == 320) {
            Gvar.sympathy_id = 154;
        }
        if (Gvar.sympathy_base_disc_id == 202 && Gvar.sympathy_with_disc_id == 207) {
            Gvar.sympathy_id = 155;
        }
        if (Gvar.sympathy_with_disc_id == 202 && Gvar.sympathy_base_disc_id == 207) {
            Gvar.sympathy_id = 155;
        }
        if (Gvar.sympathy_base_disc_id == 320 && Gvar.sympathy_with_disc_id == 207) {
            Gvar.sympathy_id = 156;
        }
        if (Gvar.sympathy_with_disc_id == 320 && Gvar.sympathy_base_disc_id == 207) {
            Gvar.sympathy_id = 156;
        }
        if (Gvar.sympathy_base_disc_id == 114 && Gvar.sympathy_with_disc_id == 302) {
            Gvar.sympathy_id = 157;
        }
        if (Gvar.sympathy_with_disc_id == 114 && Gvar.sympathy_base_disc_id == 302) {
            Gvar.sympathy_id = 157;
        }
        if (Gvar.sympathy_base_disc_id == 317 && Gvar.sympathy_with_disc_id == 302) {
            Gvar.sympathy_id = 158;
        }
        if (Gvar.sympathy_with_disc_id == 317 && Gvar.sympathy_base_disc_id == 302) {
            Gvar.sympathy_id = 158;
        }
        if (Gvar.sympathy_base_disc_id == 112 && Gvar.sympathy_with_disc_id == 305) {
            Gvar.sympathy_id = 159;
        }
        if (Gvar.sympathy_with_disc_id == 112 && Gvar.sympathy_base_disc_id == 305) {
            Gvar.sympathy_id = 159;
        }
        if (Gvar.sympathy_base_disc_id == 117 && Gvar.sympathy_with_disc_id == 113) {
            Gvar.sympathy_id = 160;
        }
        if (Gvar.sympathy_with_disc_id == 117 && Gvar.sympathy_base_disc_id == 113) {
            Gvar.sympathy_id = 160;
        }
        if (Gvar.sympathy_base_disc_id == 105 && Gvar.sympathy_with_disc_id == 304) {
            Gvar.sympathy_id = 161;
        }
        if (Gvar.sympathy_with_disc_id == 105 && Gvar.sympathy_base_disc_id == 304) {
            Gvar.sympathy_id = 161;
        }
        if (Gvar.sympathy_base_disc_id == 105 && Gvar.sympathy_with_disc_id == 397) {
            Gvar.sympathy_id = 162;
        }
        if (Gvar.sympathy_with_disc_id == 105 && Gvar.sympathy_base_disc_id == 397) {
            Gvar.sympathy_id = 162;
        }
        if (Gvar.sympathy_base_disc_id == 105 && Gvar.sympathy_with_disc_id == 303) {
            Gvar.sympathy_id = 163;
        }
        if (Gvar.sympathy_with_disc_id == 105 && Gvar.sympathy_base_disc_id == 303) {
            Gvar.sympathy_id = 163;
        }
        if (Gvar.sympathy_base_disc_id == 111 && Gvar.sympathy_with_disc_id == 102) {
            Gvar.sympathy_id = 164;
        }
        if (Gvar.sympathy_with_disc_id == 111 && Gvar.sympathy_base_disc_id == 102) {
            Gvar.sympathy_id = 164;
        }
        if (Gvar.sympathy_base_disc_id == 111 && Gvar.sympathy_with_disc_id == 112) {
            Gvar.sympathy_id = 165;
        }
        if (Gvar.sympathy_with_disc_id == 111 && Gvar.sympathy_base_disc_id == 112) {
            Gvar.sympathy_id = 165;
        }
        if (Gvar.sympathy_base_disc_id == 101 && Gvar.sympathy_with_disc_id == 203) {
            Gvar.sympathy_id = 166;
        }
        if (Gvar.sympathy_with_disc_id == 101 && Gvar.sympathy_base_disc_id == 203) {
            Gvar.sympathy_id = 166;
        }
        if (Gvar.sympathy_base_disc_id == 118 && Gvar.sympathy_with_disc_id == 100) {
            Gvar.sympathy_id = 167;
        }
        if (Gvar.sympathy_with_disc_id == 118 && Gvar.sympathy_base_disc_id == 100) {
            Gvar.sympathy_id = 167;
        }
        if (Gvar.sympathy_base_disc_id == 118 && Gvar.sympathy_with_disc_id == 398) {
            Gvar.sympathy_id = 168;
        }
        if (Gvar.sympathy_with_disc_id == 118 && Gvar.sympathy_base_disc_id == 398) {
            Gvar.sympathy_id = 168;
        }
        if (Gvar.sympathy_base_disc_id == 205 && Gvar.sympathy_with_disc_id == 309) {
            Gvar.sympathy_id = 169;
        }
        if (Gvar.sympathy_with_disc_id == 205 && Gvar.sympathy_base_disc_id == 309) {
            Gvar.sympathy_id = 169;
        }
        if (Gvar.sympathy_base_disc_id == 394 && Gvar.sympathy_with_disc_id == 314) {
            Gvar.sympathy_id = 143;
        }
        if (Gvar.sympathy_with_disc_id == 394 && Gvar.sympathy_base_disc_id == 314) {
            Gvar.sympathy_id = 143;
        }
        if (Gvar.sympathy_base_disc_id == 394 && Gvar.sympathy_with_disc_id == 204) {
            Gvar.sympathy_id = 144;
        }
        if (Gvar.sympathy_with_disc_id == 394 && Gvar.sympathy_base_disc_id == 204) {
            Gvar.sympathy_id = 144;
        }
        if (Gvar.sympathy_base_disc_id == 394 && Gvar.sympathy_with_disc_id == 395) {
            Gvar.sympathy_id = 145;
        }
        if (Gvar.sympathy_with_disc_id == 394 && Gvar.sympathy_base_disc_id == 395) {
            Gvar.sympathy_id = 145;
        }
        if (Gvar.sympathy_base_disc_id == 394 && Gvar.sympathy_with_disc_id == 305) {
            Gvar.sympathy_id = 159;
        }
        if (Gvar.sympathy_with_disc_id == 394 && Gvar.sympathy_base_disc_id == 305) {
            Gvar.sympathy_id = 159;
        }
        if (Gvar.sympathy_base_disc_id == 111 && Gvar.sympathy_with_disc_id == 394) {
            Gvar.sympathy_id = 165;
        }
        if (Gvar.sympathy_with_disc_id == 111 && Gvar.sympathy_base_disc_id == 394) {
            Gvar.sympathy_id = 165;
        }
        Gvar.var_1173 = Gvar.sympathy_id;
        if (Gvar.var_1173 == 1 || Gvar.var_1173 == 102 || Gvar.var_1173 == 103 || Gvar.var_1173 == 107 || Gvar.var_1173 == 110 || Gvar.var_1173 == 111 || Gvar.var_1173 == 115 || Gvar.var_1173 == 117 || Gvar.var_1173 == 118 || Gvar.var_1173 == 122 || Gvar.var_1173 == 125 || Gvar.var_1173 == 126 || Gvar.var_1173 == 127 || Gvar.var_1173 == 129 || Gvar.var_1173 == 130 || Gvar.var_1173 == 131 || Gvar.var_1173 == 132 || Gvar.var_1173 == 133 || Gvar.var_1173 == 137 || Gvar.var_1173 == 149 || Gvar.var_1173 == 150 || Gvar.var_1173 == 151 || Gvar.var_1173 == 152 || Gvar.var_1173 == 153 || Gvar.var_1173 == 158 || Gvar.var_1173 == 167 || Gvar.var_1173 == 168) {
            Gvar.var_566 = Gvar.var_566 + 1;
            Gvar.var_565 = Gvar.var_565 + 1;
            if (Gvar.var_565 >= Gvar.var_566) {
                Gvar.var_565 = Gvar.var_566;
            }
            if (Gvar.var_565 <= 0) {
                Gvar.var_565 = 0;
            }
        }
        if (Gvar.var_1173 == 128 || Gvar.var_1173 == 134 || Gvar.var_1173 == 138 || Gvar.var_1173 == 140 || Gvar.var_1173 == 142 || Gvar.var_1173 == 143 || Gvar.var_1173 == 147 || Gvar.var_1173 == 148 || Gvar.var_1173 == 157 || Gvar.var_1173 == 169) {
            Gvar.var_566 = Gvar.var_566 + 2;
            Gvar.var_565 = Gvar.var_565 + 2;
            if (Gvar.var_565 >= Gvar.var_566) {
                Gvar.var_565 = Gvar.var_566;
            }
            if (Gvar.var_565 <= 0) {
                Gvar.var_565 = 0;
            }
        }
        if (Gvar.var_1173 == 141) {
            Gvar.var_566 = Gvar.var_566 + 3;
            Gvar.var_565 = Gvar.var_565 + 3;
            if (Gvar.var_565 >= Gvar.var_566) {
                Gvar.var_565 = Gvar.var_566;
            }
            if (Gvar.var_565 <= 0) {
                Gvar.var_565 = 0;
            }
        }
        if (Gvar.var_1173 == 116 || Gvar.var_1173 == 154 || Gvar.var_1173 == 155 || Gvar.var_1173 == 156) {
            Gvar.var_580 = Gvar.var_580 + 1;
        }
        if (Gvar.var_1173 == 160 || Gvar.var_1173 == 163) {
            Gvar.var_580 = Gvar.var_580 + 2;
        }
        if (Gvar.var_1173 == 108 || Gvar.var_1173 == 112 || Gvar.var_1173 == 135 || Gvar.var_1173 == 164 || Gvar.var_1173 == 165) {
            Gvar.var_580 = Gvar.var_580 + 3;
        }
        if (Gvar.var_1173 == 105 || Gvar.var_1173 == 113) {
            Gvar.var_581 = Gvar.var_581 + 1;
        }
        if (Gvar.var_1173 == 144) {
            Gvar.var_581 = Gvar.var_581 + 2;
        }
        if (Gvar.var_1173 == 161 || Gvar.var_1173 == 162) {
            Gvar.var_1048 = 10;
            Gvar.var_2181 = Gvar.var_352 + Gvar.var_1048;
            if (Gvar.var_2181 > 999) {
                Gvar.var_1048 = 999 - Gvar.var_352;
                if (Gvar.var_1048 < 0) {
                    Gvar.var_1047 = 0;
                }
            }
            Gvar.var_352 = Gvar.var_352 + Gvar.var_1048;
        }
        if (Gvar.var_1173 == 159 || Gvar.var_1173 == 145 || Gvar.var_1173 == 146) {
            Gvar.var_1048 = 20;
            Gvar.var_2181 = Gvar.var_352 + Gvar.var_1048;
            if (Gvar.var_2181 > 999) {
                Gvar.var_1048 = 999 - Gvar.var_352;
                if (Gvar.var_1048 < 0) {
                    Gvar.var_1047 = 0;
                }
            }
            Gvar.var_352 = Gvar.var_352 + Gvar.var_1048;
        }
        if (Gvar.var_1173 == 104) {
            Gvar.var_1048 = 30;
            Gvar.var_2181 = Gvar.var_352 + Gvar.var_1048;
            if (Gvar.var_2181 > 999) {
                Gvar.var_1048 = 999 - Gvar.var_352;
                if (Gvar.var_1048 < 0) {
                    Gvar.var_1047 = 0;
                }
            }
            Gvar.var_352 = Gvar.var_352 + Gvar.var_1048;
        }
        if (Gvar.var_352 <= 1) {
            Gvar.var_352 = 1;
        }
        if (Gvar.var_211 >= Gvar.var_352) {
            Gvar.var_211 = Gvar.var_352;
        }
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 1;
        }
        return;
}

export {func496}
