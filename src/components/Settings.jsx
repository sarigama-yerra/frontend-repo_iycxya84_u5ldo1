export default function Settings() {
  return (
    <div className="pt-20 px-4 lg:px-6 max-w-4xl mx-auto">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <h2 className="text-white text-lg font-semibold mb-4">Settings</h2>
        <div className="space-y-6">
          <section>
            <h3 className="text-white/80 font-medium mb-2">General</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-white/60">Language</label>
                <select className="w-full h-10 rounded-lg bg-black/30 border border-white/10 text-white px-3 mt-1">
                  {['English','Spanish','French','German'].map(l=> <option key={l}>{l}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs text-white/60">Default Model</label>
                <select className="w-full h-10 rounded-lg bg-black/30 border border-white/10 text-white px-3 mt-1">
                  {['GPT-OSS-120B','LLaMA 3.1 70B','Mixtral 8x7B','Gemma 7B'].map(l=> <option key={l}>{l}</option>)}
                </select>
              </div>
            </div>
          </section>
          <section>
            <h3 className="text-white/80 font-medium mb-2">Theme</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Royal Black','Indigo Nebula','Midnight Blue','Charcoal'].map(t => (
                <button key={t} className="h-16 rounded-xl bg-gradient-to-br from-[#0b0f17] to-[#121826] border border-white/10 text-white/80">{t}</button>
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-white/80 font-medium mb-2">Security</h3>
            <p className="text-sm text-white/60">API keys are stored locally in your browser and encrypted. You can clear them anytime.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
