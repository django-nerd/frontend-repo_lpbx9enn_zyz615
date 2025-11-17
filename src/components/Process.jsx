export default function Process(){
  const steps = [
    { k: '01', t: 'Audit & Strategy', d: 'We analyze your data, audience, and positioning to craft a growth plan.'},
    { k: '02', t: 'Creative Sprint', d: 'Rapid concepting and production across static, video, and UGC.'},
    { k: '03', t: 'Launch & Learn', d: 'Deploy across channels with clean tracking and clear KPIs.'},
    { k: '04', t: 'Scale What Works', d: 'Double down on winners, iterate weekly, and keep compounding.'},
  ]

  return (
    <section className="bg-gray-950 text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">A process built to convert</h2>
          <p className="mt-3 text-white/70">Speed without the chaos. Rigor without the bureaucracy.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map(s => (
            <div key={s.k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-white/60">{s.k}</p>
              <h3 className="mt-2 text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-white/70">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
