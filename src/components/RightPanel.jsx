import { useState } from 'react'
import { Search, FileDown, Clock, Sparkles } from 'lucide-react'

export default function RightPanel({ open }) {
  const [query, setQuery] = useState('')
  const items = [
    { id: 1, title: 'Build a REST API with auth and logging', time: '2h ago', model: 'Mixtral 8x7B' },
    { id: 2, title: 'CI/CD pipeline for monorepo with caching', time: '1d ago', model: 'LLaMA 3.1 70B' },
    { id: 3, title: 'Deploy XGBoost model with FastAPI + Docker', time: '3d ago', model: 'Gemma 7B' },
  ]

  const filtered = items.filter(i => i.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <aside className={`fixed right-0 top-16 bottom-0 z-30 w-96 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} bg-[#0b0f17]/70 backdrop-blur-xl border-l border-white/10 overflow-y-auto`}> 
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="h-4 w-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input value={query} onChange={(e)=> setQuery(e.target.value)} placeholder="Search history…" className="w-full h-10 pl-9 pr-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder:text-white/40" />
          </div>
        </div>

        <div className="space-y-2">
          {filtered.map(item => (
            <div key={item.id} className="rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition-colors">
              <div className="text-sm text-white/90 line-clamp-2">{item.title}</div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-white/50">
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>{item.model}</span>
                  <button className="px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 flex items-center gap-1"><FileDown className="h-3.5 w-3.5"/> Export</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-amber-400/10 p-4">
          <div className="flex items-center gap-2 text-white/80 mb-2"><Sparkles className="h-4 w-4"/> Quick Tip</div>
          <p className="text-xs text-white/70">Use templates to quickly seed the planner with best-practice setups. You can customize the plan after generation.</p>
        </div>
      </div>
    </aside>
  )
}
