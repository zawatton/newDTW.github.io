import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func0840(this: any) {
    Adap.dbgprt(840);
    Gvar.var_224 = 2;
    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
        await Func.func0354();
    }
    Adap.DSPLAY(117);
    Gvar.var_465 = 1;
    for (let cnt1 = 0; cnt1 < 12; ++cnt1) {
        await Func.func0354();
    }
    Gvar.var_465 = 0;
    Gvar.var_1352 = 1;
    await Func.func0132();
    Adap.DSPLAY(192);
    Gvar.var_283 = "";
    Gvar.var_284 = "";
    Gvar.var_285 = "";
    Gvar.var_286 = "";
    Gvar.var_287 = "";
    Gvar.var_288 = "";
    Gvar.var_289 = 0;
    Gvar.var_283 = "「ボヘミアン・ラプソディ！」";
    Gvar.var_284 = "";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    Gvar.var_24 = Gvar.var_24[1];
    Gvar.var_25 = Gvar.var_25[1];
    Gvar.var_26 = Gvar.var_26[1];
    Adap.gsel(19);
    Adap.color(255, 255, 255);
    Adap.boxf(0, 0, 340, 340);
    Adap.gsel(0);
    Gvar.var_342 = 255;
    Gvar.var_343 = 1;
    for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
        await Func.func0354();
        Gvar.var_342 = Gvar.var_342 - 5;
    }
    Adap.gsel(19);
    Adap.color(1, 1, 1);
    Adap.boxf(0, 0, 340, 340);
    Adap.gsel(0);
    Gvar.var_342 = 0;
    Gvar.var_343 = 1;
    for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
        await Func.func0354();
        Gvar.var_342 = Gvar.var_342 + 5;
    }
    for (let cnt1 = 0; cnt1 < 50; ++cnt1) {
        await Func.func0354();
    }
    await Func.func0353();
    Gvar.var_283 = "";
    Gvar.var_284 = "";
    Gvar.var_285 = "";
    Gvar.var_286 = "";
    Gvar.var_287 = "";
    Gvar.var_288 = "";
    Gvar.var_289 = 0;
    Gvar.var_283 = "こうしてﾃﾞｨｱﾎﾞﾛは、露伴の描いた漫画を";
    Gvar.var_284 = "ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨの能力で現実化させ";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    Gvar.var_24 = Gvar.var_24[1];
    Gvar.var_25 = Gvar.var_25[1];
    Gvar.var_26 = Gvar.var_26[1];
    await Func.func0358();
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "かつての絶頂の日々に";
    Gvar.var_287 = "戻ることができたのです…";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0053();
    await Func.func0358();
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "　　　　　【ディアボロの大冒険】";
    Gvar.var_287 = "　　　　　　　　　　　完";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0053();
    while (true) {
        await Func.func0354();
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func0084();
    }
    // stop
    await Func.func0352();
    Gvar.var_343 = 1;
    for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
        await Func.func0354();
        Gvar.var_342 = Gvar.var_342 - 5;
    }
    Gvar.var_342 = 0;
    Gvar.var_343 = 0;
    Gvar.var_3455 = 1;
    for (let cnt1 = 0; cnt1 < 50; ++cnt1) {
        Gvar.var_268 = Gvar.var_3456;
        await Func.func0658();
        Gvar.var_283 = Gvar.var_286;
        Gvar.var_284 = Gvar.var_287;
        Gvar.var_286 = "【" + Gvar.var_1872 + "】";
        Gvar.var_287 = "　…" + Gvar.var_3457;
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func0053();
        for (let cnt2 = 0; cnt2 < 50; ++cnt2) {
            await Func.func0354();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
        }
        Gvar.var_3455++;
    }
    // stop
    return;
}

export { func0840 }
