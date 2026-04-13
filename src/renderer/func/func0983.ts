import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func924
async function func0983(this: any) {
    Gvar.var_3862 = "";
    if (Gvar.var_3861 == 100) {
        Gvar.var_3862 = "ｽﾀｰ･ﾌﾟﾗﾁﾅのDISC";
    }
    if (Gvar.var_3861 == 101) {
        Gvar.var_3862 = "ｼﾙﾊﾞｰﾁｬﾘｵｯﾂのDISC";
    }
    if (Gvar.var_3861 == 102) {
        Gvar.var_3862 = "ｷﾝｸﾞ･ｸﾘﾑｿﾞﾝのDISC";
    }
    if (Gvar.var_3861 == 103) {
        Gvar.var_3862 = "ｴｺｰｽﾞACT3のDISC";
    }
    if (Gvar.var_3861 == 104) {
        Gvar.var_3862 = "ｻﾞ･ﾊﾝﾄﾞのDISC";
    }
    if (Gvar.var_3861 == 105) {
        Gvar.var_3862 = "ﾁﾘﾍﾟｯﾊﾟｰのDISC";
    }
    if (Gvar.var_3861 == 106) {
        Gvar.var_3862 = "ｸﾚｲｼﾞｰ･DのDISC";
    }
    if (Gvar.var_3861 == 107) {
        Gvar.var_3862 = "ﾃﾞｽ･13のDISC";
    }
    if (Gvar.var_3861 == 108) {
        Gvar.var_3862 = "ｽﾃｨｯｷｰﾌｨﾝｶﾞｰｽﾞのDISC";
    }
    if (Gvar.var_3861 == 109) {
        Gvar.var_3862 = "ﾏｼﾞｼｬﾝｽﾞﾚｯﾄﾞのDISC";
    }
    if (Gvar.var_3861 == 110) {
        Gvar.var_3862 = "ｽﾃｨｯｷｰﾌｨﾝｶﾞｰｽﾞのDISC";
    }
    if (Gvar.var_3861 == 111) {
        Gvar.var_3862 = "ｻﾞ･ﾜｰﾙﾄﾞのDISC";
    }
    if (Gvar.var_3861 == 112) {
        Gvar.var_3862 = "ｷﾗｰ･ｸｨｰﾝのDISC";
    }
    if (Gvar.var_3861 == 113) {
        Gvar.var_3862 = "ｸﾗｯｼｭのDISC";
    }
    if (Gvar.var_3861 == 114) {
        Gvar.var_3862 = "ﾎﾜｲﾄｽﾈｲｸのDISC";
    }
    if (Gvar.var_3861 == 115) {
        Gvar.var_3862 = "G･ｴｸｽﾍﾟﾘｴﾝｽのDISC";
    }
    if (Gvar.var_3861 == 116) {
        Gvar.var_3862 = "ﾊｰﾐｯﾄﾊﾟｰﾌﾟﾙのDISC";
    }
    if (Gvar.var_3861 == 117) {
        Gvar.var_3862 = "ﾀﾞｰｸﾌﾞﾙｰﾑｰﾝのDISC";
    }
    if (Gvar.var_3861 == 118) {
        Gvar.var_3862 = "ﾀﾞｲﾊﾞｰﾀﾞｳﾝのDISC";
    }
    if (Gvar.var_3861 == 119) {
        Gvar.var_3862 = "ｽﾊﾟｲｽ･ｶﾞｰﾙのDISC";
    }
    if (Gvar.var_3861 == 120) {
        Gvar.var_3862 = "ｽﾄｰﾝ･ﾌﾘｰのDISC";
    }
    if (Gvar.var_3861 == 121) {
        Gvar.var_3862 = "ﾊﾟｰﾌﾟﾙ･ﾍｲｽﾞのDISC";
    }
    if (Gvar.var_3861 == 122) {
        Gvar.var_3862 = "ｱﾇﾋﾞｽ神のDISC";
    }
    if (Gvar.var_3861 == 123) {
        Gvar.var_3862 = "ｸﾘｰﾑのDISC";
    }
    if (Gvar.var_3861 == 124) {
        Gvar.var_3862 = "ﾑｰﾃﾞｨｰﾌﾞﾙｰｽのDISC";
    }
    if (Gvar.var_3861 == 125) { // α版より移植
        Gvar.var_3862 = "ﾘﾄﾙ･ﾌｨｰﾄのDISC";
    }
    if (Gvar.var_3861 == 126) { // α版より移植
        Gvar.var_3862 = "C-MOONのDISC";
    }

    if (Gvar.var_3861 == 200) {
        Gvar.var_3862 = "ｽｰﾊﾟｰﾌﾗｲのDISC";
    }
    if (Gvar.var_3861 == 201) {
        Gvar.var_3862 = "ｲｴﾛｰﾃﾝﾊﾟﾗﾝｽのDISC";
    }
    if (Gvar.var_3861 == 202) {
        Gvar.var_3862 = "ﾎﾜｲﾄｱﾙﾊﾞﾑのDISC";
    }
    if (Gvar.var_3861 == 203) {
        Gvar.var_3862 = "ｻﾞ･ﾌｰﾙのDISC";
    }
    if (Gvar.var_3861 == 204) {
        Gvar.var_3862 = "ｼｱｰﾊｰﾄｱﾀｯｸのDISC";
    }
    if (Gvar.var_3861 == 205) {
        Gvar.var_3862 = "ｸﾗﾌﾄﾜｰｸのDISC";
    }
    if (Gvar.var_3861 == 206) {
        Gvar.var_3862 = "ｵｱｼｽのDISC";
    }
    if (Gvar.var_3861 == 207) {
        Gvar.var_3862 = "ｸﾞﾚｲﾄﾌﾙ･ﾃﾞｯﾄﾞのDISC";
    }

    if (Gvar.var_3861 == 210) { // α版より移植
        Gvar.var_3862 = "ﾊｲﾌﾟﾘｴｽﾃｽのDISC";
    }
    if (Gvar.var_3861 == 211) { // α版より移植
        Gvar.var_3862 = "ﾄﾞｷﾞｰ･ｽﾀｲﾙのDISC";
    }
    if (Gvar.var_3861 == 212) { // α版より移植
        Gvar.var_3862 = "ﾄﾞｩｰﾋﾞｰ･ﾜｩ!のDISC";
    }
    if (Gvar.var_3861 == 213) { // α版より移植
        Gvar.var_3862 = "ﾋﾞﾀﾐﾝCのDISC";
    }
    if (Gvar.var_3861 == 214) { // α版より移植
        Gvar.var_3862 = "ﾏﾘﾘﾝ･ﾏﾝｿﾝのDISC";
    }
    if (Gvar.var_3861 == 215) { // α版より移植
        Gvar.var_3862 = "ﾎﾜｲﾄｽﾈｲｸのDISC";
    }
    if (Gvar.var_3861 == 216) { // α版より移植
        Gvar.var_3862 = "ｽﾑｰｽ･ｵﾍﾟﾚｲﾀｰｽﾞのDISC";
    }
    if (Gvar.var_3861 == 217) { // α版より移植
        Gvar.var_3862 = "ｵｼﾘｽ神のDISC";
    }
    if (Gvar.var_3861 == 218) { // α版より移植
        Gvar.var_3862 = "のDISC";
    }

    if (Gvar.var_3861 == 222) { // α版より移植
        Gvar.var_3862 = "ﾁｹｯﾄ･ｩ･ﾗｲﾄﾞのDISC";
    }
    if (Gvar.var_3861 == 223) { // α版より移植
        Gvar.var_3862 = "D4CのDISC";
    }
    if (Gvar.var_3861 == 224) { // α版より移植
        Gvar.var_3862 = "S･C･ﾚｸｲｴﾑのDISC";
    }

    if (Gvar.var_3861 == 300) {
        Gvar.var_3862 = "ﾊﾟｰﾙ･ｼﾞｬﾑのDISC";
    }
    if (Gvar.var_3861 == 301) {
        Gvar.var_3862 = "ﾊｰｳﾞｪｽﾄのDISC";
    }
    if (Gvar.var_3861 == 302) {
        Gvar.var_3862 = "ﾊｲｳｪｲ･ﾄｩ･ﾍﾙのDISC";
    }
    if (Gvar.var_3861 == 303) {
        Gvar.var_3862 = "ﾄﾞﾗｺﾞﾝｽﾞﾄﾞﾘｰﾑのDISC";
    }
    if (Gvar.var_3861 == 304) {
        Gvar.var_3862 = "ｳｪｻﾞｰﾘﾎﾟｰﾄのDISC";
    }
    if (Gvar.var_3861 == 305) {
        Gvar.var_3862 = "ｼﾝﾃﾞﾚﾗのDISC";
    }
    if (Gvar.var_3861 == 306) {
        Gvar.var_3862 = "ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰのDISC";
    }
    if (Gvar.var_3861 == 308) {
        Gvar.var_3862 = "ｴﾎﾞﾆｰ･ﾃﾞﾋﾞﾙのDISC";
    }
    if (Gvar.var_3861 == 309) {
        Gvar.var_3862 = "ｿﾌﾄ･ﾏｼｰﾝのDISC";
    }
    if (Gvar.var_3861 == 310) {
        Gvar.var_3862 = "ｴﾝﾌﾟﾚｽのDISC";
    }
    if (Gvar.var_3861 == 311) {
        Gvar.var_3862 = "ﾁｰﾌﾟ･ﾄﾘｯｸのDISC";
    }
    if (Gvar.var_3861 == 312) {
        Gvar.var_3862 = "ｴｱﾛｽﾐｽのDISC";
    }
    if (Gvar.var_3861 == 313) {
        Gvar.var_3862 = "ﾊｲｳｪｲ･ｽﾀｰのDISC";
    }
    if (Gvar.var_3861 == 314) {
        Gvar.var_3862 = "ｽﾄﾚｲ･ｷｬｯﾄのDISC";
    }
    if (Gvar.var_3861 == 315) {
        Gvar.var_3862 = "ｴﾋﾟﾀﾌのDISC";
    }
    if (Gvar.var_3861 == 316) {
        Gvar.var_3862 = "ｻﾊﾞｲﾊﾞｰのDISC";
    }
    if (Gvar.var_3861 == 317) {
        Gvar.var_3862 = "ｷｯｽのDISC";
    }
    if (Gvar.var_3861 == 318) {
        Gvar.var_3862 = "ｼﾞｬﾝﾋﾟﾝJﾌﾗｯｼｭのDISC";
    }
    if (Gvar.var_3861 == 319) {
        Gvar.var_3862 = "ﾎﾞｰｲIIﾏﾝのDISC";
    }
    if (Gvar.var_3861 == 320) {
        Gvar.var_3862 = "ﾒﾀﾘｶのDISC";
    }
    if (Gvar.var_3861 == 321) { // α版より移植
        Gvar.var_3862 = "B･D･ｻﾞ･ﾊｳｽのDISC";
    }


    if (Gvar.var_3861 == 393) {
        Gvar.var_3862 = "ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨのDISC";
    }
    if (Gvar.var_3861 == 394) {
        Gvar.var_3862 = "ｷﾗｰﾀｲｶﾞｰｸｲｰﾝのDISC";
    }
    if (Gvar.var_3861 == 395) {
        Gvar.var_3862 = "ﾊﾞｲﾂｧ･ﾀﾞｽﾄのDISC";
    }
    if (Gvar.var_3861 == 396) {
        Gvar.var_3862 = "ﾒｲﾄﾞ･ｲﾝ･ﾍﾌﾞﾝのDISC";
    }
    if (Gvar.var_3861 == 397) {
        Gvar.var_3862 = "ﾍﾋﾞｰ･ｳｪｻﾞｰのDISC";
    }
    if (Gvar.var_3861 == 398) {
        Gvar.var_3862 = "ｽﾀﾌﾟﾗｻﾞﾜｰﾙﾄﾞのDISC";
    }
    if (Gvar.var_3861 == 399) {
        Gvar.var_3862 = "G･E･ﾚｸｲｴﾑのDISC";
    }
    if (Gvar.var_3861 == 400) {
        Gvar.var_3862 = "ﾊｲｴﾛﾌｧﾝﾄｸﾞﾘｰﾝのDISC";
    }
    if (Gvar.var_3861 == 401) {
        Gvar.var_3862 = "ﾌｰ･ﾌｧｲﾀｰｽﾞのDISC";
    }
    if (Gvar.var_3861 == 402) {
        Gvar.var_3862 = "ｴﾝﾍﾟﾗｰのDISC";
    }
    if (Gvar.var_3861 == 403) {
        Gvar.var_3862 = "ｾｯｸｽﾋﾟｽﾄﾙｽﾞのDISC";
    }
    if (Gvar.var_3861 == 404) {
        Gvar.var_3862 = "ﾎﾙｽ神のDISC";
    }
    if (Gvar.var_3861 == 405) {
        Gvar.var_3862 = "ｴｺｰｽﾞACT2のDISC";
    }
    if (Gvar.var_3861 == 406) {
        Gvar.var_3862 = "ｴｺｰｽﾞACT1のDISC";
    }
    if (Gvar.var_3861 == 407) {
        Gvar.var_3862 = "ﾊｲｴﾛﾌｧﾝﾄｴﾒﾗﾙﾄﾞのDISC";
    }
    if (Gvar.var_3861 == 408) {
        Gvar.var_3862 = "ﾏﾝ･ｲﾝ･ｻﾞ･ﾐﾗｰのDISC";
    }
    if (Gvar.var_3861 == 409) {
        Gvar.var_3862 = "ﾗﾊﾞｰｽﾞのDISC";
    }
    if (Gvar.var_3861 == 411) {
        Gvar.var_3862 = "ﾀﾜｰ･ｵﾌﾞ･ｸﾞﾚｰのDISC";
    }
    if (Gvar.var_3861 == 412) {
        Gvar.var_3862 = "ﾍﾌﾞﾝｽﾞﾄﾞｱｰのDISC";
    }
    if (Gvar.var_3861 == 414) {
        Gvar.var_3862 = "ﾀｽｸact2のDISC"; // Ver0.1401にて修正。ﾀｽｸのDISC → ﾀｽｸact2のDISC
    }
    if (Gvar.var_3861 == 415) { // Ver0.1401にて追加。
        Gvar.var_3862 = "ﾀｽｸact1のDISC";
    }
    if (Gvar.var_3861 == 416) { // Ver0.1401にて追加。
        Gvar.var_3862 = "ﾀｽｸact3のDISC";
    }
    if (Gvar.var_3861 == 425) { // α版より移植
        Gvar.var_3862 = "ﾉｰﾍﾞﾝﾊﾞｰ･ﾚｲﾝのDISC";
    }
    
    return;
}

export {func0983}
