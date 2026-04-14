/**
 * func240 — func240 セーブするファイル名設定
 *
 * (org原典: newDTW_func2)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func240(this: any) {
        Adap.dbgprt(240);
        if (Gvar.var_726 == 1) {
            Gvar.var_1062 = "01.dat";
            Gvar.var_1063 = "01n.dat";
            Gvar.var_1064 = "01e.dat";
            Gvar.var_703 = 0;
        }
        if (Gvar.var_726 == 2) {
            Gvar.var_1062 = "02.dat";
            Gvar.var_1063 = "02n.dat";
            Gvar.var_1064 = "02e.dat";
            Gvar.var_711 = 0;
        }
        if (Gvar.var_726 == 3) {
            Gvar.var_1062 = "03.dat";
            Gvar.var_1063 = "03n.dat";
            Gvar.var_1064 = "03e.dat";
            Gvar.var_718 = 0;
        }
        await Adap.exist(Gvar.var_1062);

        if (Gvar.strsize >= 1) {
            Adap.delete_(Gvar.var_1062);
        }
        await Adap.exist(Gvar.var_1063);

        if (Gvar.strsize >= 1) {
            Adap.delete_(Gvar.var_1063);
        }
        await Adap.exist(Gvar.var_1064);

        if (Gvar.strsize >= 1) {
            Adap.delete_(Gvar.var_1064);
        }
        await Func.func242();
        return;
}

export {func240}
