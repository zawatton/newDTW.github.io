/**
 * item407 — No = 407 ハイエロファントエメラルドの発動処理
 *
 * 各スタンドの発動能力設定。
 *
 * (org原典: newDTW_item(スタンドdisc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 407 ハイエロファントエメラルドの発動処理
async function item407(this: any) {
        Gvar.var_2331 = 0;
        Gvar.var_2332 = Gvar.var_66;
        Gvar.var_2333 = Gvar.var_67;
        Gvar.var_2334 = Gvar.var_66 - 1;
        if (Gvar.var_2334 <= 0) {
            Gvar.var_2334 = 0;
        }
        Gvar.var_2335 = Gvar.var_66 + 1;
        if (Gvar.var_2335 >= Gvar.var_33) {
            Gvar.var_2335 = Gvar.var_33;
        }
        Gvar.var_2336 = Gvar.var_67 - 1;
        if (Gvar.var_2336 <= 0) {
            Gvar.var_2336 = 0;
        }
        Gvar.var_2337 = Gvar.var_67 + 1;
        if (Gvar.var_2337 >= Gvar.var_34) {
            Gvar.var_2337 = Gvar.var_34;
        }
        Gvar.var_2338 = 92;
        if (Gvar.var_71[Gvar.var_2332][Gvar.var_2333] != 0 && Gvar.var_71[Gvar.var_2332][Gvar.var_2333] != 13 && Gvar.var_73[Gvar.var_2332][Gvar.var_2333] == 0 && Gvar.var_77[Gvar.var_2332][Gvar.var_2333] == 0 && Gvar.var_80[Gvar.var_2332][Gvar.var_2333] == 0) {
            Gvar.var_337 = Gvar.var_337 + 1;
            Gvar.var_80[Gvar.var_2332][Gvar.var_2333] = Gvar.var_337;
            Gvar.var_81[Gvar.var_337][0] = Gvar.var_2338;
            Gvar.var_81[Gvar.var_337][1] = Gvar.var_2332;
            Gvar.var_81[Gvar.var_337][2] = Gvar.var_2333;
            Gvar.var_81[Gvar.var_337][4] = 1;
            Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_2332][Gvar.var_2333];
            Gvar.var_2331 = 1;
        }
        if (Gvar.var_71[Gvar.var_2334][Gvar.var_2333] != 0 && Gvar.var_71[Gvar.var_2334][Gvar.var_2333] != 13 && Gvar.var_73[Gvar.var_2334][Gvar.var_2333] == 0 && Gvar.var_77[Gvar.var_2334][Gvar.var_2333] == 0 && Gvar.var_80[Gvar.var_2334][Gvar.var_2333] == 0) {
            Gvar.var_2339 = Gvar.var_2334;
            Gvar.var_2340 = Gvar.var_2333;
            Gvar.var_337 = Gvar.var_337 + 1;
            Gvar.var_80[Gvar.var_2339][Gvar.var_2340] = Gvar.var_337;
            Gvar.var_81[Gvar.var_337][0] = Gvar.var_2338;
            Gvar.var_81[Gvar.var_337][1] = Gvar.var_2339;
            Gvar.var_81[Gvar.var_337][2] = Gvar.var_2340;
            Gvar.var_81[Gvar.var_337][4] = 1;
            Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_2339][Gvar.var_2340];
            Gvar.var_2331 = 1;
        }
        if (Gvar.var_71[Gvar.var_2335][Gvar.var_2333] != 0 && Gvar.var_71[Gvar.var_2335][Gvar.var_2333] != 13 && Gvar.var_73[Gvar.var_2335][Gvar.var_2333] == 0 && Gvar.var_77[Gvar.var_2335][Gvar.var_2333] == 0 && Gvar.var_80[Gvar.var_2335][Gvar.var_2333] == 0) {
            Gvar.var_2339 = Gvar.var_2335;
            Gvar.var_2340 = Gvar.var_2333;
            Gvar.var_337 = Gvar.var_337 + 1;
            Gvar.var_80[Gvar.var_2339][Gvar.var_2340] = Gvar.var_337;
            Gvar.var_81[Gvar.var_337][0] = Gvar.var_2338;
            Gvar.var_81[Gvar.var_337][1] = Gvar.var_2339;
            Gvar.var_81[Gvar.var_337][2] = Gvar.var_2340;
            Gvar.var_81[Gvar.var_337][4] = 1;
            Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_2339][Gvar.var_2340];
            Gvar.var_2331 = 1;
        }
        if (Gvar.var_71[Gvar.var_2332][Gvar.var_2337] != 0 && Gvar.var_71[Gvar.var_2332][Gvar.var_2337] != 13 && Gvar.var_73[Gvar.var_2332][Gvar.var_2337] == 0 && Gvar.var_77[Gvar.var_2332][Gvar.var_2337] == 0 && Gvar.var_80[Gvar.var_2332][Gvar.var_2337] == 0) {
            Gvar.var_2339 = Gvar.var_2332;
            Gvar.var_2340 = Gvar.var_2337;
            Gvar.var_337 = Gvar.var_337 + 1;
            Gvar.var_80[Gvar.var_2339][Gvar.var_2340] = Gvar.var_337;
            Gvar.var_81[Gvar.var_337][0] = Gvar.var_2338;
            Gvar.var_81[Gvar.var_337][1] = Gvar.var_2339;
            Gvar.var_81[Gvar.var_337][2] = Gvar.var_2340;
            Gvar.var_81[Gvar.var_337][4] = 1;
            Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_2339][Gvar.var_2340];
            Gvar.var_2331 = 1;
        }
        if (Gvar.var_71[Gvar.var_2332][Gvar.var_2336] != 0 && Gvar.var_71[Gvar.var_2332][Gvar.var_2336] != 13 && Gvar.var_73[Gvar.var_2332][Gvar.var_2336] == 0 && Gvar.var_77[Gvar.var_2332][Gvar.var_2336] == 0 && Gvar.var_80[Gvar.var_2332][Gvar.var_2336] == 0) {
            Gvar.var_2339 = Gvar.var_2332;
            Gvar.var_2340 = Gvar.var_2336;
            Gvar.var_337 = Gvar.var_337 + 1;
            Gvar.var_80[Gvar.var_2339][Gvar.var_2340] = Gvar.var_337;
            Gvar.var_81[Gvar.var_337][0] = Gvar.var_2338;
            Gvar.var_81[Gvar.var_337][1] = Gvar.var_2339;
            Gvar.var_81[Gvar.var_337][2] = Gvar.var_2340;
            Gvar.var_81[Gvar.var_337][4] = 1;
            Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_2339][Gvar.var_2340];
            Gvar.var_2331 = 1;
        }
        if (Gvar.var_71[Gvar.var_2334][Gvar.var_2337] != 0 && Gvar.var_71[Gvar.var_2334][Gvar.var_2337] != 13 && Gvar.var_73[Gvar.var_2334][Gvar.var_2337] == 0 && Gvar.var_77[Gvar.var_2334][Gvar.var_2337] == 0 && Gvar.var_80[Gvar.var_2334][Gvar.var_2337] == 0) {
            Gvar.var_2339 = Gvar.var_2334;
            Gvar.var_2340 = Gvar.var_2337;
            Gvar.var_337 = Gvar.var_337 + 1;
            Gvar.var_80[Gvar.var_2339][Gvar.var_2340] = Gvar.var_337;
            Gvar.var_81[Gvar.var_337][0] = Gvar.var_2338;
            Gvar.var_81[Gvar.var_337][1] = Gvar.var_2339;
            Gvar.var_81[Gvar.var_337][2] = Gvar.var_2340;
            Gvar.var_81[Gvar.var_337][4] = 1;
            Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_2339][Gvar.var_2340];
            Gvar.var_2331 = 1;
        }
        if (Gvar.var_71[Gvar.var_2334][Gvar.var_2336] != 0 && Gvar.var_71[Gvar.var_2334][Gvar.var_2336] != 13 && Gvar.var_73[Gvar.var_2334][Gvar.var_2336] == 0 && Gvar.var_77[Gvar.var_2334][Gvar.var_2336] == 0 && Gvar.var_80[Gvar.var_2334][Gvar.var_2336] == 0) {
            Gvar.var_2339 = Gvar.var_2334;
            Gvar.var_2340 = Gvar.var_2336;
            Gvar.var_337 = Gvar.var_337 + 1;
            Gvar.var_80[Gvar.var_2339][Gvar.var_2340] = Gvar.var_337;
            Gvar.var_81[Gvar.var_337][0] = Gvar.var_2338;
            Gvar.var_81[Gvar.var_337][1] = Gvar.var_2339;
            Gvar.var_81[Gvar.var_337][2] = Gvar.var_2340;
            Gvar.var_81[Gvar.var_337][4] = 1;
            Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_2339][Gvar.var_2340];
            Gvar.var_2331 = 1;
        }
        if (Gvar.var_71[Gvar.var_2335][Gvar.var_2337] != 0 && Gvar.var_71[Gvar.var_2335][Gvar.var_2337] != 13 && Gvar.var_73[Gvar.var_2335][Gvar.var_2337] == 0 && Gvar.var_77[Gvar.var_2335][Gvar.var_2337] == 0 && Gvar.var_80[Gvar.var_2335][Gvar.var_2337] == 0) {
            Gvar.var_2339 = Gvar.var_2335;
            Gvar.var_2340 = Gvar.var_2337;
            Gvar.var_337 = Gvar.var_337 + 1;
            Gvar.var_80[Gvar.var_2339][Gvar.var_2340] = Gvar.var_337;
            Gvar.var_81[Gvar.var_337][0] = Gvar.var_2338;
            Gvar.var_81[Gvar.var_337][1] = Gvar.var_2339;
            Gvar.var_81[Gvar.var_337][2] = Gvar.var_2340;
            Gvar.var_81[Gvar.var_337][4] = 1;
            Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_2339][Gvar.var_2340];
            Gvar.var_2331 = 1;
        }
        if (Gvar.var_71[Gvar.var_2335][Gvar.var_2336] != 0 && Gvar.var_71[Gvar.var_2335][Gvar.var_2336] != 13 && Gvar.var_73[Gvar.var_2335][Gvar.var_2336] == 0 && Gvar.var_77[Gvar.var_2335][Gvar.var_2336] == 0 && Gvar.var_80[Gvar.var_2335][Gvar.var_2336] == 0) {
            Gvar.var_2339 = Gvar.var_2335;
            Gvar.var_2340 = Gvar.var_2336;
            Gvar.var_337 = Gvar.var_337 + 1;
            Gvar.var_80[Gvar.var_2339][Gvar.var_2340] = Gvar.var_337;
            Gvar.var_81[Gvar.var_337][0] = Gvar.var_2338;
            Gvar.var_81[Gvar.var_337][1] = Gvar.var_2339;
            Gvar.var_81[Gvar.var_337][2] = Gvar.var_2340;
            Gvar.var_81[Gvar.var_337][4] = 1;
            Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_2339][Gvar.var_2340];
            Gvar.var_2331 = 1;
        }
        if (Gvar.var_2331 == 0) {
            await Func.setMessage("この辺りには仕掛けられない。",
                                   "", 7, false, false, false);
            await Func.AutoDraw(5);
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        Adap.DSPLAY(165);
        await Func.setMessage("法王の結界を仕掛けた。",
                               "", 7, false, false, false);
        await Func.AutoDraw(5);
        Gvar.belongings_item_list = Gvar.activated_disc_id;
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item407}
