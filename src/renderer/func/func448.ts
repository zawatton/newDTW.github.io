/**
 * func448 — func448 不明
 *
 * (org原典: newDTW_item(その他))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func448(this: any) {
        Adap.dbgprt(448);
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
            if (Gvar.var_1991 == 6) {
                Gvar.var_246 = 45;
                Gvar.var_1991 = 1;
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
            }
            if (Gvar.var_1991 != 6) {
                Gvar.var_246 = Gvar.var_246 + 18;
                Gvar.var_1991++;
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
            }
        }
        if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
            if (Gvar.var_1991 == 1) {
                Gvar.var_246 = 135;
                Gvar.var_1991 = 6;
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
            }
            if (Gvar.var_1991 != 1) {
                Gvar.var_246 = Gvar.var_246 - 18;
                Gvar.var_1991--;
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
            }
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Func.func450(); // ジャッジメントの問に答え、ジャッジメントが去る時の動作処理
            return;
        }
        await Func.func448();
        return;
}

export {func448}
