import { Gvar } from '../variable'
import * as Adap from '../adapter/index'


// スタンドを装備した状態での攻撃時の効果音設定
async function func089(this: any) {
        Adap.dbgprt(89);
        Gvar.se_file_name = 102;
        if (Gvar.kougeki_disc_id  == 0) {
            Gvar.se_file_name = 102;
        }
        if (Gvar.kougeki_disc_id  == 101) {
            Gvar.se_file_name = 112; // 112.wav 刀を振るう金属音
        }
        if (Gvar.kougeki_disc_id  == 122) {
            Gvar.se_file_name = 112; // 112.wav 刀を振るう金属音
        }
        if (Gvar.kougeki_disc_id  == 113) {
            Gvar.se_file_name = 113; // 113.wav 爪で切り裂く音
        }
        if (Gvar.kougeki_disc_id  == 117) {
            Gvar.se_file_name = 113; // 113.wav 爪で切り裂く音
        }
        if (Gvar.kougeki_disc_id  == 107) {
            Gvar.se_file_name = 113; // 113.wav 爪で切り裂く音
        }
        if (Gvar.kougeki_disc_id  == 105) {
            Gvar.se_file_name = 120; // 120.wav 電撃音
        }
        if (Gvar.kougeki_disc_id  == 201) {
            Gvar.se_file_name = 123;
        }
        if (Gvar.kougeki_disc_id  == 116) {
            Gvar.se_file_name = 127;
        }
        if (Gvar.kougeki_disc_id  == 109) {
            Gvar.se_file_name = 128;
        }
        if (Gvar.kougeki_disc_id  == 394) {
            Gvar.se_file_name = 113; // 113.wav 爪で切り裂く音
        }
        if (Gvar.kougeki_disc_id  == 100 || Gvar.kougeki_disc_id  == 102 || Gvar.kougeki_disc_id  == 104 || Gvar.kougeki_disc_id  == 106 || Gvar.kougeki_disc_id  == 108 || Gvar.kougeki_disc_id  == 111 || Gvar.kougeki_disc_id  == 112 || Gvar.kougeki_disc_id  == 114) {
            Gvar.se_file_name = 121; // 121.wav 大きいパンチ音
        }
        if (Gvar.kougeki_disc_id  == 115 || Gvar.kougeki_disc_id  == 118 || Gvar.kougeki_disc_id  == 119 || Gvar.kougeki_disc_id  == 120 || Gvar.kougeki_disc_id  == 121 || Gvar.kougeki_disc_id  == 203 || Gvar.kougeki_disc_id  == 304 || Gvar.kougeki_disc_id  == 123) {
            Gvar.se_file_name = 121; // 121.wav 大きいパンチ音
        }
        if (Gvar.kougeki_disc_id  == 394 || Gvar.kougeki_disc_id  == 395 || Gvar.kougeki_disc_id  == 397 || Gvar.kougeki_disc_id  == 398 || Gvar.kougeki_disc_id  == 399) {
            Gvar.se_file_name = 121; // 121.wav 大きいパンチ音
        }
        if (Gvar.kougeki_disc_id  == 103 || Gvar.kougeki_disc_id  == 124 || Gvar.kougeki_disc_id  == 205 || Gvar.kougeki_disc_id  == 207 || Gvar.kougeki_disc_id  == 301 || Gvar.kougeki_disc_id  == 309) {
            Gvar.se_file_name = 122; // 122.wav 小さいパンチ音
        }
        Adap.DSPLAY(Gvar.se_file_name);
        return;
}

export {func089}
