import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func613(this: any) {
        Adap.dbgprt(613);
        if (Gvar.var_83[Gvar.var_673].Var12 >= 1 || Gvar.var_83[Gvar.var_673].Var13 == 1 || Gvar.var_83[Gvar.var_673].Var17 == 1 || Gvar.var_83[Gvar.var_673].Var23 == 1) {
            Gvar.var_83[Gvar.var_673].Var18 = 0;
            return;
        }
        Gvar.var_1393 = Gvar.var_673;
        Adap.gsel(19);
        Adap.color(150, 150, 150);
        Adap.boxf(0, 0, 680, 680);
        Adap.gsel(0);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1392 = 1;
        Gvar.var_83[Gvar.var_673].Var18 = 0;
        Gvar.var_1165 = 1;
        Gvar.var_389 = 2;
        await Func.setMessage1("ｸﾞﾚｲﾄﾌﾙﾃﾞｯﾄﾞの老化攻撃だ！", "", 7, false, false, false);
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            if (Gvar.var_1392 == 11) {
                Adap.DSPLAY(161);
            }
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1392 = Gvar.var_1392 + 1;
        }
        Gvar.var_1392 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        await Func.func340(); // キー入力による選択処理
        Gvar.var_389 = 0;
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        if (Gvar.equip_disc[207] == 1) {
            await Func.setMessage1("しかし 装備中のDISCによって", "老化攻撃を防いだ！", 7, false, false, false);
            await Func.func047(); // メッセージ履歴追加処理
            Gvar.var_1165 = 0;
            Gvar.var_240 = 0;
            Gvar.var_83[Gvar.var_1393].Var6 = 1;
            Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            Gvar.var_2197 = 1;
            await Func.AutoDraw(10);
            return;
        }
        if (Gvar.nouryoku_disc_id == 202 || Gvar.shageki_disc_id == 404) {
            await Func.setMessage1("しかし 装備中のDISCによって", "体が冷やされ 無事だった！", 7, false, false, false);
            Gvar.var_1165 = 0;
            Gvar.var_240 = 0;
            Gvar.var_83[Gvar.var_1393].Var6 = 1;
            Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            Gvar.var_2197 = 1;
            await Func.AutoDraw(10);
            return;
        }
        Adap.DSPLAY(164);
        await Func.setMessage1("精神力が下がってしまった！", "", 8, false, false, false);
        Gvar.var_565 = Gvar.var_565 - 1;
        if (Gvar.var_565 < 0) {
            Gvar.var_565 = 0;
        }
        Gvar.var_1165 = 0;
        Gvar.var_240 = 0;
        Gvar.var_83[Gvar.var_1393].Var6 = 1;
        Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
        Gvar.var_2197 = 1;
        await Func.AutoDraw(10);
        return;
}

export {func613}
