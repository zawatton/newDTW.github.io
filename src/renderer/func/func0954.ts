import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func895
// どこからも呼び出されていない？ 消しても良いかも？
async function func0954(this: any) {
    Adap.clrobj();
    Adap.color(0, 0, 0);
    Adap.boxf();
    Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
    Adap.pos(35, 35);
    Adap.gcopy(17, 0, 560, 280, 120);
    Adap.color(0, 0, 0);
    Adap.gmode(4, null, null, 80);
    Adap.pos(0, 0);
    Adap.gcopy(12, 0, 0, 320, 200);
    Adap.color(255, 255, 255);
    Adap.pos(10, 20);
    Adap.mes("接続中．．．");
    Adap.pos(10, 40);
    Adap.button("キャンセル", Func.func0955);
    Adap.tcpopen(Gvar.var_1050, Gvar.var_39, Gvar.var_3814);
    if (Gvar.stat) {
        Adap.gsel( Gvar.window_id = 33, Gvar.window_mode = -1);
        Adap.gsel(0, 1);
        await Func.setMessage("接続に失敗した。", "", 7, false, false, false);
        await Func.AutoDraw(5);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
    }
    for (let cnt1 = 0; true; ++cnt1) {
        Adap.tcpiscon(Gvar.var_1050);
        if (Gvar.stat) {
            break;
        }
        await Adap.wait(1);
    }
    if (Gvar.stat != 1) {
        Adap.gsel( Gvar.window_id = 33, Gvar.window_mode = -1);
        Adap.gsel(0, 1);
        await Func.setMessage("接続に失敗した。", "", 7, false, false, false);
        await Func.AutoDraw(5);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
    }
    Adap.clrobj();
    Adap.color(0, 0, 0);
    Adap.boxf();
    Adap.title("相手の情報");
    Gvar.var_3828 = "相手の情報";
    Adap.width(320, 500);
    Gvar.var_3816 = await Adap.ginfo(4);
    Gvar.var_3817 = await Adap.ginfo(5) + 200;
    Adap.screen_(30, 320, 320, 4, Gvar.var_3816, Gvar.var_3817);
    Adap.SetWindowLongA(Gvar.hwnd, -8, Gvar.var_15);
    Gvar.var_3827 = (1 && 2) * (-2) - 16;
    Adap.gsel( Gvar.window_id = await Adap.ginfo(3), Gvar.window_mode = -1);
    Adap.gsel(await Adap.ginfo(3), 1);
    Adap.title("チャットウィンドウ");
    Adap.cls(4); // 黒く薄いフィルターがかかる
    Adap.color(0, 0, 0);
    Adap.boxf();
    Gvar.var_3829 = Adap.sdim(10000);
    Gvar.var_3829 = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
    Adap.pos(0, 294);
    Adap.input(Gvar.var_3820, 320, 24, 50);
    Gvar.var_3830 = Gvar.stat;
    Adap.pos(0, 0);
    Adap.mesbox(Gvar.var_3829, 320, 290, 0);
    Gvar.var_3831 = Gvar.stat;
    Gvar.var_3832 = Adap.objinfo(Gvar.var_3831, 2);
    Adap.objsel(Gvar.var_3830);
    await Func.func0957();
    if (Gvar.var_3833 == 1) {
        Adap.gsel( Gvar.window_id = 33, Gvar.window_mode = -1);
        Adap.gsel( Gvar.window_id = 30, Gvar.window_mode = -1);
        Adap.gsel(0, 1);
        await Func.setMessage("ここは満員だ・・・", "", 7, false, false, false);
        await Func.AutoDraw(5);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
    }
    if (Gvar.var_3834 == 1) {
        Gvar.var_407 = 2;
        Gvar.var_536 = 1;
        Gvar.var_3835 = Adap.sdim(300, 30);
        Gvar.var_3836 = Adap.sdim(300, 30);
        Gvar.var_3837 = Adap.sdim(300, 30);
        Adap.onkey(Func.func0960);
        Adap.gsel(33, 1);
        Adap.title("みんなの情報");
        Adap.gsel(0, 1);
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        await Func.func0988();
        Gvar.var_3820 = "＃ログイン＃";
        await Func.func0959();
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
    }
    Gvar.var_407 = 1;
    Adap.onkey(Func.func0960);
    Adap.gsel(33, 1);
    Adap.gsel(0, 1);
    await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
    await Func.func0966();
    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
    return;
}

export {func0954}
