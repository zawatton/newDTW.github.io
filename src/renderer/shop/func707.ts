import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// トニオさんに話しかけた際の処理
async function func707(this: any) {
        Adap.dbgprt(707);
        Gvar.var_243 = 0;
        Gvar.var_1009 = 0;
        Gvar.var_449 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_32; ++cnt1) {
            Gvar.var_447 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_31; ++cnt2) {
                if (Gvar.var_72[Gvar.var_447][Gvar.var_449] == 1 && Gvar.var_77[Gvar.var_447][Gvar.var_449] > 0) {
                    Gvar.var_3115 = Gvar.var_77[Gvar.var_447][Gvar.var_449];
                    if (Gvar.var_78[Gvar.var_3115].Var11 == 0) {
                        Gvar.belongings_item_list = Gvar.var_78[Gvar.var_3115].Var0;
                        await Func.func492(); // アイテムリスト呼び出し
                        Gvar.var_2476 = Math.floor(Gvar.buying_price / 2);
                        Gvar.var_482 = 0;
                        Gvar.var_482 = (Gvar.var_78[Gvar.var_3115].Var3 + Gvar.var_78[Gvar.var_3115].Var4) * 50;
                        if (Gvar.var_78[Gvar.var_3115].Var0 != 800) {
                            Gvar.var_482 = Gvar.var_78[Gvar.var_3115].Var7 * 100 + Gvar.var_482;
                        }
                        if (Gvar.var_78[Gvar.var_3115].Var19 > 1) {
                            Gvar.var_482 = Gvar.var_78[Gvar.var_3115].Var19 * 500 + Gvar.var_482;
                        }
                        Gvar.var_1009 = Gvar.var_1009 + Gvar.var_2476 + Gvar.var_482;
                    }
                    if (Gvar.var_78[Gvar.var_3115].Var0 >= 800 && Gvar.var_78[Gvar.var_3115].Var0 < 900) {
                        Gvar.var_484 = 1;
                        Gvar.var_485 = Gvar.var_78[Gvar.var_3115].Var6;
                        for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                            if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] > 0 && Gvar.var_486[Gvar.var_485][Gvar.var_484][11] == 0) {
                                Gvar.belongings_item_list = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
                                await Func.func492(); // アイテムリスト呼び出し
                                Gvar.var_2476 = Math.floor(Gvar.buying_price / 2);
                                Gvar.var_482 = 0;
                                Gvar.var_482 = (Gvar.var_486[Gvar.var_485][Gvar.var_484][3] + Gvar.var_486[Gvar.var_485][Gvar.var_484][4]) * 50;
                                if (Gvar.var_486[Gvar.var_485][Gvar.var_484][19] > 1) {
                                    Gvar.var_482 = Gvar.var_486[Gvar.var_485][Gvar.var_484][19] * 500 + Gvar.var_482;
                                }
                                Gvar.var_1009 = Gvar.var_1009 + Gvar.var_2476 + Gvar.var_482;
                            }
                            Gvar.var_484 = Gvar.var_484 + 1;
                        }
                    }
                }
                Gvar.var_447 = Gvar.var_447 + 1;
            }
            Gvar.var_449 = Gvar.var_449 + 1;
        }
        Gvar.var_480 = 1;
        Gvar.payment_amount = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            if (Gvar.var_233[Gvar.var_480].Var11 == 1) {
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_480].Var0;
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_482 = 0;
                Gvar.var_482 = (Gvar.var_233[Gvar.var_480].Var3 + Gvar.var_233[Gvar.var_480].Var4) * 50;
                if (Gvar.var_233[Gvar.var_480].Var0 != 800) {
                    Gvar.var_482 = Gvar.var_233[Gvar.var_480].Var7 * 100 + Gvar.var_482;
                }
                if (Gvar.var_233[Gvar.var_480].Var19 > 1) {
                    Gvar.var_482 = Gvar.var_233[Gvar.var_480].Var19 * 500 + Gvar.var_482;
                }
                Gvar.payment_amount = Gvar.payment_amount + Gvar.buying_price + Gvar.var_482;
            }
            if (Gvar.var_233[Gvar.var_480].Var0 >= 800 && Gvar.var_233[Gvar.var_480].Var0 < 900) {
                Gvar.var_484 = 1;
                Gvar.var_485 = Gvar.var_233[Gvar.var_480].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] > 0 && Gvar.var_486[Gvar.var_485][Gvar.var_484][11] == 1) {
                        Gvar.belongings_item_list = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
                        await Func.func492(); // アイテムリスト呼び出し
                        Gvar.var_482 = 0;
                        Gvar.var_482 = (Gvar.var_486[Gvar.var_485][Gvar.var_484][3] + Gvar.var_486[Gvar.var_485][Gvar.var_484][4]) * 50;
                        if (Gvar.var_486[Gvar.var_485][Gvar.var_484][19] > 1) {
                            Gvar.var_482 = Gvar.var_486[Gvar.var_485][Gvar.var_484][19] * 500 + Gvar.var_482;
                        }
                        Gvar.payment_amount = Gvar.payment_amount + Gvar.buying_price + Gvar.var_482;
                    }
                    Gvar.var_484 = Gvar.var_484 + 1;
                }
            }
            Gvar.var_480 = Gvar.var_480 + 1;
        }
        Gvar.var_449 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_32; ++cnt1) {
            Gvar.var_447 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_31; ++cnt2) {
                if (Gvar.var_77[Gvar.var_447][Gvar.var_449] > 0 && Gvar.var_72[Gvar.var_447][Gvar.var_449] == 0) {
                    Gvar.var_3115 = Gvar.var_77[Gvar.var_447][Gvar.var_449];
                    if (Gvar.var_78[Gvar.var_3115].Var11 == 1) {
                        Gvar.belongings_item_list = Gvar.var_78[Gvar.var_3115].Var0;
                        await Func.func492(); // アイテムリスト呼び出し
                        Gvar.var_482 = 0;
                        Gvar.var_482 = (Gvar.var_78[Gvar.var_3115].Var3 + Gvar.var_78[Gvar.var_3115].Var4) * 50;
                        if (Gvar.var_78[Gvar.var_3115].Var0 != 800) {
                            Gvar.var_482 = Gvar.var_78[Gvar.var_3115].Var7 * 100 + Gvar.var_482;
                        }
                        if (Gvar.var_78[Gvar.var_3115].Var19 > 1) {
                            Gvar.var_482 = Gvar.var_78[Gvar.var_3115].Var19 * 500 + Gvar.var_482;
                        }
                        Gvar.payment_amount = Gvar.payment_amount + Gvar.buying_price + Gvar.var_482;
                    }
                    if (Gvar.var_78[Gvar.var_3115].Var0 >= 800 && Gvar.var_78[Gvar.var_3115].Var0 < 900) {
                        Gvar.var_484 = 1;
                        Gvar.var_485 = Gvar.var_78[Gvar.var_3115].Var6;
                        for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                            if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] > 0 && Gvar.var_486[Gvar.var_485][Gvar.var_484][11] == 1) {
                                Gvar.belongings_item_list = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
                                await Func.func492(); // アイテムリスト呼び出し
                                Gvar.var_482 = 0;
                                Gvar.var_482 = (Gvar.var_486[Gvar.var_485][Gvar.var_484][3] + Gvar.var_486[Gvar.var_485][Gvar.var_484][4]) * 50;
                                if (Gvar.var_486[Gvar.var_485][Gvar.var_484][19] > 1) {
                                    Gvar.var_482 = Gvar.var_486[Gvar.var_485][Gvar.var_484][19] * 500 + Gvar.var_482;
                                }
                                Gvar.payment_amount = Gvar.payment_amount + Gvar.buying_price + Gvar.var_482;
                            }
                            Gvar.var_484 = Gvar.var_484 + 1;
                        }
                    }
                }
                Gvar.var_447 = Gvar.var_447 + 1;
            }
            Gvar.var_449 = Gvar.var_449 + 1;
        }
        Gvar.payment_amount = Gvar.payment_amount + Gvar.count_buying_price;
        Gvar.var_3116 = Gvar.var_82[Gvar.var_1000][Gvar.var_1001];
        if (Gvar.var_83[Gvar.var_3116].Var12 == 1 || Gvar.var_83[Gvar.var_3116].Var13 == 1) {
            await Func.setMessage("・・・・・・・・",
                                   "", 7, false, false, false);
            await Func.AutoDraw(6);
            Gvar.var_217 = 1;
            await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
            return;
        }
        if (Gvar.var_1009 > 0) {
            await Func.func708(); // トニオさんに話しかけて、アイテムを売る際のメッセージ処理
            return;
        }
        if (Gvar.payment_amount > 0) {
            await Func.func709(); // トニオさんに話しかけてアイテムを購入する際のメッセージ処理
            return;
        }
        await Func.setMessage("レストラン・トラサルディーへようこそ！",
                               "", 7, false, false, true);
        await Func.AutoDraw(6);
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func707}
