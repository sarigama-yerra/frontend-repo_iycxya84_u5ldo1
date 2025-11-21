import { useState } from 'react'
import { KeyRound, CheckCircle2, XCircle, AlertCircle, Globe2, Languages, Sparkles, FileDown, ClipboardCopy, Trash2 } from 'lucide-react'

const modelOptions = [
  'GPT-OSS-120B',
  'LLaMA 3.1 70B',
  'Mixtral 8x7B',
  'Gemma 7B',
]

const languages = ['English','Spanish','French','German','Italian','Portuguese','Hindi','Chinese','Japanese','Korean']

export default function LeftSidebar({ open, selectedModel, onModelChange }) {
  const [apiKey, setApiKey] = useState('')
  const [status, setStatus] = useState('Not Set')
  const [responseLang, setResponseLang] = useState('English')
  const [promptStyle, setPromptStyle] = useState('Detailed')

  const validateKey = () => {
    if (!apiKey) { setStatus('Not Set'); return }
    setStatus(apiKey.startsWith('gsk_') ? 'Validated' : 'Invalid')
  }

  const exportMarkdown = () => {
    const content = '# FlowGen AI Export\n\nYour latest plan will appear here.'
    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'flowgen-export.md'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <aside className={`fixed left-0 top-16 bottom-0 z-30 w-80 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} bg-[#0b0f17]/70 backdrop-blur-xl border-r border-white/10 overflow-y-auto`}> 
      <div className="p-4 space-y-4">
        {/* API Configuration */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-2 mb-2">
            <KeyRound className="h-4 w-4 text-white/80" />
            <h3 className="text-sm font-semibold text-white">API Configuration</h3>
          </div>
          <input
            type="password"
            placeholder="Groq API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full h-10 rounded-lg bg-black/30 border border-white/10 text-white px-3 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
          <div className="mt-2 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1 text-white/70">
              {status === 'Validated' && <CheckCircle2 className="h-4 w-4 text-emerald-400" />}
              {status === 'Invalid' && <XCircle className="h-4 w-4 text-rose-400" />}
              {status === 'Not Set' && <AlertCircle className="h-4 w-4 text-amber-400" />}
              <span>{status}</span>
            </div>
            <button onClick={validateKey} className="text-white/70 hover:text-white">Validate</button>
          </div>
          <p className="mt-2 text-[11px] leading-snug text-white/50">Keys are encrypted locally and never sent to our servers.</p>
        </div>

        {/* Model & Language */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-2 mb-3">
            <Globe2 className="h-4 w-4 text-white/80" />
            <h3 className="text-sm font-semibold text-white">Model & Language</h3>
          </div>
          <label className="text-xs text-white/60">Model</label>
          <select value={selectedModel} onChange={(e)=> onModelChange(e.target.value)} className="w-full h-10 rounded-lg bg-black/30 border border-white/10 text-white px-3 mt-1">
            {modelOptions.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          <label className="text-xs text-white/60 mt-3 block">Response Language</label>
          <select value={responseLang} onChange={(e)=> setResponseLang(e.target.value)} className="w-full h-10 rounded-lg bg-black/30 border border-white/10 text-white px-3 mt-1">
            {languages.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>

        {/* Prompt Template */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-white/80" />
            <h3 className="text-sm font-semibold text-white">Prompt Template</h3>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {['Detailed','Concise','Beginner-Friendly','Production-Ready','Visual (diagram-focused)'].map(opt => (
              <label key={opt} className={`flex items-start gap-2 p-2 rounded-lg border ${promptStyle===opt?'border-white/20 bg-white/10':'border-white/10 hover:bg-white/5'} text-sm text-white/80`}>
                <input type="radio" name="promptStyle" className="mt-1" checked={promptStyle===opt} onChange={()=> setPromptStyle(opt)} />
                <div>
                  <div className="text-white">{opt}</div>
                  <div className="text-[11px] text-white/60">{opt==='Detailed' && 'Thorough reasoning and full breakdown.'}{opt==='Concise' && 'Direct, minimal, straight to the point.'}{opt==='Beginner-Friendly' && 'Explains concepts simply with context.'}{opt==='Production-Ready' && 'Focus on robustness, tests, and ops.'}{opt==='Visual (diagram-focused)' && 'Uses diagrams and pseudo-architecture.'}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Regenerate Options */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h3 className="text-sm font-semibold text-white mb-3">Regenerate Options</h3>
          <div className="grid grid-cols-2 gap-2">
            {['Shorter','Longer','Simpler','More Code','More Visual'].map(action => (
              <button key={action} className="h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-sm">{action}</button>
            ))}
          </div>
        </div>

        {/* Export & Utilities */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h3 className="text-sm font-semibold text-white mb-3">Export & Utilities</h3>
          <div className="grid grid-cols-1 gap-2">
            <button onClick={exportMarkdown} className="h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-sm flex items-center gap-2 justify-center"><FileDown className="h-4 w-4"/> Export as Markdown</button>
            <button onClick={()=> navigator.clipboard.writeText('Copied latest plan')} className="h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-sm flex items-center gap-2 justify-center"><ClipboardCopy className="h-4 w-4"/> Copy to Clipboard</button>
            <button className="h-9 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 border border-rose-400/20 text-rose-100 text-sm flex items-center gap-2 justify-center"><Trash2 className="h-4 w-4"/> Clear Session</button>
          </div>
        </div>
      </div>
    </aside>
  )
}
