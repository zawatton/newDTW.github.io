#!/usr/bin/env python3
"""
α版 vs 現行版 スプライト差分抽出ツール

α版GIF画像と現行版PNG画像を比較し、追加・修正されたセルを
個別PNG (40x40) として assets/sprites/alpha_diff/ に出力する。

使い方:
  python tools/extract_alpha_diff.py

出力:
  assets/sprites/alpha_diff/
    <category>/
      modified/   — 現行版から変更されたセル
      added/      — α版で追加されたセル (現行版に存在しない領域)
      new/        — 完全新規ファイルから抽出したセル
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
THRESHOLD = 10  # RGB差分のしきい値

# Buffer ID, alpha GIF名, current PNG名, カテゴリ名
PAIRED_SHEETS = [
    (11, "img_stand0.gif",    "img_stand0.gif.png",    "stand0"),
    (1,  "img_stand1.gif",    "img_stand1.gif.png",    "stand1"),
    (16, "img_stand2.gif",    "img_stand2.gif.png",    "stand2"),
    (29, "img_stand3.gif",    "img_stand3.gif.png",    "stand3"),
    (9,  "img_item.gif",      "img_item.gif.png",      "item"),
    (5,  "img_map.gif",       "img_map.gif.png",       "map"),
    (3,  "img_mychara.gif",   "img_mychara.gif.png",   "mychara"),
    (14, "img_wana.gif",      "img_wana.gif.png",      "trap"),
    (None, "img_comic.gif",   "img_comic.gif.png",     "comic"),
    (8,  "img1.gif",          "img1.gif.png",          "ui"),
    (18, "img4.gif",          "img4.gif.png",          "ui2"),
    (6,  "img_enemy1a.gif",   "img_enemy1a.gif.png",   "enemy1a"),
    (15, "img_enemy1b.gif",   "img_enemy1b.gif.png",   "enemy1b"),
    (21, "img_enemy2a.gif",   "img_enemy2a.gif.png",   "enemy2a"),
    (22, "img_enemy2b.gif",   "img_enemy2b.gif.png",   "enemy2b"),
    (27, "img_enemy3a.gif",   "img_enemy3a.gif.png",   "enemy3a"),
    (28, "img_enemy3b.gif",   "img_enemy3b.gif.png",   "enemy3b"),
    (13, "img_enemy4a.gif",   "img_enemy4a.gif.png",   "enemy4a"),
    (20, "img_enemy4b.gif",   "img_enemy4b.gif.png",   "enemy4b"),
    (34, "img_syageki.gif",   "img_syageki.gif.png",   "syageki"),
    (35, "img_effect.gif",    "img_effect.gif.png",    "effect"),
]

# α版のみに存在するファイル (buffer_id, filename, category)
ALPHA_ONLY_SHEETS = [
    (None, "img_enemy5a.gif", "enemy5a"),
    (None, "img_enemy5b.gif", "enemy5b"),
    (None, "img4_2.gif",      "ui3"),
    (None, "img4_3.gif",      "ui4"),
    (None, "img_card.gif",    "card"),
]


def is_cell_empty_rgb(cell_rgb, threshold=5):
    """RGBセルがほぼ真っ黒(背景)かどうか"""
    return cell_rgb.max() <= threshold


def compare_paired(alpha_path, current_path, category, out_dir):
    """ペアのシートを比較し、修正・追加セルを抽出"""
    if not alpha_path.exists():
        return 0, 0
    if not current_path.exists():
        # current が存在しない = 全セルが「追加」
        return extract_all_cells(alpha_path, category, out_dir / category / "added")

    a_rgb = np.array(Image.open(alpha_path).convert("RGB"))
    c_img = Image.open(current_path).convert("RGBA")
    c_rgba = np.array(c_img)
    c_rgb = c_rgba[:, :, :3]
    c_alpha = c_rgba[:, :, 3]

    ah, aw = a_rgb.shape[:2]
    ch, cw = c_rgba.shape[:2]
    oh, ow = min(ah, ch), min(aw, cw)

    # α版のRGBAも取得 (GIF→RGBA, 透明なし=全opaque)
    a_img_rgba = Image.open(alpha_path).convert("RGBA")

    mod_dir = out_dir / category / "modified"
    add_dir = out_dir / category / "added"
    mod_dir.mkdir(parents=True, exist_ok=True)
    add_dir.mkdir(parents=True, exist_ok=True)

    modified = 0
    added = 0

    # 重複領域の比較
    rows = oh // CELL_H
    cols = ow // CELL_W
    for r in range(rows):
        for col in range(cols):
            y0, y1 = r * CELL_H, (r + 1) * CELL_H
            x0, x1 = col * CELL_W, (col + 1) * CELL_W

            cell_a = a_rgb[y0:y1, x0:x1].astype(float)
            cell_c = c_rgb[y0:y1, x0:x1].astype(float)
            cell_ca = c_alpha[y0:y1, x0:x1]

            is_diff = False

            opaque = cell_ca > 0
            if not opaque.any():
                # Current が全透明 → α版に内容があれば差分
                if cell_a.max() > THRESHOLD:
                    is_diff = True
            else:
                # 不透明ピクセルの比較
                diff = np.abs(cell_a - cell_c)
                for ch_idx in range(3):
                    diff[:, :, ch_idx] *= opaque
                if diff.max() > THRESHOLD:
                    is_diff = True
                elif not opaque.all():
                    # α版が透明領域に内容を持つ
                    transparent = ~opaque
                    for ch_idx in range(3):
                        val = cell_a[:, :, ch_idx] * transparent
                        if val.max() > THRESHOLD:
                            is_diff = True
                            break

            if is_diff:
                # α版のセルを保存 (黒背景→透明に変換)
                cell_img = a_img_rgba.crop((x0, y0, x1, y1))
                cell_arr = np.array(cell_img)
                # 黒(0,0,0)ピクセルを透明に
                black_mask = (cell_arr[:, :, 0] == 0) & (cell_arr[:, :, 1] == 0) & (cell_arr[:, :, 2] == 0)
                cell_arr[black_mask, 3] = 0
                out_img = Image.fromarray(cell_arr)
                out_img.save(mod_dir / f"r{r:03d}_c{col:03d}.png")
                modified += 1

    # α版の追加領域 (現行版より大きい部分)
    if ah > oh:
        for r in range(oh // CELL_H, ah // CELL_H):
            for col in range(aw // CELL_W):
                y0, y1 = r * CELL_H, (r + 1) * CELL_H
                x0, x1 = col * CELL_W, (col + 1) * CELL_W
                cell = a_rgb[y0:y1, x0:x1]
                if not is_cell_empty_rgb(cell):
                    cell_img = a_img_rgba.crop((x0, y0, x1, y1))
                    cell_arr = np.array(cell_img)
                    black_mask = (cell_arr[:, :, 0] == 0) & (cell_arr[:, :, 1] == 0) & (cell_arr[:, :, 2] == 0)
                    cell_arr[black_mask, 3] = 0
                    out_img = Image.fromarray(cell_arr)
                    out_img.save(add_dir / f"r{r:03d}_c{col:03d}.png")
                    added += 1

    if aw > ow:
        for r in range(ah // CELL_H):
            for col in range(ow // CELL_W, aw // CELL_W):
                y0, y1 = r * CELL_H, (r + 1) * CELL_H
                x0, x1 = col * CELL_W, (col + 1) * CELL_W
                cell = a_rgb[y0:y1, x0:x1]
                if not is_cell_empty_rgb(cell):
                    cell_img = a_img_rgba.crop((x0, y0, x1, y1))
                    cell_arr = np.array(cell_img)
                    black_mask = (cell_arr[:, :, 0] == 0) & (cell_arr[:, :, 1] == 0) & (cell_arr[:, :, 2] == 0)
                    cell_arr[black_mask, 3] = 0
                    out_img = Image.fromarray(cell_arr)
                    out_img.save(add_dir / f"r{r:03d}_c{col:03d}.png")
                    added += 1

    return modified, added


def extract_all_cells(img_path, category, out_dir):
    """完全新規ファイルから全非空セルを抽出"""
    out_dir.mkdir(parents=True, exist_ok=True)

    img = Image.open(img_path).convert("RGBA")
    a_rgb = np.array(img.convert("RGB"))
    w, h = img.size
    rows = h // CELL_H
    cols = w // CELL_W

    count = 0
    for r in range(rows):
        for col in range(cols):
            y0, y1 = r * CELL_H, (r + 1) * CELL_H
            x0, x1 = col * CELL_W, (col + 1) * CELL_W
            cell = a_rgb[y0:y1, x0:x1]
            if not is_cell_empty_rgb(cell):
                cell_img = img.crop((x0, y0, x1, y1))
                cell_arr = np.array(cell_img)
                # 黒背景→透明
                black_mask = (cell_arr[:, :, 0] == 0) & (cell_arr[:, :, 1] == 0) & (cell_arr[:, :, 2] == 0)
                cell_arr[black_mask, 3] = 0
                out_img = Image.fromarray(cell_arr)
                out_img.save(out_dir / f"r{r:03d}_c{col:03d}.png")
                count += 1

    return count, 0


def main():
    repo = Path(__file__).parent.parent
    alpha_dir = repo / "α版ソースコード分解" / "assets"
    current_dir = repo / "assets" / "img"
    out_dir = repo / "assets" / "sprites" / "alpha_diff"

    if out_dir.exists():
        import shutil
        shutil.rmtree(out_dir)

    print("=== α版 vs 現行版 スプライト差分抽出 ===")
    print(f"α版:     {alpha_dir}")
    print(f"現行版:   {current_dir}")
    print(f"出力先:   {out_dir}")
    print()

    total_mod = 0
    total_add = 0
    total_new = 0

    # ペアのシートを比較
    for buffer_id, alpha_name, current_name, category in PAIRED_SHEETS:
        alpha_path = alpha_dir / alpha_name
        current_path = current_dir / current_name

        if not alpha_path.exists():
            continue

        mod, add = compare_paired(alpha_path, current_path, category, out_dir)
        if mod + add > 0:
            print(f"  {category:12s}: {mod:4d} modified, {add:4d} added")
            total_mod += mod
            total_add += add

    print()

    # α版のみのファイル
    for buffer_id, alpha_name, category in ALPHA_ONLY_SHEETS:
        alpha_path = alpha_dir / alpha_name
        if not alpha_path.exists():
            print(f"  {category:12s}: SKIP (not found)")
            continue

        new_dir = out_dir / category / "new"
        count, _ = extract_all_cells(alpha_path, category, new_dir)
        if count > 0:
            img = Image.open(alpha_path)
            print(f"  {category:12s}: {count:4d} cells ({img.size[0]}x{img.size[1]}) [NEW FILE]")
            total_new += count

    print()
    print(f"=== 合計 ===")
    print(f"  修正セル: {total_mod}")
    print(f"  追加セル: {total_add}")
    print(f"  新規セル: {total_new}")
    print(f"  総計:     {total_mod + total_add + total_new}")

    # レポートJSON出力
    report = {
        "description": "α版 vs 現行版 スプライト差分レポート",
        "modified": total_mod,
        "added": total_add,
        "new": total_new,
        "total": total_mod + total_add + total_new,
        "output_dir": str(out_dir.relative_to(repo)),
    }
    report_path = out_dir / "diff_report.json"
    report_path.parent.mkdir(parents=True, exist_ok=True)
    with open(report_path, "w", encoding="utf-8") as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    print(f"\nレポート: {report_path}")


if __name__ == "__main__":
    main()
