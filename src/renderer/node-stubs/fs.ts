// Browser stub for Node 'fs' module
// In-memory Map so saves survive the session — avoids the infinite-recursion
// trap where callers do `if (!exists) { write(); recurse(); }`.
const ENOENT: any = Object.assign(new Error('ENOENT'), { code: 'ENOENT' });
const _memFs: Map<string, any> = new Map();

function _isDirPath(p: string) {
    // Any stored key under the given prefix counts as a directory hit.
    const norm = p.replace(/[\\/]+$/, '');
    for (const k of _memFs.keys()) {
        if (k === norm || k.startsWith(norm + '/') || k.startsWith(norm + '\\')) {
            return true;
        }
    }
    return false;
}

export function readFile(path: string, _opts: any, cb?: Function) {
    if (typeof _opts === 'function') { cb = _opts; }
    if (!cb) return;
    if (_memFs.has(path)) { cb(null, _memFs.get(path)); }
    else { cb(ENOENT); }
}
export function writeFile(path: string, data: any, _opts: any, cb?: Function) {
    if (typeof _opts === 'function') { cb = _opts; }
    _memFs.set(path, data);
    if (cb) cb(null);
}
export function stat(path: string, cb?: Function) {
    if (!cb) return;
    if (_memFs.has(path)) {
        const d = _memFs.get(path);
        const size = (d && typeof d.length === 'number') ? d.length : 0;
        cb(null, { size, isDirectory: () => false, isFile: () => true });
    } else if (_isDirPath(path)) {
        cb(null, { size: 0, isDirectory: () => true, isFile: () => false });
    } else {
        cb(ENOENT);
    }
}
export function access(path: string, _mode: any, cb?: Function) {
    if (typeof _mode === 'function') { cb = _mode; }
    if (!cb) return;
    if (_memFs.has(path) || _isDirPath(path)) cb(null);
    else cb(ENOENT);
}
// Node's real fs.exists uses `cb(result)` (no err arg) but user code pipes
// this through util.promisify — which would treat a truthy result as the
// error and reject with `true`. Emit error-first `cb(null, bool)` instead.
export function exists(path: string, cb?: Function) {
    if (cb) cb(null, _memFs.has(path) || _isDirPath(path));
}
export function mkdir(_path: string, _opts: any, cb?: Function) {
    if (typeof _opts === 'function') { cb = _opts; }
    // Directories are implicit in this stub; no-op.
    if (cb) cb(null);
}
export function existsSync(path: string) { return _memFs.has(path) || _isDirPath(path); }
export function mkdirSync(_path: string, _opts?: any) {}
export function readFileSync(path: string) { return _memFs.has(path) ? _memFs.get(path) : ''; }
export function writeFileSync(path: string, data: any) { _memFs.set(path, data); }
