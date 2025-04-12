import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
// 射撃攻撃時の効果音設定
async function func097(this: any) {
        Adap.dbgprt(97);
        Gvar.se_file_name = 109;
        if (Gvar.var_340 == 408 || Gvar.var_340 == 412 || Gvar.var_340 == 405 || Gvar.var_340 == 406 || Gvar.var_340 == 699) {
            Gvar.se_file_name = 107;
        }
        if (Gvar.var_340 == 411 || Gvar.var_340 == 409) {
            Gvar.se_file_name = 124;
        }
        if (Gvar.var_340 == 400 || Gvar.var_340 == 407) {
            Gvar.se_file_name = 176;
        }
        if (Gvar.var_340 == 404) {
            Gvar.se_file_name = 215;
        }
        if (Gvar.var_340 == 698) {
            Gvar.se_file_name = 128;
        }
        if (Gvar.var_340 == 487 || Gvar.var_340 == 488 || Gvar.var_340 == 489) {
            Gvar.se_file_name = 169;
        }
        Adap.DSPLAY(Gvar.se_file_name);
        return;
}

export {func097}
