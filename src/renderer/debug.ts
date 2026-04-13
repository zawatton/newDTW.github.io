/**
 * debug.ts — Runtime debug API for newDTW development
 *
 * Accessible via DevTools console as `debug.*` or via Puppeteer.
 * All functions manipulate live game state through Gvar.
 */
import { Gvar } from './variable'
import { setLanguage, loadLanguage, getLanguage } from './i18n'

const debug = {
    // ========== Player Stats ==========

    /** Set current HP. Use Infinity for invincibility. */
    setHP(value: number) {
        Gvar.var_236 = value;
        console.log(`[debug] HP = ${value}`);
    },

    /** Set max HP. */
    setMaxHP(value: number) {
        Gvar.var_383 = value;
        console.log(`[debug] MaxHP = ${value}`);
    },

    /** Enable god mode: HP won't decrease. */
    godMode(on: boolean = true) {
        (window as any).__godMode = on;
        if (on) {
            Gvar.var_236 = 9999;
            Gvar.var_383 = 9999;
            Gvar.var_350 = 200;  // satiety
            Gvar.var_567 = 200;  // max satiety
        }
        console.log(`[debug] God mode: ${on ? 'ON' : 'OFF'}`);
    },

    /** Set satiety (hunger). */
    setSatiety(current: number, max?: number) {
        Gvar.var_350 = current;
        if (max !== undefined) Gvar.var_567 = max;
        console.log(`[debug] Satiety = ${current}/${max ?? Gvar.var_567}`);
    },

    /** Set player level. */
    setLevel(level: number) {
        Gvar.var_647 = level;
        console.log(`[debug] Level = ${level}`);
    },

    /** Set player gold. */
    setGold(amount: number) {
        Gvar.var_237 = amount;
        console.log(`[debug] Gold = ${amount}`);
    },

    // ========== Position & Map ==========

    /** Get current player position. */
    getPos() {
        console.log(`[debug] Player at (${Gvar.var_74}, ${Gvar.var_75}), Floor ${Gvar.var_70}`);
        return { x: Gvar.var_74, y: Gvar.var_75, floor: Gvar.var_70 };
    },

    /** Teleport player to coordinates. */
    teleport(x: number, y: number) {
        Gvar.var_74 = x;
        Gvar.var_75 = y;
        console.log(`[debug] Teleported to (${x}, ${y})`);
    },

    // ========== Enemies ==========

    /** Spawn an enemy in front of the player. */
    spawnEnemy(enemyId: number) {
        // Find an empty enemy slot
        let slot = -1;
        for (let i = 1; i <= Gvar.var_107; i++) {
            if (Gvar.var_83[i]?.Var0 === 0) { slot = i; break; }
        }
        if (slot === -1) {
            Gvar.var_107++;
            slot = Gvar.var_107;
            if (!Gvar.var_83[slot]) Gvar.var_83[slot] = {};
        }
        // Place in front of player (based on facing direction)
        const dirs: Record<number, [number, number]> = {
            0: [0, -1], 1: [0, 1], 2: [-1, 0], 3: [1, 0],
            4: [-1, -1], 5: [1, -1], 6: [-1, 1], 7: [1, 1]
        };
        const [dx, dy] = dirs[Gvar.var_224] || [0, -1];
        const ex = Gvar.var_74 + dx;
        const ey = Gvar.var_75 + dy;

        Gvar.var_83[slot].Var0 = enemyId;
        Gvar.var_83[slot].Var1 = ex;
        Gvar.var_83[slot].Var2 = ey;
        Gvar.var_83[slot].Var3 = 0;  // HP
        Gvar.var_83[slot].Var5 = 2;  // state
        Gvar.var_83[slot].Var10 = Gvar.var_226; // floor
        Gvar.var_83[slot].Var12 = 12; // speed
        Gvar.var_83[slot].Var13 = 0;
        Gvar.var_84[ex][ey] = slot;  // map entity reference

        console.log(`[debug] Spawned enemy ${enemyId} at (${ex}, ${ey}), slot ${slot}`);
    },

    /** Kill all enemies on the current floor. */
    killAllEnemies() {
        let killed = 0;
        for (let i = 1; i <= Gvar.var_107; i++) {
            if (Gvar.var_83[i]?.Var0 !== 0) {
                Gvar.var_83[i].Var0 = 0;
                killed++;
            }
        }
        console.log(`[debug] Killed ${killed} enemies`);
    },

    // ========== Items ==========

    /** Give an item to the player's inventory. */
    giveItem(itemId: number) {
        // Find empty inventory slot
        for (let i = 1; i <= 20; i++) {
            if (Gvar.var_494[i] === 0 || Gvar.var_494[i] === undefined) {
                Gvar.var_494[i] = itemId;
                Gvar.var_249 = Math.max(Gvar.var_249 || 0, i);
                console.log(`[debug] Gave item ${itemId} to slot ${i}`);
                return;
            }
        }
        console.log(`[debug] Inventory full!`);
    },

    /** Place an item on the ground in front of the player. */
    placeItem(itemId: number) {
        const dirs: Record<number, [number, number]> = {
            0: [0, -1], 1: [0, 1], 2: [-1, 0], 3: [1, 0],
        };
        const [dx, dy] = dirs[Gvar.var_224] || [0, -1];
        const ix = Gvar.var_74 + dx;
        const iy = Gvar.var_75 + dy;
        Gvar.var_88[ix][iy] = itemId;
        console.log(`[debug] Placed item ${itemId} at (${ix}, ${iy})`);
    },

    /** List inventory contents. */
    listInventory() {
        const items: string[] = [];
        for (let i = 1; i <= 20; i++) {
            if (Gvar.var_494[i] && Gvar.var_494[i] !== 0) {
                items.push(`  Slot ${i}: item ${Gvar.var_494[i]}`);
            }
        }
        console.log(`[debug] Inventory:\n${items.join('\n') || '  (empty)'}`);
        return items;
    },

    // ========== Language ==========

    /** Switch language. */
    async setLang(lang: string) {
        await loadLanguage(lang);
        setLanguage(lang);
        console.log(`[debug] Language set to: ${lang}`);
    },

    /** Get current language. */
    getLang() {
        return getLanguage();
    },

    // ========== Game State ==========

    /** Show current game state summary. */
    status() {
        const s = {
            hp: `${Gvar.var_236}/${Gvar.var_383}`,
            satiety: `${Gvar.var_350}/${Gvar.var_567}`,
            level: Gvar.var_647,
            gold: Gvar.var_237,
            floor: Gvar.var_70,
            pos: `(${Gvar.var_74}, ${Gvar.var_75})`,
            facing: Gvar.var_224,
            enemies: Gvar.var_107,
            lang: getLanguage(),
        };
        console.table(s);
        return s;
    },

    /** Direct access to Gvar for advanced debugging. */
    get gvar() { return Gvar; },

    /** Set any Gvar variable by number. */
    setVar(num: number, value: any) {
        (Gvar as any)[`var_${num}`] = value;
        console.log(`[debug] var_${num} = ${value}`);
    },

    /** Get any Gvar variable by number. */
    getVar(num: number) {
        const v = (Gvar as any)[`var_${num}`];
        console.log(`[debug] var_${num} = ${v}`);
        return v;
    },

    // ========== Help ==========
    help() {
        console.log(`
=== newDTW Debug API ===
  debug.status()              - Show game state
  debug.godMode(true/false)   - Toggle invincibility
  debug.setHP(n)              - Set HP
  debug.setMaxHP(n)           - Set max HP
  debug.setSatiety(cur, max)  - Set hunger
  debug.setLevel(n)           - Set level
  debug.setGold(n)            - Set gold
  debug.getPos()              - Get position
  debug.teleport(x, y)        - Move player
  debug.spawnEnemy(id)        - Spawn enemy in front
  debug.killAllEnemies()      - Kill all enemies
  debug.giveItem(id)          - Add item to inventory
  debug.placeItem(id)         - Place item on ground
  debug.listInventory()       - Show inventory
  debug.setLang('en'/'ja')    - Switch language
  debug.setVar(num, value)    - Set any Gvar variable
  debug.getVar(num)           - Get any Gvar variable
  debug.gvar                  - Direct Gvar access
        `);
    },
};

// God mode hook: prevent HP from decreasing
const originalHP = Object.getOwnPropertyDescriptor(Gvar, 'var_236');
if (originalHP) {
    let _hp = Gvar.var_236;
    Object.defineProperty(Gvar, 'var_236', {
        get() { return _hp; },
        set(v) {
            if ((window as any).__godMode && v < _hp) return; // Block HP decrease
            _hp = v;
        },
        configurable: true,
    });
}

// Expose globally
(window as any).debug = debug;

export { debug };
