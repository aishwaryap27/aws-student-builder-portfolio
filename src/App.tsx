import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ExplorationProvider } from './context/ExplorationContext'
import { Navbar } from './components/navigation/Navbar'
import { Footer } from './components/navigation/Footer'
import { TerminalModal } from './components/terminal/TerminalModal'
import { BadgeDrawer } from './components/achievements/BadgeDrawer'
import { BadgeNotificationModal } from './components/achievements/BadgeNotificationModal'
import { HomePage } from './pages/HomePage'
import { IdentityPage } from './pages/IdentityPage'
import { SkillsPage } from './pages/SkillsPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { AchievementsPage } from './pages/AchievementsPage'
import { JourneyPage } from './pages/JourneyPage'
import { ConnectPage } from './pages/ConnectPage'

// Auto scroll to top on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function MainLayout() {
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [badgesOpen, setBadgesOpen] = useState(false)

  // Global Ctrl + K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setTerminalOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-[#060913] text-[#f8fafc] flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-300">
      <ScrollToTop />
      
      {/* Top Navbar */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenBadges={() => setBadgesOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenTerminal={() => setTerminalOpen(true)}
                onOpenBadges={() => setBadgesOpen(true)}
              />
            }
          />
          <Route path="/identity" element={<IdentityPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route
            path="*"
            element={
              <HomePage
                onOpenTerminal={() => setTerminalOpen(true)}
                onOpenBadges={() => setBadgesOpen(true)}
              />
            }
          />
        </Routes>
      </div>

      {/* Global Modals & Notifications */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
      <BadgeDrawer
        isOpen={badgesOpen}
        onClose={() => setBadgesOpen(false)}
      />
      <BadgeNotificationModal />

      {/* System Status Footer */}
      <Footer
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenBadges={() => setBadgesOpen(true)}
      />
    </div>
  )
}

export default function App() {
  return (
    <ExplorationProvider>
      <Router>
        <MainLayout />
      </Router>
    </ExplorationProvider>
  )
}
