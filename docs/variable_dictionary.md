# newDTW 変数辞書

変数定義ファイル: `src/renderer/variable.ts`
生成日時: 2026-04-14T01:44:01.596Z

このファイルは `tools/extract_var_dict.js` で自動生成。
HSP由来の `var_XXX` 変数のうち、コメントが付与されているものを一覧化。

- 番号付き変数 (`var_XXX`): 114 / 約3,900 件 (2.9%)
- 名前付き変数: 79 件

## 番号付き変数 (var_XXX)

| 変数名 | 型 | 用途 |
|--------|-----|------|
| `var_12` | `any` | デバッグフラグ？？ |
| `var_20` | `number` | 鉄の牢獄の最終階層 |
| `var_21` | `string` | dungeon_number 5 の名称 「鉄の牢獄」 |
| `var_66` | `number` | ディアボロ(プレイヤー)の現在位置 X座標 (マップグリッド単位) |
| `var_67` | `number` | ディアボロ(プレイヤー)の現在位置 Y座標 (マップグリッド単位) |
| `var_71` | `any` | マップグリッド[X][Y] = セル内容 (壁/床/罠/階段等の地形種別) |
| `var_78` | `any` | 床上アイテムデータ配列 (位置と種類) |
| `var_82` | `any` | 敵占有グリッド[X][Y] = 0:空き / 1以上:敵あり (衝突判定用) |
| `var_83` | `any` | 敵キャラデータ配列 [敵ID].VarN: Var0=種類, Var1=X座標, Var2=Y座標, Var10=部屋ID, Var11=向き等 |
| `var_104` | `number` | 攻撃力が上がるフラグ。1 = ON |
| `var_105` | `number` | 攻撃を躱わしやすくなるフラグ。1 = ON |
| `var_111` | `number` | 命中率を上げるフラグ。1 = ONなので投げたアイテムが必中になる |
| `var_121` | `number` | var_121 罠が見えるようになるフラグ。1 = ON |
| `var_127` | `number` | 瞼が落ちるや目を切り裂かれるなどで視界が見えななくなった時のフラグ |
| `var_132` | `number` | 記憶DISC「ンドゥール」の効果発動フラグ |
| `var_139` | `number` | ターン数経過カウンター。仗助のdiscやドッピオのdiscで使われている。0 = ダンジョンではない |
| `var_157` | `number` | 倍速移動フラグ。0 = 等速、1 = 2倍速、2 = ？ |
| `var_164` | `number` | 時止め経過時のターン数？ |
| `var_165` | `number` | 現フロアに出現する敵の増加数。0 = 増えない。 |
| `var_170` | `number` | 罠が見えるようになるフラグ(あくまでMAP上に見えるだけ。噴上裕也のDISC限定)。1 = ON |
| `var_172` | `number` | 発動効果が向上するフラグ。1 = ON |
| `var_196` | `number` | Mフラグ:メニュー画面 Func.func054 |
| `var_199` | `number` | ディアボロの向き (1=↑, 3=←, 5=↓, 7=→ などテンキー方向) |
| `var_201` | `number` | 現在の部屋ID (var_71 と一致する場合は部屋内, 通路の場合は別値) |
| `var_203` | `number` | ホテルの外12Fの特殊階層の選択フラグ。4つの中から選択 |
| `var_220` | `number` | 道具画面(メニュー画面/道具)呼び出し確認変数？ |
| `var_225` | `number` | ディアボロの行動方向 (攻撃・移動先決定用、var_199 と関連) |
| `var_233` | `any[]` | 所持アイテム用配列 |
| `var_255` | `number` | 入力判定[↑] |
| `var_259` | `number` | 入力判定[↓] |
| `var_262` | `number` | dangeon_numberであるかどうかの確認フラグ。1 = 確定 |
| `var_271` | `number` | エフェクト "キラキラ" 表示フラグ |
| `var_314` | `number` | 敵処理時のループカウンタ (var_83[var_314] で現在処理中の敵を参照) |
| `var_340` | `number` | belongings_item_list |
| `var_356` | `number` | 死因要因メッセージID選択 |
| `var_417` | `number` | belongings_item_list |
| `var_446` | `number` | 投げて落ちた先が地面、水面かどうかの判別？ 1 = 地面、0 = 水面 |
| `var_499` | `number` | Mフラグ:設定画面 Func.func056 |
| `var_508` | `number` | Mフラグ:資料(設定画面) Func.func058 |
| `var_523` | `number` | 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転 |
| `var_524` | `number` | 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ |
| `var_526` | `number` | ディアボロの試練解放フラグ |
| `var_527` | `number` | グリーンディやDIOが同じ部屋にいる時に階段を降りれなくフラグ。0 = 初期化、1 = グリーンディ、2 = DIO |
| `var_533` | `number` | クリア時のスコア加算用。 |
| `var_548` | `number` | 選択肢処理フラグ。これがONだと「はい、いいえ」「買う、やめる」等の選択肢が出現する。 |
| `var_561` | `number` | マップX軸原点の初期値5 (安易に変更すると壁の中になるのでワープしてしまう) |
| `var_562` | `number` | マップY軸原点の初期値5 (安易に変更すると壁の中になるのでワープしてしまう) |
| `var_595` | `number` | dungeon_number での場所確認。0 = ヴェネチアホテル、1 = 亀の中、3 == ローマ・ティベレ河 |
| `var_637` | `number` | ウィンドウサイズの大きさ 0 = 340X340, 1 = 680X680 |
| `var_668` | `any` | 効果音上限設定処理 (最大値:137) |
| `var_673` | `any` | 敵の特殊能力発動制御 (敵カテゴリごとの判定フラグ) |
| `var_708` | `number` | エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグ |
| `var_709` | `number` | エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)解放フラグ |
| `var_715` | `number` | エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグ |
| `var_716` | `number` | エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)解放フラグ |
| `var_722` | `number` | エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグ |
| `var_723` | `number` | エンブレム(ダンジョン(レクイエムの大迷宮？)クリア時)解放フラグ |
| `var_743` | `number` | スタンド像付与フラグ。1 = ON |
| `var_765` | `number` | メッセージ自動送りキャンセルフラグ |
| `var_796` | `number` | ランキングスコア |
| `var_802` | `number` | belongings_item_list |
| `var_810` | `number` | 装備discにおてい、合成出来る回数?? |
| `var_876` | `any` | item_name |
| `var_883` | `number` | belongings_item_list |
| `var_906` | `number` | カーソル位置 (ゲームスピード, 0 = 超速, 1 = 速い, 2 = 普通, 3 = 遅い, 4 = 超遅) |
| `var_933` | `number` | ディアボロのレベル変数 |
| `var_965` | `number` | 敵の画像読み込み専用buffer ID。6, 13, 21, 27。 |
| `var_983` | `any` | 敵の追加状態データ配列 (詳細は使用箇所により異なる) |
| `var_993` | `number` | ディアボロの試練解放フラグ |
| `var_1024` | `number` | 次の階の出現アイテム数＋6個するフラグ。1 = ON |
| `var_1163` | `number` | 敵エンヤ婆の能力発動フラグ |
| `var_1247` | `number` | belongings_item_list |
| `var_1253` | `number` | belongings_item_list 「ﾋﾟﾝｸﾀﾞｰｸの少年」のID確認用? |
| `var_1289` | `number` | belongings_item_list |
| `var_1291` | `number` | 敵キャラの攻撃モーション用スタンドのドット絵選択 |
| `var_1354` | `number` | belongings_item_list |
| `var_1375` | `number` | 敵が攻撃を受けた際のリアクション画像を読み込む専用のbuffer ID。6, 13, 21, 27。 |
| `var_1386` | `number` | belongings_item_list |
| `var_1421` | `number` | belongings_item_list |
| `var_1459` | `number` | belongings_item_list |
| `var_1471` | `number` | belongings_item_list |
| `var_1571` | `number` | belongings_item_list |
| `var_1619` | `number` | 敵図鑑の並び |
| `var_1637` | `number` | 攻撃モーションにスタンド像を付与するフラグ。0 = 攻撃時物理攻撃モーション、1 = 攻撃時スタンド攻撃モーション |
| `var_1667` | `number` | belongings_item_list |
| `var_1697` | `number` | belongings_item_list |
| `var_1708` | `number` | belongings_item_list |
| `var_1746` | `number` | 倒された後にNo = 399 G・E・レクイエムを落とすフラグ |
| `var_1750` | `number` | 倒された後にNo = 393 ボヘミアンラプソディを落とすフラグ |
| `var_1846` | `number` | belongings_item_list |
| `var_1847` | `number` | free_space_valueと同じく装備discの空き容量。関数同士の受け渡しに使用 |
| `var_1867` | `number` | belongings_item_list |
| `var_1927` | `number` | belongings_item_list |
| `var_1928` | `number` | belongings_item_list |
| `var_1929` | `number` | belongings_item_list |
| `var_1934` | `number` | 装備discが呪われているかどうか 0 = 呪われていない、1 = 呪われている |
| `var_2010` | `number` | belongings_item_list |
| `var_2012` | `number` | 装備discの修正値 |
| `var_2020` | `number` | 装備discの合成した数 |
| `var_2024` | `number` | free_space_valueと同じく"空き容量："の表示に使われている |
| `var_2085` | `number` | belongings_item_list |
| `var_2121` | `number` | belongings_item_list ヤバいものに関するID:800 ~ 900未満だけ |
| `var_2187` | `number` | belongings_item_list |
| `var_2303` | `number` | belongings_item_list お金用? ID:0 or 1 しか使用していない |
| `var_2460` | `number` | belongings_item_list お金用? ID:0 or 1 しか使っていない |
| `var_2544` | `number` | オーラ敵フラグ。1 = ON。dungeon_number = 5の鉄獄のみオーラ敵を生成する処理が動くようになっている。Func.func564 |
| `var_2708` | `number` | 敵が攻撃してこなくなるフラグ。1 = 攻撃してこない |
| `var_2720` | `number` | 敵の特殊能力発動フラグ。1 = ON |
| `var_2751` | `number` | 敵が特殊攻撃をしてくる確率 |
| `var_2812` | `number` | belongings_item_list アイテム欄にないIDを指定している |
| `var_2855` | `number` | belongings_item_list |
| `var_2938` | `number` | 敵のヒラリ回避発動フラグ |
| `var_3081` | `number` | belongings_item_list nouryoku_disc_id の橋渡し |
| `var_3198` | `number` | ホテルの外へ向かう際のメッセージフラグ |

