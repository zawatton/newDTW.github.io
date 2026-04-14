/**
 * debug.ts — Runtime debug API for newDTW development
 *
 * Accessible via DevTools console as `debug.*` or via Puppeteer.
 * All functions manipulate live game state through Gvar.
 */
import { Gvar } from './variable'
import { setLanguage, loadLanguage, getLanguage } from './i18n'
import * as Func from './func/index'

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

    // ========== UI Render Helpers (for testing) ==========

    /** Open system settings menu inside game loop. cursor: 0-7 (var_899) */
    openSystemMenu(cursor: number = 0) {
        Gvar.var_899 = cursor;
        Gvar.var_900 = 0; Gvar.var_901 = 0; Gvar.var_902 = 0;
        Gvar.var_903 = 0; Gvar.var_904 = 0; Gvar.var_905 = 0;
        Gvar.lang_menu_open = 0;
        Gvar.var_509 = 1;
        // Fire-and-forget: jump into func193 which is the menu input loop
        Func.func193().catch(e => console.error('[debug] func193 error:', e));
        console.log(`[debug] system settings menu opened, cursor=${cursor}`);
    },

    /** Set the system menu cursor (var_899) directly while menu is open. */
    setMenuCursor(cursor: number) {
        Gvar.var_899 = cursor;
        console.log(`[debug] var_899 = ${cursor}`);
    },

    /** Open language sub-menu directly. cursor: 0=ja, 1=en */
    openLangMenu(cursor: number = 0) {
        Gvar.var_509 = 1;
        Gvar.var_899 = 7;
        Gvar.lang_menu_open = 1;
        Gvar.lang_cursor = cursor;
        Func.funcLangConfig().catch(e => console.error('[debug] funcLangConfig error:', e));
        console.log(`[debug] lang sub-menu opened, cursor=${cursor}`);
    },

    /** Close any open menu (back to game). */
    closeMenu() {
        Gvar.var_509 = 0;
        Gvar.var_499 = 0;
        Gvar.var_508 = 0;
        Gvar.var_195 = 0;
        Gvar.var_196 = 0;
        Gvar.lang_menu_open = 0;
        Gvar.var_900 = 0; Gvar.var_901 = 0; Gvar.var_902 = 0;
        Gvar.var_903 = 0; Gvar.var_904 = 0; Gvar.var_905 = 0;
        console.log(`[debug] menu closed`);
    },

    /**
     * Open main menu (2x2: 道具/足元/状態/設定).
     * itemId: 1=道具, 2=足元, 3=状態, 4=設定
     */
    openMainMenu(itemId: number = 1) {
        Gvar.var_195 = 1;
        Gvar.var_196 = 1; // Mフラグ:メニュー画面 Func.func054
        // itemId → (col, row) 逆算
        Gvar.var_247 = itemId <= 2 ? 1 : 2;  // 1,2:左 / 3,4:右
        Gvar.var_248 = itemId % 2 === 1 ? 1 : 2;  // 1,3:上 / 2,4:下
        Gvar.var_245 = Gvar.var_247 === 1 ? 19 : 19 + 48;
        Gvar.var_246 = Gvar.var_248 === 1 ? 45 : 45 + 18;
        Gvar.var_497 = itemId;
        Func.func053().catch(e => console.error('[debug] func053 error:', e));
        console.log(`[debug] main menu opened, item=${itemId}`);
    },

    /**
     * Open settings sub-menu (5項目: マップ/履歴/資料/システム/終了).
     * cursor: 0-4
     */
    openSettingsMenu(cursor: number = 0) {
        Gvar.var_499 = 1;
        Gvar.var_500 = cursor;
        Gvar.var_245 = 19;
        Gvar.var_246 = 45 + cursor * 16;
        Func.func055().catch(e => console.error('[debug] func055 error:', e));
        console.log(`[debug] settings menu opened, cursor=${cursor}`);
    },

    /**
     * Open library sub-menu (4項目: ハイスコア/コミックス/死因リスト/敵図鑑).
     * cursor: 0-3
     */
    openLibraryMenu(cursor: number = 0) {
        Gvar.var_508 = 1;
        Gvar.var_505 = cursor;
        Gvar.var_506 = 19;
        Gvar.var_507 = 45 + cursor * 16;
        Func.func057().catch(e => console.error('[debug] func057 error:', e));
        console.log(`[debug] library menu opened, cursor=${cursor}`);
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
