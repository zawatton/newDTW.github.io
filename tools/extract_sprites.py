#!/usr/bin/env python3
"""
スプライトシート分割ツール
既存スプライトシートを40x40グリッドで個別PNGに分割し、manifest.jsonを生成する。
"""

import json
import os
import sys
from pathlib import Path

try:
    from PIL import Image
    import numpy as np
except ImportError:
    print("pip install Pillow numpy")
    sys.exit(1)

CELL_W = 40
CELL_H = 40

# Buffer ID → image file → category mapping
SHEETS = {
    # buffer_id, image_filename, category, cell_height (default 40)
    (11, "img_stand0.gif.png", "stand0", 40),
    (1,  "img_stand1.gif.png", "stand1", 40),
    (16, "img_stand2.gif.png", "stand2", 40),
    (29, "img_stand3.gif.png", "stand3", 40),
    (9,  "img_item.gif.png",   "item",   40),
    (14, "img_wana.gif.png",   "trap",   40),
    (6,  "img_enemy1a.gif.png", "enemy1a", 40),
    (15, "img_enemy1b.gif.png", "enemy1b", 40),
    (21, "img_enemy2a.gif.png", "enemy2a", 40),
    (22, "img_enemy2b.gif.png", "enemy2b", 40),
    (27, "img_enemy3a.gif.png", "enemy3a", 40),
    (28, "img_enemy3b.gif.png", "enemy3b", 40),
    (13, "img_enemy4a.gif.png", "enemy4a", 40),
    (20, "img_enemy4b.gif.png", "enemy4b", 40),
    (34, "img_syageki.gif.png", "syageki", 40),
    (35, "img_effect.gif.png",  "effect",  40),
    (5,  "img_map.gif.png",     "map",     40),
    (3,  "img_mychara.gif.png", "mychara", 40),
    (8,  "img1.gif.png",        "ui",      40),
    (18, "img4.gif.png",        "ui2",     40),
    # α版で追加されたシート
    (36, "img_enemy5a.gif.png", "enemy5a", 40),
    (37, "img_enemy5b.gif.png", "enemy5b", 40),
    (38, "img4_2.gif.png",      "ui3",     40),
    (39, "img4_3.gif.png",      "ui4",     40),
    (40, "img_card.gif.png",    "card",    40),
}

def is_empty_cell(img_array):
    """Check if a cell is fully transparent."""
    if img_array.shape[2] == 4:
        return img_array[:, :, 3].max() == 0
    # No alpha — check if all white or all black
    return False

def extract_sheet(img_dir, out_dir, buffer_id, filename, category, cell_h):
    """Extract individual sprites from a sprite sheet."""
    path = img_dir / filename
    if not path.exists():
        print(f"  SKIP {filename} (not found)")
        return []

    img = Image.open(path).convert("RGBA")
    arr = np.array(img)
    w, h = img.size
    cols = w // CELL_W
    rows = h // cell_h

    cat_dir = out_dir / category
    cat_dir.mkdir(parents=True, exist_ok=True)

    sprites = []
    extracted = 0
    skipped = 0

    for row in range(rows):
        for col in range(cols):
            x = col * CELL_W
            y = row * cell_h
            cell = arr[y:y + cell_h, x:x + CELL_W]

            if is_empty_cell(cell):
                skipped += 1
                continue

            name = f"{category}/r{row:03d}_c{col:03d}"
            out_path = cat_dir / f"r{row:03d}_c{col:03d}.png"

            cell_img = Image.fromarray(cell)
            cell_img.save(out_path)
            extracted += 1

            sprites.append({
                "name": name,
                "file": f"sprites/{category}/r{row:03d}_c{col:03d}.png",
                "legacy": {
                    "buffer": buffer_id,
                    "x": x,
                    "y": y,
                    "w": CELL_W,
                    "h": cell_h
                }
            })

    print(f"  {filename}: {extracted} sprites extracted, {skipped} empty cells skipped")
    return sprites

def main():
    repo = Path(__file__).parent.parent
    img_dir = repo / "assets" / "img"
    out_dir = repo / "assets" / "sprites"
    out_dir.mkdir(parents=True, exist_ok=True)

    print("=== Sprite Sheet Extraction ===")
    print(f"Input:  {img_dir}")
    print(f"Output: {out_dir}")
    print()

    all_sprites = {}
    legacy_index = {}  # "buffer:x:y" → sprite name

    for buffer_id, filename, category, cell_h in sorted(SHEETS):
        print(f"Processing {category} (buffer {buffer_id})...")
        sprites = extract_sheet(img_dir, out_dir, buffer_id, filename, category, cell_h)
        for s in sprites:
            all_sprites[s["name"]] = {
                "file": s["file"],
                "legacy": s["legacy"]
            }
            leg = s["legacy"]
            key = f"{leg['buffer']}:{leg['x']}:{leg['y']}"
            legacy_index[key] = s["name"]

    # Write manifest
    manifest = {
        "version": 1,
        "cellSize": {"w": CELL_W, "h": CELL_H},
        "spriteCount": len(all_sprites),
        "sprites": all_sprites,
        "legacyIndex": legacy_index
    }

    manifest_path = out_dir / "manifest.json"
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    print()
    print(f"Total: {len(all_sprites)} sprites")
    print(f"Manifest: {manifest_path}")

if __name__ == "__main__":
    main()
