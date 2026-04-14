/**
 * item571 — No = 571 ボインゴのdiscの効果
 *
 * (org原典: newDTW_item(記憶disc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 571 ボインゴのdiscの効果
async function item571(this: any) {
        await Func.AutoDraw(12);
        Gvar.var_1264 = 0;
        Gvar.var_70 = 0;
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            await Func.setMessage("しかし何も起こらなかった…",
                                   "", 7, false, false, false);
            return;
        }
        Gvar.var_1252 = 1;
        await Func.setMessage("あ…新しい予知が…現れた…ぞ…",
                               "", 7, true, false, true);

        Adap.DSPLAY(118);
        await Func.setMessage("「ﾃﾞｨｱﾎﾞﾛはﾀﾞﾝｼﾞｮﾝを歩いていました。",
                               "すると次の階で…」", 7, true, true, false);

        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12) {
            await Func.setMessage("「ﾃﾞｨｱﾎﾞﾛはﾀﾞﾝｼﾞｮﾝを歩いていました。",
                                   "するとこの階で…」", 7, true, true, false);
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
            await Func.setMessage("「ﾃﾞｨｱﾎﾞﾛはﾀﾞﾝｼﾞｮﾝを歩いていました。",
                                   "するとこの階で…」", 7, true, true, false);
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
            await Func.setMessage("「ﾃﾞｨｱﾎﾞﾛはﾀﾞﾝｼﾞｮﾝを歩いていました。",
                                   "するとこの階で…」", 7, true, true, false);
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
            await Func.setMessage("「ﾃﾞｨｱﾎﾞﾛはﾀﾞﾝｼﾞｮﾝを歩いていました。",
                                   "するとこの階で…」", 7, true, true, false);
        }
        Adap.DSPLAY(118);
        Gvar.var_2202 = Adap.rnd(13);
        // No = 4 なので、一巡後の世界
        if (Gvar.dungeon_number == 4) {
            await Func.func458(); // 恐竜の化石に関するもの(一巡後の世界のみで効果があるようになっている)
            if (Gvar.var_69 == 1) {
                Gvar.var_2202 = 6;
            }
        }
        Gvar.var_2203 = Gvar.var_20 - 1;
        if (Gvar.var_2202 == 0) {
            Gvar.var_70 = 1;
            await Func.setMessage("「ﾓﾝｽﾀｰﾊｳｽでﾎﾞｺﾎﾞｺに殴られて",
                                   "リタイアだァーッ！」", 7, false, false, false);
        }
        if (Gvar.var_2202 == 1) {
            Gvar.var_70 = 2;
            await Func.setMessage("「養分を吸い取られ",
                                  "餓死してリタイアだァーッ！」", 7, false, false, false);
        }
        if (Gvar.var_2202 == 2) {
            Gvar.var_70 = 3;
            await Func.setMessage("「体中の血を吸われて",
                                   "リタイアだァーッ！」", 7, false, false, false);
        }
        if (Gvar.var_2202 == 3) {
            Gvar.var_70 = 4;
            await Func.setMessage("「体中を蜂の巣にされて",
                                   "リタイアだァーッ！」", 7, false, false, false);
        }
        if (Gvar.var_2202 == 4) {
            Gvar.var_70 = 5;
            await Func.setMessage("「泥棒大成功！",
                                   "ﾃﾞｨｱﾎﾞﾛはほんとにラッキー！」", 7, false, false, false);
        }
        if (Gvar.var_2202 == 5) {
            Gvar.var_70 = 6;
            await Func.setMessage("「トニオさんに殴られて",
                                   "リタイアだァーッ！」", 7, false, false, false);
        }
        if (Gvar.var_2202 == 6) {
            Gvar.var_70 = 7;
            await Func.setMessage("「大部屋ﾓﾝｽﾀｰﾊｳｽだ！",
                                   "ﾃﾞｨｱﾎﾞﾛは考えるのをやめた。」", 7, false, false, false);
        }
        if (Gvar.var_2202 == 7) {
            Gvar.var_70 = 8;
            await Func.setMessage("「ｽﾀﾝﾄﾞﾊｳｽで殺されて",
                                   "リタイアだァーッ！」", 7, false, false, false);
        }
        if (Gvar.var_2202 == 8) {
            Gvar.var_70 = 9;
            await Func.setMessage("「輝く黄金の精神に囲まれて",
                                   "リタイアだァーッ！」", 7, false, false, false);
        }
        if (Gvar.var_2202 == 9) {
            Gvar.var_70 = 10;
            await Func.setMessage("「囚人の群れに囲まれて",
                                   "リタイアだァーッ！」", 7, false, false, false);
        }
        if (Gvar.var_2202 == 10) {
            Gvar.var_70 = 11;
            await Func.setMessage("「広大な砂漠で行き倒れて",
                                   "リタイアだァーッ！」", 7, false, false, false);
        }
        if (Gvar.var_2202 == 11) {
            Gvar.var_70 = 12;
            await Func.setMessage("「どこへ行くのかわからなくて",
                                   "リタイアだァーッ！」", 7, false, false, false);
        }
        if (Gvar.var_2202 == 12) {
            Gvar.var_70 = 13;
            await Func.setMessage("「俺が最強だぁああああ―――ッ！」",
                                   "", 7, false, false, false);
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 11) {
            await Func.setMessage("「ベンキを舐めさせられて",
                                   "リタイアだァーッ！」", 7, false, false, false);
            Gvar.var_70 = 0;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor == 29) {
            await Func.setMessage("「わけもわからず殺されて",
                                   "リタイアだァーッ！」", 7, false, false, false);
            Gvar.var_70 = 0;
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3 && Gvar.current_floor == 98) {
            await Func.setMessage("「わけもわからず殺されて",
                                   "リタイアだァーッ！」", 7, false, false, false);
            Gvar.var_70 = 0;
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_2203) {
            await Func.setMessage("「わけもわからず殺されて",
                                   "リタイアだァーッ！」", 7, false, false, false);
            Gvar.var_70 = 0;
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 0) { // No = 0:エンヤホテル
            await Func.setMessage("「ベンキを舐めさせられて",
                                   "リタイアだァーッ！」", 7, false, false, false);
            Gvar.var_70 = 0;
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 1) { // No = 1:虹村屋敷
            await Func.setMessage("「体中を蜂の巣にされて",
                                   "リタイアだァーッ！」", 7, false, false, false);
            Gvar.var_70 = 0;
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 2) { // No = 2:吉良屋敷
            await Func.setMessage("「爆発で粉々にされて",
                                   "リタイアだァーッ！」", 7, false, false, false);
            Gvar.var_70 = 0;
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 3) { // No = 3:杜王町埠頭
            await Func.setMessage("「電気で黒焦げにされて",
                                   "リタイアだァーッ！」", 7, false, false, false);
            Gvar.var_70 = 0;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
            await Func.setMessage("「わけもわからず殺されて",
                                   "リタイアだァーッ！」", 7, false, false, false);
            Gvar.var_70 = 0;
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
            await Func.setMessage("「わけもわからず殺されて",
                                   "リタイアだァーッ！」", 7, false, false, false);
            Gvar.var_70 = 0;
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
            await Func.setMessage("「わけもわからず殺されて",
                                   "リタイアだァーッ！」", 7, false, false, false);
            Gvar.var_70 = 0;
        }
        await Func.AutoDraw(10);
        Gvar.var_1252 = 0;
        return;
}

export {item571}
