import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func101
async function func101(this: any) {
        Adap.dbgprt(101);
        if (Gvar.bgm_list_id == 0) {
            Gvar.bgm_file_name = "0.mp3"; // ダンジョン基本BGM
        }
        if (Gvar.bgm_list_id == 100) {
            Gvar.bgm_file_name = "116.mp3"; //ハーミットパープル
            Gvar.bgm_title = "The Beatles [Get Back]";
        }
        if (Gvar.bgm_list_id == 101) {
            Gvar.bgm_file_name = "101.mp3";
            Gvar.bgm_title = "Michel Polnareff [Tout tout pour ma cherie]";
        }
        if (Gvar.bgm_list_id == 102) {
            Gvar.bgm_file_name = "099.mp3";
            Gvar.bgm_title = "King Crimson [RED]";
        }
        if (Gvar.bgm_list_id == 103) {
            Gvar.bgm_file_name = "103.mp3";
            Gvar.bgm_title = "Pink Floyd [Echoes]";
        }
        if (Gvar.bgm_list_id == 104) {
            Gvar.bgm_file_name = "104.mp3";
            Gvar.bgm_title = "The Band [The Night They Drove Old Dixie Down]";
        }
        if (Gvar.bgm_list_id == 105) {
            Gvar.bgm_file_name = "105.mp3";
            Gvar.bgm_title = "Red Hot Chili Peppers [Give It Away]";
        }
        if (Gvar.bgm_list_id == 106) {
            Gvar.bgm_file_name = "106.mp3";
            Gvar.bgm_title = "Pink Floyd [Shine on You Crasy Diamond]";
        }
        if (Gvar.bgm_list_id == 107) {
            Gvar.bgm_file_name = "107.mp3";
            Gvar.bgm_title = "The Beatles [Good Night]";
        }
        if (Gvar.bgm_list_id == 108) {
            Gvar.bgm_file_name = "108.mp3";
            Gvar.bgm_title = "The Rolling Stones [Brown Sugar] (album[Sticky Fingers])";
        }
        if (Gvar.bgm_list_id == 109) {
            Gvar.bgm_file_name = "109.mp3";
            Gvar.bgm_title = "Paula Abdul [Forever Your Girl]";
        }
        if (Gvar.bgm_list_id == 110) {  // Ver0.1401にて追加。B･D･ザ･ハウスのDISC
            Gvar.bgm_file_name = "";
            Gvar.bgm_title = "";
        }
        if (Gvar.bgm_list_id == 111) {
            Gvar.bgm_file_name = "111.mp3";
            Gvar.bgm_title = "DIO [I Speed At Night]";
        }
        if (Gvar.bgm_list_id == 112) {
            Gvar.bgm_file_name = "112.mp3";
            Gvar.bgm_title = "Queen [Killer Queen]";
        }
        if (Gvar.bgm_list_id == 113) {
            Gvar.bgm_file_name = "113.mp3";
            Gvar.bgm_title = "The Clash [Rock The Casbah]";
        }
        if (Gvar.bgm_list_id == 114) {
            Gvar.bgm_file_name = "114.mp3";
            Gvar.bgm_title = "White Snake [Love Aint No Stranger]";
        }
        if (Gvar.bgm_list_id == 115) {
            Gvar.bgm_file_name = "115.mp3";
            Gvar.bgm_title = "Prince [Gold](album[Gold Experience])";
        }
        if (Gvar.bgm_list_id == 116) {
            Gvar.bgm_file_name = "116.mp3";
            Gvar.bgm_title = "The Beatles [Get Back]";
        }
        if (Gvar.bgm_list_id == 117) {
            Gvar.bgm_file_name = "117.mp3";
            Gvar.bgm_title = "Captain & Tennille [Love Will Keep Us Together]";
        }
        if (Gvar.bgm_list_id == 118) {
            Gvar.bgm_file_name = "118.mp3";
            Gvar.bgm_title = "Van Halen [Pretty Woman](album[DIVER DOWN])";
        }
        if (Gvar.bgm_list_id == 119) {
            Gvar.bgm_file_name = "119.mp3";
            Gvar.bgm_title = "Spice Girls [Wannabe]";
        }
        if (Gvar.bgm_list_id == 120) {
            Gvar.bgm_file_name = "120.mp3";
            Gvar.bgm_title = "Dolly Parton [Jolene]";
        }
        if (Gvar.bgm_list_id == 121) {
            Gvar.bgm_file_name = "121.mp3";
            Gvar.bgm_title = "JIMI HENDRIX [Purple Haze]";
        }
        if (Gvar.bgm_list_id == 122) {
            Gvar.bgm_file_name = "122.mp3";
            Gvar.bgm_title = "Chaka Khan [Aint Nobody]";
        }
        if (Gvar.bgm_list_id == 123) {
            Gvar.bgm_file_name = "123.mp3";
            Gvar.bgm_title = "Cream [Crossroads]";
        }
        if (Gvar.bgm_list_id == 124) {
            Gvar.bgm_file_name = "124.mp3";
            Gvar.bgm_title = "Moody Blues [I Know Your Out There Somewhere]";
        }
        if (Gvar.bgm_list_id == 200) {
            Gvar.bgm_file_name = "200.mp3";
            Gvar.bgm_title = "Curtis Mayfield [Superfly]";
        }
        if (Gvar.bgm_list_id == 201) {
            Gvar.bgm_file_name = "201.mp3";
            Gvar.bgm_title = "The Beatles [Girl] (album [RUBBER SOUL])";
        }
        if (Gvar.bgm_list_id == 202) {
            Gvar.bgm_file_name = "202.mp3";
            Gvar.bgm_title = "The Beatles [While My Guiter Gentry Weeps]";
        }
        if (Gvar.bgm_list_id == 203) {
            Gvar.bgm_file_name = "203.mp3";
            Gvar.bgm_title = "Iggy Pop [The Passengers]";
        }
        if (Gvar.bgm_list_id == 204) {
            Gvar.bgm_file_name = "204.mp3";
            Gvar.bgm_title = "Queen [Sheer Heart Attack]";
        }
        if (Gvar.bgm_list_id == 205) {
            Gvar.bgm_file_name = "205.mp3";
            Gvar.bgm_title = "Kraftwerk [The Gvar.model]";
        }
        if (Gvar.bgm_list_id == 206) {
            Gvar.bgm_file_name = "206.mp3";
            Gvar.bgm_title = "OASIS [Wonderwall]";
        }
        if (Gvar.bgm_list_id == 207) {
            Gvar.bgm_file_name = "207.mp3";
            Gvar.bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (Gvar.bgm_list_id == 208) { // Ver0.1401にて追加。C-MOONのDISC
            Gvar.bgm_file_name = "207.mp3";
            Gvar.bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (Gvar.bgm_list_id == 250) { // Ver0.1401にて追加。オー!ロンサム・ミー
            Gvar.bgm_file_name = "207.mp3";
            Gvar.bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (Gvar.bgm_list_id == 251) { // Ver0.1401にて追加。シビル・ウォー
            Gvar.bgm_file_name = "207.mp3";
            Gvar.bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (Gvar.bgm_list_id == 252) { // Ver0.1401にて追加。クリーム・スターター
            Gvar.bgm_file_name = "207.mp3";
            Gvar.bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (Gvar.bgm_list_id == 253) { // Ver0.1401にて追加。スケアリー・モンスターズ
            Gvar.bgm_file_name = "207.mp3";
            Gvar.bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (Gvar.bgm_list_id == 254) { // Ver0.1401にて追加。C・ザ・レインボー
            Gvar.bgm_file_name = "207.mp3";
            Gvar.bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (Gvar.bgm_list_id == 255) { // Ver0.1401にて追加。イン・ア・サイレント・ウェイ
            Gvar.bgm_file_name = "207.mp3";
            Gvar.bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (Gvar.bgm_list_id == 256) { // Ver0.1401にて追加。チョコレイト・ディスコ
            Gvar.bgm_file_name = "207.mp3";
            Gvar.bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (Gvar.bgm_list_id == 257) { // Ver0.1401にて追加。T・O・T・B ワン
            Gvar.bgm_file_name = "207.mp3";
            Gvar.bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (Gvar.bgm_list_id == 258) { // Ver0.1401にて追加。ボールブレイカー&スキャン
            Gvar.bgm_file_name = "207.mp3";
            Gvar.bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (Gvar.bgm_list_id == 259) { // Ver0.1401にて追加。TATOO YOU!
            Gvar.bgm_file_name = "207.mp3";
            Gvar.bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (Gvar.bgm_list_id == 260) { // Ver0.1401にて追加。20th Century Boy
            Gvar.bgm_file_name = "207.mp3";
            Gvar.bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (Gvar.bgm_list_id == 261) { // Ver0.1401にて追加。D4C
            Gvar.bgm_file_name = "207.mp3";
            Gvar.bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (Gvar.bgm_list_id == 262) { // Ver0.1401にて追加。タスクact4
            Gvar.bgm_file_name = "207.mp3";
            Gvar.bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (Gvar.bgm_list_id == 263) { // Ver0.1401にて追加。D4Cラブトレイン
            Gvar.bgm_file_name = "207.mp3";
            Gvar.bgm_title = "The Grateful Dead [Dark Star]";
        }
        if (Gvar.bgm_list_id == 300) {
            Gvar.bgm_file_name = "300.mp3";
            Gvar.bgm_title = "Pearl jam [Alive]";
        }
        if (Gvar.bgm_list_id == 301) {
            Gvar.bgm_file_name = "301.mp3";
            Gvar.bgm_title = "Neil Young [Heart of Gold](albam[HARVEST])";
        }
        if (Gvar.bgm_list_id == 302) {
            Gvar.bgm_file_name = "302.mp3";
            Gvar.bgm_title = "AC/DC [Highway To Hell]";
        }
        if (Gvar.bgm_list_id == 303) {
            Gvar.bgm_file_name = "303.mp3";
            Gvar.bgm_title = "[Enter the Dragon] ";
        }
        if (Gvar.bgm_list_id == 304) {
            Gvar.bgm_file_name = "304.mp3";
            Gvar.bgm_title = "Weather Report [Birdland]";
        }
        if (Gvar.bgm_list_id == 305) {
            Gvar.bgm_file_name = "305.mp3";
            Gvar.bgm_title = "Cinderella [Gypsyroad]";
        }
        if (Gvar.bgm_list_id == 306) {
            Gvar.bgm_file_name = "306.mp3";
            Gvar.bgm_title = "Manhattan Transfer [Boy from NewYork City]";
        }
        if (Gvar.bgm_list_id == 307) { // Ver0.1401にて追加。リトル・フィートのDISC
            Gvar.bgm_file_name = "";
            Gvar.bgm_title = "";
        }
        if (Gvar.bgm_list_id == 308) {
            Gvar.bgm_file_name = "308.mp3";
            Gvar.bgm_title = "Devo [Beautiful World]";
        }
        if (Gvar.bgm_list_id == 309) { // Ver0.1401にて追加。ソフト・マシーンのDISC
            Gvar.bgm_file_name = "309.mp3";
            Gvar.bgm_title = "Soft Machine [Facelift]";
        }
        if (Gvar.bgm_list_id == 310) {
            Gvar.bgm_file_name = "310.mp3";
            Gvar.bgm_title = "Nena [99 luftballons]";
        }
        if (Gvar.bgm_list_id == 311) {
            Gvar.bgm_file_name = "311.mp3";
            Gvar.bgm_title = "Cheap Trick [Dream Police]";
        }
        if (Gvar.bgm_list_id == 312) {
            Gvar.bgm_file_name = "312.mp3";
            Gvar.bgm_title = "Aerosmith [Walk This Way]";
        }
        if (Gvar.bgm_list_id == 313) {
            Gvar.bgm_file_name = "313.mp3";
            Gvar.bgm_title = "Deep Purple [Highway Star]";
        }
        if (Gvar.bgm_list_id == 314) {
            Gvar.bgm_file_name = "314.mp3";
            Gvar.bgm_title = "Stray Cats [Stray Cat Strut]";
        }
        if (Gvar.bgm_list_id == 315) {
            Gvar.bgm_file_name = "315.mp3";
            Gvar.bgm_title = "King Crimson [Epitaph]";
        }
        if (Gvar.bgm_list_id == 316) {
            Gvar.bgm_file_name = "316.mp3";
            Gvar.bgm_title = "Survivor [Eye of the Tiger]";
        }
        if (Gvar.bgm_list_id == 317) {
            Gvar.bgm_file_name = "317.mp3";
            Gvar.bgm_title = "Kiss [Detroit Rock City]";
        }
        if (Gvar.bgm_list_id == 318) {
            Gvar.bgm_file_name = "318.mp3";
            Gvar.bgm_title = "The Rolling Stones [Jumpin' Jack Flash ]";
        }
        if (Gvar.bgm_list_id == 319) {
            Gvar.bgm_file_name = "319.mp3";
            Gvar.bgm_title = "Boyz II Men [End of the Road]";
        }
        if (Gvar.bgm_list_id == 320) {
            Gvar.bgm_file_name = "320.mp3";
            Gvar.bgm_title = "Metallica [ATTITUDE]";
        }
        if (Gvar.bgm_list_id == 393) {
            Gvar.bgm_file_name = "990.mp3";
            Gvar.bgm_title = "Queen [Bohemian Rhapsody]";
        }
        if (Gvar.bgm_list_id == 394) {
            Gvar.bgm_file_name = "112.mp3";
            Gvar.bgm_title = "Queen [Killer Queen]";
        }
        if (Gvar.bgm_list_id == 395) {
            Gvar.bgm_file_name = "395.mp3";
            Gvar.bgm_title = "Queen [Another One Bite the Dust]";
        }
        if (Gvar.bgm_list_id == 396) {
            Gvar.bgm_file_name = "396.mp3";
            Gvar.bgm_title = "Led Zeppelin [Stairway To Heaven]";
        }
        if (Gvar.bgm_list_id == 397) {
            Gvar.bgm_file_name = "304.mp3";
            Gvar.bgm_title = "Weather Report [Birdland] (album[HEAVY WEATHER])";
        }
        if (Gvar.bgm_list_id == 398) {
            Gvar.bgm_file_name = "116.mp3";
            Gvar.bgm_title = "The Beatles [Get Back]";
        }
        if (Gvar.bgm_list_id == 399) {
            Gvar.bgm_file_name = "115.mp3";
            Gvar.bgm_title = "Prince [Gold](album[Gold Experience])";
        }
        if (Gvar.bgm_list_id == 400) {
            Gvar.bgm_file_name = "400.mp3";
            Gvar.bgm_title = "Sting [English Man In New York]";
        }
        if (Gvar.bgm_list_id == 401) {
            Gvar.bgm_file_name = "401.mp3";
            Gvar.bgm_title = "Foo Fighters [Everlong]";
        }
        if (Gvar.bgm_list_id == 402) {
            Gvar.bgm_file_name = "402.mp3";
            Gvar.bgm_title = "Hall and Oates [Kiss on my List]";
        }
        if (Gvar.bgm_list_id == 403) {
            Gvar.bgm_file_name = "403.mp3";
            Gvar.bgm_title = "Sex Pistols [Anarchy in the UK]";
        }
        if (Gvar.bgm_list_id == 404) {
            Gvar.bgm_file_name = "404.mp3";
            Gvar.bgm_title = "Petshop Boys [West End Girls]";
        }
        if (Gvar.bgm_list_id == 405) {
            Gvar.bgm_file_name = "405.mp3";
            Gvar.bgm_title = "Police [Roxanne]";
        }
        if (Gvar.bgm_list_id == 406) {
            Gvar.bgm_file_name = "405.mp3";
            Gvar.bgm_title = "Police [Roxanne]";
        }
        if (Gvar.bgm_list_id == 407) {
            Gvar.bgm_file_name = "407.mp3";
            Gvar.bgm_title = "Sting [Shape of My Heart]";
        }
        if (Gvar.bgm_list_id == 408) {
            Gvar.bgm_file_name = "408.mp3";
            Gvar.bgm_title = "Michael Jackson [Man in the Mirror]";
        }
        if (Gvar.bgm_list_id == 409) {
            Gvar.bgm_file_name = "409.mp3";
            Gvar.bgm_title = "Steely Dan [Babylon Sisters]";
        }
        if (Gvar.bgm_list_id == 411) {
            Gvar.bgm_file_name = "411.mp3";
            Gvar.bgm_title = "Eagles [Desperado]";
        }
        if (Gvar.bgm_list_id == 412) {
            Gvar.bgm_file_name = "412.mp3";
            Gvar.bgm_title = "Bob Dylan [Knocking on Heavens Door]";
        }
        if (Gvar.bgm_list_id == 413) {
            Gvar.bgm_file_name = "0.mp3";
            Gvar.bgm_title = "nothing";
        }
        if (Gvar.bgm_list_id == 414) {
            Gvar.bgm_file_name = "414.mp3";
            Gvar.bgm_title = "Chuck Berry [Johnny B. Goode]";
        }
        if (Gvar.bgm_list_id == 415) { // Ver0.1401にて追加。タスクact1のBGM
            Gvar.bgm_file_name = "414.mp3";
            Gvar.bgm_title = "Chuck Berry [Johnny B. Goode]";
        }
        if (Gvar.bgm_list_id == 416) { // Ver0.1401にて追加。タスクact3のBGM
            Gvar.bgm_file_name = "414.mp3";
            Gvar.bgm_title = "Chuck Berry [Johnny B. Goode]";
        }
        if (Gvar.bgm_list_id == 417) { // Ver0.1401にて追加。ラットのBGM
            Gvar.bgm_file_name = "414.mp3";
            Gvar.bgm_title = "Chuck Berry [Johnny B. Goode]";
        }
        if (Gvar.bgm_list_id == 418) { // Ver0.1401にて追加。スカイ・ハイのBGM
            Gvar.bgm_file_name = "414.mp3";
            Gvar.bgm_title = "Chuck Berry [Johnny B. Goode]";
        }
        if (Gvar.bgm_list_id == 419) { // Ver0.1401にて追加。チューブラー・ベルズのBGM
            Gvar.bgm_file_name = "414.mp3";
            Gvar.bgm_title = "Chuck Berry [Johnny B. Goode]";
        }
        // Ver0.1403にて追加。酒場のBGM
        if (Gvar.bgm_list_id == 976) {
            Gvar.bgm_file_name = "976.mp3";
            Gvar.bgm_title = "Terence Trent D'Arby [Sign Your Name]";
        }
        if (Gvar.bgm_list_id == 977) {
            Gvar.bgm_file_name = "105.mp3"; // IDは977だが、ファイル名は違う:105.mp3
            Gvar.bgm_title = "Red Hot Chili Peppers [Give It Away]";
        }
        if (Gvar.bgm_list_id == 978) {
            Gvar.bgm_file_name = "978.mp3";
            Gvar.bgm_title = "Pink Floyd [Atom Heart Mother]";
        }
        if (Gvar.bgm_list_id == 979) {
            Gvar.bgm_file_name = "315.mp3"; // IDは979だが、ファイル名は違う:315.mp3
            Gvar.bgm_title = "King Crimson [Epitaph]";
        }
        if (Gvar.bgm_list_id == 980) {
            Gvar.bgm_file_name = "980.mp3";
            Gvar.bgm_title = "The Pixies [Where Is My Mind]";
        }
        if (Gvar.bgm_list_id == 981) {
            Gvar.bgm_file_name = "981.mp3";
            Gvar.bgm_title = "Madonna [Like a Virgin]";
        }
        if (Gvar.bgm_list_id == 982) {
            Gvar.bgm_file_name = "115.mp3";
            Gvar.bgm_title = "Prince [Gold](album[Gold Experience])";
        }
        if (Gvar.bgm_list_id == 983) {
            Gvar.bgm_file_name = "203.mp3";
            Gvar.bgm_title = "Iggy Pop [The Passengers]";
        }
        if (Gvar.bgm_list_id == 984) {
            Gvar.bgm_file_name = "313.mp3";
            Gvar.bgm_title = "Deep Purple [Highway Star]";
        }
        if (Gvar.bgm_list_id == 985) {
            Gvar.bgm_file_name = "985.mp3";
            Gvar.bgm_title = "Deep Purple [Speed King]";
        }
        // ダンジョンを制覇した時のBGM
        if (Gvar.bgm_list_id == 986) {
            Gvar.bgm_file_name = "986.mp3";
            Gvar.bgm_title = "ENYA [Orinoco Flow]";
        }
        // トニオさんの店  レストラン・レストラン・トラサルディーのBGM
        if (Gvar.bgm_list_id == 987) {
            Gvar.bgm_file_name = "987.mp3";
            Gvar.bgm_title = "Bach italien";
        }
        // ヴェネチアホテルのBGM
        if (Gvar.bgm_list_id == 988) {
            Gvar.bgm_file_name = "988.mp3";
            Gvar.bgm_title = "Eagles [Hotel California]";
        }
        // 亀の中のBGM
        if (Gvar.bgm_list_id == 989) {
            Gvar.bgm_file_name = "989.mp3";
            Gvar.bgm_title = "T.rex [20th Century Boy]";
        }
        if (Gvar.bgm_list_id == 990) {
            Gvar.bgm_file_name = "990.mp3";
            Gvar.bgm_title = "Queen [Bohemian Rhapsody]";
        }
        if (Gvar.bgm_list_id == 991) {
            Gvar.bgm_file_name = "991.mp3";
            Gvar.bgm_title = "Beach Boys [Surfin' USA]";
        }
        if (Gvar.bgm_list_id == 992) {
            Gvar.bgm_file_name = "992.mp3";
            Gvar.bgm_title = "Beach Boys [Good Vibrations]";
        }
        if (Gvar.bgm_list_id == 993) {
            Gvar.bgm_file_name = "993.mp3";
            Gvar.bgm_title = "REO Speedwagon [Keep On Lovin You]";
        }
        if (Gvar.bgm_list_id == 994) {
            Gvar.bgm_file_name = "994.mp3";
            Gvar.bgm_title = "Led Zeppelin [Kashmir]";
        }
        if (Gvar.bgm_list_id == 565) {
            Gvar.bgm_file_name = "995.mp3";
            Gvar.bgm_title = "Handel [Messiah]";
        }
        if (Gvar.bgm_list_id == 996) {
            Gvar.bgm_file_name = "996.mp3";
            Gvar.bgm_title = "Prince [1999]";
        }
        if (Gvar.bgm_list_id == 997) {
            Gvar.bgm_file_name = "997.mp3";
            Gvar.bgm_title = "Ben E King [Stand by Me]";
        }
        if (Gvar.bgm_list_id == 998) {
            Gvar.bgm_file_name = "998.mp3";
            Gvar.bgm_title = "Bad Company [Bad Company]";
        }
        if (Gvar.bgm_list_id == 999) {
            Gvar.bgm_file_name = "999.mp3";
            Gvar.bgm_title = "Louis Armstrong [What a Wonderful World]";
        }
        return;
}

export {func101}
