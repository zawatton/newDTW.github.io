// ファイルシステムへのアクセスを提供するために使用。ファイルの読み書きやディレクトリの操作など、ファイルシステム関連の機能を利用する。
const fs = require('fs'); 
// OSに関する情報を提供するために使用。現在のユーザー名やホスト名、プラットフォームの種類など、OS固有の情報を取得する。
const os = require('os'); 
// ファイルパスやディレクトリパスの操作を行うために使用。ファイルパスの結合や解析、ディレクトリ名や拡張子の取得など、ファイルパスに関連する機能を利用する。
const path = require('path'); 
// 様々なユーティリティ関数を提供するために使用。非同期コードのプロミス化やコールバックの変換、データのフォーマット、エラーハンドリングなど、一般的なユーティリティ機能を利用する。
const util = require('util'); 
// JavaScriptのオブジェクトをメッセージパックの形式にエンコード（直列化）し、メッセージパックをデコード（逆直列化）してオブジェクトに復元する機能を提供する。メッセージパックと呼ばれるバイナリフォーマットを使用して、データを効率的にシリアライズ（直列化）およびデシリアライズ（逆直列化）します。メッセージパックは JSON よりもコンパクトで高速なデータの交換フォーマットです
const msgpack = require("msgpack-lite"); 



// Ver0.1405にて追加。ルートディレクトリへnewDTWフォルダを作成。.datファイルはそのフォルダへ作成する。
export const baseDir = path.join(os.homedir(), 'newDTW');

// Ver0.1405にて追加。
export const readFile = util.promisify(fs.readFile);

// 音素材 (bgm/se) は再配布不可のためリポジトリに含まれない。ローカルに置いていない
// 環境（CI / 新規 clone / 素材未配置時）では 404 になるため、play() の未処理
// Promise rejection を吸収し「鳴らないだけでゲームは継続する」状態にする。
function safeAudio(audio: HTMLAudioElement): HTMLAudioElement {
    const origPlay = audio.play.bind(audio);
    audio.play = function (): Promise<void> {
        return origPlay().catch(() => { /* audio asset missing — stay silent */ });
    };
    return audio;
}

// Ver0.1405にて非同期関数化 (直接ファイルを確認する為)
// @ts-ignore
async function bload(file_name: any, data_size:any = null, offset:any = null) {
    
    const filePath = path.join(baseDir, file_name);
    // 効果音の読み込み
    if (file_name.split(".")[1] == "wav") {
        let audio = new Audio("../assets/se/" + file_name);
        audio.autoplay = false;
        audio.loop = false;
        return safeAudio(audio);
    }
    // BGMの読み込み
    if (file_name.split(".")[1] == "mp3") {
        //return file_name;
        let audio = new Audio("../assets/bgm/" + file_name); // mp3ファイルのパスを正しく指定してください。
        audio.autoplay = false;
        audio.loop = true;
        return safeAudio(audio);
    }

    // LocalStorageを使用する設定
    /*
    // datファイルでなければ、配列を返す？
    if (file_name.split(".")[1] != "dat") {
        return []; //配列を返す？
    }
    // セーブデータ読み込み
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    if (files[file_name] == undefined) {
        const load_data = window.localStorage.getItem(file_name);
        if (load_data != null) {
            // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            files[file_name] = JSON.parse(load_data);
        }
        else {
            return;
        }
    }
    if (offset != null) {
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        return files[file_name][offset];
    }
    else {
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        return files[file_name][0];
    }
    */

    // let data = await readFile(filePath, 'utf-8');
    // let jsondata = JSON.parse(data);

    let data = await readFile(filePath);
    let jsonData = msgpack.decode(data);

    if (offset != null) {
        return jsonData[offset];
    } else {
        return jsonData[0];
    }
}

export {bload}