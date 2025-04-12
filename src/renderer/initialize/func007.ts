import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Class from '../classes'

// 配列初期化処理
async function func007(this: any) {
        Adap.dbgprt(7);
        Gvar.var_71 = Adap.dim(70, 70, null, null);
        Gvar.var_72 = Adap.dim(70, 70, null, null);
        Gvar.var_65 = Adap.dim(70, 70, null, null);
        Gvar.var_73 = Adap.dim(70, 70, null, null);
        Gvar.var_74 = Adap.dim(70, 70, null, null);
        Gvar.var_75 = Adap.dim(20);
        Gvar.var_76 = Adap.dim(100, 5, 3, null);
        Gvar.var_77 = Adap.dim(70, 70, null, null);
        Gvar.var_78 = Class.ItemInfo.dim(300);
        Gvar.var_79 = Adap.dim(70, 70, null, null);
        Gvar.var_80 = Adap.dim(70, 70, null, null);
        Gvar.var_81 = Adap.dim(300, 7, null, null);
        Gvar.var_82 = Adap.dim(70, 70, null, null);
        Gvar.var_83 = Class.CharactorInfo.dim(300);
        Gvar.var_84 = Adap.dim(70, 70, null, null);
        Gvar.var_85 = 0;
        if (Gvar.var_86 != 0) {
            await Func.func246(); // ダンジョンごとのモンスターハウス発生率設定処理
        }
        if (Gvar.var_86 == 0) {
            await Func.func244(); // ダンジョンマップ選択関数(IDによって割り振り)
        }
        if (Gvar.var_86 != 0) {
            await Func.func253();
            return;
        }
        await Func.func008(); // 各ダンジョンごとの背景画像(フロア、壁等のドット絵)設定処理
}

export {func007}
