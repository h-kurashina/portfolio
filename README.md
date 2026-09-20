# h.kurashina Portfolio

React・TypeScript・Viteで作る個人ポートフォリオです。白を基調としたホームから、プロフィール・作品・発信・本の4ページへ移動できます。

## ローカルで起動

Node.js 22.12以上とnpmを使用します。

```sh
git clone https://github.com/h-kurashina/portfolio.git
cd portfolio
npm ci
npm run dev
```

http://localhost:5173 を開いてください。ポートが使用中の場合、別のポートへ自動移動せず停止します。

## ビルドとテスト

```sh
npm run build
npx playwright install chromium
npm test
```

テスト用サーバーはPlaywrightが起動します。ローカルで起動済みの開発サーバーがある場合は再利用します。インストール済みのGoogle Chromeを使う場合は `PORTFOLIO_BROWSER_CHANNEL=chrome npm test` を実行してください。

GitHub Actionsでもビルドとブラウザテストを実行します。

## ページ

| パス | 内容 |
| --- | --- |
| `/` | 名前・開発者ロゴと4つの入口 |
| `/personal` | 写真、プロフィール、経歴、使用技術、関心、連絡先 |
| `/development` | 言語と分野で絞り込める作品一覧 |
| `/daily-notes` | 記事や投稿などの発信活動 |
| `/books` | 読んだ本、おすすめの本 |

作品・発信・本のデータは現在未登録です。Hono API・DB・管理画面は未実装で、コンテンツは静的データから表示します。

## 自分用に変更する

- `src/data/site.ts`: 名前、サイト名、肩書き
- `src/data/content.ts`: プロフィール、作品、発信、本
- `src/data/projects.ts`: ホームの入口とリンク
- `src/styles.css`: レイアウト、色、アニメーション
- `public/images/brand/hk.svg`: ロゴ・favicon
- `public/images/profile/`: プロフィール写真
- `index.html`: ページタイトルとメタ情報

利用する際は、名前・経歴・写真・メール・リンクを自分の内容に差し替えてください。Reactコンポーネントに本文を埋め込まず、データファイルから編集できます。

## 実装

- `Project[]` を `map()` で描画し、React stateでhover・focusを管理。
- CSS transitionによる登場、背景色切り替え、固定プレビューのクロスフェード。
- `requestAnimationFrame` による円形カーソルの追従。アニメーションライブラリは不使用。
- native dialogによるメニューとフォーカス管理。
- モバイル対応と `prefers-reduced-motion` 対応。
- Playwrightによる画面内への収まり、hover、リンク、メニュー、絞り込みの確認。

詳細ページを直接開けるよう、公開先には未知のパスを `index.html` に返すSPAフォールバック設定が必要です。開発時はViteが処理します。

## ライセンス・クレジット

[MIT License](LICENSE)。

技術ロゴは [Devicon v2.17.0](https://github.com/devicons/devicon/tree/v2.17.0) を使用しています。[MITライセンス表記](public/licenses/devicon-MIT.txt)を同梱しています。技術名・商標は各権利者に帰属します。

レイアウトと動きの学習参考: [Takuya Oshima — Works](https://takuya-oshima.com/en/works/)。コンテンツ、プロフィール写真、ロゴ、ページ用SVGアイコンは本サイト用です。参考サイトの画像やWebフォントは同梱していません。
