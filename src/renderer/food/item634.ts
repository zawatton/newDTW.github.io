import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 634 アイテム「プリン」を使用した時の効果
async function item634(this: any) {
    Gvar.var_1936 = 0 // アイテム毎の自動メッセージ非表示(item_message非表示)
    await Func.AutoDraw(10);
    if (Gvar.var_129 == 0) {
        Gvar.var_360 = 0;
        if (Gvar.var_350 == Gvar.var_567) {
            Gvar.var_567 = Gvar.var_567 + 1;
            if (Gvar.var_567 > 999) {
                Gvar.var_567 = 999;
            }
        }
        if (Gvar.var_133 == 0 && Gvar.var_126 == 0) {
            await Func.setMessage("お腹がちょっと膨れた", "", 7, false, false, false);
            // Gvar.item_message1 = "お腹がちょっと膨れた";
        }
        await Func.setMessage("思うように動けるようになった。", "", 7, false, false, false);
        Gvar.var_133 = 0;
        Gvar.var_126 = 0;
        Gvar.var_350 = Gvar.var_350 + 10;
        if (Gvar.var_350 > Gvar.var_567) {
            Gvar.var_350 = Gvar.var_567;
        }
        return;
    }
    if (Gvar.var_129 != 0) {
        Gvar.var_360 = 0;
        if (Gvar.var_350 == Gvar.var_567) {
            Gvar.var_567 = Gvar.var_567 + 1;
            if (Gvar.var_567 > 999) {
                Gvar.var_567 = 999;
            }
        }
        Gvar.var_133 = 0;
        Gvar.var_126 = 0;
        Gvar.var_350 = Gvar.var_350 + 10;
        if (Gvar.var_350 > Gvar.var_567) {
            Gvar.var_350 = Gvar.var_567;
        }
        await Func.setMessage("「デザートはプリン～～～？", "ケッ！  おれは不良だよ…！」", 7, true, false, false);
        await Func.setMessage("「プリンなんて女子供の食う物なんて", "チャンチャラおかしくて…」", 7, true, false, false);
        await Func.setMessage("「ンまぁ～～い！」", "", 7, true, false, false);
        Gvar.var_1214 = 0;
        for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
            Gvar.var_1256 = 1;
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1256 = 2;
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
        }
        Gvar.var_1256 = 0;
        await Func.setMessage("このフロアでお腹が減らなくなった！", "", 7, false, false, false);
        // Gvar.item_message1 = "このフロアでお腹が減らなくなった！";
        Gvar.var_193 = 1;
        return;
    }
    return;
}

export {item634}
