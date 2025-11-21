import { History, FileDown, ArrowUpRight } from 'lucide-react'

const rows = [
  { name: 'Build a REST API with auth and logging', date: '2025-11-18', model: 'Mixtral 8x7B', tokens: 1280 },
  { name: 'CI/CD for monorepo with caching', date: '2025-11-17', model: 'LLaMA 3.1 70B', tokens: 980 },
  { name: 'Deploy XGBoost model with FastAPI + Docker', date: '2025-11-15', model: 'Gemma 7B', tokens: 1520 },
]

export default function HistoryPage() {
  return (
    <div className="pt-20 px-4 lg:px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-4 text-white/80"><History className="h-4 w-4"/> History</div>
      <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
        <div className="grid grid-cols-12 text-xs text-white/60 px-4 py-2 border-b border-white/10">
          <div className="col-span-5">Name</div>
          <div className="col-span-2">Date</div>
          <div className="col-span-3">Model</div>
          <div className="col-span-2 text-right">Tokens</div>
        </div>
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-12 items-center px-4 py-3 border-b border-white/10 text-sm text-white/80 hover:bg-white/5">
            <div className="col-span-5">{r.name}</div>
            <div className="col-span-2">{r.date}</div>
            <div className="col-span-3">{r.model}</div>
            <div className="col-span-2 flex items-center gap-2 justify-end">
              <span>{r.tokens}</span>
              <button className="h-8 w-8 rounded bg-white/5 border border-white/10 flex items-center justify-center"><FileDown className="h-4 w-4"/></button>
              <button className="h-8 w-8 rounded bg-white/5 border border-white/10 flex items-center justify-center"><ArrowUpRight className="h-4 w-4"/></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
