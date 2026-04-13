// Browser stub for Node 'path' module
export function join(...parts: string[]) { return parts.join('/'); }
export function resolve(...parts: string[]) { return parts.join('/'); }
export function dirname(p: string) { return p.split('/').slice(0, -1).join('/'); }
export function basename(p: string) { return p.split('/').pop() || ''; }
export function extname(p: string) { const m = p.match(/\.\w+$/); return m ? m[0] : ''; }
