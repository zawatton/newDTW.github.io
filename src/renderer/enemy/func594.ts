import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func594(this: any) {
        Adap.dbgprt(594);
        await Func.setMessage1("闇の中から蘇りし者…", "リンプ・ビズキッド…", 8, true, false, true);
        await Func.setMessage1("我とともに来たれ…", "闇とともに喜びを分かち…ぶつぶつ…", 8, false, false, true);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ表示処理(自動)
        }
        Gvar.var_2839 = Gvar.current_floor;
        Gvar.var_2840 = Gvar.current_floor;
        if (Gvar.current_floor == 0) {
            Gvar.var_2840 = 99;
        }
        Gvar.current_floor = Adap.rnd(Gvar.var_2840);
        Gvar.current_floor = Gvar.current_floor + 1;
        await Func.func627(); // 各ダンジョンごとの出現敵設定
        // No = 0 なので、拠点(ホテル、亀、)
        if (Gvar.dungeon_number == 0 || Gvar.dungeon_number == 99) {
            Gvar.var_953 = 37;
        }
        Gvar.var_2537 = Gvar.var_953;
        Gvar.current_floor = Gvar.var_2839;
        Gvar.var_1845 = 1;
        Gvar.var_2353 = Gvar.var_673;
        await Func.func556();
        Gvar.var_673 = Gvar.var_2353;
        Gvar.var_2537 = 0;
        Gvar.var_1845 = 0;
        if (Gvar.var_2110 != 0) {
            Adap.DSPLAY(170);
        }
        if (Gvar.var_2110 == 0) {
            await Func.setMessage1("しかし何も起こらなかった…", "", 8, false, false, true);
            Gvar.var_2197 = 1;
            return;
        }
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ表示処理(自動)
        }
        return;
}

export {func594}
