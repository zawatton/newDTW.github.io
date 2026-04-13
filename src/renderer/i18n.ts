/**
 * i18n — Internationalization module for newDTW
 *
 * Uses Japanese text as keys, looks up translations in loaded language files.
 * Untranslated strings fall back to the original Japanese.
 *
 * Usage:
 *   import { t, setLanguage } from '../i18n'
 *   t("しかし何も起こらなかった…")  // Returns English if lang=en, else Japanese
 */

const translations: Record<string, Record<string, string>> = {};
let currentLang = 'ja';
let ready = false;

/** Set the active language. */
export function setLanguage(lang: string) {
    currentLang = lang;
    try { localStorage.setItem('newdtw_lang', lang); } catch (_) {}
}

/** Get the active language code. */
export function getLanguage(): string {
    return currentLang;
}

/** Get list of available languages. */
export function getAvailableLanguages(): { code: string; name: string }[] {
    return [
        { code: 'ja', name: '日本語' },
        { code: 'en', name: 'English' },
    ];
}

/**
 * Translate a Japanese string to the current language.
 * Returns the original string if no translation is found.
 */
export function t(japanese: string): string {
    if (!japanese || currentLang === 'ja') return japanese;
    return translations[currentLang]?.[japanese] ?? japanese;
}

/**
 * Load a language file from assets/lang/{code}.json.
 * The JSON file maps Japanese strings to translated strings.
 * Supports both Electron (file://) and browser (http://) environments.
 */
export async function loadLanguage(lang: string): Promise<void> {
    if (lang === 'ja') { ready = true; return; }
    if (translations[lang]) { ready = true; return; }
    try {
        // Try multiple paths for Electron/browser compatibility
        const paths = [
            `../assets/lang/${lang}.json`,          // browser (relative to HTML)
            `../../assets/lang/${lang}.json`,        // Electron (relative to public/)
        ];
        let loaded = false;
        for (const p of paths) {
            try {
                const resp = await fetch(p);
                if (resp.ok) {
                    translations[lang] = await resp.json();
                    loaded = true;
                    console.log(`[i18n] Loaded ${lang} from ${p} (${Object.keys(translations[lang]).length} entries)`);
                    break;
                }
            } catch (_) { /* try next path */ }
        }
        if (!loaded) {
            // Fallback: try Node.js fs (Electron with nodeIntegration)
            try {
                const fs = require('fs');
                const path = require('path');
                // Try multiple base paths for Electron
                const bases = [
                    path.join(__dirname, '..', '..', 'assets', 'lang'),
                    path.join(__dirname, '..', 'assets', 'lang'),
                    path.join(process.cwd(), 'assets', 'lang'),
                ];
                let data: string | null = null;
                for (const base of bases) {
                    const fp = path.join(base, `${lang}.json`);
                    try { data = fs.readFileSync(fp, 'utf-8'); console.log(`[i18n] Found at ${fp}`); break; } catch(_) {}
                }
                if (!data) throw new Error('not found in any path');
                translations[lang] = JSON.parse(data);
                console.log(`[i18n] Loaded ${lang} via fs (${Object.keys(translations[lang]).length} entries)`);
                loaded = true;
            } catch (_) { /* fs not available */ }
        }
        if (!loaded) {
            console.warn(`[i18n] Could not load ${lang}.json from any path`);
            translations[lang] = {};
        }
        ready = true;
    } catch (err) {
        console.warn(`[i18n] Failed to load ${lang}.json:`, err);
        translations[lang] = {};
        ready = true;
    }
}

/** Initialize i18n — load saved language preference. */
export async function initI18n(): Promise<void> {
    try {
        const saved = localStorage.getItem('newdtw_lang');
        if (saved) currentLang = saved;
    } catch (_) {}
    console.log(`[i18n] Init: language=${currentLang}`);
    if (currentLang !== 'ja') {
        await loadLanguage(currentLang);
    }
    ready = true;
    console.log(`[i18n] Ready: ${currentLang}, entries=${Object.keys(translations[currentLang] || {}).length}`);
}

export function isReady(): boolean { return ready; }
