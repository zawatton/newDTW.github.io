import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 206 オアシスの発動処理
async function item206(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        await Func.setMessage1("周囲がドロドロになってきた…",
                               "", 7, true, false, false);
        Gvar.var_159 = 1;
        Gvar.var_289 = Gvar.var_66 - 1;
        if (Gvar.var_289 < 0) {
            Gvar.var_289 = 0;
        }
        Gvar.var_290 = Gvar.var_66 + 1;
        if (Gvar.var_290 > Gvar.var_33) {
            Gvar.var_290 = Gvar.var_33;
        }
        Gvar.var_291 = Gvar.var_67 + 1;
        if (Gvar.var_291 > Gvar.var_34) {
            Gvar.var_291 = Gvar.var_34;
        }
        Gvar.var_292 = Gvar.var_67 - 1;
        if (Gvar.var_292 < 0) {
            Gvar.var_292 = 0;
        }
        Gvar.var_345 = 0;
        Gvar.var_346 = Adap.dim(10, 10);
        if (Gvar.var_71[Gvar.var_66][Gvar.var_67] == 0) {
            Gvar.var_347 = Gvar.var_66;
            Gvar.var_348 = Gvar.var_67;
            await Func.func622();
            Gvar.var_345 = 1;
            Gvar.var_346[0][1] = Gvar.var_347;
            Gvar.var_346[0][2] = Gvar.var_348;
        }
        if (Gvar.var_71[Gvar.var_289][Gvar.var_67] == 0) {
            Gvar.var_347 = Gvar.var_289;
            Gvar.var_348 = Gvar.var_67;
            await Func.func622();
            Gvar.var_345 = 1;
            Gvar.var_346[4][1] = Gvar.var_347;
            Gvar.var_346[4][2] = Gvar.var_348;
        }
        if (Gvar.var_71[Gvar.var_290][Gvar.var_67] == 0) {
            Gvar.var_347 = Gvar.var_290;
            Gvar.var_348 = Gvar.var_67;
            await Func.func622();
            Gvar.var_345 = 1;
            Gvar.var_346[6][1] = Gvar.var_347;
            Gvar.var_346[6][2] = Gvar.var_348;
        }
        if (Gvar.var_71[Gvar.var_66][Gvar.var_291] == 0) {
            Gvar.var_347 = Gvar.var_66;
            Gvar.var_348 = Gvar.var_291;
            await Func.func622();
            Gvar.var_345 = 1;
            Gvar.var_346[2][1] = Gvar.var_347;
            Gvar.var_346[2][2] = Gvar.var_348;
        }
        if (Gvar.var_71[Gvar.var_66][Gvar.var_292] == 0) {
            Gvar.var_347 = Gvar.var_66;
            Gvar.var_348 = Gvar.var_292;
            await Func.func622();
            Gvar.var_345 = 1;
            Gvar.var_346[8][1] = Gvar.var_347;
            Gvar.var_346[8][2] = Gvar.var_348;
        }
        if (Gvar.var_71[Gvar.var_289][Gvar.var_291] == 0) {
            Gvar.var_347 = Gvar.var_289;
            Gvar.var_348 = Gvar.var_291;
            await Func.func622();
            Gvar.var_345 = 1;
            Gvar.var_346[1][1] = Gvar.var_347;
            Gvar.var_346[1][2] = Gvar.var_348;
        }
        if (Gvar.var_71[Gvar.var_290][Gvar.var_291] == 0) {
            Gvar.var_347 = Gvar.var_290;
            Gvar.var_348 = Gvar.var_291;
            await Func.func622();
            Gvar.var_345 = 1;
            Gvar.var_346[3][1] = Gvar.var_347;
            Gvar.var_346[3][2] = Gvar.var_348;
        }
        if (Gvar.var_71[Gvar.var_289][Gvar.var_292] == 0) {
            Gvar.var_347 = Gvar.var_289;
            Gvar.var_348 = Gvar.var_292;
            await Func.func622();
            Gvar.var_345 = 1;
            Gvar.var_346[7][1] = Gvar.var_347;
            Gvar.var_346[7][2] = Gvar.var_348;
        }
        if (Gvar.var_71[Gvar.var_290][Gvar.var_292] == 0) {
            Gvar.var_347 = Gvar.var_290;
            Gvar.var_348 = Gvar.var_292;
            await Func.func622();
            Gvar.var_345 = 1;
            Gvar.var_346[9][1] = Gvar.var_347;
            Gvar.var_346[9][2] = Gvar.var_348;
        }
        if (Gvar.var_345 == 1) {
    
            Adap.DSPLAY(123);
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                Gvar.var_349++;
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_349 = 0;

            Gvar.var_346 = Adap.dim(10, 10);
        }
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item206}
