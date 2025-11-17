export default function CaseStudies() {
  const cases = [
    {
      logo: 'AeroPay',
      stat: '+312% ROAS',
      text: 'Scaled paid search and CRO to triple return within 60 days.'
    },
    {
      logo: 'NovaFit',
      stat: 'x4 Leads',
      text: 'Launched full-funnel Meta + TikTok creative testing program.'
    },
    {
      logo: 'BrightHR',
      stat: '+178% CR',
      text: 'Redesigned onboarding and optimized lead flows end-to-end.'
    }
  ]

  return (
    <section id="case-studies" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Proven growth stories</h2>
          <p className="mt-3 text-gray-600">A snapshot of recent wins we engineered with data-driven creativity.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.logo} className="rounded-2xl border border-gray-200 p-6 bg-white/70 backdrop-blur hover:shadow-lg transition">
              <div className="flex items-center justify-between">
                <p className="font-extrabold">{c.logo}</p>
                <span className="text-sm inline-flex items-center rounded-full bg-gray-900 text-white px-3 py-1">{c.stat}</span>
              </div>
              <p className="text-gray-600 text-sm mt-4">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
