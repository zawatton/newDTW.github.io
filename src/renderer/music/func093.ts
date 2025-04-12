import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func093(this: any) {
        Adap.dbgprt(93);
        Gvar.se_file_name = 102;
        if (Gvar.var_672 == 3 || Gvar.var_672 == 13) {
            Gvar.se_file_name = 124;
        }
        if (Gvar.var_672 == 2 || Gvar.var_672 == 22) {
            Gvar.se_file_name = 114;
        }
        if (Gvar.var_672 == 9 || Gvar.var_672 == 10) {
            Gvar.se_file_name = 123;
        }
        if (Gvar.var_672 == 29) {
            Gvar.se_file_name = 147;
        }
        if (Gvar.var_672 == 122 || Gvar.var_672 == 129) {
            Gvar.se_file_name = 112;
        }
        if (Gvar.var_672 == 14 || Gvar.var_672 == 66 || Gvar.var_672 == 110 || Gvar.var_672 == 162) {
            Gvar.se_file_name = 222;
        }
        if (Gvar.var_672 == 44) {
            Gvar.se_file_name = 223;
        }
        if (Gvar.var_672 == 51) {
            Gvar.se_file_name = 224;
        }
        if (Gvar.var_672 == 17) {
            Gvar.se_file_name = 155;
        }
        Adap.DSPLAY(Gvar.se_file_name);
        Gvar.var_672 = 0;
        return;
}

export {func093}
