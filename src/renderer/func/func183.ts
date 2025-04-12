import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func183(this: any) {
        Adap.dbgprt(183);
        Gvar.var_867 = Adap.sdim(1000);
        Gvar.var_868 = Adap.sdim(1000);
        Gvar.var_869 = 1;
        await Func.func188();
        await Func.func187();
        Gvar.var_869 = 0;
        await Func.func189();
        await Func.func190();
        Gvar.var_867 = "1";
        Gvar.var_868 = "1";
        Gvar.var_870 = 2;
        for (let cnt1 = 0; cnt1 < 98; ++cnt1) {
            Gvar.var_867 = Gvar.var_867 + "\n" + Gvar.var_870;
            Gvar.var_868 = Gvar.var_868 + "\n" + Gvar.var_870;
            Gvar.var_870++;
        }
        Adap.screen_(31, 350, 250, 10);
        Adap.title("デバッグウィンドウ");
        Adap.cls(1); // 黒く薄いフィルターがかかる
        Adap.objmode(1, 1);
        Adap.font(Gvar.font_type, 10);
        Adap.color(0, 0, 0);
        Adap.pos(10, 5);
        Adap.mes("階層");
        Adap.pos(90, 5);
        Adap.mes("レベル");
        Adap.pos(10, 45);
        Adap.mes("アイテムリスト");
        Adap.pos(180, 45);
        Adap.mes("所持アイテム");
        Adap.pos(10, 20);
        Adap.combox(Gvar.var_871, 300, Gvar.var_867);
        Adap.pos(90, 20);
        Adap.combox(Gvar.var_872, 200, Gvar.var_868);
        Adap.pos(10, 60);
        Adap.objsize(150);
        Adap.listbox(Gvar.var_873, 100, Gvar.var_874);
        Adap.pos(180, 60);
        Adap.objsize(150);
        Adap.listbox(Gvar.var_875, 100, Gvar.var_876);
        Adap.objsize(Gvar.data0 = 60, Gvar.data1 = 20);
        Adap.pos(50, 175);
        Adap.button("追加→", Func.func191);
        Adap.pos(220, 175);
        Adap.button("削除", Func.func192);
        Adap.pos(180, 20);
        Adap.button("階移動", Func.func185);
        Adap.pos(250, 20);
        Adap.button("閉じる", Func.func186);
        Adap.pos(10, 200);
        Adap.objsize(Gvar.data0 = 100, Gvar.data1 = 20);
        Adap.chkbox("助っ人", Gvar.var_877);
        Adap.pos(115, 200);
        Adap.objsize(Gvar.data0 = 110, Gvar.data1 = 20);
        Adap.chkbox("未識別", Gvar.var_878);
        Adap.pos(240, 200);
        Adap.objsize(100);
        Adap.combox(Gvar.var_879, 100, "スタンド色\n0\n1\n2\n3");
        return;
}

export {func183}
