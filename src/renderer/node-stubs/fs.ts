// Browser stub for Node 'fs' module
// All file operations return errors/defaults - game handles gracefully
export function readFile(_path: string, _opts: any, cb?: Function) {
    if (typeof _opts === 'function') { cb = _opts; }
    if (cb) cb(new Error('fs not available in browser'));
}
export function writeFile(_path: string, _data: any, _opts: any, cb?: Function) {
    if (typeof _opts === 'function') { cb = _opts; }
    if (cb) cb(new Error('fs not available in browser'));
}
export function stat(_path: string, cb?: Function) {
    if (cb) cb(new Error('fs not available in browser'));
}
export function access(_path: string, _mode: any, cb?: Function) {
    if (typeof _mode === 'function') { cb = _mode; }
    if (cb) cb(new Error('fs not available in browser'));
}
export function existsSync(_path: string) { return false; }
export function mkdirSync(_path: string, _opts?: any) {}
export function readFileSync(_path: string) { return ''; }
export function writeFileSync(_path: string, _data: any) {}
