import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

async function func0816(this: any) {
    Adap.dbgprt(816);
    await Func.func0099();
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "「まあ一杯やりながらよーく";
    Gvar.var_287 = "考えてくださいﾁｮｺﾚｰﾄはいかがです？」";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0053();
    await Func.func0358();
    await Func.func0054();
    Gvar.var_223 = 0;
    await Func.func0009(); return;
}

export { func0816 }
