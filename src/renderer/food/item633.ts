import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 633 アイテム「子羊背肉のリンゴソースかけ」を使用した時の効果
async function item633(this: any) {
        Gvar.var_360 = 0;
        Gvar.var_1936 = 0 // アイテム毎の自動メッセージ非表示(item_message非表示)
        await Func.AutoDraw(20);
        Gvar.var_1214 = 0;
        Adap.DSPLAY(111);
        Gvar.var_1255 = 1;
        Gvar.var_567 = Gvar.var_567 + 10;
        if (Gvar.var_567 > 999) {
            Gvar.var_567 = 999;
        }
        Gvar.var_350 = Gvar.var_350 + 20;
        if (Gvar.var_350 > Gvar.var_567) {
            Gvar.var_350 = Gvar.var_567;
        }
        await Func.setMessage1("最大満腹度が上がった！", "", 7, false, false, false);
        Gvar.var_1579 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1579 = Gvar.var_1579 + 1;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1579 = 0;
        Gvar.var_1255 = 0;
        return;
}

export {item633}
