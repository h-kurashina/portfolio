export type DevelopmentWork = {
  imageUrl?: string
  id: string
  title: string
  description: string
  languages: string[]
  fields: string[]
  url?: string
}

export type Book = {
  imageUrl?: string
  id: string
  title: string
  author: string
  review?: string
  status: 'unread' | 'reading' | 'read' | null
  languages: string[]
  fields: string[]
  nickname?: string
  recommended: boolean
  url?: string
}

export type Publication = {
  id: string
  title: string
  platform: string
  date: string
  body?: string[]
  url?: string
  linkLabel?: string
}

export type Biography = {
  role: string
  introduction: string
  motivation: string
  company: { name: string; url: string }
  education: string
  product: string
  history: { period: string; title: string; detail?: string }[]
  languages: string[]
  frameworks: string[]
  security: string
  interests: string[]
  outlook: string
  hobby: string
  email: string
  photo: { src: string; alt: string; width: number; height: number }
  githubUrl?: string
  xUrl?: string
}

export const biography: Biography = {
  role: 'Software Engineer / Business Lead',
  introduction: 'エムキャピタル株式会社で、Beaulabの開発に取り組んでいます。ソフトウェアエンジニアリングを軸に、事業責任者も務めています。中央大学は現在休学中です。',
  motivation: 'Beaulabを事業としてつくることになったのが、開発を始めたきっかけです。必要な技術を学ぶうちに、プログラミングそのものの面白さを感じるようになりました。',
  company: { name: 'エムキャピタル株式会社', url: 'https://mhdg-mcapital.co.jp/' },
  education: '中央大学（休学中）',
  product: 'Beaulab',
  history: [
    { period: '高校', title: '春日部共栄高校' },
    { period: '2025', title: '中央大学 入学', detail: '現在は休学中。' },
    { period: '2026.02', title: 'エムキャピタル株式会社 入社' },
    { period: '2026.04', title: '事業責任者に就任' },
    { period: '2026.09', title: 'Rust Developer JP 参加', detail: 'プログラミング言語Rustのコミュニティ。' },
  ],
  languages: ['TypeScript', 'Python', 'Go', 'Rust'],
  frameworks: ['React'],
  security: 'Burp Suiteを用いたWebペネトレーションテストの経験があります。主な専門領域はソフトウェアエンジニアリングです。',
  interests: ['Rust / OSS', '低レイヤー', 'インフラ', '競技プログラミング'],
  outlook: 'これからはRustのOSS活動に参加したいと考えています。低レイヤーやインフラの分野を学び、競技プログラミングにも挑戦したいです。開発者や学生起業家など、さまざまな人との交流も広げていきたいと思っています。',
  hobby: 'チェス',
  email: 'h.kurashina49@gmail.com',
  githubUrl: 'https://github.com/h-kurashina',
  xUrl: 'https://x.com/hkurashina49',
  photo: {
    src: '/images/profile/h-kurashina.jpg',
    alt: 'ライトアップされた水辺でのh.kurashina',
    width: 1108,
    height: 1477,
  },
}
export const developmentWorks: DevelopmentWork[] = [
  {
    id: 'beaulab',
    title: 'Beaulab',
    description: '美容クリニックのためのSNSプラットフォーム。口コミや投稿でクリニックを探し、予約やメッセージのやり取りまでできます。エムキャピタル株式会社で事業責任者を務めながら、Web（Next.js）とモバイルアプリ（React Native / Expo）を開発しています。',
    languages: ['TypeScript', 'React Native'],
    fields: ['Webアプリ', 'モバイルアプリ'],
    imageUrl: '/images/projects/beaulab-icon.png',
    url: 'https://beaulab.jp',
  },
  {
    id: 'tadori',
    title: 'Tadori',
    description: '誰かが作った学びの道を、辿る。技術書・ビジネス書を「順番」と「できるようになること」でつなぐ、学習ロードマップのモバイルアプリ。ホームには今読む一冊を表示し、各本のチェックポイントに到達すると次の一冊へ進みます。Expo（React Native）とExpo Routerで開発中のMVPです。',
    languages: ['TypeScript', 'React Native'],
    fields: ['モバイルアプリ'],
    imageUrl: '/images/projects/tadori-icon.svg',
    url: 'https://github.com/h-kurashina/tadori',
  },
  {
    id: 'wryte',
    title: 'Wryte',
    description: '技術知識を、書く・確かめる・整える・公開するための技術執筆・知識共有サービス。フロントエンドはReactとVite、バックエンドはPython（FastAPI）とPostgreSQLで開発しています。',
    languages: ['TypeScript', 'React', 'Python'],
    fields: ['Webアプリ'],
    imageUrl: '/images/projects/wryte-icon.svg',
  },
  {
    id: 'trail',
    title: 'trail',
    description: 'Gitのworktreeの開発履歴を再構成する、ローカル完結のCLI。コミットだけでなく、作業ツリーの変更やHEADの移動も時系列のチェックポイントとして並べ、「何が変わったか」だけでなく「どう変わったか」を確認できます。最後のpush以降のレビューや、worktree・コミット単位のdiffにも対応しています。Rustで実装し、MITライセンスで公開しています。crates.ioにも「git-trail」として公開しており、cargo install git-trail でインストールできます。',
    languages: ['Rust'],
    fields: ['ツール・自動化'],
    imageUrl: '/images/projects/trail-icon.svg',
    url: 'https://github.com/h-kurashina/trail',
  },
  {
    id: 'sta',
    title: 'sta.',
    description: '科目を選んでから撮る、学生向けのドキュメント整理アプリ。スキャンした資料を科目へ直接保存し、閲覧中も科目をすばやく切り替えられます。SwiftUIとVisionKitで実装し、MITライセンスで公開しています。',
    languages: ['Swift'],
    fields: ['iOSアプリ'],
    imageUrl: '/images/projects/sta-logo.svg',
    url: 'https://github.com/h-kurashina/sta.',
  },
]
// Editions and reading dates are intentionally omitted until confirmed.
export const books: Book[] = [
  { id: 'typescript-blueberry', imageUrl: '/images/books/typescript-blueberry.jpg', title: 'プロを目指す人のためのTypeScript入門', author: '鈴木 僚太', nickname: 'ブルーベリー本', languages: ['TypeScript'], fields: ['言語の基礎', '型システム'], status: null, recommended: false, url: 'https://gihyo.jp/book/2022/978-4-297-12747-3' },
  { id: 'effective-typescript', imageUrl: '/images/books/effective-typescript.jpg', title: 'Effective TypeScript 第2版', author: 'Dan Vanderkam', languages: ['TypeScript'], fields: ['型システム', '実践・設計'], status: null, recommended: false, url: 'https://www.oreilly.co.jp/books/9784814401093/' },
  { id: 'introducing-python', imageUrl: '/images/books/introducing-python.jpg', title: '入門 Python 3', author: 'Bill Lubanovic', languages: ['Python'], fields: ['言語の基礎'], status: null, recommended: false, url: 'https://www.oreilly.co.jp/books/9784873117386/' },
  { id: 'effective-python', imageUrl: '/images/books/effective-python.jpg', title: 'Effective Python 第3版', author: 'Brett Slatkin', languages: ['Python'], fields: ['実践・設計'], status: null, recommended: false, url: 'https://www.oreilly.co.jp/books/9784814401338/' },
  { id: 'ddia', imageUrl: '/images/books/ddia.jpg', title: 'データ指向アプリケーションデザイン', author: 'Martin Kleppmann', nickname: 'DDIA / イノシシ本', languages: [], fields: ['分散システム', 'データ設計'], status: 'unread', recommended: false, url: 'https://www.oreilly.co.jp/books/9784873118703/' },
  { id: 'command-line-rust', imageUrl: '/images/books/rust-workbook.jpg', title: 'Rustの練習帳', author: 'Ken Youens-Clark', languages: ['Rust'], fields: ['言語の基礎', 'CLI・ツール'], status: 'unread', recommended: false, url: 'https://www.oreilly.co.jp/books/9784814400584/' },
  { id: 'ruby-cherry', imageUrl: '/images/books/ruby-cherry.jpg', title: 'プロを目指す人のためのRuby入門', author: '伊藤 淳一', nickname: 'チェリー本', languages: ['Ruby'], fields: ['言語の基礎'], status: null, recommended: false, url: 'https://gihyo.jp/book/2017/978-4-7741-9397-7' },
  { id: 'professional-react', imageUrl: '/images/books/professional-react.jpg', title: 'プロフェッショナルWebプログラミング React', author: '西畑 一馬・長谷川 広武・伊藤 祐策・扇田 心', languages: ['JavaScript', 'React'], fields: ['Webフロントエンド'], status: null, recommended: false, url: 'https://books.mdn.co.jp/books/3224303034/' },
]
export const publications: Publication[] = [
  {
    id: '2026-09-23-git-trail-crates-io',
    title: 'trailをcrates.ioに公開しました',
    platform: 'Development log',
    date: '2026-09-23',
    body: [
      'Gitのworktreeの開発履歴を再構成するCLI「trail」を、Rustのパッケージレジストリであるcrates.ioに公開しました。「trail」という名前はすでに使われていたので、クレート名は「git-trail」にしています。インストール後のコマンド名は trail のままです。',
      'Rustが入っていれば、cargo install git-trail の1行でインストールできます。初めてのクレート公開でした。',
      'これからは、AIと組み合わせて使える機能も追加していきたいと考えています。',
    ],
    url: 'https://crates.io/crates/git-trail',
    linkLabel: 'crates.ioでgit-trailを見る',
  },
  {
    id: '2026-09-23-development-works',
    title: 'Tadori、Wryte、trailを作りました',
    platform: 'Development log',
    date: '2026-09-23',
    body: [
      'sta.のあとも、いくつか開発を進めています。ポートフォリオのDevelopmentにも追加しました。',
      'Tadoriは、技術書・ビジネス書を「順番」と「できるようになること」でつなぐ学習ロードマップのモバイルアプリです。Expo（React Native）とExpo Routerで、MVPを開発しています。',
      'Wryteは、技術知識を書く・確かめる・整える・公開するための技術執筆・知識共有サービスです。フロントエンドはReactとVite、バックエンドはPython（FastAPI）とPostgreSQLで作っています。',
      'trailは、Gitのworktreeの開発履歴を時系列のチェックポイントとして再構成する、ローカル完結のCLIです。Rustで実装し、MITライセンスでGitHubに公開しました。',
    ],
    url: 'https://github.com/h-kurashina/trail',
    linkLabel: 'GitHubでtrailを見る',
  },
  {
    id: '2026-09-22-rust-developer-jp',
    title: 'Rust Developer JPに参加することになりました',
    platform: 'Community',
    date: '2026-09-22',
    body: [
      'プログラミング言語Rustのコミュニティ、Rust Developer JPに参加することになりました。',
      'RustのOSS活動に関わりたいと考えていたので、その一歩になります。最近はRustでCLIツール「trail」も作ったところなので、コミュニティの中でさらにRustを学んでいきたいです。',
    ],
  },
  {
    id: '2026-09-21-sta',
    title: '学生向けドキュメント整理アプリ「sta.」を作りました',
    platform: 'Development log',
    date: '2026-09-21',
    body: [
      '科目を選んでから撮る、学生向けのiOSドキュメント整理アプリ「sta.」を作りました。スキャンした資料を科目ごとに保存し、閲覧中も科目を切り替えられます。SwiftUIとVisionKitを使い、データは端末内に保存します。',
      '制作の目安は約66分。ローカルのプロジェクトフォルダ作成が9月20日22:58:12、アプリとブランド素材を追加したコミットが9月21日0:04:10で、その間は65分58秒でした。これは記録上の経過時間で、企画や休憩を含む実作業時間を計測したものではありません。',
      'ロゴも用意し、ソースコードはMITライセンスでGitHubに公開しました。ポートフォリオのDevelopmentからも見られます。',
    ],
    url: 'https://github.com/h-kurashina/sta.',
    linkLabel: 'GitHubでsta.を見る',
  },
  {
    id: '2026-09-20-portfolio',
    title: 'ポートフォリオを作成しました',
    platform: 'Development log',
    date: '2026-09-20',
    body: [
      'ReactとTypeScriptで、自分のポートフォリオを作成しました。プロフィール、開発した作品、発信活動、読んだ本をまとめる場所にしていきます。',
      '今日はホームとPersonalページを中心に制作。写真や経歴、使用技術を掲載し、各ページのテーマカラーやアイコン、hover時のアニメーションも整えました。スマートフォンでの表示確認と、Playwrightによるテストも追加しています。',
      'ソースコードはGitHubでMITライセンスとして公開しました。作品や記事、本の記録は、これから少しずつ追加していく予定です。',
    ],
    url: 'https://github.com/h-kurashina/portfolio',
    linkLabel: 'GitHubでソースコードを見る',
  },
]
export const languages = ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust']
export const fields = ['Webアプリ', 'インフラ', 'セキュリティ', 'ツール・自動化']

export function filterWorks(works: DevelopmentWork[], language: string, field: string) {
  return works.filter(work => (!language || work.languages.includes(language)) && (!field || work.fields.includes(field)))
}
