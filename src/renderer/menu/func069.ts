import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 現在装備しているdisc表示欄の設定？
async function func069(this: any) {
        Adap.dbgprt(69);
        Gvar.var_569 = 0;
        if (Gvar.shageki_disc_id != 0) {
            await Func.func429();
            Gvar.var_569 = Gvar.var_233[Gvar.var_556].Var3;
        }
        if (Gvar.kougeki_disc_id  != 0) {
            await Func.func426();
            Gvar.var_570 = Gvar.var_233[Gvar.var_553].Var13;
        }
        if (Gvar.bougyo_disc_id != 0) {
            await Func.func427();
            Gvar.var_571 = Gvar.var_233[Gvar.var_554].Var13;
        }
        if (Gvar.nouryoku_disc_id != 0) {
            await Func.func428();
            Gvar.var_572 = Gvar.var_233[Gvar.var_555].Var13;
        }
        Gvar.var_573 = 15;
        Gvar.var_574 = 45;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            Adap.color(255, 255, 255);
            Adap.line(23 + Gvar.var_573, 252 - Gvar.var_574, 85 + Gvar.var_573, 252 - Gvar.var_574);
            Adap.line(23 + Gvar.var_573, 312 - Gvar.var_574, 85 + Gvar.var_573, 312 - Gvar.var_574);
            Adap.line(22 + Gvar.var_573, 253 - Gvar.var_574, 22 + Gvar.var_573, 310 - Gvar.var_574);
            Adap.line(87 + Gvar.var_573, 253 - Gvar.var_574, 87 + Gvar.var_573, 310 - Gvar.var_574);
            Adap.pset(23 + Gvar.var_573, 253 - Gvar.var_574);
            Adap.pset(86 + Gvar.var_573, 253 - Gvar.var_574);
            Adap.pset(23 + Gvar.var_573, 311 - Gvar.var_574);
            Adap.pset(86 + Gvar.var_573, 311 - Gvar.var_574);
            Gvar.var_573 = Gvar.var_573 + 70;
        }
        Gvar.var_573 = 15;
        Gvar.var_574 = 45;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            Adap.font(Gvar.font_type, 18, 1);
            Adap.color(255, 255, 255);
            Gvar.item_icon_id = 0;
            if (cnt1 == 0) {
                Gvar.item_icon_id = Gvar.kougeki_disc_id ;
                Adap.pos(35 + Gvar.var_573, 256 - Gvar.var_574);
                Adap.color(255, 255, 0);
                Adap.mes("攻撃");
            }
            if (cnt1 == 1) {
                Gvar.item_icon_id = Gvar.bougyo_disc_id;
                Adap.pos(35 + Gvar.var_573, 256 - Gvar.var_574);
                Adap.color(255, 180, 90);
                Adap.mes("防御");
            }
            if (cnt1 == 2) {
                Gvar.item_icon_id = Gvar.nouryoku_disc_id;
                Adap.pos(35 + Gvar.var_573, 256 - Gvar.var_574);
                Adap.color(240, 0, 240);
                Adap.mes("能力");
            }
            if (cnt1 == 3) {
                Gvar.item_icon_id = Gvar.shageki_disc_id;
                Adap.pos(35 + Gvar.var_573, 256 - Gvar.var_574);
                Adap.color(225, 195, 145);
                Adap.mes("射撃");
            }
            await Func.func070(); // アイテムの表示用アイコン座標指定
            if (Gvar.item_icon_id != 0) {
                Adap.pos(23 + Gvar.var_573 + 10, 250 + 20 - Gvar.var_574);
                Adap.gmode(2, null, null, null);
                if (Gvar.item_icon_id < 400) { // アイテムがお金ではなく、射撃disc(400未満)であれば
                    if (cnt1 == 0) {
                        if (Gvar.var_570 == 0) {
                            Gvar.buffer_id = 11;
                        }
                        if (Gvar.var_570 == 1) {
                            Gvar.buffer_id = 1;
                        }
                        if (Gvar.var_570 == 2) {
                            Gvar.buffer_id = 16;
                        }
                        if (Gvar.var_570 == 3) {
                            Gvar.buffer_id = 29;
                        }
                    }
                    if (cnt1 == 1) {
                        if (Gvar.var_571 == 0) {
                            Gvar.buffer_id = 11;
                        }
                        if (Gvar.var_571 == 1) {
                            Gvar.buffer_id = 1;
                        }
                        if (Gvar.var_571 == 2) {
                            Gvar.buffer_id = 16;
                        }
                        if (Gvar.var_571 == 3) {
                            Gvar.buffer_id = 29;
                        }
                    }
                    if (cnt1 == 2) {
                        if (Gvar.var_572 == 0) {
                            Gvar.buffer_id = 11;
                        }
                        if (Gvar.var_572 == 1) {
                            Gvar.buffer_id = 1;
                        }
                        if (Gvar.var_572 == 2) {
                            Gvar.buffer_id = 16;
                        }
                        if (Gvar.var_572 == 3) {
                            Gvar.buffer_id = 29;
                        }
                    }
                }
                Adap.gcopy(Gvar.buffer_id, Gvar.buffer_x_axis, Gvar.buffer_y_axis, 40, 40);
            }
    
            Adap.font(Gvar.font_type, 18, 1);
            Gvar.var_579 = 0;
            if (cnt1 == 0 && Gvar.var_580 < 10) {
                Gvar.var_579 = 5;
            }
            if (cnt1 == 1 && Gvar.var_581 < 10) {
                Gvar.var_579 = 5;
            }
            if (cnt1 == 3 && Gvar.var_569 < 10) {
                Gvar.var_579 = 5;
            }
            if (cnt1 == 0 && Gvar.var_580 > 99) {
                Gvar.var_579 = -10;
            }
            if (cnt1 == 1 && Gvar.var_581 > 99) {
                Gvar.var_579 = -10;
            }
            Adap.color(1, 1, 1);
            Adap.pos(35 + Gvar.var_573 + 30 + 1 + Gvar.var_579, 253 - Gvar.var_574 + 40);
            if (cnt1 == 0) {
                Adap.mes(Gvar.var_580);
            }
            if (cnt1 == 1) {
                Adap.mes(Gvar.var_581);
            }
            if (cnt1 == 3 && Gvar.var_569 != 0) {
                Adap.mes(Gvar.var_569);
            }
            Adap.pos(35 + Gvar.var_573 + 30 - 1 + Gvar.var_579, 253 - Gvar.var_574 + 40);
            if (cnt1 == 0) {
                Adap.mes(Gvar.var_580);
            }
            if (cnt1 == 1) {
                Adap.mes(Gvar.var_581);
            }
            if (cnt1 == 3 && Gvar.var_569 != 0) {
                Adap.mes(Gvar.var_569);
            }
            Adap.pos(35 + Gvar.var_573 + 30 + Gvar.var_579, 253 - Gvar.var_574 + 40 + 1);
            if (cnt1 == 0) {
                Adap.mes(Gvar.var_580);
            }
            if (cnt1 == 1) {
                Adap.mes(Gvar.var_581);
            }
            if (cnt1 == 3 && Gvar.var_569 != 0) {
                Adap.mes(Gvar.var_569);
            }
            Adap.pos(35 + Gvar.var_573 + 30 + Gvar.var_579, 253 - Gvar.var_574 + 40 - 1);
            if (cnt1 == 0) {
                Adap.mes(Gvar.var_580);
            }
            if (cnt1 == 1) {
                Adap.mes(Gvar.var_581);
            }
            if (cnt1 == 3 && Gvar.var_569 != 0) {
                Adap.mes(Gvar.var_569);
            }
            Adap.color(0, 255, 0);
            Adap.pos(35 + Gvar.var_573 + 30 + Gvar.var_579, 253 - Gvar.var_574 + 40);
            if (cnt1 == 0) {
                Adap.mes(Gvar.var_580);
            }
            if (cnt1 == 1) {
                Adap.mes(Gvar.var_581);
            }
            if (cnt1 == 3 && Gvar.var_569 != 0) {
                Adap.mes(Gvar.var_569);
            }
            Gvar.var_573 = Gvar.var_573 + 70;
        }
        return;
}

export {func069}
