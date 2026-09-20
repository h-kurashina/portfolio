import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProjectsPage } from './pages/ProjectsPage'
import { SectionPage } from './pages/SectionPage'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>{window.location.pathname === '/' ? <ProjectsPage /> : <SectionPage pathname={window.location.pathname.replace(/\/$/, '')} />}</StrictMode>,
)
