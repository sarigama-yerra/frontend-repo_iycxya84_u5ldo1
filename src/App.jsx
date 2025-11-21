import { useState } from 'react'
import Navbar from './components/Navbar'
import LeftSidebar from './components/LeftSidebar'
import RightPanel from './components/RightPanel'
import Planner from './components/Planner'
import Templates from './components/Templates'
import HistoryPage from './components/HistoryPage'
import Analytics from './components/Analytics'
import Settings from './components/Settings'

function App() {
  const [activeTab, setActiveTab] = useState('planner')
  const [leftOpen, setLeftOpen] = useState(true)
  const [rightOpen, setRightOpen] = useState(true)
  const [theme, setTheme] = useState('dark')
  const [model, setModel] = useState('Mixtral 8x7B')

  const renderView = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="pt-20 px-4 lg:px-6 max-w-7xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
              Welcome to FlowGen AI. Use the planner to generate structured execution plans and code.
            </div>
          </div>
        )
      case 'templates':
        return <Templates onUse={() => setActiveTab('planner')} />
      case 'history':
        return <HistoryPage />
      case 'analytics':
        return <Analytics />
      case 'settings':
        return <Settings />
      case 'planner':
      default:
        return <Planner />
    }
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0b0f17]' : 'bg-white'} relative`}> 
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-amber-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-600/10 via-purple-600/10 to-amber-400/10 blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      {/* Top navigation */}
      <Navbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        theme={theme}
        onToggleSidebar={() => setLeftOpen(v => !v)}
        onToggleRightbar={() => setRightOpen(v => !v)}
        onThemeToggle={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
        selectedModel={model}
        onModelChange={setModel}
      />

      {/* Sidebars */}
      <LeftSidebar open={leftOpen} selectedModel={model} onModelChange={setModel} />
      <RightPanel open={rightOpen} />

      {/* Main content area with responsive gutters so fixed sidebars don’t overlap on desktop */}
      <main className={`relative transition-[padding] duration-300 pt-16 ${leftOpen ? 'lg:pl-80' : 'lg:pl-0'} ${rightOpen ? 'lg:pr-96' : 'lg:pr-0'}`}>
        {renderView()}
      </main>

      {/* Footer micro status bar (tokens/cost quick view on very bottom for large screens) */}
      <div className="hidden lg:flex fixed bottom-4 left-1/2 -translate-x-1/2 z-20">
        <div className="rounded-full px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md text-white/70 text-sm shadow">
          Model: {model} • Session tokens: 4.8K • Est. cost: $0.012
        </div>
      </div>
    </div>
  )
}

export default App
