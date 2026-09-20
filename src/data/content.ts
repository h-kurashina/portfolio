export type DevelopmentWork = {
  id: string
  title: string
  description: string
  languages: string[]
  fields: string[]
  url?: string
}

export type Book = {
  id: string
  title: string
  author: string
  review: string
  read: boolean
  recommended: boolean
  url?: string
}

export type Publication = {
  id: string
  title: string
  platform: string
  date: string
  url: string
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
  ],
  languages: ['TypeScript', 'Python', 'Go', 'Rust'],
  frameworks: ['React'],
  security: 'Burp Suiteを用いたWebペネトレーションテストの経験があります。主な専門領域はソフトウェアエンジニアリングです。',
  interests: ['Rust / OSS', '低レイヤー', 'インフラ', '競技プログラミング'],
  outlook: 'これからはRustのOSS活動に参加したいと考えています。低レイヤーやインフラの分野を学び、競技プログラミングにも挑戦したいです。開発者や学生起業家など、さまざまな人との交流も広げていきたいと思っています。',
  hobby: 'チェス',
  email: 'h.kurashina49@gmail.com',
  githubUrl: 'https://github.com/h-kurashina',
  photo: {
    src: '/images/profile/h-kurashina.jpg',
    alt: 'ライトアップされた水辺でのh.kurashina',
    width: 1108,
    height: 1477,
  },
}
export const developmentWorks: DevelopmentWork[] = []
export const books: Book[] = []
export const publications: Publication[] = []
export const languages = ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust']
export const fields = ['Webアプリ', 'インフラ', 'セキュリティ', 'ツール・自動化']

export function filterWorks(works: DevelopmentWork[], language: string, field: string) {
  return works.filter(work => (!language || work.languages.includes(language)) && (!field || work.fields.includes(field)))
}
