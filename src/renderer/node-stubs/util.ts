// Browser stub for Node 'util' module
export function promisify(fn: Function) {
    return (...args: any[]) => new Promise((resolve, reject) => {
        fn(...args, (err: any, result: any) => {
            if (err) reject(err); else resolve(result);
        });
    });
}
