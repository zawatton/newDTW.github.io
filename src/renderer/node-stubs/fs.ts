// Browser stub for Node 'fs' module.
//
// Writes are mirrored to localStorage so saves survive page reloads
// (GitHub Pages build — replicates the pre-fork browser-cache behavior).
// Binary payloads (msgpack-encoded save files) are base64-encoded before
// hitting localStorage; plain strings are stored as-is with a `s:` prefix.
const ENOENT: any = Object.assign(new Error('ENOENT'), { code: 'ENOENT' });
const _memFs: Map<string, any> = new Map();

const LS_PREFIX = 'newdtw:fs:';

function _lsAvailable(): boolean {
    try { return typeof window !== 'undefined' && !!window.localStorage; }
    catch { return false; }
}

function _bytesToBase64(bytes: Uint8Array): string {
    let bin = '';
    const chunk = 0x8000;
    for (let i = 0; i < bytes.length; i += chunk) {
        bin += String.fromCharCode.apply(null, Array.from(bytes.subarray(i, i + chunk)) as any);
    }
    return typeof btoa !== 'undefined' ? btoa(bin) : Buffer.from(bin, 'binary').toString('base64');
}

function _base64ToBytes(b64: string): Uint8Array {
    const bin = typeof atob !== 'undefined' ? atob(b64) : Buffer.from(b64, 'base64').toString('binary');
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
}

function _lsPersist(path: string, data: any) {
    if (!_lsAvailable()) return;
    try {
        let payload: string;
        if (data == null) payload = 'n:';
        else if (typeof data === 'string') payload = 's:' + data;
        else if (data instanceof Uint8Array) payload = 'b:' + _bytesToBase64(data);
        else if (data && typeof data === 'object' && (data as any).buffer instanceof ArrayBuffer) {
            // Buffer (Node) or TypedArray — normalize via Uint8Array view
            const u8 = new Uint8Array((data as any).buffer, (data as any).byteOffset || 0, (data as any).byteLength || (data as any).length || 0);
            payload = 'b:' + _bytesToBase64(u8);
        } else {
            payload = 'j:' + JSON.stringify(data);
        }
        window.localStorage.setItem(LS_PREFIX + path, payload);
    } catch (e) {
        // localStorage quota exceeded or serialization failure — keep memory copy
        console.warn('[fs-stub] localStorage persist failed for', path, e);
    }
}

function _lsRevive(payload: string): any {
    const tag = payload.slice(0, 2);
    const body = payload.slice(2);
    if (tag === 'n:') return null;
    if (tag === 's:') return body;
    if (tag === 'b:') return _base64ToBytes(body);
    if (tag === 'j:') { try { return JSON.parse(body); } catch { return body; } }
    // legacy (pre-prefix): treat as string
    return payload;
}

function _lsHydrate() {
    if (!_lsAvailable()) return;
    try {
        for (let i = 0; i < window.localStorage.length; i++) {
            const k = window.localStorage.key(i);
            if (!k || !k.startsWith(LS_PREFIX)) continue;
            const path = k.slice(LS_PREFIX.length);
            const raw = window.localStorage.getItem(k);
            if (raw == null) continue;
            _memFs.set(path, _lsRevive(raw));
        }
    } catch (e) {
        console.warn('[fs-stub] localStorage hydrate failed', e);
    }
}

_lsHydrate();

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
    _lsPersist(path, data);
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
export function writeFileSync(path: string, data: any) {
    _memFs.set(path, data);
    _lsPersist(path, data);
}
