import { useState } from 'react'
import { ChevronDown, Moon, SunMedium, User, PanelLeft, LayoutDashboard, Workflow, Shapes, History, BarChart3, Settings as SettingsIcon, Cpu } from 'lucide-react'

const models = [
  'GPT-OSS-120B',
  'LLaMA 3.1 70B',
  'Mixtral 8x7B',
  'Gemma 7B',
]

export default function Navbar({ activeTab, onTabChange, theme, onToggleSidebar, onToggleRightbar, onThemeToggle, selectedModel, onModelChange }) {
  const [openModel, setOpenModel] = useState(false)

  const tabs = [
    { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { key: 'planner', label: 'Execution Planner', icon: Workflow },
    { key: 'templates', label: 'Templates', icon: Shapes },
    { key: 'history', label: 'History', icon: History },
    { key: 'analytics', label: 'Analytics', icon: BarChart3 },
    { key: 'settings', label: 'Settings', icon: SettingsIcon },
  ]

  return (
    <div className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-[#0b0f17]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Left: Brand + sidebar toggle */}
          <div className="flex items-center gap-3">
            <button onClick={onToggleSidebar} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80">
              <PanelLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 via-purple-500 to-amber-400 shadow-lg shadow-indigo-500/20 flex items-center justify-center">
                <Cpu className="h-5 w-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="text-white font-semibold tracking-tight">FlowGen AI</div>
                <div className="text-xs text-white/60 -mt-0.5">Transform technical tasks into execution plans</div>
              </div>
            </div>
          </div>

          {/* Center: Tabs */}
          <div className="hidden md:flex items-center gap-1">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => onTabChange(key)}
                className={`px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors border ${activeTab === key ? 'bg-white/10 text-white border-white/10' : 'text-white/70 hover:text-white hover:bg-white/5 border-transparent'}`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Right: Model selector, theme, avatar, right panel toggle */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setOpenModel(v => !v)}
                className="h-9 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 flex items-center gap-2"
              >
                <span className="hidden sm:inline">{selectedModel}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {openModel && (
                <div className="absolute right-0 mt-2 w-56 rounded-lg bg-[#0b0f17]/95 backdrop-blur-xl border border-white/10 shadow-xl p-1">
                  {models.map(m => (
                    <button
                      key={m}
                      onClick={() => { onModelChange(m); setOpenModel(false) }}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm ${m === selectedModel ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={onThemeToggle} className="h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/80">
              {theme === 'dark' ? <Moon className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
            </button>
            <button onClick={onToggleRightbar} className="h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/80">
              <History className="h-4 w-4" />
            </button>
            <button className="h-9 w-9 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20 flex items-center justify-center">
              <User className="h-4 w-4 text-white/90" />
            </button>
          </div>
        </div>

        {/* Mobile tabs */}
        <div className="md:hidden pb-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {tabs.map(({ key, label }) => (
            <button key={key} onClick={() => onTabChange(key)} className={`px-3 py-1.5 rounded-md text-xs border ${activeTab === key ? 'bg-white/10 text-white border-white/10' : 'text-white/70 hover:text-white hover:bg-white/5 border-transparent'}`}>
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
