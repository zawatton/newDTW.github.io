#!/usr/bin/env python3
"""
α版差分スプライトを本体に統合するツール

alpha_diff/ に抽出済みの差分スプライトを assets/sprites/ に統合し、
manifest.json, map-themes.json を更新する。
また、既存スプライトシートの拡張・新規シートの作成も行う。

使い方:
  python tools/integrate_alpha_diff.py
"""

import json
import os
import shutil
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

# カテゴリ → buffer ID マッピング
CATEGORY_BUFFER = {
    "stand0": 11,
    "stand1": 1,
    "stand2": 16,
    "stand3": 29,
    "item": 9,
    "map": 5,
    "mychara": 3,
    "trap": 14,
    "comic": None,   # buffer ID 不明
    "ui": 8,
    "ui2": 18,
    "enemy1a": 6,
    "enemy1b": 15,
    "enemy2a": 21,
    "enemy2b": 22,
    "enemy3a": 27,
    "enemy3b": 28,
    "enemy4a": 13,
    "enemy4b": 20,
    "syageki": 34,
    "effect": 35,
    # 新規シート (α版のみ) — 新しいbuffer IDを割当
    "enemy5a": 36,
    "enemy5b": 37,
    "ui3": 38,
    "ui4": 39,
    "card": 40,
}

# 既存シートの拡張が必要なもの (category → alpha GIF name)
SHEETS_TO_EXTEND = {
    "stand0":  "img_stand0.gif",
    "stand1":  "img_stand1.gif",
    "stand2":  "img_stand2.gif",
    "stand3":  "img_stand3.gif",
    "item":    "img_item.gif",
    "map":     "img_map.gif",
    "mychara": "img_mychara.gif",
    "trap":    "img_wana.gif",
    "comic":   "img_comic.gif",
}

# 新規シート (α版のみ)
NEW_SHEETS = {
    "enemy5a": "img_enemy5a.gif",
    "enemy5b": "img_enemy5b.gif",
    "ui3":     "img4_2.gif",
    "ui4":     "img4_3.gif",
    "card":    "img_card.gif",
}


def parse_cell_name(filename):
    """r003_c005.png → (3, 5)"""
    stem = Path(filename).stem
    parts = stem.split("_")
    row = int(parts[0][1:])
    col = int(parts[1][1:])
    return row, col


def copy_sprites(diff_dir, sprites_dir, category):
    """差分スプライトをメインのスプライトディレクトリにコピー"""
    cat_diff = diff_dir / category
    cat_sprites = sprites_dir / category
    cat_sprites.mkdir(parents=True, exist_ok=True)

    copied = 0
    for subdir_name in ["modified", "added", "new"]:
        subdir = cat_diff / subdir_name
        if not subdir.exists():
            continue
        for png in subdir.glob("*.png"):
            dest = cat_sprites / png.name
            shutil.copy2(png, dest)
            copied += 1

    return copied


def update_manifest(manifest, category, sprites_dir, buffer_id):
    """manifest.json にスプライトエントリを追加/更新"""
    cat_dir = sprites_dir / category
    if not cat_dir.exists():
        return 0

    updated = 0
    for png in sorted(cat_dir.glob("*.png")):
        row, col = parse_cell_name(png.name)
        name = f"{category}/r{row:03d}_c{col:03d}"
        sprite_file = f"sprites/{category}/{png.name}"

        entry = {
            "file": sprite_file,
            "legacy": {
                "buffer": buffer_id,
                "x": col * CELL_W,
                "y": row * CELL_H,
                "w": CELL_W,
                "h": CELL_H
            }
        }

        manifest["sprites"][name] = entry

        if buffer_id is not None:
            leg = entry["legacy"]
            key = f"{leg['buffer']}:{leg['x']}:{leg['y']}"
            manifest["legacyIndex"][key] = name

        updated += 1

    return updated


def extend_sprite_sheet(alpha_dir, img_dir, alpha_gif_name, current_png_name, category, diff_dir):
    """既存スプライトシートをα版のサイズに拡張し、修正・追加セルを反映"""
    alpha_path = alpha_dir / alpha_gif_name
    current_path = img_dir / current_png_name

    if not alpha_path.exists() or not current_path.exists():
        return False

    a_img = Image.open(alpha_path).convert("RGBA")
    c_img = Image.open(current_path).convert("RGBA")

    aw, ah = a_img.size
    cw, ch = c_img.size

    if aw == cw and ah == ch:
        # 同サイズの場合は修正セルのみ反映
        new_img = c_img.copy()
    else:
        # 拡張: 大きいサイズのキャンバスを作成
        new_w = max(aw, cw)
        new_h = max(ah, ch)
        new_img = Image.new("RGBA", (new_w, new_h), (0, 0, 0, 0))
        new_img.paste(c_img, (0, 0))

    # 差分セルを貼り付け
    cat_diff = diff_dir / category
    pasted = 0
    for subdir_name in ["modified", "added"]:
        subdir = cat_diff / subdir_name
        if not subdir.exists():
            continue
        for png in subdir.glob("*.png"):
            row, col = parse_cell_name(png.name)
            cell = Image.open(png).convert("RGBA")
            x = col * CELL_W
            y = row * CELL_H
            # 透明部分を含めて貼り付け
            new_img.paste(cell, (x, y), cell)
            pasted += 1

    if pasted > 0:
        new_img.save(current_path)
        return True
    return False


