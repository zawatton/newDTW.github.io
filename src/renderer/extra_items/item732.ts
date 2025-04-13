import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// Ver0.1401にて追加。No = 732 ベルトのバックルを使用した時の効果
async function item732(this: any) {
        await Func.setMessage("できるわけがないッ！",
                               "", 7, true, false, true);
        // もし装備している射撃ディスクがタスクact1であれば
        if (Gvar.shageki_disc_id == 415) {
            await Func.setMessage("ま･･････待て･･････",
                                   "本物があるはずだ！", 7, true, false, true);
            await Func.setMessage("「『本物』の長方形は」",
                                   "      これでいいんだな？", 7, true, false, true);            
            let shageki_kaisu: number;

            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                Gvar.var_475 = Adap.rnd(Gvar.var_224);
                Gvar.var_475 = Gvar.var_475 + 1;
                if (Gvar.var_233[Gvar.var_475].Var0 == 415) {
                    shageki_kaisu = Gvar.var_233[Gvar.var_475].Var3;
                    break;
                }
            }
            
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_475].Var0;
            Gvar.disc_rarity = Gvar.var_233[Gvar.var_475].Var13;
            await Func.func492(); // アイテムリスト呼び出し

            Gvar.var_233[Gvar.var_475].Var0 = 414;
            Gvar.var_233[Gvar.var_475].Var3 = shageki_kaisu;
            Gvar.shageki_disc_id = 414;

            Gvar.var_1572 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            // Adap.DSPLAY(233);
            Adap.DSPLAY(225);
            await Func.setMessage("なんと、「タスクact1」のDISCは",
                                   "「タスクact2」のDISCになった！", 7, false, false, true);        

            //await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
                        
            for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1572++;
            }
            Gvar.var_1572 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF

            await Func.AutoDraw(10);
            Gvar.var_1252 = 0;
            Gvar.var_1950 = 0;
            Gvar.var_217 = 1;
            await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
            return;
        }
        await Func.setMessage("しかしここでは何も起こらなかった…",
                                "", 7, false, false, false);
        Gvar.item_message1 = "しかし何も起こらなかった…";
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        return;
}

export {item732}
