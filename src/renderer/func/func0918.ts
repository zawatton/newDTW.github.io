import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func859
async function func0918(this: any) {
    Gvar.var_449 = Gvar.var_67;
    for (let cnt1 = 0; cnt1 < 11; ++cnt1) {
        Gvar.var_447 = Gvar.var_66;
        for (let cnt2 = 0; cnt2 < 11; ++cnt2) {
            Adap.pos((Gvar.var_447 - Gvar.var_66 - 1) * 40 + 10, (Gvar.var_449 - Gvar.var_67 - 1) * 40 + 10);
            Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
            if (Gvar.var_73[Gvar.var_447][Gvar.var_449] == 1) {
                Adap.gcopy(5, 1200, Gvar.y_axis_map_image * 40, 40, 40);
            }
            if (Gvar.var_77[Gvar.var_447][Gvar.var_449] != 0) {
                Gvar.var_3604 = Gvar.var_77[Gvar.var_447][Gvar.var_449];
                Gvar.belongings_item_list = Gvar.var_78[Gvar.var_3604].Var0;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_80[Gvar.var_447][Gvar.var_449] != 0) {
                Gvar.var_3605 = Gvar.var_80[Gvar.var_447][Gvar.var_449];
                Gvar.var_888 = Gvar.var_81[Gvar.var_3605][0];
                await Func.func539();
            }
            if (Gvar.var_65[Gvar.var_447][Gvar.var_449] == 1) {
                Adap.gcopy(3, 40, 0, 40, 40);
            }
            if (Gvar.var_82[Gvar.var_447][Gvar.var_449] != 0) {
                Gvar.var_1642 = 1;
                Gvar.var_3606 = Gvar.var_82[Gvar.var_447][Gvar.var_449];
                Gvar.var_83[0].Var0 = Gvar.var_83[Gvar.var_3606].Var0;
                Gvar.var_1641 = 0;
                Gvar.var_83[0].Var5 = 2;
                Gvar.var_1640 = 2;
                await Func.func567();
                Gvar.var_1642 = 0;
            }
            Gvar.var_447 = Gvar.var_447 + 1;
        }
        Gvar.var_449 = Gvar.var_449 + 1;
    }
    return;
}

export {func0918}
