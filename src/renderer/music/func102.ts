import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func102
async function func102(this: any) {
        Adap.dbgprt(102);
        if (Gvar.var_632 >= 1) {
            Adap.color(255, 255, 255);
            Adap.pos(2, 320);
            Adap.font(Gvar.font_type, 12);
            Adap.mes("      BGM オフ");
            return;
        }
        if (Gvar.var_633 >= 1) {
            Adap.color(255, 255, 255);
            Adap.pos(2, 320);
            Adap.font(Gvar.font_type, 12);
            Adap.mes("      BGM オン（DISCを入れると開始します）");
            return;
        }
        if (Gvar.var_635 == 0 && Gvar.var_636 == 0) {
            if (Gvar.receive_bgm_id == 0 || Gvar.receive_bgm_id == 987 || Gvar.receive_bgm_id == 413) {
                return;
            }
            Adap.color(255, 255, 255);
            Adap.pos(2, 320);
            Adap.font(Gvar.font_type, 12);
            Adap.mes("♪" + Gvar.bgm_title);
            return;
        }
        if (Gvar.var_635 >= 1) {
            Adap.color(255, 255, 255);
            Adap.pos(2, 320);
            Adap.font(Gvar.font_type, 12);
            Adap.mes("      効果音音量:" + Gvar.se_volume);
            return;
        }
        if (Gvar.var_636 >= 1) {
            Adap.color(255, 255, 255);
            Adap.pos(2, 320);
            Adap.font(Gvar.font_type, 12);
            Adap.mes("      音量:" + Gvar.bgm_volume);
            return;
        }
        return;
}

export {func102}