## 未コメント変数 TOP 50 (優先コメント候補)

総 `var_XXX` 数: 3624
コメント済み: 114
未コメント: 50+

使用回数が多い順に未コメント変数を表示。コメントを付けると効果が大きい順。

| 変数名 | 出現回数 | 使用ファイル数 | 主な使用箇所 (上位3件) |
|--------|----------|----------------|------------------------|
| `var_2194` | 1203 | 37 | `enemy\func609.ts`, `enemy\func610.ts`, `extra_items\item714.ts` |
| `var_2611` | 1050 | 8 | `enemy\func604.ts`, `func\func1046.ts`, `func\func543.ts` |
| `var_2424` | 958 | 8 | `enemy\func604.ts`, `func\func1012.ts`, `func\func1021.ts` |
| `var_1918` | 947 | 5 | `func\func0411.ts`, `func\func414.ts`, `func\func473.ts` |
| `var_35` | 935 | 24 | `dungeon\func163.ts`, `dungeon\func163b.ts`, `func\func0914.ts` |
| `var_36` | 891 | 22 | `dungeon\func163.ts`, `dungeon\func163b.ts`, `func\func0914.ts` |
| `var_423` | 889 | 10 | `func\func020.ts`, `func\func079.ts`, `func\func1012.ts` |
| `var_424` | 885 | 9 | `func\func020.ts`, `func\func079.ts`, `func\func546.ts` |
| `var_308` | 845 | 36 | `func\func015.ts`, `func\func016.ts`, `func\func0826.ts` |
| `var_866` | 772 | 16 | `dungeon0\func0863.ts`, `func\func0938.ts`, `func\func384.ts` |
| `var_764` | 759 | 22 | `dungeon\func244.ts`, `func\func0914.ts`, `func\func0929.ts` |
| `var_1917` | 758 | 3 | `func\func0411.ts`, `func\func414.ts`, `func\func541.ts` |
| `var_486` | 707 | 56 | `dungeon0\func0892.ts`, `dungeon0\func0896.ts`, `dungeon0\func0897.ts` |
| `var_704` | 630 | 6 | `adapter\data_update_for_debug.ts`, `func\func242.ts`, `initialize\func139.ts` |
| `var_286` | 608 | 97 | `conditions\func022.ts`, `func\func014.ts`, `func\func061.ts` |
| `var_447` | 592 | 39 | `dungeon0\func0862.ts`, `event\func150.ts`, `func\func020.ts` |
| `var_3812` | 592 | 3 | `func\func0948.ts`, `func\func0950.ts`, `func\func0952.ts` |
| `var_610` | 590 | 5 | `func\func079.ts`, `func\func546.ts`, `func\func569.ts` |
| `var_81` | 585 | 46 | `extra_items\item701.ts`, `func\func014.ts`, `func\func018.ts` |
| `var_402` | 578 | 30 | `enemy\func609.ts`, `enemy\func610.ts`, `extra_items\item714.ts` |
| `var_449` | 574 | 34 | `dungeon0\func0862.ts`, `func\func020.ts`, `func\func0913.ts` |
| `var_953` | 570 | 12 | `dungeon1\func628.ts`, `dungeon2\func629.ts`, `dungeon3\func630.ts` |
| `var_763` | 560 | 13 | `func\func0914.ts`, `func\func157.ts`, `func\func324.ts` |
| `var_224` | 554 | 93 | `debug.ts`, `dungeon\func0889.ts`, `dungeon0\func066.ts` |
| `var_2917` | 534 | 6 | `dungeon1\func628.ts`, `dungeon2\func629.ts`, `dungeon3\func630.ts` |
| `var_211` | 532 | 92 | `conditions\func032.ts`, `dungeon\func072.ts`, `dungeon\func0889.ts` |
| `var_283` | 529 | 97 | `conditions\func022.ts`, `func\func014.ts`, `func\func061.ts` |
| `var_287` | 523 | 94 | `func\func014.ts`, `func\func0799.ts`, `func\func0800.ts` |
| `var_2135` | 521 | 4 | `func\func483.ts`, `func\func484.ts`, `func\func486.ts` |
| `var_2577` | 506 | 4 | `func\func543.ts`, `func\func565.ts`, `func\func566.ts` |
| `var_284` | 497 | 97 | `conditions\func022.ts`, `func\func014.ts`, `func\func061.ts` |
| `var_2133` | 491 | 8 | `func\func483.ts`, `func\func484.ts`, `func\func485.ts` |
| `var_77` | 485 | 104 | `dungeon\func045.ts`, `dungeon0\func159.ts`, `enemy\enemy132.ts` |
| `var_1707` | 477 | 4 | `func\func1012.ts`, `func\func380.ts`, `func\func381.ts` |
| `var_1136` | 460 | 8 | `dungeon\func294.ts`, `dungeon\func295.ts`, `dungeon\func296.ts` |
| `var_25` | 458 | 100 | `func\func000.ts`, `func\func019.ts`, `func\func0799.ts` |
| `var_493` | 457 | 35 | `dungeon\func046.ts`, `dungeon\func300.ts`, `dungeon\func301.ts` |
| `var_682` | 456 | 24 | `dungeon0\func0896.ts`, `func\func368.ts`, `func\func369.ts` |
| `var_26` | 453 | 99 | `func\func000.ts`, `func\func019.ts`, `func\func0799.ts` |
| `var_456` | 437 | 36 | `enemy\enemy026.ts`, `enemy\enemy078.ts`, `enemy\enemy087.ts` |
| `var_977` | 434 | 12 | `dungeon1\func628.ts`, `dungeon2\func629.ts`, `dungeon3\func630.ts` |
| `var_33` | 416 | 104 | `conditions\func022.ts`, `dungeon\func045.ts`, `dungeon\func046.ts` |
| `var_176` | 414 | 28 | `func\func0411.ts`, `func\func0846.ts`, `func\func0997.ts` |
| `var_666` | 414 | 3 | `music\func081.ts`, `music\func082.ts`, `music\preloadAllSoundEffects.ts` |
| `var_667` | 414 | 3 | `music\func081.ts`, `music\func082.ts`, `music\preloadAllSoundEffects.ts` |
| `var_2131` | 401 | 6 | `func\func1012.ts`, `func\func483.ts`, `func\func484.ts` |
| `var_475` | 393 | 23 | `enemy\enemy026.ts`, `enemy\enemy032.ts`, `enemy\enemy045.ts` |
| `var_290` | 390 | 98 | `func\func015.ts`, `func\func019.ts`, `func\func0799.ts` |
| `var_428` | 389 | 13 | `func\func020.ts`, `func\func079.ts`, `func\func0825.ts` |
| `var_223` | 387 | 111 | `func\func009.ts`, `func\func0799.ts`, `func\func0800.ts` |

