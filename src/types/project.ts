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
