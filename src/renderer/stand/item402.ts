import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 402 エンペラーの発動処理
async function item402(this: any) {
        await Func.setMessage1("「エンペラー」！！",
                               "", 7, false, false, false);
        await Func.AutoDraw(10);
        Gvar.belongings_item_list = Gvar.activated_disc_id;
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.var_2342 = 1;
        await Func.func647(); // 射撃攻撃動作処理
        return;
}

export {item402}
