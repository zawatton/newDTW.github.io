#!/usr/bin/env node
/**
 * stage_tauri.js — prepare tauri-dist/ as the frontend for Tauri dev & build
 *
 * Tauri's dev server refuses to follow junctions that escape frontendDist,
 * and pointing frontendDist at the project root would bundle node_modules/
 * into release binaries. So we stage the few things the webview actually
 * needs (public/*, assets/*) into tauri-dist/ — using NTFS hardlinks so
 * the 470+ MiB asset tree is near-free to "copy".
 *
 * Layout produced:
 *   tauri-dist/
 *     index.html          (from public/index.html)
 *     styles.css
 *     bundle/main.js
 *     lib/*
 *     assets/*            (bgm, se, img, sprites, lang, icon)
 *
 * Hardlinks mean subsequent runs pick up edits to source files automatically;
 * files that no longer exist in source are NOT pruned (the webpack bundle
 * overwrites in-place, so stale files don't accumulate in practice).
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'tauri-dist');
const PUBLIC = path.join(ROOT, 'public');
const ASSETS = path.join(ROOT, 'assets');

// Skip these subtrees inside public/ — they belong to the Electron main
// process / renderer build output that the webview doesn't load directly.
const PUBLIC_SKIP = new Set(['main', 'renderer']);

function mkdirp(p) {
    fs.mkdirSync(p, { recursive: true });
}

function linkOrCopy(src, dst) {
    // Prefer hardlink; fall back to copy when hardlink fails (e.g., cross-device).
    try {
        if (fs.existsSync(dst)) fs.unlinkSync(dst);
        fs.linkSync(src, dst);
    } catch (e) {
        fs.copyFileSync(src, dst);
    }
}

function walk(src, dst, skip = new Set()) {
    mkdirp(dst);
    for (const name of fs.readdirSync(src)) {
        if (skip.has(name)) continue;
        const s = path.join(src, name);
        const d = path.join(dst, name);
        const stat = fs.lstatSync(s);
        if (stat.isDirectory()) {
            walk(s, d);
        } else if (stat.isFile()) {
            linkOrCopy(s, d);
        }
        // Symlinks/junctions: ignore (we're the ones staging the tree).
    }
}

function main() {
    const t0 = Date.now();
    mkdirp(DIST);
    walk(PUBLIC, DIST, PUBLIC_SKIP);
    walk(ASSETS, path.join(DIST, 'assets'));
    const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
    console.log(`stage_tauri: ready in ${elapsed}s (tauri-dist/)`);
}

main();
