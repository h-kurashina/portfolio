import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'personal-portfolio', number: '01', title: 'Personal Portfolio',
    category: 'Profile & Career',
    description: '自分のプロフィールと、これまでの経歴について。',
    imageUrl: '/images/icons/personal.svg', projectUrl: '/personal', technologies: [], published: true,
  },
  {
    id: 'development', number: '02', title: 'Development',
    category: 'Selected Works',
    description: '自分が開発した作品やサービスについて。',
    imageUrl: '/images/icons/development.svg', projectUrl: '/development', technologies: ['React', 'TypeScript'], published: true,
  },
  {
    id: 'case-studies', number: '03', title: 'Case Studies',
    category: 'Security Research',
    description: '許可された環境で脆弱性を探し、直すまでの記録。',
    imageUrl: '/images/icons/case-studies.svg', projectUrl: '/case-studies', technologies: [], published: true,
  },
  {
    id: 'books', number: '04', title: 'Books',
    category: 'Reading & Recommendations',
    description: '自分が読んだ本と、おすすめしたい本。',
    imageUrl: '/images/icons/books.svg', projectUrl: '/books', technologies: [], published: true,
  },
  {
    id: 'open-source', number: '05', title: 'Open Source',
    category: 'Contributions',
    description: 'ほかのリポジトリへの貢献について。',
    imageUrl: '/images/icons/open-source.svg', projectUrl: '/open-source', technologies: [], published: true,
  },
]
