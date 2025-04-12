import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func173(this: any) {
        Adap.dbgprt(173);
        Gvar.var_829 = 1;
        Gvar.var_830 = 0;
        if (Gvar.var_536 == 1) {
            if (Gvar.var_356 == 301) {
                Gvar.var_356 = 318;
            }
            if (Gvar.var_356 == 302) {
                Gvar.var_356 = 319;
            }
            if (Gvar.var_356 == 303) {
                Gvar.var_356 = 320;
            }
            if (Gvar.var_356 == 321) {
                Gvar.var_356 = 323;
            }
            if (Gvar.var_356 == 322) {
                Gvar.var_356 = 324;
            }
            if (Gvar.var_356 == 325) {
                Gvar.var_356 = 326;
            }
            if (Gvar.var_356 == 314) {
                Gvar.var_356 = 315;
            }
        }
        await Func.func177(); // 死因原因
        if (Gvar.var_830 != 0) {
            Gvar.var_831 = Gvar.var_830;
        }
        Gvar.var_829 = 0;
        if (Gvar.var_356 < 300 && Gvar.var_356 != 0) {
            Gvar.var_832 = Gvar.var_833 + 1;
            Gvar.var_834 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_832; ++cnt2) {
                if (Gvar.var_835[cnt2] == Gvar.var_356) {
                    Gvar.var_834 = 1;
                    break;
                }
            }
            if (Gvar.var_834 == 0) {
                Gvar.var_833 = Gvar.var_833 + 1;
                Gvar.var_835[Gvar.var_833] = Gvar.var_356;
            }
        }
        await Func.func174();
        await Func.func175(); // スコア表示？ gettime等時間に関するものがある
        await Func.func176();
        Gvar.var_836 = Gvar.dungeon_number;
        Gvar.var_837 = Gvar.current_floor;
        await Func.func808();
        Gvar.var_356 = 0;
        await Func.func233(); // ダンジョンへ入った際の全ステータス初期化処理
        Gvar.var_205 = 1;
        await Func.func231(); // プレイデータを保存するセーブ機能
        Adap.onexit(0);
        Gvar.var_767 = 1;
        Gvar.var_791 = Gvar.var_790;
        await Func.func165();
        return;
}

export {func173}
