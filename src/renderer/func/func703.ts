import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

async function func703(this: any) {
        Adap.dbgprt(703);
        if (Gvar.var_175 >= 1 && Gvar.var_314 == Gvar.var_175) {
            await Func.setMessage1("やっつけたｱｸｱ･ﾈｯｸﾚｽは", "念写したヤツだったようだ。", 7, true, false, false);
            Gvar.var_175 = 0;
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        if (Gvar.var_176 >= 1 && Gvar.var_314 == Gvar.var_176) {
            await Func.setMessage1("やっつけたDIOは", "念写したヤツだったようだ。", 7, true, false, false);
            Gvar.var_176 = 0;
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        return;
}

export {func703}
