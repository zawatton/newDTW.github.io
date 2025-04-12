import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

 // マップ背景画像の描写処理
async function func324X(this: any) {
    await Func.func324(); // マップ背景画像配置計算処理

    // マップ背景の貼り付けはバッファID 36で行う
    Adap.gsel(36);

    // 時止め(時消し飛ばし)状態でない場合
    if (Gvar.time_paused == 0 && Gvar.time_paused_count == 0) {
        Gvar.var_1154 = 0;
        for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
            Gvar.var_1155 = 0;
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                Adap.pos(Gvar.var_1155, Gvar.var_1154);
                Adap.gcopy(0, Gvar.var_1155, Gvar.var_1154, 40, 40);
                Gvar.var_1155 = Gvar.var_1155 + 40;
            }
            Gvar.var_1154 = Gvar.var_1154 + 40;
        }
        Adap.gsel(0);
        return;
    }
    // 時止め(時消し飛ばし)状態の場合
    if (Gvar.time_paused == 1 || Gvar.time_paused_count >= 1) {
        Gvar.var_1154 = 0;
        for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
            Gvar.var_1155 = 0;
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                Adap.pos(Gvar.var_1155, Gvar.var_1154);
                Adap.gcopy(24, Gvar.var_1155, Gvar.var_1154, 40, 40);
                Gvar.var_1155 = Gvar.var_1155 + 40;
            }
            Gvar.var_1154 = Gvar.var_1154 + 40;
        }
        Adap.gsel(24);
        return;
    }
}

export {func324X}
  