import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func925
async function func0984(this: any) {
    if (Gvar.var_407 >= 1) {
        Gvar.var_407 = 0;
        Adap.onkey(0);
        Adap.netclose(Gvar.var_1050);
        Adap.gsel( Gvar.window_id = 33, Gvar.window_mode = -1);
        Adap.gsel( Gvar.window_id = 30, Gvar.window_mode = -1);
        Adap.gsel( Gvar.window_id = 0, Gvar.window_mode = 1);
        await Func.func193(); // メニュー画面 "システム" 設定処理
        return;
    }
    if (Gvar.var_407 == 0) {
        Gvar.var_509 = 0;
        Gvar.var_499 = 0; // Mフラグ:設定画面 Func.func056
        await Func.func0953();
        return;
    }
    stop();
}

export {func0984}
