import { HashRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import { useDarkMode } from './hooks/useDarkMode'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import CareerPage from './pages/CareerPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import WritingPage from './pages/WritingPage'

export default function App() {
  const [dark, toggleDark] = useDarkMode()

  return (
    <HashRouter>
      <Nav dark={dark} onToggleDark={toggleDark} />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/career"   element={<CareerPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/writing"  element={<WritingPage />} />
        <Route path="/contact"  element={<ContactPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}
