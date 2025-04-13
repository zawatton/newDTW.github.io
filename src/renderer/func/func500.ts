import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func500(this: any) {
        Adap.dbgprt(500);
        Gvar.var_2239 = 0;
        Gvar.var_2240 = 1;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            if (Gvar.var_199 == Gvar.var_2240) {
                if (Gvar.var_2240 == 1) {
                    Gvar.var_2241 = Gvar.var_66 + 1;
                    Gvar.var_2242 = Gvar.var_67 - 1;
                }
                if (Gvar.var_2240 == 2) {
                    Gvar.var_2241 = Gvar.var_66;
                    Gvar.var_2242 = Gvar.var_67 - 1;
                }
                if (Gvar.var_2240 == 3) {
                    Gvar.var_2241 = Gvar.var_66 - 1;
                    Gvar.var_2242 = Gvar.var_67 - 1;
                }
                if (Gvar.var_2240 == 4) {
                    Gvar.var_2241 = Gvar.var_66 + 1;
                    Gvar.var_2242 = Gvar.var_67;
                }
                if (Gvar.var_2240 == 5) {
                    Gvar.var_2241 = 0;
                    Gvar.var_2242 = 0;
                }
                if (Gvar.var_2240 == 6) {
                    Gvar.var_2241 = Gvar.var_66 - 1;
                    Gvar.var_2242 = Gvar.var_67;
                }
                if (Gvar.var_2240 == 7) {
                    Gvar.var_2241 = Gvar.var_66 + 1;
                    Gvar.var_2242 = Gvar.var_67 + 1;
                }
                if (Gvar.var_2240 == 8) {
                    Gvar.var_2241 = Gvar.var_66;
                    Gvar.var_2242 = Gvar.var_67 + 1;
                }
                if (Gvar.var_2240 == 9) {
                    Gvar.var_2241 = Gvar.var_66 - 1;
                    Gvar.var_2242 = Gvar.var_67 + 1;
                }
                if (Gvar.var_82[Gvar.var_2241][Gvar.var_2242] != 0) {
                    Gvar.var_2243 = Gvar.var_82[Gvar.var_2241][Gvar.var_2242];
                    if (Gvar.var_83[Gvar.var_2243].Var5 == Gvar.var_2240) {
                        Gvar.var_2239 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2243].Var31 == 4 || Gvar.var_83[Gvar.var_2243].Var31 == 5) {
                        Gvar.var_2239 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2243].Var0 == 23) {
                        Gvar.var_2239 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2243].Var0 == 50) {
                        Gvar.var_2239 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2243].Var0 == 19) {
                        Gvar.var_2239 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2243].Var0 == 90) {
                        Gvar.var_2239 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2243].Var0 == 79) {
                        Gvar.var_2239 = 0;
                    }
                    if (Gvar.var_2239 == 1) {
                        break;
                    }
                }
            }
            Gvar.var_2240 = Gvar.var_2240 + 1;
        }
        if (Gvar.var_2239 == 1) {
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1321 = 1;
            Gvar.var_2244 = Adap.rnd(3);
            Gvar.var_2244 = Gvar.var_2244 + 3;
            Gvar.var_389 = 2;
            Gvar.var_747 = 1;

            Gvar.var_2245 = Adap.rnd(9);
            if (Gvar.var_2245 == 0) {
                await Func.setMessage("「おんぶして。    ねっ！」", 
                                        "" + Gvar.var_2244 + "のﾀﾞﾒｰｼﾞを受けた", 11, false, false, false);
            }
            if (Gvar.var_2245 == 1) {
                await Func.setMessage("「よくやるなあ～～っ！    ねッ！」", 
                                        "" + Gvar.var_2244 + "のﾀﾞﾒｰｼﾞを受けた", 11, false, false, false);
            }
            if (Gvar.var_2245 == 2) {
                await Func.setMessage("「危ないよ  そんな風に歩いちゃあ！」", 
                                        "" + Gvar.var_2244 + "のﾀﾞﾒｰｼﾞを受けた", 11, false, false, false);
            }
            if (Gvar.var_2245 == 3) {
                await Func.setMessage("「必ず背中を見られるよ。    ねっ！」", 
                                        "" + Gvar.var_2244 + "のﾀﾞﾒｰｼﾞを受けた", 11, false, false, false);
            }
            if (Gvar.var_2245 == 4) {
                await Func.setMessage("「ﾎﾟｺﾁﾝまで干からびさせて死ぬねっ！」", 
                                        "" + Gvar.var_2244 + "のﾀﾞﾒｰｼﾞを受けた", 11, false, false, false);
            }
            if (Gvar.var_2245 == 5) {
                await Func.setMessage("「離れねーんだよッ！」", 
                                        "" + Gvar.var_2244 + "のﾀﾞﾒｰｼﾞを受けた", 11, false, false, false);
            }
            if (Gvar.var_2245 == 6) {
                await Func.setMessage("「ブツブツ言っちゃって…」", 
                                        "" + Gvar.var_2244 + "のﾀﾞﾒｰｼﾞを受けた", 11, false, false, false);
            }
            if (Gvar.var_2245 == 7) {
                await Func.setMessage("「ぼくを取る方法は ないッ！」", 
                                        "" + Gvar.var_2244 + "のﾀﾞﾒｰｼﾞを受けた", 11, false, false, false);
            }
            if (Gvar.var_2245 == 8) {
                await Func.setMessage("「もう疲れるだけだよ。」", 
                                        "" + Gvar.var_2244 + "のﾀﾞﾒｰｼﾞを受けた", 11, false, false, false);
            }
            Adap.DSPLAY(103); // 殴られた時の効果音
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1321 = Gvar.var_1321 + 1;
            }
            Gvar.var_389 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1321 = 0;
            Gvar.var_211 = Gvar.var_211 - Gvar.var_2244;
            Gvar.var_208 = Gvar.var_208 + Gvar.var_2244;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 212;
            }
        }
        return;
}

export {func500}
