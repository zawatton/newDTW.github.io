# newDTW — Diavolo The Wanderer (Open Source)

> A fan-made, open-source browser roguelike inspired by JoJo's Bizarre Adventure.
> Originally created by KMQ SOFT, now rebuilt in TypeScript + Electron.

<a href="https://newdtw.github.io/"><img src="https://img.shields.io/badge/Play_Now_%F0%9F%8E%AE-in_your_browser-blueviolet?style=for-the-badge" alt="Play Now"></a>
<a href="https://github.com/sponsors/zawatton21"><img src="https://img.shields.io/badge/Sponsor_%E2%9D%A4_Support_this_project-pink?style=for-the-badge" alt="Sponsor"></a>

## What is this?

**Diavolo The Wanderer** (ディアボロの大冒険) is a mystery dungeon roguelike set in the JoJo's Bizarre Adventure universe. The original game, created by KMQ SOFT using HSP (Hot Soup Processor), became a cult classic in Japan before development ended in 2008.

**newDTW** is a ground-up rebuild of the game:
- **HSP &rarr; TypeScript** — 100K+ lines of HSP source ported to modern TypeScript
- **Browser-playable** — no download needed, runs at [newdtw.github.io](https://newdtw.github.io/)
- **Electron desktop** — optional native app via `npm start`
- **Open source** — all game logic, sprites, and tools are in this repo

## Features

- Classic mystery dungeon gameplay with Stand abilities and items from JoJo Parts 1-6
- 1,050+ game functions fully ported from original HSP source
- 28,000+ sprite cells with per-pixel rendering via SpriteManager
- Map theme system for custom dungeon tilesets
- Backwards-compatible `gcopy` adapter — original rendering calls work alongside new sprite API

## Quick Start

### Play in Browser

Visit **[newdtw.github.io](https://newdtw.github.io/)** — no installation required.

### Run Locally

```bash
git clone https://github.com/zawatton21/newDTW.github.io.git
cd newDTW.github.io
npm install
npm run build
npm start          # launches Electron app
```

**Requirements:** Node.js 18+, Python 3.10+ (for tools; needs Pillow + numpy)

## Project Structure

```
src/
  renderer/
    adapter/        HSP-to-TS adapter layer (gcopy, picload, SpriteManager)
    func/           Main game logic (func000 - func1056)
    enemy/          Enemy AI and data
    stand/          Stand DISCs and items
    dungeon/        Dungeon generation and processing
    ...
assets/
  sprites/          Individual sprite PNGs + manifest.json
  img/              Legacy sprite sheets
tools/              Dev tools (sprite extraction, map themes, diff analysis)
```

## Contributing

Contributions welcome — code, pixel art, translations, bug reports.

Join the development on Discord: DM **Zawa-TON** to get started.

### Adding Content

**Stand DISCs / Items:**
1. Place 40x40 PNG in `assets/sprites/`
2. Register in `manifest.json`
3. Use `Adap.spriteManager.draw("category/name")` to render

**Map Themes:**
```bash
python tools/add_map_theme.py my_tiles/ 27 "New Dungeon"
```

## Roadmap

- [ ] Custom version content (v0.14-0.16 features)
- [ ] Parts 7 & 8 characters and Stands
- [ ] Internationalization (English, Chinese, etc.)
- [ ] Original BGM to resolve copyright

## Credits

### Original Game
- **KMQ SOFT** (Clive, Munier, qra) — original Diavolo The Wanderer (v0.13)

### Custom Versions
- Anonymous contributors — v0.14-0.16

### Open Source Version
- **Zawatton21 (Zawa-TON)** — TypeScript rebuild, SpriteManager, tooling

### Pixel Art Contributors
Many anonymous artists contributed enemy sprites, Stand DISCs, and items. See the full credits in the Japanese section below.

---

## License

See [LICENSE.md](LICENSE.md).

---

<details>
<summary><strong>日本語README (Japanese)</strong></summary>

## はじめに

こちらは、ディアボロの大冒険の二次創作版 (自称オープンソース化プロジェクト)です。

KMQ SOFT が作成した「ジョジョの奇妙な冒険」の二次創作ローグライクゲーム「ディアボロの大冒険」。かつて一世を風靡したディアボロの大冒険ですが、その原作版の開発は2008年9月30日を持って終了しました。

こちらはファンの一人が作成した[ブラウザ版ディアボロの大冒険](https://github.com/newDTW/newDTW.github.io)のソースコードをフォークし、ディアボロの大冒険のオープンソース化を目指して開発を続けています。

## 構想

この newDTW は原作 Ver 0.13 を踏襲したブラウザ版から出発しています。今後の開発構想としては以下の通りです。

- 原作の開発が終了した後にファンによって開発されたカスタム版である Ver 0.14 ~ 0.16 の要素を追加
- 「ジョジョの奇妙な冒険」の第7部、第8部の要素を追加
- 日本語だけでなく英語や中国語など海外のプレイヤーを意識した多言語化
- BGMなどの著作権問題のクリア

## スタッフクレジット

### Special Thanks

#### ゲーム開発
- 原作者 (ver0.13まで): クライブ さま・ムニエル さま・qra さま (KMQ SOFTの御三方)
- カスタム版 ver0.14~0.16 の開発: 名も無き波紋使い
- 本オープンソース版: Zawatton21 (Zawa-TON)

#### ドット絵開発
ドット絵を作成していただいた方々、本当にありがとうございます。

- ゲーム全体: KMQ SOFT の御三方
- 敵キャラドット絵修正: 「名も無きスタンド使い」(30+ characters)
- スタンドDISC: 「名も無きスタンド使い」
- その他アイテム: 「名も無きスタンド使い」

</details>
