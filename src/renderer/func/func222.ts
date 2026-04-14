/**
 * func222 — func222 不明
 *
 * (org原典: newDTW_func2)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func222(this: any) {
        Adap.dbgprt(222);
        await Adap.wait(5);
        Adap.redraw(0);
        Adap.color(0, 0, 0);
        Adap.boxf();
        Adap.font("メイリオ", 16);
        Adap.color(255, 255, 255);
        Adap.pos(70, 20);
        Adap.mes("---ディアボロ-----");
        Adap.pos(70, 40);
        Adap.mes("レベル  " + Gvar.var_933);
        Adap.pos(70, 60);
        Adap.mes("攻撃力  " + Gvar.var_935);
        Adap.pos(70, 80);
        Adap.mes("防御力  " + Gvar.var_936);
        Adap.pos(70, 100);
        Adap.mes("精神力  " + Gvar.var_937);
        Adap.pos(70, 120);
        Adap.mes("HP  " + Gvar.var_938);
        Adap.pos(70, 140);
        Adap.mes("-------敵---------");
        Adap.pos(70, 160);
        Adap.mes("攻撃力  " + Gvar.var_942);
        Adap.pos(70, 180);
        Adap.mes("防御力  " + Gvar.var_943);
        Adap.pos(70, 200);
        Adap.mes("------------------");
        Adap.pos(70, 220);
        Adap.color(255, 255, 0);
        Adap.mes("与えるダメージ  " + Gvar.var_944 + "  ～  " + Gvar.var_945);
        Adap.pos(70, 240);
        Adap.color(255, 0, 0);
        Adap.mes("食らうダメージ  " + Gvar.var_946 + "  ～  " + Gvar.var_947);
        Adap.pos(70, 260);
        Adap.color(255, 255, 255);
        Adap.mes("------------------");
        Adap.pos(70, 280);
        Adap.mes("階層  " + Gvar.var_63);
        Adap.pos(70, 300);
        Adap.mes("次exp  " + Gvar.var_941);
        Adap.pos(70, 320);
        Adap.color(0, 255, 0);
        Adap.mes("exp：  合計  " + Gvar.var_939 + "  平均  " + Gvar.var_940);
        if (Gvar.var_932 == 0) {
            Adap.pos(50, 40);
        }
        if (Gvar.var_932 == 1) {
            Adap.pos(50, 60);
        }
        if (Gvar.var_932 == 2) {
            Adap.pos(50, 80);
        }
        if (Gvar.var_932 == 3) {
            Adap.pos(50, 100);
        }
        if (Gvar.var_932 == 4) {
            Adap.pos(50, 160);
        }
        if (Gvar.var_932 == 5) {
            Adap.pos(50, 180);
        }
        if (Gvar.var_932 == 6) {
            Adap.pos(50, 280);
        }
        Adap.color(255, 255, 255);
        Adap.mes(">");
        Adap.redraw(1);
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_X_on == 1) {
            await Func.func140(); // 不明(タイトル画面処理？)
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_932 != 6) { // var_259:入力判定[↓]
            Gvar.var_932 = Gvar.var_932 + 1;
            await Adap.wait(5);
            await Func.func222();
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_932 == 6) { // var_259:入力判定[↓]
            await Func.func223();
            await Adap.wait(5);
            await Func.func222();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_932 != 0) { // var_255:入力判定[↑]
            Gvar.var_932 = Gvar.var_932 - 1;
            await Adap.wait(5);
            await Func.func222();
            return;
        }
        if (Gvar.var_257 == 1) {
            if (Gvar.var_932 == 0 && Gvar.var_933 < 99) {
                Gvar.var_933++;
                Gvar.var_938 = Gvar.var_933 * 4 + 11;
            }
            if (Gvar.var_932 == 1 && Gvar.var_935 < 130) {
                Gvar.var_935++;
            }
            if (Gvar.var_932 == 2 && Gvar.var_936 < 130) {
                Gvar.var_936++;
            }
            if (Gvar.var_932 == 3 && Gvar.var_937 < 99) {
                Gvar.var_937++;
            }
            if (Gvar.var_932 == 4 && Gvar.var_942 < 9999) {
                Gvar.var_942++;
            }
            if (Gvar.var_932 == 5 && Gvar.var_943 < 9999) {
                Gvar.var_943++;
            }
            if (Gvar.var_932 == 6 && Gvar.var_63 < 999) {
                Gvar.var_63++;
            }
            await Func.func223();
            await Adap.wait(5);
            await Func.func222();
            return;
        }
        if (Gvar.var_254 == 1) {
            if (Gvar.var_932 == 0 && Gvar.var_933 > 1) {
                Gvar.var_933--;
                Gvar.var_938 = Gvar.var_933 * 4 + 11;
            }
            if (Gvar.var_932 == 1 && Gvar.var_935 > 0) {
                Gvar.var_935--;
            }
            if (Gvar.var_932 == 2 && Gvar.var_936 > 0) {
                Gvar.var_936--;
            }
            if (Gvar.var_932 == 3 && Gvar.var_937 > 0) {
                Gvar.var_937--;
            }
            if (Gvar.var_932 == 4 && Gvar.var_942 > 0) {
                Gvar.var_942--;
            }
            if (Gvar.var_932 == 5 && Gvar.var_943 > 0) {
                Gvar.var_943--;
            }
            if (Gvar.var_932 == 6 && Gvar.var_63 > 1) {
                Gvar.var_63--;
            }
            if (Gvar.var_932 == 1 && Gvar.var_935 == 0) {
                Gvar.var_935 = 130;
            }
            if (Gvar.var_932 == 2 && Gvar.var_936 == 0) {
                Gvar.var_936 = 130;
            }
            if (Gvar.var_932 == 3 && Gvar.var_937 == 0) {
                Gvar.var_937 = 99;
            }
            if (Gvar.var_932 == 4 && Gvar.var_942 == 0) {
                Gvar.var_942 = 999;
            }
            if (Gvar.var_932 == 5 && Gvar.var_943 == 0) {
                Gvar.var_943 = 999;
            }
            if (Gvar.var_932 == 6 && Gvar.var_63 == 1) {
                Gvar.var_63 = 99;
            }
            await Func.func223();
            await Adap.wait(5);
            await Func.func222();
            return;
        }
        await Func.func222();
        return;
}

export {func222}
