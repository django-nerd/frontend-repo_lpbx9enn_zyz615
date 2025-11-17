export default function Testimonials(){
  const quotes = [
    {
      q: 'They helped us unlock a repeatable growth engine. CAC is down 38% and revenue is at an all-time high.',
      a: 'VP Growth, B2B SaaS'
    },
    {
      q: 'The creative testing framework changed everything. We finally know what moves the needle.',
      a: 'CMO, DTC Brand'
    },
    {
      q: 'Hands-down the most data-savvy and creative team we’ve worked with.',
      a: 'CEO, Fintech'
    }
  ]

  return (
    <section className="bg-gray-950 text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Brands that scale with us</h2>
          <p className="mt-3 text-white/70">Outcomes over optics. Here’s what our partners say.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {quotes.map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-white/90">“{t.q}”</p>
              <p className="mt-4 text-sm text-white/60">— {t.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