def create_new_sheet(alpha_dir, img_dir, alpha_gif_name, output_png_name, category, diff_dir):
    """新規スプライトシートをα版GIFからPNGに変換して作成"""
    alpha_path = alpha_dir / alpha_gif_name
    if not alpha_path.exists():
        return False

    a_img = Image.open(alpha_path).convert("RGBA")
    arr = np.array(a_img)

    # 黒背景を透明に変換
    black_mask = (arr[:, :, 0] == 0) & (arr[:, :, 1] == 0) & (arr[:, :, 2] == 0)
    arr[black_mask, 3] = 0

    out_img = Image.fromarray(arr)
    out_path = img_dir / output_png_name
    out_img.save(out_path)
    return True


def main():
    repo = Path(__file__).parent.parent
    diff_dir = repo / "assets" / "sprites" / "alpha_diff"
    sprites_dir = repo / "assets" / "sprites"
    img_dir = repo / "assets" / "img"
    alpha_dir = repo / "α版ソースコード分解" / "assets"

    if not diff_dir.exists():
        print("エラー: alpha_diff ディレクトリが見つかりません")
        print("先に python tools/extract_alpha_diff.py を実行してください")
        sys.exit(1)

    print("=== α版差分スプライト統合 ===\n")

    # ========== Step 1: 個別PNGをコピー ==========
    print("--- Step 1: 個別スプライトPNGの統合 ---")
    total_copied = 0
    categories_with_diffs = []

    for cat_dir in sorted(diff_dir.iterdir()):
        if not cat_dir.is_dir():
            continue
        category = cat_dir.name
        copied = copy_sprites(diff_dir, sprites_dir, category)
        if copied > 0:
            print(f"  {category:12s}: {copied:4d} sprites")
            total_copied += copied
            categories_with_diffs.append(category)

    print(f"  合計: {total_copied} sprites コピー完了\n")

    # ========== Step 2: 既存シート拡張 ==========
    print("--- Step 2: 既存スプライトシートの拡張 ---")
    for category, alpha_gif in SHEETS_TO_EXTEND.items():
        current_png = alpha_gif + ".png"
        result = extend_sprite_sheet(
            alpha_dir, img_dir, alpha_gif, current_png, category, diff_dir
        )
        if result:
            # サイズ確認
            new_img = Image.open(img_dir / current_png)
            print(f"  {current_png:30s}: 更新完了 ({new_img.size[0]}x{new_img.size[1]})")

    print()

    # ========== Step 3: 新規シート作成 ==========
    print("--- Step 3: 新規スプライトシートの作成 ---")
    for category, alpha_gif in NEW_SHEETS.items():
        output_png = alpha_gif + ".png"
        result = create_new_sheet(alpha_dir, img_dir, alpha_gif, output_png, category, diff_dir)
        if result:
            new_img = Image.open(img_dir / output_png)
            print(f"  {output_png:30s}: 作成完了 ({new_img.size[0]}x{new_img.size[1]})")

    print()

    # ========== Step 4: manifest.json 更新 ==========
    print("--- Step 4: manifest.json 更新 ---")
    manifest_path = sprites_dir / "manifest.json"
    if manifest_path.exists():
        with open(manifest_path, "r", encoding="utf-8") as f:
            manifest = json.load(f)
    else:
        manifest = {
            "version": 1,
            "cellSize": {"w": CELL_W, "h": CELL_H},
            "spriteCount": 0,
            "sprites": {},
            "legacyIndex": {}
        }

    total_entries = 0
    for category in categories_with_diffs:
        buffer_id = CATEGORY_BUFFER.get(category)
        updated = update_manifest(manifest, category, sprites_dir, buffer_id)
        if updated > 0:
            total_entries += updated

    manifest["spriteCount"] = len(manifest["sprites"])

    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    print(f"  エントリ更新: {total_entries}")
    print(f"  総スプライト数: {manifest['spriteCount']}\n")

    # ========== Step 5: map-themes.json 更新 ==========
    print("--- Step 5: map-themes.json 更新 ---")
    themes_path = sprites_dir / "map-themes.json"
    if themes_path.exists():
        with open(themes_path, "r", encoding="utf-8") as f:
            themes = json.load(f)

        # 追加されたマップ行を検出
        map_added = diff_dir / "map" / "added"
        if map_added.exists():
            new_rows = set()
            for png in map_added.glob("*.png"):
                row, _ = parse_cell_name(png.name)
                new_rows.add(row)

            for row in sorted(new_rows):
                row_str = str(row)
                if row_str not in themes["themes"]:
                    themes["themes"][row_str] = {
                        "name": f"α版テーマ (行{row})",
                        "row": row
                    }
                    print(f"  テーマ追加: 行{row}")

        with open(themes_path, "w", encoding="utf-8") as f:
            json.dump(themes, f, indent=2, ensure_ascii=False)

    print()

    # ========== 完了 ==========
    print("=== 統合完了 ===")
    print(f"  個別スプライト: {total_copied} files")
    print(f"  manifest.json: {manifest['spriteCount']} entries")
    print()
    print("次のステップ:")
    print("  1. npm run build でビルド確認")
    print("  2. extract_sprites.py の SHEETS に新規シートを追加")
    print("  3. 新しい敵/アイテムのコード実装")


if __name__ == "__main__":
    main()
