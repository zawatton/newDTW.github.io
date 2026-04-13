import { Gvar } from '../variable';

interface SpriteEntry {
    file: string;
    legacy: { buffer: number; x: number; y: number; w: number; h: number };
}

interface Manifest {
    version: number;
    cellSize: { w: number; h: number };
    spriteCount: number;
    sprites: Record<string, SpriteEntry>;
    legacyIndex: Record<string, string>; // "buffer:x:y" → sprite name
}

interface DrawOptions {
    width?: number;
    height?: number;
}

class SpriteManagerClass {
    private images: Map<string, HTMLImageElement> = new Map();
    private legacyIndex: Map<string, string> = new Map();
    private manifest: Manifest | null = null;
    private _ready = false;
    private basePath = '';

    get ready(): boolean {
        return this._ready;
    }

    /**
     * Initialize: load manifest and preload all sprite images.
     * Call once during game initialization.
     */
    async init(basePath: string): Promise<void> {
        this.basePath = basePath;

        // Load manifest
        const manifestPath = basePath + '/sprites/manifest.json';
        const response = await fetch(manifestPath);
        if (!response.ok) {
            console.warn('[SpriteManager] manifest.json not found, running in legacy mode');
            return;
        }
        this.manifest = await response.json() as Manifest;

        // Build legacy index
        for (const [key, name] of Object.entries(this.manifest.legacyIndex)) {
            this.legacyIndex.set(key, name);
        }

        // Preload all images
        const entries = Object.entries(this.manifest.sprites);
        const batchSize = 50;
        for (let i = 0; i < entries.length; i += batchSize) {
            const batch = entries.slice(i, i + batchSize);
            await Promise.all(batch.map(([name, entry]) => this.loadImage(name, entry.file)));
        }

        this._ready = true;
        console.log(`[SpriteManager] Loaded ${this.images.size} sprites`);
    }

    private loadImage(name: string, file: string): Promise<void> {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                this.images.set(name, img);
                resolve();
            };
            img.onerror = () => {
                // Silently skip missing files
                resolve();
            };
            img.src = this.basePath + '/' + file;
        });
    }

    /**
     * Draw a named sprite at the current Gvar.position.
     * Use this for new code instead of gcopy.
     */
    draw(name: string, opts?: DrawOptions): void {
        const img = this.images.get(name);
        if (!img) {
            console.warn(`[SpriteManager] Sprite not found: ${name}`);
            return;
        }
        const ctx = Gvar.context;
        const w = opts?.width ?? img.width;
        const h = opts?.height ?? img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height,
            Gvar.position[0], Gvar.position[1], w, h);
    }

    /**
     * Draw a named sprite at explicit coordinates (not Gvar.position).
     */
    drawAt(name: string, destX: number, destY: number, opts?: DrawOptions): void {
        const img = this.images.get(name);
        if (!img) {
            console.warn(`[SpriteManager] Sprite not found: ${name}`);
            return;
        }
        const ctx = Gvar.context;
        const w = opts?.width ?? img.width;
        const h = opts?.height ?? img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height, destX, destY, w, h);
    }

    /**
     * Try to draw using legacy buffer+coordinates.
     * Returns true if an individual sprite was found and drawn.
     * Used by the gcopy compatibility wrapper.
     */
    drawLegacy(buffer: number, x: number, y: number, w: number, h: number,
               destW?: number, destH?: number): boolean {
        if (!this._ready) return false;

        const key = `${buffer}:${x}:${y}`;
        const name = this.legacyIndex.get(key);
        if (!name) return false;

        const img = this.images.get(name);
        if (!img) return false;

        const ctx = Gvar.context;
        const targetW = destW ?? w;
        const targetH = destH ?? h;
        ctx.drawImage(img, 0, 0, img.width, img.height,
            Gvar.position[0], Gvar.position[1], targetW, targetH);
        return true;
    }

    /**
     * Check if a named sprite exists.
     */
    has(name: string): boolean {
        return this.images.has(name);
    }

    /**
     * Get the Image object for a named sprite (for advanced use).
     */
    getImage(name: string): HTMLImageElement | undefined {
        return this.images.get(name);
    }

    /**
     * Register a new sprite at runtime (for dynamically added content).
     */
    async register(name: string, filePath: string, legacy?: SpriteEntry['legacy']): Promise<void> {
        await this.loadImage(name, filePath);
        if (legacy) {
            const key = `${legacy.buffer}:${legacy.x}:${legacy.y}`;
            this.legacyIndex.set(key, name);
        }
    }
}

// Singleton
const spriteManager = new SpriteManagerClass();

export { spriteManager, SpriteManagerClass };
