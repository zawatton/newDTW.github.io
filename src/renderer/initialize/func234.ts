import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func234
async function func234(this: any) {
    Adap.dbgprt(234);
    // セーブを実行すると何故かフーファイターズが実行される
    // 防ぐ為にキー入力を初期化
    Gvar.conf_keyon = 0;
    Gvar.var_254 = 0; // var_254:入力判定[←]
    Gvar.var_257 = 0; // var_257:入力判定[→]
    Gvar.var_255 = 0; // var_255:入力判定[↑]
    Gvar.var_259 = 0; // var_259:入力判定[↓]
    Gvar.var_253 = 0;
    Gvar.var_256 = 0;
    Gvar.var_258 = 0;
    Gvar.var_260 = 0;
    Gvar.key_X_on = 0;
    Gvar.key_A_on = 0; // キーA入力初期化
    Gvar.key_Z_on = 0; // キーZ入力初期化
    Gvar.key_C_on = 0;
    Gvar.key_Shift_on = 0; // キーShift入力初期化
    Gvar.key_S_on = 0; // キーS入力初期化
    Gvar.key_F_on = 0; // Ver0.1401にて追加。キーF入力初期化

    Gvar.var_205 = 1;
    await Func.func231(); // プレイデータを保存するセーブ機能
    await Func.setMessage("セーブして終了します。", "", 7, true, false, false);
    // await Func.setMessage("", "", 7, false, false, false);
    if (Gvar.var_407 == 1) {
        Adap.netclose(Gvar.var_1050);
    }
    Adap.end();
}

export {func234}
