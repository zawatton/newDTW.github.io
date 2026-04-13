// Electron API mock for browser development
export const ipcRenderer = {
    on: (_channel: string, _listener: (...args: any[]) => void) => {},
    once: (_channel: string, _listener: (...args: any[]) => void) => {},
    send: (_channel: string, ..._args: any[]) => {},
};
