import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func716(this: any) {
        Adap.dbgprt(716);
        Gvar.var_3119 = Gvar.wallet;
        Gvar.wallet = Gvar.wallet - Gvar.payment_amount;
        if (Gvar.wallet < 0) {
            Gvar.wallet = Gvar.var_3119;
            await Func.func719(); // トニオさんの店で購入する際に、所持金が足らない時のメッセージ処理
            return;
        }
        Gvar.payment_amount = 0;
        await Func.func720();
        Gvar.var_106 = 0;
        Gvar.count_buying_price = 0;
        Adap.DSPLAY(139);
        await Func.func718(); // トニオさんの店を出る際のメッセージ処理
        return;
}

export {func716}
