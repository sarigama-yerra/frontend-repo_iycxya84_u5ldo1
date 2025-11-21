import { useState } from 'react'
import { Play, Code2, BadgeCheck, Loader2, Info, Workflow, LayoutTemplate } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const exampleTemplates = [
  { key: 'rest', label: 'Build REST API', icon: '🌐', text: 'Build a REST API with auth and logging using FastAPI, JWT, and structured logging. Include rate limiting and OpenAPI docs.' },
  { key: 'data', label: 'Data Analysis Pipeline', icon: '📊', text: 'Design a data analysis pipeline: ingest CSVs, clean with pandas, analyze, and generate charts with Plotly. Add a CLI entrypoint.' },
  { key: 'ml', label: 'ML Model Deployment', icon: '🤖', text: 'Deploy an ML model with FastAPI and Docker. Include batch and realtime inference, feature validation, and monitoring hooks.' },
  { key: 'cicd', label: 'CI/CD Pipeline', icon: '🔄', text: 'Create a CI/CD pipeline for a monorepo with caching, parallel jobs, and preview environments. Include tests and linting.' },
  { key: 'scrape', label: 'Web Scraping System', icon: '🕷️', text: 'Build a resilient web scraping system with rotating proxies, politeness, structured storage, and retry/backoff logic.' },
]

export default function Planner() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const useTemplate = (t) => setInput(t.text)

  const generatePlan = async (type='plan') => {
    setLoading(true)
    // Simulate streaming by chunking a demo response
    const demo = {
      badges: ['Task Breakdown','Code Included','Best Practices'],
      steps: [
        { title: 'Scope & Assumptions', body: 'Define objectives, constraints, and success metrics.' },
        { title: 'Architecture', body: 'High-level components, services, and data flow.' },
        { title: 'Implementation', body: 'Step-by-step tasks with checkpoints.' },
      ],
      code: `# Example snippet\nfrom fastapi import FastAPI\napp = FastAPI()\n\n@app.get('/')\nasync def root():\n    return {'message': 'Hello from FlowGen AI'}`,
      tips: ['Add observability from day one','Write idempotent scripts','Prefer declarative configs'],
      visuals: ['[Client] -> [API] -> [Worker] -> [DB]'],
    }

    // Fake delay
    await new Promise(r => setTimeout(r, 900))
    setResponse(demo)
    setLoading(false)
  }

  return (
    <div className="pt-20 pb-10 px-4 lg:px-6 max-w-7xl mx-auto">
      {/* Hero with Spline */}
      <div className="relative h-56 rounded-2xl overflow-hidden border border-white/10 bg-white/5 mb-6">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-white">Execution Plan Generator</h1>
            <p className="text-white/70 text-sm">Describe your technical task and get a structured, step-by-step plan with code.</p>
          </div>
        </div>
      </div>

      {/* Input panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-4">
          <textarea
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            rows={8}
            placeholder="Describe your technical task (e.g., ‘Build a REST API with auth and logging’)..."
            className="w-full rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-white/40 p-4 focus:outline-none focus:ring-2 focus:ring-white/20"
          />

          <div className="mt-3 flex flex-col sm:flex-row gap-2 items-start sm:items-center">
            <div className="flex items-center gap-2 flex-1">
              <div className="relative">
                <select className="appearance-none h-10 pl-3 pr-8 rounded-lg bg-black/30 border border-white/10 text-white text-sm">
                  {exampleTemplates.map(t => <option key={t.key}>{`${t.icon} ${t.label}`}</option>)}
                </select>
                <LayoutTemplate className="h-4 w-4 text-white/50 absolute right-2 top-1/2 -translate-y-1/2" />
              </div>
              <button onClick={()=> {
                const t = exampleTemplates[0]; setInput(t.text)
              }} className="h-10 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-sm">Use Template</button>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={()=> generatePlan('plan')} disabled={loading} className="h-10 px-4 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-400 text-white text-sm font-medium shadow hover:brightness-110 disabled:opacity-50 flex items-center gap-2">
                {loading ? <Loader2 className="h-4 w-4 animate-spin"/> : <Play className="h-4 w-4"/>}
                Generate Execution Steps
              </button>
              <button onClick={()=> generatePlan('code')} disabled={loading} className="h-10 px-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white/90 text-sm flex items-center gap-2">
                <Code2 className="h-4 w-4"/> Generate Code Only
              </button>
            </div>
          </div>
        </div>

        {/* Stats widget */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-white">Tokens & Cost</div>
            <BadgeCheck className="h-4 w-4 text-emerald-400"/>
          </div>
          <div className="text-xs text-white/60">Last response</div>
          <div className="mt-1 w-full h-2 rounded bg-white/10 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-400" style={{ width: '42%' }} />
          </div>
          <div className="mt-2 text-[11px] text-white/60">~ 1.2K tokens • $0.003 est.</div>
          <div className="mt-3 text-xs text-white/60">Session total</div>
          <div className="mt-1 w-full h-2 rounded bg-white/10 overflow-hidden">
            <div className="h-full bg-white/40" style={{ width: '18%' }} />
          </div>
          <div className="mt-2 text-[11px] text-white/60">~ 4.8K tokens • $0.012 est.</div>
          <div className="mt-3 text-[11px] text-white/50 flex items-start gap-1"><Info className="h-3.5 w-3.5"/> Estimates based on selected model pricing.</div>
        </div>
      </div>

      {/* Streaming Response */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 mb-3">
              {['Task Breakdown','Code Included','Best Practices'].map(b => (
                <span key={b} className="px-2 py-1 rounded-md text-[11px] bg-white/10 border border-white/10 text-white/80">{b}</span>
              ))}
            </div>
            {!response && (
              <div className="text-white/60 text-sm">Your plan will appear here. Click Generate to start streaming.</div>
            )}
            {response && (
              <div className="space-y-4">
                <ol className="list-decimal list-inside space-y-2">
                  {response.steps.map((s, i) => (
                    <li key={i} className="text-white">
                      <div className="font-medium">{s.title}</div>
                      <div className="text-white/70 text-sm">{s.body}</div>
                    </li>
                  ))}
                </ol>
                <pre className="rounded-lg bg-black/60 border border-white/10 p-3 text-[12px] text-white overflow-auto"><code>{response.code}</code></pre>
                <div className="rounded-lg border border-indigo-400/30 bg-indigo-500/10 p-3">
                  <div className="text-sm font-medium text-white">Best practices</div>
                  <ul className="list-disc list-inside text-white/80 text-sm">
                    {response.tips.map((t, i)=> <li key={i}>{t}</li>)}
                  </ul>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-sm font-medium text-white">Visual</div>
                  <div className="font-mono text-[12px] text-white/80">{response.visuals[0]}</div>
                </div>
                {/* Feedback */}
                <div className="pt-2 border-t border-white/10 flex items-center gap-2">
                  <button className="h-8 px-3 rounded bg-emerald-500/20 text-emerald-100 border border-emerald-400/20 text-sm">Thumbs up</button>
                  <button className="h-8 px-3 rounded bg-rose-500/20 text-rose-100 border border-rose-400/20 text-sm">Thumbs down</button>
                  <input placeholder="Tell us what could be improved" className="flex-1 h-8 rounded bg-black/30 border border-white/10 text-white px-3 text-sm" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-medium text-white mb-2">Session Stats</div>
            <div className="text-[12px] text-white/70 space-y-1">
              <div>Model: <span className="text-white">Mixtral 8x7B</span></div>
              <div>Responses rated: 12</div>
              <div>Positive: 83%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
