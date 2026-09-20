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
    id: 'daily-notes', number: '03', title: 'Daily Notes',
    category: 'Writing & Sharing',
    description: '記事や投稿など、自分の発信活動について。',
    imageUrl: '/images/icons/daily-notes.svg', projectUrl: '/daily-notes', technologies: [], published: true,
  },
  {
    id: 'books', number: '04', title: 'Books',
    category: 'Reading & Recommendations',
    description: '自分が読んだ本と、おすすめしたい本。',
    imageUrl: '/images/icons/books.svg', projectUrl: '/books', technologies: [], published: true,
  },
]
