/**
 * func081 — 関数宣言
 *
 * (org原典: newDTW_list_SE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 効果音呼び出し関数1
// 旧 func081
async function func081(this: any) {
        Adap.dbgprt(81);

        /*
        設定画面でカーソルを動かした際の音  「チッ」
        使用する際は Adap.DSPLAY(100) で流せる
        */
        Gvar.bgm_file_name = "100.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 100);

        // 
        Gvar.bgm_file_name = "101.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 101);

        // 
        Gvar.bgm_file_name = "102.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 102);

        // 
        Gvar.bgm_file_name = "103.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 103);

        //
        Gvar.bgm_file_name = "103.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 104);

        // 
        Gvar.bgm_file_name = "103.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 105);

        // 
        Gvar.bgm_file_name = "103.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 106);

        // 
        Gvar.bgm_file_name = "107.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 107);

        // 
        Gvar.bgm_file_name = "108.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 108);

        // 
        Gvar.bgm_file_name = "109.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 109);

        // 
        Gvar.bgm_file_name = "110.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 110);

        // 
        Gvar.bgm_file_name = "111.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 111);

        // 
        Gvar.bgm_file_name = "112.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 112);

        // 
        Gvar.bgm_file_name = "113.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 113);

        // 
        Gvar.bgm_file_name = "114.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 114);

        // 
        Gvar.bgm_file_name = "115.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 115);

        // 
        Gvar.bgm_file_name = "116.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 116);

        // 
        Gvar.bgm_file_name = "117.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 117);

        // 
        Gvar.bgm_file_name = "118.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 118);

        // 
        Gvar.bgm_file_name = "119.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 119);

        // 
        Gvar.bgm_file_name = "120.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 120);

        // 
        Gvar.bgm_file_name = "121.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 121);

        // 
        Gvar.bgm_file_name = "122.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 122);

        // 
        Gvar.bgm_file_name = "123.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 123);

        // 
        Gvar.bgm_file_name = "124.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 124);

        // 
        Gvar.bgm_file_name = "125.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 125);

        // 
        Gvar.bgm_file_name = "126.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 126);

        // 
        Gvar.bgm_file_name = "127.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 127);

        // 
        Gvar.bgm_file_name = "128.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 128);

        // 
        Gvar.bgm_file_name = "129.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 129);

        // 
        Gvar.bgm_file_name = "130.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);

        // 
        Adap.DSLOADMEMORY(Gvar.var_667, 130);
        Gvar.bgm_file_name = "131.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 131);

        // 
        Gvar.bgm_file_name = "132.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 132);

        // 
        Gvar.bgm_file_name = "133.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 133);

        // 
        Gvar.bgm_file_name = "134.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 134);

        // 
        Gvar.bgm_file_name = "135.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 135);

        // 
        Gvar.bgm_file_name = "136.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 136);

        // 
        Gvar.bgm_file_name = "137.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 137);

        // 
        Gvar.bgm_file_name = "138.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 138);

        // 
        Gvar.bgm_file_name = "139.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 139);

        // 
        Gvar.bgm_file_name = "140.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 140);

        // 
        Gvar.bgm_file_name = "141.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 141);

        // 
        Gvar.bgm_file_name = "142.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 142);

        // 
        Gvar.bgm_file_name = "143.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 143);

        // 
        Gvar.bgm_file_name = "144.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 144);

        // 
        Gvar.bgm_file_name = "145.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 145);

        // 
        Gvar.bgm_file_name = "146.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 146);

        // 
        Gvar.bgm_file_name = "147.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 147);

        // 
        Gvar.bgm_file_name = "148.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 148);

        // 
        Gvar.bgm_file_name = "149.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 149);

        // 
        Gvar.bgm_file_name = "150.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 150);

        // 
        Gvar.bgm_file_name = "151.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 151);

        // 
        Gvar.bgm_file_name = "152.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 152);

        // 
        Gvar.bgm_file_name = "153.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 153);

        // 
        Gvar.bgm_file_name = "154.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 154);

        // 
        Gvar.bgm_file_name = "155.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 155);

        // 
        Gvar.bgm_file_name = "156.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 156);

        // 
        Gvar.bgm_file_name = "157.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 157);

        // 
        Gvar.bgm_file_name = "158.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 158);

        // 
        Gvar.bgm_file_name = "159.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 159);

        // 
        Gvar.bgm_file_name = "160.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 160);

        // 
        Gvar.bgm_file_name = "161.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 161);

        // 
        Gvar.bgm_file_name = "162.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 162);

        // 
        Gvar.bgm_file_name = "143.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 163);

        // 
        Gvar.bgm_file_name = "164.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 164);

        // 
        Gvar.bgm_file_name = "165.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 165);

        // 
        Gvar.bgm_file_name = "166.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 166);

        // 
        Gvar.bgm_file_name = "167.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 167);

        // 
        Gvar.bgm_file_name = "168.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 168);

        // 
        Gvar.bgm_file_name = "169.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 169);

        // 
        Gvar.bgm_file_name = "170.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 170);

        // 
        Gvar.bgm_file_name = "171.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 171);

        // 
        Gvar.bgm_file_name = "172.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 172);

        // 
        Gvar.bgm_file_name = "173.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 173);

        // 
        Gvar.bgm_file_name = "174.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 174);

        // 
        Gvar.bgm_file_name = "175.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 175);

        // 
        Gvar.bgm_file_name = "176.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 176);

        // 
        Gvar.bgm_file_name = "121.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 177);

        // 
        Gvar.bgm_file_name = "178.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 178);

        // 
        Gvar.bgm_file_name = "179.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 179);

        // 
        Gvar.bgm_file_name = "180.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 180);

        // 
        Gvar.bgm_file_name = "181.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 181);

        // 
        Gvar.bgm_file_name = "182.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 182);

        // 
        Gvar.bgm_file_name = "183.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 183);

        // 
        Gvar.bgm_file_name = "184.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 184);

        // 
        Gvar.bgm_file_name = "153.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 185);

        // 
        Gvar.bgm_file_name = "186.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 186);

        // 
        Gvar.bgm_file_name = "187.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 187);

        // 
        Gvar.bgm_file_name = "188.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 188);

        // 
        Gvar.bgm_file_name = "121.wav";
        await Adap.exist(Gvar.bgm_file_name);

        Gvar.var_666 = Gvar.strsize;
        Gvar.var_667 = Adap.sdim(Gvar.var_666);
        Gvar.var_667 = await Adap.bload(Gvar.bgm_file_name, Gvar.var_666);
        Adap.DSLOADMEMORY(Gvar.var_667, 189);

        return;
}

export {func081}
