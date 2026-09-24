export type Project = {
  id: string
  number: string
  title: string
  category: string
  description: string
  imageUrl: string
  projectUrl?: string
  githubUrl?: string
  technologies: string[]
  published: boolean
}

export type Contribution = {
  id: string
  repository: string
  pullRequestUrl: string
  title: string
  description: string
  status: 'open' | 'merged' | 'closed'
  date: string
  languages: string[]
}
