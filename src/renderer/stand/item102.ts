import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 102 キングクリムゾンの発動処理
async function item102(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        await Func.setMessage1("「キング・クリムゾン」！！", "我以外の時間は消し飛ぶ！", 7, true, false, false);
        Gvar.var_393 = Adap.dim(10, 10);
        if (Gvar.var_123 == 0) {
            Gvar.var_396 = Gvar.y_axis_map_image; // map.gifのy軸座標指定。gcopy(5)
        }
        Gvar.var_123 = 1;
        Gvar.y_axis_map_image = 17; // map.gifのy軸座標指定。gcopy(5)
        Gvar.var_114 = 0;
        Gvar.var_463 = 0;
        Gvar.var_464 = 0;
        Gvar.var_461 = 0;
        Gvar.var_462 = 0;
        Adap.DSPLAY(185);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1491 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1491++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1491 = 0;
        Gvar.var_2306 = 1;
        Gvar.var_1845 = 4;
        Gvar.var_2102 = Gvar.var_66;
        Gvar.var_2103 = Gvar.var_67;
        Gvar.var_347 = Gvar.var_66;
        Gvar.var_348 = Gvar.var_67;
        await Func.func556();
        Gvar.var_2306 = 0;
        Gvar.var_1845 = 0;
        Gvar.var_124 = Gvar.var_97;
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}


export {item102}
