import * as path from 'path';
import * as Adap from '../adapter/index'

// ファイルシステムへのアクセスを提供するために使用。ファイルの読み書きやディレクトリの操作など、ファイルシステム関連の機能を利用する。
const fs = require('fs'); 

// Ver0.1310で追加。冒険日記個別削除機能。
function delete_(file_name: string) {
    /* LocalStorageを使用する場合
    localStorage.removeItem(file_name);
    location.reload();
    */
    // Ver0.1405にて追加。
    let filePath;
    filePath = path.join(Adap.baseDir, file_name);
    fs.unlinkSync(filePath);

}

export {delete_}