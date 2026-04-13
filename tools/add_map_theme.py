#!/usr/bin/env python3
"""
マップテーマ追加ツール

使い方:
  1. タイルPNGを用意（40x40、列番号に対応）
  2. python tools/add_map_theme.py <theme_dir> <row_number> <theme_name>

例:
  python tools/add_map_theme.py my_theme_tiles/ 27 "新ダンジョン"

入力: ディレクトリ内のPNGファイル（名前で列番号を推定 or floor.png, wall.png等の名前）
出力:
  - assets/sprites/map/ に r{row}_c{col}.png を配置
  - manifest.json を更新
  - map-themes.json を更新
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
BUFFER_ID = 5  # img_map buffer

# タイル名 → 列番号のマッピング
TILE_NAME_MAP = {
    "floor": 0, "floor_basic": 0,
    "floor_var1": 1, "floor1": 1,
    "floor_var2": 2, "floor2": 2,
    "floor_special": 3, "special": 3,
    "floor_special1": 4,
    "floor_special2": 5,
    "wall_top": 6, "wall": 6,
    "wall_top1": 7, "wall1": 7,
    "wall_top2": 8, "wall2": 8,
    "stairs_down": 9, "stairs": 9,
    "stairs_up": 10,
    "passage": 11,
    "water": 12,
    "shop": 13, "shop_floor": 13,
    "door": 14,
    "lava": 15,
}

def guess_column(filename):
    """ファイル名から列番号を推定"""
    stem = Path(filename).stem.lower()

    # 直接列番号: c00.png, col_03.png, 05.png
    for prefix in ["c", "col_", "col", ""]:
        rest = stem.removeprefix(prefix)
        if rest.isdigit():
            return int(rest)

    # 名前マッピング: floor.png, wall.png
    if stem in TILE_NAME_MAP:
        return TILE_NAME_MAP[stem]

    return None

def main():
    if len(sys.argv) < 3:
        print("使い方: python tools/add_map_theme.py <tile_dir_or_strip> <row_number> [theme_name]")
        print()
        print("入力形式:")
        print("  ディレクトリ: 個別40x40 PNG (c00.png, floor.png等)")
        print("  画像ファイル: 横1列のストリップ画像 (Nx40)")
        print()
        print("列番号の指定:")
        print("  c00.png〜c41.png (列番号直指定)")
        print("  floor.png, wall.png (名前で自動推定)")
        sys.exit(1)

    source = Path(sys.argv[1])
    row = int(sys.argv[2])
    theme_name = sys.argv[3] if len(sys.argv) > 3 else f"テーマ {row}"

    repo = Path(__file__).parent.parent
    sprites_dir = repo / "assets" / "sprites" / "map"
    sprites_dir.mkdir(parents=True, exist_ok=True)

    tiles = {}  # col → Image

    if source.is_dir():
        # ディレクトリモード: 個別PNGファイル
        for f in sorted(source.glob("*.png")):
            col = guess_column(f.name)
            if col is None:
                print(f"  警告: 列番号を推定できません: {f.name} — スキップ")
                continue
            img = Image.open(f).convert("RGBA")
            if img.size != (CELL_W, CELL_H):
                img = img.resize((CELL_W, CELL_H), Image.NEAREST)
            tiles[col] = img
            print(f"  列{col:02d} ← {f.name}")

    elif source.is_file() and source.suffix == ".png":
        # ストリップモード: 横1列の画像
        strip = Image.open(source).convert("RGBA")
        cols = strip.size[0] // CELL_W
        print(f"ストリップ画像: {strip.size[0]}x{strip.size[1]} → {cols}列")
        for col in range(cols):
            cell = strip.crop((col * CELL_W, 0, (col + 1) * CELL_W, CELL_H))
            arr = np.array(cell)
            if arr[:, :, 3].max() == 0:
                continue  # 空セルスキップ
            tiles[col] = cell
            print(f"  列{col:02d}")
    else:
        print(f"エラー: {source} はディレクトリでもPNGでもありません")
        sys.exit(1)

    if not tiles:
        print("エラー: タイルが見つかりません")
        sys.exit(1)

    # スプライトを保存
    new_sprites = []
    for col, img in sorted(tiles.items()):
        out_name = f"r{row:03d}_c{col:03d}.png"
        out_path = sprites_dir / out_name
        img.save(out_path)

        sprite_name = f"map/r{row:03d}_c{col:03d}"
        sprite_file = f"sprites/map/{out_name}"
        new_sprites.append({
            "name": sprite_name,
            "file": sprite_file,
            "legacy": {
                "buffer": BUFFER_ID,
                "x": col * CELL_W,
                "y": row * CELL_H,
                "w": CELL_W,
                "h": CELL_H
            }
        })

    print(f"\n{len(tiles)}タイルを行{row}に配置しました")

    # manifest.json を更新
    manifest_path = repo / "assets" / "sprites" / "manifest.json"
    if manifest_path.exists():
        with open(manifest_path, "r", encoding="utf-8") as f:
            manifest = json.load(f)

        for s in new_sprites:
            manifest["sprites"][s["name"]] = {
                "file": s["file"],
                "legacy": s["legacy"]
            }
            leg = s["legacy"]
            key = f"{leg['buffer']}:{leg['x']}:{leg['y']}"
            manifest["legacyIndex"][key] = s["name"]

        manifest["spriteCount"] = len(manifest["sprites"])

        with open(manifest_path, "w", encoding="utf-8") as f:
            json.dump(manifest, f, indent=2, ensure_ascii=False)
        print(f"manifest.json 更新完了 (計{manifest['spriteCount']}スプライト)")

    # map-themes.json を更新
    themes_path = repo / "assets" / "sprites" / "map-themes.json"
    if themes_path.exists():
        with open(themes_path, "r", encoding="utf-8") as f:
            themes = json.load(f)
        themes["themes"][str(row)] = {"name": theme_name, "row": row}
        with open(themes_path, "w", encoding="utf-8") as f:
            json.dump(themes, f, indent=2, ensure_ascii=False)
        print(f"map-themes.json 更新完了")

    print(f"\n=== 完了 ===")
    print(f"テーマ「{theme_name}」を行{row}に追加しました")
    print(f"コードで使用: Gvar.y_axis_map_image = {row};")

if __name__ == "__main__":
    main()
