import { Shapes, Search, ChevronRight } from 'lucide-react'

const data = [
  { icon: '🌐', title: 'REST API', desc: 'Secure API with auth, rate limiting, and observability.' },
  { icon: '📊', title: 'Data Pipeline', desc: 'Ingest, clean, analyze, and visualize datasets.' },
  { icon: '🤖', title: 'ML Deployment', desc: 'Serve models with batch + realtime and monitoring.' },
  { icon: '🔄', title: 'CI/CD', desc: 'Automated tests, builds, and preview environments.' },
  { icon: '🕷️', title: 'Web Scraper', desc: 'Resilient scraper with politeness and retries.' },
]

export default function Templates({ onUse }) {
  return (
    <div className="pt-20 px-4 lg:px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-4 text-white/80"><Shapes className="h-4 w-4"/> Templates</div>
      <div className="mb-4">
        <div className="relative">
          <input placeholder="Search templates" className="w-full h-10 rounded-lg bg-white/5 border border-white/10 text-white px-3 pr-10" />
          <Search className="h-4 w-4 text-white/40 absolute right-3 top-1/2 -translate-y-1/2"/>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((t) => (
          <div key={t.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
            <div className="text-3xl">{t.icon}</div>
            <div className="mt-2 text-white font-medium">{t.title}</div>
            <div className="text-sm text-white/70">{t.desc}</div>
            <button onClick={()=> onUse && onUse(t)} className="mt-3 h-9 px-3 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-400 text-white text-sm flex items-center gap-2">Use this template <ChevronRight className="h-4 w-4"/></button>
          </div>
        ))}
      </div>
    </div>
  )
}
