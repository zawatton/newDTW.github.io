import * as Adap from '../adapter/index'
import { Gvar } from '../variable'

// ファイルシステムへのアクセスを提供するために使用。ファイルの読み書きやディレクトリの操作など、ファイルシステム関連の機能を利用する。
const fs = require('fs'); 
// ファイルパスやディレクトリパスの操作を行うために使用。ファイルパスの結合や解析、ディレクトリ名や拡張子の取得など、ファイルパスに関連する機能を利用する。
const path = require('path'); 
// 様々なユーティリティ関数を提供するために使用。非同期コードのプロミス化やコールバックの変換、データのフォーマット、エラーハンドリングなど、一般的なユーティリティ機能を利用する。
const util = require('util'); 

// Ver0.1405にて追加。
const stat1 = util.promisify(fs.stat);

// Ver0.1405にて非同期関数化 (直接ファイルを確認する為)
// @ts-expect-error TS(7006): Parameter 'file_name' implicitly has an 'any' type... Remove this comment to see the full error message
async function exist(file_name) {
    // LocalStorageを使用する場合
    /*
    await bload(file_name);
    // @ts-ignore
    if (files[file_name]) {
        // @ts-ignore
        Gvar.strsize = Object.keys(files[file_name]).length; // オブジェクトfiles[file_name]の要素数を知る
    }
    else {
        Gvar.strsize = -1;
    }*/

    // Ver0.1405にて追加。
    let filePath;
    const ext = path.extname(file_name);

    // Check file extension and adjust directory accordingly
    if (ext === ".wav") {
        filePath = path.join(__dirname, "../assets", "se", file_name);
    } else if (ext === ".mp3") {
        filePath = path.join(__dirname, "../assets", "bgm", file_name);
    } else {
        filePath = path.join(Adap.baseDir, file_name);
    }

    try {
        const stats = await stat1(filePath);
        Gvar.strsize = stats.size;
    } catch (err) {
        // ENOENT is the normal "file absent" signal — don't flood the console.
        if (err && err.code !== 'ENOENT') {
            console.error(`Error in exist function: ${err.message}`);
        }
        Gvar.strsize = -1;
    }
}

export {exist}