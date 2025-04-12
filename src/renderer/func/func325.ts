import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 画面上にマップを表示する機能
async function func325(this: any) {
        Adap.dbgprt(325);
        if (Gvar.var_490 == 1) {
            Adap.color(0, 0, 0);
    
            Adap.boxf(0, 0, 680, 680);
        }
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            return;
        }
        if (Gvar.special_floor == 7 && Gvar.var_132 == 0) { // 広大な砂漠
            if (Gvar.var_490 == 1) {
                Adap.pos(70, 150);
        
                Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
                Adap.color(255, 255, 255);
                Adap.mes("ここでは地図が役に立たない！");
            }
            return;
        }
        if (Gvar.var_501 == 0 || Gvar.var_490 == 1) {
            Adap.color(0, 0, 0);
            Gvar.var_1156 = 10;
            Gvar.var_1157 = 0;
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                Gvar.var_1158 = 0;
                Gvar.var_1159 = 15;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    Adap.pos(Gvar.var_1158, Gvar.var_1156);
                    Adap.gmode(4, null, null, Gvar.var_690);
                    if (Gvar.y_axis_map_image == 7 || Gvar.y_axis_map_image == 13 || Gvar.y_axis_map_image == 19 || Gvar.y_axis_map_image == 24) {
                        Gvar.var_1160 = Gvar.var_690 + 20;
                        if (Gvar.var_1160 >= 255) {
                            Gvar.var_1160 = 255;
                        }
                        Adap.gmode(4, null, null, Gvar.var_1160);
                    }
                    if (Gvar.var_490 == 1) {
                        Adap.gmode(2, null, null, null);
                    }
                    Adap.gcopy(4, Gvar.var_1159, Gvar.var_1157, 40, 40);
            
                    Adap.gmode(4, null, null, 200);
                    if (Gvar.var_490 == 1) {
                        Adap.gmode(2, null, null, null);
                    }
                    Adap.gcopy(7, Gvar.var_1159, Gvar.var_1157, 40, 40);
                    Gvar.var_1159 = Gvar.var_1159 + 40;
                    Gvar.var_1158 = Gvar.var_1158 + 40;
                }
                Gvar.var_1157 = Gvar.var_1157 + 40;
                Gvar.var_1156 = Gvar.var_1156 + 40;
            }
        }
        return;
}

export {func325}