## 名前付き変数

| 変数名 | 型 | 用途 |
|--------|-----|------|
| `Y_axis_item_position` | `number` | アイテムを道具一覧で表示する際のY座標ポジション |
| `activated_disc_id` | `any` | numberにするとコンパイル時にエラー。disc能力発動の動作処理用 belongings_item_list |
| `animationDelay` | `number` | 待機時間(ミリ秒 or フレーム間隔?)。全体の描画フレーム速度を調整するための変数 |
| `animationOffset` | `number` | 変数 animationStep の値に応じた描画オフセット |
| `animationStep` | `number` | 0 から 5 まで変化しアニメーションステップや描画の段階を示す変数 |
| `base_disc_list` | `number` | 合成の基本ベースとなる装備discのID |
| `bgm_volume` | `number` | BGMの現在ボリューム |
| `bougyo_disc_id` | `number` | 防御装備disc用ID |
| `buffer_id` | `number` | bufferで指示するID番号。このIDで読み込んだ画像データを切り替える。 |
| `buffer_x_axis` | `number` | bufferで指示するX座標数値。この数値で読み込んだ画像データから表示する箇所を指定する。 |
| `buffer_y_axis` | `number` | bufferで指示するY座標数値。この数値で読み込んだ画像データから表示する箇所を指定する。 |
| `bufferid_stand_disc` | `number` | スタンドdisc専用読み込みbuffer ID。gcopyで読み込む画像の割り振りに使われる。1、11、16、29のみ。 |
| `buying_price` | `number` | アイテムごとに設定された購入金額 |
| `conf_keyon` | `number` | 各キー入力確認。ON = 1、OFF |
| `count_buying_price` | `number` | 購入金額の合計をカウントする為の変数 |
| `current_floor` | `number` | 現在の階層 |
| `current_level` | `number` | ディアボロの現在のレベル |
| `disc_class` | `number` | 装備discをどの区分で装備するか。1 = 攻撃、2 = 防御、3 = 能力 |
| `disc_rarity` | `number` | 0より大きければレアdisc(色違い) |
| `dungeon1_floor` | `number` | current_floor ホテルの外の階層 |
| `dungeon2_floor` | `number` | current_floor レクイエムの大迷宮の階層 |
| `dungeon3_floor` | `number` | current_floor ディアボロの試練の階層 |
| `dungeon4_floor` | `number` | current_floor 一巡後の世界の階層 |
| `dungeon5_floor` | `number` | current_floor 不明ダンジョンの階層 |
| `dungeon_number` | `number` | 各ダンジョンに割り振られた識別用ID |
| `effects_message` | `string` | アイテムの"説明"を開いた時に表示される合成能力や消費アイテムの効果のメッセージ |
| `enemy_description` | `string` | 敵の説明。敵図鑑用コメント |
| `enemy_exp_point` | `number` | 敵を倒した時にもらえる経験値 |
| `enemy_hp` | `number` | 敵の体力値 |
| `enemy_list` | `number` | 各敵に割り振られた識別用ID |
| `equip_disc` | `any[]` | 装備しているdisc(装備区分問わず、射撃discは除く)を格納し、装備しているかどうかを判別する。例えばメイド・イン・ヘブンのdiscを装備しているだと equip_disc[396] == 1 となる。 |
| `free_space_value` | `number` | 装備discにおいて、合成できる残り容量 |
| `game_title` | `string` | ウィンドウタイトルに表示される名前 |
| `go_to_hotel` | `number` | Ver0.1403にて追加。酒場からホテルの部屋に戻る際のメッセージフラグ |
| `identified_disc_name` | `string` | disc能力発動の動作処理用 識別後のdisc名称 |
| `isColorPickerShown` | `boolean` | カラーピッカーが表示されているかどうかのフラグ |
| `item_ability_description` | `string` | アイテムの能力についての説明。3方向殴れるぞ、投げると敵がスヤスヤ眠るぞなど |
| `item_description1` | `string` | アイテムの説明。攻撃:0 防御:0 など |
| `item_icon_id` | `number` | アイテムのアイコンを指示する用のアイテムID。 |
| `item_message1` | `string` | 消費アイテムを使用した際に表示させるコメント1 |
| `item_message2` | `string` | 消費アイテムを使用した際に表示させるコメント2 |
| `item_modified_value` | `number` | 装備discの修正値 |
| `item_page_number` | `number` | アイテム個数 var_225 が10以下であれば 1、アイテム個数 var_225 が10より多ければ 2、アイテム個数 var_225 が0であれば 3、 |
| `ivents_flag` | `number` | イベントフラグ。ヴェネチアホテルでのダンジョン開放に主に使われている |
| `key_A_on` | `number` | キーA入力確認 |
| `key_C_on` | `number` | キーC入力確認 |
| `key_F_on` | `number` | Ver0.1401にて追加。入力判定：射撃disc「フー・ファイターズ」を所持している場合に発動(F) |
| `key_S_on` | `number` | キーS入力確認 |
| `key_Shift_on` | `number` | キーShift入力確認 |
| `key_X_on` | `number` | キーX入力確認 |
| `key_Z_on` | `number` | キーZ入力確認 |
| `kougeki_disc_id` | `number` | 攻撃装備disc用ID |
| `lang_cursor` | `number` | 言語設定カーソル位置 (0:日本語, 1:English) |
| `lang_menu_open` | `number` | 言語設定サブメニュー表示フラグ (0:非表示, 1:表示) |
| `nouryoku_disc_id` | `number` | 能力装備disc専用ID |
| `number_of_abilities` | `number` | 装備discの合成した数 |
| `open_item_menue` | `number` | Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460 |
| `payment_amount` | `number` | お店で実際に請求される支払い金額 |
| `receive_bgm_id` | `number` | BGM用iDを読み込むための変数。アイテムIDを直接代入したりしている。 |
| `se_file_name` | `number` | 効果音ID。DSPLAYで効果音を指定する際に使用する。 |
| `se_volume` | `number` | 効果音の現在ボリューム |
| `shageki_disc_id` | `number` | 射撃disc専用ID。 |
| `special_floor` | `number` | 特殊階層ID |
| `special_map_id` | `number` | ダンジョンマップID |
| `stolen_money` | `number` | 盗まれる金額 |
| `strengthen_item_name` | `string` | 装備disc、射撃disc、ヤバいもの等コミックを使って強化できるアイテムの名前 |
| `sympathy_base_disc_id` | `number` | 共鳴効果組み合わせ判別用 装備disc(ベース) belongings_item_list |
| `sympathy_id` | `number` | 装備discの組み合わせにより発動する共鳴効果。そのID list |
| `sympathy_with_disc_id` | `number` | 共鳴効果組み合わせ判別用 装備disc(ベースと対になるもの) belongings_item_list |
| `target_item_name` | `string` | 盗まれたり、消し炭にされたり、強化したり等、対象となるアイテムの名前 |
| `taskact1_on` | `number` | Ver0.1401にて追加。タスクact1を発動したかどうかの確認フラグ |
| `time_paused_count` | `number` | 敵時止め経過ターン |
| `track_number` | `number` | 装備discにおいて、合成した能力の順番 |
| `unidentified_disc_name` | `string` | disc能力発動の動作処理用 未識別状態のdisc名称 |
| `version_number` | `string` | 起動時、画面下に表示されるバージョン名 |
| `wallet` | `number` | 現在所持している金額 |
| `with_disc_list` | `number` | 合成する装備discのID |
| `y_axis_map_image` | `number` | map.gif上でのY座標指定用。gcopy(5) |
| `yabaimono_id` | `number` | ヤバいものの動作処理用 belongings_item_list |