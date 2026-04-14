/**
 * func497 — func497 スタンドの共鳴発動時のメッセージ表示
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func497(this: any) {
    Adap.dbgprt(497);
    if (Gvar.sympathy_id == 0) {
        return;
    }
    if (Gvar.var_1926 == 0) {
        return;
    }
    Gvar.var_1173 = Gvar.sympathy_id;
    if (Gvar.var_1929 != 0) {
        return;
    }
    Gvar.var_1241 = 1;
    await Func.AutoDraw(5);
    await Func.setMessage("装備したスタンドが引きあっている！", "", 7, false, false, false);
    Gvar.var_1572 = 1;
    Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
    Adap.DSPLAY(233);
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_1572++;
    }
    Gvar.var_1572 = 0;
    Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF

    if (Gvar.sympathy_id == 1) {
        await Func.setMessage("「同じタイプのスタンド！」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 101) {
        await Func.setMessage("「狩り(ハンティング)に行こう！」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 102) {
        await Func.setMessage("「ジョースターの血統」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 103) {
        await Func.setMessage("「愛＝理解」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 104) {
        await Func.setMessage("「オラオラ無駄無駄」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 105) {
        await Func.setMessage("「本当に頼りになるやつだ」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 106) {
        await Func.setMessage("「協力してもらうぜ」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 107) {
        await Func.setMessage("「一緒に登ってきた」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 108) {
        await Func.setMessage("「お前は俺を怒らせた」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 109) {
        await Func.setMessage("「狩り(ハンティング)に行こう！」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 110) {
        await Func.setMessage("「ジョースターの血統」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 111) {
        await Func.setMessage("「愛＝理解」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 112) {
        await Func.setMessage("「オラオラ無駄無駄」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 113) {
        await Func.setMessage("「本当に頼りになるやつだ」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 114) {
        await Func.setMessage("「協力してもらうぜ」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 115) {
        await Func.setMessage("「一緒に登ってきた」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 116) {
        await Func.setMessage("「気が合う二人」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 117) {
        await Func.setMessage("「僕らの街  杜王町」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 118) {
        await Func.setMessage("「直さないからいい！」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 119) {
        await Func.setMessage("「友情のしるし！」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 120) {
        await Func.setMessage("「注文の不思議な料理店！」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 121) {
        await Func.setMessage("「追跡しろ！」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 122) {
        await Func.setMessage("「僕らの街  杜王町」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 123) {
        await Func.setMessage("「ハッピー＆メルヘン」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 124) {
        await Func.setMessage("「うンまぁ～い！」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 125) {
        await Func.setMessage("「チーム・ブチャラティ」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 126) {
        await Func.setMessage("「チーム・ブチャラティ」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 127) {
        await Func.setMessage("「チーム・ブチャラティ」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 128) {
        await Func.setMessage("「夢のために！」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 129) {
        await Func.setMessage("「チーム・ブチャラティ」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 130) {
        await Func.setMessage("「チーム・ブチャラティ」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 131) {
        await Func.setMessage("「チーム・ブチャラティ」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 132) {
        await Func.setMessage("「チーム・ブチャラティ」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 133) {
        await Func.setMessage("「チーム・ブチャラティ」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 134) {
        await Func.setMessage("「こいつにスパゲティを」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 135) {
        await Func.setMessage("「達人二刀流」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 136) {
        await Func.setMessage("「はっはっは  狙え狙え」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 137) {
        await Func.setMessage("「挟み撃ちの形」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 138) {
        await Func.setMessage("「過去を乗り越える！」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 139) {
        await Func.setMessage("「絶頂の能力」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 140) {
        await Func.setMessage("「ＤＩＯの血統」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 141) {
        await Func.setMessage("「信頼できる友」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 142) {
        await Func.setMessage("「血をささげます」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 143) {
        await Func.setMessage("「空気が火を吹いた！」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 144) {
        await Func.setMessage("「第２の爆弾」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 145) {
        await Func.setMessage("「第３の爆弾」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 146) {
        await Func.setMessage("「キラークィーン」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 147) {
        await Func.setMessage("「純潔の日々、戻らず！！」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 148) {
        await Func.setMessage("「ヤバイ「ＤＩＳＣ」がＩＮ！！」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 149) {
        await Func.setMessage("「祝福しろ！」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 150) {
        await Func.setMessage("「無重力の二人」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 151) {
        await Func.setMessage("「愛と復讐のキッス」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 152) {
        await Func.setMessage("「幽霊部屋の仲間」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 153) {
        await Func.setMessage("「一人でリラックス」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 154) {
        await Func.setMessage("「暗殺チーム」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 155) {
        await Func.setMessage("「暗殺チーム」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 156) {
        await Func.setMessage("「暗殺チーム」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 157) {
        await Func.setMessage("「真の邪悪」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 158) {
        await Func.setMessage("「パンティーあげちゃうッ！」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 159) {
        await Func.setMessage("「整形手術」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 160) {
        await Func.setMessage("「水中へよ～こそ」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 161) {
        await Func.setMessage("「雷で最大発電！」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 162) {
        await Func.setMessage("「雷で最大発電！」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 163) {
        await Func.setMessage("「電気イスの刑」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 164) {
        await Func.setMessage("「邪悪の化身」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 165) {
        await Func.setMessage("「邪悪の化身」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 166) {
        await Func.setMessage("「暗黒空間の軌跡」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 167) {
        await Func.setMessage("「気まずい二人」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 168) {
        await Func.setMessage("「気まずい二人」", "", 7, false, false, false);
    }
    if (Gvar.sympathy_id == 169) {
        await Func.setMessage("「マジに信じたのか！」", "", 7, false, false, false);
    }
    await Func.AutoDraw(10);
    Gvar.var_1241 = 0;
    return;
}

export { func497 }
