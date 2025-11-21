import { BarChart3 } from 'lucide-react'

export default function Analytics() {
  return (
    <div className="pt-20 px-4 lg:px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-4 text-white/80"><BarChart3 className="h-4 w-4"/> Analytics</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {[{label:'Total queries', value:'243'},{label:'Avg tokens / query', value:'1.1K'},{label:'Avg rating', value:'4.3/5'}].map((c)=> (
          <div key={c.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm text-white/60">{c.label}</div>
            <div className="text-2xl text-white font-semibold">{c.value}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 h-64">
          <div className="text-sm text-white/60 mb-2">Tokens over time</div>
          <div className="h-full w-full rounded-lg bg-gradient-to-b from-white/10 to-transparent" />
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 h-64">
          <div className="text-sm text-white/60 mb-2">Model usage breakdown</div>
          <div className="h-full w-full rounded-lg bg-gradient-to-b from-white/10 to-transparent" />
        </div>
      </div>
    </div>
  )
}
