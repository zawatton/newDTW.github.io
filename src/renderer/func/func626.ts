import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func626(this: any) {
        Adap.dbgprt(626);
        Gvar.enemy_name = "";
        Gvar.enemy_power = 0;
        Gvar.enemy_defence = 0;
        Gvar.enemy_exp_point = 0;
        Gvar.enemy_hp = 0;
        Gvar.var_1637 = 0;
        Gvar.var_1654 = 100;
        Gvar.var_972 = 0;
        Gvar.enemy_description = "";
        Gvar.var_1656 = "";
        Gvar.var_1657 = "";
        Gvar.var_1658 = "";
        Gvar.var_1619 = 0;
        if (Gvar.enemy_list == 1) {
            Gvar.enemy_name = "ﾔｸ中のｺﾞﾛﾂｷ";
            Gvar.enemy_power = 3;
            Gvar.enemy_defence = 1;
            Gvar.enemy_exp_point = 3;
            Gvar.enemy_hp = 4;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 528;
            Gvar.enemy_description = "・フラフラと歩くぞ。";
            Gvar.var_1656 = "・必ず「ｵﾚｯちのｺｰﾄ」を落とすぞ。";
            Gvar.var_1657 = "・ｺｰﾄを持っていると向かってくるぞ。";
            Gvar.var_1658 = "・ｺｰﾄが落ちているとそこへ向かうぞ。";
        }
        if (Gvar.enemy_list == 2) {
            Gvar.enemy_name = "ヌケサク";
            Gvar.enemy_power = 4;
            Gvar.enemy_defence = 3;
            Gvar.enemy_exp_point = 5;
            Gvar.enemy_hp = 7;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 363;
            Gvar.enemy_description = "・とくに何もないぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 3) {
            Gvar.enemy_name = "ﾀﾜｰ･ｵﾌﾞ･ｸﾞﾚｰ";
            Gvar.enemy_power = 6;
            Gvar.enemy_defence = 5;
            Gvar.enemy_exp_point = 8;
            Gvar.enemy_hp = 9;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 3; // スタンド
            Gvar.var_1619 = 311;
            Gvar.enemy_description = "・近い場所に瞬間移動することがあるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 4) {
            Gvar.enemy_name = "ﾃﾞｽ･13";
            Gvar.enemy_power = 11;
            Gvar.enemy_defence = 6;
            Gvar.enemy_exp_point = 95;
            Gvar.enemy_hp = 21;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 8;
            Gvar.var_972 = 3; // スタンド
            Gvar.var_1619 = 325;
            Gvar.enemy_description = "・時々眠らせてくるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 5) {
            Gvar.enemy_name = "小汚い浮浪者";
            Gvar.enemy_power = 2;
            Gvar.enemy_defence = 2;
            Gvar.enemy_exp_point = 3;
            Gvar.enemy_hp = 5;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 105;
            Gvar.enemy_description = "・とくに何もないぞ。";
            Gvar.var_1656 = "・衛生観念のない虫けら同然の浮浪者だ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 6) {
            Gvar.enemy_name = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙの人形";
            Gvar.enemy_power = 9;
            Gvar.enemy_defence = 7;
            Gvar.enemy_exp_point = 45;
            Gvar.enemy_hp = 20;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 312;
            Gvar.enemy_description = "・攻撃を受けると恨みで攻撃力が上がるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 7) {
            Gvar.enemy_name = "運命の車輪";
            Gvar.enemy_power = 8;
            Gvar.enemy_defence = 7;
            Gvar.enemy_exp_point = 36;
            Gvar.enemy_hp = 18;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 3; // スタンド
            Gvar.var_1619 = 316;
            Gvar.enemy_description = "・ガソリンの弾丸を撃ってくるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 8) {
            Gvar.enemy_name = "無愛想親父の死体";
            Gvar.enemy_power = 8;
            Gvar.enemy_defence = 4;
            Gvar.enemy_exp_point = 40;
            Gvar.enemy_hp = 13;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 318;
            Gvar.enemy_description = "・エンヤ婆に操られている死体だ。";
            Gvar.var_1656 = "・エンヤ婆がやられると、ただの死体に戻るぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }        
        if (Gvar.enemy_list == 9) {
            Gvar.enemy_name = "ﾗﾊﾞｰｿｳﾙ";
            Gvar.enemy_power = 8;
            Gvar.enemy_defence = 8;
            Gvar.enemy_exp_point = 40;
            Gvar.enemy_hp = 17;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 314;
            Gvar.enemy_description = "・殴ると肉片が貼り付いてしまうことがあるぞ。";
            Gvar.var_1656 = "・アイテムを投げると食べて攻撃力が上がるぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 10) {
            Gvar.enemy_name = "ﾉﾄｰﾘｱｽBIG";
            Gvar.enemy_power = 19;
            Gvar.enemy_defence = 1;
            Gvar.enemy_exp_point = 320;
            Gvar.enemy_hp = 140;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 3; // スタンド
            Gvar.var_1619 = 521;
            Gvar.enemy_description = "・攻撃すると肉片を貼り付けることがあるぞ。";
            Gvar.var_1656 = "・速く動いても同じ速度で追ってくるぞ。";
            Gvar.var_1657 = "・ゆっくり動くと追いかけてこないぞ。";
            Gvar.var_1658 = "・アイテムを投げると食べて攻撃力が上がるぞ。";
        }
        if (Gvar.enemy_list == 11) {
            Gvar.enemy_name = "ﾜｲｱｰﾄﾞのﾍﾞｯｸ";
            Gvar.enemy_power = 16;
            Gvar.enemy_defence = 15;
            Gvar.enemy_exp_point = 150;
            Gvar.enemy_hp = 38;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 212;
            Gvar.enemy_description = "・とくに何もないぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 12) {
            Gvar.enemy_name = "ｴｺｰｽﾞACT3";
            Gvar.enemy_power = 11;
            Gvar.enemy_defence = 7;
            Gvar.enemy_exp_point = 100;
            Gvar.enemy_hp = 25;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 8; // スタンド・杜王町住人
            Gvar.var_1619 = 419;
            Gvar.enemy_description = "・体を重くして鈍足にしてくるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 13) {
            Gvar.enemy_name = "ﾗﾊﾞｰｽﾞ";
            Gvar.enemy_power = 10;
            Gvar.enemy_defence = 8;
            Gvar.enemy_exp_point = 75;
            Gvar.enemy_hp = 18;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 3; // スタンド
            Gvar.var_1619 = 322;
            Gvar.enemy_description = "・攻撃すると分裂して増えることがあるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 14) {
            Gvar.enemy_name = "床屋のｶｰﾝ";
            Gvar.enemy_power = 18;
            Gvar.enemy_defence = 17;
            Gvar.enemy_exp_point = 350;
            Gvar.enemy_hp = 48;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 345;
            Gvar.enemy_description = "・ダメージを受けると攻撃力がアップするぞ。";
            Gvar.var_1656 = "・強烈な一撃を繰り出すことがあるぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 15) {
            Gvar.enemy_name = "ﾍﾟｯﾄｼｮｯﾌﾟ";
            Gvar.enemy_power = 21;
            Gvar.enemy_defence = 19;
            Gvar.enemy_exp_point = 850;
            Gvar.enemy_hp = 40;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 360;
            Gvar.enemy_description = "・氷のミサイルを発射してくるぞ。";
            Gvar.var_1656 = "・隣接時に氷漬けにしてくるぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 16) {
            Gvar.enemy_name = "ﾊｲﾌﾟﾘｴｽﾃｽ";
            Gvar.enemy_power = 11;
            Gvar.enemy_defence = 8;
            Gvar.enemy_exp_point = 30;
            Gvar.enemy_hp = 20;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 1;
            Gvar.var_972 = 3; // スタンド
            Gvar.var_1619 = 328;
            Gvar.enemy_description = "・アイテムに化けているぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 17) {
            Gvar.enemy_name = "ｼｱｰﾊｰﾄｱﾀｯｸ";
            Gvar.enemy_power = 14;
            Gvar.enemy_defence = 40;
            Gvar.enemy_exp_point = 300;
            Gvar.enemy_hp = 5;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 8; // スタンド・杜王町住人
            Gvar.var_1619 = 443;
            Gvar.enemy_description = "・体力が少なくなると爆発するぞ。";
            Gvar.var_1656 = "・自分が爆発に巻き込まれると誘爆するぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 18) {
            Gvar.enemy_name = "ﾌﾞﾗｯｸ･ｻﾊﾞｽ";
            Gvar.enemy_power = 14;
            Gvar.enemy_defence = 15;
            Gvar.enemy_exp_point = 300;
            Gvar.enemy_hp = 42;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 3; // スタンド
            Gvar.var_1619 = 511;
            Gvar.enemy_description = "・影から影へ、瞬間的に移動するぞ。";
            Gvar.var_1656 = "・矢を刺して選別してくるぞ。";
            Gvar.var_1657 = "・選ばれると装備品に新たな能力がつくぞ。";
            Gvar.var_1658 = "・矢かライターを落とすぞ。";
        }
        if (Gvar.enemy_list == 19) {
            Gvar.enemy_name = "ｱﾗﾋﾞｱﾌｧｯﾂ";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 1;
            Gvar.enemy_exp_point = 110;
            Gvar.enemy_hp = 1;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 1;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 323;
            Gvar.enemy_description = "・岩に化けて動かないぞ。";
            Gvar.var_1656 = "・太陽のレーザーを発射するぞ。";
            Gvar.var_1657 = "・気温を上げてレーザーの威力を上げるぞ。";
            Gvar.var_1658 = "・特定のアイテムを落とすぞ。";
        }
        if (Gvar.enemy_list == 20) {
            Gvar.enemy_name = "ｴﾝﾔ婆";
            Gvar.enemy_power = 11;
            Gvar.enemy_defence = 5;
            Gvar.enemy_exp_point = 200;
            Gvar.enemy_hp = 80;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 1;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 317;
            Gvar.enemy_description = "・倍の速さで動いているぞ。";
            Gvar.var_1656 = "・動く死体を呼び出すことがあるぞ。";
            Gvar.var_1657 = "・ダンジョンの主だぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 21) {
            Gvar.enemy_name = "ｽﾄﾚｲ･ｷｬｯﾄ";
            Gvar.enemy_power = 15;
            Gvar.enemy_defence = 15;
            Gvar.enemy_exp_point = 100;
            Gvar.enemy_hp = 45;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 6; // 動物・杜王町住人
            Gvar.var_1619 = 446;
            Gvar.enemy_description = "・金縛りにする空気弾を撃ってくるぞ。";
            Gvar.var_1656 = "・撃った後は寝てしまうぞ。";
            Gvar.var_1657 = "・既に金縛りだとダメージ弾になるぞ。";
            Gvar.var_1658 = "・吉良が近くにいると爆弾空気弾になるぞ。";
        }
        if (Gvar.enemy_list == 22) {
            Gvar.enemy_name = "ｱｳﾞﾄﾞｩﾙ人形";
            Gvar.enemy_power = 11;
            Gvar.enemy_defence = 1;
            Gvar.enemy_exp_point = 50;
            Gvar.enemy_hp = 30;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 327;
            Gvar.enemy_description = "・ジャッジメントに作られた土人形だ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 23) {
            Gvar.enemy_name = "ただの死体";
            Gvar.enemy_power = 1;
            Gvar.enemy_defence = 1;
            Gvar.enemy_exp_point = 1;
            Gvar.enemy_hp = 1;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 321;
            Gvar.enemy_description = "・とくに何もないぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 24) {
            Gvar.enemy_name = "穴ﾎﾞｺﾁｰｽﾞの死体";
            Gvar.enemy_power = 8;
            Gvar.enemy_defence = 4;
            Gvar.enemy_exp_point = 40;
            Gvar.enemy_hp = 13;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 319;
            Gvar.enemy_description = "・エンヤ婆に操られている死体だ。";
            Gvar.var_1656 = "・エンヤ婆がやられると、ただの死体に戻るぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 25) {
            Gvar.enemy_name = "子連れﾆｷﾋﾞの死体";
            Gvar.enemy_power = 8;
            Gvar.enemy_defence = 4;
            Gvar.enemy_exp_point = 40;
            Gvar.enemy_hp = 13;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 320;
            Gvar.enemy_description = "・エンヤ婆に操られている死体だ。";
            Gvar.var_1656 = "・エンヤ婆がやられると、ただの死体に戻るぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 26) {
            Gvar.enemy_name = "ﾊｰｳﾞｪｽﾄ";
            Gvar.enemy_power = 12;
            Gvar.enemy_defence = 8;
            Gvar.enemy_exp_point = 30;
            Gvar.enemy_hp = 12;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 1;
            Gvar.var_972 = 8; // スタンド・杜王町住人
            Gvar.var_1619 = 441;
            Gvar.enemy_description = "・アイテムを盗んで逃げるぞ。";
            Gvar.var_1656 = "・落ちているアイテムも拾って逃げるぞ。";
            Gvar.var_1657 = "・盗んだ後は倍の速さで移動するぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 27) {
            Gvar.enemy_name = "ｹﾞﾌﾞ神";
            Gvar.enemy_power = 16;
            Gvar.enemy_defence = 13;
            Gvar.enemy_exp_point = 195;
            Gvar.enemy_hp = 30;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 3; // スタンド
            Gvar.var_1619 = 342;
            Gvar.enemy_description = "・地面に潜って他の場所に移動するぞ。";
            Gvar.var_1656 = "・足を掴んで移動できなくさせるぞ。";
            Gvar.var_1657 = "・目を切り裂いて盲目にしてくるぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 28) {
            Gvar.enemy_name = "ｼﾞｬｯｼﾞﾒﾝﾄ";
            Gvar.enemy_power = 15;
            Gvar.enemy_defence = 12;
            Gvar.enemy_exp_point = 150;
            Gvar.enemy_hp = 30;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 3; // スタンド
            Gvar.var_1619 = 326;
            Gvar.enemy_description = "・土人形を作り出すことがあるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 29) {
            Gvar.enemy_name = "ｸﾞﾘｰﾝ･ﾃﾞｨ";
            Gvar.enemy_power = 15;
            Gvar.enemy_defence = 5;
            Gvar.enemy_exp_point = 165;
            Gvar.enemy_hp = 80;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 3; // スタンド
            Gvar.var_1619 = 525;
            Gvar.enemy_description = "・同じ部屋にいると階段を降りられないぞ";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 30) {
            Gvar.enemy_name = "禁煙中ﾎﾙ･ﾎｰｽ";
            Gvar.enemy_power = 15;
            Gvar.enemy_defence = 16;
            Gvar.enemy_exp_point = 650;
            Gvar.enemy_hp = 45;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 349;
            Gvar.enemy_description = "・付かず離れず距離をとるぞ。";
            Gvar.var_1656 = "・時々エンペラーの弾丸を発射するぞ。";
            Gvar.var_1657 = "・この弾丸は防御力の影響を受けないぞ。";
            Gvar.var_1658 = "・予知によって弾丸のダメージが変わるぞ。";
        }
        if (Gvar.enemy_list == 31) {
            Gvar.enemy_name = "吉良の親父";
            Gvar.enemy_power = 13;
            Gvar.enemy_defence = 9;
            Gvar.enemy_exp_point = 95;
            Gvar.enemy_hp = 22;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 7; // 人間・杜王町住人
            Gvar.var_1619 = 444;
            Gvar.enemy_description = "・フワフワと動いているぞ。";
            Gvar.var_1656 = "・親父がいる部屋は写真の中だ。";
            Gvar.var_1657 = "  倒さないと出られないぞ。";
            Gvar.var_1658 = "・弓矢を落とすことがあるぞ。";
        }
        if (Gvar.enemy_list == 32) {
            Gvar.enemy_name = "吉良吉影";
            Gvar.enemy_power = 22;
            Gvar.enemy_defence = 20;
            Gvar.enemy_exp_point = 750;
            Gvar.enemy_hp = 65;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 7; // 人間・杜王町住人
            Gvar.var_1619 = 442;
            Gvar.enemy_description = "・アイテムを爆弾に変えてくるぞ。";
            Gvar.var_1656 = "・床のアイテムも爆弾に変えることがあるぞ。";
            Gvar.var_1657 = "・ｼｱｰﾊｰﾄｱﾀｯｸを繰り出すことがあるぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 33) {
            Gvar.enemy_name = "トニオさん";
            Gvar.enemy_power = 100;
            Gvar.enemy_defence = 40;
            Gvar.enemy_exp_point = 1000;
            Gvar.enemy_hp = 950;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 4; // 味方
            Gvar.var_1619 = 435;
            Gvar.enemy_description = "・お店を守っているぞ。";
            Gvar.var_1656 = "・攻撃を受けると怒るぞ。";
            Gvar.var_1657 = "・泥棒すると仲間を呼ぶぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 34) {
            Gvar.enemy_name = "トニオさん"; // ブチギレ状態
            Gvar.enemy_power = 100;
            Gvar.enemy_defence = 40;
            Gvar.enemy_exp_point = 1000;
            Gvar.enemy_hp = 950;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 7; // 人間・杜王町住人
            Gvar.var_1619 = 436;
            Gvar.enemy_description = "・「タダじゃあおきマセンッ！」";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 35) {
            Gvar.enemy_name = "仗助";
            Gvar.enemy_power = 20;
            Gvar.enemy_defence = 18;
            Gvar.enemy_exp_point = 380;
            Gvar.enemy_hp = 42;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 7; // 人間・杜王町住人
            Gvar.var_1619 = 401;
            Gvar.enemy_description = "・近くに怪我をした敵がいると治しに行くぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 36) {
            Gvar.enemy_name = "ｽﾋﾟｰﾄﾞﾜｺﾞﾝ";
            Gvar.enemy_power = 7;
            Gvar.enemy_defence = 7;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 50;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 4; // 味方
            Gvar.var_1619 = 104;
            Gvar.enemy_description = "・氷漬けになると助けてくれるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 37) {
            Gvar.enemy_name = "猫";
            Gvar.enemy_power = 1;
            Gvar.enemy_defence = 1;
            Gvar.enemy_exp_point = 1;
            Gvar.enemy_hp = 1;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 803;
            Gvar.enemy_description = "・にゃー";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 38) {
            Gvar.enemy_name = "ｱﾚｯｼｰ";
            Gvar.enemy_power = 18;
            Gvar.enemy_defence = 12;
            Gvar.enemy_exp_point = 220;
            Gvar.enemy_hp = 45;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 348;
            Gvar.enemy_description = "・若返り攻撃でレベルを下げてくるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 39) {
            Gvar.enemy_name = "ﾊｲｳｪｲｽﾀｰ";
            Gvar.enemy_power = 7;
            Gvar.enemy_defence = 5;
            Gvar.enemy_exp_point = 48;
            Gvar.enemy_hp = 14;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 8; // スタンド・杜王町住人
            Gvar.var_1619 = 445;
            Gvar.enemy_description = "・倍の速さで移動するぞ。";
            Gvar.var_1656 = "・養分を吸い取って満腹度を下げてくるぞ。";
            Gvar.var_1657 = "・特別なアイテムを持っていることがあるぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 40) {
            Gvar.enemy_name = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰ";
            Gvar.enemy_power = 10;
            Gvar.enemy_defence = 5;
            Gvar.enemy_exp_point = 5;
            Gvar.enemy_hp = 20;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 8; // スタンド・杜王町住人
            Gvar.var_1619 = 408;
            Gvar.enemy_description = "・形兆が呼び出したスタンドだ。";
            Gvar.var_1656 = "・弾丸を発射してくるぞ。";
            Gvar.var_1657 = "・仲間の弾丸には当たらないぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 41) {
            Gvar.enemy_name = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰ戦車";
            Gvar.enemy_power = 14;
            Gvar.enemy_defence = 13;
            Gvar.enemy_exp_point = 7;
            Gvar.enemy_hp = 30;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 8; // スタンド・杜王町住人
            Gvar.var_1619 = 410;
            Gvar.enemy_description = "・形兆が呼び出したスタンドだ。";
            Gvar.var_1656 = "・砲弾を発射してくるぞ。";
            Gvar.var_1657 = "・仲間の弾丸には当たらないぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 42) {
            Gvar.enemy_name = "ｱﾊﾟｯﾁ";
            Gvar.enemy_power = 16;
            Gvar.enemy_defence = 10;
            Gvar.enemy_exp_point = 8;
            Gvar.enemy_hp = 30;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 8; // スタンド・杜王町住人
            Gvar.var_1619 = 411;
            Gvar.enemy_description = "・形兆が呼び出したスタンドだ。";
            Gvar.var_1656 = "・ミサイルを発射してくるぞ。";
            Gvar.var_1657 = "・仲間の弾丸には当たらないぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 43) {
            Gvar.enemy_name = "ｾｯｺ";
            Gvar.enemy_power = 21;
            Gvar.enemy_defence = 20;
            Gvar.enemy_exp_point = 580;
            Gvar.enemy_hp = 40;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 526;
            Gvar.enemy_description = "・ウロウロしながら近づいてくるぞ。";
            Gvar.var_1656 = "・壁の中でも自由に移動できるぞ。";
            Gvar.var_1657 = "・壁の中にいる時は普通の攻撃が効かないぞ。";
            Gvar.var_1658 = "・タイヤが当たると混乱するぞ。";
        }
        if (Gvar.enemy_list == 44) {
            Gvar.enemy_name = "ﾚｯﾄﾞﾎｯﾄﾁﾘﾍﾟｯﾊﾟｰ";
            Gvar.enemy_power = 20;
            Gvar.enemy_defence = 16;
            Gvar.enemy_exp_point = 630;
            Gvar.enemy_hp = 52;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 8; // スタンド・杜王町住人
            Gvar.var_1619 = 437;
            Gvar.enemy_description = "・地下の電線を使って近くに瞬間移動するぞ。";
            Gvar.var_1656 = "・２回連続で攻撃してくるぞ。";
            Gvar.var_1657 = "・水に入るとダメージを受けるぞ。";
            Gvar.var_1658 = "・タイヤに弱いぞ。";
        }
        if (Gvar.enemy_list == 45) {
            Gvar.enemy_name = "由花子";
            Gvar.enemy_power = 12;
            Gvar.enemy_defence = 13;
            Gvar.enemy_exp_point = 142;
            Gvar.enemy_hp = 32;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 7; // 人間・杜王町住人
            Gvar.var_1619 = 433;
            Gvar.enemy_description = "・ｽﾀﾝﾄﾞDISCに呪縛をかけてくるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 46) {
            Gvar.enemy_name = "ﾎﾙ･ﾎｰｽ";
            Gvar.enemy_power = 15;
            Gvar.enemy_defence = 16;
            Gvar.enemy_exp_point = 262;
            Gvar.enemy_hp = 42;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 315;
            Gvar.enemy_description = "・付かず離れず距離をとってくるぞ。";
            Gvar.var_1656 = "・時々エンペラーの弾丸を発射するぞ。";
            Gvar.var_1657 = "・この弾丸は防御力の影響を受けないぞ。";
            Gvar.var_1658 = "・ガラスの破片をバラ撒くこともあるぞ。";
        }
        if (Gvar.enemy_list == 47) {
            Gvar.enemy_name = "億泰";
            Gvar.enemy_power = 17;
            Gvar.enemy_defence = 14;
            Gvar.enemy_exp_point = 170;
            Gvar.enemy_hp = 36;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 7; // 人間・杜王町住人
            Gvar.var_1619 = 405;
            Gvar.enemy_description = "・ガオンと近くに引き寄せてくるぞ。";
            Gvar.var_1656 = "・強烈な一撃を繰り出すことがあるぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 48) {
            Gvar.enemy_name = "ｴｱﾛｽﾐｽ";
            Gvar.enemy_power = 15;
            Gvar.enemy_defence = 12;
            Gvar.enemy_exp_point = 200;
            Gvar.enemy_hp = 30;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 10; // スタンド・裏切り者
            Gvar.var_1619 = 507;
            Gvar.enemy_description = "・弾丸を発射してくるぞ。";
            Gvar.var_1656 = "・どこからでも位置を察して飛んでくるぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 49) {
            Gvar.enemy_name = "ｺﾋﾟｰ人形";
            Gvar.enemy_power = Gvar.var_580 + Gvar.var_565;
            Gvar.enemy_defence = Gvar.var_581;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = Gvar.var_352;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 1;
            Gvar.var_972 = 5; // 味方
            Gvar.var_1619 = 432;
            Gvar.enemy_description = "・ウロウロと歩くぞ。";
            Gvar.var_1656 = "・敵はコピー人形を優先して攻撃するぞ。";
            Gvar.var_1657 = "・10ターンで人形に戻るぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 50) {
            Gvar.enemy_name = "元いた場所";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 9999;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 4; // 味方
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 51) {
            Gvar.enemy_name = "ﾜﾝﾁｪﾝ";
            Gvar.enemy_power = 8; // 攻撃力
            Gvar.enemy_defence = 6; // 防御力
            Gvar.enemy_exp_point = 20; // 経験値
            Gvar.enemy_hp = 14; // 体力
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 107;
            Gvar.enemy_description = "・とくに何もないぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 52) {
            Gvar.enemy_name = "ｼﾞｬｯｸ･ｻﾞ･ﾘﾊﾟｰ";
            Gvar.enemy_power = 12;
            Gvar.enemy_defence = 5;
            Gvar.enemy_exp_point = 60;
            Gvar.enemy_hp = 30;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 108;
            Gvar.enemy_description = "・とくに何もないぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 53) {
            Gvar.enemy_name = "ｴｸｽﾍﾟﾘｴﾝｽの花";
            Gvar.enemy_power = 1;
            Gvar.enemy_defence = 1;
            Gvar.enemy_exp_point = 1;
            Gvar.enemy_hp = 1;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 4; // 味方
            Gvar.var_1619 = 502;
            Gvar.enemy_description = "・攻撃を受けるとﾀﾞﾒｰｼﾞを反射するぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 54) {
            Gvar.enemy_name = "ｸﾞﾘｰﾝﾍﾞﾚｰ";
            Gvar.enemy_power = 20;
            Gvar.enemy_defence = 5;
            Gvar.enemy_exp_point = 10;
            Gvar.enemy_hp = 20;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 8; // スタンド・杜王町住人
            Gvar.var_1619 = 409;
            Gvar.enemy_description = "・形兆が呼び出したスタンドだ。";
            Gvar.var_1656 = "・仲間の弾丸には当たらないぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 55) {
            Gvar.enemy_name = "亀";
            Gvar.enemy_power = 1;
            Gvar.enemy_defence = 1;
            Gvar.enemy_exp_point = 1;
            Gvar.enemy_hp = 20;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 4; // 味方
            Gvar.var_1619 = 512;
            Gvar.enemy_description = "・中に部屋があるぞ。";
            Gvar.var_1656 = "・アイテムを保管しておけるぞ。";
            Gvar.var_1657 = "・ジッパーにアイテムを捨てると成長し、";
            Gvar.var_1658 = "  部屋がさらに広くなるぞ。";
        }
        if (Gvar.enemy_list == 56) {
            Gvar.enemy_name = "ｼｭﾄﾛﾊｲﾑ";
            Gvar.enemy_power = 13;
            Gvar.enemy_defence = 10;
            Gvar.enemy_exp_point = 110;
            Gvar.enemy_hp = 23;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 204;
            Gvar.enemy_description = "・マシンガンを撃ってくるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 57) {
            Gvar.enemy_name = "SPW財団の男";
            Gvar.enemy_power = 1;
            Gvar.enemy_defence = 10;
            Gvar.enemy_exp_point = 1;
            Gvar.enemy_hp = 20;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 4; // 味方
            Gvar.var_1619 = 680;
            Gvar.enemy_description = "・次の階に出現する敵を教えてくれるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 58) {
            Gvar.enemy_name = "ﾎﾞｲﾝｺﾞ";
            Gvar.enemy_power = 1;
            Gvar.enemy_defence = 10;
            Gvar.enemy_exp_point = 1;
            Gvar.enemy_hp = 20;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 1;
            Gvar.var_972 = 4; // 味方
            Gvar.var_1619 = 344;
            Gvar.enemy_description = "・次の階での死に方を教えてくれるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 59) {
            Gvar.enemy_name = "ﾌﾟｯﾁ神父";
            Gvar.enemy_power = 15;
            Gvar.enemy_defence = 18;
            Gvar.enemy_exp_point = 360;
            Gvar.enemy_hp = 54;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 6;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 618;
            Gvar.enemy_description = "・装備しているDISCを抜き取ってしまうぞ。";
            Gvar.var_1656 = "・やっつければ取り戻せるぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 60) {
            Gvar.enemy_name = "ｻﾞ･ﾆｭｰ神父";
            Gvar.enemy_power = 60;
            Gvar.enemy_defence = 32;
            Gvar.enemy_exp_point = 5600;
            Gvar.enemy_hp = 85;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 624;
            Gvar.enemy_description = "・倍の速さで移動するぞ。";
            Gvar.var_1656 = "・２回連続で攻撃するぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 61) {
            Gvar.enemy_name = "ﾖｰﾖｰﾏｯ";
            Gvar.enemy_power = 1;
            Gvar.enemy_defence = 10;
            Gvar.enemy_exp_point = 100;
            Gvar.enemy_hp = 50;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 3; // スタンド
            Gvar.var_1619 = 617;
            Gvar.enemy_description = "・部屋に二人だけになると謎の攻撃をするぞ。";
            Gvar.var_1656 = "・攻撃すると臭いでﾀﾞﾒｰｼﾞを食らうぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 62) {
            Gvar.enemy_name = "ﾍﾞｲﾋﾞｨﾌｪｲｽ";
            Gvar.enemy_power = 18;
            Gvar.enemy_defence = 16;
            Gvar.enemy_exp_point = 245;
            Gvar.enemy_hp = 50;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 1;
            Gvar.var_972 = 3; // スタンド
            Gvar.var_1619 = 516;
            Gvar.enemy_description = "・アイテムに化けているぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 63) {
            Gvar.enemy_name = "ﾌﾟﾛｼｭｰﾄ兄貴";
            Gvar.enemy_power = 20;
            Gvar.enemy_defence = 17;
            Gvar.enemy_exp_point = 520;
            Gvar.enemy_hp = 45;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 9; // 人間・裏切り者
            Gvar.var_1619 = 513;
            Gvar.enemy_description = "・接触老化で最大精神力や最大ＨＰが下がるぞ。";
            Gvar.var_1656 = "・同じ部屋にいると精神力を下げてくるぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 64) {
            Gvar.enemy_name = "ｷﾞｱｯﾁｮ";
            Gvar.enemy_power = 50;
            Gvar.enemy_defence = 40;
            Gvar.enemy_exp_point = 3600;
            Gvar.enemy_hp = 50;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 9; // 人間・裏切り者
            Gvar.var_1619 = 517;
            Gvar.enemy_description = "・倍の速さで移動してくるぞ。";
            Gvar.var_1656 = "・隣接すると凍らせてくるぞ。";
            Gvar.var_1657 = "・弾丸やアイテムを凍らせて反射してくるぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 65) {
            Gvar.enemy_name = "虹村形兆";
            Gvar.enemy_power = 10;
            Gvar.enemy_defence = 18;
            Gvar.enemy_exp_point = 700;
            Gvar.enemy_hp = 55;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 7; // 人間・杜王町住人
            Gvar.var_1619 = 407;
            Gvar.enemy_description = "・付かず離れず距離をとるぞ。";
            Gvar.var_1656 = "・バッドカンパニー部隊を呼び出すぞ。";
            Gvar.var_1657 = "・グリーンベレーを呼び出すぞ。";
            Gvar.var_1658 = "・地面に地雷を仕掛けるぞ。";
        }
        if (Gvar.enemy_list == 66) {
            Gvar.enemy_name = "ﾀﾙｶｽ";
            Gvar.enemy_power = 23;
            Gvar.enemy_defence = 22;
            Gvar.enemy_exp_point = 800;
            Gvar.enemy_hp = 65;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 110;
            Gvar.enemy_description = "・強烈な一撃を繰り出すことがあるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 67) {
            Gvar.enemy_name = "ﾌﾞﾁ切れた億泰";
            Gvar.enemy_power = 38;
            Gvar.enemy_defence = 25;
            Gvar.enemy_exp_point = 2000;
            Gvar.enemy_hp = 70;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 7; // 人間・杜王町住人
            Gvar.var_1619 = 406;
            Gvar.enemy_description = "・ガオンと近くに引き寄せてくるぞ。";
            Gvar.var_1656 = "・強烈な一撃を繰り出すことがあるぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 68) {
            Gvar.enemy_name = "ﾌﾞﾁ切れた仗助";
            Gvar.enemy_power = 32;
            Gvar.enemy_defence = 23;
            Gvar.enemy_exp_point = 1900;
            Gvar.enemy_hp = 60;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 7; // 人間・杜王町住人
            Gvar.var_1619 = 402;
            Gvar.enemy_description = "・倍の速さで移動するぞ。";
            Gvar.var_1656 = "・２回連続で攻撃するぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 69) {
            Gvar.enemy_name = "ﾌﾞﾗﾌｫｰﾄﾞ";
            Gvar.enemy_power = 18;
            Gvar.enemy_defence = 16;
            Gvar.enemy_exp_point = 290;
            Gvar.enemy_hp = 50;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 109;
            Gvar.enemy_description = "・髪の毛で縛り付けてくるぞ。";
            Gvar.var_1656 = "・縛られた髪の毛で満腹度を吸い取るぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 70) { // Ver0.1401にて追加。
            Gvar.enemy_name = "D・ダービー";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 71) {
            Gvar.enemy_name = "ﾄﾞｩｰﾋﾞｰ";
            Gvar.enemy_power = 14;
            Gvar.enemy_defence = 9;
            Gvar.enemy_exp_point = 130;
            Gvar.enemy_hp = 34;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 112;
            Gvar.enemy_description = "・とくに何もないぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 72) {
            Gvar.enemy_name = "ｹﾝｿﾞｰ";
            Gvar.enemy_power = 18;
            Gvar.enemy_defence = 18;
            Gvar.enemy_exp_point = 710;
            Gvar.enemy_hp = 42;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 616;
            Gvar.enemy_description = "・こちらの攻撃をヒラリとかわしやすいぞ。";
            Gvar.var_1656 = "・風水の力で罠をたくさん呼び寄せるぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 73) {
            Gvar.enemy_name = "ﾀﾞｲｱｰさん";
            Gvar.enemy_power = 10;
            Gvar.enemy_defence = 6;
            Gvar.enemy_exp_point = 52;
            Gvar.enemy_hp = 20;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 111;
            Gvar.enemy_description = "・倒すと首だけになって残るぞ。";
            Gvar.var_1656 = "・首に触れると波紋のバラを飛ばしてくるぞ。";
            Gvar.var_1657 = "・凍った状態になると弱いぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 74) {
            Gvar.enemy_name = "ｻｳﾞｪｼﾞｶﾞｰﾃﾞﾝ";
            Gvar.enemy_power = 1;
            Gvar.enemy_defence = 10;
            Gvar.enemy_exp_point = 1;
            Gvar.enemy_hp = 20;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 4; // 味方
            Gvar.var_1619 = 612;
            Gvar.enemy_description = "・アイテムを一つ倉庫に運んでくれるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 75) {
            Gvar.enemy_name = "鮮血のｼｬﾎﾞﾝ";
            Gvar.enemy_power = 1;
            Gvar.enemy_defence = 10;
            Gvar.enemy_exp_point = 1;
            Gvar.enemy_hp = 20;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 4; // 味方
            Gvar.var_1619 = 213;
            Gvar.enemy_description = "・アイテムを一つ入れておけるぞ。";
            Gvar.var_1656 = "・あとで発見した時に取り出せるぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 76) {
            Gvar.enemy_name = "ｴｺｰｽﾞACT2";
            Gvar.enemy_power = 9;
            Gvar.enemy_defence = 6;
            Gvar.enemy_exp_point = 46;
            Gvar.enemy_hp = 19;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 8; // スタンド・杜王町住人
            Gvar.var_1619 = 417;
            Gvar.enemy_description = "・文字を投げつけて攻撃してくるぞ。";
            Gvar.var_1656 = "・地面に文字の罠を貼り付けるぞ。";
            Gvar.var_1657 = "・倒すと成長することがあるぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 77) {
            Gvar.enemy_name = "ｴｺｰｽﾞACT1";
            Gvar.enemy_power = 7;
            Gvar.enemy_defence = 5;
            Gvar.enemy_exp_point = 13;
            Gvar.enemy_hp = 12;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 8; // スタンド・杜王町住人
            Gvar.var_1619 = 415;
            Gvar.enemy_description = "・音を貼り付けて混乱させてくるぞ。";
            Gvar.var_1656 = "・倒すと成長することがあるぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 78) {
            Gvar.enemy_name = "ｱｳﾞﾄﾞｩﾙさん";
            Gvar.enemy_power = 19;
            Gvar.enemy_defence = 13;
            Gvar.enemy_exp_point = 230;
            Gvar.enemy_hp = 50;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 303;
            Gvar.enemy_description = "・レッドバインドで縛り付けてくるぞ。";
            Gvar.var_1656 = "・喰らうとスタンドが弱くなってしまうぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 79) {
            Gvar.enemy_name = "ｴｺｰｽﾞの卵";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 2;
            Gvar.enemy_hp = 1;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 8; // スタンド・杜王町住人
            Gvar.var_1619 = 414;
            Gvar.enemy_description = "・動かないぞ。";
            Gvar.var_1656 = "・攻撃してこないぞ。";
            Gvar.var_1657 = "・倒すと成長することがあるぞ。";
            Gvar.var_1658 = "・模様の違う卵には要注意だ。";
        }
        if (Gvar.enemy_list == 80) {
            Gvar.enemy_name = "ﾗﾝｸﾞ･ﾗﾝｸﾞﾗｰ";
            Gvar.enemy_power = 18;
            Gvar.enemy_defence = 19;
            Gvar.enemy_exp_point = 720;
            Gvar.enemy_hp = 55;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 611;
            Gvar.enemy_description = "・唾を吐いてくるぞ。";
            Gvar.var_1656 = "・当たると無重力で思うように動けなくなるぞ。";
            Gvar.var_1657 = "・隣接していても無重力攻撃をしてくるぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 81) {
            Gvar.enemy_name = "ｱﾊﾞｯｷｫ";
            Gvar.enemy_power = 1;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 1;
            Gvar.enemy_hp = 20;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 4; // 味方
            Gvar.var_1619 = 504;
            Gvar.enemy_description = "・ダンジョンから帰還させてくれるぞ。";
            Gvar.var_1656 = "・お茶を勧めてくれるぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 82) { // Ver0.1401にて追加。
            Gvar.enemy_name = "バーテンダー";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 83) {
            Gvar.enemy_name = "間田";
            Gvar.enemy_power = 1;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 1;
            Gvar.enemy_hp = 20;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 1;
            Gvar.var_972 = 4; // 味方
            Gvar.var_1619 = 431;
            Gvar.enemy_description = "・必ずマンガを持ち歩いているぞ。";
            Gvar.var_1656 = "・特に「GP BOY」は学校で読むほど大好きだ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 84) {
            Gvar.enemy_name = "ﾁｮｺﾗｰﾀ";
            Gvar.enemy_power = 10;
            Gvar.enemy_defence = 19;
            Gvar.enemy_exp_point = 360;
            Gvar.enemy_hp = 62;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 523;
            Gvar.enemy_description = "・付かず離れず距離をとってくるぞ。";
            Gvar.var_1656 = "・グリーンディやセッコを呼び出すぞ。";
            Gvar.var_1657 = "・近くのセッコの攻撃力を上げるぞ。";
            Gvar.var_1658 = "・分離して逃げることがあるぞ。";
        }
        if (Gvar.enemy_list == 85) {
            Gvar.enemy_name = "ﾘｿﾞｯﾄ";
            Gvar.enemy_power = 10;
            Gvar.enemy_defence = 18;
            Gvar.enemy_exp_point = 600;
            Gvar.enemy_hp = 43;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 9; // 人間・裏切り者
            Gvar.var_1619 = 522;
            Gvar.enemy_description = "・磁力によって普段は姿が見えないぞ。";
            Gvar.var_1656 = "・ランダムに移動しているぞ。";
            Gvar.var_1657 = "・体内で刃物を作る攻撃をしてくるぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 86) {
            Gvar.enemy_name = "ｻﾝﾀﾅ";
            Gvar.enemy_power = 30;
            Gvar.enemy_defence = 25;
            Gvar.enemy_exp_point = 1800;
            Gvar.enemy_hp = 65;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 205;
            Gvar.enemy_description = "・空気供給管を通って瞬時に移動するぞ。";
            Gvar.var_1656 = "・同じ部屋に吸血鬼やゾンビがいると攻撃し、";
            Gvar.var_1657 = "  やっつけるとレベルが上がるぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 87) {
            Gvar.enemy_name = "ｴｼﾃﾞｨｼ";
            Gvar.enemy_power = 38;
            Gvar.enemy_defence = 26;
            Gvar.enemy_exp_point = 2200;
            Gvar.enemy_hp = 80;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 208;
            Gvar.enemy_description = "・アイテムを消し炭にしてしまうぞ。";
            Gvar.var_1656 = "・床のアイテムも消し炭にしてしまうぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 88) {
            Gvar.enemy_name = "ﾄﾞﾉｳﾞｧﾝ";
            Gvar.enemy_power = 3;
            Gvar.enemy_defence = 2;
            Gvar.enemy_exp_point = 4;
            Gvar.enemy_hp = 6;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 206;
            Gvar.enemy_description = "・ヒラヒラと舞って攻撃が当たりにくいぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 89) { // Ver0.1401にて追加。
            Gvar.enemy_name = "フォーエバー"; // ストレングスの本体の猿
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 90) {
            Gvar.enemy_name = "岩";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 1;
            Gvar.enemy_exp_point = 1;
            Gvar.enemy_hp = 1;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 324;
            Gvar.enemy_description = "・岩だ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 91) {
            Gvar.enemy_name = "ACT1のさなぎ";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 1;
            Gvar.enemy_hp = 1;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 8; // スタンド・杜王町住人
            Gvar.var_1619 = 416;
            Gvar.enemy_description = "・動かないぞ。";
            Gvar.var_1656 = "・攻撃もしないぞ。";
            Gvar.var_1657 = "・エコーズACT2に成長するぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 92) {
            Gvar.enemy_name = "ACT2のさなぎ";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 1;
            Gvar.enemy_hp = 1;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 8; // スタンド・杜王町住人
            Gvar.var_1619 = 418;
            Gvar.enemy_description = "・動かないぞ。";
            Gvar.var_1656 = "・攻撃もしないぞ。";
            Gvar.var_1657 = "・エコーズACT3に成長するぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 93) {
            Gvar.enemy_name = "ｴﾝﾎﾟﾘｵ";
            Gvar.enemy_power = 5;
            Gvar.enemy_defence = 4;
            Gvar.enemy_exp_point = 7;
            Gvar.enemy_hp = 7;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 604;
            Gvar.enemy_description = "・幽霊の弾丸を撃ってくるぞ。";
            Gvar.var_1656 = "・特別なスタンドを扱えそうだ…";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 94) {
            Gvar.enemy_name = "ブルりん";
            Gvar.enemy_power = 8;
            Gvar.enemy_defence = 6;
            Gvar.enemy_exp_point = 15;
            Gvar.enemy_hp = 13;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 203;
            Gvar.enemy_description = "・掴まえて動けなくしてくるぞ。";
            Gvar.var_1656 = "・「たのもしいわ！あたしのブルりん！」";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 95) {
            Gvar.enemy_name = "ｽﾄﾚｲﾂｫ";
            Gvar.enemy_power = 19;
            Gvar.enemy_defence = 18;
            Gvar.enemy_exp_point = 445;
            Gvar.enemy_hp = 46;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 202;
            Gvar.enemy_description = "・目から体液を発射してくるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 96) {
            Gvar.enemy_name = "感電ｴﾝﾎﾟﾘｵ";
            Gvar.enemy_power = 1;
            Gvar.enemy_defence = 1;
            Gvar.enemy_exp_point = 1;
            Gvar.enemy_hp = 1;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 1;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 605;
            Gvar.enemy_description = "・感電して動けない。";
            Gvar.var_1656 = "・特定のアイテムを持っているぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 97) {
            Gvar.enemy_name = "ｵｲﾝｺﾞ";
            Gvar.enemy_power = 10;
            Gvar.enemy_defence = 1;
            Gvar.enemy_exp_point = 100;
            Gvar.enemy_hp = 1;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 343;
            Gvar.enemy_description = "・誰か他の敵に化けていることがあるぞ。";
            Gvar.var_1656 = "・爆弾仕掛けのオレンジを落とすぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 98) {
            Gvar.enemy_name = "ｴﾝﾎﾟﾘｵ"; // ウェザーリポートのDISC付
            Gvar.enemy_power = 70;
            Gvar.enemy_defence = 3;
            Gvar.enemy_exp_point = 7;
            Gvar.enemy_hp = 7;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 625;
            Gvar.enemy_description = "・純粋酸素で全員にﾀﾞﾒｰｼﾞを与えるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 99) {
            Gvar.enemy_name = "ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰ";
            Gvar.enemy_power = 12;
            Gvar.enemy_defence = 6;
            Gvar.enemy_exp_point = 85;
            Gvar.enemy_hp = 18;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 3; // スタンド
            Gvar.var_1619 = 607;
            Gvar.enemy_description = "・フワフワと動いているぞ。";
            Gvar.var_1656 = "・気流に舞って攻撃が当たりにくいぞ。";
            Gvar.var_1657 = "・近くにいると弾丸を撃ってくるぞ。";
            Gvar.var_1658 = "・この弾丸は防御力の影響を受けないぞ。";
        }
        if (Gvar.enemy_list == 100) { // Ver0.1401にて追加。
            Gvar.enemy_name = "ピアスを開けた徐倫";
            Gvar.enemy_power = 25;
            Gvar.enemy_defence = 27;
            Gvar.enemy_exp_point = 1100;
            Gvar.enemy_hp = 53;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "・近くに怪我をした敵がいると治しに行くぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 101) {
            Gvar.enemy_name = "ﾍﾟｲｼﾞ";
            Gvar.enemy_power = 10;
            Gvar.enemy_defence = 5;
            Gvar.enemy_exp_point = 50;
            Gvar.enemy_hp = 16;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 113;
            Gvar.enemy_description = "・常に４人組で行動するぞ。";
            Gvar.var_1656 = "・必ず眠っているぞ。";
            Gvar.var_1657 = "・一人に攻撃すると、皆で襲ってくるぞ。";
            Gvar.var_1658 = "・倍の速さで移動するぞ。";
        }
        if (Gvar.enemy_list == 102) {
            Gvar.enemy_name = "ｼﾞｮｰﾝｽﾞ";
            Gvar.enemy_power = 10;
            Gvar.enemy_defence = 5;
            Gvar.enemy_exp_point = 50;
            Gvar.enemy_hp = 16;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 114;
            Gvar.enemy_description = "・常に４人組で行動するぞ。";
            Gvar.var_1656 = "・必ず眠っているぞ。";
            Gvar.var_1657 = "・一人に攻撃すると、皆で襲ってくるぞ。";
            Gvar.var_1658 = "・倍の速さで移動するぞ。";
        }
        if (Gvar.enemy_list == 103) {
            Gvar.enemy_name = "ﾌﾟﾗﾝﾄ";
            Gvar.enemy_power = 10;
            Gvar.enemy_defence = 5;
            Gvar.enemy_exp_point = 50;
            Gvar.enemy_hp = 16;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 115;
            Gvar.enemy_description = "・常に４人組で行動するぞ。";
            Gvar.var_1656 = "・必ず眠っているぞ。";
            Gvar.var_1657 = "・一人に攻撃すると、皆で襲ってくるぞ。";
            Gvar.var_1658 = "・倍の速さで移動するぞ。";
        }
        if (Gvar.enemy_list == 104) {
            Gvar.enemy_name = "ﾎﾞｰﾝﾅﾑ";
            Gvar.enemy_power = 10;
            Gvar.enemy_defence = 5;
            Gvar.enemy_exp_point = 50;
            Gvar.enemy_hp = 16;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 116;
            Gvar.enemy_description = "・常に４人組で行動するぞ。";
            Gvar.var_1656 = "・必ず眠っているぞ。";
            Gvar.var_1657 = "・一人に攻撃すると、皆で襲ってくるぞ。";
            Gvar.var_1658 = "・倍の速さで移動するぞ。";
        }
        if (Gvar.enemy_list == 105) {
            Gvar.enemy_name = "ﾂｪﾍﾟﾘさん";
            Gvar.enemy_power = 9;
            Gvar.enemy_defence = 6;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 40;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 4; // 味方
            Gvar.var_1619 = 106;
            Gvar.enemy_description = "・波紋が使える状態にしてくれるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 106) {
            Gvar.enemy_name = "ﾍﾟｯｼ";
            Gvar.enemy_power = 4;
            Gvar.enemy_defence = 4;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 30;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 4; // 味方
            Gvar.var_1619 = 514;
            Gvar.enemy_description = "・ﾋﾞｰﾁﾎﾞｰｲで釣りができるぞ";
            Gvar.var_1656 = "・兄貴のDISCでパワーアップするぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 107) {
            Gvar.enemy_name = "成長したﾍﾟｯｼ";
            Gvar.enemy_power = 12;
            Gvar.enemy_defence = 12;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 30;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 4; // 味方
            Gvar.var_1619 = 515;
            Gvar.enemy_description = "・ﾋﾞｰﾁﾎﾞｰｲで釣りができるぞ";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 108) {
            Gvar.enemy_name = "イギー";
            Gvar.enemy_power = 5;
            Gvar.enemy_defence = 8;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 40;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 4; // 味方
            Gvar.var_1619 = 341;
            Gvar.enemy_description = "・地面に砂DIOを作ってくれるぞ";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 109) {
            Gvar.enemy_name = "ワムウ";
            Gvar.enemy_power = 42;
            Gvar.enemy_defence = 24;
            Gvar.enemy_exp_point = 2500;
            Gvar.enemy_hp = 80;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 210;
            Gvar.enemy_description = "・透明で姿が見えないことがあるぞ。";
            Gvar.var_1656 = "・瀕死になるとパワーアップするぞ。";
            Gvar.var_1657 = "・透明かそうでないかで動き方が違うぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 110) {
            Gvar.enemy_name = "カーズ";
            Gvar.enemy_power = 40;
            Gvar.enemy_defence = 23;
            Gvar.enemy_exp_point = 3000;
            Gvar.enemy_hp = 75;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 214;
            Gvar.enemy_description = "・２回連続で攻撃してくるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 111) {
            Gvar.enemy_name = "究極カーズ";
            Gvar.enemy_power = 70;
            Gvar.enemy_defence = 35;
            Gvar.enemy_exp_point = 4400;
            Gvar.enemy_hp = 100;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 215;
            Gvar.enemy_description = "・倍の速さで移動するぞ。";
            Gvar.var_1656 = "・壁があっても自由に動けるぞ。";
            Gvar.var_1657 = "・壁の中にいると普通の攻撃は効かないぞ。";
            Gvar.var_1658 = "・攻撃されると波紋で痺れることがあるぞ。";
        }
        if (Gvar.enemy_list == 112) {
            Gvar.enemy_name = "";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 113) {
            Gvar.enemy_name = "DIO";
            Gvar.enemy_power = 23;
            Gvar.enemy_defence = 22;
            Gvar.enemy_exp_point = 1400;
            Gvar.enemy_hp = 75;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 364;
            Gvar.enemy_description = "・時間を止めて自分だけ動くぞ。";
            Gvar.var_1656 = "・ジョセフを倒すとパワーアップするぞ。";
            Gvar.var_1657 = "・まれに何か投げるぞ。";
            Gvar.var_1658 = "・近くにいると階段を降りられないぞ。";
        }
        if (Gvar.enemy_list == 114) {
            Gvar.enemy_name = "最高にﾊｲなDIO";
            Gvar.enemy_power = 60;
            Gvar.enemy_defence = 34;
            Gvar.enemy_exp_point = 4000;
            Gvar.enemy_hp = 90;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 365;
            Gvar.enemy_description = "・さらに長く時間を止めるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 115) {
            Gvar.enemy_name = "ｱｸｱ･ﾈｯｸﾚｽ";
            Gvar.enemy_power = 14;
            Gvar.enemy_defence = 13;
            Gvar.enemy_exp_point = 120;
            Gvar.enemy_hp = 26;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 8; // スタンド・杜王町住人
            Gvar.var_1619 = 404;
            Gvar.enemy_description = "・霧になって他の場所へ瞬間移動するぞ。";
            Gvar.var_1656 = "・念写に写りこんでしまう事があるぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 116) {
            Gvar.enemy_name = "玉美";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 1;
            Gvar.enemy_exp_point = 1;
            Gvar.enemy_hp = 50;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 7; // 人間・杜王町住人
            Gvar.var_1619 = 430;
            Gvar.enemy_description = "・攻撃すると罪悪感でお金を奪われるぞ。";
            Gvar.var_1656 = "・すれ違っただけでもお金を奪われるぞ。";
            Gvar.var_1657 = "・お金がないと体が重くなってしまうぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 117) {
            Gvar.enemy_name = "ﾁｮｺﾗｰﾀの上半身";
            Gvar.enemy_power = 10;
            Gvar.enemy_defence = 10;
            Gvar.enemy_exp_point = 10;
            Gvar.enemy_hp = 10;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 524;
            Gvar.enemy_description = "・すばやい動きで逃げるぞ。";
            Gvar.var_1656 = "・倒すと「やばいクスリ」を落とす事があるぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 118) {
            Gvar.enemy_name = "ｸﾘｰﾑ";
            Gvar.enemy_power = 70;
            Gvar.enemy_defence = 35;
            Gvar.enemy_exp_point = 3300;
            Gvar.enemy_hp = 90;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 3; // スタンド
            Gvar.var_1619 = 362;
            Gvar.enemy_description = "・盲目状態で直線的に進むぞ。";
            Gvar.var_1656 = "・壁を飲み込みながら進むぞ。";
            Gvar.var_1657 = "・遠くにいてもガオンと近くに来るぞ。";
            Gvar.var_1658 = "・時々ｳﾞｧﾆﾗｱｲｽが顔を出して位置を確認するぞ。";
        }
        if (Gvar.enemy_list == 119) {
            Gvar.enemy_name = "ｼﾞｮｾﾌ"; // 3部
            Gvar.enemy_power = 9;
            Gvar.enemy_defence = 3;
            Gvar.enemy_exp_point = 90;
            Gvar.enemy_hp = 28;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 302;
            Gvar.enemy_description = "・スタンドで縛り付けて動けなくさせるぞ。";
            Gvar.var_1656 = "・攻撃されると波紋で痺れることがあるぞ。";
            Gvar.var_1657 = "・老化攻撃を受けると弱くなってしまうぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 120) {
            Gvar.enemy_name = "承太郎"; // 3部
            Gvar.enemy_power = 80;
            Gvar.enemy_defence = 30;
            Gvar.enemy_exp_point = 5000;
            Gvar.enemy_hp = 90;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 301;
            Gvar.enemy_description = "・頻繁に強烈な一撃を繰り出すぞ。";
            Gvar.var_1656 = "・強烈な一撃を喰らうと吹っ飛ぶぞ。";
            Gvar.var_1657 = "・ﾀﾞﾒｰｼﾞを受けると攻撃力が上がるぞ。";
            Gvar.var_1658 = "・特定のアイテムを持っているぞ。";
        }
        if (Gvar.enemy_list == 121) {
            Gvar.enemy_name = "花京院";
            Gvar.enemy_power = 26;
            Gvar.enemy_defence = 20;
            Gvar.enemy_exp_point = 1400;
            Gvar.enemy_hp = 45;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 304;
            Gvar.enemy_description = "・エメラルドスプラッシュを撃ってくるぞ。";
            Gvar.var_1656 = "・時々ニセモノが化けているぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 122) {
            Gvar.enemy_name = "ﾎﾟﾙﾅﾚﾌ"; // 3部
            Gvar.enemy_power = 25;
            Gvar.enemy_defence = 22;
            Gvar.enemy_exp_point = 1500;
            Gvar.enemy_hp = 50;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 305;
            Gvar.enemy_description = "・２回連続で攻撃してくるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 123) {
            Gvar.enemy_name = "ﾌﾞﾁｬﾗﾃｨ";
            Gvar.enemy_power = 22;
            Gvar.enemy_defence = 21;
            Gvar.enemy_exp_point = 900;
            Gvar.enemy_hp = 60;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 9; // 人間・裏切り者
            Gvar.var_1619 = 503;
            Gvar.enemy_description = "・２マス先まで攻撃が届くぞ。";
            Gvar.var_1656 = "・あいだに他の敵がいても攻撃が届くぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 124) {
            Gvar.enemy_name = "ﾐｽﾀ";
            Gvar.enemy_power = 30;
            Gvar.enemy_defence = 28;
            Gvar.enemy_exp_point = 2200;
            Gvar.enemy_hp = 55;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 9; // 人間・裏切り者
            Gvar.var_1619 = 505;
            Gvar.enemy_description = "・付かず離れず距離をとるぞ。";
            Gvar.var_1656 = "・フロア内のどこからでも弾丸を撃ってくるぞ。";
            Gvar.var_1657 = "・この弾丸は防御力の影響を受けないぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 125) {
            Gvar.enemy_name = "ﾌｰｺﾞ";
            Gvar.enemy_power = 19;
            Gvar.enemy_defence = 15;
            Gvar.enemy_exp_point = 320;
            Gvar.enemy_hp = 42;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 9; // 人間・裏切り者
            Gvar.var_1619 = 506;
            Gvar.enemy_description = "・ｳｨﾙｽで部屋の全員にﾀﾞﾒｰｼﾞを与えるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 126) {
            Gvar.enemy_name = "退院した花京院";
            Gvar.enemy_power = 45;
            Gvar.enemy_defence = 32;
            Gvar.enemy_exp_point = 2900;
            Gvar.enemy_hp = 60;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 350;
            Gvar.enemy_description = "・エメラルドスプラッシュを撃ってくるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 127) {
            Gvar.enemy_name = "C-MOON";
            Gvar.enemy_power = 5;
            Gvar.enemy_defence = 30;
            Gvar.enemy_exp_point = 3000;
            Gvar.enemy_hp = 75;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 3; // スタンド
            Gvar.var_1619 = 623;
            Gvar.enemy_description = "・隣接時に裏返り攻撃をしてくるぞ。";
            Gvar.var_1656 = "・ＨＰの減っている数値が残り数値になるぞ。";
            Gvar.var_1657 = "・ＨＰが満タンだと１になってしまうぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 128) {
            Gvar.enemy_name = "承太郎"; // 第4部の承太郎
            Gvar.enemy_power = 33;
            Gvar.enemy_defence = 23;
            Gvar.enemy_exp_point = 1800;
            Gvar.enemy_hp = 60;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 403;
            Gvar.enemy_description = "・ちょっとだけ時間を止めるぞ。";
            Gvar.var_1656 = "・特定のアイテムを落とすぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 129) {
            Gvar.enemy_name = "ｱﾇﾋﾞｽﾎﾟﾙﾅﾚﾌ";
            Gvar.enemy_power = 50;
            Gvar.enemy_defence = 28;
            Gvar.enemy_exp_point = 3200;
            Gvar.enemy_hp = 65;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 346;
            Gvar.enemy_description = "・２回連続で攻撃してくるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 130) {
            Gvar.enemy_name = "ﾏﾘﾘﾝﾏﾝｿﾝ";
            Gvar.enemy_power = 10;
            Gvar.enemy_defence = 1;
            Gvar.enemy_exp_point = 1;
            Gvar.enemy_hp = 1;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 3; // スタンド
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 131) {
            Gvar.enemy_name = "ｼﾞｮﾙﾉ";
            Gvar.enemy_power = 14;
            Gvar.enemy_defence = 14;
            Gvar.enemy_exp_point = 135;
            Gvar.enemy_hp = 25;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 9; // 人間・裏切り者
            Gvar.var_1619 = 501;
            Gvar.enemy_description = "・アイテムをカエルに変化させるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 132) {
            Gvar.enemy_name = "ﾚｸｲｴﾑｼﾞｮﾙﾉ";
            Gvar.enemy_power = 25;
            Gvar.enemy_defence = 23;
            Gvar.enemy_exp_point = 1500;
            Gvar.enemy_hp = 300;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 1;
            Gvar.var_972 = 9; // 人間・裏切り者
            Gvar.var_1619 = 527;
            Gvar.enemy_description = "・攻撃を受けると状態異常がすべて元に戻るぞ。";
            Gvar.var_1656 = "・状態異常の他にもいろいろ元に戻すぞ。";
            Gvar.var_1657 = "・離れているとサソリを飛ばしてくるぞ。";
            Gvar.var_1658 = "・ダンジョンの主だぞ。";
        }
        if (Gvar.enemy_list == 133) {
            Gvar.enemy_name = "ｳﾞｧﾆﾗｱｲｽ";
            Gvar.enemy_power = 40;
            Gvar.enemy_defence = 30;
            Gvar.enemy_exp_point = 2000;
            Gvar.enemy_hp = 90;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 361;
            Gvar.enemy_description = "・攻撃を受けるとｸﾘｰﾑの中に入ってしまうぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 134) {
            Gvar.enemy_name = "ｼﾞｮﾘｰﾝ";
            Gvar.enemy_power = 13;
            Gvar.enemy_defence = 7;
            Gvar.enemy_exp_point = 88;
            Gvar.enemy_hp = 25;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 601;
            Gvar.enemy_description = "・近くに怪我をした敵がいると治しに行くぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 135) {
            Gvar.enemy_name = "若ｼﾞｮｾﾌ";
            Gvar.enemy_power = 19;
            Gvar.enemy_defence = 20;
            Gvar.enemy_exp_point = 390;
            Gvar.enemy_hp = 30;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 201;
            Gvar.enemy_description = "・付かず離れず距離をとってくるぞ。";
            Gvar.var_1656 = "・地面に罠を仕掛けるぞ。";
            Gvar.var_1657 = "・攻撃されると波紋で痺れることがあるぞ。";
            Gvar.var_1658 = "・老化攻撃を受けると弱くなってしまうぞ。";
        }
        if (Gvar.enemy_list == 136) {
            Gvar.enemy_name = "ｼｰｻﾞｰ";
            Gvar.enemy_power = 15;
            Gvar.enemy_defence = 12;
            Gvar.enemy_exp_point = 180;
            Gvar.enemy_hp = 42;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 207;
            Gvar.enemy_description = "・波紋を帯びたシャボンを発射してくるぞ。";
            Gvar.var_1656 = "・あたると痺れることがあるぞ。";
            Gvar.var_1657 = "・攻撃されても波紋で痺れることがあるぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 137) {
            Gvar.enemy_name = "成長した吉良";
            Gvar.enemy_power = 58;
            Gvar.enemy_defence = 33;
            Gvar.enemy_exp_point = 3300;
            Gvar.enemy_hp = 65;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 7; // 人間・杜王町住人
            Gvar.var_1619 = 447;
            Gvar.enemy_description = "・アイテムを爆弾にしてくるぞ。";
            Gvar.var_1656 = "・落ちているアイテムも爆弾に変えるぞ。";
            Gvar.var_1657 = "・仲間を呼び出すぞ。";
            Gvar.var_1658 = "・瀕死になると第3の爆弾を使うぞ。";
        }
        if (Gvar.enemy_list == 138) {
            Gvar.enemy_name = "ﾃﾞｨｵ･ﾌﾞﾗﾝﾄﾞｰ";
            Gvar.enemy_power = 13;
            Gvar.enemy_defence = 8;
            Gvar.enemy_exp_point = 100;
            Gvar.enemy_hp = 25;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 102;
            Gvar.enemy_description = "・殴ると凍ってしまうことがあるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 139) {
            Gvar.enemy_name = "ﾘｻﾘｻ";
            Gvar.enemy_power = 45;
            Gvar.enemy_defence = 24;
            Gvar.enemy_exp_point = 2800;
            Gvar.enemy_hp = 50;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 211;
            Gvar.enemy_description = "・ヒラリと攻撃をかわしやすいぞ。";
            Gvar.var_1656 = "・殴ると波紋で痺れることがあるぞ。";
            Gvar.var_1657 = "・殴られても痺れることがあるぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 140) {
            Gvar.enemy_name = "ｼﾞｮﾅｻﾝ";
            Gvar.enemy_power = 15;
            Gvar.enemy_defence = 11;
            Gvar.enemy_exp_point = 120;
            Gvar.enemy_hp = 30;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 101;
            Gvar.enemy_description = "・攻撃時に波紋で痺れさせることがあるぞ。";
            Gvar.var_1656 = "・ズームパンチで２マス先まで攻撃するぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 141) {
            Gvar.enemy_name = "F・F";
            Gvar.enemy_power = 11;
            Gvar.enemy_defence = 6;
            Gvar.enemy_exp_point = 72;
            Gvar.enemy_hp = 18;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 603;
            Gvar.enemy_description = "・ＦＦの弾丸を撃ってくるぞ。";
            Gvar.var_1656 = "・弾丸が他の敵に当たると体力が回復するぞ。";
            Gvar.var_1657 = "・熱湯に弱いぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 142) {
            Gvar.enemy_name = "露伴";
            Gvar.enemy_power = 10;
            Gvar.enemy_defence = 10;
            Gvar.enemy_exp_point = 1;
            Gvar.enemy_hp = 20;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 4; // 味方
            Gvar.var_1619 = 439;
            Gvar.enemy_description = "・「ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨのDISC」を探しているぞ。";
            Gvar.var_1656 = "・岸辺露伴は動かないぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 143) {
            Gvar.enemy_name = "ウンガロ";
            Gvar.enemy_power = 5;
            Gvar.enemy_defence = 30;
            Gvar.enemy_exp_point = 10;
            Gvar.enemy_hp = 500;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 1;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 619;
            Gvar.enemy_description = "・付かず離れず距離をとるぞ。";
            Gvar.var_1656 = "・マンガのキャラクターを呼び出すぞ。";
            Gvar.var_1657 = "・自分は攻撃しないぞ。";
            Gvar.var_1658 = "・ダンジョンの主だぞ。";
        }
        if (Gvar.enemy_list == 144) {
            Gvar.enemy_name = "川尻浩作";
            Gvar.enemy_power = 32;
            Gvar.enemy_defence = 22;
            Gvar.enemy_exp_point = 1700;
            Gvar.enemy_hp = 50;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 7; // 人間・杜王町住人
            Gvar.var_1619 = 444;
            Gvar.enemy_description = "・他人のお金を盗むぞ。";
            Gvar.var_1656 = "・なんてロマンチックなの……";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 145) {
            Gvar.enemy_name = "康一";
            Gvar.enemy_power = 16;
            Gvar.enemy_defence = 16;
            Gvar.enemy_exp_point = 280;
            Gvar.enemy_hp = 30;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 7; // 人間・杜王町住人
            Gvar.var_1619 = 412;
            Gvar.enemy_description = "・付かず離れず距離をとってくるぞ。";
            Gvar.var_1656 = "・３種類のエコーズを呼び出すぞ。";
            Gvar.var_1657 = "・隣接すると重くなる攻撃をしてくるぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 146) {
            Gvar.enemy_name = "ﾁｬﾘｵｯﾂ";
            Gvar.enemy_power = 30;
            Gvar.enemy_defence = 1;
            Gvar.enemy_exp_point = 40;
            Gvar.enemy_hp = 1;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 3; // スタンド
            Gvar.var_1619 = 306;
            Gvar.enemy_description = "・分身したチャリオッツだ。";
            Gvar.var_1656 = "・一撃喰らうと消えてしまうぞ。";
            Gvar.var_1657 = "・５ターンで消えてしまうぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 147) {
            Gvar.enemy_name = "ｼﾞｮｾﾌ"; // 4部
            Gvar.enemy_power = 1;
            Gvar.enemy_defence = 2;
            Gvar.enemy_exp_point = 3;
            Gvar.enemy_hp = 6;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 7; // 人間・杜王町住人
            Gvar.var_1619 = 438;
            Gvar.enemy_description = "・フラフラと歩くぞ。";
            Gvar.var_1656 = "・攻撃してこないぞ。";
            Gvar.var_1657 = "・多分ボケちゃっているぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 148) {
            Gvar.enemy_name = "ｴﾙﾒｪｽ";
            Gvar.enemy_power = 12;
            Gvar.enemy_defence = 10;
            Gvar.enemy_exp_point = 110;
            Gvar.enemy_hp = 27;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 602;
            Gvar.enemy_description = "・地面にキッスのシールを貼るぞ。";
            Gvar.var_1656 = "・他の敵がシールに触れると分裂するぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 149) {
            Gvar.enemy_name = "";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 150) {
            Gvar.enemy_name = "康一act2!!";
            Gvar.enemy_power = 30;
            Gvar.enemy_defence = 22;
            Gvar.enemy_exp_point = 1600;
            Gvar.enemy_hp = 40;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 7; // 人間・杜王町住人
            Gvar.var_1619 = 413;
            Gvar.enemy_description = "・３種類のエコーズを呼び出すぞ。";
            Gvar.var_1656 = "・杜王町の仲間を呼び出すぞ。";
            Gvar.var_1657 = "・隣接すると重くなる攻撃をしてくるぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 151) {
            Gvar.enemy_name = "虫喰い";
            Gvar.enemy_power = 34;
            Gvar.enemy_defence = 1;
            Gvar.enemy_exp_point = 1500;
            Gvar.enemy_hp = 10;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 6; // 動物・杜王町住人
            Gvar.var_1619 = 440;
            Gvar.enemy_description = "・毒針を発射してくるぞ。";
            Gvar.var_1656 = "・刺さるとスタンドが溶けて弱まるぞ。";
            Gvar.var_1657 = "・オーラで強くなっているとオーラが消えるぞ。";
            Gvar.var_1658 = "・すばやく動いているぞ。";
        }
        if (Gvar.enemy_list == 152) {
            Gvar.enemy_name = "ﾄﾘｯｼｭ";
            Gvar.enemy_power = 24;
            Gvar.enemy_defence = 24;
            Gvar.enemy_exp_point = 1000;
            Gvar.enemy_hp = 40;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 9; // 人間・裏切り者
            Gvar.var_1619 = 508;
            Gvar.enemy_description = "・柔らかくなってﾀﾞﾒｰｼﾞを受けない事があるぞ。";
            Gvar.var_1656 = "・柔らかいと後ろに弾んでしまうぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 153) {
            Gvar.enemy_name = "ﾏｯｸｲｨｰﾝ";
            Gvar.enemy_power = 20;
            Gvar.enemy_defence = 15;
            Gvar.enemy_exp_point = 2000;
            Gvar.enemy_hp = 80;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 608;
            Gvar.enemy_description = "・付かず離れず距離をとるぞ。";
            Gvar.var_1656 = "・道連れ攻撃で、離れていても攻撃してくるぞ。";
            Gvar.var_1657 = "・ダメージを与えると反射するぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 154) {
            Gvar.enemy_name = "ｽﾎﾟｰﾂﾏｯｸｽ";
            Gvar.enemy_power = 40;
            Gvar.enemy_defence = 25;
            Gvar.enemy_exp_point = 2900;
            Gvar.enemy_hp = 60;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 613;
            Gvar.enemy_description = "・透明で姿が見えないぞ。";
            Gvar.var_1656 = "・今まで出現した敵を透明にして呼び出すぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 155) {
            Gvar.enemy_name = "ﾏﾗｲｱ";
            Gvar.enemy_power = 23;
            Gvar.enemy_defence = 21;
            Gvar.enemy_exp_point = 1400;
            Gvar.enemy_hp = 45;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 347;
            Gvar.enemy_description = "・付かず離れず距離をとるぞ。";
            Gvar.var_1656 = "・バステト女神の罠を設置するぞ。";
            Gvar.var_1657 = "・ボルトやナットを飛ばしてくるぞ。";
            Gvar.var_1658 = "・磁力がアップしているとダメージが増えるぞ。";
        }
        if (Gvar.enemy_list == 156) {
            Gvar.enemy_name = "ｳｪｻﾞｰ";
            Gvar.enemy_power = 28;
            Gvar.enemy_defence = 25;
            Gvar.enemy_exp_point = 1600;
            Gvar.enemy_hp = 60;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 610;
            Gvar.enemy_description = "・弾丸が燃え尽きて届かないぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 157) {
            Gvar.enemy_name = "ｱﾅｽｲ";
            Gvar.enemy_power = 29;
            Gvar.enemy_defence = 21;
            Gvar.enemy_exp_point = 1500;
            Gvar.enemy_hp = 55;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 614;
            Gvar.enemy_description = "・同じ部屋にいると壁を通して攻撃するぞ。";
            Gvar.var_1656 = "・収納アイテムやヤバイものを壊してくるぞ";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 158) {
            Gvar.enemy_name = "ﾌﾟｯﾂﾝ由花子";
            Gvar.enemy_power = 26;
            Gvar.enemy_defence = 21;
            Gvar.enemy_exp_point = 1700;
            Gvar.enemy_hp = 45;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 7; // 人間・杜王町住人
            Gvar.var_1619 = 434;
            Gvar.enemy_description = "・髪の毛を飛ばしてくるぞ。";
            Gvar.var_1656 = "・刺さると思うように動けなくなるぞ。";
            Gvar.var_1657 = "・ｽﾀﾝﾄﾞDISCに呪縛をかけてくるぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 159) {
            Gvar.enemy_name = "記憶が戻ったｳｪｻﾞｰ";
            Gvar.enemy_power = 65;
            Gvar.enemy_defence = 30;
            Gvar.enemy_exp_point = 3400;
            Gvar.enemy_hp = 60;
            Gvar.var_1637 = 1;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 621;
            Gvar.enemy_description = "・弾丸が燃え尽きて届かないぞ。";
            Gvar.var_1656 = "・攻撃を喰らうと周囲に血の槍を作るぞ。";
            Gvar.var_1657 = "・カタツムリを呼び出すぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 160) {
            Gvar.enemy_name = "ｳｴｽﾄｳｯﾄﾞ看守";
            Gvar.enemy_power = 27;
            Gvar.enemy_defence = 23;
            Gvar.enemy_exp_point = 1000;
            Gvar.enemy_hp = 70;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 615;
            Gvar.enemy_description = "・掴んで動けなくさせるぞ。";
            Gvar.var_1656 = "・掴んでいると隕石を落とすことがあるぞ。";
            Gvar.var_1657 = "・この隕石は防御力の影響を受けないぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 161) {
            Gvar.enemy_name = "橋沢育郎";
            Gvar.enemy_power = 1;
            Gvar.enemy_defence = 35;
            Gvar.enemy_exp_point = 1000;
            Gvar.enemy_hp = 100;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 801;
            Gvar.enemy_description = "・攻撃を受けるとバオーに変身するぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 162) {
            Gvar.enemy_name = "バオー";
            Gvar.enemy_power = 100;
            Gvar.enemy_defence = 35;
            Gvar.enemy_exp_point = 6000;
            Gvar.enemy_hp = 100;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 10;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 802;
            Gvar.enemy_description = "・２回連続で攻撃するぞ。";
            Gvar.var_1656 = "";
        }
        if (Gvar.enemy_list == 163) {
            Gvar.enemy_name = "ﾔｸ中の少年";
            Gvar.enemy_power = 1;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 1;
            Gvar.enemy_hp = 1;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 1;
            Gvar.var_972 = 4; // 味方
            Gvar.var_1619 = 509;
            Gvar.enemy_description = "・フラフラと歩いているぞ。";
            Gvar.var_1656 = "・ぶん殴ると「やばいクスリ」を落とすぞ。";
            Gvar.var_1657 = "・中にブチャラティが入っているぞ。";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 164) {
            Gvar.enemy_name = "ｴｼﾃﾞｨｼの脳";
            Gvar.enemy_power = 28;
            Gvar.enemy_defence = 80;
            Gvar.enemy_exp_point = 5;
            Gvar.enemy_hp = 5;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 2; // 吸血鬼
            Gvar.var_1619 = 209;
            Gvar.enemy_description = "・他の敵に取り付いてレベルを上げるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 165) {
            Gvar.enemy_name = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙ";
            Gvar.enemy_power = 9;
            Gvar.enemy_defence = 40;
            Gvar.enemy_exp_point = 5;
            Gvar.enemy_hp = 5;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 3; // スタンド
            Gvar.var_1619 = 313;
            Gvar.enemy_description = "・他の敵に乗り移ってレベルを上げるぞ。";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 166) {
            Gvar.enemy_name = "お母さんヤギ";
            Gvar.enemy_power = 90;
            Gvar.enemy_defence = 10;
            Gvar.enemy_exp_point = 10;
            Gvar.enemy_hp = 45;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 3; // スタンド
            Gvar.var_1619 = 620;
            Gvar.enemy_description = "・物語の中から現れたヤギだ。";
            Gvar.var_1656 = "・付かず離れず距離をとるぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 167) { // Ver0.1401にて追加。
            Gvar.enemy_name = "影DIO";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 168) {
            Gvar.enemy_name = "警備員の西戸";
            Gvar.enemy_power = 80;
            Gvar.enemy_defence = 40;
            Gvar.enemy_exp_point = 100;
            Gvar.enemy_hp = 70;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 3;
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 804;
            Gvar.enemy_description = "・オレはこのデパートの影の支配者だ！";
            Gvar.var_1656 = "  悪さをするヤツはゆるさねえ！";
            Gvar.var_1657 = "・ウワハハハハハ！";
            Gvar.var_1658 = "・クチャ  クチャ    ペッ";
        }
        if (Gvar.enemy_list == 169) { // Ver0.1401にて追加。
            Gvar.enemy_name = "ナランチャ";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 170) {
            Gvar.enemy_name = "カタツムリ";
            Gvar.enemy_power = 1;
            Gvar.enemy_defence = 1;
            Gvar.enemy_exp_point = 1;
            Gvar.enemy_hp = 1;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 999;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 622;
            Gvar.enemy_description = "・触られると鈍足になってしまうぞ。";
            Gvar.var_1656 = "・見えなければ大丈夫だぞ。";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 171) { // Ver0.1401にて追加。
            Gvar.enemy_name = "離婚した承太郎";
            Gvar.enemy_power = 80;
            Gvar.enemy_defence = 40;
            Gvar.enemy_exp_point = 1000;
            Gvar.enemy_hp = 500;
            Gvar.var_1637 = 1; // 攻撃モーションにスタンド像を付与するフラグON
            Gvar.var_1654 = 1; // 1 = 必ず落とす
            Gvar.var_972 = 1; // 人間
            Gvar.var_1619 = 626; // 626はエンポリオ(ウェザー付)敵図鑑の並び
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "・ダンジョンの主だぞ。";
        }
        if (Gvar.enemy_list == 172) {
            Gvar.enemy_name = "虫食いでない";
            Gvar.enemy_power = 34;
            Gvar.enemy_defence = 1;
            Gvar.enemy_exp_point = 1000;
            Gvar.enemy_hp = 10;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 20;
            Gvar.var_972 = 6; // 動物・杜王町住人
            Gvar.var_1619 = 439;
            Gvar.enemy_description = "・近づくと毒針を発射してくるぞ。";
            Gvar.var_1656 = "・刺さるとスタンドが溶けて弱まるぞ。";
            Gvar.var_1657 = "・オーラで強くなっているとオーラが消えるぞ。";
            Gvar.var_1658 = "・移動しないぞ。";
        }
        if (Gvar.enemy_list == 173) { // Ver0.1401にて追加。
            Gvar.enemy_name = "ロッコ・バロッコ所長";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 174) {
            Gvar.enemy_name = ""; // 不明
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 175) { // Ver0.1401にて追加。
            Gvar.enemy_name = "涙目のルカ";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 176) {
            Gvar.enemy_name = "杉本鈴美";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 177) { // Ver0.1401にて追加。
            Gvar.enemy_name = "スクアーロ"; // クラッシュの本体
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 178) { // Ver0.1401にて追加。
            Gvar.enemy_name = "ティッツァーノ"; // トーキング・ヘッドの本体
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 179) { // Ver0.1401にて追加。
            Gvar.enemy_name = "ﾎﾙﾏｼﾞｵ";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 180) { // Ver0.1401にて追加。
            Gvar.enemy_name = "ﾃﾞｯﾄﾞﾏﾝｽﾞ 吉良";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 181) { // Ver0.1401にて追加。
            Gvar.enemy_name = "サーレー"; // クラフトワークの本体
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 182) { // Ver0.1401にて追加。
            Gvar.enemy_name = "リキエル"; // スカイ・ハイの本体
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 183) {
            Gvar.enemy_name = "謎の卵";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 184) {
            Gvar.enemy_name = "ﾐｭｰﾐｭｰ";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 185) {
            Gvar.enemy_name = "ｳﾞｧﾚﾝﾀｲﾝ大統領";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 186) {
            Gvar.enemy_name = "恐竜";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 187) {
            Gvar.enemy_name = "大柳賢"; // ボーイⅡマンの本体
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 188) {
            Gvar.enemy_name = "ｼﾙﾊﾞｰﾁｬﾘｵｯﾂﾚｸｲｴﾑ";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 189) {
            Gvar.enemy_name = "";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 190) {
            Gvar.enemy_name = "辻彩"; // シンデレラの本体
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 191) {
            Gvar.enemy_name = "ポルナレフさん";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 192) {
            Gvar.enemy_name = "黒い絵の幽霊";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 193) {
            Gvar.enemy_name = "メローネ";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 194) {
            Gvar.enemy_name = "グェス";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 195) {
            Gvar.enemy_name = "グーグー・ドールズ";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 196) {
            Gvar.enemy_name = "ﾃﾞｨｴｺﾞ･ﾌﾞﾗﾝﾄﾞｰ";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 197) {
            Gvar.enemy_name = "平行世界のDIO";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 198) {
            Gvar.enemy_name = "";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 199) {
            Gvar.enemy_name = "";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        if (Gvar.enemy_list == 200) {
            Gvar.enemy_name = "";
            Gvar.enemy_power = 0;
            Gvar.enemy_defence = 0;
            Gvar.enemy_exp_point = 0;
            Gvar.enemy_hp = 0;
            Gvar.var_1637 = 0;
            Gvar.var_1654 = 0;
            Gvar.var_972 = 0;
            Gvar.var_1619 = 0;
            Gvar.enemy_description = "";
            Gvar.var_1656 = "";
            Gvar.var_1657 = "";
            Gvar.var_1658 = "";
        }
        return;
}

export {func626}
