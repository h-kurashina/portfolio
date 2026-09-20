import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProjectsPage } from './pages/ProjectsPage'
import { SectionPage } from './pages/SectionPage'
import './styles.css'
import { currentPath } from './paths'

const pathname = currentPath()

createRoot(document.getElementById('root')!).render(
  <StrictMode>{pathname === '/' ? <ProjectsPage /> : <SectionPage pathname={pathname} />}</StrictMode>,
)
