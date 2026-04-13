import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func893
async function func0952(this: any) {
    Gvar.var_3812 = 0;
    Gvar.enemy_name = "";
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 0;
        Gvar.enemy_name = "------------------";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 79;
        Gvar.enemy_name = "ｴｺｰｽﾞの卵";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 1;
        Gvar.enemy_name = "ﾔｸ中のｺﾞﾛﾂｷ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 5;
        Gvar.enemy_name = "小汚い浮浪者";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 147;
        Gvar.enemy_name = "4部ｼﾞｮｾﾌ"; // α版より変更 ジョゼフ→4部ジョセフ
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 2;
        Gvar.enemy_name = "ヌケサク";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 93;
        Gvar.enemy_name = "ｴﾝﾎﾟﾘｵ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 3;
        Gvar.enemy_name = "ﾀﾜｰ･ｵﾌﾞ･ｸﾞﾚｰ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 94;
        Gvar.enemy_name = "ブルりん";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 77;
        Gvar.enemy_name = "ｴｺｰｽﾞACT1";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 51;
        Gvar.enemy_name = "ﾜﾝﾁｪﾝ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 7;
        Gvar.enemy_name = "運命の車輪";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 9;
        Gvar.enemy_name = "ﾗﾊﾞｰｿｳﾙ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 39;
        Gvar.enemy_name = "ﾊｲｳｪｲｽﾀｰ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 26;
        Gvar.enemy_name = "ﾊｰｳﾞｪｽﾄ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 76;
        Gvar.enemy_name = "ｴｺｰｽﾞACT2";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 6;
        Gvar.enemy_name = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙの人形";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 165;
        Gvar.enemy_name = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 52;
        Gvar.enemy_name = "ｼﾞｬｯｸ･ｻﾞ･ﾘﾊﾟｰ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 141;
        Gvar.enemy_name = "F・F";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 134;
        Gvar.enemy_name = "ｼﾞｮﾘｰﾝ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 4;
        Gvar.enemy_name = "ﾃﾞｽ･13";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 13;
        Gvar.enemy_name = "ﾗﾊﾞｰｽﾞ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 101;
        Gvar.enemy_name = "ﾍﾟｲｼﾞ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 102;
        Gvar.enemy_name = "ｼﾞｮｰﾝｽﾞ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 103;
        Gvar.enemy_name = "ﾌﾟﾗﾝﾄ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 104;
        Gvar.enemy_name = "ﾎﾞｰﾝﾅﾑ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 119;
        Gvar.enemy_name = "老ｼﾞｮｾﾌ"; // α版より変更 ジョセフ→老ジョセフ
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 99;
        Gvar.enemy_name = "ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 71;
        Gvar.enemy_name = "ﾄﾞｩｰﾋﾞｰ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 12;
        Gvar.enemy_name = "ｴｺｰｽﾞACT3";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 56;
        Gvar.enemy_name = "ｼｭﾄﾛﾊｲﾑ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 28;
        Gvar.enemy_name = "ｼﾞｬｯｼﾞﾒﾝﾄ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 22;
        Gvar.enemy_name = "ｱｳﾞﾄﾞｩﾙ人形";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 31;
        Gvar.enemy_name = "吉良の親父";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 148;
        Gvar.enemy_name = "ｴﾙﾒｪｽ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 131;
        Gvar.enemy_name = "ｼﾞｮﾙﾉ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 115;
        Gvar.enemy_name = "ｱｸｱ･ﾈｯｸﾚｽ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 11;
        Gvar.enemy_name = "ﾜｲｱｰﾄﾞのﾍﾞｯｸ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 45;
        Gvar.enemy_name = "由花子";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 29;
        Gvar.enemy_name = "ｸﾞﾘｰﾝ･ﾃﾞｨ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 47;
        Gvar.enemy_name = "億泰";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 27;
        Gvar.enemy_name = "ｹﾞﾌﾞ神";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 136;
        Gvar.enemy_name = "ｼｰｻﾞｰ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 38;
        Gvar.enemy_name = "ｱﾚｯｼｰ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 48;
        Gvar.enemy_name = "ｴｱﾛｽﾐｽ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 78;
        Gvar.enemy_name = "ｱｳﾞﾄﾞｩﾙさん";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 17;
        Gvar.enemy_name = "ｼｱｰﾊｰﾄｱﾀｯｸ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 46;
        Gvar.enemy_name = "ﾎﾙ･ﾎｰｽ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 125;
        Gvar.enemy_name = "ﾌｰｺﾞ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 14;
        Gvar.enemy_name = "床屋のｶｰﾝ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 69;
        Gvar.enemy_name = "ﾌﾞﾗﾌｫｰﾄﾞ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 59;
        Gvar.enemy_name = "ﾌﾟｯﾁ神父";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 145;
        Gvar.enemy_name = "康一";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 18;
        Gvar.enemy_name = "ﾌﾞﾗｯｸ･ｻﾊﾞｽ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 35;
        Gvar.enemy_name = "仗助";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 135;
        Gvar.enemy_name = "若ｼﾞｮｾﾌ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 10;
        Gvar.enemy_name = "ﾉﾄｰﾘｱｽBIG";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 95;
        Gvar.enemy_name = "ｽﾄﾚｲﾂｫ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 63;
        Gvar.enemy_name = "ﾌﾟﾛｼｭｰﾄ兄貴";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 84;
        Gvar.enemy_name = "ﾁｮｺﾗｰﾀ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 117;
        Gvar.enemy_name = "ﾁｮｺﾗｰﾀの上半身";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 43;
        Gvar.enemy_name = "ｾｯｺ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 85;
        Gvar.enemy_name = "ﾘｿﾞｯﾄ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 32;
        Gvar.enemy_name = "吉良吉影";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 44;
        Gvar.enemy_name = "ﾚｯﾄﾞﾎｯﾄﾁﾘﾍﾟｯﾊﾟｰ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 72;
        Gvar.enemy_name = "ｹﾝｿﾞｰ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 66;
        Gvar.enemy_name = "ﾀﾙｶｽ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 113;
        Gvar.enemy_name = "DIO";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 15;
        Gvar.enemy_name = "ﾍﾟｯﾄｼｮｯﾌﾟ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 123;
        Gvar.enemy_name = "ﾌﾞﾁｬﾗﾃｨ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 80;
        Gvar.enemy_name = "ﾗﾝｸﾞ･ﾗﾝｸﾞﾗｰ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 65;
        Gvar.enemy_name = "虹村形兆";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 40;
        Gvar.enemy_name = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 41;
        Gvar.enemy_name = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰ戦車";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 42;
        Gvar.enemy_name = "ｱﾊﾟｯﾁ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 54;
        Gvar.enemy_name = "ｸﾞﾘｰﾝﾍﾞﾚｰ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 61;
        Gvar.enemy_name = "ﾖｰﾖｰﾏｯ";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 21;
        Gvar.enemy_name = "ｽﾄﾚｲ･ｷｬｯﾄ";
    }
    if (Gvar.var_3788 == 2) {
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 88;
            Gvar.enemy_name = "ﾄﾞﾉｳﾞｧﾝ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 138;
            Gvar.enemy_name = "ﾃﾞｨｵ･ﾌﾞﾗﾝﾄﾞｰ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 140;
            Gvar.enemy_name = "ｼﾞｮﾅｻﾝ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 73;
            Gvar.enemy_name = "ﾀﾞｲｱｰさん";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 30;
            Gvar.enemy_name = "禁煙中ﾎﾙ･ﾎｰｽ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 122;
            Gvar.enemy_name = "ﾎﾟﾙﾅﾚﾌ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 121;
            Gvar.enemy_name = "花京院";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 152;
            Gvar.enemy_name = "ﾄﾘｯｼｭ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 160;
            Gvar.enemy_name = "ｳｴｽﾄｳｯﾄﾞ看守";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 86;
            Gvar.enemy_name = "ｻﾝﾀﾅ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 155;
            Gvar.enemy_name = "ﾏﾗｲｱ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 156;
            Gvar.enemy_name = "ｳｪｻﾞｰ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 157;
            Gvar.enemy_name = "ｱﾅｽｲ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 144;
            Gvar.enemy_name = "川尻浩作";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 128;
            Gvar.enemy_name = "承太郎さん"; // α版より変更 4部承太郎→承太郎さん
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 158;
            Gvar.enemy_name = "ﾌﾟｯﾂﾝ由花子";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 150;
            Gvar.enemy_name = "康一act2!!";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 68;
            Gvar.enemy_name = "ﾌﾞﾁ切れた仗助";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 67;
            Gvar.enemy_name = "ﾌﾞﾁ切れた億泰";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 172;
            Gvar.enemy_name = "虫喰いでない";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 151;
            Gvar.enemy_name = "虫喰い";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 87;
            Gvar.enemy_name = "ｴｼﾃﾞｨｼ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 164;
            Gvar.enemy_name = "ｴｼﾃﾞｨｼの脳";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 109;
            Gvar.enemy_name = "ワムウ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 110;
            Gvar.enemy_name = "カーズ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 139;
            Gvar.enemy_name = "ﾘｻﾘｻ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 124;
            Gvar.enemy_name = "ﾐｽﾀ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 127;
            Gvar.enemy_name = "C-MOON";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 126;
            Gvar.enemy_name = "退院した花京院";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 129;
            Gvar.enemy_name = "ｱﾇﾋﾞｽﾎﾟﾙﾅﾚﾌ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 133;
            Gvar.enemy_name = "ｳﾞｧﾆﾗｱｲｽ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 64;
            Gvar.enemy_name = "ｷﾞｱｯﾁｮ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 137;
            Gvar.enemy_name = "成長した吉良";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 153;
            Gvar.enemy_name = "ﾏｯｸｲｨｰﾝ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 118;
            Gvar.enemy_name = "ｸﾘｰﾑ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 114;
            Gvar.enemy_name = "最高にﾊｲなDIO";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 111;
            Gvar.enemy_name = "究極カーズ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 120;
            Gvar.enemy_name = "承太郎";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 60;
            Gvar.enemy_name = "ｻﾞ･ﾆｭｰ神父";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 98;
            Gvar.enemy_name = "ｴﾝﾎﾟﾘｵ(ｳｪｻﾞｰ)";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 19;
            Gvar.enemy_name = "ｱﾗﾋﾞｱﾌｧｯﾂ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) {
            Gvar.enemy_list = 90;
            Gvar.enemy_name = "岩";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) { // α版より移植
            Gvar.enemy_list = 159;
            Gvar.enemy_name = "記憶ｳｪｻﾞｰ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) { // α版より移植
            Gvar.enemy_list = 168;
            Gvar.enemy_name = "西戸";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) { // α版より移植
            Gvar.enemy_list = 132;
            Gvar.enemy_name = "ﾚｸｲｴﾑｼﾞｮﾙﾉ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) { // α版より移植
            Gvar.enemy_list = 143;
            Gvar.enemy_name = "ｳﾝｶﾞﾛ";
        }
        Gvar.var_3812++;
        if (Gvar.var_883 == Gvar.var_3812) { // α版より移植
            Gvar.enemy_list = 20;
            Gvar.enemy_name = "ｴﾝﾔ";
        }

    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) {
        Gvar.enemy_list = 37;
        Gvar.enemy_name = "猫";
    }
    Gvar.var_3812++;
    if (Gvar.var_883 == Gvar.var_3812) { // α版より移植
        Gvar.enemy_list = 200;
        Gvar.enemy_name = "ｼﾞｮﾆｨ";
    }
    return;

    // α版で大幅変更あり 後で移植
}

export {func0952}
