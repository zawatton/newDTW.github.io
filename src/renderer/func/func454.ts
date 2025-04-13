import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func454(this: any) {
        Adap.dbgprt(454);
        Adap.DSPLAY(143);
        Gvar.var_1299 = 5;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        Gvar.var_211 = Gvar.var_352;
        await Func.setMessage("体力が回復した！", "", 7, true, false, false);
        await Func.func457(); // ジャッジメントの問いに対して、体力を回復させてくれと選択した時、体力回復後の状態異常回復の動作処理
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func454}
