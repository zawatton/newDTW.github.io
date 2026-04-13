import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

//アイテムの購入金額の値
// 旧 func889
async function func0948(this: any) {
    Gvar.item_name = "";
    Gvar.buying_price = 0;
    Gvar.var_3812 = 0;
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 0;
        Gvar.buying_price = 1;
        Gvar.item_name = "------------------";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 122;
        Gvar.buying_price = 1000;
        Gvar.item_name = "ｱﾇﾋﾞｽ神のDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 201;
        Gvar.buying_price = 900;
        Gvar.item_name = "ｲｴﾛｰﾃﾝﾊﾟﾗﾝｽのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 304;
        Gvar.buying_price = 3900; // α版より変更 1900→3900
        Gvar.item_name = "ｳｪｻﾞｰﾘﾎﾟｰﾄのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 312;
        Gvar.buying_price = 8200;
        Gvar.item_name = "ｴｱﾛｽﾐｽのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 103;
        Gvar.buying_price = 650;
        Gvar.item_name = "ｴｺｰｽﾞACT3のDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 315;
        Gvar.buying_price = 2500;
        Gvar.item_name = "ｴﾋﾟﾀﾌのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 308;
        Gvar.buying_price = 2200;
        Gvar.item_name = "ｴﾎﾞﾆｰ･ﾃﾞﾋﾞﾙのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 310;
        Gvar.buying_price = 1000;
        Gvar.item_name = "ｴﾝﾌﾟﾚｽのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 206;
        Gvar.buying_price = 2200;
        Gvar.item_name = "ｵｱｼｽのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 317;
        Gvar.buying_price = 2300;
        Gvar.item_name = "ｷｯｽのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 112;
        Gvar.buying_price = 11700;
        Gvar.item_name = "ｷﾗｰ･ｸｨｰﾝのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 102;
        Gvar.buying_price = 19000;
        Gvar.item_name = "ｷﾝｸﾞ･ｸﾘﾑｿﾞﾝのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 113;
        Gvar.buying_price = 2100;
        Gvar.item_name = "ｸﾗｯｼｭのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 205;
        Gvar.buying_price = 2500;
        Gvar.item_name = "ｸﾗﾌﾄﾜｰｸのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 123;
        Gvar.buying_price = 11000;
        Gvar.item_name = "ｸﾘｰﾑのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 207;
        Gvar.buying_price = 850;
        Gvar.item_name = "ｸﾞﾚｲﾄﾌﾙ･ﾃﾞｯﾄﾞのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 106;
        Gvar.buying_price = 7000; // α版より変更 4600→7000
        Gvar.item_name = "ｸﾚｲｼﾞｰ･DのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 115;
        Gvar.buying_price = 5200;
        Gvar.item_name = "G･ｴｸｽﾍﾟﾘｴﾝｽのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 104;
        Gvar.buying_price = 1250; // α版より変更 650→1250
        Gvar.item_name = "ｻﾞ･ﾊﾝﾄﾞのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 203;
        Gvar.buying_price = 1400;
        Gvar.item_name = "ｻﾞ･ﾌｰﾙのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 111;
        Gvar.buying_price = 15600;
        Gvar.item_name = "ｻﾞ･ﾜｰﾙﾄﾞのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 316;
        Gvar.buying_price = 1000;
        Gvar.item_name = "ｻﾊﾞｲﾊﾞｰのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 204;
        Gvar.buying_price = 5300;
        Gvar.item_name = "ｼｱｰﾊｰﾄｱﾀｯｸのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 318;
        Gvar.buying_price = 1000;
        Gvar.item_name = "ｼﾞｬﾝﾋﾟﾝJﾌﾗｯｼｭのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 101;
        Gvar.buying_price = 14000;
        Gvar.item_name = "ｼﾙﾊﾞｰﾁｬﾘｵｯﾂのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 200;
        Gvar.buying_price = 1800;
        Gvar.item_name = "ｽｰﾊﾟｰﾌﾗｲのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 100;
        Gvar.buying_price = 17000;
        Gvar.item_name = "ｽﾀｰ･ﾌﾟﾗﾁﾅのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 108;
        Gvar.buying_price = 16000;
        Gvar.item_name = "ｽﾃｨｯｷｰﾌｨﾝｶﾞｰｽﾞのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 120;
        Gvar.buying_price = 1700;
        Gvar.item_name = "ｽﾄｰﾝ･ﾌﾘｰのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 314;
        Gvar.buying_price = 1200;
        Gvar.item_name = "ｽﾄﾚｲ･ｷｬｯﾄのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 119;
        Gvar.buying_price = 1350;
        Gvar.item_name = "ｽﾊﾟｲｽ･ｶﾞｰﾙのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 117;
        Gvar.buying_price = 1800;
        Gvar.item_name = "ﾀﾞｰｸﾌﾞﾙｰﾑｰﾝのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 118;
        Gvar.buying_price = 1300;
        Gvar.item_name = "ﾀﾞｲﾊﾞｰﾀﾞｳﾝのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 311;
        Gvar.buying_price = 1000;
        Gvar.item_name = "ﾁｰﾌﾟ･ﾄﾘｯｸのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 105;
        Gvar.buying_price = 950;
        Gvar.item_name = "ﾁﾘﾍﾟｯﾊﾟｰのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 107;
        Gvar.buying_price = 750;
        Gvar.item_name = "ﾃﾞｽ･13のDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 303;
        Gvar.buying_price = 7400;
        Gvar.item_name = "ﾄﾞﾗｺﾞﾝｽﾞﾄﾞﾘｰﾑのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 116;
        Gvar.buying_price = 700;
        Gvar.item_name = "ﾊｰﾐｯﾄﾊﾟｰﾌﾟﾙのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 301;
        Gvar.buying_price = 8800;
        Gvar.item_name = "ﾊｰｳﾞｪｽﾄのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 121;
        Gvar.buying_price = 1000;
        Gvar.item_name = "ﾊﾟｰﾌﾟﾙ･ﾍｲｽﾞのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 300;
        Gvar.buying_price = 1300;
        Gvar.item_name = "ﾊﾟｰﾙ･ｼﾞｬﾑのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 313;
        Gvar.buying_price = 5200;
        Gvar.item_name = "ﾊｲｳｪｲ･ｽﾀｰのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 302;
        Gvar.buying_price = 1000; // α版より変更 800→1000
        Gvar.item_name = "ﾊｲｳｪｲ･ﾄｩ･ﾍﾙのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 395;
        Gvar.buying_price = 4700;
        Gvar.item_name = "ﾊﾞｲﾂｧ･ﾀﾞｽﾄのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 319;
        Gvar.buying_price = 3400;
        Gvar.item_name = "ﾎﾞｰｲIIﾏﾝのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 202;
        Gvar.buying_price = 3900;
        Gvar.item_name = "ﾎﾜｲﾄｱﾙﾊﾞﾑのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 109;
        Gvar.buying_price = 13200;
        Gvar.item_name = "ﾏｼﾞｼｬﾝｽﾞﾚｯﾄﾞのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 306;
        Gvar.buying_price = 4400;
        Gvar.item_name = "ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 320;
        Gvar.buying_price = 2000;
        Gvar.item_name = "ﾒﾀﾘｶのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) { // α版より移植
        Gvar.belongings_item_list = 397;
        Gvar.buying_price = 10000;
        Gvar.item_name = "ﾍﾋﾞ-ｳｪｻﾞｰのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 0;
        Gvar.buying_price = 1;
        Gvar.item_name = "------------------";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 406;
        Gvar.buying_price = 550;
        Gvar.item_name = "ｴｺｰｽﾞACT1のDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 405;
        Gvar.buying_price = 450;
        Gvar.item_name = "ｴｺｰｽﾞACT2のDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 402;
        Gvar.buying_price = 800;
        Gvar.item_name = "ｴﾝﾍﾟﾗｰのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 403;
        Gvar.buying_price = 700;
        Gvar.item_name = "ｾｯｸｽﾋﾟｽﾄﾙｽﾞのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 411;
        Gvar.buying_price = 1300;
        Gvar.item_name = "ﾀﾜｰ･ｵﾌﾞ･ｸﾞﾚｰのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 400;
        Gvar.buying_price = 900;
        Gvar.item_name = "ﾊｲｴﾛﾌｧﾝﾄｸﾞﾘｰﾝのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 401;
        Gvar.buying_price = 500;
        Gvar.item_name = "ﾌｰ･ﾌｧｲﾀｰｽﾞのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 412;
        Gvar.buying_price = 1600;
        Gvar.item_name = "ﾍﾌﾞﾝｽﾞﾄﾞｱｰのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 404;
        Gvar.buying_price = 1100;
        Gvar.item_name = "ﾎﾙｽ神のDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 408;
        Gvar.buying_price = 750;
        Gvar.item_name = "ﾏﾝ･ｲﾝ･ｻﾞ･ﾐﾗｰのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 409;
        Gvar.buying_price = 550;
        Gvar.item_name = "ﾗﾊﾞｰｽﾞのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 0;
        Gvar.buying_price = 1;
        Gvar.item_name = "------------------";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 570;
        Gvar.buying_price = 500;
        Gvar.item_name = "ｼﾞｮﾅｻﾝのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 572;
        Gvar.buying_price = 500;
        Gvar.item_name = "承太郎のDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 569;
        Gvar.buying_price = 500;
        Gvar.item_name = "ﾎﾟﾙﾅﾚﾌのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 588;
        Gvar.buying_price = 400;
        Gvar.item_name = "J･ｶﾞｲﾙのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 575;
        Gvar.buying_price = 500;
        Gvar.item_name = "ﾏﾆｯｼｭﾎﾞｰｲのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 563;
        Gvar.buying_price = 400;
        Gvar.item_name = "ﾝﾄﾞｩｰﾙのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 571;
        Gvar.buying_price = 500;
        Gvar.item_name = "ﾎﾞｲﾝｺﾞのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 579;
        Gvar.buying_price = 1500;
        Gvar.item_name = "ﾍﾟｯﾄｼｮｯﾌﾟのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 584;
        Gvar.buying_price = 500;
        Gvar.item_name = "ﾇｹｻｸのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 560;
        Gvar.buying_price = 400;
        Gvar.item_name = "仗助のDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 562;
        Gvar.buying_price = 1500;
        Gvar.item_name = "康一のDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 585;
        Gvar.buying_price = 500;
        Gvar.item_name = "億泰のDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 573;
        Gvar.buying_price = 400;
        Gvar.item_name = "重ちーのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 564;
        Gvar.buying_price = 500;
        Gvar.item_name = "噴上裕也のDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 577;
        Gvar.buying_price = 900;
        Gvar.item_name = "ﾐｷﾀｶのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 587;
        Gvar.buying_price = 500;
        Gvar.item_name = "吉良吉影のDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 589;
        Gvar.buying_price = 500;
        Gvar.item_name = "ﾌﾟﾛｼｭｰﾄ兄貴のDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 586;
        Gvar.buying_price = 900;
        Gvar.item_name = "ペッシのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 590;
        Gvar.buying_price = 400;
        Gvar.item_name = "ｷﾞｱｯﾁｮのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 580;
        Gvar.buying_price = 1500;
        Gvar.item_name = "ﾄﾞｯﾋﾟｵのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 565;
        Gvar.buying_price = 400;
        Gvar.item_name = "ﾌﾟｯﾁ神父のDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 574;
        Gvar.buying_price = 500;
        Gvar.item_name = "ｴﾝﾎﾟﾘｵのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 568;
        Gvar.buying_price = 500;
        Gvar.item_name = "ｼﾞｮﾝｶﾞﾘ･AのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 566;
        Gvar.buying_price = 500;
        Gvar.item_name = "ｹﾝｿﾞｰのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 576;
        Gvar.buying_price = 400;
        Gvar.item_name = "破裂するDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 582;
        Gvar.buying_price = 300;
        Gvar.item_name = "水が熱湯になるDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 578;
        Gvar.buying_price = 1500;
        Gvar.item_name = "ｻﾝﾄﾞﾏﾝのDISC";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 0;
        Gvar.buying_price = 1;
        Gvar.item_name = "------------------";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 600;
        Gvar.buying_price = 100;
        Gvar.item_name = "ﾋﾟｯﾂｧ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 602;
        Gvar.buying_price = 400;
        Gvar.item_name = "ﾈｱﾎﾟﾘｽのﾋﾟｯﾂｧ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 604;
        Gvar.buying_price = 800;
        Gvar.item_name = "ﾎﾟﾙﾎﾟのﾋﾟｯﾂｧ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 630;
        Gvar.buying_price = 600;
        Gvar.item_name = "娼婦風ｽﾊﾟｹﾞｯﾃｨ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 631;
        Gvar.buying_price = 600;
        Gvar.item_name = "ﾓｯﾂｧﾚﾗﾁｰｽﾞとﾄﾏﾄのｻﾗﾀﾞ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 632;
        Gvar.buying_price = 600;
        Gvar.item_name = "ｷﾘﾏﾝｼﾞｬﾛの雪解け水";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 633;
        Gvar.buying_price = 600;
        Gvar.item_name = "子羊背肉のﾘﾝｺﾞｿｰｽかけ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 634;
        Gvar.buying_price = 600;
        Gvar.item_name = "ﾌﾟﾘﾝ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 650;
        Gvar.buying_price = 200;
        Gvar.item_name = "ｶｴﾙ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 651;
        Gvar.buying_price = 500;
        Gvar.item_name = "大きいｶｴﾙ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 653;
        Gvar.buying_price = 1000;
        Gvar.item_name = "超巨大なｶｴﾙ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 654;
        Gvar.buying_price = 100;
        Gvar.item_name = "ﾔﾄﾞｸｶﾞｴﾙ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 655;
        Gvar.buying_price = 100;
        Gvar.item_name = "ｻﾞﾘｶﾞﾆ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 0;
        Gvar.buying_price = 1;
        Gvar.item_name = "------------------";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 800;
        Gvar.buying_price = 2400;
        Gvar.item_name = "ｴﾆｸﾞﾏの紙";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 806;
        Gvar.buying_price = 4600;
        Gvar.item_name = "ｶﾙﾈの死体";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 807;
        Gvar.buying_price = 4600;
        Gvar.item_name = "DIOの骨";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 817;
        Gvar.buying_price = 4600;
        Gvar.item_name = "乳母車";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 850;
        Gvar.buying_price = 2700;
        Gvar.item_name = "波紋のツボ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 851;
        Gvar.buying_price = 2500;
        Gvar.item_name = "ﾎﾙﾏｼﾞｵのﾋﾞﾝ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 852;
        Gvar.buying_price = 2600;
        Gvar.item_name = "ランドセル";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 853;
        Gvar.buying_price = 2800;
        Gvar.item_name = "ｻｰﾌｨｽ人形";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 854;
        Gvar.buying_price = 2900;
        Gvar.item_name = "聖人の脊椎";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 801;
        Gvar.buying_price = 400;
        Gvar.item_name = "形兆のDISCｹｰｽ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 802;
        Gvar.buying_price = 400;
        Gvar.item_name = "ﾄﾗｸﾀｰのﾀｲﾔ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 803;
        Gvar.buying_price = 400;
        Gvar.item_name = "ｻﾝｼﾞｪﾙﾏﾝの紙袋";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 804;
        Gvar.buying_price = 400;
        Gvar.item_name = "露伴のカバン";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 0;
        Gvar.buying_price = 1;
        Gvar.item_name = "------------------";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 724;
        Gvar.buying_price = 1500;
        Gvar.item_name = "石仮面";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 714;
        Gvar.buying_price = 2000;
        Gvar.item_name = "紫外線照射装置";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 723;
        Gvar.buying_price = 1500;
        Gvar.item_name = "魔法のランプ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 726;
        Gvar.buying_price = 1000;
        Gvar.item_name = "鉄球";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 727;
        Gvar.buying_price = 1000;
        Gvar.item_name = "ｿﾞﾝﾋﾞ馬";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) { // α版より移植
        Gvar.belongings_item_list = 713;
        Gvar.buying_price = 1000;
        Gvar.item_name = "ﾎﾟﾙﾎﾟのﾗｲﾀｰ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) { // α版より移植
        Gvar.belongings_item_list = 720;
        Gvar.buying_price = 1000;
        Gvar.item_name = "ときのぼうし";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 0;
        Gvar.buying_price = 1;
        Gvar.item_name = "------------------";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 901;
        Gvar.buying_price = 360;
        Gvar.item_name = "一部のコミックス";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 906;
        Gvar.buying_price = 360;
        Gvar.item_name = "二部のコミックス";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 913;
        Gvar.buying_price = 390;
        Gvar.item_name = "三部のコミックス";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 929;
        Gvar.buying_price = 390;
        Gvar.item_name = "四部のコミックス";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 948;
        Gvar.buying_price = 388;
        Gvar.item_name = "五部のコミックス";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 964;
        Gvar.buying_price = 390;
        Gvar.item_name = "ストーンオーシャン";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 981; // α版より変更 981→1000
        Gvar.buying_price = 390;
        Gvar.item_name = "STEEL BALL RUN";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) { // α版より移植
        Gvar.belongings_item_list = 1024;
        Gvar.buying_price = 390;
        Gvar.item_name = "ジョジョリオン";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 0;
        Gvar.buying_price = 1;
        Gvar.item_name = "------------------";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.belongings_item_list = 1;
        Gvar.buying_price = 1;
        Gvar.item_name = "お金";
    }
    Gvar.var_3813 = Gvar.var_3812;
    return;
}

export {func0948}
